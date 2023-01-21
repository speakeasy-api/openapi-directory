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
                JSONWebTokenAuth: shared.SchemeJSONWebTokenAuth{
                    Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.MergeTemplateRequest{
        QueryParams: operations.MergeTemplateQueryParams{
            Format: "zip",
            Name: "voluptas",
            Output: "url",
            TemplateID: 501233450539197794,
        },
        Request: shared.Data{
            ID: 3390393562759376202,
            Name: "dolor",
        },
    }
    
    res, err := s.Documents.MergeTemplate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MergeTemplate200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->