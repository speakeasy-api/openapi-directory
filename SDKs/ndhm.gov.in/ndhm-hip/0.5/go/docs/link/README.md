# Link

### Available Operations

* [PostV05LinksLinkConfirmJSON](#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkConfirmRaw](#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkInitJSON](#postv05linkslinkinitjson) - Link patient's care contexts
* [PostV05LinksLinkInitRaw](#postv05linkslinkinitraw) - Link patient's care contexts
* [PostV05LinksLinkOnAddContextsJSON](#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [PostV05LinksLinkOnAddContextsRaw](#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context

## PostV05LinksLinkConfirmJSON

API to submit the token that was sent by HIP during the link request. 


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
    res, err := s.Link.PostV05LinksLinkConfirmJSON(ctx, operations.PostV05LinksLinkConfirmJSONRequest{
        Authorization: "vero",
        LinkConfirmationRequest: shared.LinkConfirmationRequest{
            Confirmation: shared.LinkConfirmationRequestConfirmation{
                LinkRefNumber: "aliquid",
                Token: "quasi",
            },
            RequestID: "e6b7b95b-c0ab-43c2-8c4f-3789fd871f99",
            Timestamp: types.MustTimeFromString("2020-07-16T06:14:24.154Z"),
        },
        XHipID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkConfirmRaw

API to submit the token that was sent by HIP during the link request. 


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
    res, err := s.Link.PostV05LinksLinkConfirmRaw(ctx, operations.PostV05LinksLinkConfirmRawRequest{
        Authorization: "eveniet",
        RequestBody: []byte("asperiores"),
        XHipID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkInitJSON

Request from Gateway to links care contexts associated with only one patient
  1. **Validate account reference number and care context reference number**
  2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
      and were these care contexts discovered or not for a given patient**
  3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
  4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**


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
    res, err := s.Link.PostV05LinksLinkInitJSON(ctx, operations.PostV05LinksLinkInitJSONRequest{
        Authorization: "veritatis",
        PatientLinkReferenceRequest: shared.PatientLinkReferenceRequest{
            Patient: shared.PatientLinkReferenceRequestPatient{
                CareContexts: []shared.CareContext{
                    shared.CareContext{
                        ReferenceNumber: "quasi",
                    },
                },
                ID: "hinapatel79@ndhm",
                ReferenceNumber: "TMH-PUID-001",
            },
            RequestID: "aa6f1e67-4bdb-404f-9575-6082d68ea19f",
            Timestamp: types.MustTimeFromString("2022-02-17T15:16:49.489Z"),
            TransactionID: "17051339-d080-486a-9840-394c26071f93",
        },
        XHipID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkInitRaw

Request from Gateway to links care contexts associated with only one patient
  1. **Validate account reference number and care context reference number**
  2. **Validate transactionId in the request with discovery request entry to check whether there was a discovery
      and were these care contexts discovered or not for a given patient**
  3. **Before eventual link confirmation, HIP needs to authenticate the request with the patient(eg: OTP verification)**
  4. **HIP should communicate the mode of authentication of a successful request to Consent Manager**


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
    res, err := s.Link.PostV05LinksLinkInitRaw(ctx, operations.PostV05LinksLinkInitRawRequest{
        Authorization: "voluptas",
        RequestBody: []byte("asperiores"),
        XHipID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnAddContextsJSON

If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so. 
  1. **accessToken must be valid and must be for the purpose of linking**


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
    res, err := s.Link.PostV05LinksLinkOnAddContextsJSON(ctx, operations.PostV05LinksLinkOnAddContextsJSONRequest{
        Authorization: "ea",
        PatientCareContextLinkResponse: shared.PatientCareContextLinkResponse{
            Acknowledgement: &shared.PatientCareContextLinkResponseAcknowledgement{
                Status: shared.PatientCareContextLinkResponseAcknowledgementStatusEnumSuccess,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "consequuntur",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "dac7af51-5cc4-413a-a63a-ae8d67864dbb",
            },
            Timestamp: types.MustTimeFromString("2022-07-21T19:01:11.341Z"),
        },
        XHipID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnAddContextsRaw

If the accessToken is valid for purpose of linking, and specified details provided, CM will send "acknoweldgement.status" as SUCCESS. If any error occcurred, for example invalid token, or other required patient or care-context information not provided, then "error" attribute conveys so. 
  1. **accessToken must be valid and must be for the purpose of linking**


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
    res, err := s.Link.PostV05LinksLinkOnAddContextsRaw(ctx, operations.PostV05LinksLinkOnAddContextsRawRequest{
        Authorization: "reiciendis",
        RequestBody: []byte("assumenda"),
        XHipID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
