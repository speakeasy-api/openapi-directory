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

            DfareportingSitesGetRequest req = new DfareportingSitesGetRequest("ex", "ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "minus";
                key = "ad";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "eos";
                uploadProtocol = "ipsa";
            }};            

            DfareportingSitesGetResponse res = sdk.sites.dfareportingSitesGet(req, new DfareportingSitesGetSecurity("cum", "natus") {{
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

            DfareportingSitesInsertRequest req = new DfareportingSitesInsertRequest("ad") {{
                dollarXgafv = XgafvEnum.ONE;
                site = new Site() {{
                    accountId = "minus";
                    approved = false;
                    directorySiteId = "corrupti";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "voluptatum";
                        etag = "ratione";
                        id = "933d5c4d-d75a-4d7f-b70d-efb4ca1de629";
                        kind = "quibusdam";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "cumque";
                    }};;
                    id = "doloribus";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "cum";
                        etag = "dignissimos";
                        id = "a738a81c-db3e-47ce-8c30-a7d87db98166";
                        kind = "magnam";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "eaque";
                    }};;
                    keyName = "doloribus";
                    kind = "consequuntur";
                    name = "Suzanne Wyman";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "1465 Hilda Radial";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Wiley.Fadel@hotmail.com";
                            firstName = "Osbaldo";
                            id = "neque";
                            lastName = "Lakin";
                            phone = "329-682-1880";
                            title = "Mr.";
                        }}),
                        add(new SiteContact() {{
                            address = "5296 Stehr Expressway";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Jarred_Pagac38@gmail.com";
                            firstName = "Larissa";
                            id = "omnis";
                            lastName = "Grady";
                            phone = "376-528-1510 x737";
                            title = "Mrs.";
                        }}),
                        add(new SiteContact() {{
                            address = "628 Wintheiser Valleys";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Jaycee_Kling@gmail.com";
                            firstName = "Florine";
                            id = "a";
                            lastName = "Windler";
                            phone = "743-965-2235 x6525";
                            title = "Mrs.";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "ex";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.PLACEHOLDER_WITH_LIST_OF_KEYWORDS;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.DEFAULT_;
                    }};;
                    subaccountId = "ex";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 436973;
                                    iab = false;
                                    id = "vitae";
                                    kind = "sapiente";
                                    width = 139468;
                                }}),
                                add(new Size() {{
                                    height = 264860;
                                    iab = false;
                                    id = "sed";
                                    kind = "doloremque";
                                    width = 39410;
                                }}),
                                add(new Size() {{
                                    height = 501590;
                                    iab = false;
                                    id = "nulla";
                                    kind = "quasi";
                                    width = 891709;
                                }}),
                                add(new Size() {{
                                    height = 277956;
                                    iab = false;
                                    id = "sunt";
                                    kind = "excepturi";
                                    width = 461569;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "adipisci";
                        }};;
                        kind = "nisi";
                        orientation = SiteVideoSettingsOrientationEnum.LANDSCAPE;
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "sunt";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 930523;
                                offsetSeconds = 864393;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 60717;
                                offsetSeconds = 864068;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(740819),
                                add(639429),
                            }};
                            kind = "magni";
                        }};;
                    }};;
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "ratione";
                key = "aperiam";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "nihil";
                uploadProtocol = "accusantium";
            }};            

            DfareportingSitesInsertResponse res = sdk.sites.dfareportingSitesInsert(req, new DfareportingSitesInsertSecurity("sed", "animi") {{
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

            DfareportingSitesListRequest req = new DfareportingSitesListRequest("consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                acceptsInStreamVideoPlacements = false;
                acceptsInterstitialPlacements = false;
                acceptsPublisherPaidPlacements = false;
                accessToken = "incidunt";
                adWordsSite = false;
                alt = AltEnum.MEDIA;
                approved = false;
                callback = "voluptatibus";
                campaignIds = new String[]{{
                    add("voluptatem"),
                    add("delectus"),
                }};
                directorySiteIds = new String[]{{
                    add("aspernatur"),
                    add("ipsa"),
                    add("atque"),
                    add("laborum"),
                }};
                fields = "iure";
                ids = new String[]{{
                    add("eum"),
                    add("voluptate"),
                }};
                key = "veritatis";
                maxResults = 221139L;
                oauthToken = "corrupti";
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "eligendi";
                searchString = "quaerat";
                sortField = DfareportingSitesListSortFieldEnum.NAME;
                sortOrder = DfareportingSitesListSortOrderEnum.DESCENDING;
                subaccountId = "consectetur";
                unmappedSite = false;
                uploadType = "at";
                uploadProtocol = "ipsum";
            }};            

            DfareportingSitesListResponse res = sdk.sites.dfareportingSitesList(req, new DfareportingSitesListSecurity("ea", "illum") {{
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

            DfareportingSitesPatchRequest req = new DfareportingSitesPatchRequest("facere", "debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                site = new Site() {{
                    accountId = "temporibus";
                    approved = false;
                    directorySiteId = "quisquam";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "eaque";
                        etag = "rem";
                        id = "4d63167b-7d67-4dd7-8bfb-e369f0c781f0";
                        kind = "quidem";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "sequi";
                    }};;
                    id = "delectus";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "vitae";
                        etag = "fuga";
                        id = "45bb886a-c107-4dcb-a2f6-90f09f374593";
                        kind = "assumenda";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "sequi";
                    }};;
                    keyName = "facilis";
                    kind = "corrupti";
                    name = "June Russel DDS";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "32450 Senger Passage";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Kaylie_Kozey15@hotmail.com";
                            firstName = "Eugene";
                            id = "pariatur";
                            lastName = "Blanda";
                            phone = "893-844-2030 x7804";
                            title = "Mr.";
                        }}),
                        add(new SiteContact() {{
                            address = "6803 Tremblay Crest";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Dusty.Mohr85@yahoo.com";
                            firstName = "Leon";
                            id = "hic";
                            lastName = "Boyle";
                            phone = "676-905-9200 x471";
                            title = "Mr.";
                        }}),
                        add(new SiteContact() {{
                            address = "35354 Susie Point";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Tara_Torp28@hotmail.com";
                            firstName = "Kaela";
                            id = "enim";
                            lastName = "Kessler";
                            phone = "(660) 759-6996 x209";
                            title = "Ms.";
                        }}),
                        add(new SiteContact() {{
                            address = "445 Bauch Mews";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Anais25@gmail.com";
                            firstName = "Antonietta";
                            id = "magnam";
                            lastName = "Lowe";
                            phone = "443.376.9916 x204";
                            title = "Mrs.";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "vitae";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.PLACEHOLDER_WITH_LIST_OF_KEYWORDS;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.FLASH;
                    }};;
                    subaccountId = "quia";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 138390;
                                    iab = false;
                                    id = "repudiandae";
                                    kind = "amet";
                                    width = 198534;
                                }}),
                                add(new Size() {{
                                    height = 575331;
                                    iab = false;
                                    id = "nam";
                                    kind = "numquam";
                                    width = 215893;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "reiciendis";
                        }};;
                        kind = "error";
                        orientation = SiteVideoSettingsOrientationEnum.ANY;
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "occaecati";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 248081;
                                offsetSeconds = 458724;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 345877;
                                offsetSeconds = 816908;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(222717),
                            }};
                            kind = "facere";
                        }};;
                    }};;
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "ea";
                key = "qui";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "pariatur";
                uploadProtocol = "dolore";
            }};            

            DfareportingSitesPatchResponse res = sdk.sites.dfareportingSitesPatch(req, new DfareportingSitesPatchSecurity("magnam", "sunt") {{
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

            DfareportingSitesUpdateRequest req = new DfareportingSitesUpdateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                site = new Site() {{
                    accountId = "illo";
                    approved = false;
                    directorySiteId = "occaecati";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "similique";
                        etag = "occaecati";
                        id = "a8622981-eae0-4232-8444-c24b191a2164";
                        kind = "sequi";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "consectetur";
                    }};;
                    id = "dicta";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "qui";
                        etag = "odio";
                        id = "4488f0cb-2dc9-4b2e-961d-2ba4161d4c13";
                        kind = "at";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "cupiditate";
                    }};;
                    keyName = "tenetur";
                    kind = "iure";
                    name = "Roland Homenick";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "377 Wolff Forges";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Tiara29@yahoo.com";
                            firstName = "Rowan";
                            id = "nesciunt";
                            lastName = "Torp";
                            phone = "1-878-421-0829 x647";
                            title = "Mrs.";
                        }}),
                        add(new SiteContact() {{
                            address = "2949 Ward Mount";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Arlo.Wolff@yahoo.com";
                            firstName = "Irwin";
                            id = "molestiae";
                            lastName = "Johnston";
                            phone = "853.301.9496 x839";
                            title = "Ms.";
                        }}),
                        add(new SiteContact() {{
                            address = "94004 Krajcik Run";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Dion.Effertz40@hotmail.com";
                            firstName = "Orpha";
                            id = "quasi";
                            lastName = "Champlin";
                            phone = "1-708-780-1598 x8636";
                            title = "Mrs.";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "eum";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.FLASH;
                    }};;
                    subaccountId = "reprehenderit";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 509704;
                                    iab = false;
                                    id = "voluptas";
                                    kind = "voluptatem";
                                    width = 529884;
                                }}),
                                add(new Size() {{
                                    height = 846436;
                                    iab = false;
                                    id = "fugit";
                                    kind = "repellendus";
                                    width = 881882;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "rerum";
                        }};;
                        kind = "error";
                        orientation = SiteVideoSettingsOrientationEnum.LANDSCAPE;
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "voluptas";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 780112;
                                offsetSeconds = 982213;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 81414;
                                offsetSeconds = 872528;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(606816),
                                add(273048),
                                add(371749),
                            }};
                            kind = "quod";
                        }};;
                    }};;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "numquam";
                key = "nostrum";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "tenetur";
                uploadProtocol = "omnis";
            }};            

            DfareportingSitesUpdateResponse res = sdk.sites.dfareportingSitesUpdate(req, new DfareportingSitesUpdateSecurity("alias", "nam") {{
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
