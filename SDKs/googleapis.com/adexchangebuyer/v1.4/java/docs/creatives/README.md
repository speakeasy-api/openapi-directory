# creatives

### Available Operations

* [adexchangebuyerCreativesAddDeal](#adexchangebuyercreativesadddeal) - Add a deal id association for the creative.
* [adexchangebuyerCreativesGet](#adexchangebuyercreativesget) - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* [adexchangebuyerCreativesInsert](#adexchangebuyercreativesinsert) - Submit a new creative.
* [adexchangebuyerCreativesList](#adexchangebuyercreativeslist) - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
* [adexchangebuyerCreativesListDeals](#adexchangebuyercreativeslistdeals) - Lists the external deal ids associated with the creative.
* [adexchangebuyerCreativesRemoveDeal](#adexchangebuyercreativesremovedeal) - Remove a deal id associated with the creative.

## adexchangebuyerCreativesAddDeal

Add a deal id association for the creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesAddDealRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesAddDealResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesAddDealSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerCreativesAddDealRequest req = new AdexchangebuyerCreativesAddDealRequest(647174L, "distinctio", "quibusdam") {{
                alt = AltEnum.JSON;
                fields = "labore";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "aliquid";
                userIp = "cupiditate";
            }};            

            AdexchangebuyerCreativesAddDealResponse res = sdk.creatives.adexchangebuyerCreativesAddDeal(req, new AdexchangebuyerCreativesAddDealSecurity("quos", "perferendis") {{
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

            AdexchangebuyerCreativesGetRequest req = new AdexchangebuyerCreativesGetRequest(164940L, "assumenda") {{
                alt = AltEnum.JSON;
                fields = "ipsam";
                key = "alias";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "dolorum";
                userIp = "excepturi";
            }};            

            AdexchangebuyerCreativesGetResponse res = sdk.creatives.adexchangebuyerCreativesGet(req, new AdexchangebuyerCreativesGetSecurity("tempora", "facilis") {{
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
import org.openapis.openapi.models.shared.CreativeCorrectionsContexts;
import org.openapis.openapi.models.shared.CreativeFilteringReasons;
import org.openapis.openapi.models.shared.CreativeFilteringReasonsReasons;
import org.openapis.openapi.models.shared.CreativeNativeAd;
import org.openapis.openapi.models.shared.CreativeNativeAdAppIcon;
import org.openapis.openapi.models.shared.CreativeNativeAdImage;
import org.openapis.openapi.models.shared.CreativeNativeAdLogo;
import org.openapis.openapi.models.shared.CreativeServingRestrictions;
import org.openapis.openapi.models.shared.CreativeServingRestrictionsContexts;
import org.openapis.openapi.models.shared.CreativeServingRestrictionsDisapprovalReasons;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerCreativesInsertRequest req = new AdexchangebuyerCreativesInsertRequest() {{
                creative = new Creative() {{
                    htmlSnippet = "tempore";
                    accountId = 288476;
                    adChoicesDestinationUrl = "delectus";
                    adTechnologyProviders = new CreativeAdTechnologyProviders() {{
                        detectedProviderIds = new String[]{{
                            add("non"),
                            add("eligendi"),
                        }};
                        hasUnidentifiedProvider = false;
                    }};;
                    advertiserId = new String[]{{
                        add("aliquid"),
                        add("provident"),
                        add("necessitatibus"),
                    }};
                    advertiserName = "sint";
                    agencyId = "officia";
                    apiUploadTimestamp = OffsetDateTime.parse("2022-02-09T13:58:59.361Z");
                    attribute = new Integer[]{{
                        add(680056),
                        add(447125),
                        add(449198),
                        add(846409),
                    }};
                    buyerCreativeId = "maiores";
                    clickThroughUrl = new String[]{{
                        add("dicta"),
                        add("magnam"),
                        add("cumque"),
                    }};
                    corrections = new org.openapis.openapi.models.shared.CreativeCorrections[]{{
                        add(new CreativeCorrections() {{
                            contexts = new org.openapis.openapi.models.shared.CreativeCorrectionsContexts[]{{
                                add(new CreativeCorrectionsContexts() {{
                                    auctionType = new String[]{{
                                        add("laborum"),
                                        add("accusamus"),
                                    }};
                                    contextType = "non";
                                    geoCriteriaId = new Integer[]{{
                                        add(313218),
                                        add(881736),
                                        add(965417),
                                    }};
                                    platform = new String[]{{
                                        add("provident"),
                                        add("nam"),
                                        add("id"),
                                    }};
                                }}),
                                add(new CreativeCorrectionsContexts() {{
                                    auctionType = new String[]{{
                                        add("deleniti"),
                                        add("sapiente"),
                                        add("amet"),
                                    }};
                                    contextType = "deserunt";
                                    geoCriteriaId = new Integer[]{{
                                        add(423855),
                                        add(618809),
                                    }};
                                    platform = new String[]{{
                                        add("molestiae"),
                                        add("perferendis"),
                                        add("nihil"),
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("distinctio"),
                                add("id"),
                            }};
                            reason = "labore";
                        }}),
                        add(new CreativeCorrections() {{
                            contexts = new org.openapis.openapi.models.shared.CreativeCorrectionsContexts[]{{
                                add(new CreativeCorrectionsContexts() {{
                                    auctionType = new String[]{{
                                        add("natus"),
                                        add("nobis"),
                                    }};
                                    contextType = "eum";
                                    geoCriteriaId = new Integer[]{{
                                        add(135474),
                                        add(102863),
                                        add(298282),
                                        add(92373),
                                    }};
                                    platform = new String[]{{
                                        add("ullam"),
                                        add("provident"),
                                        add("quos"),
                                    }};
                                }}),
                                add(new CreativeCorrectionsContexts() {{
                                    auctionType = new String[]{{
                                        add("accusantium"),
                                        add("mollitia"),
                                        add("reiciendis"),
                                    }};
                                    contextType = "mollitia";
                                    geoCriteriaId = new Integer[]{{
                                        add(431418),
                                        add(221262),
                                    }};
                                    platform = new String[]{{
                                        add("odit"),
                                        add("nemo"),
                                        add("quasi"),
                                        add("iure"),
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("debitis"),
                                add("eius"),
                                add("maxime"),
                                add("deleniti"),
                            }};
                            reason = "facilis";
                        }}),
                        add(new CreativeCorrections() {{
                            contexts = new org.openapis.openapi.models.shared.CreativeCorrectionsContexts[]{{
                                add(new CreativeCorrectionsContexts() {{
                                    auctionType = new String[]{{
                                        add("architecto"),
                                    }};
                                    contextType = "repudiandae";
                                    geoCriteriaId = new Integer[]{{
                                        add(714242),
                                        add(469249),
                                    }};
                                    platform = new String[]{{
                                        add("quibusdam"),
                                        add("sed"),
                                        add("saepe"),
                                        add("pariatur"),
                                    }};
                                }}),
                                add(new CreativeCorrectionsContexts() {{
                                    auctionType = new String[]{{
                                        add("consequuntur"),
                                    }};
                                    contextType = "praesentium";
                                    geoCriteriaId = new Integer[]{{
                                        add(166847),
                                        add(123820),
                                        add(779051),
                                    }};
                                    platform = new String[]{{
                                        add("pariatur"),
                                        add("maxime"),
                                        add("ea"),
                                        add("excepturi"),
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("ea"),
                            }};
                            reason = "accusantium";
                        }}),
                        add(new CreativeCorrections() {{
                            contexts = new org.openapis.openapi.models.shared.CreativeCorrectionsContexts[]{{
                                add(new CreativeCorrectionsContexts() {{
                                    auctionType = new String[]{{
                                        add("quidem"),
                                        add("ipsam"),
                                        add("voluptate"),
                                        add("autem"),
                                    }};
                                    contextType = "nam";
                                    geoCriteriaId = new Integer[]{{
                                        add(866383),
                                    }};
                                    platform = new String[]{{
                                        add("voluptatibus"),
                                        add("perferendis"),
                                    }};
                                }}),
                            }};
                            details = new String[]{{
                                add("amet"),
                                add("aut"),
                                add("cumque"),
                                add("corporis"),
                            }};
                            reason = "hic";
                        }}),
                    }};
                    creativeStatusIdentityType = "libero";
                    dealsStatus = "nobis";
                    detectedDomains = new String[]{{
                        add("quis"),
                    }};
                    filteringReasons = new CreativeFilteringReasons() {{
                        date = "totam";
                        reasons = new org.openapis.openapi.models.shared.CreativeFilteringReasonsReasons[]{{
                            add(new CreativeFilteringReasonsReasons() {{
                                filteringCount = "eaque";
                                filteringStatus = 338985;
                            }}),
                            add(new CreativeFilteringReasonsReasons() {{
                                filteringCount = "nesciunt";
                                filteringStatus = 179490;
                            }}),
                        }};
                    }};;
                    height = 18521;
                    impressionTrackingUrl = new String[]{{
                        add("minus"),
                    }};
                    kind = "quam";
                    languages = new String[]{{
                        add("vero"),
                    }};
                    nativeAd = new CreativeNativeAd() {{
                        advertiser = "nostrum";
                        appIcon = new CreativeNativeAdAppIcon() {{
                            height = 944120;
                            url = "recusandae";
                            width = 608253;
                        }};;
                        body = "facilis";
                        callToAction = "perspiciatis";
                        clickLinkUrl = "voluptatem";
                        clickTrackingUrl = "porro";
                        headline = "consequuntur";
                        image = new CreativeNativeAdImage() {{
                            height = 500026;
                            url = "error";
                            width = 50370;
                        }};;
                        impressionTrackingUrl = new String[]{{
                            add("rerum"),
                            add("adipisci"),
                            add("asperiores"),
                        }};
                        logo = new CreativeNativeAdLogo() {{
                            height = 934214;
                            url = "modi";
                            width = 613966;
                        }};;
                        price = "dolorum";
                        starRating = 5356.33;
                        videoURL = "pariatur";
                    }};;
                    openAuctionStatus = "provident";
                    productCategories = new Integer[]{{
                        add(730122),
                        add(964490),
                        add(311945),
                        add(554242),
                    }};
                    restrictedCategories = new Integer[]{{
                        add(212390),
                        add(209843),
                    }};
                    sensitiveCategories = new Integer[]{{
                        add(186193),
                    }};
                    servingRestrictions = new org.openapis.openapi.models.shared.CreativeServingRestrictions[]{{
                        add(new CreativeServingRestrictions() {{
                            contexts = new org.openapis.openapi.models.shared.CreativeServingRestrictionsContexts[]{{
                                add(new CreativeServingRestrictionsContexts() {{
                                    auctionType = new String[]{{
                                        add("cum"),
                                        add("voluptate"),
                                        add("dignissimos"),
                                    }};
                                    contextType = "reiciendis";
                                    geoCriteriaId = new Integer[]{{
                                        add(680545),
                                    }};
                                    platform = new String[]{{
                                        add("veritatis"),
                                        add("ipsa"),
                                    }};
                                }}),
                                add(new CreativeServingRestrictionsContexts() {{
                                    auctionType = new String[]{{
                                        add("iure"),
                                    }};
                                    contextType = "odio";
                                    geoCriteriaId = new Integer[]{{
                                        add(881005),
                                        add(696344),
                                    }};
                                    platform = new String[]{{
                                        add("voluptas"),
                                        add("natus"),
                                        add("eos"),
                                        add("atque"),
                                    }};
                                }}),
                                add(new CreativeServingRestrictionsContexts() {{
                                    auctionType = new String[]{{
                                        add("fugiat"),
                                    }};
                                    contextType = "ab";
                                    geoCriteriaId = new Integer[]{{
                                        add(679393),
                                        add(478596),
                                        add(453697),
                                    }};
                                    platform = new String[]{{
                                        add("deleniti"),
                                        add("omnis"),
                                        add("necessitatibus"),
                                    }};
                                }}),
                                add(new CreativeServingRestrictionsContexts() {{
                                    auctionType = new String[]{{
                                        add("asperiores"),
                                        add("nihil"),
                                        add("ipsum"),
                                    }};
                                    contextType = "voluptate";
                                    geoCriteriaId = new Integer[]{{
                                        add(906418),
                                        add(263322),
                                        add(137220),
                                    }};
                                    platform = new String[]{{
                                        add("amet"),
                                    }};
                                }}),
                            }};
                            disapprovalReasons = new org.openapis.openapi.models.shared.CreativeServingRestrictionsDisapprovalReasons[]{{
                                add(new CreativeServingRestrictionsDisapprovalReasons() {{
                                    details = new String[]{{
                                        add("ad"),
                                        add("saepe"),
                                        add("suscipit"),
                                        add("deserunt"),
                                    }};
                                    reason = "provident";
                                }}),
                                add(new CreativeServingRestrictionsDisapprovalReasons() {{
                                    details = new String[]{{
                                        add("repellendus"),
                                        add("totam"),
                                    }};
                                    reason = "similique";
                                }}),
                                add(new CreativeServingRestrictionsDisapprovalReasons() {{
                                    details = new String[]{{
                                        add("at"),
                                    }};
                                    reason = "quaerat";
                                }}),
                                add(new CreativeServingRestrictionsDisapprovalReasons() {{
                                    details = new String[]{{
                                        add("vel"),
                                        add("quod"),
                                    }};
                                    reason = "officiis";
                                }}),
                            }};
                            reason = "qui";
                        }}),
                    }};
                    vendorType = new Integer[]{{
                        add(952792),
                        add(456130),
                        add(687488),
                    }};
                    version = 483409;
                    videoURL = "ipsum";
                    videoVastXML = "quisquam";
                    width = 947371;
                }};;
                alt = AltEnum.JSON;
                fields = "amet";
                key = "tempore";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "numquam";
                userIp = "enim";
            }};            

            AdexchangebuyerCreativesInsertResponse res = sdk.creatives.adexchangebuyerCreativesInsert(req, new AdexchangebuyerCreativesInsertSecurity("dolorem", "sapiente") {{
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
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListDealsStatusFilterEnum;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerCreativesListRequest req = new AdexchangebuyerCreativesListRequest() {{
                accountId = new Long[]{{
                    add(471752L),
                    add(25662L),
                    add(711584L),
                }};
                alt = AltEnum.JSON;
                buyerCreativeId = new String[]{{
                    add("sed"),
                }};
                dealsStatusFilter = AdexchangebuyerCreativesListDealsStatusFilterEnum.CONDITIONALLY_APPROVED;
                fields = "libero";
                key = "voluptas";
                maxResults = 646265L;
                oauthToken = "quam";
                openAuctionStatusFilter = AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum.APPROVED;
                pageToken = "incidunt";
                prettyPrint = false;
                quotaUser = "qui";
                userIp = "cupiditate";
            }};            

            AdexchangebuyerCreativesListResponse res = sdk.creatives.adexchangebuyerCreativesList(req, new AdexchangebuyerCreativesListSecurity("maxime", "pariatur") {{
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

## adexchangebuyerCreativesListDeals

Lists the external deal ids associated with the creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListDealsRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListDealsResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesListDealsSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerCreativesListDealsRequest req = new AdexchangebuyerCreativesListDealsRequest(747080L, "dicta") {{
                alt = AltEnum.JSON;
                fields = "laborum";
                key = "totam";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "aspernatur";
                userIp = "dolores";
            }};            

            AdexchangebuyerCreativesListDealsResponse res = sdk.creatives.adexchangebuyerCreativesListDeals(req, new AdexchangebuyerCreativesListDealsSecurity("distinctio", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creativeDealIds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerCreativesRemoveDeal

Remove a deal id associated with the creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesRemoveDealRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesRemoveDealResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerCreativesRemoveDealSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerCreativesRemoveDealRequest req = new AdexchangebuyerCreativesRemoveDealRequest(396060L, "quam", "molestias") {{
                alt = AltEnum.JSON;
                fields = "temporibus";
                key = "qui";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "fugit";
                userIp = "magni";
            }};            

            AdexchangebuyerCreativesRemoveDealResponse res = sdk.creatives.adexchangebuyerCreativesRemoveDeal(req, new AdexchangebuyerCreativesRemoveDealSecurity("odio", "sunt") {{
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
