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

    req := operations.AddTrackCollectionItemsRequest{
        CollectionItemRequest: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: "2021-07-27T21:52:56.087Z",
                    ID: "quibusdam",
                    MediaType: "unde",
                },
                shared.CollectionItem{
                    AddedTime: "2021-05-14T08:28:11.899Z",
                    ID: "illum",
                    MediaType: "vel",
                },
                shared.CollectionItem{
                    AddedTime: "2021-09-16T11:56:06.019Z",
                    ID: "suscipit",
                    MediaType: "iure",
                },
            },
        },
        ID: "magnam",
    }

    ctx := context.Background()
    res, err := s.Audio.AddTrackCollectionItems(ctx, req, operations.AddTrackCollectionItemsSecurity{
        CustomerAccessCode: "Bearer YOUR_ACCESS_TOKEN_HERE",
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