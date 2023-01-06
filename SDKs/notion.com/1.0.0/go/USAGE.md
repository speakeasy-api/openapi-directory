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
            ID: "adipisci",
        },
        Request: &operations.AppendBlockChildrenRequestBody{
            Children: []AppendBlockChildrenRequestBodyChildren{
                operations.AppendBlockChildrenRequestBodyChildren{
                    Heading2: &operations.AppendBlockChildrenRequestBodyChildrenHeading2{
                        Text: []AppendBlockChildrenRequestBodyChildrenHeading2Text{
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "et",
                                },
                                Type: "exercitationem",
                            },
                        },
                    },
                    Object: "reiciendis",
                    Type: "inventore",
                },
                operations.AppendBlockChildrenRequestBodyChildren{
                    Heading2: &operations.AppendBlockChildrenRequestBodyChildrenHeading2{
                        Text: []AppendBlockChildrenRequestBodyChildrenHeading2Text{
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "soluta",
                                },
                                Type: "deserunt",
                            },
                        },
                    },
                    Object: "dolores",
                    Type: "dolorum",
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