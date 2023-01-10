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
            Name: "illum",
            Output: "url",
            TemplateID: 1665832531304498762,
        },
        Request: shared.Data{
            ID: 8072506708664074759,
            Name: "aliquid",
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