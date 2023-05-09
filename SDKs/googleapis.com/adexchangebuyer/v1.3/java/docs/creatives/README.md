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

            AdexchangebuyerCreativesGetRequest req = new AdexchangebuyerCreativesGetRequest(841386L, "labore") {{
                alt = AltEnum.JSON;
                fields = "modi";
                key = "qui";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "cupiditate";
                userIp = "quos";
            }};            

            AdexchangebuyerCreativesGetResponse res = sdk.creatives.adexchangebuyerCreativesGet(req, new AdexchangebuyerCreativesGetSecurity("perferendis", "magni") {{
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
import org.openapis.openapi.models.shared.CreativeAdTechnologyProviders;
import org.openapis.openapi.models.shared.CreativeCorrections;
import org.openapis.openapi.models.shared.CreativeDisapprovalReasons;
import org.openapis.openapi.models.shared.CreativeFilteringReasons;
import org.openapis.openapi.models.shared.CreativeFilteringReasonsReasons;
import org.openapis.openapi.models.shared.CreativeNativeAd;
import org.openapis.openapi.models.shared.CreativeNativeAdAppIcon;
import org.openapis.openapi.models.shared.CreativeNativeAdImage;
import org.openapis.openapi.models.shared.CreativeNativeAdLogo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerCreativesInsertRequest req = new AdexchangebuyerCreativesInsertRequest() {{
                creative = new Creative() {{
                    htmlSnippet = "assumenda";
                    accountId = 369808;
                    adTechnologyProviders = new CreativeAdTechnologyProviders() {{
                        detectedProviderIds = new String[]{{
                            add("fugit"),
                        }};
                        hasUnidentifiedProvider = false;
                    }};;
                    advertiserId = new String[]{{
                        add("excepturi"),
                        add("tempora"),
                        add("facilis"),
                    }};
                    advertiserName = "tempore";
                    agencyId = "labore";
                    apiUploadTimestamp = OffsetDateTime.parse("2021-09-13T13:11:22.288Z");
                    attribute = new Integer[]{{
                        add(756107),
                    }};
                    buyerCreativeId = "sint";
                    clickThroughUrl = new String[]{{
                        add("provident"),
                        add("necessitatibus"),
                    }};
                    corrections = new org.openapis.openapi.models.shared.CreativeCorrections[]{{
                        add(new CreativeCorrections() {{
                            details = new String[]{{
                                add("dolor"),
                                add("debitis"),
                                add("a"),
                            }};
                            reason = "dolorum";
                        }}),
                        add(new CreativeCorrections() {{
                            details = new String[]{{
                                add("in"),
                                add("illum"),
                            }};
                            reason = "maiores";
                        }}),
                        add(new CreativeCorrections() {{
                            details = new String[]{{
                                add("dicta"),
                                add("magnam"),
                                add("cumque"),
                            }};
                            reason = "facere";
                        }}),
                    }};
                    disapprovalReasons = new org.openapis.openapi.models.shared.CreativeDisapprovalReasons[]{{
                        add(new CreativeDisapprovalReasons() {{
                            details = new String[]{{
                                add("laborum"),
                                add("accusamus"),
                            }};
                            reason = "non";
                        }}),
                        add(new CreativeDisapprovalReasons() {{
                            details = new String[]{{
                                add("enim"),
                                add("accusamus"),
                                add("delectus"),
                            }};
                            reason = "quidem";
                        }}),
                    }};
                    filteringReasons = new CreativeFilteringReasons() {{
                        date = "provident";
                        reasons = new org.openapis.openapi.models.shared.CreativeFilteringReasonsReasons[]{{
                            add(new CreativeFilteringReasonsReasons() {{
                                filteringCount = "id";
                                filteringStatus = 501324;
                            }}),
                            add(new CreativeFilteringReasonsReasons() {{
                                filteringCount = "deleniti";
                                filteringStatus = 956084;
                            }}),
                            add(new CreativeFilteringReasonsReasons() {{
                                filteringCount = "amet";
                                filteringStatus = 643990;
                            }}),
                        }};
                    }};;
                    height = 394869;
                    impressionTrackingUrl = new String[]{{
                        add("natus"),
                        add("omnis"),
                    }};
                    kind = "molestiae";
                    nativeAd = new CreativeNativeAd() {{
                        advertiser = "perferendis";
                        appIcon = new CreativeNativeAdAppIcon() {{
                            height = 470132;
                            url = "magnam";
                            width = 716075;
                        }};;
                        body = "id";
                        callToAction = "labore";
                        clickTrackingUrl = "labore";
                        headline = "suscipit";
                        image = new CreativeNativeAdImage() {{
                            height = 618016;
                            url = "nobis";
                            width = 428769;
                        }};;
                        impressionTrackingUrl = new String[]{{
                            add("aspernatur"),
                            add("architecto"),
                            add("magnam"),
                            add("et"),
                        }};
                        logo = new CreativeNativeAdLogo() {{
                            height = 569965;
                            url = "ullam";
                            width = 590873;
                        }};;
                        price = "quos";
                        starRating = 5743.25;
                    }};;
                    productCategories = new Integer[]{{
                        add(653201),
                    }};
                    restrictedCategories = new Integer[]{{
                        add(652103),
                        add(320997),
                        add(431418),
                        add(221262),
                    }};
                    sensitiveCategories = new Integer[]{{
                        add(141264),
                        add(367562),
                        add(97260),
                        add(435865),
                    }};
                    status = "doloribus";
                    vendorType = new Integer[]{{
                        add(260341),
                        add(806194),
                        add(537023),
                        add(703889),
                    }};
                    version = 447926;
                    videoURL = "architecto";
                    width = 99569;
                }};;
                alt = AltEnum.JSON;
                fields = "repudiandae";
                key = "ullam";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "nihil";
                userIp = "repellat";
            }};            

            AdexchangebuyerCreativesInsertResponse res = sdk.creatives.adexchangebuyerCreativesInsert(req, new AdexchangebuyerCreativesInsertSecurity("quibusdam", "sed") {{
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
                accountId = new Long[]{{
                    add(868126L),
                    add(37559L),
                    add(162493L),
                    add(508315L),
                }};
                alt = AltEnum.JSON;
                buyerCreativeId = new String[]{{
                    add("magni"),
                    add("sunt"),
                    add("quo"),
                }};
                fields = "illum";
                key = "pariatur";
                maxResults = 807319L;
                oauthToken = "ea";
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "odit";
                statusFilter = AdexchangebuyerCreativesListStatusFilterEnum.DISAPPROVED;
                userIp = "accusantium";
            }};            

            AdexchangebuyerCreativesListResponse res = sdk.creatives.adexchangebuyerCreativesList(req, new AdexchangebuyerCreativesListSecurity("ab", "maiores") {{
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
