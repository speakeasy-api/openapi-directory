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

            DfareportingCampaignsGetRequest req = new DfareportingCampaignsGetRequest("sapiente", "alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "nihil";
                key = "voluptatum";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "ullam";
                uploadProtocol = "nisi";
            }};            

            DfareportingCampaignsGetResponse res = sdk.campaigns.dfareportingCampaignsGet(req, new DfareportingCampaignsGetSecurity("consequuntur", "voluptas") {{
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
import org.openapis.openapi.models.shared.OptimizationActivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCampaignsInsertRequest req = new DfareportingCampaignsInsertRequest("ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                campaign = new Campaign() {{
                    accountId = "corrupti";
                    adBlockingConfiguration = new AdBlockingConfiguration() {{
                        clickThroughUrl = "est";
                        creativeBundleId = "perferendis";
                        enabled = false;
                        overrideClickThroughUrl = false;
                    }};;
                    additionalCreativeOptimizationConfigurations = new org.openapis.openapi.models.shared.CreativeOptimizationConfiguration[]{{
                        add(new CreativeOptimizationConfiguration() {{
                            id = "impedit";
                            name = "Sue Huel";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "maxime";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "maxime";
                                        etag = "expedita";
                                        id = "06c8ca12-d025-4292-b0b8-d5722dd895b8";
                                        kind = "facilis";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "reiciendis";
                                    }};
                                    weight = 170934;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "dolore";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "pariatur";
                                        etag = "facilis";
                                        id = "95969335-2f74-4533-994d-78de3b6e9389";
                                        kind = "voluptatibus";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "dolorum";
                                    }};
                                    weight = 743705;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK_AND_IMPRESSION;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "in";
                            name = "Rafael Johns";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "doloremque";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "est";
                                        etag = "qui";
                                        id = "8382ac48-3afd-4231-9bba-650164e06f5b";
                                        kind = "asperiores";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "deserunt";
                                    }};
                                    weight = 919730;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "nemo";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "molestias";
                                        etag = "architecto";
                                        id = "bc8bdef3-612b-463c-a05f-da840774a68a";
                                        kind = "sint";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "dolor";
                                    }};
                                    weight = 322773;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.VIDEO_COMPLETION;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "sit";
                            name = "Hector Ratke";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "vel";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "delectus";
                                        etag = "accusamus";
                                        id = "f020e9f4-43b4-4257-b992-c8dbda6a61ef";
                                        kind = "id";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "inventore";
                                    }};
                                    weight = 612238;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "atque";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "explicabo";
                                        etag = "ullam";
                                        id = "8fd0a9eb-a47f-47d3-af04-9640d6a1831c";
                                        kind = "atque";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "culpa";
                                    }};
                                    weight = 837739;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.VIDEO_COMPLETION;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "ad";
                            name = "Sam Wisoky";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "mollitia";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "possimus";
                                        etag = "praesentium";
                                        id = "37ae80c1-c19c-495b-a998-678fa3f69699";
                                        kind = "ab";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "a";
                                    }};
                                    weight = 222771;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_IMPRESSION;
                        }}),
                    }};
                    advertiserGroupId = "molestias";
                    advertiserId = "quod";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "repudiandae";
                        etag = "eaque";
                        id = "3614448c-7977-4a0e-b2f5-36028efeef93";
                        kind = "aliquam";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "veniam";
                    }};;
                    archived = false;
                    audienceSegmentGroups = new org.openapis.openapi.models.shared.AudienceSegmentGroup[]{{
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 820866;
                                    id = "dignissimos";
                                    name = "Benjamin Hermiston";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 276795;
                                    id = "quod";
                                    name = "Samantha Kohler";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 641006;
                                    id = "est";
                                    name = "Dr. Pamela Klein";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 293023;
                                    id = "nemo";
                                    name = "Salvatore Schneider";
                                }}),
                            }};
                            id = "laboriosam";
                            name = "Fannie Nitzsche";
                        }}),
                    }};
                    billingInvoiceCode = "soluta";
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "tempore";
                        overrideInheritedSuffix = false;
                    }};;
                    comment = "culpa";
                    createInfo = new LastModifiedInfo() {{
                        time = "fugiat";
                    }};;
                    creativeGroupIds = new String[]{{
                        add("atque"),
                    }};
                    creativeOptimizationConfiguration = new CreativeOptimizationConfiguration() {{
                        id = "ad";
                        name = "Pat Goyette PhD";
                        optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "quidem";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "delectus";
                                    etag = "nemo";
                                    id = "c838fbb8-c20c-4b67-bc4b-425e99e6234c";
                                    kind = "occaecati";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "voluptate";
                                }};
                                weight = 735521;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "in";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "omnis";
                                    etag = "possimus";
                                    id = "feb77a5c-38d4-4baf-91e5-06ef890a54b4";
                                    kind = "odio";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "maiores";
                                }};
                                weight = 83997;
                            }}),
                        }};
                        optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_IMPRESSION;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "earum";
                        overrideInheritedEventTag = false;
                    }};;
                    defaultLandingPageId = "minima";
                    endDate = LocalDate.parse("2022-03-07");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "corrupti";
                        }}),
                    }};
                    externalId = "nostrum";
                    id = "fuga";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "sequi";
                        etag = "maxime";
                        id = "4ac631b9-9e26-4ced-8f9f-db9410f63bbf";
                        kind = "blanditiis";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "iusto";
                    }};;
                    kind = "atque";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "velit";
                    }};;
                    name = "Miss Candice Bayer";
                    nielsenOcrEnabled = false;
                    startDate = LocalDate.parse("2020-06-19");
                    subaccountId = "quam";
                    traffickerEmails = new String[]{{
                        add("rem"),
                        add("vel"),
                        add("eos"),
                    }};
                }};;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "iste";
                key = "accusamus";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "labore";
                uploadProtocol = "blanditiis";
            }};            

            DfareportingCampaignsInsertResponse res = sdk.campaigns.dfareportingCampaignsInsert(req, new DfareportingCampaignsInsertSecurity("ducimus", "consectetur") {{
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

            DfareportingCampaignsListRequest req = new DfareportingCampaignsListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusantium";
                advertiserGroupIds = new String[]{{
                    add("consectetur"),
                }};
                advertiserIds = new String[]{{
                    add("architecto"),
                    add("sint"),
                    add("possimus"),
                    add("tempore"),
                }};
                alt = AltEnum.PROTO;
                archived = false;
                atLeastOneOptimizationActivity = false;
                callback = "quasi";
                excludedIds = new String[]{{
                    add("nemo"),
                }};
                fields = "nobis";
                ids = new String[]{{
                    add("labore"),
                    add("veritatis"),
                    add("minima"),
                    add("magni"),
                }};
                key = "itaque";
                maxResults = 625418L;
                oauthToken = "expedita";
                overriddenEventTagId = "error";
                pageToken = "placeat";
                prettyPrint = false;
                quotaUser = "temporibus";
                searchString = "voluptate";
                sortField = DfareportingCampaignsListSortFieldEnum.NAME;
                sortOrder = DfareportingCampaignsListSortOrderEnum.ASCENDING;
                subaccountId = "odit";
                uploadType = "odit";
                uploadProtocol = "eius";
            }};            

            DfareportingCampaignsListResponse res = sdk.campaigns.dfareportingCampaignsList(req, new DfareportingCampaignsListSecurity("error", "vel") {{
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
import org.openapis.openapi.models.shared.OptimizationActivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCampaignsPatchRequest req = new DfareportingCampaignsPatchRequest("dolorum", "alias") {{
                dollarXgafv = XgafvEnum.TWO;
                campaign = new Campaign() {{
                    accountId = "ab";
                    adBlockingConfiguration = new AdBlockingConfiguration() {{
                        clickThroughUrl = "sunt";
                        creativeBundleId = "amet";
                        enabled = false;
                        overrideClickThroughUrl = false;
                    }};;
                    additionalCreativeOptimizationConfigurations = new org.openapis.openapi.models.shared.CreativeOptimizationConfiguration[]{{
                        add(new CreativeOptimizationConfiguration() {{
                            id = "iusto";
                            name = "Kyle Koch";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "omnis";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "recusandae";
                                        etag = "architecto";
                                        id = "f67f3c4c-ce4b-46d7-a96f-f3c574750135";
                                        kind = "nihil";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "dolore";
                                    }};
                                    weight = 298590;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "maiores";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "ipsam";
                                        etag = "dicta";
                                        id = "f8b084c3-197e-4193-a245-467f94874c2d";
                                        kind = "ipsam";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "porro";
                                    }};
                                    weight = 287834;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_IMPRESSION;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "ducimus";
                            name = "Norma Feest";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "aliquid";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "cum";
                                        etag = "fugiat";
                                        id = "8fe5d00b-979e-4f20-b873-20590ccc1096";
                                        kind = "eius";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "voluptatem";
                                    }};
                                    weight = 247838;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "beatae";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "sequi";
                                        etag = "rerum";
                                        id = "3e5044f6-5fe7-42dc-8077-d0cc3f408efc";
                                        kind = "dicta";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "impedit";
                                    }};
                                    weight = 908877;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK_AND_IMPRESSION;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "dolore";
                            name = "Dr. Angel Towne";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "voluptatem";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "maiores";
                                        etag = "odio";
                                        id = "5aedf2ac-ab58-4b99-9c92-6ddb589461e7";
                                        kind = "numquam";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "inventore";
                                    }};
                                    weight = 761773;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "nobis";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "recusandae";
                                        etag = "commodi";
                                        id = "d9502f0e-a930-4b69-b7ac-2f72f8850090";
                                        kind = "tempora";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "quasi";
                                    }};
                                    weight = 82915;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "ex";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "doloremque";
                                        etag = "quas";
                                        id = "207888ec-6618-43bf-a965-9eb40ec16faf";
                                        kind = "nihil";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "rerum";
                                    }};
                                    weight = 17548;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "nam";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "ullam";
                                        etag = "ratione";
                                        id = "2a4da37c-baaf-4445-ac48-42c9b2ad32da";
                                        kind = "sapiente";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "voluptatum";
                                    }};
                                    weight = 98123;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK_AND_IMPRESSION;
                        }}),
                    }};
                    advertiserGroupId = "voluptatum";
                    advertiserId = "blanditiis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sapiente";
                        etag = "ut";
                        id = "444573fe-cd47-4353-b63c-8209379aa69c";
                        kind = "at";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "asperiores";
                    }};;
                    archived = false;
                    audienceSegmentGroups = new org.openapis.openapi.models.shared.AudienceSegmentGroup[]{{
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 959659;
                                    id = "quam";
                                    name = "Ms. Marcos Nicolas";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 485950;
                                    id = "totam";
                                    name = "Ruby Pfeffer";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 338437;
                                    id = "quos";
                                    name = "Tom Thiel";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 433194;
                                    id = "vitae";
                                    name = "Owen Reinger";
                                }}),
                            }};
                            id = "maiores";
                            name = "Sheldon Hilpert";
                        }}),
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 81917;
                                    id = "eligendi";
                                    name = "Santos Treutel";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 470732;
                                    id = "veniam";
                                    name = "Jacqueline Prohaska";
                                }}),
                            }};
                            id = "quod";
                            name = "Ms. Joanne Halvorson";
                        }}),
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 954946;
                                    id = "et";
                                    name = "Stacey Grimes";
                                }}),
                            }};
                            id = "ex";
                            name = "Allison Mann";
                        }}),
                    }};
                    billingInvoiceCode = "hic";
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "quidem";
                        overrideInheritedSuffix = false;
                    }};;
                    comment = "odit";
                    createInfo = new LastModifiedInfo() {{
                        time = "molestiae";
                    }};;
                    creativeGroupIds = new String[]{{
                        add("quia"),
                        add("inventore"),
                        add("doloribus"),
                        add("praesentium"),
                    }};
                    creativeOptimizationConfiguration = new CreativeOptimizationConfiguration() {{
                        id = "aliquid";
                        name = "Vanessa Hilll";
                        optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "vel";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "delectus";
                                    etag = "maxime";
                                    id = "6b9f587c-e525-4c67-a41a-8312e5047b4c";
                                    kind = "quia";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "porro";
                                }};
                                weight = 767880;
                            }}),
                        }};
                        optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK_AND_IMPRESSION;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "numquam";
                        overrideInheritedEventTag = false;
                    }};;
                    defaultLandingPageId = "fugit";
                    endDate = LocalDate.parse("2022-05-15");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "minus";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "vero";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "impedit";
                        }}),
                    }};
                    externalId = "omnis";
                    id = "et";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "earum";
                        etag = "fuga";
                        id = "abdd88e7-1f6c-4482-92d7-771e7fd07400";
                        kind = "iste";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "repellat";
                    }};;
                    kind = "voluptatum";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "facere";
                    }};;
                    name = "Faye Simonis DDS";
                    nielsenOcrEnabled = false;
                    startDate = LocalDate.parse("2021-07-03");
                    subaccountId = "aut";
                    traffickerEmails = new String[]{{
                        add("voluptate"),
                        add("tempore"),
                        add("ullam"),
                    }};
                }};;
                accessToken = "illum";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "quos";
                key = "quo";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "doloribus";
                uploadProtocol = "id";
            }};            

            DfareportingCampaignsPatchResponse res = sdk.campaigns.dfareportingCampaignsPatch(req, new DfareportingCampaignsPatchSecurity("eum", "cumque") {{
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
import org.openapis.openapi.models.shared.OptimizationActivity;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingCampaignsUpdateRequest req = new DfareportingCampaignsUpdateRequest("odio") {{
                dollarXgafv = XgafvEnum.TWO;
                campaign = new Campaign() {{
                    accountId = "similique";
                    adBlockingConfiguration = new AdBlockingConfiguration() {{
                        clickThroughUrl = "quia";
                        creativeBundleId = "architecto";
                        enabled = false;
                        overrideClickThroughUrl = false;
                    }};;
                    additionalCreativeOptimizationConfigurations = new org.openapis.openapi.models.shared.CreativeOptimizationConfiguration[]{{
                        add(new CreativeOptimizationConfiguration() {{
                            id = "accusamus";
                            name = "Sonia Pollich";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "minus";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "officia";
                                        etag = "laboriosam";
                                        id = "19149814-0b64-4ff8-ae17-0ef03b5f37e4";
                                        kind = "mollitia";
                                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                        value = "blanditiis";
                                    }};
                                    weight = 381974;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "quas";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "quis";
                                        etag = "enim";
                                        id = "5966732a-a5dc-4b66-82cb-70f8cfd5fb6e";
                                        kind = "occaecati";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "quidem";
                                    }};
                                    weight = 609151;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "laborum";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "molestias";
                                        etag = "a";
                                        id = "74846e2c-3309-4db0-936d-9e75ca006f53";
                                        kind = "omnis";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "quo";
                                    }};
                                    weight = 91736;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "illo";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "est";
                                        etag = "quia";
                                        id = "5a8bf92f-9742-48ad-9a9f-8bf822112535";
                                        kind = "provident";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "iste";
                                    }};
                                    weight = 503598;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK;
                        }}),
                        add(new CreativeOptimizationConfiguration() {{
                            id = "totam";
                            name = "Winifred Kub";
                            optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "maxime";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "assumenda";
                                        etag = "nihil";
                                        id = "2cd2484d-a217-429f-aac4-1ef5725f1169";
                                        kind = "id";
                                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                        value = "quasi";
                                    }};
                                    weight = 931393;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "aliquam";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "vitae";
                                        etag = "temporibus";
                                        id = "8a23c23e-34f2-4dfa-8a19-7f6de922151f";
                                        kind = "saepe";
                                        matchType = DimensionValueMatchTypeEnum.EXACT;
                                        value = "in";
                                    }};
                                    weight = 99163;
                                }}),
                                add(new OptimizationActivity() {{
                                    floodlightActivityId = "sed";
                                    floodlightActivityIdDimensionValue = new DimensionValue() {{
                                        dimensionName = "voluptatem";
                                        etag = "perspiciatis";
                                        id = "9853e9f5-43d8-4544-b9ee-224460443bc1";
                                        kind = "minima";
                                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                        value = "vitae";
                                    }};
                                    weight = 552965;
                                }}),
                            }};
                            optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_IMPRESSION;
                        }}),
                    }};
                    advertiserGroupId = "quisquam";
                    advertiserId = "sunt";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "asperiores";
                        etag = "corporis";
                        id = "6e85da78-32ea-4bd6-97c3-b0d51a44bf01";
                        kind = "tempore";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "nulla";
                    }};;
                    archived = false;
                    audienceSegmentGroups = new org.openapis.openapi.models.shared.AudienceSegmentGroup[]{{
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 3201;
                                    id = "iure";
                                    name = "Ms. Barry Jaskolski";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 725369;
                                    id = "maiores";
                                    name = "Dewey Schmeler DVM";
                                }}),
                            }};
                            id = "delectus";
                            name = "Teri Gulgowski";
                        }}),
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 901611;
                                    id = "labore";
                                    name = "Cesar Hansen";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 229246;
                                    id = "quis";
                                    name = "Jack Kulas";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 551570;
                                    id = "delectus";
                                    name = "Delia Schuppe";
                                }}),
                            }};
                            id = "atque";
                            name = "Vivian Medhurst";
                        }}),
                        add(new AudienceSegmentGroup() {{
                            audienceSegments = new org.openapis.openapi.models.shared.AudienceSegment[]{{
                                add(new AudienceSegment() {{
                                    allocation = 327624;
                                    id = "cumque";
                                    name = "Dr. Hugh Keebler";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 770940;
                                    id = "illum";
                                    name = "Maxine Auer";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 472759;
                                    id = "nesciunt";
                                    name = "Willie Bayer";
                                }}),
                                add(new AudienceSegment() {{
                                    allocation = 999949;
                                    id = "necessitatibus";
                                    name = "Gail Gutkowski";
                                }}),
                            }};
                            id = "excepturi";
                            name = "Erma Streich";
                        }}),
                    }};
                    billingInvoiceCode = "illo";
                    clickThroughUrlSuffixProperties = new ClickThroughUrlSuffixProperties() {{
                        clickThroughUrlSuffix = "illum";
                        overrideInheritedSuffix = false;
                    }};;
                    comment = "nulla";
                    createInfo = new LastModifiedInfo() {{
                        time = "amet";
                    }};;
                    creativeGroupIds = new String[]{{
                        add("libero"),
                        add("impedit"),
                        add("repudiandae"),
                    }};
                    creativeOptimizationConfiguration = new CreativeOptimizationConfiguration() {{
                        id = "dolores";
                        name = "Tanya Pollich";
                        optimizationActivitys = new org.openapis.openapi.models.shared.OptimizationActivity[]{{
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "labore";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "repudiandae";
                                    etag = "reiciendis";
                                    id = "f50126d7-1cff-4bd0-ab74-b8421953b44b";
                                    kind = "nulla";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "quisquam";
                                }};
                                weight = 288790;
                            }}),
                            add(new OptimizationActivity() {{
                                floodlightActivityId = "sequi";
                                floodlightActivityIdDimensionValue = new DimensionValue() {{
                                    dimensionName = "veritatis";
                                    etag = "veniam";
                                    id = "9d33e595-3c00-4113-9863-aa41e6c31cc2";
                                    kind = "reiciendis";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "hic";
                                }};
                                weight = 781521;
                            }}),
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
                        }};
                        optimizationModel = CreativeOptimizationConfigurationOptimizationModelEnum.POST_CLICK;
                    }};;
                    defaultClickThroughEventTagProperties = new DefaultClickThroughEventTagProperties() {{
                        defaultClickThroughEventTagId = "porro";
                        overrideInheritedEventTag = false;
                    }};;
                    defaultLandingPageId = "molestiae";
                    endDate = LocalDate.parse("2022-07-28");
                    eventTagOverrides = new org.openapis.openapi.models.shared.EventTagOverride[]{{
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "dicta";
                        }}),
                        add(new EventTagOverride() {{
                            enabled = false;
                            id = "provident";
                        }}),
                    }};
                    externalId = "non";
                    id = "dolore";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "soluta";
                        etag = "occaecati";
                        id = "0f2e09d1-9d2f-4c2f-9e2e-105944b935d2";
                        kind = "adipisci";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "id";
                    }};;
                    kind = "ducimus";
                    lastModifiedInfo = new LastModifiedInfo() {{
                        time = "dolores";
                    }};;
                    name = "Tracy Baumbach";
                    nielsenOcrEnabled = false;
                    startDate = LocalDate.parse("2021-04-19");
                    subaccountId = "laboriosam";
                    traffickerEmails = new String[]{{
                        add("itaque"),
                        add("assumenda"),
                        add("quaerat"),
                    }};
                }};;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "optio";
                fields = "soluta";
                key = "dignissimos";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "esse";
                uploadProtocol = "placeat";
            }};            

            DfareportingCampaignsUpdateResponse res = sdk.campaigns.dfareportingCampaignsUpdate(req, new DfareportingCampaignsUpdateSecurity("at", "excepturi") {{
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
