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

            DfareportingAdvertiserLandingPagesGetRequest req = new DfareportingAdvertiserLandingPagesGetRequest("nam", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "cupiditate";
                key = "voluptatem";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "accusantium";
                uploadProtocol = "magnam";
            }};            

            DfareportingAdvertiserLandingPagesGetResponse res = sdk.advertiserLandingPages.dfareportingAdvertiserLandingPagesGet(req, new DfareportingAdvertiserLandingPagesGetSecurity("repellat", "omnis") {{
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

            DfareportingAdvertiserLandingPagesInsertRequest req = new DfareportingAdvertiserLandingPagesInsertRequest("explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                landingPage = new LandingPage() {{
                    advertiserId = "cum";
                    archived = false;
                    deepLinks = new org.openapis.openapi.models.shared.DeepLink[]{{
                        add(new DeepLink() {{
                            appUrl = "possimus";
                            fallbackUrl = "fugit";
                            kind = "ipsam";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.ROKU_APP_STORE;
                                id = "3819b474-b0ed-420e-9624-8fff639a910a";
                                kind = "nam";
                                publisherName = "assumenda";
                                title = "Miss";
                            }};
                            remarketingListIds = new String[]{{
                                add("tempore"),
                                add("commodi"),
                                add("fugit"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "suscipit";
                            fallbackUrl = "voluptate";
                            kind = "nisi";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.AMAZON_FIRETV_APP_STORE;
                                id = "96e1ec00-221b-4335-989a-cb3ecfda8d0c";
                                kind = "veniam";
                                publisherName = "aliquam";
                                title = "Ms.";
                            }};
                            remarketingListIds = new String[]{{
                                add("earum"),
                                add("doloremque"),
                                add("ipsum"),
                                add("alias"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "doloremque";
                            fallbackUrl = "tempora";
                            kind = "perspiciatis";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.PLAYSTATION_APP_STORE;
                                id = "8a61fa1c-f206-488f-b7c1-ffc71dca163f";
                                kind = "sed";
                                publisherName = "animi";
                                title = "Mr.";
                            }};
                            remarketingListIds = new String[]{{
                                add("voluptatum"),
                                add("perferendis"),
                                add("laborum"),
                                add("omnis"),
                            }};
                        }}),
                    }};
                    id = "nihil";
                    kind = "tenetur";
                    name = "Jacob Fisher";
                    url = "illum";
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "ipsam";
                key = "esse";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "voluptates";
                uploadProtocol = "eum";
            }};            

            DfareportingAdvertiserLandingPagesInsertResponse res = sdk.advertiserLandingPages.dfareportingAdvertiserLandingPagesInsert(req, new DfareportingAdvertiserLandingPagesInsertSecurity("quasi", "quas") {{
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

            DfareportingAdvertiserLandingPagesListRequest req = new DfareportingAdvertiserLandingPagesListRequest("odio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                advertiserIds = new String[]{{
                    add("mollitia"),
                    add("quidem"),
                }};
                alt = AltEnum.JSON;
                archived = false;
                callback = "et";
                campaignIds = new String[]{{
                    add("magni"),
                    add("natus"),
                    add("illum"),
                    add("a"),
                }};
                fields = "impedit";
                ids = new String[]{{
                    add("ut"),
                    add("facere"),
                    add("voluptas"),
                }};
                key = "doloribus";
                maxResults = 926027L;
                oauthToken = "quisquam";
                pageToken = "facere";
                prettyPrint = false;
                quotaUser = "dignissimos";
                searchString = "iste";
                sortField = DfareportingAdvertiserLandingPagesListSortFieldEnum.NAME;
                sortOrder = DfareportingAdvertiserLandingPagesListSortOrderEnum.ASCENDING;
                subaccountId = "sint";
                uploadType = "aperiam";
                uploadProtocol = "eaque";
            }};            

            DfareportingAdvertiserLandingPagesListResponse res = sdk.advertiserLandingPages.dfareportingAdvertiserLandingPagesList(req, new DfareportingAdvertiserLandingPagesListSecurity("eum", "laboriosam") {{
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

            DfareportingAdvertiserLandingPagesPatchRequest req = new DfareportingAdvertiserLandingPagesPatchRequest("laborum", "autem") {{
                dollarXgafv = XgafvEnum.TWO;
                landingPage = new LandingPage() {{
                    advertiserId = "explicabo";
                    archived = false;
                    deepLinks = new org.openapis.openapi.models.shared.DeepLink[]{{
                        add(new DeepLink() {{
                            appUrl = "doloremque";
                            fallbackUrl = "voluptatem";
                            kind = "alias";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.GOOGLE_PLAY_STORE;
                                id = "55338cec-086f-4a21-a915-2cb3119167b8";
                                kind = "necessitatibus";
                                publisherName = "ipsum";
                                title = "Miss";
                            }};
                            remarketingListIds = new String[]{{
                                add("illum"),
                                add("distinctio"),
                                add("voluptatem"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "non";
                            fallbackUrl = "quaerat";
                            kind = "consequatur";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.PLAYSTATION_APP_STORE;
                                id = "d6d364ff-d455-4906-9126-3d48e935c2c9";
                                kind = "recusandae";
                                publisherName = "quos";
                                title = "Mr.";
                            }};
                            remarketingListIds = new String[]{{
                                add("ipsum"),
                                add("consequatur"),
                                add("soluta"),
                                add("necessitatibus"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "sequi";
                            fallbackUrl = "recusandae";
                            kind = "labore";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.GOOGLE_PLAY_STORE;
                                id = "202d7216-5765-4066-8187-0d9d21f9ad03";
                                kind = "doloremque";
                                publisherName = "optio";
                                title = "Mrs.";
                            }};
                            remarketingListIds = new String[]{{
                                add("cumque"),
                                add("maxime"),
                                add("et"),
                                add("beatae"),
                            }};
                        }}),
                        add(new DeepLink() {{
                            appUrl = "id";
                            fallbackUrl = "consequatur";
                            kind = "quos";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.GOOGLE_PLAY_STORE;
                                id = "6429068b-8502-4a55-a7f7-3bc845e320a3";
                                kind = "veritatis";
                                publisherName = "error";
                                title = "Dr.";
                            }};
                            remarketingListIds = new String[]{{
                                add("rerum"),
                                add("dolorum"),
                            }};
                        }}),
                    }};
                    id = "quibusdam";
                    kind = "earum";
                    name = "Jesus Kreiger";
                    url = "animi";
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "nihil";
                fields = "facilis";
                key = "optio";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "magnam";
                uploadProtocol = "dolores";
            }};            

            DfareportingAdvertiserLandingPagesPatchResponse res = sdk.advertiserLandingPages.dfareportingAdvertiserLandingPagesPatch(req, new DfareportingAdvertiserLandingPagesPatchSecurity("aliquid", "eum") {{
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

            DfareportingAdvertiserLandingPagesUpdateRequest req = new DfareportingAdvertiserLandingPagesUpdateRequest("vel") {{
                dollarXgafv = XgafvEnum.ONE;
                landingPage = new LandingPage() {{
                    advertiserId = "quos";
                    archived = false;
                    deepLinks = new org.openapis.openapi.models.shared.DeepLink[]{{
                        add(new DeepLink() {{
                            appUrl = "suscipit";
                            fallbackUrl = "quibusdam";
                            kind = "fugiat";
                            mobileApp = new MobileApp() {{
                                directory = MobileAppDirectoryEnum.SAMSUNG_TV_APP_STORE;
                                id = "a8ef51fc-b4c5-493e-812c-daad0ec7afed";
                                kind = "nobis";
                                publisherName = "at";
                                title = "Ms.";
                            }};
                            remarketingListIds = new String[]{{
                                add("temporibus"),
                            }};
                        }}),
                    }};
                    id = "tenetur";
                    kind = "incidunt";
                    name = "Naomi Murray";
                    url = "reiciendis";
                }};;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "aut";
                key = "impedit";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "blanditiis";
                uploadProtocol = "quas";
            }};            

            DfareportingAdvertiserLandingPagesUpdateResponse res = sdk.advertiserLandingPages.dfareportingAdvertiserLandingPagesUpdate(req, new DfareportingAdvertiserLandingPagesUpdateSecurity("voluptatem", "provident") {{
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
