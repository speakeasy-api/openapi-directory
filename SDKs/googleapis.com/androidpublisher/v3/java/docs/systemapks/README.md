# systemapks

### Available Operations

* [androidpublisherSystemapksVariantsCreate](#androidpublishersystemapksvariantscreate) - Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.
* [androidpublisherSystemapksVariantsDownload](#androidpublishersystemapksvariantsdownload) - Downloads a previously created system APK which is suitable for inclusion in a system image.
* [androidpublisherSystemapksVariantsGet](#androidpublishersystemapksvariantsget) - Returns a previously created system APK variant.
* [androidpublisherSystemapksVariantsList](#androidpublishersystemapksvariantslist) - Returns the list of previously created system APK variants.

## androidpublisherSystemapksVariantsCreate

Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsCreateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsCreateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeviceSpec;
import org.openapis.openapi.models.shared.VariantInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherSystemapksVariantsCreateRequest req = new AndroidpublisherSystemapksVariantsCreateRequest("at", "eum") {{
                dollarXgafv = XgafvEnum.ONE;
                variantInput = new VariantInput() {{
                    deviceSpec = new DeviceSpec() {{
                        screenDensity = 531195L;
                        supportedAbis = new String[]{{
                            add("nihil"),
                            add("atque"),
                            add("rerum"),
                        }};
                        supportedLocales = new String[]{{
                            add("atque"),
                            add("nostrum"),
                            add("atque"),
                        }};
                    }};;
                }};;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "rem";
                key = "magni";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "placeat";
                uploadProtocol = "enim";
            }};            

            AndroidpublisherSystemapksVariantsCreateResponse res = sdk.systemapks.androidpublisherSystemapksVariantsCreate(req, new AndroidpublisherSystemapksVariantsCreateSecurity("labore", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.variant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherSystemapksVariantsDownload

Downloads a previously created system APK which is suitable for inclusion in a system image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsDownloadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsDownloadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsDownloadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherSystemapksVariantsDownloadRequest req = new AndroidpublisherSystemapksVariantsDownloadRequest("saepe", 965735L, "officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cumque";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "doloribus";
                key = "quia";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "cumque";
                uploadProtocol = "quis";
            }};            

            AndroidpublisherSystemapksVariantsDownloadResponse res = sdk.systemapks.androidpublisherSystemapksVariantsDownload(req, new AndroidpublisherSystemapksVariantsDownloadSecurity("enim", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherSystemapksVariantsGet

Returns a previously created system APK variant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherSystemapksVariantsGetRequest req = new AndroidpublisherSystemapksVariantsGetRequest("nemo", 849337L, "nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.PROTO;
                callback = "asperiores";
                fields = "recusandae";
                key = "voluptates";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "fugit";
                uploadProtocol = "sit";
            }};            

            AndroidpublisherSystemapksVariantsGetResponse res = sdk.systemapks.androidpublisherSystemapksVariantsGet(req, new AndroidpublisherSystemapksVariantsGetSecurity("aliquid", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.variant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherSystemapksVariantsList

Returns the list of previously created system APK variants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherSystemapksVariantsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherSystemapksVariantsListRequest req = new AndroidpublisherSystemapksVariantsListRequest("sed", "deleniti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nesciunt";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "aliquam";
                key = "deserunt";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "impedit";
                uploadProtocol = "eius";
            }};            

            AndroidpublisherSystemapksVariantsListResponse res = sdk.systemapks.androidpublisherSystemapksVariantsList(req, new AndroidpublisherSystemapksVariantsListSecurity("voluptatum", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.systemApksListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
