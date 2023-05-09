# targetingTypes

### Available Operations

* [displayvideoTargetingTypesTargetingOptionsGet](#displayvideotargetingtypestargetingoptionsget) - Gets a single targeting option.
* [displayvideoTargetingTypesTargetingOptionsList](#displayvideotargetingtypestargetingoptionslist) - Lists targeting options of a given type.
* [displayvideoTargetingTypesTargetingOptionsSearch](#displayvideotargetingtypestargetingoptionssearch) - Searches for targeting options of a given type based on the given search terms.

## displayvideoTargetingTypesTargetingOptionsGet

Gets a single targeting option.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsGetSecurity;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoTargetingTypesTargetingOptionsGetRequest req = new DisplayvideoTargetingTypesTargetingOptionsGetRequest("tempora", DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sequi";
                advertiserId = "eligendi";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "veniam";
                key = "sint";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "porro";
                uploadProtocol = "nesciunt";
            }};            

            DisplayvideoTargetingTypesTargetingOptionsGetResponse res = sdk.targetingTypes.displayvideoTargetingTypesTargetingOptionsGet(req, new DisplayvideoTargetingTypesTargetingOptionsGetSecurity("maiores", "veniam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.targetingOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoTargetingTypesTargetingOptionsList

Lists targeting options of a given type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsListSecurity;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoTargetingTypesTargetingOptionsListRequest req = new DisplayvideoTargetingTypesTargetingOptionsListRequest(DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_ON_SCREEN_POSITION) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officiis";
                advertiserId = "aperiam";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "corporis";
                filter = "consequuntur";
                key = "odio";
                oauthToken = "suscipit";
                orderBy = "quis";
                pageSize = 747358L;
                pageToken = "beatae";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "ex";
                uploadProtocol = "consequuntur";
            }};            

            DisplayvideoTargetingTypesTargetingOptionsListResponse res = sdk.targetingTypes.displayvideoTargetingTypesTargetingOptionsList(req, new DisplayvideoTargetingTypesTargetingOptionsListSecurity("delectus", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoTargetingTypesTargetingOptionsSearch

Searches for targeting options of a given type based on the given search terms.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsSearchRequest;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsSearchResponse;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsSearchSecurity;
import org.openapis.openapi.models.operations.DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BusinessChainSearchTerms;
import org.openapis.openapi.models.shared.GeoRegionSearchTerms;
import org.openapis.openapi.models.shared.PoiSearchTerms;
import org.openapis.openapi.models.shared.SearchTargetingOptionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoTargetingTypesTargetingOptionsSearchRequest req = new DisplayvideoTargetingTypesTargetingOptionsSearchRequest(DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum.TARGETING_TYPE_SUB_EXCHANGE) {{
                dollarXgafv = XgafvEnum.TWO;
                searchTargetingOptionsRequest = new SearchTargetingOptionsRequest() {{
                    advertiserId = "optio";
                    businessChainSearchTerms = new BusinessChainSearchTerms() {{
                        businessChainQuery = "debitis";
                        regionQuery = "architecto";
                    }};;
                    geoRegionSearchTerms = new GeoRegionSearchTerms() {{
                        geoRegionQuery = "reiciendis";
                    }};;
                    pageSize = 10792;
                    pageToken = "sunt";
                    poiSearchTerms = new PoiSearchTerms() {{
                        poiQuery = "odit";
                    }};;
                }};;
                accessToken = "inventore";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "repudiandae";
                key = "consequuntur";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "sint";
                uploadProtocol = "accusamus";
            }};            

            DisplayvideoTargetingTypesTargetingOptionsSearchResponse res = sdk.targetingTypes.displayvideoTargetingTypesTargetingOptionsSearch(req, new DisplayvideoTargetingTypesTargetingOptionsSearchSecurity("deleniti", "earum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
