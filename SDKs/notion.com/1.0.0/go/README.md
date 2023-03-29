# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/notion.com/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Blocks

* `AppendBlockChildren` - Append block children
* `RetrieveABlock` - Retrieve a block
* `RetrieveBlockChildren` - Retrieve block children
* `UpdateABlock` - Update a block

### Databases

* `QueryADatabase` - Query a database
* `RetrieveADatabase` - Retrieve a database
* `UpdateADatabase` - Update a database

### Pages

* `RetrieveAPage` - Retrieve a Page
* `UpdatePageProperties` - Update Page properties 

### Users

* `RetrieveAUser` - Retrieve a user
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
