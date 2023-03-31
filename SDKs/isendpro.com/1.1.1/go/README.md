# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/isendpro.com/1.1.1/go
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
    s := sdk.New()

    req := shared.ShortlinkRequest{
        Keyid: "corrupti",
        Shortlink: "provident",
    }

    ctx := context.Background()
    res, err := s.AddShortlink.AddShortlink(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ShortlinkResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AddShortlink

* `AddShortlink` - add a shortlink

### AddSubaccount

* `SubaccountAdd` - Ajoute un sous compte

### Campagne

* `GetCampagne` - Retourne les SMS envoyés sur une période donnée

### Comptage

* `Comptage` - Compter le nombre de caractère 

### Credit

* `GetCredit` - Interrogation credit

### DelListeNoire

* `DelListeNoire` - Ajoute un numero en liste noire

### EditSubaccount

* `SubaccountEdit` - Edit a subaccount

### GetListeNoire

* `GetListeNoire` - Retourne le liste noire

### Hlr

* `GetHlr` - Vérifier la validité d'un numéro

### Repertoire

* `Repertoire` - Gestion repertoire (modification)
* `RepertoireCrea` - Gestion repertoire (creation)

### SetListeNoire

* `SetListeNoire` - Ajoute un numero en liste noire

### Sms

* `SendSms` - Envoyer un sms
* `SendSmsMulti` - Envoyer des SMS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
