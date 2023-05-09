# Identification

### Available Operations

* [PostV05PatientsOnFindJSON](#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [PostV05PatientsOnFindRaw](#postv05patientsonfindraw) - Identification result for a consent-manager user-id

## PostV05PatientsOnFindJSON

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


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
    res, err := s.Identification.PostV05PatientsOnFindJSON(ctx, operations.PostV05PatientsOnFindJSONRequest{
        Authorization: "fugiat",
        PatientIdentificationResponse: shared.PatientIdentificationResponse{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "ducimus",
            },
            Patient: &shared.PatientIdentificationResponsePatient{
                ID: "hinapatel79@ndhm",
                Name: "Hina Patel",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "864dbb67-5fd5-4e60-b375-ed4f6fbee41f",
            },
            Timestamp: types.MustTimeFromString("2022-10-01T23:04:48.771Z"),
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

## PostV05PatientsOnFindRaw

If a patient is found then patient.name contains the patients name. 
Otherwise, patient is not provided, and possibly error is raised for invalid requests
Note in addition to the "Authorization" header, one of the following headers must be specified
1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)


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
    res, err := s.Identification.PostV05PatientsOnFindRaw(ctx, operations.PostV05PatientsOnFindRawRequest{
        Authorization: "amet",
        RequestBody: []byte("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
