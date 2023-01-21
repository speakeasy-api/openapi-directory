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
    
    req := operations.AccessTokenPutRequest{
        Request: operations.AccessTokenPutRequests{
            AccessTokenToPut: &shared.AccessTokenToPut{
                CardID: 8717895732742165505,
                UserID: 2259404117704393152,
            },
            AccessTokenToPut1: &shared.AccessTokenToPut{
                CardID: 6050128673802995827,
                UserID: 501233450539197794,
            },
            AccessTokenToPut2: &shared.AccessTokenToPut{
                CardID: 3390393562759376202,
                UserID: 2669985732393126063,
            },
            ApplicationXML: []byte("expedita"),
            TextXML: []byte("voluptas"),
        },
    }
    
    res, err := s.AccessToken.AccessTokenPut(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokenPut200ApplicationJSONString != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->