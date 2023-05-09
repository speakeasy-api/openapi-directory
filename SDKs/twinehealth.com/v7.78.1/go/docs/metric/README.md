# Metric

## Overview

A metric is a quantitative result for a patient. For example, vital signs, lab results, etc. are all metrics.

### Available Operations

* [CreatePatientHealthMetric](#createpatienthealthmetric) - Create patient health metrics
* [FetchPatientHealthMetric](#fetchpatienthealthmetric) - Get a patient health metric
* [FetchPatientHealthMetrics](#fetchpatienthealthmetrics) - List patient health metrics

## CreatePatientHealthMetric

Create one or more patient health metrics.

Example for creating a patient health result with a patient specified using `meta.query` instead of `id`:

```JSON
  {
    "data": {
      "type": "patient_health_metric",
       "attributes": {
         "code": {
           "system": "LOINC",
           "value": "13457-7"
         },
         "type": "ldl_cholesterol",
         "occurred_at": "2017-03-14T11:00:57.000Z",
         "value": 121,
         "unit": "mg/dl"
      },
      "relationships": {
        "patient": {
          "data": {
            "type": "patient",
            "meta": {
              "query": {
                "identifier": {
                  "system": "medical-record-number",
                  "value": "121212"
                },
                "organization": "58c4554710123c5c40dbab81"
              }
            }
          }
        }
      }
    }
  }
```


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Metric.CreatePatientHealthMetric(ctx, shared.CreatePatientHealthMetricRequest{
        Data: shared.PatientHealthMetricCreateResource{
            Attributes: &shared.PatientHealthMetricCreateResourceAttributes{
                Code: &shared.PatientHealthMetricCreateResourceAttributesCode{
                    System: "ipsam",
                    Value: "corporis",
                },
                Diastolic: sdk.Float64(6682.34),
                OccurredAt: sdk.String("error"),
                Systolic: sdk.Float64(4568.85),
                Type: shared.PatientHealthMetricCreateResourceAttributesTypeEnumThyroidStimulatingHormone.ToPointer(),
                Unit: sdk.String("veritatis"),
                Value: sdk.String("vero"),
            },
            ID: "31135296-5bb8-4a72-8261-1435e139dbc2",
            Relationships: &shared.PatientHealthMetricCreateResourceRelationships{
                Patient: &shared.PatientHealthMetricCreateResourceRelationshipsPatient{
                    Data: &shared.PatientHealthMetricCreateResourceRelationshipsPatientData{
                        ID: sdk.String("5817ead56f5316c0d05ba8bf"),
                        Meta: &shared.PatientHealthMetricCreateResourceRelationshipsPatientDataMeta{
                            Query: shared.PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQuery{
                                Groups: []string{
                                    "nostrum",
                                },
                                Identifier: shared.PatientHealthMetricCreateResourceRelationshipsPatientDataMetaQueryIdentifier{
                                    System: "omnis",
                                    Value: "libero",
                                },
                                Organization: sdk.String("dicta"),
                            },
                        },
                        Type: sdk.String("id"),
                    },
                    Links: map[string]interface{}{
                        "fugiat": "officia",
                        "quos": "placeat",
                        "sit": "iusto",
                    },
                },
            },
            Type: "ipsa",
        },
        Meta: &shared.CreatePatientHealthMetricRequestMeta{
            IgnoreDuplicates: sdk.Bool(false),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePatientHealthMetricResponse != nil {
        // handle response
    }
}
```

## FetchPatientHealthMetric

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
    res, err := s.Metric.FetchPatientHealthMetric(ctx, operations.FetchPatientHealthMetricRequest{
        ID: "e1084cb0-672d-41ad-879e-eb9665b85efb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchPatientHealthMetricResponse != nil {
        // handle response
    }
}
```

## FetchPatientHealthMetrics

Get a list of patient health metrics.

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
    res, err := s.Metric.FetchPatientHealthMetrics(ctx, operations.FetchPatientHealthMetricsRequest{
        FilterGroups: sdk.String("at"),
        FilterOrganization: sdk.String("alias"),
        FilterPatient: sdk.String("quia"),
        PageCursor: sdk.String("quidem"),
        PageLimit: sdk.Int64(684126),
        PageNumber: sdk.Int64(919508),
        PageSize: sdk.Int64(34070),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchPatientHealthMetricResponse != nil {
        // handle response
    }
}
```
