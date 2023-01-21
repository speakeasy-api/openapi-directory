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
            DirectoryID: "sit",
            MailingListID: "voluptas",
        },
        Request: shared.CreateContactInMailingList{
            Email: "culpa",
            FirstName: "expedita",
            LastName: "consequuntur",
            Unsubscribed: false,
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