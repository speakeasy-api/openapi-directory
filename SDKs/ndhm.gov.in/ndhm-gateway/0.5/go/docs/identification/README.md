# Identification

### Available Operations

* [PostV05PatientsFindJSON](#postv05patientsfindjson) - Identify a patient by her consent-manager user-id
* [PostV05PatientsFindRaw](#postv05patientsfindraw) - Identify a patient by her consent-manager user-id
* [PostV05PatientsOnFindJSON](#postv05patientsonfindjson) - Identification result for a consent-manager user-id
* [PostV05PatientsOnFindRaw](#postv05patientsonfindraw) - Identification result for a consent-manager user-id

## PostV05PatientsFindJSON

This API is meant for identify to patient given her consent-manager-user-id


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
        Authorization: "impedit",
        PatientIdentificationRequest: shared.PatientIdentificationRequest{
            Query: shared.PatientIdentificationRequestQuery{
                Patient: shared.PatientIdentificationRequestQueryPatient{
                    ID: sdk.String("hinapatel79@ndhm"),
                },
                Requester: shared.PatientIdentificationRequestQueryRequester{
                    ID: sdk.String("100005"),
                    Type: shared.PatientIdentificationRequestQueryRequesterTypeEnumHip.ToPointer(),
                },
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-06-12T01:59:08.514Z"),
        },
        XCmID: "blanditiis",
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

This API is meant for identify to patient given her consent-manager-user-id


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
        Authorization: "cum",
        RequestBody: []byte("dicta"),
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
        Authorization: "tempora",
        PatientIdentificationResponse: shared.PatientIdentificationResponse{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumTenThousandAndOne.ToPointer(),
                Message: sdk.String("repudiandae"),
            },
            Patient: &shared.PatientIdentificationResponsePatient{
                ID: "hinapatel79@ndhm",
                Name: "Hina Patel",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "2c8c6ce6-11fe-4eb1-87cb-db6eec74378b",
            },
            Timestamp: types.MustTimeFromString("2022-09-21T22:35:10.419Z"),
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
        Authorization: "ad",
        RequestBody: []byte("sequi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
