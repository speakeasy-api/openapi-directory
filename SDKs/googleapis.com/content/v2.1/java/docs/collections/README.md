# collections

### Available Operations

* [contentCollectionsCreate](#contentcollectionscreate) - Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
* [contentCollectionsDelete](#contentcollectionsdelete) - Deletes a collection from your Merchant Center account.
* [contentCollectionsGet](#contentcollectionsget) - Retrieves a collection from your Merchant Center account.
* [contentCollectionsList](#contentcollectionslist) - Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

## contentCollectionsCreate

Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentCollectionsCreateRequest;
import org.openapis.openapi.models.operations.ContentCollectionsCreateResponse;
import org.openapis.openapi.models.operations.ContentCollectionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Collection;
import org.openapis.openapi.models.shared.CollectionFeaturedProduct;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentCollectionsCreateRequest req = new ContentCollectionsCreateRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                collection = new Collection() {{
                    customLabel0 = "atque";
                    customLabel1 = "fugit";
                    customLabel2 = "ut";
                    customLabel3 = "fugiat";
                    customLabel4 = "voluptatem";
                    featuredProduct = new org.openapis.openapi.models.shared.CollectionFeaturedProduct[]{{
                        add(new CollectionFeaturedProduct() {{
                            offerId = "expedita";
                            x = 2996.43;
                            y = 78.84;
                        }}),
                        add(new CollectionFeaturedProduct() {{
                            offerId = "esse";
                            x = 3726.79;
                            y = 245.27;
                        }}),
                        add(new CollectionFeaturedProduct() {{
                            offerId = "voluptatum";
                            x = 5580.65;
                            y = 9221.12;
                        }}),
                    }};
                    headline = new String[]{{
                        add("et"),
                        add("blanditiis"),
                    }};
                    id = "62065e90-4f3b-4119-8b8a-bf603a79f9df";
                    imageLink = new String[]{{
                        add("perferendis"),
                        add("est"),
                        add("quidem"),
                        add("reprehenderit"),
                    }};
                    language = "facere";
                    link = "fuga";
                    mobileLink = "praesentium";
                    productCountry = "mollitia";
                }};;
                accessToken = "veniam";
                alt = AltEnum.JSON;
                callback = "quisquam";
                fields = "repudiandae";
                key = "quasi";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "asperiores";
                uploadProtocol = "totam";
            }};            

            ContentCollectionsCreateResponse res = sdk.collections.contentCollectionsCreate(req, new ContentCollectionsCreateSecurity("suscipit", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentCollectionsDelete

Deletes a collection from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentCollectionsDeleteRequest;
import org.openapis.openapi.models.operations.ContentCollectionsDeleteResponse;
import org.openapis.openapi.models.operations.ContentCollectionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentCollectionsDeleteRequest req = new ContentCollectionsDeleteRequest("maxime", "et") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "atque";
                key = "error";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "accusamus";
                uploadProtocol = "natus";
            }};            

            ContentCollectionsDeleteResponse res = sdk.collections.contentCollectionsDelete(req, new ContentCollectionsDeleteSecurity("minima", "aspernatur") {{
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

## contentCollectionsGet

Retrieves a collection from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentCollectionsGetRequest;
import org.openapis.openapi.models.operations.ContentCollectionsGetResponse;
import org.openapis.openapi.models.operations.ContentCollectionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentCollectionsGetRequest req = new ContentCollectionsGetRequest("ex", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "at";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "suscipit";
                key = "repudiandae";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "sunt";
                uploadProtocol = "recusandae";
            }};            

            ContentCollectionsGetResponse res = sdk.collections.contentCollectionsGet(req, new ContentCollectionsGetSecurity("dolorum", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.collection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentCollectionsList

Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentCollectionsListRequest;
import org.openapis.openapi.models.operations.ContentCollectionsListResponse;
import org.openapis.openapi.models.operations.ContentCollectionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentCollectionsListRequest req = new ContentCollectionsListRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "accusantium";
                key = "beatae";
                oauthToken = "dolores";
                pageSize = 316488L;
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "a";
                uploadProtocol = "molestias";
            }};            

            ContentCollectionsListResponse res = sdk.collections.contentCollectionsList(req, new ContentCollectionsListSecurity("magnam", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCollectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
