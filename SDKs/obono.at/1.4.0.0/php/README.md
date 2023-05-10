# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuthSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetAuthSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->auth->getAuth($requestSecurity);

    if ($response->authResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [auth](docs/auth/README.md)

* [getAuth](docs/auth/README.md#getauth) - Request a JWT access token using your obono username and password.

### [beleg](docs/beleg/README.md)

* [addBeleg](docs/beleg/README.md#addbeleg) - Signs a receipt and stores it in the "Datenerfassungsprotokoll".
* [createAbschluss](docs/beleg/README.md#createabschluss) - Generates an `Abschlussbeleg`.
* [getBeleg](docs/beleg/README.md#getbeleg) - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
* [getBelege](docs/beleg/README.md#getbelege) - Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
* [getBelegeBelegUuid](docs/beleg/README.md#getbelegebeleguuid) - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

### [export](docs/export/README.md)

* [getExportCsvRegistrierkassenRegistrierkasseUuidBelege](docs/export/README.md#getexportcsvregistrierkassenregistrierkasseuuidbelege)
* [getExportDep131RegistrierkassenRegistrierkasseUuidBelege](docs/export/README.md#getexportdep131registrierkassenregistrierkasseuuidbelege)
* [getExportDep7RegistrierkassenRegistrierkasseUuidBelege](docs/export/README.md#getexportdep7registrierkassenregistrierkasseuuidbelege)
* [getExportGobdRegistrierkassenRegistrierkasseUuid](docs/export/README.md#getexportgobdregistrierkassenregistrierkasseuuid)
* [getExportHtmlBelegeBelegUuid](docs/export/README.md#getexporthtmlbelegebeleguuid)
* [getExportPdfBelegeBelegUuid](docs/export/README.md#getexportpdfbelegebeleguuid)
* [getExportQrBelegeBelegUuid](docs/export/README.md#getexportqrbelegebeleguuid)
* [getExportThermalPrintBelegeBelegUuid](docs/export/README.md#getexportthermalprintbelegebeleguuid)
* [getExportXlsRegistrierkassenRegistrierkasseUuidBelege](docs/export/README.md#getexportxlsregistrierkassenregistrierkasseuuidbelege)

### [monatsbelege](docs/monatsbelege/README.md)

* [getMonatsbelege](docs/monatsbelege/README.md#getmonatsbelege) - Returns a list of `Monatsbelege`.

### [registrierkasse](docs/registrierkasse/README.md)

* [getDEP](docs/registrierkasse/README.md#getdep) - Generates a DEP file.
* [getRegistrierkasse](docs/registrierkasse/README.md#getregistrierkasse) - Returns information about a particular `Registrierkasse`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
