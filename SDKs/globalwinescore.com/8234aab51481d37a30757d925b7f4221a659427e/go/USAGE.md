<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                TokenAuthentication: shared.SchemeTokenAuthentication{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetGlobalwinescoresLatestRequest{
        QueryParams: operations.GetGlobalwinescoresLatestQueryParams{
            Color: "red",
            IsPrimeurs: false,
            Limit: 6050128673802995827,
            Lwin: "expedita",
            Lwin11: "consequuntur",
            Offset: 2669985732393126063,
            Ordering: "-score",
            Vintage: "voluptas",
            WineID: []int64{
                1543572285742637646,
            },
        },
        Headers: operations.GetGlobalwinescoresLatestHeaders{
            Authorization: "nihil",
        },
    }
    
    res, err := s.GlobalWineScore.GetGlobalwinescoresLatest(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->