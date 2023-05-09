# EmailTemplates

## Overview

Email Templates Management

### Available Operations

* [GetV2EmailTemplatesJSON](#getv2emailtemplatesjson) - List email templates
* [GetV2EmailTemplatesIDJSON](#getv2emailtemplatesidjson) - Fetch an email template

## GetV2EmailTemplatesJSON

Fetches multiple email template records. The records can be filtered, paged, and sorted according to
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
    res, err := s.EmailTemplates.GetV2EmailTemplatesJSON(ctx, operations.GetV2EmailTemplatesJSONRequest{
        CadenceID: []int64{
            940782,
            848151,
            52508,
        },
        FilterByOwner: sdk.Bool(false),
        GroupID: []int64{
            596211,
            983427,
            891801,
            399802,
        },
        Ids: []int64{
            380335,
            211534,
            147808,
            764995,
        },
        IncludeArchivedTemplates: sdk.Bool(false),
        IncludeCadenceTemplates: sdk.Bool(false),
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        LinkedToTeamTemplate: sdk.Bool(false),
        Page: sdk.Int64(684935),
        PerPage: sdk.Int64(189062),
        Search: sdk.String("animi"),
        SortBy: sdk.String("necessitatibus"),
        SortDirection: sdk.String("nulla"),
        Tag: []string{
            "quasi",
        },
        TagIds: []int64{
            497777,
        },
        UpdatedAt: []string{
            "occaecati",
            "suscipit",
            "adipisci",
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

## GetV2EmailTemplatesIDJSON

Fetches an email template, by ID only.


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
    res, err := s.EmailTemplates.GetV2EmailTemplatesIDJSON(ctx, operations.GetV2EmailTemplatesIDJSONRequest{
        ID: "12fde047-7177-48ff-a1d0-17476360a15d",
        IncludeSignature: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
