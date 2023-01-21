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
    
    req := operations.AppendBlockChildrenRequest{
        PathParams: operations.AppendBlockChildrenPathParams{
            ID: "sit",
        },
        Request: &operations.AppendBlockChildrenRequestBody{
            Children: []AppendBlockChildrenRequestBodyChildren{
                operations.AppendBlockChildrenRequestBodyChildren{
                    Heading2: &operations.AppendBlockChildrenRequestBodyChildrenHeading2{
                        Text: []AppendBlockChildrenRequestBodyChildrenHeading2Text{
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "expedita",
                                },
                                Type: "consequuntur",
                            },
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "dolor",
                                },
                                Type: "expedita",
                            },
                        },
                    },
                    Object: "voluptas",
                    Type: "fugit",
                },
            },
        },
    }
    
    res, err := s.Blocks.AppendBlockChildren(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppendBlockChildren200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->