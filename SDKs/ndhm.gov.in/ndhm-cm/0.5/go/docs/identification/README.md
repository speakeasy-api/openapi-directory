# Identification

### Available Operations

* [PostV05PatientsFindJSON](#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [PostV05PatientsFindRaw](#postv05patientsfindraw) - Identify a patient by her consent-manager user-id

## PostV05PatientsFindJSON

This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results. 


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
    res, err := s.Identification.PostV05PatientsFindJSON(ctx, operations.PostV05PatientsFindJSONRequest{
        Authorization: "laudantium",
        PatientIdentificationRequest: shared.PatientIdentificationRequest{
            Query: shared.PatientIdentificationRequestQuery{
                Patient: shared.PatientIdentificationRequestQueryPatient{
                    ID: "hinapatel79@ndhm",
                },
                Requester: shared.PatientIdentificationRequestQueryRequester{
                    ID: "100005",
                    Type: shared.PatientIdentificationRequestQueryRequesterTypeEnumHiu,
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-01-08T01:04:15.076Z"),
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

## PostV05PatientsFindRaw

This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results. 


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
    res, err := s.Identification.PostV05PatientsFindRaw(ctx, operations.PostV05PatientsFindRawRequest{
        Authorization: "quasi",
        RequestBody: []byte("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
