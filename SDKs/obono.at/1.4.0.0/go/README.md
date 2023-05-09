# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/obono.at/1.4.0.0/go
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Auth.GetAuth(ctx, operations.GetAuthSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Auth](docs/auth/README.md)

* [GetAuth](docs/auth/README.md#getauth) - Request a JWT access token using your obono username and password.

### [Beleg](docs/beleg/README.md)

* [AddBeleg](docs/beleg/README.md#addbeleg) - Signs a receipt and stores it in the "Datenerfassungsprotokoll".
* [CreateAbschluss](docs/beleg/README.md#createabschluss) - Generates an `Abschlussbeleg`.
* [GetBeleg](docs/beleg/README.md#getbeleg) - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
* [GetBelege](docs/beleg/README.md#getbelege) - Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
* [GetBelegeBelegUUID](docs/beleg/README.md#getbelegebeleguuid) - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

### [Export](docs/export/README.md)

* [GetExportCsvRegistrierkassenRegistrierkasseUUIDBelege](docs/export/README.md#getexportcsvregistrierkassenregistrierkasseuuidbelege)
* [GetExportDep131RegistrierkassenRegistrierkasseUUIDBelege](docs/export/README.md#getexportdep131registrierkassenregistrierkasseuuidbelege)
* [GetExportDep7RegistrierkassenRegistrierkasseUUIDBelege](docs/export/README.md#getexportdep7registrierkassenregistrierkasseuuidbelege)
* [GetExportGobdRegistrierkassenRegistrierkasseUUID](docs/export/README.md#getexportgobdregistrierkassenregistrierkasseuuid)
* [GetExportHTMLBelegeBelegUUID](docs/export/README.md#getexporthtmlbelegebeleguuid)
* [GetExportPdfBelegeBelegUUID](docs/export/README.md#getexportpdfbelegebeleguuid)
* [GetExportQrBelegeBelegUUID](docs/export/README.md#getexportqrbelegebeleguuid)
* [GetExportThermalPrintBelegeBelegUUID](docs/export/README.md#getexportthermalprintbelegebeleguuid)
* [GetExportXlsRegistrierkassenRegistrierkasseUUIDBelege](docs/export/README.md#getexportxlsregistrierkassenregistrierkasseuuidbelege)

### [Monatsbelege](docs/monatsbelege/README.md)

* [GetMonatsbelege](docs/monatsbelege/README.md#getmonatsbelege) - Returns a list of `Monatsbelege`.

### [Registrierkasse](docs/registrierkasse/README.md)

* [GetDEP](docs/registrierkasse/README.md#getdep) - Generates a DEP file.
* [GetRegistrierkasse](docs/registrierkasse/README.md#getregistrierkasse) - Returns information about a particular `Registrierkasse`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
