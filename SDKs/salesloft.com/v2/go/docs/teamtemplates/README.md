# TeamTemplates

## Overview

Team Template Management

### Available Operations

* [GetV2TeamTemplatesJSON](#getv2teamtemplatesjson) - List team templates
* [GetV2TeamTemplatesIDJSON](#getv2teamtemplatesidjson) - Fetch a team template

## GetV2TeamTemplatesJSON

Fetches multiple team template records. The records can be filtered, paged, and sorted according to
the respective parameters.

Team templates are templates that are available team-wide. Admins may use
team templates to create original content for the entire team, monitor version control to ensure templates are always up to date,
and track template performance across the entire organization. All metrics on a team template reflect usage across the team; individual metrics can be found with the email_templates API endpoint.


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
    res, err := s.TeamTemplates.GetV2TeamTemplatesJSON(ctx, operations.GetV2TeamTemplatesJSONRequest{
        Ids: []string{
            "dolor",
            "voluptates",
        },
        IncludeArchivedTemplates: sdk.Bool(false),
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(274295),
        PerPage: sdk.Int64(169935),
        Search: sdk.String("rerum"),
        SortBy: sdk.String("doloremque"),
        SortDirection: sdk.String("voluptatem"),
        Tag: []string{
            "at",
            "eum",
        },
        TagIds: []int64{
            531195,
            502393,
        },
        UpdatedAt: []string{
            "atque",
            "rerum",
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

## GetV2TeamTemplatesIDJSON

Fetches a team template, by ID only.


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
    res, err := s.TeamTemplates.GetV2TeamTemplatesIDJSON(ctx, operations.GetV2TeamTemplatesIDJSONRequest{
        ID: "a8581a58-208c-454f-afa9-c95f2eac5565",
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
