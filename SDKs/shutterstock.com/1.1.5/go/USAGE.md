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
                    AddedTime: "2022-07-11T11:42:28.940Z",
                    ID: "nulla",
                    MediaType: "id",
                },
                shared.CollectionItem{
                    AddedTime: "2022-05-20T09:09:47.829Z",
                    ID: "perspiciatis",
                    MediaType: "nulla",
                },
                shared.CollectionItem{
                    AddedTime: "2022-10-25T21:33:02.791Z",
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