# projects

### Available Operations

* [kmsinventoryProjectsCryptoKeysList](#kmsinventoryprojectscryptokeyslist) - Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.
* [kmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummary](#kmsinventoryprojectslocationskeyringscryptokeysgetprotectedresourcessummary) - Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.

## kmsinventoryProjectsCryptoKeysList

Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KmsinventoryProjectsCryptoKeysListRequest;
import org.openapis.openapi.models.operations.KmsinventoryProjectsCryptoKeysListResponse;
import org.openapis.openapi.models.operations.KmsinventoryProjectsCryptoKeysListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KmsinventoryProjectsCryptoKeysListRequest req = new KmsinventoryProjectsCryptoKeysListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                key = "at";
                oauthToken = "at";
                pageSize = 978619L;
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "quod";
                uploadProtocol = "esse";
            }};            

            KmsinventoryProjectsCryptoKeysListResponse res = sdk.projects.kmsinventoryProjectsCryptoKeysList(req, new KmsinventoryProjectsCryptoKeysListSecurity("totam", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudKmsInventoryV1ListCryptoKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummary

Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummaryRequest;
import org.openapis.openapi.models.operations.KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummaryResponse;
import org.openapis.openapi.models.operations.KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummarySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummaryRequest req = new KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummaryRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "fugit";
                key = "deleniti";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "totam";
                uploadProtocol = "beatae";
            }};            

            KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummaryResponse res = sdk.projects.kmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummary(req, new KmsinventoryProjectsLocationsKeyRingsCryptoKeysGetProtectedResourcesSummarySecurity("commodi", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudKmsInventoryV1ProtectedResourcesSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
