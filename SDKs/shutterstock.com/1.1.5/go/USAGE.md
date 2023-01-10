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
            ID: "magni",
        },
        Request: shared.CollectionItemRequest{
            Items: []shared.CollectionItem{
                shared.CollectionItem{
                    AddedTime: "2013-04-20T11:02:32Z",
                    ID: "ad",
                    MediaType: "autem",
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