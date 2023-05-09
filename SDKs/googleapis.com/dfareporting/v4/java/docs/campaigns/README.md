# campaigns

### Available Operations

* [dfareportingCampaignsGet](#dfareportingcampaignsget) - Gets one campaign by ID.
* [dfareportingCampaignsInsert](#dfareportingcampaignsinsert) - Inserts a new campaign.
* [dfareportingCampaignsList](#dfareportingcampaignslist) - Retrieves a list of campaigns, possibly filtered. This method supports paging.
* [dfareportingCampaignsPatch](#dfareportingcampaignspatch) - Updates an existing campaign. This method supports patch semantics.
* [dfareportingCampaignsUpdate](#dfareportingcampaignsupdate) - Updates an existing campaign.

## dfareportingCampaignsGet

Gets one campaign by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCampaignsGetRequest;
import org.openapis.openapi.models.operations.DfareportingCampaignsGetResponse;
import org.openapis.openapi.models.operations.DfareportingCampaignsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCampaignsGetRequest req = new DfareportingCampaignsGetRequest("accusantium", "ea") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "inventore";
                key = "consequuntur";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "dolores";
                uploadProtocol = "enim";
            }};            

            DfareportingCampaignsGetResponse res = sdk.campaigns.dfareportingCampaignsGet(req, new DfareportingCampaignsGetSecurity("aspernatur", "perspiciatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaign != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCampaignsInsert

Inserts a new campaign.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCampaignsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingCampaignsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingCampaignsInsertSecurity;
import org.openapis.openapi.models.shared.AdBlockingConfiguration;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AudienceSegment;
import org.openapis.openapi.models.shared.AudienceSegmentGroup;
import org.openapis.openapi.models.shared.Campaign;
import org.openapis.openapi.models.shared.ClickThroughUrlSuffixProperties;
import org.openapis.openapi.models.shared.CreativeOptimizationConfiguration;
import org.openapis.openapi.models.shared.CreativeOptimizationConfigurationOptimizationModelEnum;
import org.openapis.openapi.models.shared.DefaultClickThroughEventTagProperties;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.EventTagOverride;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.MeasurementPartnerCampaignLink;
import org.openapis.openapi.models.shared.MeasurementPartnerCampaignLinkLinkStatusEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerCampaignLinkMeasurementPartnerEnum;
import org.openapis.openapi.models.shared.OptimizationActivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCampaignsInsertRequest req = new DfareportingCampaignsInsertRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                campaign = new Campaign() {{
                    accountId = "alias";
                    adBlockingConfiguration = new AdBlockingConfiguration() {{
                        enabled = false;
                    }};;
                    additionalCreativeOptimizationConfigurations = new org.openapis.openapi.models.shared.CreativeOptimizationConfiguration[]{{
                        add(new CreativeOptimizationConfiguration() {{
                            id = "deleniti";
                            name = "Vernon Kuhn";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "illum";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "praesentium";
                                        etag = "sint";
                                        id = "5b8bcf24-db95-4969-b352-f74533994d78";
                                        kind = "repellendus";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "amet";
                                    }};
                                    weight = 716795;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "vel";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "necessitatibus";
                                        etag = "iste";
                                        id = "389f5abb-7f66-4255-8a28-382ac483afd2";
                                        kind = "consectetur";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "minima";
                                    }};
                                    weight = 703651;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "facilis";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "deserunt";
                                        etag = "nisi";
                                        id = "50164e06-f5bf-46ae-991b-c8bdef3612b6";
                                        kind = "neque";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "eos";
                                    }};
                                    weight = 186;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "ad";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "a";
                                        etag = "facere";
                                        id = "a840774a-68a9-4a35-9086-b6f66fef020e";
                                        kind = "provident";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "quaerat";
                                    }};
                                    weight = 256647;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "cum";
                            name = "Bonnie Hamill";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "excepturi";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "eos";
                                        etag = "quisquam";
                                        id = "8dbda6a6-1efa-4219-8258-fd0a9eba47f7";
                                        kind = "nulla";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "voluptates";
                                    }};
                                    weight = 953861;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "perferendis";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "quaerat";
                                        etag = "excepturi";
                                        id = "640d6a18-31c8-47ad-b596-fdf1ad837ae8";
                                        kind = "voluptatem";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "vitae";
                                    }};
                                    weight = 766498;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "architecto";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "sint";
                                        etag = "eligendi";
                                        id = "95ba9986-78fa-43f6-9699-1af388ce0361";
                                        kind = "numquam";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "modi";
                                    }};
                                    weight = 552741;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK_AND_IMPRESSION;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "voluptate";
                            name = "Ron Kessler DVM";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "qui";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "delectus";
                                        etag = "exercitationem";
                                        id = "36028efe-ef93-4415-aed7-e253f4c157de";
                                        kind = "officia";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "in";
                                    }};
                                    weight = 72473;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "voluptate";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "consequatur";
                                        etag = "delectus";
                                        id = "445accf6-67aa-4f9b-bad1-85fe431d6bf5";
                                        kind = "cumque";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "sequi";
                                    }};
                                    weight = 542807;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "maiores";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "expedita";
                                        etag = "rerum";
                                        id = "8c20cb67-fc4b-4425-a99e-6234c9f7b79d";
                                        kind = "tenetur";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "expedita";
                                    }};
                                    weight = 481307;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "esse";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "harum";
                                        etag = "ad";
                                        id = "c38d4baf-91e5-406e-b890-a54b475f16f5";
                                        kind = "ex";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "nesciunt";
                                    }};
                                    weight = 547907;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK;
                        }}),
                    }};
                    advertiserGroupId = "fuga";
                    advertiserId = "sequi";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "maxime";
                        etag = "numquam";
                        id = "ac631b99-e26c-4ed8-b9fd-b9410f63bbf8";
                        kind = "vitae";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "atque";
                    }};;
                    archived = false;
                    audienceSegmentGroups = new org.openapis.openapi.models.shared.AudienceSegmentGroup[]{{
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 722151;
                                    id = "aperiam";
                                    name = "Eunice Zboncak";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 461853;
                                    id = "deleniti";
                                    name = "Chester Daugherty IV";
                                }}),
                            }};
                            id = "iste";
                            name = "Rudy Gorczany";
                        }}),
                    }};
                    billingInvoiceCode = "ducimus";
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "consectetur";
                        overrideInheritedSuffix = false;
                    }};;
                    comment = "sapiente";
                    createInfo = new LastModifiedInfo() {{
                        time = "quis";
                    }};;
                    creativeGroupIds = new String[]{{
                        add("ratione"),
                    }};
                    creativeOptimizationConfiguration = new CreativeOptimizationConfiguration() {{
                        id = "consectetur";
                        name = "Juan Marquardt";
                        optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "quasi";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "consequuntur";
                                    etag = "nemo";
                                    id = "ce4152ea-b9cd-47e5-a24a-6a0e123b7847";
                                    kind = "vero";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "minima";
                                }};
                                weight = 607276;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "recusandae";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "architecto";
                                    etag = "voluptatibus";
                                    id = "67f3c4cc-e4b6-4d76-96ff-3c5747501357";
                                    kind = "officiis";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "magnam";
                                }};
                                weight = 981817;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "ipsam";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "dicta";
                                    etag = "hic";
                                    id = "8b084c31-97e1-493a-a454-67f94874c2d5";
                                    kind = "nobis";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "labore";
                                }};
                                weight = 596133;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "ducimus";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "qui";
                                    etag = "qui";
                                    id = "33e66bd8-fe5d-400b-979e-f20387320590";
                                    kind = "impedit";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "quo";
                                }};
                                weight = 100704;
                            }}),
                        }};
                        optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.CLICK;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "perspiciatis";
                        overrideInheritedEventTag = false;
                    }};;
                    defaultLandingPageId = "ea";
                    endDate = LocalDate.parse("2022-12-15");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "non";
                        }}),
                    }};
                    externalId = "beatae";
                    id = "sequi";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "rerum";
                        etag = "ipsum";
                        id = "e5044f65-fe72-4dc4-877d-0cc3f408efc1";
                        kind = "corporis";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "eveniet";
                    }};;
                    kind = "cum";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "dolore";
                    }};;
                    measurementPartnerLink = new MeasurementPartnerCampaignLink() {{
                        linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum.MEASUREMENT_PARTNER_LINK_WRAPPING_PENDING;
                        measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum.INTEGRAL_AD_SCIENCE;
                        partnerCampaignId = "officiis";
                    }};;
                    name = "Eloise O'Kon DVM";
                    startDate = LocalDate.parse("2022-09-01");
                    subaccountId = "fuga";
                }};;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "sed";
                key = "deserunt";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "distinctio";
                uploadProtocol = "corporis";
            }};            

            DfareportingCampaignsInsertResponse res = sdk.campaigns.dfareportingCampaignsInsert(req, new DfareportingCampaignsInsertSecurity("quas", "soluta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaign != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCampaignsList

Retrieves a list of campaigns, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCampaignsListRequest;
import org.openapis.openapi.models.operations.DfareportingCampaignsListResponse;
import org.openapis.openapi.models.operations.DfareportingCampaignsListSecurity;
import org.openapis.openapi.models.operations.DfareportingCampaignsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingCampaignsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCampaignsListRequest req = new DfareportingCampaignsListRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "et";
                advertiserGroupIds = new String[]{{
                    add("unde"),
                    add("sed"),
                    add("suscipit"),
                    add("facere"),
                }};
                advertiserIds = new String[]{{
                    add("nam"),
                    add("quaerat"),
                    add("corrupti"),
                    add("sint"),
                }};
                alt = AltEnum.JSON;
                archived = false;
                atLeastOneOptimizationActivity = false;
                callback = "vel";
                excludedIds = new String[]{{
                    add("vero"),
                }};
                fields = "odio";
                ids = new String[]{{
                    add("fugit"),
                    add("inventore"),
                }};
                key = "optio";
                maxResults = 748656L;
                oauthToken = "recusandae";
                overriddenEventTagId = "commodi";
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "provident";
                searchString = "veniam";
                sortField = DfareportingCampaignsListSortFieldEnum.ID;
                sortOrder = DfareportingCampaignsListSortOrderEnum.ASCENDING;
                subaccountId = "a";
                uploadType = "consequatur";
                uploadProtocol = "vero";
            }};            

            DfareportingCampaignsListResponse res = sdk.campaigns.dfareportingCampaignsList(req, new DfareportingCampaignsListSecurity("id", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaignsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCampaignsPatch

Updates an existing campaign. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCampaignsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingCampaignsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingCampaignsPatchSecurity;
import org.openapis.openapi.models.shared.AdBlockingConfiguration;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AudienceSegment;
import org.openapis.openapi.models.shared.AudienceSegmentGroup;
import org.openapis.openapi.models.shared.Campaign;
import org.openapis.openapi.models.shared.ClickThroughUrlSuffixProperties;
import org.openapis.openapi.models.shared.CreativeOptimizationConfiguration;
import org.openapis.openapi.models.shared.CreativeOptimizationConfigurationOptimizationModelEnum;
import org.openapis.openapi.models.shared.DefaultClickThroughEventTagProperties;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.EventTagOverride;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.MeasurementPartnerCampaignLink;
import org.openapis.openapi.models.shared.MeasurementPartnerCampaignLinkLinkStatusEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerCampaignLinkMeasurementPartnerEnum;
import org.openapis.openapi.models.shared.OptimizationActivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCampaignsPatchRequest req = new DfareportingCampaignsPatchRequest("ratione", "perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                campaign = new Campaign() {{
                    accountId = "voluptas";
                    adBlockingConfiguration = new AdBlockingConfiguration() {{
                        enabled = false;
                    }};;
                    additionalCreativeOptimizationConfigurations = new org.openapis.openapi.models.shared.CreativeOptimizationConfiguration[]{{
                        add(new CreativeOptimizationConfiguration() {{
                            id = "maiores";
                            name = "Lee Runte";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "explicabo";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "delectus";
                                        etag = "quos";
                                        id = "85009049-1160-4820-b888-ec66183bfe96";
                                        kind = "ullam";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "debitis";
                                    }};
                                    weight = 694611;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "magnam";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "doloremque";
                                        etag = "accusamus";
                                        id = "c16faf75-b0b5-432a-8da3-7cbaaf4452c4";
                                        kind = "voluptatum";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "explicabo";
                                    }};
                                    weight = 756833;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_IMPRESSION;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "tempore";
                            name = "Jodi Stroman";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "est";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "sapiente";
                                        etag = "necessitatibus";
                                        id = "81a88f44-4457-43fe-8d47-353f63c82093";
                                        kind = "nihil";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "deserunt";
                                    }};
                                    weight = 662184;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "ex";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "occaecati";
                                        etag = "optio";
                                        id = "d5fbcf79-da18-4a78-a2bf-95894e6861ad";
                                        kind = "libero";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "quaerat";
                                    }};
                                    weight = 983067;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "iste";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "accusamus";
                                        etag = "ipsam";
                                        id = "d751c9fe-8f75-402b-bdc3-450841f17644";
                                        kind = "nostrum";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "amet";
                                    }};
                                    weight = 454386;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "molestias";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "voluptatibus";
                                        etag = "ipsum";
                                        id = "fb27e21f-8626-457b-b6fc-6b9f587ce525";
                                        kind = "minus";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "quam";
                                    }};
                                    weight = 410916;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "architecto";
                            name = "Mr. Jimmie Frami";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "quae";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "dolore";
                                        etag = "in";
                                        id = "b4c21ccb-423a-4bcd-891f-aabdd88e71f6";
                                        kind = "minus";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "quas";
                                    }};
                                    weight = 149235;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "veniam";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "sed";
                                        etag = "quibusdam";
                                        id = "7771e7fd-0740-409e-b8d2-9de1dd7097b5";
                                        kind = "illum";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "ipsa";
                                    }};
                                    weight = 550216;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK_AND_IMPRESSION;
                        }}),
                    }};
                    advertiserGroupId = "ullam";
                    advertiserId = "in";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "doloribus";
                        etag = "id";
                        id = "6c78a216-e19b-4afe-8a61-91498140b64f";
                        kind = "delectus";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "id";
                    }};;
                    archived = false;
                    audienceSegmentGroups = new org.openapis.openapi.models.shared.AudienceSegmentGroup[]{{
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 452856;
                                    id = "consequatur";
                                    name = "Jerald Bartell";
                                }}),
                            }};
                            id = "quaerat";
                            name = "Mike Kovacek";
                        }}),
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 651504;
                                    id = "blanditiis";
                                    name = "Dianne Hayes";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 614175;
                                    id = "ea";
                                    name = "Maureen Dooley";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 676274;
                                    id = "voluptas";
                                    name = "Sherman Rice";
                                }}),
                            }};
                            id = "praesentium";
                            name = "Adrienne Rath DVM";
                        }}),
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 793029;
                                    id = "tenetur";
                                    name = "Dustin Wilkinson";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 934707;
                                    id = "occaecati";
                                    name = "Alison Monahan";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 952937;
                                    id = "dignissimos";
                                    name = "Mabel Greenfelder";
                                }}),
                            }};
                            id = "aspernatur";
                            name = "Ms. Stanley Doyle";
                        }}),
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 15205;
                                    id = "ullam";
                                    name = "Vera Spinka";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 467109;
                                    id = "ad";
                                    name = "Ms. Blake Abshire";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 337581;
                                    id = "dolorem";
                                    name = "Mr. Jeremy Sanford";
                                }}),
                            }};
                            id = "quia";
                            name = "Genevieve Legros";
                        }}),
                    }};
                    billingInvoiceCode = "provident";
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "sunt";
                        overrideInheritedSuffix = false;
                    }};;
                    comment = "maiores";
                    createInfo = new LastModifiedInfo() {{
                        time = "excepturi";
                    }};;
                    creativeGroupIds = new String[]{{
                        add("dolore"),
                        add("aspernatur"),
                    }};
                    creativeOptimizationConfiguration = new CreativeOptimizationConfiguration() {{
                        id = "molestias";
                        name = "Al Mills";
                        optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "corrupti";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "soluta";
                                    etag = "earum";
                                    id = "82211253-59d9-4838-bf7a-79cd72cd2484";
                                    kind = "possimus";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "eos";
                                }};
                                weight = 121161;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "quam";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "eos";
                                    etag = "omnis";
                                    id = "f2ac41ef-5725-4f11-a9ac-1e41d8a23c23";
                                    kind = "saepe";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "labore";
                                }};
                                weight = 998445;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "eos";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "quibusdam";
                                    etag = "repellat";
                                    id = "a4a197f6-de92-4215-9fe1-712099853e9f";
                                    kind = "quis";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "adipisci";
                                }};
                                weight = 866453;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "praesentium";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "nemo";
                                    etag = "dolore";
                                    id = "439ee224-4604-443b-8154-188c2f56e85d";
                                    kind = "culpa";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "laudantium";
                                }};
                                weight = 213860;
                            }}),
                        }};
                        optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.CLICK;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "officiis";
                        overrideInheritedEventTag = false;
                    }};;
                    defaultLandingPageId = "mollitia";
                    endDate = LocalDate.parse("2021-04-16");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "et";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "odio";
                        }}),
                    }};
                    externalId = "eligendi";
                    id = "nesciunt";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "harum";
                        etag = "aperiam";
                        id = "d51a44bf-01ba-4d87-86d4-6082bfbdc41f";
                        kind = "delectus";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "at";
                    }};;
                    kind = "magnam";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "officiis";
                    }};;
                    measurementPartnerLink = new MeasurementPartnerCampaignLink() {{
                        linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum.MEASUREMENT_PARTNER_LINKED;
                        measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum.INTEGRAL_AD_SCIENCE;
                        partnerCampaignId = "saepe";
                    }};;
                    name = "Ora Purdy";
                    startDate = LocalDate.parse("2022-07-17");
                    subaccountId = "quis";
                }};;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "dignissimos";
                fields = "nisi";
                key = "consectetur";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "sunt";
                uploadProtocol = "repudiandae";
            }};            

            DfareportingCampaignsPatchResponse res = sdk.campaigns.dfareportingCampaignsPatch(req, new DfareportingCampaignsPatchSecurity("facere", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaign != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingCampaignsUpdate

Updates an existing campaign.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingCampaignsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingCampaignsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingCampaignsUpdateSecurity;
import org.openapis.openapi.models.shared.AdBlockingConfiguration;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AudienceSegment;
import org.openapis.openapi.models.shared.AudienceSegmentGroup;
import org.openapis.openapi.models.shared.Campaign;
import org.openapis.openapi.models.shared.ClickThroughUrlSuffixProperties;
import org.openapis.openapi.models.shared.CreativeOptimizationConfiguration;
import org.openapis.openapi.models.shared.CreativeOptimizationConfigurationOptimizationModelEnum;
import org.openapis.openapi.models.shared.DefaultClickThroughEventTagProperties;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.EventTagOverride;
import org.openapis.openapi.models.shared.LastModifiedInfo;
import org.openapis.openapi.models.shared.MeasurementPartnerCampaignLink;
import org.openapis.openapi.models.shared.MeasurementPartnerCampaignLinkLinkStatusEnum;
import org.openapis.openapi.models.shared.MeasurementPartnerCampaignLinkMeasurementPartnerEnum;
import org.openapis.openapi.models.shared.OptimizationActivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCampaignsUpdateRequest req = new DfareportingCampaignsUpdateRequest("ducimus") {{
                dollarXgafv = XgafvEnum.TWO;
                campaign = new Campaign() {{
                    accountId = "consectetur";
                    adBlockingConfiguration = new AdBlockingConfiguration() {{
                        enabled = false;
                    }};;
                    additionalCreativeOptimizationConfigurations = new org.openapis.openapi.models.shared.CreativeOptimizationConfiguration[]{{
                        add(new CreativeOptimizationConfiguration() {{
                            id = "provident";
                            name = "Kim Rutherford";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "praesentium";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "vel";
                                        etag = "doloremque";
                                        id = "f8cd580b-a738-410e-8fe4-447297cd3b1d";
                                        kind = "nulla";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "expedita";
                                    }};
                                    weight = 730456;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "impedit";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "repudiandae";
                                        etag = "dolores";
                                        id = "47b7684e-ff50-4126-971c-ffbd0eb74b84";
                                        kind = "odit";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "unde";
                                    }};
                                    weight = 365473;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "dolorem";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "rerum";
                                        etag = "ut";
                                        id = "4bd3c431-59d3-43e5-953c-001139863aa4";
                                        kind = "et";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "aliquid";
                                    }};
                                    weight = 760942;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "ab";
                            name = "Gregg Champlin DVM";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "tempore";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "ullam";
                                        etag = "sunt";
                                        id = "c9a41ffb-e9cb-4d79-9ee6-5e076cc7abf6";
                                        kind = "beatae";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "eveniet";
                                    }};
                                    weight = 652029;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "ipsam";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "porro";
                                        etag = "molestiae";
                                        id = "1641934b-90f2-4e09-919d-2fc2f9e2e105";
                                        kind = "provident";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "numquam";
                                    }};
                                    weight = 735986;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "molestias";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "amet";
                                        etag = "enim";
                                        id = "d237a72f-9084-49d6-aed4-aecb7537cd92";
                                        kind = "odit";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "maxime";
                                    }};
                                    weight = 567379;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "sapiente";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "maiores";
                                        etag = "exercitationem";
                                        id = "7491aabf-a2e7-461f-8ca4-d456ef1031e6";
                                        kind = "praesentium";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "omnis";
                                    }};
                                    weight = 940141;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.CLICK;
                        }}),
                    }};
                    advertiserGroupId = "minus";
                    advertiserId = "explicabo";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "accusantium";
                        etag = "ipsa";
                        id = "1e22cd55-cc05-484a-984d-76d971fc820c";
                        kind = "commodi";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "harum";
                    }};;
                    archived = false;
                    audienceSegmentGroups = new org.openapis.openapi.models.shared.AudienceSegmentGroup[]{{
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 449031;
                                    id = "rerum";
                                    name = "Miss Guy Turcotte";
                                }}),
                            }};
                            id = "corrupti";
                            name = "Dan Boehm";
                        }}),
                    }};
                    billingInvoiceCode = "officiis";
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "labore";
                        overrideInheritedSuffix = false;
                    }};;
                    comment = "nulla";
                    createInfo = new LastModifiedInfo() {{
                        time = "accusamus";
                    }};;
                    creativeGroupIds = new String[]{{
                        add("ut"),
                    }};
                    creativeOptimizationConfiguration = new CreativeOptimizationConfiguration() {{
                        id = "laborum";
                        name = "Aaron Lockman";
                        optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "facere";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "pariatur";
                                    etag = "quidem";
                                    id = "46aa1cfd-6d82-48da-8131-91129646645c";
                                    kind = "ab";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "blanditiis";
                                }};
                                weight = 93299;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "delectus";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "explicabo";
                                    etag = "iste";
                                    id = "042f569b-7aff-40ea-a216-cbe071bc163e";
                                    kind = "sed";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "unde";
                                }};
                                weight = 687240;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "sequi";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "libero";
                                    etag = "ipsa";
                                    id = "84da9925-7d04-4f40-847a-742d84496cbd";
                                    kind = "earum";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "impedit";
                                }};
                                weight = 971055;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "ex";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "tempore";
                                    etag = "provident";
                                    id = "9bc63562-ebfd-4f55-8294-c060b06a1287";
                                    kind = "voluptate";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "numquam";
                                }};
                                weight = 917092;
                            }}),
                        }};
                        optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.VIDEO_COMPLETION;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "earum";
                        overrideInheritedEventTag = false;
                    }};;
                    defaultLandingPageId = "suscipit";
                    endDate = LocalDate.parse("2022-11-19");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "suscipit";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "temporibus";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "vel";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "itaque";
                        }}),
                    }};
                    externalId = "nulla";
                    id = "excepturi";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "quod";
                        etag = "in";
                        id = "3dd63457-1509-4a8e-870d-3c5a1f9c242c";
                        kind = "odio";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "iure";
                    }};;
                    kind = "aliquid";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "culpa";
                    }};;
                    measurementPartnerLink = new MeasurementPartnerCampaignLink() {{
                        linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum.MEASUREMENT_PARTNER_UNLINKED;
                        measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum.DOUBLE_VERIFY;
                        partnerCampaignId = "ipsum";
                    }};;
                    name = "Sadie Kulas";
                    startDate = LocalDate.parse("2021-12-15");
                    subaccountId = "quidem";
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "excepturi";
                key = "voluptatum";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "reiciendis";
                uploadProtocol = "magnam";
            }};            

            DfareportingCampaignsUpdateResponse res = sdk.campaigns.dfareportingCampaignsUpdate(req, new DfareportingCampaignsUpdateSecurity("consequuntur", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaign != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
