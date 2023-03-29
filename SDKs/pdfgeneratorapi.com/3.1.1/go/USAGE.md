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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JSONWebTokenAuth: shared.SchemeJSONWebTokenAuth{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        }),
    )

    req := operations.MergeTemplateRequest{
        QueryParams: operations.MergeTemplateQueryParams{
            Format: "pdf",
            Name: "My document",
            Output: "base64",
            TemplateID: 19375,
        },
        Request: shared.Data{
            ID: 12312,
            Name: "Sample Data",
        },
    }

    ctx := context.Background()
    res, err := s.Documents.MergeTemplate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MergeTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->