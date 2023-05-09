# UserAuth

### Available Operations

* [PostV05UsersAuthConfirmJSON](#postv05usersauthconfirmjson) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthConfirmRaw](#postv05usersauthconfirmraw) - Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation
* [PostV05UsersAuthFetchModesJSON](#postv05usersauthfetchmodesjson) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthFetchModesRaw](#postv05usersauthfetchmodesraw) - Get a patient's authentication modes relevant to specified purpose
* [PostV05UsersAuthInitJSON](#postv05usersauthinitjson) - Initialize authentication from HIP
* [PostV05UsersAuthInitRaw](#postv05usersauthinitraw) - Initialize authentication from HIP
* [PostV05UsersAuthOnNotifyJSON](#postv05usersauthonnotifyjson) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
* [PostV05UsersAuthOnNotifyRaw](#postv05usersauthonnotifyraw) - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)

## PostV05UsersAuthConfirmJSON

This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
  1. demographic details are only required for  demographic auth as of now. 
  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
  3. demographic.identifier is optional, however maybe required if authentication so mandates. 
  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 


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
    res, err := s.UserAuth.PostV05UsersAuthConfirmJSON(ctx, operations.PostV05UsersAuthConfirmJSONRequest{
        Authorization: "exercitationem",
        PatientAuthConfirmRequest: shared.PatientAuthConfirmRequest{
            Credential: shared.PatientAuthConfirmRequestCredential{
                AuthCode: sdk.String("nobis"),
                Demographic: &shared.PatientDemographic{
                    DateOfBirth: "1972-02-29",
                    Gender: shared.PatientGenderEnumM,
                    Identifier: &shared.AuthConfirmIdentifier{
                        Type: shared.AuthConfirmIdentifierTypeEnumMobile,
                        Value: "+919800083232",
                    },
                    Name: "janki das",
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-09-14T08:30:37.763Z"),
            TransactionID: "reiciendis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthConfirmRaw

This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an "access token" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent
  1. demographic details are only required for  demographic auth as of now. 
  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.
  3. demographic.identifier is optional, however maybe required if authentication so mandates. 
  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. 


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
    res, err := s.UserAuth.PostV05UsersAuthConfirmRaw(ctx, operations.PostV05UsersAuthConfirmRawRequest{
        Authorization: "explicabo",
        RequestBody: []byte("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthFetchModesJSON

This API is meant for identify supported authentication modes for a patient given a specific purpose


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
    res, err := s.UserAuth.PostV05UsersAuthFetchModesJSON(ctx, operations.PostV05UsersAuthFetchModesJSONRequest{
        Authorization: "facilis",
        PatientAuthModeQueryRequest: shared.PatientAuthModeQueryRequest{
            Query: shared.PatientAuthModeQueryRequestQuery{
                ID: "hinapatel79@ndhm",
                Purpose: shared.PatientAuthPurposeEnumKyc,
                Requester: shared.PatientAuthModeQueryRequestQueryRequester{
                    ID: "100005",
                    Type: shared.PatientAuthModeQueryRequestQueryRequesterTypeEnumHiu,
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-05-22T17:05:01.514Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthFetchModesRaw

This API is meant for identify supported authentication modes for a patient given a specific purpose


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
    res, err := s.UserAuth.PostV05UsersAuthFetchModesRaw(ctx, operations.PostV05UsersAuthFetchModesRawRequest{
        Authorization: "dolore",
        RequestBody: []byte("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthInitJSON

This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.


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
    res, err := s.UserAuth.PostV05UsersAuthInitJSON(ctx, operations.PostV05UsersAuthInitJSONRequest{
        Authorization: "sed",
        PatientAuthInitRequest: shared.PatientAuthInitRequest{
            Query: shared.PatientAuthInitRequestQuery{
                AuthMode: shared.AuthenticationModeEnumDirect.ToPointer(),
                ID: "hinapatel@ndhm",
                Purpose: shared.PatientAuthPurposeEnumKyc,
                Requester: shared.PatientAuthRequester{
                    ID: "100005",
                    Type: shared.PatientAuthRequesterTypeEnumHiu,
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-08-15T21:51:46.128Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthInitRaw

This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.


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
    res, err := s.UserAuth.PostV05UsersAuthInitRaw(ctx, operations.PostV05UsersAuthInitRawRequest{
        Authorization: "unde",
        RequestBody: []byte("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnNotifyJSON

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


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
    res, err := s.UserAuth.PostV05UsersAuthOnNotifyJSON(ctx, operations.PostV05UsersAuthOnNotifyJSONRequest{
        Authorization: "suscipit",
        PatientAuthNotificationAcknowledgement: shared.PatientAuthNotificationAcknowledgement{
            Acknowledgement: &shared.PatientAuthNotificationAcknowledgementAcknowledgement{
                Status: shared.PatientAuthNotificationAcknowledgementAcknowledgementStatusEnumOk,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne,
                Message: "debitis",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "1f08f429-4e36-498f-847f-603e8b445e80",
            },
            Timestamp: types.MustTimeFromString("2021-02-14T22:16:10.503Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05UsersAuthOnNotifyRaw

This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. 


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
    res, err := s.UserAuth.PostV05UsersAuthOnNotifyRaw(ctx, operations.PostV05UsersAuthOnNotifyRawRequest{
        Authorization: "veniam",
        RequestBody: []byte("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
