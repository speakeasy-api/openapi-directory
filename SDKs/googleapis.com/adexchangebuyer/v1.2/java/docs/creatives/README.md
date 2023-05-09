# creatives

### Available Operations

* [adexchangebuyerCreativesGet](#adexchangebuyercreativesget) - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* [adexchangebuyerCreativesInsert](#adexchangebuyercreativesinsert) - Submit a new creative.
* [adexchangebuyerCreativesList](#adexchangebuyercreativeslist) - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

## adexchangebuyerCreativesGet

Gets the status for a single creative. A creative will be available 30-40 minutes after submission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesGetRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesGetResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerCreativesGetRequest req = new AdexchangebuyerCreativesGetRequest(222321L, "natus") {{
                alt = AltEnum.JSON;
                fields = "laboriosam";
                key = "hic";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "fuga";
                userIp = "in";
            }};            

            AdexchangebuyerCreativesGetResponse res = sdk.creatives.adexchangebuyerCreativesGet(req, new AdexchangebuyerCreativesGetSecurity("corporis", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerCreativesInsert

Submit a new creative.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesInsertRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesInsertResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Creative;
import org.openapis.openapi.models.shared.CreativeCorrections;
import org.openapis.openapi.models.shared.CreativeDisapprovalReasons;
import org.openapis.openapi.models.shared.CreativeFilteringReasons;
import org.openapis.openapi.models.shared.CreativeFilteringReasonsReasons;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerCreativesInsertRequest req = new AdexchangebuyerCreativesInsertRequest() {{
                creative = new Creative() {{
                    htmlSnippet = "iure";
                    accountId = 902349;
                    advertiserId = new String[]{{
                        add("architecto"),
                        add("ipsa"),
                        add("reiciendis"),
                    }};
                    advertiserName = "est";
                    agencyId = "mollitia";
                    apiUploadTimestamp = OffsetDateTime.parse("2022-08-29T05:39:49.755Z");
                    attribute = new Integer[]{{
                        add(358152),
                    }};
                    buyerCreativeId = "explicabo";
                    clickThroughUrl = new String[]{{
                        add("enim"),
                        add("omnis"),
                        add("nemo"),
                        add("minima"),
                    }};
                    corrections = new org.openapis.openapi.models.shared.CreativeCorrections[]{{
                        add(new CreativeCorrections() {{
                            details = new String[]{{
                                add("iure"),
                            }};
                            reason = "culpa";
                        }}),
                        add(new CreativeCorrections() {{
                            details = new String[]{{
                                add("sapiente"),
                                add("architecto"),
                                add("mollitia"),
                                add("dolorem"),
                            }};
                            reason = "culpa";
                        }}),
                        add(new CreativeCorrections() {{
                            details = new String[]{{
                                add("repellat"),
                            }};
                            reason = "mollitia";
                        }}),
                    }};
                    disapprovalReasons = new org.openapis.openapi.models.shared.CreativeDisapprovalReasons[]{{
                        add(new CreativeDisapprovalReasons() {{
                            details = new String[]{{
                                add("commodi"),
                                add("quam"),
                            }};
                            reason = "molestiae";
                        }}),
                        add(new CreativeDisapprovalReasons() {{
                            details = new String[]{{
                                add("error"),
                            }};
                            reason = "quia";
                        }}),
                        add(new CreativeDisapprovalReasons() {{
                            details = new String[]{{
                                add("vitae"),
                                add("laborum"),
                            }};
                            reason = "animi";
                        }}),
                    }};
                    filteringReasons = new CreativeFilteringReasons() {{
                        date = "enim";
                        reasons = new org.openapis.openapi.models.shared.CreativeFilteringReasonsReasons[]{{
                            add(new CreativeFilteringReasonsReasons() {{
                                filteringCount = "quo";
                                filteringStatus = 196582;
                            }}),
                        }};
                    }};;
                    height = 949572;
                    impressionTrackingUrl = new String[]{{
                        add("id"),
                        add("possimus"),
                    }};
                    kind = "aut";
                    productCategories = new Integer[]{{
                        add(622846),
                    }};
                    restrictedCategories = new Integer[]{{
                        add(673660),
                        add(96098),
                        add(971945),
                        add(976460),
                    }};
                    sensitiveCategories = new Integer[]{{
                        add(468651),
                        add(509624),
                        add(976762),
                        add(55714),
                    }};
                    status = "omnis";
                    vendorType = new Integer[]{{
                        add(739264),
                        add(19987),
                    }};
                    version = 39187;
                    videoURL = "reprehenderit";
                    width = 282807;
                }};;
                alt = AltEnum.JSON;
                fields = "maiores";
                key = "dicta";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "dolore";
                userIp = "iusto";
            }};            

            AdexchangebuyerCreativesInsertResponse res = sdk.creatives.adexchangebuyerCreativesInsert(req, new AdexchangebuyerCreativesInsertSecurity("dicta", "harum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerCreativesList

Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListSecurity;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListStatusFilterEnum;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerCreativesListRequest req = new AdexchangebuyerCreativesListRequest() {{
                alt = AltEnum.JSON;
                fields = "enim";
                key = "accusamus";
                maxResults = 414263L;
                oauthToken = "repudiandae";
                pageToken = "quae";
                prettyPrint = false;
                quotaUser = "ipsum";
                statusFilter = AdexchangebuyerCreativesListStatusFilterEnum.NOT_CHECKED;
                userIp = "molestias";
            }};            

            AdexchangebuyerCreativesListResponse res = sdk.creatives.adexchangebuyerCreativesList(req, new AdexchangebuyerCreativesListSecurity("excepturi", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativesList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
