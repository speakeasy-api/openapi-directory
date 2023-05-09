<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateContactInMailinglist(ctx, operations.CreateContactInMailinglistRequest{
        CreateContactInMailingList: shared.CreateContactInMailingList{
            Email: sdk.String("Larue_Rau85@yahoo.com"),
            FirstName: sdk.String("Karley"),
            LastName: sdk.String("Stamm"),
            Unsubscribed: sdk.Bool(false),
        },
        DirectoryID: "vel",
        MailingListID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->