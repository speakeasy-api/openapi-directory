# sites

### Available Operations

* [dfareportingSitesGet](#dfareportingsitesget) - Gets one site by ID.
* [dfareportingSitesInsert](#dfareportingsitesinsert) - Inserts a new site.
* [dfareportingSitesList](#dfareportingsiteslist) - Retrieves a list of sites, possibly filtered. This method supports paging.
* [dfareportingSitesPatch](#dfareportingsitespatch) - Updates an existing site. This method supports patch semantics.
* [dfareportingSitesUpdate](#dfareportingsitesupdate) - Updates an existing site.

## dfareportingSitesGet

Gets one site by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSitesGetRequest;
import org.openapis.openapi.models.operations.DfareportingSitesGetResponse;
import org.openapis.openapi.models.operations.DfareportingSitesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSitesGetRequest req = new DfareportingSitesGetRequest("aut", "repellendus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "officia";
                fields = "perferendis";
                key = "iste";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "deleniti";
                uploadProtocol = "voluptate";
            }};            

            DfareportingSitesGetResponse res = sdk.sites.dfareportingSitesGet(req, new DfareportingSitesGetSecurity("cum", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.site != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingSitesInsert

Inserts a new site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSitesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingSitesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingSitesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.ObaIcon;
import org.openapis.openapi.models.shared.Site;
import org.openapis.openapi.models.shared.SiteCompanionSetting;
import org.openapis.openapi.models.shared.SiteContact;
import org.openapis.openapi.models.shared.SiteContactContactTypeEnum;
import org.openapis.openapi.models.shared.SiteSettings;
import org.openapis.openapi.models.shared.SiteSettingsVpaidAdapterChoiceTemplateEnum;
import org.openapis.openapi.models.shared.SiteSkippableSetting;
import org.openapis.openapi.models.shared.SiteTranscodeSetting;
import org.openapis.openapi.models.shared.SiteVideoSettings;
import org.openapis.openapi.models.shared.SiteVideoSettingsOrientationEnum;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.TagSetting;
import org.openapis.openapi.models.shared.TagSettingKeywordOptionEnum;
import org.openapis.openapi.models.shared.VideoOffset;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSitesInsertRequest req = new DfareportingSitesInsertRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                site = new Site() {{
                    accountId = "sunt";
                    approved = false;
                    directorySiteId = "harum";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "quia";
                        etag = "ipsam";
                        id = "de429053-7fd8-4ba5-8ea5-ac2c35b84749";
                        kind = "inventore";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "assumenda";
                    }};;
                    id = "voluptates";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "culpa";
                        etag = "cupiditate";
                        id = "0e0f5844-da9b-41a1-8a36-3f32fda2342b";
                        kind = "aperiam";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "ut";
                    }};;
                    keyName = "sint";
                    kind = "quis";
                    name = "Debbie Smitham";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "1465 Walker Road";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Leatha.Connelly72@yahoo.com";
                            firstName = "Katlynn";
                            id = "vitae";
                            lastName = "Graham";
                            phone = "517.858.8560 x17026";
                            title = "Mr.";
                        }}),
                        add(new SiteContact() {{
                            address = "3785 Yundt Villages";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Donnell_Tremblay76@gmail.com";
                            firstName = "Eliza";
                            id = "temporibus";
                            lastName = "Williamson";
                            phone = "1-296-507-6673 x820";
                            title = "Miss";
                        }}),
                        add(new SiteContact() {{
                            address = "92300 Goyette Throughway";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Gwendolyn_Dickinson@gmail.com";
                            firstName = "Bette";
                            id = "quisquam";
                            lastName = "Bruen";
                            phone = "1-311-713-0621 x51924";
                            title = "Ms.";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "quibusdam";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.IGNORE;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.DEFAULT_;
                    }};;
                    subaccountId = "laborum";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 595954;
                                    iab = false;
                                    id = "perferendis";
                                    kind = "doloremque";
                                    width = 27133;
                                }}),
                                add(new Size() {{
                                    height = 852260;
                                    iab = false;
                                    id = "corporis";
                                    kind = "nulla";
                                    width = 875316;
                                }}),
                                add(new Size() {{
                                    height = 813643;
                                    iab = false;
                                    id = "excepturi";
                                    kind = "temporibus";
                                    width = 35134;
                                }}),
                                add(new Size() {{
                                    height = 28836;
                                    iab = false;
                                    id = "temporibus";
                                    kind = "impedit";
                                    width = 162181;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "laboriosam";
                        }};;
                        kind = "voluptas";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "vitae";
                            iconClickTrackingUrl = "veritatis";
                            iconViewTrackingUrl = "repellat";
                            program = "itaque";
                            resourceUrl = "animi";
                            size = new Size() {{
                                height = 6237;
                                iab = false;
                                id = "facere";
                                kind = "vero";
                                width = 167102;
                            }};;
                            xPosition = "magni";
                            yPosition = "non";
                        }};;
                        orientation = SiteVideoSettingsOrientationEnum.ANY;
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "ea";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 220715;
                                offsetSeconds = 502420;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 142346;
                                offsetSeconds = 439715;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(261972),
                            }};
                            kind = "at";
                        }};;
                    }};;
                }};;
                accessToken = "consequatur";
                alt = AltEnum.MEDIA;
                callback = "doloremque";
                fields = "nemo";
                key = "id";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "saepe";
                uploadProtocol = "voluptatum";
            }};            

            DfareportingSitesInsertResponse res = sdk.sites.dfareportingSitesInsert(req, new DfareportingSitesInsertSecurity("cupiditate", "quia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.site != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingSitesList

Retrieves a list of sites, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSitesListRequest;
import org.openapis.openapi.models.operations.DfareportingSitesListResponse;
import org.openapis.openapi.models.operations.DfareportingSitesListSecurity;
import org.openapis.openapi.models.operations.DfareportingSitesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingSitesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSitesListRequest req = new DfareportingSitesListRequest("nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                acceptsInStreamVideoPlacements = false;
                acceptsInterstitialPlacements = false;
                acceptsPublisherPaidPlacements = false;
                accessToken = "sequi";
                adWordsSite = false;
                alt = AltEnum.PROTO;
                approved = false;
                callback = "voluptates";
                campaignIds = new String[]{{
                    add("neque"),
                    add("corrupti"),
                    add("quae"),
                }};
                directorySiteIds = new String[]{{
                    add("similique"),
                    add("reiciendis"),
                    add("incidunt"),
                    add("fuga"),
                }};
                fields = "eos";
                ids = new String[]{{
                    add("omnis"),
                    add("labore"),
                }};
                key = "esse";
                maxResults = 363472L;
                oauthToken = "quia";
                pageToken = "voluptas";
                prettyPrint = false;
                quotaUser = "sint";
                searchString = "ullam";
                sortField = DfareportingSitesListSortFieldEnum.NAME;
                sortOrder = DfareportingSitesListSortOrderEnum.DESCENDING;
                subaccountId = "quidem";
                unmappedSite = false;
                uploadType = "non";
                uploadProtocol = "non";
            }};            

            DfareportingSitesListResponse res = sdk.sites.dfareportingSitesList(req, new DfareportingSitesListSecurity("eius", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sitesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingSitesPatch

Updates an existing site. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSitesPatchRequest;
import org.openapis.openapi.models.operations.DfareportingSitesPatchResponse;
import org.openapis.openapi.models.operations.DfareportingSitesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.ObaIcon;
import org.openapis.openapi.models.shared.Site;
import org.openapis.openapi.models.shared.SiteCompanionSetting;
import org.openapis.openapi.models.shared.SiteContact;
import org.openapis.openapi.models.shared.SiteContactContactTypeEnum;
import org.openapis.openapi.models.shared.SiteSettings;
import org.openapis.openapi.models.shared.SiteSettingsVpaidAdapterChoiceTemplateEnum;
import org.openapis.openapi.models.shared.SiteSkippableSetting;
import org.openapis.openapi.models.shared.SiteTranscodeSetting;
import org.openapis.openapi.models.shared.SiteVideoSettings;
import org.openapis.openapi.models.shared.SiteVideoSettingsOrientationEnum;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.TagSetting;
import org.openapis.openapi.models.shared.TagSettingKeywordOptionEnum;
import org.openapis.openapi.models.shared.VideoOffset;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSitesPatchRequest req = new DfareportingSitesPatchRequest("nisi", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                site = new Site() {{
                    accountId = "recusandae";
                    approved = false;
                    directorySiteId = "necessitatibus";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "iusto";
                        etag = "voluptatem";
                        id = "9a8df6e2-f33c-4757-bbfb-860857ac07fa";
                        kind = "laborum";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "suscipit";
                    }};;
                    id = "dolorum";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "rem";
                        etag = "nemo";
                        id = "f7b7cf56-4eae-48bc-bb63-aa4b277d98ae";
                        kind = "iste";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "dolore";
                    }};;
                    keyName = "similique";
                    kind = "exercitationem";
                    name = "Laurie Runte";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "41121 Joaquin Tunnel";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Grover.Doyle97@yahoo.com";
                            firstName = "Pete";
                            id = "ducimus";
                            lastName = "Rogahn";
                            phone = "960-319-8781 x108";
                            title = "Dr.";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "consectetur";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.DEFAULT_;
                    }};;
                    subaccountId = "non";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 171866;
                                    iab = false;
                                    id = "eaque";
                                    kind = "harum";
                                    width = 858700;
                                }}),
                                add(new Size() {{
                                    height = 993703;
                                    iab = false;
                                    id = "porro";
                                    kind = "numquam";
                                    width = 35440;
                                }}),
                                add(new Size() {{
                                    height = 360860;
                                    iab = false;
                                    id = "doloribus";
                                    kind = "corporis";
                                    width = 562330;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "quam";
                        }};;
                        kind = "illo";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "eius";
                            iconClickTrackingUrl = "voluptatibus";
                            iconViewTrackingUrl = "quas";
                            program = "accusamus";
                            resourceUrl = "repellendus";
                            size = new Size() {{
                                height = 980690;
                                iab = false;
                                id = "aliquid";
                                kind = "saepe";
                                width = 280175;
                            }};;
                            xPosition = "quas";
                            yPosition = "earum";
                        }};;
                        orientation = SiteVideoSettingsOrientationEnum.PORTRAIT;
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "quos";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 235492;
                                offsetSeconds = 232703;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 879531;
                                offsetSeconds = 347143;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(500943),
                                add(312482),
                            }};
                            kind = "et";
                        }};;
                    }};;
                }};;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "expedita";
                key = "quibusdam";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "nihil";
                uploadProtocol = "beatae";
            }};            

            DfareportingSitesPatchResponse res = sdk.sites.dfareportingSitesPatch(req, new DfareportingSitesPatchSecurity("pariatur", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.site != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingSitesUpdate

Updates an existing site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingSitesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingSitesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingSitesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.ObaIcon;
import org.openapis.openapi.models.shared.Site;
import org.openapis.openapi.models.shared.SiteCompanionSetting;
import org.openapis.openapi.models.shared.SiteContact;
import org.openapis.openapi.models.shared.SiteContactContactTypeEnum;
import org.openapis.openapi.models.shared.SiteSettings;
import org.openapis.openapi.models.shared.SiteSettingsVpaidAdapterChoiceTemplateEnum;
import org.openapis.openapi.models.shared.SiteSkippableSetting;
import org.openapis.openapi.models.shared.SiteTranscodeSetting;
import org.openapis.openapi.models.shared.SiteVideoSettings;
import org.openapis.openapi.models.shared.SiteVideoSettingsOrientationEnum;
import org.openapis.openapi.models.shared.Size;
import org.openapis.openapi.models.shared.TagSetting;
import org.openapis.openapi.models.shared.TagSettingKeywordOptionEnum;
import org.openapis.openapi.models.shared.VideoOffset;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingSitesUpdateRequest req = new DfareportingSitesUpdateRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                site = new Site() {{
                    accountId = "eligendi";
                    approved = false;
                    directorySiteId = "veritatis";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "earum";
                        etag = "ducimus";
                        id = "c64c170a-6903-4be7-9b77-708dae092b70";
                        kind = "non";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "architecto";
                    }};;
                    id = "veritatis";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "cupiditate";
                        etag = "ad";
                        id = "944dc7f1-13e7-4df6-b6c9-2ba334ca89e7";
                        kind = "beatae";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "ratione";
                    }};;
                    keyName = "magni";
                    kind = "cumque";
                    name = "Mrs. Leo O'Keefe";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "21858 Caden Curve";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Joshua_Johns57@hotmail.com";
                            firstName = "Geovany";
                            id = "deleniti";
                            lastName = "Shanahan";
                            phone = "678.764.3433 x81001";
                            title = "Ms.";
                        }}),
                        add(new SiteContact() {{
                            address = "7758 Ole Ridges";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Thad.Stamm@hotmail.com";
                            firstName = "Pasquale";
                            id = "autem";
                            lastName = "Gulgowski";
                            phone = "949.974.3991";
                            title = "Mr.";
                        }}),
                        add(new SiteContact() {{
                            address = "41545 Fahey Stream";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Merl_Steuber71@yahoo.com";
                            firstName = "Abigail";
                            id = "perferendis";
                            lastName = "Cummerata";
                            phone = "1-329-783-1592 x1639";
                            title = "Dr.";
                        }}),
                        add(new SiteContact() {{
                            address = "0039 Katharina Centers";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Tyson_Bradtke52@hotmail.com";
                            firstName = "Sonny";
                            id = "voluptatibus";
                            lastName = "Beatty";
                            phone = "228.808.1067 x233";
                            title = "Dr.";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "cum";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.PLACEHOLDER_WITH_LIST_OF_KEYWORDS;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.DEFAULT_;
                    }};;
                    subaccountId = "occaecati";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 130247;
                                    iab = false;
                                    id = "quod";
                                    kind = "accusamus";
                                    width = 35283;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "aspernatur";
                        }};;
                        kind = "tempora";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "deserunt";
                            iconClickTrackingUrl = "minima";
                            iconViewTrackingUrl = "amet";
                            program = "incidunt";
                            resourceUrl = "eligendi";
                            size = new Size() {{
                                height = 894279;
                                iab = false;
                                id = "qui";
                                kind = "dicta";
                                width = 758285;
                            }};;
                            xPosition = "eaque";
                            yPosition = "praesentium";
                        }};;
                        orientation = SiteVideoSettingsOrientationEnum.ANY;
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "facilis";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 104411;
                                offsetSeconds = 520608;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 28052;
                                offsetSeconds = 556542;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(604432),
                                add(773700),
                            }};
                            kind = "amet";
                        }};;
                    }};;
                }};;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "modi";
                key = "quam";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "ducimus";
                uploadProtocol = "molestiae";
            }};            

            DfareportingSitesUpdateResponse res = sdk.sites.dfareportingSitesUpdate(req, new DfareportingSitesUpdateSecurity("amet", "perspiciatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.site != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
