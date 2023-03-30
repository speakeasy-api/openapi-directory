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
        PathParams: operations.CreateContactInMailinglistPathParams{
            DirectoryID: "corrupti",
            MailingListID: "provident",
        },
        Request: shared.CreateContactInMailingList{
            Email: "Rosalinda_Mitchell84@hotmail.com",
            FirstName: "Henry",
            LastName: "Mueller",
            Unsubscribed: false,
        },
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