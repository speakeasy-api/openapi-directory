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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            JSONWebTokenAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Documents.MergeTemplate(ctx, operations.MergeTemplateRequest{
        Data: shared.Data{
            ID: sdk.Int64(12312),
            Name: sdk.String("Sample Data"),
        },
        Format: shared.FormatEnumPdf.ToPointer(),
        Name: sdk.String("My document"),
        Output: shared.OutputEnumBase64.ToPointer(),
        TemplateID: 19375,
    })
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


### [Documents](docs/documents/README.md)

* [MergeTemplate](docs/documents/README.md#mergetemplate) - Generate document
* [MergeTemplates](docs/documents/README.md#mergetemplates) - Generate document (multiple templates)

### [Templates](docs/templates/README.md)

* [CopyTemplate](docs/templates/README.md#copytemplate) - Copy template
* [CreateTemplate](docs/templates/README.md#createtemplate) - Create template
* [DeleteTemplate](docs/templates/README.md#deletetemplate) - Delete template
* [GetEditorURL](docs/templates/README.md#geteditorurl) - Open editor
* [GetTemplate](docs/templates/README.md#gettemplate) - Get template
* [GetTemplates](docs/templates/README.md#gettemplates) - Get templates
* [UpdateTemplate](docs/templates/README.md#updatetemplate) - Update template

### [Workspaces](docs/workspaces/README.md)

* [DeleteWorkspace](docs/workspaces/README.md#deleteworkspace) - Delete workspace
* [GetWorkspace](docs/workspaces/README.md#getworkspace) - Get workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
