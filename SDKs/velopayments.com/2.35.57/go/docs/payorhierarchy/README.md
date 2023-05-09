# PayorHierarchy

## Overview

<p>Payors that are part of the same organization can be linked together in a hierarchical fashion</p>
<p>Payors higher up in the tree can read and write data on behalf of payors below them</p>
<p>For example Payor A can make payouts on behalf of Payor B if Payor B is linked below Payor A</p>
<p>Payors can not access data of payors above them in the hierarchy</p>
<p>Contact Velo if you need to link payors in your organization</p>


### Available Operations

* [PayorLinksV1](#payorlinksv1) - List Payor Links

## PayorLinksV1

<p>If the payor is set up as part of a hierarchy you can use this API to traverse the hierarchy</p>


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PayorHierarchy.PayorLinksV1(ctx, operations.PayorLinksV1Request{
        DescendantsOfPayor: sdk.String("8ff61d01-7476-4360-a15d-b6a660659a1a"),
        Fields: sdk.String("possimus"),
        ParentOfPayor: sdk.String("eaab5851-d6c6-445b-88b6-1891baa0fe1a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayorLinksResponse != nil {
        // handle response
    }
}
```
