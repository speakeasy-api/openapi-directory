# Link

### Available Operations

* [PostV05LinksLinkAddContextsJSON](#postv05linkslinkaddcontextsjson) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkAddContextsRaw](#postv05linkslinkaddcontextsraw) - API for HIP initiated care-context linking for patient
* [PostV05LinksLinkConfirmJSON](#postv05linkslinkconfirmjson) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkConfirmRaw](#postv05linkslinkconfirmraw) - Token submission by Consent Manager for link confirmation
* [PostV05LinksLinkInitJSON](#postv05linkslinkinitjson) - Link patient's care contexts
* [PostV05LinksLinkInitRaw](#postv05linkslinkinitraw) - Link patient's care contexts
* [PostV05LinksLinkOnAddContextsJSON](#postv05linkslinkonaddcontextsjson) - callback API for HIP initiated patient linking /link/add-context
* [PostV05LinksLinkOnAddContextsRaw](#postv05linkslinkonaddcontextsraw) - callback API for HIP initiated patient linking /link/add-context
* [PostV05LinksLinkOnConfirmJSON](#postv05linkslinkonconfirmjson) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnConfirmRaw](#postv05linkslinkonconfirmraw) - Token authenticated by HIP, indicating completion of linkage of care-contexts
* [PostV05LinksLinkOnInitJSON](#postv05linkslinkoninitjson) - Response to patient's care context link request
* [PostV05LinksLinkOnInitRaw](#postv05linkslinkoninitraw) - Response to patient's care context link request

## PostV05LinksLinkAddContextsJSON

API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.  
  1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired


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
    res, err := s.Link.PostV05LinksLinkAddContextsJSON(ctx, operations.PostV05LinksLinkAddContextsJSONRequest{
        Authorization: "beatae",
        PatientCareContextLinkRequest: shared.PatientCareContextLinkRequest{
            Link: shared.PatientCareContextLink{
                AccessToken: "iusto",
                Patient: shared.PatientCareContextLinkPatient{
                    CareContexts: []shared.CareContextRepresentation{
                        shared.CareContextRepresentation{
                            Display: "magnam",
                            ReferenceNumber: "odio",
                        },
                        shared.CareContextRepresentation{
                            Display: "nulla",
                            ReferenceNumber: "impedit",
                        },
                    },
                    Display: "cupiditate",
                    ReferenceNumber: "TMH-PUID-001",
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-08-26T17:41:33.772Z"),
        },
        XCmID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkAddContextsRaw

API to submit care-context to CM for HIP initiated linking. The API must accompany the "accessToken" fetched in the users/auth process.  
  1. subsequent usage for accessToken may be invalid if it was meant for one-time usage or if it expired


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
    res, err := s.Link.PostV05LinksLinkAddContextsRaw(ctx, operations.PostV05LinksLinkAddContextsRawRequest{
        Authorization: "illum",
        RequestBody: []byte("fugit"),
        XCmID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

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
        Authorization: "dolorum",
        LinkConfirmationRequest: shared.LinkConfirmationRequest{
            Confirmation: shared.LinkConfirmationRequestConfirmation{
                LinkRefNumber: "repellat",
                Token: "nostrum",
            },
            RequestID: "dd6723dc-0f5a-4e2f-ba6b-700878756143",
            Timestamp: types.MustTimeFromString("2021-12-05T00:10:54.956Z"),
        },
        XHipID: "est",
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
        Authorization: "iure",
        RequestBody: []byte("quisquam"),
        XHipID: "provident",
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

Request from CM to links care contexts associated with only one patient
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
        Authorization: "laudantium",
        PatientLinkReferenceRequest: shared.PatientLinkReferenceRequest{
            Patient: shared.PatientLinkReferenceRequestPatient{
                CareContexts: []shared.CareContext{
                    shared.CareContext{
                        ReferenceNumber: "nemo",
                    },
                    shared.CareContext{
                        ReferenceNumber: "enim",
                    },
                    shared.CareContext{
                        ReferenceNumber: "ipsam",
                    },
                },
                ID: "hinapatel79@ndhm",
                ReferenceNumber: "TMH-PUID-001",
            },
            RequestID: "54080d40-bcac-4c6c-bd6b-5f3ec909304f",
            Timestamp: types.MustTimeFromString("2022-09-26T22:47:17.791Z"),
            TransactionID: "6bad2553-819b-4474-b0ed-20e56248fff6",
        },
        XHipID: "nesciunt",
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

Request from CM to links care contexts associated with only one patient
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
        Authorization: "cupiditate",
        RequestBody: []byte("animi"),
        XHipID: "provident",
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
        Authorization: "beatae",
        PatientCareContextLinkResponse: shared.PatientCareContextLinkResponse{
            Acknowledgement: &shared.PatientCareContextLinkResponseAcknowledgement{
                Status: shared.PatientCareContextLinkResponseAcknowledgementStatusEnumSuccess,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("mollitia"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "bdcab626-7669-46e1-ac00-221b335d89ac",
            },
            Timestamp: types.MustTimeFromString("2022-07-20T03:49:43.731Z"),
        },
        XHipID: "debitis",
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
        Authorization: "nobis",
        RequestBody: []byte("asperiores"),
        XHipID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnConfirmJSON

Returns a list of linked care contexts with patient reference number.
  1. **Validated and linked account reference number**
  2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
  3. **Verified that same Consent Manager which made the link request is sending the token**
  4. **Results of unmasked linked care contexts with patient reference number**


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
    res, err := s.Link.PostV05LinksLinkOnConfirmJSON(ctx, operations.PostV05LinksLinkOnConfirmJSONRequest{
        Authorization: "id",
        PatientLinkResult: shared.PatientLinkResult{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("quibusdam"),
            },
            Patient: &shared.PatientLinkResultPatient{
                CareContexts: []shared.CareContextRepresentation{
                    shared.CareContextRepresentation{
                        Display: "quo",
                        ReferenceNumber: "veniam",
                    },
                },
                Display: "aliquam",
                ReferenceNumber: "provident",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "ef030049-78a6-41fa-9cf2-0688f77c1ffc",
            },
            Timestamp: types.MustTimeFromString("2022-12-03T12:46:57.729Z"),
        },
        XCmID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnConfirmRaw

Returns a list of linked care contexts with patient reference number.
  1. **Validated and linked account reference number**
  2. **Validated that the token sent from Consent Manager is same as the one generated by HIP**
  3. **Verified that same Consent Manager which made the link request is sending the token**
  4. **Results of unmasked linked care contexts with patient reference number**


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
    res, err := s.Link.PostV05LinksLinkOnConfirmRaw(ctx, operations.PostV05LinksLinkOnConfirmRawRequest{
        Authorization: "maxime",
        RequestBody: []byte("fuga"),
        XCmID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnInitJSON

Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
  1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
  2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
  3. **HIP should communicate the mode of authentication of a successful request**
  4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. **Patient reference number is invalid**
  2. **Care context reference numbers are invalid**


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
    res, err := s.Link.PostV05LinksLinkOnInitJSON(ctx, operations.PostV05LinksLinkOnInitJSONRequest{
        Authorization: "ex",
        PatientLinkReferenceResult: shared.PatientLinkReferenceResult{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("maiores"),
            },
            Link: &shared.PatientLinkReferenceResultLink{
                AuthenticationType: shared.PatientLinkReferenceResultLinkAuthenticationTypeEnumDirect,
                Meta: &shared.Meta{
                    CommunicationExpiry: sdk.String("2019-12-30T12:01:55Z"),
                    CommunicationHint: sdk.String("animi"),
                    CommunicationMedium: shared.MetaCommunicationMediumEnumMobile.ToPointer(),
                },
                ReferenceNumber: "eligendi",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "80a97ff3-34cd-4df8-97a9-e61876c6ab21",
            },
            Timestamp: types.MustTimeFromString("2022-07-02T15:16:26.833Z"),
            TransactionID: "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
        },
        XCmID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05LinksLinkOnInitRaw

Result of patient care-context link request from HIP end. This happens in context of previous discovery of patient found at HIP end, therefore the link requests ought to be in reference to the patient reference and care-context references previously returned by the HIP. The correlation of discovery and link request is maintained through the transactionId. HIP should have
  1. **Validated transactionId in the request to check whether there was a discovery done previously, and the link request corresponds to returned patient care care context references**
  2. **Before returning the response, HIP should have sent an authentication request to the patient(eg: OTP verification)**
  3. **HIP should communicate the mode of authentication of a successful request**
  4. **HIP subsequently should expect the token passed via /link/confirm against the link.referenceNumber passed in this call**




















  
The error section in the body, represents the potential errors that may have occurred. Possible reasons:
  1. **Patient reference number is invalid**
  2. **Care context reference numbers are invalid**


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
    res, err := s.Link.PostV05LinksLinkOnInitRaw(ctx, operations.PostV05LinksLinkOnInitRawRequest{
        Authorization: "illum",
        RequestBody: []byte("a"),
        XCmID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
