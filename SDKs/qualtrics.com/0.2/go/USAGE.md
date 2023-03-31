<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateContactInMailinglistRequest{
        CreateContactInMailingList: shared.CreateContactInMailingList{
            Email: "Larue_Rau85@yahoo.com",
            FirstName: "Karley",
            LastName: "Stamm",
            Unsubscribed: false,
        },
        DirectoryID: "vel",
        MailingListID: "error",
    }

    ctx := context.Background()
    res, err := s.CreateContactInMailinglist(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->