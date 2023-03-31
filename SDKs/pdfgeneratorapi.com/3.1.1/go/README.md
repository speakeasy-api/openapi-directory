# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/pdfgeneratorapi.com/3.1.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    req := operations.MergeTemplateRequest{
        Data: shared.Data{
            ID: 12312,
            Name: "Sample Data",
        },
        Format: "pdf",
        Name: "My document",
        Output: "base64",
        TemplateID: 19375,
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Documents

* `MergeTemplate` - Generate document
* `MergeTemplates` - Generate document (multiple templates)

### Templates

* `CopyTemplate` - Copy template
* `CreateTemplate` - Create template
* `DeleteTemplate` - Delete template
* `GetEditorURL` - Open editor
* `GetTemplate` - Get template
* `GetTemplates` - Get templates
* `UpdateTemplate` - Update template

### Workspaces

* `DeleteWorkspace` - Delete workspace
* `GetWorkspace` - Get workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
