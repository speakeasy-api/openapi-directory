# regions

### Available Operations

* [contentRegionsCreate](#contentregionscreate) - Creates a region definition in your Merchant Center account.
* [contentRegionsDelete](#contentregionsdelete) - Deletes a region definition from your Merchant Center account.
* [contentRegionsGet](#contentregionsget) - Retrieves a region defined in your Merchant Center account.
* [contentRegionsList](#contentregionslist) - Lists the regions in your Merchant Center account.
* [contentRegionsPatch](#contentregionspatch) - Updates a region definition in your Merchant Center account.

## contentRegionsCreate

Creates a region definition in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRegionsCreateRequest;
import org.openapis.openapi.models.operations.ContentRegionsCreateResponse;
import org.openapis.openapi.models.operations.ContentRegionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionGeoTargetArea;
import org.openapis.openapi.models.shared.RegionInput;
import org.openapis.openapi.models.shared.RegionPostalCodeArea;
import org.openapis.openapi.models.shared.RegionPostalCodeAreaPostalCodeRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRegionsCreateRequest req = new ContentRegionsCreateRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInput = new RegionInput() {{
                    displayName = "inventore";
                    geotargetArea = new RegionGeoTargetArea() {{
                        geotargetCriteriaIds = new String[]{{
                            add("modi"),
                            add("dicta"),
                        }};
                    }};;
                    postalCodeArea = new RegionPostalCodeArea() {{
                        postalCodes = new org.openapis.openapi.models.shared.RegionPostalCodeAreaPostalCodeRange[]{{
                            add(new RegionPostalCodeAreaPostalCodeRange() {{
                                begin = "non";
                                end = "dolore";
                            }}),
                            add(new RegionPostalCodeAreaPostalCodeRange() {{
                                begin = "soluta";
                                end = "occaecati";
                            }}),
                            add(new RegionPostalCodeAreaPostalCodeRange() {{
                                begin = "sit";
                                end = "asperiores";
                            }}),
                        }};
                        regionCode = "aspernatur";
                    }};;
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "nulla";
                key = "ab";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "possimus";
                regionId = "magni";
                uploadType = "a";
                uploadProtocol = "cumque";
            }};            

            ContentRegionsCreateResponse res = sdk.regions.contentRegionsCreate(req, new ContentRegionsCreateSecurity("explicabo", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.region != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentRegionsDelete

Deletes a region definition from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRegionsDeleteRequest;
import org.openapis.openapi.models.operations.ContentRegionsDeleteResponse;
import org.openapis.openapi.models.operations.ContentRegionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRegionsDeleteRequest req = new ContentRegionsDeleteRequest("natus", "earum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "nemo";
                key = "provident";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "tempore";
                uploadProtocol = "molestias";
            }};            

            ContentRegionsDeleteResponse res = sdk.regions.contentRegionsDelete(req, new ContentRegionsDeleteSecurity("amet", "enim") {{
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

## contentRegionsGet

Retrieves a region defined in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRegionsGetRequest;
import org.openapis.openapi.models.operations.ContentRegionsGetResponse;
import org.openapis.openapi.models.operations.ContentRegionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRegionsGetRequest req = new ContentRegionsGetRequest("illum", "sed") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "dolores";
                key = "asperiores";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "blanditiis";
                uploadProtocol = "magnam";
            }};            

            ContentRegionsGetResponse res = sdk.regions.contentRegionsGet(req, new ContentRegionsGetSecurity("excepturi", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.region != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentRegionsList

Lists the regions in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRegionsListRequest;
import org.openapis.openapi.models.operations.ContentRegionsListResponse;
import org.openapis.openapi.models.operations.ContentRegionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRegionsListRequest req = new ContentRegionsListRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "id";
                key = "eveniet";
                oauthToken = "optio";
                pageSize = 747100L;
                pageToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "neque";
                uploadProtocol = "esse";
            }};            

            ContentRegionsListResponse res = sdk.regions.contentRegionsList(req, new ContentRegionsListSecurity("placeat", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRegionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentRegionsPatch

Updates a region definition in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRegionsPatchRequest;
import org.openapis.openapi.models.operations.ContentRegionsPatchResponse;
import org.openapis.openapi.models.operations.ContentRegionsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionGeoTargetArea;
import org.openapis.openapi.models.shared.RegionInput;
import org.openapis.openapi.models.shared.RegionPostalCodeArea;
import org.openapis.openapi.models.shared.RegionPostalCodeAreaPostalCodeRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRegionsPatchRequest req = new ContentRegionsPatchRequest("excepturi", "eos") {{
                dollarXgafv = XgafvEnum.ONE;
                regionInput = new RegionInput() {{
                    displayName = "quia";
                    geotargetArea = new RegionGeoTargetArea() {{
                        geotargetCriteriaIds = new String[]{{
                            add("excepturi"),
                            add("sapiente"),
                            add("maiores"),
                            add("exercitationem"),
                        }};
                    }};;
                    postalCodeArea = new RegionPostalCodeArea() {{
                        postalCodes = new org.openapis.openapi.models.shared.RegionPostalCodeAreaPostalCodeRange[]{{
                            add(new RegionPostalCodeAreaPostalCodeRange() {{
                                begin = "dolore";
                                end = "iste";
                            }}),
                            add(new RegionPostalCodeAreaPostalCodeRange() {{
                                begin = "inventore";
                                end = "error";
                            }}),
                        }};
                        regionCode = "id";
                    }};;
                }};;
                accessToken = "harum";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "aspernatur";
                key = "vero";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "eum";
                updateMask = "quasi";
                uploadType = "tenetur";
                uploadProtocol = "accusantium";
            }};            

            ContentRegionsPatchResponse res = sdk.regions.contentRegionsPatch(req, new ContentRegionsPatchSecurity("quo", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.region != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
