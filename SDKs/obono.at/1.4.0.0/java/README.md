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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAuthResponse res = sdk.auth.getAuth();

            if (res.authResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
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
