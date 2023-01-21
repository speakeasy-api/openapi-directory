<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetBillingRecipientsRequest{
        PathParams: operations.GetBillingRecipientsPathParams{
            WorkgroupID: "sit",
        },
    }
    
    res, err := s.Contact.GetBillingRecipients(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->