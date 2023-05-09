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

            DisplayvideoTargetingTypesTargetingOptionsGetRequest req = new DisplayvideoTargetingTypesTargetingOptionsGetRequest("laboriosam", DisplayvideoTargetingTypesTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_APP_CATEGORY) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                advertiserId = "dicta";
                alt = AltEnum.PROTO;
                callback = "reprehenderit";
                fields = "tempora";
                key = "ad";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "eligendi";
                uploadProtocol = "consequuntur";
            }};            

            DisplayvideoTargetingTypesTargetingOptionsGetResponse res = sdk.targetingTypes.displayvideoTargetingTypesTargetingOptionsGet(req, new DisplayvideoTargetingTypesTargetingOptionsGetSecurity("quae", "veniam") {{
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

            DisplayvideoTargetingTypesTargetingOptionsListRequest req = new DisplayvideoTargetingTypesTargetingOptionsListRequest(DisplayvideoTargetingTypesTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_NEGATIVE_KEYWORD_LIST) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                advertiserId = "porro";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "veniam";
                filter = "autem";
                key = "esse";
                oauthToken = "officiis";
                orderBy = "aperiam";
                pageSize = 933677L;
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "consequuntur";
                uploadProtocol = "odio";
            }};            

            DisplayvideoTargetingTypesTargetingOptionsListResponse res = sdk.targetingTypes.displayvideoTargetingTypesTargetingOptionsList(req, new DisplayvideoTargetingTypesTargetingOptionsListSecurity("suscipit", "quis") {{
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

            DisplayvideoTargetingTypesTargetingOptionsSearchRequest req = new DisplayvideoTargetingTypesTargetingOptionsSearchRequest(DisplayvideoTargetingTypesTargetingOptionsSearchTargetingTypeEnum.TARGETING_TYPE_EXCHANGE) {{
                dollarXgafv = XgafvEnum.ONE;
                searchTargetingOptionsRequest = new SearchTargetingOptionsRequest() {{
                    advertiserId = "repellendus";
                    businessChainSearchTerms = new BusinessChainSearchTerms() {{
                        businessChainQuery = "ex";
                        regionQuery = "consequuntur";
                    }};;
                    geoRegionSearchTerms = new GeoRegionSearchTerms() {{
                        geoRegionQuery = "delectus";
                    }};;
                    pageSize = 751906;
                    pageToken = "possimus";
                    poiSearchTerms = new PoiSearchTerms() {{
                        poiQuery = "laborum";
                    }};;
                }};;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "reiciendis";
                key = "consequatur";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "inventore";
                uploadProtocol = "laboriosam";
            }};            

            DisplayvideoTargetingTypesTargetingOptionsSearchResponse res = sdk.targetingTypes.displayvideoTargetingTypesTargetingOptionsSearch(req, new DisplayvideoTargetingTypesTargetingOptionsSearchSecurity("quod", "repudiandae") {{
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
