# storelayoutpages

### Available Operations

* [androidenterpriseStorelayoutpagesDelete](#androidenterprisestorelayoutpagesdelete) - Deletes a store page.
* [androidenterpriseStorelayoutpagesGet](#androidenterprisestorelayoutpagesget) - Retrieves details of a store page.
* [androidenterpriseStorelayoutpagesInsert](#androidenterprisestorelayoutpagesinsert) - Inserts a new store page.
* [androidenterpriseStorelayoutpagesList](#androidenterprisestorelayoutpageslist) - Retrieves the details of all pages in the store.
* [androidenterpriseStorelayoutpagesUpdate](#androidenterprisestorelayoutpagesupdate) - Updates the content of a store page.

## androidenterpriseStorelayoutpagesDelete

Deletes a store page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesDeleteRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesDeleteResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseStorelayoutpagesDeleteRequest req = new AndroidenterpriseStorelayoutpagesDeleteRequest("nesciunt", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "exercitationem";
                key = "ab";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "nobis";
                uploadProtocol = "laboriosam";
            }};            

            AndroidenterpriseStorelayoutpagesDeleteResponse res = sdk.storelayoutpages.androidenterpriseStorelayoutpagesDelete(req, new AndroidenterpriseStorelayoutpagesDeleteSecurity("recusandae", "consequuntur") {{
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

## androidenterpriseStorelayoutpagesGet

Retrieves details of a store page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseStorelayoutpagesGetRequest req = new AndroidenterpriseStorelayoutpagesGetRequest("voluptatem", "exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "at";
                fields = "vero";
                key = "est";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "doloribus";
                uploadProtocol = "repudiandae";
            }};            

            AndroidenterpriseStorelayoutpagesGetResponse res = sdk.storelayoutpages.androidenterpriseStorelayoutpagesGet(req, new AndroidenterpriseStorelayoutpagesGetSecurity("optio", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.storePage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseStorelayoutpagesInsert

Inserts a new store page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesInsertRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesInsertResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LocalizedText;
import org.openapis.openapi.models.shared.StorePage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseStorelayoutpagesInsertRequest req = new AndroidenterpriseStorelayoutpagesInsertRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                storePage = new StorePage() {{
                    id = "8a645842-73a8-4418-9162-309fb0929921";
                    link = new String[]{{
                        add("accusamus"),
                        add("voluptatibus"),
                        add("distinctio"),
                    }};
                    name = new org.openapis.openapi.models.shared.LocalizedText[]{{
                        add(new LocalizedText() {{
                            locale = "delectus";
                            text = "minima";
                        }}),
                        add(new LocalizedText() {{
                            locale = "praesentium";
                            text = "maxime";
                        }}),
                        add(new LocalizedText() {{
                            locale = "magnam";
                            text = "temporibus";
                        }}),
                    }};
                }};;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "itaque";
                fields = "commodi";
                key = "totam";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "nam";
                uploadProtocol = "vero";
            }};            

            AndroidenterpriseStorelayoutpagesInsertResponse res = sdk.storelayoutpages.androidenterpriseStorelayoutpagesInsert(req, new AndroidenterpriseStorelayoutpagesInsertSecurity("voluptatem", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.storePage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseStorelayoutpagesList

Retrieves the details of all pages in the store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseStorelayoutpagesListRequest req = new AndroidenterpriseStorelayoutpagesListRequest("vel") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "enim";
                key = "sint";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "esse";
                uploadProtocol = "nemo";
            }};            

            AndroidenterpriseStorelayoutpagesListResponse res = sdk.storelayoutpages.androidenterpriseStorelayoutpagesList(req, new AndroidenterpriseStorelayoutpagesListSecurity("reprehenderit", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.storeLayoutPagesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseStorelayoutpagesUpdate

Updates the content of a store page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesUpdateRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesUpdateResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutpagesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LocalizedText;
import org.openapis.openapi.models.shared.StorePage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseStorelayoutpagesUpdateRequest req = new AndroidenterpriseStorelayoutpagesUpdateRequest("quis", "sint") {{
                dollarXgafv = XgafvEnum.TWO;
                storePage = new StorePage() {{
                    id = "cfef66ef-1caa-4338-bc2b-eb477373c8d7";
                    link = new String[]{{
                        add("voluptatibus"),
                    }};
                    name = new org.openapis.openapi.models.shared.LocalizedText[]{{
                        add(new LocalizedText() {{
                            locale = "magnam";
                            text = "quibusdam";
                        }}),
                        add(new LocalizedText() {{
                            locale = "inventore";
                            text = "facere";
                        }}),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "quia";
                key = "porro";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "illo";
                uploadProtocol = "accusantium";
            }};            

            AndroidenterpriseStorelayoutpagesUpdateResponse res = sdk.storelayoutpages.androidenterpriseStorelayoutpagesUpdate(req, new AndroidenterpriseStorelayoutpagesUpdateSecurity("vel", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.storePage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
