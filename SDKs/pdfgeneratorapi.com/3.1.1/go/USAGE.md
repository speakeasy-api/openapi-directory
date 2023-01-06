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
            Format: "html",
            Name: "odio",
            Output: "url",
            TemplateID: 1502483821567276313,
        },
        Request: shared.Data{
            ID: 1029205606204646169,
            Name: "iure",
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