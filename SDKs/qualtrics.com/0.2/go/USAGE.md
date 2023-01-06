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
    
    req := operations.CreateContactInMailinglistRequest{
        PathParams: operations.CreateContactInMailinglistPathParams{
            DirectoryID: "ea",
            MailingListID: "blanditiis",
        },
        Request: shared.CreateContactInMailingList{
            Email: "doloremque",
            FirstName: "architecto",
            LastName: "a",
            Unsubscribed: true,
        },
    }
    
    res, err := s.CreateContactInMailinglist(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->