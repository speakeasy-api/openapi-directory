# PendingEmails

## Overview

Pending Emails

### Available Operations

* [GetV2PendingEmailsJSON](#getv2pendingemailsjson) - Fetches a list of emails ready to be sent by an external email service. Only emails sent with an External Email Client will appear here.
* [PutV2PendingEmailsIDJSON](#putv2pendingemailsidjson) - Updates the status of an email sent by an External Email Client

## GetV2PendingEmailsJSON

Fetches a list of emails ready to be sent by an external email service.


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
    res, err := s.PendingEmails.GetV2PendingEmailsJSON(ctx, operations.GetV2PendingEmailsJSONRequest{
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(484966),
        PerPage: sdk.Int64(51170),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2PendingEmailsIDJSON

Updates the status of an email sent by an External Email Client. Does not affect lofted emails.


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
    res, err := s.PendingEmails.PutV2PendingEmailsIDJSON(ctx, operations.PutV2PendingEmailsIDJSONRequest{
        RequestBody: operations.PutV2PendingEmailsIDJSONRequestBody{
            ErrorMessage: sdk.String("saepe"),
            MessageID: "architecto",
            SentAt: sdk.String("quos"),
            Status: "iste",
        },
        ID: "dbb30fcb-33ea-4055-b197-cd44e2f52d82",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
