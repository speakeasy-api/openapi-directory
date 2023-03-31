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

import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeletePathParams;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteQueryParams;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest req = new ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest() {{
                pathParams = new ReaderrevenuesubscriptionlinkingPublicationsReadersDeletePathParams() {{
                    name = "corrupti";
                }};
                queryParams = new ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    force = false;
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteResponse res = sdk.publications.readerrevenuesubscriptionlinkingPublicationsReadersDelete(req);

            if (res.deleteReaderResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### publications

* `readerrevenuesubscriptionlinkingPublicationsReadersDelete` - Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.
* `readerrevenuesubscriptionlinkingPublicationsReadersGetEntitlements` - Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
* `readerrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements` - Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
