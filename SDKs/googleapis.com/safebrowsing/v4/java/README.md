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
import org.openapis.openapi.models.operations.SafebrowsingEncodedFullHashesGetRequest;
import org.openapis.openapi.models.operations.SafebrowsingEncodedFullHashesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SafebrowsingEncodedFullHashesGetRequest req = new SafebrowsingEncodedFullHashesGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                clientId = "nulla";
                clientVersion = "corrupti";
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            SafebrowsingEncodedFullHashesGetResponse res = sdk.encodedFullHashes.safebrowsingEncodedFullHashesGet(req);

            if (res.googleSecuritySafebrowsingV4FindFullHashesResponse != null) {
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


### [encodedFullHashes](docs/encodedfullhashes/README.md)

* [safebrowsingEncodedFullHashesGet](docs/encodedfullhashes/README.md#safebrowsingencodedfullhashesget)

### [encodedUpdates](docs/encodedupdates/README.md)

* [safebrowsingEncodedUpdatesGet](docs/encodedupdates/README.md#safebrowsingencodedupdatesget)

### [fullHashes](docs/fullhashes/README.md)

* [safebrowsingFullHashesFind](docs/fullhashes/README.md#safebrowsingfullhashesfind) - Finds the full hashes that match the requested hash prefixes.

### [threatHits](docs/threathits/README.md)

* [safebrowsingThreatHitsCreate](docs/threathits/README.md#safebrowsingthreathitscreate) - Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

### [threatListUpdates](docs/threatlistupdates/README.md)

* [safebrowsingThreatListUpdatesFetch](docs/threatlistupdates/README.md#safebrowsingthreatlistupdatesfetch) - Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

### [threatLists](docs/threatlists/README.md)

* [safebrowsingThreatListsList](docs/threatlists/README.md#safebrowsingthreatlistslist) - Lists the Safe Browsing threat lists available for download.

### [threatMatches](docs/threatmatches/README.md)

* [safebrowsingThreatMatchesFind](docs/threatmatches/README.md#safebrowsingthreatmatchesfind) - Finds the threat entries that match the Safe Browsing lists.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
