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

            DfareportingCampaignsGetRequest req = new DfareportingCampaignsGetRequest("voluptas", "ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "quibusdam";
                key = "impedit";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "nisi";
                uploadProtocol = "dolor";
            }};            

            DfareportingCampaignsGetResponse res = sdk.campaigns.dfareportingCampaignsGet(req, new DfareportingCampaignsGetSecurity("fugit", "dolore") {{
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

            DfareportingCampaignsInsertRequest req = new DfareportingCampaignsInsertRequest("maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                campaign = new Campaign() {{
                    accountId = "expedita";
                    adBlockingConfiguration = new AdBlockingConfiguration() {{
                        enabled = false;
                    }};;
                    additionalCreativeOptimizationConfigurations = new org.openapis.openapi.models.shared.CreativeOptimizationConfiguration[]{{
                        add(new CreativeOptimizationConfiguration() {{
                            id = "ea";
                            name = "Jimmie Ruecker Sr.";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "sit";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "dolores";
                                        etag = "enim";
                                        id = "29270b8d-5722-4dd8-95b8-bcf24db95969";
                                        kind = "amet";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "nostrum";
                                    }};
                                    weight = 184738;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "tenetur";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "molestiae";
                                        etag = "dolore";
                                        id = "533994d7-8de3-4b6e-9389-f5abb7f66255";
                                        kind = "doloremque";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "qui";
                                    }};
                                    weight = 508773;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "adipisci";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "totam";
                                        etag = "qui";
                                        id = "ac483afd-2315-4bba-a501-64e06f5bf6ae";
                                        kind = "nemo";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "architecto";
                                    }};
                                    weight = 711275;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "quisquam";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "praesentium";
                                        etag = "facilis";
                                        id = "def3612b-63c2-405f-9a84-0774a68a9a35";
                                        kind = "illum";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "molestias";
                                    }};
                                    weight = 377194;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK_AND_IMPRESSION;
                        }}),
                    }};
                    advertiserGroupId = "voluptas";
                    advertiserId = "maiores";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "ea";
                        etag = "vel";
                        id = "fef020e9-f443-4b42-97b9-92c8dbda6a61";
                        kind = "recusandae";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "id";
                    }};;
                    archived = false;
                    audienceSegmentGroups = new org.openapis.openapi.models.shared.AudienceSegmentGroup[]{{
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 612238;
                                    id = "atque";
                                    name = "Dana Lindgren";
                                }}),
                            }};
                            id = "aut";
                            name = "Joey Upton";
                        }}),
                    }};
                    billingInvoiceCode = "labore";
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "voluptate";
                        overrideInheritedSuffix = false;
                    }};;
                    comment = "voluptatibus";
                    createInfo = new LastModifiedInfo() {{
                        time = "quam";
                    }};;
                    creativeGroupIds = new String[]{{
                        add("dolorem"),
                        add("voluptates"),
                        add("a"),
                        add("perferendis"),
                    }};
                    creativeOptimizationConfiguration = new CreativeOptimizationConfiguration() {{
                        id = "quaerat";
                        name = "Dr. Gene Grimes";
                        optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "dicta";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "atque";
                                    etag = "ratione";
                                    id = "1c87adf5-96fd-4f1a-9837-ae80c1c19c95";
                                    kind = "tempore";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "iste";
                                }};
                                weight = 603783;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "quas";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "laboriosam";
                                    etag = "ducimus";
                                    id = "8fa3f696-991a-4f38-8ce0-3614448c7977";
                                    kind = "animi";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "voluptates";
                                }};
                                weight = 964928;
                            }}),
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
                        }};
                        optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_IMPRESSION;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "consequatur";
                        overrideInheritedEventTag = false;
                    }};;
                    defaultLandingPageId = "delectus";
                    endDate = LocalDate.parse("2022-09-16");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "est";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "quo";
                        }}),
                    }};
                    externalId = "maxime";
                    id = "delectus";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "laboriosam";
                        etag = "laboriosam";
                        id = "7aaf9bba-d185-4fe4-b1d6-bf5c838fbb8c";
                        kind = "aspernatur";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "impedit";
                    }};;
                    kind = "nam";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "ex";
                    }};;
                    measurementPartnerLink = new MeasurementPartnerCampaignLink() {{
                        linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum.MEASUREMENT_PARTNER_LINK_FAILURE;
                        measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum.DOUBLE_VERIFY;
                        partnerCampaignId = "minus";
                    }};;
                    name = "Verna Gislason";
                    nielsenOcrEnabled = false;
                    startDate = LocalDate.parse("2021-04-14");
                    subaccountId = "occaecati";
                    traffickerEmails = new String[]{{
                        add("laboriosam"),
                        add("eos"),
                        add("amet"),
                        add("incidunt"),
                    }};
                }};;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "voluptate";
                key = "tempore";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "possimus";
                uploadProtocol = "tenetur";
            }};            

            DfareportingCampaignsInsertResponse res = sdk.campaigns.dfareportingCampaignsInsert(req, new DfareportingCampaignsInsertSecurity("recusandae", "expedita") {{
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

            DfareportingCampaignsListRequest req = new DfareportingCampaignsListRequest("iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                advertiserGroupIds = new String[]{{
                    add("quod"),
                    add("ratione"),
                }};
                advertiserIds = new String[]{{
                    add("vero"),
                    add("dolore"),
                    add("nam"),
                }};
                alt = AltEnum.MEDIA;
                archived = false;
                atLeastOneOptimizationActivity = false;
                callback = "maiores";
                excludedIds = new String[]{{
                    add("illo"),
                    add("saepe"),
                    add("enim"),
                }};
                fields = "eaque";
                ids = new String[]{{
                    add("eveniet"),
                    add("delectus"),
                }};
                key = "deleniti";
                maxResults = 590787L;
                oauthToken = "aut";
                overriddenEventTagId = "dolorum";
                pageToken = "nostrum";
                prettyPrint = false;
                quotaUser = "tempora";
                searchString = "nam";
                sortField = DfareportingCampaignsListSortFieldEnum.ID;
                sortOrder = DfareportingCampaignsListSortOrderEnum.ASCENDING;
                subaccountId = "nostrum";
                uploadType = "maiores";
                uploadProtocol = "veritatis";
            }};            

            DfareportingCampaignsListResponse res = sdk.campaigns.dfareportingCampaignsList(req, new DfareportingCampaignsListSecurity("autem", "earum") {{
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

            DfareportingCampaignsPatchRequest req = new DfareportingCampaignsPatchRequest("minima", "ex") {{
                dollarXgafv = XgafvEnum.TWO;
                campaign = new Campaign() {{
                    accountId = "nesciunt";
                    adBlockingConfiguration = new AdBlockingConfiguration() {{
                        enabled = false;
                    }};;
                    additionalCreativeOptimizationConfigurations = new org.openapis.openapi.models.shared.CreativeOptimizationConfiguration[]{{
                        add(new CreativeOptimizationConfiguration() {{
                            id = "nostrum";
                            name = "Earl Schoen";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "autem";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "adipisci";
                                        etag = "sunt";
                                        id = "b99e26ce-d8f9-4fdb-9410-f63bbf817837";
                                        kind = "nam";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "vitae";
                                    }};
                                    weight = 650678;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "asperiores";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "at";
                                        etag = "quibusdam";
                                        id = "78862418-9eb4-4487-bf50-33f19dbf125c";
                                        kind = "debitis";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "veritatis";
                                    }};
                                    weight = 328744;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "magni";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "itaque";
                                        etag = "error";
                                        id = "b9cd7e52-24a6-4a0e-923b-7847ec59e1f6";
                                        kind = "in";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "amet";
                                    }};
                                    weight = 767555;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "dolore";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "optio";
                                        etag = "quo";
                                        id = "e4b6d769-6ff3-4c57-8750-1357e44f51f8";
                                        kind = "libero";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "totam";
                                    }};
                                    weight = 272518;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK_AND_IMPRESSION;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "dolor";
                            name = "Geneva Kohler V";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "deserunt";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "odit";
                                        etag = "incidunt";
                                        id = "5467f948-74c2-4d5c-8497-2233e66bd8fe";
                                        kind = "corporis";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "aut";
                                    }};
                                    weight = 31605;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK_AND_IMPRESSION;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "excepturi";
                            name = "Belinda Torphy";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "velit";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "voluptatum";
                                        etag = "nihil";
                                        id = "320590cc-c109-4640-8313-b3e5044f65fe";
                                        kind = "reprehenderit";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "assumenda";
                                    }};
                                    weight = 763747;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK;
                        }}),
                    }};
                    advertiserGroupId = "quae";
                    advertiserId = "nihil";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quam";
                        etag = "assumenda";
                        id = "0cc3f408-efc1-45ce-b4d6-e1eae0f75aed";
                        kind = "tenetur";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "deserunt";
                    }};;
                    archived = false;
                    audienceSegmentGroups = new org.openapis.openapi.models.shared.AudienceSegmentGroup[]{{
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 719077;
                                    id = "corporis";
                                    name = "Ed McDermott DDS";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 600471;
                                    id = "sed";
                                    name = "Mable Stroman";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 545945;
                                    id = "sint";
                                    name = "Kristin Boyle";
                                }}),
                            }};
                            id = "numquam";
                            name = "Amanda Ruecker";
                        }}),
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 820322;
                                    id = "provident";
                                    name = "Betty Corkery PhD";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 663658;
                                    id = "error";
                                    name = "Margaret Rau";
                                }}),
                            }};
                            id = "maiores";
                            name = "Lee Runte";
                        }}),
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 128594;
                                    id = "delectus";
                                    name = "Mr. Casey Haley";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 29346;
                                    id = "tempora";
                                    name = "Roger Boehm V";
                                }}),
                            }};
                            id = "dolores";
                            name = "Joy Macejkovic";
                        }}),
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 793909;
                                    id = "autem";
                                    name = "Teresa Lueilwitz";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 945409;
                                    id = "necessitatibus";
                                    name = "Ricardo Hermiston";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 694611;
                                    id = "magnam";
                                    name = "Mrs. Sophia Schmidt";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 670239;
                                    id = "earum";
                                    name = "Miss Audrey Prosacco";
                                }}),
                            }};
                            id = "ratione";
                            name = "Alberta Gleason";
                        }}),
                    }};
                    billingInvoiceCode = "consectetur";
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "reprehenderit";
                        overrideInheritedSuffix = false;
                    }};;
                    comment = "eligendi";
                    createInfo = new LastModifiedInfo() {{
                        time = "cum";
                    }};;
                    creativeGroupIds = new String[]{{
                        add("culpa"),
                        add("a"),
                        add("magnam"),
                    }};
                    creativeOptimizationConfiguration = new CreativeOptimizationConfiguration() {{
                        id = "eius";
                        name = "Lori Schmeler";
                        optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "explicabo";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "eligendi";
                                    etag = "cupiditate";
                                    id = "b2ad32da-fe81-4a88-b444-4573fecd4735";
                                    kind = "nesciunt";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "eum";
                                }};
                                weight = 222373;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "placeat";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "quos";
                                    etag = "sed";
                                    id = "09379aa6-9cd5-4fbc-b79d-a18a7822bf95";
                                    kind = "quos";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "aliquam";
                                }};
                                weight = 878595;
                            }}),
                        }};
                        optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "praesentium";
                        overrideInheritedEventTag = false;
                    }};;
                    defaultLandingPageId = "eum";
                    endDate = LocalDate.parse("2022-05-06");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "libero";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "ullam";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "quaerat";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "maiores";
                        }}),
                    }};
                    externalId = "iste";
                    id = "accusamus";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "ipsam";
                        etag = "fugiat";
                        id = "751c9fe8-f750-42bf-9c34-50841f176445";
                        kind = "ex";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "voluptate";
                    }};;
                    kind = "molestias";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "voluptatibus";
                    }};;
                    measurementPartnerLink = new MeasurementPartnerCampaignLink() {{
                        linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum.MEASUREMENT_PARTNER_LINKED;
                        measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum.DOUBLE_VERIFY;
                        partnerCampaignId = "quidem";
                    }};;
                    name = "Tanya Tillman DVM";
                    nielsenOcrEnabled = false;
                    startDate = LocalDate.parse("2022-03-16");
                    subaccountId = "consequuntur";
                    traffickerEmails = new String[]{{
                        add("nemo"),
                        add("reprehenderit"),
                    }};
                }};;
                accessToken = "soluta";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "delectus";
                key = "maxime";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "cupiditate";
                uploadProtocol = "hic";
            }};            

            DfareportingCampaignsPatchResponse res = sdk.campaigns.dfareportingCampaignsPatch(req, new DfareportingCampaignsPatchSecurity("quis", "deleniti") {{
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

            DfareportingCampaignsUpdateRequest req = new DfareportingCampaignsUpdateRequest("iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                campaign = new Campaign() {{
                    accountId = "saepe";
                    adBlockingConfiguration = new AdBlockingConfiguration() {{
                        enabled = false;
                    }};;
                    additionalCreativeOptimizationConfigurations = new org.openapis.openapi.models.shared.CreativeOptimizationConfiguration[]{{
                        add(new CreativeOptimizationConfiguration() {{
                            id = "magni";
                            name = "Brooke Jacobs";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "architecto";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "fuga";
                                        etag = "totam";
                                        id = "312e5047-b4c2-41cc-b423-abcdc91faabd";
                                        kind = "nulla";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "praesentium";
                                    }};
                                    weight = 885721;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "esse";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "vitae";
                                        etag = "delectus";
                                        id = "6c48252d-7771-4e7f-9074-009ef8d29de1";
                                        kind = "facere";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "ducimus";
                                    }};
                                    weight = 16158;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_IMPRESSION;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "voluptate";
                            name = "Pedro Stamm V";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "ullam";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "in";
                                        etag = "doloribus";
                                        id = "a6c78a21-6e19-4baf-aca6-191498140b64";
                                        kind = "maiores";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "quos";
                                    }};
                                    weight = 661949;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "officiis";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "ab";
                                        etag = "voluptate";
                                        id = "0ef03b5f-37e4-4aa8-a855-5966732aa5dc";
                                        kind = "tempore";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "autem";
                                    }};
                                    weight = 508271;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "magni";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "quisquam";
                                        etag = "expedita";
                                        id = "70f8cfd5-fb6e-491b-9a9f-74846e2c3309";
                                        kind = "repellendus";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "aut";
                                    }};
                                    weight = 353036;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "amet";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "iure";
                                        etag = "quibusdam";
                                        id = "9e75ca00-6f53-492c-91a2-5a8bf92f9742";
                                        kind = "molestias";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "at";
                                    }};
                                    weight = 602076;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK_AND_IMPRESSION;
                        }}),
                    }};
                    advertiserGroupId = "provident";
                    advertiserId = "hic";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "corrupti";
                        etag = "soluta";
                        id = "f8221125-359d-4983-87f7-a79cd72cd248";
                        kind = "dolore";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "dolorum";
                    }};;
                    archived = false;
                    audienceSegmentGroups = new org.openapis.openapi.models.shared.AudienceSegmentGroup[]{{
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 464922;
                                    id = "eos";
                                    name = "Dominick Denesik";
                                }}),
                            }};
                            id = "numquam";
                            name = "Kelley West";
                        }}),
                    }};
                    billingInvoiceCode = "quia";
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "quis";
                        overrideInheritedSuffix = false;
                    }};;
                    comment = "maiores";
                    createInfo = new LastModifiedInfo() {{
                        time = "dicta";
                    }};;
                    creativeGroupIds = new String[]{{
                        add("eum"),
                    }};
                    creativeOptimizationConfiguration = new CreativeOptimizationConfiguration() {{
                        id = "sint";
                        name = "Loren Botsford";
                        optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "temporibus";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "voluptatum";
                                    etag = "deserunt";
                                    id = "23c23e34-f2df-4a4a-997f-6de922151fe1";
                                    kind = "in";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "sed";
                                }};
                                weight = 30962;
                            }}),
                        }};
                        optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_IMPRESSION;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "error";
                        overrideInheritedEventTag = false;
                    }};;
                    defaultLandingPageId = "deleniti";
                    endDate = LocalDate.parse("2022-10-20");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "unde";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "reiciendis";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "quis";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "modi";
                        }}),
                    }};
                    externalId = "adipisci";
                    id = "pariatur";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "praesentium";
                        etag = "nemo";
                        id = "4439ee22-4460-4443-bc15-4188c2f56e85";
                        kind = "at";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "nihil";
                    }};;
                    kind = "laudantium";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "dolorem";
                    }};;
                    measurementPartnerLink = new MeasurementPartnerCampaignLink() {{
                        linkStatus = MeasurementPartnerCampaignLinkLinkStatusEnum.MEASUREMENT_PARTNER_LINKED;
                        measurementPartner = MeasurementPartnerCampaignLinkMeasurementPartnerEnum.DOUBLE_VERIFY;
                        partnerCampaignId = "mollitia";
                    }};;
                    name = "Ms. Ismael Hodkiewicz";
                    nielsenOcrEnabled = false;
                    startDate = LocalDate.parse("2022-04-24");
                    subaccountId = "aperiam";
                    traffickerEmails = new String[]{{
                        add("ad"),
                        add("architecto"),
                        add("culpa"),
                        add("aliquam"),
                    }};
                }};;
                accessToken = "ut";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "sit";
                key = "architecto";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "nulla";
                uploadProtocol = "corrupti";
            }};            

            DfareportingCampaignsUpdateResponse res = sdk.campaigns.dfareportingCampaignsUpdate(req, new DfareportingCampaignsUpdateSecurity("voluptate", "alias") {{
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
