# TeamTemplateAttachments

## Overview

Team Template Attachments

### Available Operations

* [GetV2TeamTemplateAttachmentsJSON](#getv2teamtemplateattachmentsjson) - List team template attachments

## GetV2TeamTemplateAttachmentsJSON

Fetches multiple team template attachment records. The records can be filtered and paged according to
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
    res, err := s.TeamTemplateAttachments.GetV2TeamTemplateAttachmentsJSON(ctx, operations.GetV2TeamTemplateAttachmentsJSONRequest{
        Ids: []int64{
            147400,
            866292,
            756287,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(927490),
        PerPage: sdk.Int64(83791),
        TeamTemplateID: []int64{
            516124,
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
