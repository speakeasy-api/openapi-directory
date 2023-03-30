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
        Security: operations.AddTrackCollectionItemsSecurity{
            CustomerAccessCode: shared.SchemeCustomerAccessCode{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.AddTrackCollectionItemsPathParams{
            ID: "unde",
        },
        Request: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: "2022-07-11T23:47:51.934Z",
                    ID: "nulla",
                    MediaType: "id",
                },
                shared.CollectionItem{
                    AddedTime: "2022-05-20T21:15:10.824Z",
                    ID: "perspiciatis",
                    MediaType: "nulla",
                },
                shared.CollectionItem{
                    AddedTime: "2022-10-26T09:38:25.786Z",
                    ID: "fuga",
                    MediaType: "facilis",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Audio.AddTrackCollectionItems(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->