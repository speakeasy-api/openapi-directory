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
            Color: "white",
            IsPrimeurs: true,
            Limit: 7334213246184120361,
            Lwin: "et",
            Lwin11: "velit",
            Offset: 3969817798470589381,
            Ordering: "-date",
            Vintage: "qui",
            WineID: []int64{
                6148227408144759182,
                1381002035011521327,
                4963720307500657837,
            },
        },
        Headers: operations.GetGlobalwinescoresLatestHeaders{
            Authorization: "beatae",
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