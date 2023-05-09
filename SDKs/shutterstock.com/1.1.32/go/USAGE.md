<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Audio.AddTrackCollectionItems(ctx, operations.AddTrackCollectionItemsRequest{
        CollectionItemRequest: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: types.MustTimeFromString("2021-07-27T21:52:56.087Z"),
                    ID: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
                    MediaType: sdk.String("repellendus"),
                },
                shared.CollectionItem{
                    AddedTime: types.MustTimeFromString("2020-08-31T22:02:25.322Z"),
                    ID: "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392",
                    MediaType: sdk.String("perferendis"),
                },
                shared.CollectionItem{
                    AddedTime: types.MustTimeFromString("2022-05-20T13:30:46.463Z"),
                    ID: "29396fea-7596-4eb1-8faa-a2352c595590",
                    MediaType: sdk.String("iure"),
                },
            },
        },
        ID: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
    }, operations.AddTrackCollectionItemsSecurity{
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