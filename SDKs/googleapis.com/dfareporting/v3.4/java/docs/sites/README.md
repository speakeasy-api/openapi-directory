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

            DfareportingSitesGetRequest req = new DfareportingSitesGetRequest("consequatur", "iure") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "exercitationem";
                key = "rerum";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "labore";
                uploadProtocol = "iure";
            }};            

            DfareportingSitesGetResponse res = sdk.sites.dfareportingSitesGet(req, new DfareportingSitesGetSecurity("ad", "assumenda") {{
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

            DfareportingSitesInsertRequest req = new DfareportingSitesInsertRequest("eveniet") {{
                dollarXgafv = XgafvEnum.ONE;
                site = new Site() {{
                    accountId = "dolores";
                    approved = false;
                    directorySiteId = "nisi";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "error";
                        etag = "nemo";
                        id = "6c15ceff-6395-4d2c-b894-945d8149a7b7";
                        kind = "iure";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "saepe";
                    }};;
                    id = "sed";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "vitae";
                        etag = "doloribus";
                        id = "454d22cc-4a3c-4af7-ad83-b9ca74323809";
                        kind = "optio";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "exercitationem";
                    }};;
                    keyName = "sint";
                    kind = "optio";
                    name = "Janice DuBuque";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "5808 Lind Skyway";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Josianne.Hermiston52@yahoo.com";
                            firstName = "Rubie";
                            id = "deleniti";
                            lastName = "Koss";
                            phone = "896-914-1423 x8039";
                            title = "Dr.";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "sequi";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.IGNORE;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.HTML5;
                    }};;
                    subaccountId = "facilis";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 280480;
                                    iab = false;
                                    id = "labore";
                                    kind = "aperiam";
                                    width = 840261;
                                }}),
                                add(new Size() {{
                                    height = 453892;
                                    iab = false;
                                    id = "corporis";
                                    kind = "officia";
                                    width = 733764;
                                }}),
                                add(new Size() {{
                                    height = 335230;
                                    iab = false;
                                    id = "vitae";
                                    kind = "a";
                                    width = 342121;
                                }}),
                                add(new Size() {{
                                    height = 638797;
                                    iab = false;
                                    id = "molestias";
                                    kind = "asperiores";
                                    width = 505289;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "quod";
                        }};;
                        kind = "voluptates";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "praesentium";
                            iconClickTrackingUrl = "distinctio";
                            iconViewTrackingUrl = "consequuntur";
                            program = "in";
                            resourceUrl = "mollitia";
                            size = new Size() {{
                                height = 191160;
                                iab = false;
                                id = "sed";
                                kind = "dolorum";
                                width = 405705;
                            }};;
                            xPosition = "dolor";
                            yPosition = "dignissimos";
                        }};;
                        orientation = SiteVideoSettingsOrientationEnum.LANDSCAPE;
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "ducimus";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 786580;
                                offsetSeconds = 247823;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 911228;
                                offsetSeconds = 22997;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(553286),
                            }};
                            kind = "id";
                        }};;
                    }};;
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "quae";
                fields = "repellendus";
                key = "totam";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "nulla";
                uploadProtocol = "asperiores";
            }};            

            DfareportingSitesInsertResponse res = sdk.sites.dfareportingSitesInsert(req, new DfareportingSitesInsertSecurity("ullam", "cum") {{
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

            DfareportingSitesListRequest req = new DfareportingSitesListRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                acceptsInStreamVideoPlacements = false;
                acceptsInterstitialPlacements = false;
                acceptsPublisherPaidPlacements = false;
                accessToken = "alias";
                adWordsSite = false;
                alt = AltEnum.PROTO;
                approved = false;
                callback = "reiciendis";
                campaignIds = new String[]{{
                    add("officiis"),
                }};
                directorySiteIds = new String[]{{
                    add("ratione"),
                    add("animi"),
                    add("occaecati"),
                    add("inventore"),
                }};
                fields = "repudiandae";
                ids = new String[]{{
                    add("repellat"),
                    add("perspiciatis"),
                }};
                key = "ipsam";
                maxResults = 623733L;
                oauthToken = "cum";
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "veniam";
                searchString = "animi";
                sortField = DfareportingSitesListSortFieldEnum.NAME;
                sortOrder = DfareportingSitesListSortOrderEnum.DESCENDING;
                subaccountId = "natus";
                unmappedSite = false;
                uploadType = "possimus";
                uploadProtocol = "est";
            }};            

            DfareportingSitesListResponse res = sdk.sites.dfareportingSitesList(req, new DfareportingSitesListSecurity("perferendis", "iste") {{
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

            DfareportingSitesPatchRequest req = new DfareportingSitesPatchRequest("sapiente", "molestias") {{
                dollarXgafv = XgafvEnum.ONE;
                site = new Site() {{
                    accountId = "facilis";
                    approved = false;
                    directorySiteId = "ut";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "veritatis";
                        etag = "dignissimos";
                        id = "2f9e4d83-a46d-4da2-bfdd-efa0f38ddd4c";
                        kind = "a";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "corporis";
                    }};;
                    id = "porro";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "architecto";
                        etag = "totam";
                        id = "29adcb06-72c1-4816-92d1-1554d59103a8";
                        kind = "aliquid";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "harum";
                    }};;
                    keyName = "commodi";
                    kind = "temporibus";
                    name = "Beulah Graham";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "768 Crooks Village";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Lisandro75@hotmail.com";
                            firstName = "Claudia";
                            id = "natus";
                            lastName = "Mueller";
                            phone = "397.363.3543 x2805";
                            title = "Dr.";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "alias";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.IGNORE;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.BOTH;
                    }};;
                    subaccountId = "deserunt";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 276590;
                                    iab = false;
                                    id = "fuga";
                                    kind = "soluta";
                                    width = 508721;
                                }}),
                                add(new Size() {{
                                    height = 60488;
                                    iab = false;
                                    id = "iste";
                                    kind = "facilis";
                                    width = 980995;
                                }}),
                                add(new Size() {{
                                    height = 803731;
                                    iab = false;
                                    id = "reprehenderit";
                                    kind = "alias";
                                    width = 697969;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "nesciunt";
                        }};;
                        kind = "nulla";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "repudiandae";
                            iconClickTrackingUrl = "beatae";
                            iconViewTrackingUrl = "alias";
                            program = "occaecati";
                            resourceUrl = "architecto";
                            size = new Size() {{
                                height = 458572;
                                iab = false;
                                id = "accusantium";
                                kind = "asperiores";
                                width = 934637;
                            }};;
                            xPosition = "earum";
                            yPosition = "magnam";
                        }};;
                        orientation = SiteVideoSettingsOrientationEnum.ANY;
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "qui";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 97605;
                                offsetSeconds = 533834;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 453638;
                                offsetSeconds = 844271;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(958881),
                            }};
                            kind = "ducimus";
                        }};;
                    }};;
                }};;
                accessToken = "magni";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "accusamus";
                key = "soluta";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "voluptates";
                uploadProtocol = "non";
            }};            

            DfareportingSitesPatchResponse res = sdk.sites.dfareportingSitesPatch(req, new DfareportingSitesPatchSecurity("voluptates", "odio") {{
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

            DfareportingSitesUpdateRequest req = new DfareportingSitesUpdateRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                site = new Site() {{
                    accountId = "laboriosam";
                    approved = false;
                    directorySiteId = "sint";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "facere";
                        etag = "ipsam";
                        id = "7c22705a-1758-4f5e-8f39-d133b2b38ee3";
                        kind = "voluptates";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "consequuntur";
                    }};;
                    id = "et";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "ipsam";
                        etag = "accusantium";
                        id = "4f9cd652-8f06-4085-9c43-4522e13a0bf1";
                        kind = "hic";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "nam";
                    }};;
                    keyName = "qui";
                    kind = "quibusdam";
                    name = "Mr. Howard Koelpin";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "6396 Nikki Path";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Austen_Senger@hotmail.com";
                            firstName = "Adonis";
                            id = "perferendis";
                            lastName = "Boyle";
                            phone = "(782) 819-9981";
                            title = "Miss";
                        }}),
                        add(new SiteContact() {{
                            address = "3312 Schuster Via";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Wyatt.Fritsch65@hotmail.com";
                            firstName = "Joannie";
                            id = "debitis";
                            lastName = "Rutherford";
                            phone = "1-989-302-0464";
                            title = "Mr.";
                        }}),
                        add(new SiteContact() {{
                            address = "600 Robel Extension";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Nikolas_Schultz47@gmail.com";
                            firstName = "Ila";
                            id = "praesentium";
                            lastName = "Kuvalis";
                            phone = "(361) 738-8031";
                            title = "Miss";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "id";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.IGNORE;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.HTML5;
                    }};;
                    subaccountId = "magnam";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 454379;
                                    iab = false;
                                    id = "sit";
                                    kind = "quisquam";
                                    width = 834020;
                                }}),
                                add(new Size() {{
                                    height = 112142;
                                    iab = false;
                                    id = "labore";
                                    kind = "placeat";
                                    width = 364789;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "unde";
                        }};;
                        kind = "voluptate";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "accusamus";
                            iconClickTrackingUrl = "corrupti";
                            iconViewTrackingUrl = "quasi";
                            program = "adipisci";
                            resourceUrl = "odio";
                            size = new Size() {{
                                height = 498711;
                                iab = false;
                                id = "tenetur";
                                kind = "recusandae";
                                width = 216468;
                            }};;
                            xPosition = "nesciunt";
                            yPosition = "praesentium";
                        }};;
                        orientation = SiteVideoSettingsOrientationEnum.LANDSCAPE;
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "et";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 973111;
                                offsetSeconds = 811158;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 479767;
                                offsetSeconds = 819202;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(141199),
                                add(37980),
                                add(622900),
                                add(523917),
                            }};
                            kind = "ut";
                        }};;
                    }};;
                }};;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "perspiciatis";
                key = "voluptates";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "autem";
                uploadProtocol = "quam";
            }};            

            DfareportingSitesUpdateResponse res = sdk.sites.dfareportingSitesUpdate(req, new DfareportingSitesUpdateSecurity("cumque", "ex") {{
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
