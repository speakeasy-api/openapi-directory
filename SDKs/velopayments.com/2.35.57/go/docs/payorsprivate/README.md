# PayorsPrivate

### Available Operations

* [CreatePayorLinks](#createpayorlinks) - Create a Payor Link

## CreatePayorLinks

This endpoint allows you to create a payor link.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PayorsPrivate.CreatePayorLinks(ctx, shared.CreatePayorLinkRequest{
        FromPayorID: "5bb8a720-2611-4435-a139-dbc2259b1abd",
        LinkType: shared.CreatePayorLinkRequestLinkTypeEnumParentOf,
        ToPayorID: "a8c070e1-084c-4b06-b2d1-ad879eeb9665",
    }, operations.CreatePayorLinksSecurity{
        OAuthVeloBackOffice: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
