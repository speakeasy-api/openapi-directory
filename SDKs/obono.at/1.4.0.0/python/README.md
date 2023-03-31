# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/obono.at/1.4.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        jwt="YOUR_API_KEY_HERE",
    ),
)

    
res = s.auth.get_auth()

if res.auth_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### auth

* `get_auth` - Request a JWT access token using your obono username and password.

### beleg

* `add_beleg` - Signs a receipt and stores it in the "Datenerfassungsprotokoll".
* `create_abschluss` - Generates an `Abschlussbeleg`.
* `get_beleg` - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
* `get_belege` - Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
* `get_belege_beleg_uuid_` - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

### export

* `get_export_csv_registrierkassen_registrierkasse_uuid_belege`
* `get_export_dep131_registrierkassen_registrierkasse_uuid_belege`
* `get_export_dep7_registrierkassen_registrierkasse_uuid_belege`
* `get_export_gobd_registrierkassen_registrierkasse_uuid_`
* `get_export_html_belege_beleg_uuid_`
* `get_export_pdf_belege_beleg_uuid_`
* `get_export_qr_belege_beleg_uuid_`
* `get_export_thermal_print_belege_beleg_uuid_`
* `get_export_xls_registrierkassen_registrierkasse_uuid_belege`

### monatsbelege

* `get_monatsbelege` - Returns a list of `Monatsbelege`.

### registrierkasse

* `get_dep` - Generates a DEP file.
* `get_registrierkasse` - Returns information about a particular `Registrierkasse`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
