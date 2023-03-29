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
            DirectoryID: "unde",
            MailingListID: "deserunt",
        },
        Request: shared.CreateContactInMailingList{
            Email: "Rosalind_Mitchell84@hotmail.com",
            FirstName: "Henri",
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