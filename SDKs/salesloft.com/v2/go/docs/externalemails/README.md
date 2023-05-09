# ExternalEmails

## Overview

External Emails

### Available Operations

* [PostV2ExternalEmailsJSON](#postv2externalemailsjson) - Create an External Email

## PostV2ExternalEmailsJSON

Creates an external email object.


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
    res, err := s.ExternalEmails.PostV2ExternalEmailsJSON(ctx, operations.PostV2ExternalEmailsJSONRequestBody{
        Mailbox: "sit",
        Raw: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
