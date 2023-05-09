# EmailTemplateAttachments

## Overview

Email Template Attachments

### Available Operations

* [GetV2EmailTemplateAttachmentsJSON](#getv2emailtemplateattachmentsjson) - List email template attachments

## GetV2EmailTemplateAttachmentsJSON

Fetches multiple email template attachment records. The records can be filtered and paged according to
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
    res, err := s.EmailTemplateAttachments.GetV2EmailTemplateAttachmentsJSON(ctx, operations.GetV2EmailTemplateAttachmentsJSONRequest{
        EmailTemplateID: []int64{
            179410,
            958741,
            433279,
            117320,
        },
        Ids: []int64{
            107004,
            583404,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(589695),
        PerPage: sdk.Int64(936469),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
