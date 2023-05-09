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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AddShortlink.AddShortlink(ctx, shared.ShortlinkRequest{
        Keyid: "corrupti",
        Shortlink: "provident",
    })
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


### [AddShortlink](docs/addshortlink/README.md)

* [AddShortlink](docs/addshortlink/README.md#addshortlink) - add a shortlink

### [AddSubaccount](docs/addsubaccount/README.md)

* [SubaccountAdd](docs/addsubaccount/README.md#subaccountadd) - Ajoute un sous compte

### [Campagne](docs/campagne/README.md)

* [GetCampagne](docs/campagne/README.md#getcampagne) - Retourne les SMS envoyés sur une période donnée

### [Comptage](docs/comptage/README.md)

* [Comptage](docs/comptage/README.md#comptage) - Compter le nombre de caractère 

### [Credit](docs/credit/README.md)

* [GetCredit](docs/credit/README.md#getcredit) - Interrogation credit

### [DelListeNoire](docs/dellistenoire/README.md)

* [DelListeNoire](docs/dellistenoire/README.md#dellistenoire) - Ajoute un numero en liste noire

### [EditSubaccount](docs/editsubaccount/README.md)

* [SubaccountEdit](docs/editsubaccount/README.md#subaccountedit) - Edit a subaccount

### [GetListeNoire](docs/getlistenoire/README.md)

* [GetListeNoire](docs/getlistenoire/README.md#getlistenoire) - Retourne le liste noire

### [Hlr](docs/hlr/README.md)

* [GetHlr](docs/hlr/README.md#gethlr) - Vérifier la validité d'un numéro

### [Repertoire](docs/repertoire/README.md)

* [Repertoire](docs/repertoire/README.md#repertoire) - Gestion repertoire (modification)
* [RepertoireCrea](docs/repertoire/README.md#repertoirecrea) - Gestion repertoire (creation)

### [SetListeNoire](docs/setlistenoire/README.md)

* [SetListeNoire](docs/setlistenoire/README.md#setlistenoire) - Ajoute un numero en liste noire

### [Sms](docs/sms/README.md)

* [SendSms](docs/sms/README.md#sendsms) - Envoyer un sms
* [SendSmsMulti](docs/sms/README.md#sendsmsmulti) - Envoyer des SMS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
