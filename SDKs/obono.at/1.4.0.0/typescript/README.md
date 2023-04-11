# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/obono.at/1.4.0.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/obono.at/1.4.0.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetAuthResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    jwt: "YOUR_API_KEY_HERE",
  },
});

sdk.auth.getAuth().then((res: GetAuthResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### auth

* `getAuth` - Request a JWT access token using your obono username and password.

### beleg

* `addBeleg` - Signs a receipt and stores it in the "Datenerfassungsprotokoll".
* `createAbschluss` - Generates an `Abschlussbeleg`.
* `getBeleg` - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
* `getBelege` - Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
* `getBelegeBelegUuid` - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

### export

* `getExportCsvRegistrierkassenRegistrierkasseUuidBelege`
* `getExportDep131RegistrierkassenRegistrierkasseUuidBelege`
* `getExportDep7RegistrierkassenRegistrierkasseUuidBelege`
* `getExportGobdRegistrierkassenRegistrierkasseUuid`
* `getExportHtmlBelegeBelegUuid`
* `getExportPdfBelegeBelegUuid`
* `getExportQrBelegeBelegUuid`
* `getExportThermalPrintBelegeBelegUuid`
* `getExportXlsRegistrierkassenRegistrierkasseUuidBelege`

### monatsbelege

* `getMonatsbelege` - Returns a list of `Monatsbelege`.

### registrierkasse

* `getDEP` - Generates a DEP file.
* `getRegistrierkasse` - Returns information about a particular `Registrierkasse`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

