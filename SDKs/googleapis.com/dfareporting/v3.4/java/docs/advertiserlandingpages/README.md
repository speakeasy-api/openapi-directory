# advertiserLandingPages

### Available Operations

* [dfareportingAdvertiserLandingPagesGet](#dfareportingadvertiserlandingpagesget) - Gets one landing page by ID.
* [dfareportingAdvertiserLandingPagesInsert](#dfareportingadvertiserlandingpagesinsert) - Inserts a new landing page.
* [dfareportingAdvertiserLandingPagesList](#dfareportingadvertiserlandingpageslist) - Retrieves a list of landing pages.
* [dfareportingAdvertiserLandingPagesPatch](#dfareportingadvertiserlandingpagespatch) - Updates an existing advertiser landing page. This method supports patch semantics.
* [dfareportingAdvertiserLandingPagesUpdate](#dfareportingadvertiserlandingpagesupdate) - Updates an existing landing page.

## dfareportingAdvertiserLandingPagesGet

Gets one landing page by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesGetRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesGetResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserLandingPagesGetRequest req = new DfareportingAdvertiserLandingPagesGetRequest("tempora", "perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "doloremque";
                key = "cum";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "porro";
                uploadProtocol = "impedit";
            }};            

            DfareportingAdvertiserLandingPagesGetResponse res = sdk.advertiserLandingPages.dfareportingAdvertiserLandingPagesGet(req, new DfareportingAdvertiserLandingPagesGetSecurity("nisi", "cumque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.landingPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertiserLandingPagesInsert

Inserts a new landing page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeepLink;
import org.openapis.openapi.models.shared.LandingPage;
import org.openapis.openapi.models.shared.MobileApp;
import org.openapis.openapi.models.shared.MobileAppDirectoryEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserLandingPagesInsertRequest req = new DfareportingAdvertiserLandingPagesInsertRequest("soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                landingPage = new LandingPage() {{
                    advertiserId = "laboriosam";
                    archived = false;
                    deepLinks = new org.openapis.openapi.models.shared.DeepLink[]{{
                        add(new DeepLink() {{
                            appUrl = "enim";
                            fallbackUrl = "maiores";
                            kind = "consectetur";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.ANDROID_TV_APP_STORE;
                                id = "c909304f-926b-4ad2-9538-19b474b0ed20";
                                kind = "repudiandae";
                                publisherName = "corporis";
                                title = "Ms.";
                            }};
                            remarketingListIds = new String[]{{
                                add("aliquam"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "blanditiis";
                            fallbackUrl = "hic";
                            kind = "maiores";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.GENERIC_CTV_APP_STORE;
                                id = "639a910a-bdca-4b62-a766-96e1ec00221b";
                                kind = "sequi";
                                publisherName = "amet";
                                title = "Mrs.";
                            }};
                            remarketingListIds = new String[]{{
                                add("praesentium"),
                                add("unde"),
                                add("similique"),
                                add("eligendi"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "tempore";
                            fallbackUrl = "amet";
                            kind = "debitis";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.SAMSUNG_TV_APP_STORE;
                                id = "fda8d0c5-49ef-4030-8497-8a61fa1cf206";
                                kind = "atque";
                                publisherName = "totam";
                                title = "Dr.";
                            }};
                            remarketingListIds = new String[]{{
                                add("quam"),
                                add("quod"),
                            }};
                        }}),
                    }};
                    id = "vitae";
                    kind = "sapiente";
                    name = "Dr. Jermaine Klein";
                    url = "fuga";
                }};;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "maiores";
                key = "sed";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "eligendi";
                uploadProtocol = "voluptatum";
            }};            

            DfareportingAdvertiserLandingPagesInsertResponse res = sdk.advertiserLandingPages.dfareportingAdvertiserLandingPagesInsert(req, new DfareportingAdvertiserLandingPagesInsertSecurity("perferendis", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.landingPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertiserLandingPagesList

Retrieves a list of landing pages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesListRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesListResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesListSecurity;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserLandingPagesListRequest req = new DfareportingAdvertiserLandingPagesListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tenetur";
                advertiserIds = new String[]{{
                    add("velit"),
                    add("adipisci"),
                    add("non"),
                    add("optio"),
                }};
                alt = AltEnum.PROTO;
                archived = false;
                callback = "at";
                campaignIds = new String[]{{
                    add("molestias"),
                    add("ipsam"),
                    add("esse"),
                    add("laborum"),
                }};
                fields = "perspiciatis";
                ids = new String[]{{
                    add("eum"),
                    add("quasi"),
                    add("quas"),
                    add("odio"),
                }};
                key = "commodi";
                maxResults = 780789L;
                oauthToken = "aliquid";
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "quidem";
                searchString = "explicabo";
                sortField = DfareportingAdvertiserLandingPagesListSortFieldEnum.ID;
                sortOrder = DfareportingAdvertiserLandingPagesListSortOrderEnum.DESCENDING;
                subaccountId = "magni";
                uploadType = "natus";
                uploadProtocol = "illum";
            }};            

            DfareportingAdvertiserLandingPagesListResponse res = sdk.advertiserLandingPages.dfareportingAdvertiserLandingPagesList(req, new DfareportingAdvertiserLandingPagesListSecurity("a", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiserLandingPagesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertiserLandingPagesPatch

Updates an existing advertiser landing page. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesPatchRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesPatchResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeepLink;
import org.openapis.openapi.models.shared.LandingPage;
import org.openapis.openapi.models.shared.MobileApp;
import org.openapis.openapi.models.shared.MobileAppDirectoryEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserLandingPagesPatchRequest req = new DfareportingAdvertiserLandingPagesPatchRequest("unde", "ut") {{
                dollarXgafv = XgafvEnum.TWO;
                landingPage = new LandingPage() {{
                    advertiserId = "voluptas";
                    archived = false;
                    deepLinks = new org.openapis.openapi.models.shared.DeepLink[]{{
                        add(new DeepLink() {{
                            appUrl = "recusandae";
                            fallbackUrl = "quisquam";
                            kind = "facere";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.PLAYSTATION_APP_STORE;
                                id = "99390066-a6d2-4d00-8355-338cec086fa2";
                                kind = "veritatis";
                                publisherName = "necessitatibus";
                                title = "Miss";
                            }};
                            remarketingListIds = new String[]{{
                                add("ipsam"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "consequuntur";
                            fallbackUrl = "cumque";
                            kind = "quidem";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.GOOGLE_PLAY_STORE;
                                id = "119167b8-e3c8-4db0-b408-d6d364ffd455";
                                kind = "perspiciatis";
                                publisherName = "alias";
                                title = "Ms.";
                            }};
                            remarketingListIds = new String[]{{
                                add("dicta"),
                                add("quia"),
                                add("commodi"),
                                add("neque"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "quibusdam";
                            fallbackUrl = "numquam";
                            kind = "rem";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.ANDROID_TV_APP_STORE;
                                id = "935c2c9e-81f3-40be-be43-202d72165765";
                                kind = "sit";
                                publisherName = "vel";
                                title = "Mrs.";
                            }};
                            remarketingListIds = new String[]{{
                                add("quasi"),
                                add("rem"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "dignissimos";
                            fallbackUrl = "doloremque";
                            kind = "assumenda";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.APPLE_TV_APP_STORE;
                                id = "d21f9ad0-30c4-4ecc-91a0-836429068b85";
                                kind = "aut";
                                publisherName = "quia";
                                title = "Miss";
                            }};
                            remarketingListIds = new String[]{{
                                add("corporis"),
                                add("accusamus"),
                            }};
                        }}),
                    }};
                    id = "iusto";
                    kind = "sapiente";
                    name = "Rita Predovic";
                    url = "tempora";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "magni";
                key = "voluptatem";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "veritatis";
                uploadProtocol = "error";
            }};            

            DfareportingAdvertiserLandingPagesPatchResponse res = sdk.advertiserLandingPages.dfareportingAdvertiserLandingPagesPatch(req, new DfareportingAdvertiserLandingPagesPatchSecurity("voluptatibus", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.landingPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingAdvertiserLandingPagesUpdate

Updates an existing landing page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserLandingPagesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeepLink;
import org.openapis.openapi.models.shared.LandingPage;
import org.openapis.openapi.models.shared.MobileApp;
import org.openapis.openapi.models.shared.MobileAppDirectoryEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserLandingPagesUpdateRequest req = new DfareportingAdvertiserLandingPagesUpdateRequest("rerum") {{
                dollarXgafv = XgafvEnum.TWO;
                landingPage = new LandingPage() {{
                    advertiserId = "quibusdam";
                    archived = false;
                    deepLinks = new org.openapis.openapi.models.shared.DeepLink[]{{
                        add(new DeepLink() {{
                            appUrl = "excepturi";
                            fallbackUrl = "numquam";
                            kind = "molestiae";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.SAMSUNG_TV_APP_STORE;
                                id = "9a867bc4-2426-4665-816d-dca8ef51fcb4";
                                kind = "cumque";
                                publisherName = "ipsam";
                                title = "Ms.";
                            }};
                            remarketingListIds = new String[]{{
                                add("accusamus"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "quisquam";
                            fallbackUrl = "quasi";
                            kind = "fugit";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.SAMSUNG_TV_APP_STORE;
                                id = "daad0ec7-afed-4bd8-8df4-48a47f9390c5";
                                kind = "quos";
                                publisherName = "blanditiis";
                                title = "Ms.";
                            }};
                            remarketingListIds = new String[]{{
                                add("provident"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "quas";
                            fallbackUrl = "ipsum";
                            kind = "vero";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.XBOX_APP_STORE;
                                id = "bf9ef3ff-dd9f-47f0-b9af-4d35724cdb0f";
                                kind = "labore";
                                publisherName = "vero";
                                title = "Mr.";
                            }};
                            remarketingListIds = new String[]{{
                                add("quasi"),
                                add("architecto"),
                                add("praesentium"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "iusto";
                            fallbackUrl = "fugiat";
                            kind = "enim";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.AMAZON_FIRETV_APP_STORE;
                                id = "844eded8-5a90-465e-a28b-dfc2032b6c87";
                                kind = "omnis";
                                publisherName = "omnis";
                                title = "Mr.";
                            }};
                            remarketingListIds = new String[]{{
                                add("quidem"),
                            }};
                        }}),
                    }};
                    id = "molestiae";
                    kind = "debitis";
                    name = "Rosa Hand";
                    url = "asperiores";
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.MEDIA;
                callback = "itaque";
                fields = "et";
                key = "eos";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "praesentium";
                uploadProtocol = "natus";
            }};            

            DfareportingAdvertiserLandingPagesUpdateResponse res = sdk.advertiserLandingPages.dfareportingAdvertiserLandingPagesUpdate(req, new DfareportingAdvertiserLandingPagesUpdateSecurity("vitae", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.landingPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
