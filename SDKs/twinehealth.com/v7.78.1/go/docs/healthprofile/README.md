# HealthProfile

## Overview

A health profile contains a set of health questions and answers for a patient.

### Available Operations

* [FetchHealthProfile](#fetchhealthprofile) - Get a health profile
* [FetchHealthProfiles](#fetchhealthprofiles) - List health profiles

## FetchHealthProfile

Get a health profile by id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.HealthProfile.FetchHealthProfile(ctx, operations.FetchHealthProfileRequest{
        ID: "8d162309-fb09-4299-a1ae-fb9f58c4d86e",
        Include: operations.FetchHealthProfileIncludeEnumPatient.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchHealthProfileResponse != nil {
        // handle response
    }
}
```

## FetchHealthProfiles

Get a list of health profiles

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.HealthProfile.FetchHealthProfiles(ctx, operations.FetchHealthProfilesRequest{
        FilterGroups: sdk.String("totam"),
        FilterOrganization: sdk.String("earum"),
        FilterPatient: sdk.String("modi"),
        Include: operations.FetchHealthProfilesIncludeEnumQuestions.ToPointer(),
        PageCursor: sdk.String("vero"),
        PageLimit: sdk.Int64(32901),
        PageNumber: sdk.Int64(371919),
        PageSize: sdk.Int64(425946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchHealthProfilesResponse != nil {
        // handle response
    }
}
```
