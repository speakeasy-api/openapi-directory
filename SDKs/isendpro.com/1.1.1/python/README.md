# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/isendpro.com/1.1.1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.ShortlinkRequest(
    keyid="corrupti",
    shortlink="provident",
)
    
res = s.add_shortlink.add_shortlink(req)

if res.shortlink_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### add_shortlink

* `add_shortlink` - add a shortlink

### add_subaccount

* `subaccount_add` - Ajoute un sous compte

### campagne

* `get_campagne` - Retourne les SMS envoyés sur une période donnée

### comptage

* `comptage` - Compter le nombre de caractère 

### credit

* `get_credit` - Interrogation credit

### del_liste_noire

* `del_liste_noire` - Ajoute un numero en liste noire

### edit_subaccount

* `subaccount_edit` - Edit a subaccount

### get_liste_noire

* `get_liste_noire` - Retourne le liste noire

### hlr

* `get_hlr` - Vérifier la validité d'un numéro

### repertoire

* `repertoire` - Gestion repertoire (modification)
* `repertoire_crea` - Gestion repertoire (creation)

### set_liste_noire

* `set_liste_noire` - Ajoute un numero en liste noire

### sms

* `send_sms` - Envoyer un sms
* `send_sms_multi` - Envoyer des SMS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
