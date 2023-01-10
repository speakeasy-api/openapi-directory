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
            ID: "et",
        },
        Request: &operations.AppendBlockChildrenRequestBody{
            Children: []AppendBlockChildrenRequestBodyChildren{
                operations.AppendBlockChildrenRequestBodyChildren{
                    Heading2: &operations.AppendBlockChildrenRequestBodyChildrenHeading2{
                        Text: []AppendBlockChildrenRequestBodyChildrenHeading2Text{
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "vero",
                                },
                                Type: "et",
                            },
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "et",
                                },
                                Type: "quasi",
                            },
                        },
                    },
                    Object: "nam",
                    Type: "ut",
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