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
    
    req := operations.AddTrackCollectionItemsRequest{
        Security: operations.AddTrackCollectionItemsSecurity{
            CustomerAccessCode: shared.SchemeCustomerAccessCode{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AddTrackCollectionItemsPathParams{
            ID: "exercitationem",
        },
        Request: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: "1999-12-25T03:51:09Z",
                    ID: "cum",
                    MediaType: "quidem",
                },
                shared.CollectionItem{
                    AddedTime: "2002-09-21T20:55:51Z",
                    ID: "sed",
                    MediaType: "voluptas",
                },
                shared.CollectionItem{
                    AddedTime: "2007-08-08T10:10:28Z",
                    ID: "provident",
                    MediaType: "quos",
                },
            },
        },
    }
    
    res, err := s.Audio.AddTrackCollectionItems(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->