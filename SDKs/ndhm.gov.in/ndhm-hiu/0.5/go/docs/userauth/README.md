# UserAuth

### Available Operations

* [PostV05UsersAuthNotifyJSON](#postv05usersauthnotifyjson) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthNotifyRaw](#postv05usersauthnotifyraw) - notification API in case of DIRECT mode of authentication by the CM
* [PostV05UsersAuthOnConfirmJSON](#postv05usersauthonconfirmjson) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnConfirmRaw](#postv05usersauthonconfirmraw) - callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
* [PostV05UsersAuthOnFetchModesJSON](#postv05usersauthonfetchmodesjson) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnFetchModesRaw](#postv05usersauthonfetchmodesraw) - Identification result for a consent-manager user-id
* [PostV05UsersAuthOnInitJSON](#postv05usersauthoninitjson) - Response to user authentication initialization from HIP
* [PostV05UsersAuthOnInitRaw](#postv05usersauthoninitraw) - Response to user authentication initialization from HIP

## PostV05UsersAuthNotifyJSON

This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserAuth.PostV05UsersAuthNotifyJSON(ctx, operations.PostV05UsersAuthNotifyJSONRequest{
        Authorization: "repudiandae",
        PatientAuthNotification: shared.PatientAuthNotification{
            Auth: &shared.PatientAuthNotificationAuth{
                AccessToken: sdk.String("dicta"),
                Patient: &shared.PatientDemographicResponse{
                    Address: &shared.PatientAddress{
                        District: sdk.String("accusantium"),
                        Line: sdk.String("beatae"),
                        Pincode: sdk.String("dolores"),
                        State: sdk.String("enim"),
                    },
                    Gender: shared.PatientGenderEnumF,
                    ID: "<patient-id>@<consent-manager-id>",
                    Identifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumHealthID.ToPointer(),
                            Value: sdk.String("+919800083232"),
                        },
                    },
                    Name: "Hina Patel",
                    YearOfBirth: 2000,
                },
                Status: shared.PatientAuthNotificationAuthStatusEnumDenied,
                TransactionID: "magnam",
                Validity: &shared.AccessTokenValidity{
                    Expiry: types.MustTimeFromString("2022-07-09T06:54:36.386Z"),
                    Limit: 1,
                    Purpose: shared.PatientAuthPurposeEnumKyc,
                    Requester: shared.PatientAuthRequester{
                        ID: "100005",
                        Type: shared.PatientAuthRequesterTypeEnumHiu,
                    },
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-02-09T03:10:10.926Z"),
        },
        XHipID: "adipisci",
        XHiuID: "eveniet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthNotifyRaw

This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The "auth.status" conveys whether the request was GRANTED or DENIED.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserAuth.PostV05UsersAuthNotifyRaw(ctx, operations.PostV05UsersAuthNotifyRawRequest{
        Authorization: "occaecati",
        RequestBody: []byte("consequuntur"),
        XHipID: "fugit",
        XHiuID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnConfirmJSON

This API is called by CM to confirm authentication of users.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserAuth.PostV05UsersAuthOnConfirmJSON(ctx, operations.PostV05UsersAuthOnConfirmJSONRequest{
        Authorization: "quis",
        PatientAuthConfirmResponse: shared.PatientAuthConfirmResponse{
            Auth: &shared.PatientAuthConfirmResponseAuth{
                AccessToken: sdk.String("reprehenderit"),
                Patient: &shared.PatientDemographicResponse{
                    Address: &shared.PatientAddress{
                        District: sdk.String("error"),
                        Line: sdk.String("illo"),
                        Pincode: sdk.String("corporis"),
                        State: sdk.String("quidem"),
                    },
                    Gender: shared.PatientGenderEnumU,
                    ID: "<patient-id>@<consent-manager-id>",
                    Identifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumHealthID.ToPointer(),
                            Value: sdk.String("+919800083232"),
                        },
                    },
                    Name: "Hina Patel",
                    YearOfBirth: 2000,
                },
                Validity: &shared.AccessTokenValidity{
                    Expiry: types.MustTimeFromString("2022-07-26T12:47:49.082Z"),
                    Limit: 1,
                    Purpose: shared.PatientAuthPurposeEnumLink,
                    Requester: shared.PatientAuthRequester{
                        ID: "100005",
                        Type: shared.PatientAuthRequesterTypeEnumHiu,
                    },
                },
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "molestiae",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "e2b6e3ab-8845-4f05-97a6-0ff2a54a31e9",
            },
            Timestamp: types.MustTimeFromString("2022-07-10T15:48:59.296Z"),
        },
        XHipID: "ex",
        XHiuID: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnConfirmRaw

This API is called by CM to confirm authentication of users.

  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserAuth.PostV05UsersAuthOnConfirmRaw(ctx, operations.PostV05UsersAuthOnConfirmRawRequest{
        Authorization: "culpa",
        RequestBody: []byte("adipisci"),
        XHipID: "debitis",
        XHiuID: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnFetchModesJSON

If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
Otherwise, error is raised for invalid requests or for non-existent id.
Note in addition to the "Authorization" header, one of the following headers must be specified
1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserAuth.PostV05UsersAuthOnFetchModesJSON(ctx, operations.PostV05UsersAuthOnFetchModesJSONRequest{
        Authorization: "eum",
        PatientAuthModeQueryResponse: shared.PatientAuthModeQueryResponse{
            Auth: &shared.PatientAuthModeQueryResponseAuth{
                Modes: []shared.AuthenticationModeEnum{
                    shared.AuthenticationModeEnumAadhaarOtp,
                    shared.AuthenticationModeEnumDirect,
                },
                Purpose: shared.PatientAuthPurposeEnumKyc,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "eum",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "f9251a5a-9da6-460f-b57b-faad4f9efc1b",
            },
            Timestamp: types.MustTimeFromString("2022-08-31T13:02:08.892Z"),
        },
        XHipID: "inventore",
        XHiuID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnFetchModesRaw

If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
Otherwise, error is raised for invalid requests or for non-existent id.
Note in addition to the "Authorization" header, one of the following headers must be specified
1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserAuth.PostV05UsersAuthOnFetchModesRaw(ctx, operations.PostV05UsersAuthOnFetchModesRawRequest{
        Authorization: "cumque",
        RequestBody: []byte("quae"),
        XHipID: "perferendis",
        XHiuID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnInitJSON

If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 

  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
      3. DEMOGRAPHICS - auth initiated with demographic verification
      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
  2. **meta.expiry** conveys the expiry time of the token and the authentication session
  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 
  4. **NOTE**, only KYC purpose is applicable for HIU




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. Patient id is invalid


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserAuth.PostV05UsersAuthOnInitJSON(ctx, operations.PostV05UsersAuthOnInitJSONRequest{
        Authorization: "aspernatur",
        PatientAuthInitResponse: shared.PatientAuthInitResponse{
            Auth: &shared.PatientAuthInitResponseAuth{
                Meta: &shared.AuthMeta{
                    Expiry: sdk.String("2019-12-30T12:01:55Z"),
                    Hint: sdk.String("eum"),
                },
                Mode: shared.AuthenticationModeEnumDirect,
                TransactionID: "rem",
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "impedit",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "2f615199-ebfd-40e9-be6c-632ca3aed011",
            },
            Timestamp: types.MustTimeFromString("2022-05-19T23:57:30.950Z"),
        },
        XHipID: "occaecati",
        XHiuID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnInitRaw

If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 

  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
      3. DEMOGRAPHICS - auth initiated with demographic verification
      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
  2. **meta.expiry** conveys the expiry time of the token and the authentication session
  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 
  4. **NOTE**, only KYC purpose is applicable for HIU




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. Patient id is invalid


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.UserAuth.PostV05UsersAuthOnInitRaw(ctx, operations.PostV05UsersAuthOnInitRawRequest{
        Authorization: "adipisci",
        RequestBody: []byte("quasi"),
        XHipID: "magni",
        XHiuID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
