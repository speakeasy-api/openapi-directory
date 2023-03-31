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
            Jwt: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.GetAuth(ctx)
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


### Auth

* `GetAuth` - Request a JWT access token using your obono username and password.

### Beleg

* `AddBeleg` - Signs a receipt and stores it in the "Datenerfassungsprotokoll".
* `CreateAbschluss` - Generates an `Abschlussbeleg`.
* `GetBeleg` - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
* `GetBelege` - Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
* `GetBelegeBelegUUID` - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

### Export

* `GetExportCsvRegistrierkassenRegistrierkasseUUIDBelege`
* `GetExportDep131RegistrierkassenRegistrierkasseUUIDBelege`
* `GetExportDep7RegistrierkassenRegistrierkasseUUIDBelege`
* `GetExportGobdRegistrierkassenRegistrierkasseUUID`
* `GetExportHTMLBelegeBelegUUID`
* `GetExportPdfBelegeBelegUUID`
* `GetExportQrBelegeBelegUUID`
* `GetExportThermalPrintBelegeBelegUUID`
* `GetExportXlsRegistrierkassenRegistrierkasseUUIDBelege`

### Monatsbelege

* `GetMonatsbelege` - Returns a list of `Monatsbelege`.

### Registrierkasse

* `GetDEP` - Generates a DEP file.
* `GetRegistrierkasse` - Returns information about a particular `Registrierkasse`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
