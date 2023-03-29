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

    req := operations.AppendBlockChildrenRequest{
        PathParams: operations.AppendBlockChildrenPathParams{
            ID: "{{PAGE_ID}}",
        },
        Request: &operations.AppendBlockChildrenRequestBody{
            Children: []AppendBlockChildrenRequestBodyChildren{
                operations.AppendBlockChildrenRequestBodyChildren{
                    Heading2: &operations.AppendBlockChildrenRequestBodyChildrenHeading2{
                        Text: []AppendBlockChildrenRequestBodyChildrenHeading2Text{
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "Lacinato kale",
                                },
                                Type: "text",
                            },
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "Lacinato kale",
                                },
                                Type: "text",
                            },
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "Lacinato kale",
                                },
                                Type: "text",
                            },
                        },
                    },
                    Object: "block",
                    Type: "heading_2",
                },
                operations.AppendBlockChildrenRequestBodyChildren{
                    Heading2: &operations.AppendBlockChildrenRequestBodyChildrenHeading2{
                        Text: []AppendBlockChildrenRequestBodyChildrenHeading2Text{
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "Lacinato kale",
                                },
                                Type: "text",
                            },
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "Lacinato kale",
                                },
                                Type: "text",
                            },
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "Lacinato kale",
                                },
                                Type: "text",
                            },
                        },
                    },
                    Object: "block",
                    Type: "heading_2",
                },
                operations.AppendBlockChildrenRequestBodyChildren{
                    Heading2: &operations.AppendBlockChildrenRequestBodyChildrenHeading2{
                        Text: []AppendBlockChildrenRequestBodyChildrenHeading2Text{
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "Lacinato kale",
                                },
                                Type: "text",
                            },
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "Lacinato kale",
                                },
                                Type: "text",
                            },
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "Lacinato kale",
                                },
                                Type: "text",
                            },
                            operations.AppendBlockChildrenRequestBodyChildrenHeading2Text{
                                Text: &operations.AppendBlockChildrenRequestBodyChildrenHeading2TextText{
                                    Content: "Lacinato kale",
                                },
                                Type: "text",
                            },
                        },
                    },
                    Object: "block",
                    Type: "heading_2",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Blocks.AppendBlockChildren(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppendBlockChildren200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->