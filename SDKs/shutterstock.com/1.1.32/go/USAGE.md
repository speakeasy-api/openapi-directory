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
            ID: "corrupti",
        },
        Request: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: "2022-07-12T02:05:27.691Z",
                    ID: "quibusdam",
                    MediaType: "unde",
                },
                shared.CollectionItem{
                    AddedTime: "2022-05-20T23:32:46.580Z",
                    ID: "corrupti",
                    MediaType: "illum",
                },
                shared.CollectionItem{
                    AddedTime: "2022-10-26T11:56:01.543Z",
                    ID: "error",
                    MediaType: "deserunt",
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