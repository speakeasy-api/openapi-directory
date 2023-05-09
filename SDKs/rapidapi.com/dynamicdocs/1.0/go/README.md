# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/rapidapi.com/dynamicdocs/1.0/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            AdvSecurityToken: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.PDFGeneration.Compile(ctx, operations.CompileRequest{
        ContentType: "application/json",
        RequestBody: map[string]interface{}{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        DocFileName: sdk.String("brilliantDocument"),
        DocURLExpiresIn: sdk.Int64(3600),
        LatexCompiler: operations.CompileLatexCompilerEnumLualatex.ToPointer(),
        LatexRuns: sdk.Int64(423655),
        MainFileName: sdk.String("inputFile.tex"),
        TemplateToken: "7a582350acb835ed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Compile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [PDFGeneration](docs/pdfgeneration/README.md)

* [Compile](docs/pdfgeneration/README.md#compile) - Compile New Document PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
