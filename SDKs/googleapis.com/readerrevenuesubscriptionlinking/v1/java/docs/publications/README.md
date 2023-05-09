# publications

### Available Operations

* [readerrevenuesubscriptionlinkingPublicationsReadersDelete](#readerrevenuesubscriptionlinkingpublicationsreadersdelete) - Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.
* [readerrevenuesubscriptionlinkingPublicationsReadersGetEntitlements](#readerrevenuesubscriptionlinkingpublicationsreadersgetentitlements) - Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
* [readerrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements](#readerrevenuesubscriptionlinkingpublicationsreadersupdateentitlements) - Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

## readerrevenuesubscriptionlinkingPublicationsReadersDelete

Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest req = new ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "delectus";
                force = false;
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteResponse res = sdk.publications.readerrevenuesubscriptionlinkingPublicationsReadersDelete(req);

            if (res.deleteReaderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## readerrevenuesubscriptionlinkingPublicationsReadersGetEntitlements

Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlementsRequest;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlementsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlementsRequest req = new ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlementsRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "temporibus";
                key = "ab";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "deserunt";
                uploadProtocol = "perferendis";
            }};            

            ReaderrevenuesubscriptionlinkingPublicationsReadersGetEntitlementsResponse res = sdk.publications.readerrevenuesubscriptionlinkingPublicationsReadersGetEntitlements(req);

            if (res.readerEntitlements != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## readerrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements

Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlementsRequest;
import org.openapis.openapi.models.operations.ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlementsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Entitlement;
import org.openapis.openapi.models.shared.ReaderEntitlementsInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlementsRequest req = new ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlementsRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                readerEntitlementsInput = new ReaderEntitlementsInput() {{
                    entitlements = new org.openapis.openapi.models.shared.Entitlement[]{{
                        add(new Entitlement() {{
                            detail = "quo";
                            expireTime = "odit";
                            productId = "at";
                            subscriptionToken = "at";
                        }}),
                        add(new Entitlement() {{
                            detail = "maiores";
                            expireTime = "molestiae";
                            productId = "quod";
                            subscriptionToken = "quod";
                        }}),
                        add(new Entitlement() {{
                            detail = "esse";
                            expireTime = "totam";
                            productId = "porro";
                            subscriptionToken = "dolorum";
                        }}),
                        add(new Entitlement() {{
                            detail = "dicta";
                            expireTime = "nam";
                            productId = "officia";
                            subscriptionToken = "occaecati";
                        }}),
                    }};
                }};;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "optio";
                key = "totam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                updateMask = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            ReaderrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlementsResponse res = sdk.publications.readerrevenuesubscriptionlinkingPublicationsReadersUpdateEntitlements(req);

            if (res.readerEntitlements != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
