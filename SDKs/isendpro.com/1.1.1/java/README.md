# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddShortlinkResponse;
import org.openapis.openapi.models.shared.ShortlinkRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ShortlinkRequest req = new ShortlinkRequest("corrupti", "provident");            

            AddShortlinkResponse res = sdk.addShortlink.addShortlink(req);

            if (res.shortlinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [addShortlink](docs/addshortlink/README.md)

* [addShortlink](docs/addshortlink/README.md#addshortlink) - add a shortlink

### [addSubaccount](docs/addsubaccount/README.md)

* [subaccountAdd](docs/addsubaccount/README.md#subaccountadd) - Ajoute un sous compte

### [campagne](docs/campagne/README.md)

* [getCampagne](docs/campagne/README.md#getcampagne) - Retourne les SMS envoyés sur une période donnée

### [comptage](docs/comptage/README.md)

* [comptage](docs/comptage/README.md#comptage) - Compter le nombre de caractère 

### [credit](docs/credit/README.md)

* [getCredit](docs/credit/README.md#getcredit) - Interrogation credit

### [delListeNoire](docs/dellistenoire/README.md)

* [delListeNoire](docs/dellistenoire/README.md#dellistenoire) - Ajoute un numero en liste noire

### [editSubaccount](docs/editsubaccount/README.md)

* [subaccountEdit](docs/editsubaccount/README.md#subaccountedit) - Edit a subaccount

### [getListeNoire](docs/getlistenoire/README.md)

* [getListeNoire](docs/getlistenoire/README.md#getlistenoire) - Retourne le liste noire

### [hlr](docs/hlr/README.md)

* [getHlr](docs/hlr/README.md#gethlr) - Vérifier la validité d'un numéro

### [repertoire](docs/repertoire/README.md)

* [repertoire](docs/repertoire/README.md#repertoire) - Gestion repertoire (modification)
* [repertoireCrea](docs/repertoire/README.md#repertoirecrea) - Gestion repertoire (creation)

### [setListeNoire](docs/setlistenoire/README.md)

* [setListeNoire](docs/setlistenoire/README.md#setlistenoire) - Ajoute un numero en liste noire

### [sms](docs/sms/README.md)

* [sendSms](docs/sms/README.md#sendsms) - Envoyer un sms
* [sendSmsMulti](docs/sms/README.md#sendsmsmulti) - Envoyer des SMS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
