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

            DfareportingSitesGetRequest req = new DfareportingSitesGetRequest("placeat", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "delectus";
                key = "cumque";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "iste";
                uploadProtocol = "voluptatibus";
            }};            

            DfareportingSitesGetResponse res = sdk.sites.dfareportingSitesGet(req, new DfareportingSitesGetSecurity("sed", "quas") {{
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

            DfareportingSitesInsertRequest req = new DfareportingSitesInsertRequest("incidunt") {{
                dollarXgafv = XgafvEnum.TWO;
                site = new Site() {{
                    accountId = "quibusdam";
                    approved = false;
                    directorySiteId = "laboriosam";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "a";
                        etag = "in";
                        id = "4454883a-a020-430c-8297-8d778042e4d6";
                        kind = "blanditiis";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "iste";
                    }};;
                    id = "repellat";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "omnis";
                        etag = "vero";
                        id = "3425ef63-ebb4-4b82-ae2c-80de08cbdd83";
                        kind = "esse";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "maxime";
                    }};;
                    keyName = "maxime";
                    kind = "omnis";
                    name = "Penny O'Keefe";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "560 Muller Fort";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Elian76@yahoo.com";
                            firstName = "Charley";
                            id = "id";
                            lastName = "Kutch";
                            phone = "1-355-912-9050";
                            title = "Ms.";
                        }}),
                        add(new SiteContact() {{
                            address = "4049 Torp Center";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Lydia37@yahoo.com";
                            firstName = "Kelly";
                            id = "nulla";
                            lastName = "Blick";
                            phone = "280.817.5150 x737";
                            title = "Ms.";
                        }}),
                        add(new SiteContact() {{
                            address = "64458 Foster Trafficway";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Alfred.Mayert51@yahoo.com";
                            firstName = "Oral";
                            id = "harum";
                            lastName = "Hessel";
                            phone = "725.782.5488 x383";
                            title = "Ms.";
                        }}),
                        add(new SiteContact() {{
                            address = "360 Skyla Garden";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Green.Feest@gmail.com";
                            firstName = "Antwon";
                            id = "maiores";
                            lastName = "Schulist";
                            phone = "(645) 273-8303 x115";
                            title = "Miss";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "laboriosam";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.PLACEHOLDER_WITH_LIST_OF_KEYWORDS;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.DEFAULT_;
                    }};;
                    subaccountId = "quidem";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 235939;
                                    iab = false;
                                    id = "a";
                                    kind = "quidem";
                                    width = 157144;
                                }}),
                                add(new Size() {{
                                    height = 448505;
                                    iab = false;
                                    id = "fugiat";
                                    kind = "sapiente";
                                    width = 236431;
                                }}),
                                add(new Size() {{
                                    height = 389809;
                                    iab = false;
                                    id = "delectus";
                                    kind = "facere";
                                    width = 959055;
                                }}),
                                add(new Size() {{
                                    height = 939173;
                                    iab = false;
                                    id = "excepturi";
                                    kind = "accusantium";
                                    width = 705965;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "unde";
                        }};;
                        kind = "quidem";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "eius";
                            iconClickTrackingUrl = "id";
                            iconViewTrackingUrl = "consectetur";
                            program = "deserunt";
                            resourceUrl = "laudantium";
                            size = new Size() {{
                                height = 252756;
                                iab = false;
                                id = "hic";
                                kind = "excepturi";
                                width = 61924;
                            }};;
                            xPosition = "soluta";
                            yPosition = "sapiente";
                        }};;
                        orientation = SiteVideoSettingsOrientationEnum.PORTRAIT;
                        publisherSpecificationId = "maxime";
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "tempora";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 900208;
                                offsetSeconds = 754510;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 50356;
                                offsetSeconds = 200084;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(989939),
                                add(122227),
                            }};
                            kind = "autem";
                        }};;
                    }};;
                }};;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "dolor";
                key = "ab";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "nobis";
                uploadProtocol = "deleniti";
            }};            

            DfareportingSitesInsertResponse res = sdk.sites.dfareportingSitesInsert(req, new DfareportingSitesInsertSecurity("nobis", "accusamus") {{
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

            DfareportingSitesListRequest req = new DfareportingSitesListRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                acceptsInStreamVideoPlacements = false;
                acceptsInterstitialPlacements = false;
                acceptsPublisherPaidPlacements = false;
                accessToken = "enim";
                adWordsSite = false;
                alt = AltEnum.MEDIA;
                approved = false;
                callback = "iure";
                campaignIds = new String[]{{
                    add("explicabo"),
                    add("inventore"),
                    add("quos"),
                }};
                directorySiteIds = new String[]{{
                    add("commodi"),
                    add("delectus"),
                    add("voluptatem"),
                    add("deleniti"),
                }};
                fields = "dolorem";
                ids = new String[]{{
                    add("sunt"),
                    add("dignissimos"),
                    add("veritatis"),
                    add("quasi"),
                }};
                key = "accusantium";
                maxResults = 401921L;
                oauthToken = "atque";
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "possimus";
                searchString = "tempore";
                sortField = DfareportingSitesListSortFieldEnum.NAME;
                sortOrder = DfareportingSitesListSortOrderEnum.ASCENDING;
                subaccountId = "doloremque";
                unmappedSite = false;
                uploadType = "reprehenderit";
                uploadProtocol = "ratione";
            }};            

            DfareportingSitesListResponse res = sdk.sites.dfareportingSitesList(req, new DfareportingSitesListSecurity("quidem", "vitae") {{
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

            DfareportingSitesPatchRequest req = new DfareportingSitesPatchRequest("culpa", "numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                site = new Site() {{
                    accountId = "labore";
                    approved = false;
                    directorySiteId = "quis";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "qui";
                        etag = "aperiam";
                        id = "b2630668-dd4c-4670-812e-e07890bfb2d1";
                        kind = "dignissimos";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "eum";
                    }};;
                    id = "incidunt";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "eligendi";
                        etag = "laboriosam";
                        id = "5c08d7ab-7cf3-4aa2-b5e8-7c1d79b14515";
                        kind = "earum";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "sed";
                    }};;
                    keyName = "sed";
                    kind = "veritatis";
                    name = "Margie Beahan";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "39247 Bergstrom Estate";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Savanna_Robel81@yahoo.com";
                            firstName = "Malvina";
                            id = "harum";
                            lastName = "Zulauf";
                            phone = "(746) 386-7219";
                            title = "Miss";
                        }}),
                        add(new SiteContact() {{
                            address = "121 Efrain Springs";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Krystina_Von@yahoo.com";
                            firstName = "Presley";
                            id = "similique";
                            lastName = "Botsford";
                            phone = "498.930.3150 x93930";
                            title = "Ms.";
                        }}),
                        add(new SiteContact() {{
                            address = "996 Hope Bridge";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Bernardo.Russel63@yahoo.com";
                            firstName = "Deja";
                            id = "ipsam";
                            lastName = "Carter";
                            phone = "(298) 459-8216 x6555";
                            title = "Dr.";
                        }}),
                        add(new SiteContact() {{
                            address = "4024 Koss Lights";
                            contactType = SiteContactContactTypeEnum.SALES_PERSON;
                            email = "Margaretta.Welch@hotmail.com";
                            firstName = "Rafael";
                            id = "excepturi";
                            lastName = "Stoltenberg";
                            phone = "(452) 973-9937 x172";
                            title = "Dr.";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "minima";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.IGNORE;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.DEFAULT_;
                    }};;
                    subaccountId = "neque";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 989691;
                                    iab = false;
                                    id = "magni";
                                    kind = "ut";
                                    width = 725661;
                                }}),
                                add(new Size() {{
                                    height = 283221;
                                    iab = false;
                                    id = "sed";
                                    kind = "voluptatum";
                                    width = 743146;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "ea";
                        }};;
                        kind = "corporis";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "veritatis";
                            iconClickTrackingUrl = "nesciunt";
                            iconViewTrackingUrl = "esse";
                            program = "ipsam";
                            resourceUrl = "quis";
                            size = new Size() {{
                                height = 861215;
                                iab = false;
                                id = "voluptates";
                                kind = "autem";
                                width = 894150;
                            }};;
                            xPosition = "doloremque";
                            yPosition = "omnis";
                        }};;
                        orientation = SiteVideoSettingsOrientationEnum.LANDSCAPE;
                        publisherSpecificationId = "expedita";
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "illum";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 588086;
                                offsetSeconds = 776196;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 231020;
                                offsetSeconds = 354107;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(164727),
                                add(271631),
                                add(952496),
                                add(365629),
                            }};
                            kind = "iste";
                        }};;
                    }};;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "laboriosam";
                key = "aperiam";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "quasi";
                uploadProtocol = "tempore";
            }};            

            DfareportingSitesPatchResponse res = sdk.sites.dfareportingSitesPatch(req, new DfareportingSitesPatchSecurity("perferendis", "aperiam") {{
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

            DfareportingSitesUpdateRequest req = new DfareportingSitesUpdateRequest("nesciunt") {{
                dollarXgafv = XgafvEnum.TWO;
                site = new Site() {{
                    accountId = "quasi";
                    approved = false;
                    directorySiteId = "asperiores";
                    directorySiteIdDimensionValue = new DimensionValue() {{
                        dimensionName = "dolorem";
                        etag = "autem";
                        id = "a39c6bff-e38f-4c91-879a-4e50e2aedf46";
                        kind = "illo";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "aspernatur";
                    }};;
                    id = "earum";
                    idDimensionValue = new DimensionValue() {{
                        dimensionName = "eius";
                        etag = "placeat";
                        id = "783ea7ca-b0bb-498b-befa-ef78eaa7e84c";
                        kind = "fuga";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "quam";
                    }};;
                    keyName = "aperiam";
                    kind = "fugit";
                    name = "Sylvester Jast";
                    siteContacts = new org.openapis.openapi.models.shared.SiteContact[]{{
                        add(new SiteContact() {{
                            address = "58119 Trantow Turnpike";
                            contactType = SiteContactContactTypeEnum.TRAFFICKER;
                            email = "Lennie60@hotmail.com";
                            firstName = "Damon";
                            id = "ut";
                            lastName = "Hansen";
                            phone = "(377) 805-6881 x79427";
                            title = "Miss";
                        }}),
                    }};
                    siteSettings = new SiteSettings() {{
                        activeViewOptOut = false;
                        adBlockingOptOut = false;
                        disableNewCookie = false;
                        tagSetting = new TagSetting() {{
                            additionalKeyValues = "itaque";
                            includeClickThroughUrls = false;
                            includeClickTracking = false;
                            keywordOption = TagSettingKeywordOptionEnum.PLACEHOLDER_WITH_LIST_OF_KEYWORDS;
                        }};;
                        videoActiveViewOptOutTemplate = false;
                        vpaidAdapterChoiceTemplate = SiteSettingsVpaidAdapterChoiceTemplateEnum.DEFAULT_;
                    }};;
                    subaccountId = "itaque";
                    videoSettings = new SiteVideoSettings() {{
                        companionSettings = new SiteCompanionSetting() {{
                            companionsDisabled = false;
                            enabledSizes = new org.openapis.openapi.models.shared.Size[]{{
                                add(new Size() {{
                                    height = 951610;
                                    iab = false;
                                    id = "praesentium";
                                    kind = "earum";
                                    width = 685715;
                                }}),
                                add(new Size() {{
                                    height = 548736;
                                    iab = false;
                                    id = "repudiandae";
                                    kind = "eos";
                                    width = 380033;
                                }}),
                            }};
                            imageOnly = false;
                            kind = "illo";
                        }};;
                        kind = "consequuntur";
                        obaEnabled = false;
                        obaSettings = new ObaIcon() {{
                            iconClickThroughUrl = "error";
                            iconClickTrackingUrl = "mollitia";
                            iconViewTrackingUrl = "deleniti";
                            program = "cupiditate";
                            resourceUrl = "nihil";
                            size = new Size() {{
                                height = 483444;
                                iab = false;
                                id = "architecto";
                                kind = "deleniti";
                                width = 874587;
                            }};;
                            xPosition = "atque";
                            yPosition = "libero";
                        }};;
                        orientation = SiteVideoSettingsOrientationEnum.PORTRAIT;
                        publisherSpecificationId = "vero";
                        skippableSettings = new SiteSkippableSetting() {{
                            kind = "aliquam";
                            progressOffset = new VideoOffset() {{
                                offsetPercentage = 390177;
                                offsetSeconds = 639097;
                            }};;
                            skipOffset = new VideoOffset() {{
                                offsetPercentage = 616341;
                                offsetSeconds = 522541;
                            }};;
                            skippable = false;
                        }};;
                        transcodeSettings = new SiteTranscodeSetting() {{
                            enabledVideoFormats = new Integer[]{{
                                add(157522),
                                add(983199),
                            }};
                            kind = "esse";
                        }};;
                    }};;
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "quis";
                key = "provident";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "quia";
                uploadProtocol = "ea";
            }};            

            DfareportingSitesUpdateResponse res = sdk.sites.dfareportingSitesUpdate(req, new DfareportingSitesUpdateSecurity("fuga", "ullam") {{
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
