# Plan

## Overview

A plan is the set of actions and associated goals for a patient.

### Available Operations

* [FetchPatientPlanSummaries](#fetchpatientplansummaries) - List patient plan summaries
* [FetchPatientPlanSummary](#fetchpatientplansummary) - Get the plan summary for a patient
* [UpdatePatientPlanSummary](#updatepatientplansummary) - Update a plan summary

## FetchPatientPlanSummaries

Get a list of patient plan summaries

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
    res, err := s.Plan.FetchPatientPlanSummaries(ctx, operations.FetchPatientPlanSummariesRequest{
        FilterGroups: sdk.String("delectus"),
        FilterOrganization: sdk.String("non"),
        FilterPatient: sdk.String("distinctio"),
        Include: operations.FetchPatientPlanSummariesIncludeEnumBundles.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchPatientPlanSummariesResponse != nil {
        // handle response
    }
}
```

## FetchPatientPlanSummary

Get the plan summary for a patient.

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
    res, err := s.Plan.FetchPatientPlanSummary(ctx, operations.FetchPatientPlanSummaryRequest{
        ID: "544e472e-8028-457a-9b40-463a7d575f14",
        Include: operations.FetchPatientPlanSummaryIncludeEnumActions.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchPatientPlanSummaryResponse != nil {
        // handle response
    }
}
```

## UpdatePatientPlanSummary

Update a plan summary record for a patient.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Plan.UpdatePatientPlanSummary(ctx, operations.UpdatePatientPlanSummaryRequest{
        UpdatePatientPlanSummaryRequestInput: shared.UpdatePatientPlanSummaryRequestInput{
            Data: shared.PatientPlanSummaryResourceInput{
                Attributes: &shared.PatientPlanSummaryResourceAttributesInput{
                    Critical: map[string]interface{}{
                        "eveniet": "odio",
                    },
                    TimeZone: sdk.String("commodi"),
                    WindowOrder: []shared.PatientPlanSummaryResourceAttributesWindowOrder{
                        shared.PatientPlanSummaryResourceAttributesWindowOrder{
                            Actions: []string{
                                "possimus",
                                "voluptate",
                                "consectetur",
                            },
                            Type: sdk.String("nesciunt"),
                        },
                        shared.PatientPlanSummaryResourceAttributesWindowOrder{
                            Actions: []string{
                                "itaque",
                                "minus",
                            },
                            Type: sdk.String("sunt"),
                        },
                    },
                },
                ID: "57b36e3c04ad8c2224f2af38",
                Relationships: &shared.PatientPlanSummaryResourceRelationships{
                    Actions: shared.PatientPlanSummaryResourceRelationshipsActions{
                        Data: []shared.PatientPlanSummaryResourceRelationshipsActionsData{
                            shared.PatientPlanSummaryResourceRelationshipsActionsData{
                                ID: "781b36a0-8088-4d10-8efa-da200ef0422e",
                                Type: "harum",
                            },
                            shared.PatientPlanSummaryResourceRelationshipsActionsData{
                                ID: "2164cf9a-b836-46c7-a3ff-da9e06bee482",
                                Type: "ullam",
                            },
                            shared.PatientPlanSummaryResourceRelationshipsActionsData{
                                ID: "c1fc0e11-5c80-4bff-9185-44ec42defcce",
                                Type: "totam",
                            },
                        },
                        Links: &shared.PatientPlanSummaryResourceRelationshipsActionsLinks{
                            Related: sdk.String("reiciendis"),
                        },
                    },
                    Bundles: shared.PatientPlanSummaryResourceRelationshipsBundles{
                        Data: []shared.PatientPlanSummaryResourceRelationshipsBundlesData{
                            shared.PatientPlanSummaryResourceRelationshipsBundlesData{
                                ID: "977773e6-3562-4a7b-808f-05e3d48fdaf3",
                                Type: "vitae",
                            },
                        },
                        Links: &shared.PatientPlanSummaryResourceRelationshipsBundlesLinks{
                            Related: sdk.String("nesciunt"),
                        },
                    },
                    CurrentResults: &shared.PatientPlanSummaryResourceRelationshipsCurrentResults{
                        Data: []shared.PatientPlanSummaryResourceRelationshipsCurrentResultsData{
                            shared.PatientPlanSummaryResourceRelationshipsCurrentResultsData{
                                ID: "1f5fd942-59c0-4b36-b25e-a944f3b756c1",
                                Type: "beatae",
                            },
                            shared.PatientPlanSummaryResourceRelationshipsCurrentResultsData{
                                ID: "f6c37a51-2624-4383-9bbc-05a23a45cefc",
                                Type: "enim",
                            },
                            shared.PatientPlanSummaryResourceRelationshipsCurrentResultsData{
                                ID: "fde10a0c-e216-49e5-9001-9c6dc5e34762",
                                Type: "odio",
                            },
                        },
                        Links: &shared.PatientPlanSummaryResourceRelationshipsCurrentResultsLinks{
                            Related: sdk.String("natus"),
                        },
                    },
                    Patient: shared.PatientPlanSummaryResourceRelationshipsPatient{
                        Data: &shared.PatientPlanSummaryResourceRelationshipsPatientData{
                            ID: sdk.String("9bfbbe69-49fb-42bb-8eca-e6c3d5db3ade"),
                            Type: sdk.String("distinctio"),
                        },
                        Links: &shared.PatientPlanSummaryResourceRelationshipsPatientLinks{
                            Related: sdk.String("pariatur"),
                        },
                    },
                },
                Type: shared.PatientPlanSummaryResourceTypeEnumPatientPlanSummary,
            },
        },
        ID: "5daea4c5-06a8-4aa9-8c02-644cf5e9d9a4",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePatientPlanSummaryResponse != nil {
        // handle response
    }
}
```
