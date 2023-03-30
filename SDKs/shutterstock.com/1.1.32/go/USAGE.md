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
                    AddedTime: "2021-04-24T16:27:50.833Z",
                    ID: "unde",
                    MediaType: "nulla",
                },
                shared.CollectionItem{
                    AddedTime: "2021-04-22T12:08:58.275Z",
                    ID: "vel",
                    MediaType: "error",
                },
                shared.CollectionItem{
                    AddedTime: "2022-03-26T09:37:56.283Z",
                    ID: "iure",
                    MediaType: "magnam",
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