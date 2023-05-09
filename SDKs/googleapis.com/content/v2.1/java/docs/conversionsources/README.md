# conversionsources

### Available Operations

* [contentConversionsourcesCreate](#contentconversionsourcescreate) - Creates a new conversion source.
* [contentConversionsourcesDelete](#contentconversionsourcesdelete) - Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.
* [contentConversionsourcesGet](#contentconversionsourcesget) - Fetches a conversion source.
* [contentConversionsourcesList](#contentconversionsourceslist) - Retrieves the list of conversion sources the caller has access to.
* [contentConversionsourcesPatch](#contentconversionsourcespatch) - Updates information of an existing conversion source.
* [contentConversionsourcesUndelete](#contentconversionsourcesundelete) - Re-enables an archived conversion source.

## contentConversionsourcesCreate

Creates a new conversion source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentConversionsourcesCreateRequest;
import org.openapis.openapi.models.operations.ContentConversionsourcesCreateResponse;
import org.openapis.openapi.models.operations.ContentConversionsourcesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttributionSettingsAttributionModelEnum;
import org.openapis.openapi.models.shared.AttributionSettingsInput;
import org.openapis.openapi.models.shared.ConversionSourceInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsLinkInput;
import org.openapis.openapi.models.shared.MerchantCenterDestinationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentConversionsourcesCreateRequest req = new ContentConversionsourcesCreateRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                conversionSourceInput = new ConversionSourceInput() {{
                    googleAnalyticsLink = new GoogleAnalyticsLinkInput() {{
                        attributionSettings = new AttributionSettingsInput() {{
                            attributionLookbackWindowInDays = 187552;
                            attributionModel = AttributionSettingsAttributionModelEnum.CROSS_CHANNEL_LINEAR;
                        }};;
                        propertyId = "distinctio";
                    }};;
                    merchantCenterDestination = new MerchantCenterDestinationInput() {{
                        attributionSettings = new AttributionSettingsInput() {{
                            attributionLookbackWindowInDays = 528940;
                            attributionModel = AttributionSettingsAttributionModelEnum.CROSS_CHANNEL_FIRST_CLICK;
                        }};;
                        currencyCode = "aliquam";
                        displayName = "ad";
                    }};;
                }};;
                accessToken = "repellat";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "perspiciatis";
                key = "nihil";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "alias";
                uploadProtocol = "maiores";
            }};            

            ContentConversionsourcesCreateResponse res = sdk.conversionsources.contentConversionsourcesCreate(req, new ContentConversionsourcesCreateSecurity("reiciendis", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentConversionsourcesDelete

Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentConversionsourcesDeleteRequest;
import org.openapis.openapi.models.operations.ContentConversionsourcesDeleteResponse;
import org.openapis.openapi.models.operations.ContentConversionsourcesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentConversionsourcesDeleteRequest req = new ContentConversionsourcesDeleteRequest("id", "minima") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "recusandae";
                key = "omnis";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "ex";
                uploadProtocol = "ut";
            }};            

            ContentConversionsourcesDeleteResponse res = sdk.conversionsources.contentConversionsourcesDelete(req, new ContentConversionsourcesDeleteSecurity("culpa", "adipisci") {{
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

## contentConversionsourcesGet

Fetches a conversion source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentConversionsourcesGetRequest;
import org.openapis.openapi.models.operations.ContentConversionsourcesGetResponse;
import org.openapis.openapi.models.operations.ContentConversionsourcesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentConversionsourcesGetRequest req = new ContentConversionsourcesGetRequest("debitis", "laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "provident";
                key = "quis";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "provident";
                uploadProtocol = "aspernatur";
            }};            

            ContentConversionsourcesGetResponse res = sdk.conversionsources.contentConversionsourcesGet(req, new ContentConversionsourcesGetSecurity("ullam", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentConversionsourcesList

Retrieves the list of conversion sources the caller has access to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentConversionsourcesListRequest;
import org.openapis.openapi.models.operations.ContentConversionsourcesListResponse;
import org.openapis.openapi.models.operations.ContentConversionsourcesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentConversionsourcesListRequest req = new ContentConversionsourcesListRequest("animi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "animi";
                key = "ex";
                oauthToken = "aliquid";
                pageSize = 37565L;
                pageToken = "repellat";
                prettyPrint = false;
                quotaUser = "doloribus";
                showDeleted = false;
                uploadType = "ullam";
                uploadProtocol = "in";
            }};            

            ContentConversionsourcesListResponse res = sdk.conversionsources.contentConversionsourcesList(req, new ContentConversionsourcesListSecurity("nam", "earum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listConversionSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentConversionsourcesPatch

Updates information of an existing conversion source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentConversionsourcesPatchRequest;
import org.openapis.openapi.models.operations.ContentConversionsourcesPatchResponse;
import org.openapis.openapi.models.operations.ContentConversionsourcesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AttributionSettingsAttributionModelEnum;
import org.openapis.openapi.models.shared.AttributionSettingsInput;
import org.openapis.openapi.models.shared.ConversionSourceInput;
import org.openapis.openapi.models.shared.GoogleAnalyticsLinkInput;
import org.openapis.openapi.models.shared.MerchantCenterDestinationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentConversionsourcesPatchRequest req = new ContentConversionsourcesPatchRequest("officia", "laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                conversionSourceInput = new ConversionSourceInput() {{
                    googleAnalyticsLink = new GoogleAnalyticsLinkInput() {{
                        attributionSettings = new AttributionSettingsInput() {{
                            attributionLookbackWindowInDays = 266697;
                            attributionModel = AttributionSettingsAttributionModelEnum.CROSS_CHANNEL_TIME_DECAY;
                        }};;
                        propertyId = "molestias";
                    }};;
                    merchantCenterDestination = new MerchantCenterDestinationInput() {{
                        attributionSettings = new AttributionSettingsInput() {{
                            attributionLookbackWindowInDays = 889794;
                            attributionModel = AttributionSettingsAttributionModelEnum.CROSS_CHANNEL_TIME_DECAY;
                        }};;
                        currencyCode = "cumque";
                        displayName = "vitae";
                    }};;
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "inventore";
                key = "fugit";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "quae";
                updateMask = "perferendis";
                uploadType = "velit";
                uploadProtocol = "aspernatur";
            }};            

            ContentConversionsourcesPatchResponse res = sdk.conversionsources.contentConversionsourcesPatch(req, new ContentConversionsourcesPatchSecurity("eum", "eius") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.conversionSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentConversionsourcesUndelete

Re-enables an archived conversion source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentConversionsourcesUndeleteRequest;
import org.openapis.openapi.models.operations.ContentConversionsourcesUndeleteResponse;
import org.openapis.openapi.models.operations.ContentConversionsourcesUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentConversionsourcesUndeleteRequest req = new ContentConversionsourcesUndeleteRequest("rem", "at") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sapiente", "eum");
                }};
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "cupiditate";
                key = "provident";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "hic";
                uploadProtocol = "illum";
            }};            

            ContentConversionsourcesUndeleteResponse res = sdk.conversionsources.contentConversionsourcesUndelete(req, new ContentConversionsourcesUndeleteSecurity("eaque", "earum") {{
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
