# Emails

## Overview

Email Management

### Available Operations

* [GetV2ActivitiesEmailsJSON](#getv2activitiesemailsjson) - List emails
* [GetV2ActivitiesEmailsIDJSON](#getv2activitiesemailsidjson) - Fetch an email

## GetV2ActivitiesEmailsJSON

Fetches multiple email records. The records can be filtered, paged, and sorted according to
the respective parameters.


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
    res, err := s.Emails.GetV2ActivitiesEmailsJSON(ctx, operations.GetV2ActivitiesEmailsJSONRequest{
        ActionID: []int64{
            399667,
            639187,
            381397,
        },
        Bounced: sdk.Bool(false),
        CadenceID: []int64{
            21973,
            431760,
        },
        CrmActivityID: []int64{
            614528,
            661607,
        },
        EmailAddresses: []string{
            "error",
        },
        Ids: []int64{
            913992,
            653421,
            671794,
            726343,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        OneOff: sdk.Bool(false),
        Page: sdk.Int64(324083),
        PerPage: sdk.Int64(536923),
        PersonID: []int64{
            110477,
            833316,
        },
        Personalization: []string{
            "quo",
            "ex",
        },
        ScopedFields: []string{
            "ad",
            "expedita",
        },
        SentAt: []string{
            "molestias",
        },
        SortBy: sdk.String("cum"),
        SortDirection: sdk.String("aliquid"),
        Status: []string{
            "voluptatum",
        },
        StepID: []int64{
            85233,
            703218,
            665678,
        },
        UpdatedAt: []string{
            "voluptatem",
            "sapiente",
            "officiis",
        },
        UserID: []int64{
            682119,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2ActivitiesEmailsIDJSON

Fetches an email, by ID only.


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
    res, err := s.Emails.GetV2ActivitiesEmailsIDJSON(ctx, operations.GetV2ActivitiesEmailsIDJSONRequest{
        ID: "de008e6f-8c5f-4350-98cd-b5a341814301",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
