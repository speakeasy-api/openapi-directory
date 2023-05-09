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
        Authorization: "hic",
        PatientAuthNotification: shared.PatientAuthNotification{
            Auth: &shared.PatientAuthNotificationAuth{
                AccessToken: sdk.String("nesciunt"),
                Patient: &shared.PatientDemographicResponse{
                    Address: &shared.PatientAddress{
                        District: sdk.String("culpa"),
                        Line: sdk.String("corrupti"),
                        Pincode: sdk.String("pariatur"),
                        State: sdk.String("totam"),
                    },
                    Gender: shared.PatientGenderEnumU,
                    ID: "<patient-id>@<consent-manager-id>",
                    Identifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumHealthID,
                            Value: "+919800083232",
                        },
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumMobile,
                            Value: "+919800083232",
                        },
                    },
                    Name: "Hina Patel",
                    YearOfBirth: 2000,
                },
                Status: shared.PatientAuthNotificationAuthStatusEnumDenied,
                TransactionID: "sed",
                Validity: &shared.AccessTokenValidity{
                    Expiry: types.MustTimeFromString("2022-08-09T14:55:41.766Z"),
                    Limit: 1,
                    Purpose: shared.PatientAuthPurposeEnumKycAndLink,
                    Requester: shared.PatientAuthRequester{
                        ID: "100005",
                        Type: shared.PatientAuthRequesterTypeEnumHiu,
                    },
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-04-17T04:31:41.347Z"),
        },
        XHipID: "ab",
        XHiuID: "iste",
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
        Authorization: "dolore",
        RequestBody: []byte("laborum"),
        XHipID: "sed",
        XHiuID: "in",
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
        Authorization: "commodi",
        PatientAuthConfirmResponse: shared.PatientAuthConfirmResponse{
            Auth: &shared.PatientAuthConfirmResponseAuth{
                AccessToken: sdk.String("quidem"),
                Patient: &shared.PatientDemographicResponse{
                    Address: &shared.PatientAddress{
                        District: sdk.String("explicabo"),
                        Line: sdk.String("voluptas"),
                        Pincode: sdk.String("unde"),
                        State: sdk.String("architecto"),
                    },
                    Gender: shared.PatientGenderEnumF,
                    ID: "<patient-id>@<consent-manager-id>",
                    Identifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumHealthID,
                            Value: "+919800083232",
                        },
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumMobile,
                            Value: "+919800083232",
                        },
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumHealthID,
                            Value: "+919800083232",
                        },
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumMobile,
                            Value: "+919800083232",
                        },
                    },
                    Name: "Hina Patel",
                    YearOfBirth: 2000,
                },
                Validity: &shared.AccessTokenValidity{
                    Expiry: types.MustTimeFromString("2021-01-15T21:52:35.790Z"),
                    Limit: 1,
                    Purpose: shared.PatientAuthPurposeEnumLink,
                    Requester: shared.PatientAuthRequester{
                        ID: "100005",
                        Type: shared.PatientAuthRequesterTypeEnumHip,
                    },
                },
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "eius",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "e3698f44-7f60-43e8-b445-e80ca55efd20",
            },
            Timestamp: types.MustTimeFromString("2022-03-29T06:16:27.485Z"),
        },
        XHipID: "veniam",
        XHiuID: "in",
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
        Authorization: "officiis",
        RequestBody: []byte("beatae"),
        XHipID: "laudantium",
        XHiuID: "exercitationem",
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
        Authorization: "praesentium",
        PatientAuthModeQueryResponse: shared.PatientAuthModeQueryResponse{
            Auth: &shared.PatientAuthModeQueryResponseAuth{
                Modes: []shared.AuthenticationModeEnum{
                    shared.AuthenticationModeEnumDirect,
                    shared.AuthenticationModeEnumDemographics,
                    shared.AuthenticationModeEnumDemographics,
                },
                Purpose: shared.PatientAuthPurposeEnumKyc,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "expedita",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "e3a5aa8e-4824-4d0a-b407-5088e5186206",
            },
            Timestamp: types.MustTimeFromString("2022-02-04T05:56:04.733Z"),
        },
        XHipID: "error",
        XHiuID: "consequatur",
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
        Authorization: "incidunt",
        RequestBody: []byte("reiciendis"),
        XHipID: "dolorem",
        XHiuID: "harum",
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
        Authorization: "dicta",
        PatientAuthInitResponse: shared.PatientAuthInitResponse{
            Auth: &shared.PatientAuthInitResponseAuth{
                Meta: &shared.AuthMeta{
                    Expiry: sdk.String("2019-12-30T12:01:55Z"),
                    Hint: sdk.String("architecto"),
                },
                Mode: shared.AuthenticationModeEnumDemographics,
                TransactionID: "labore",
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "atque",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "abf603a7-9f9d-4fe0-ab7d-a8a50ce187f8",
            },
            Timestamp: types.MustTimeFromString("2022-04-22T16:56:30.347Z"),
        },
        XHipID: "maxime",
        XHiuID: "et",
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
        Authorization: "esse",
        RequestBody: []byte("amet"),
        XHipID: "assumenda",
        XHiuID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
