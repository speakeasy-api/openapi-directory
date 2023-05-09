# storelayoutclusters

### Available Operations

* [androidenterpriseStorelayoutclustersDelete](#androidenterprisestorelayoutclustersdelete) - Deletes a cluster.
* [androidenterpriseStorelayoutclustersGet](#androidenterprisestorelayoutclustersget) - Retrieves details of a cluster.
* [androidenterpriseStorelayoutclustersInsert](#androidenterprisestorelayoutclustersinsert) - Inserts a new cluster in a page.
* [androidenterpriseStorelayoutclustersList](#androidenterprisestorelayoutclusterslist) - Retrieves the details of all clusters on the specified page.
* [androidenterpriseStorelayoutclustersUpdate](#androidenterprisestorelayoutclustersupdate) - Updates a cluster.

## androidenterpriseStorelayoutclustersDelete

Deletes a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersDeleteRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersDeleteResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseStorelayoutclustersDeleteRequest req = new AndroidenterpriseStorelayoutclustersDeleteRequest("soluta", "hic", "illum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "maiores";
                fields = "debitis";
                key = "aliquid";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "dolorem";
                uploadProtocol = "fugit";
            }};            

            AndroidenterpriseStorelayoutclustersDeleteResponse res = sdk.storelayoutclusters.androidenterpriseStorelayoutclustersDelete(req, new AndroidenterpriseStorelayoutclustersDeleteSecurity("cumque", "fuga") {{
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

## androidenterpriseStorelayoutclustersGet

Retrieves details of a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersGetRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersGetResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseStorelayoutclustersGetRequest req = new AndroidenterpriseStorelayoutclustersGetRequest("ratione", "animi", "necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "ducimus";
                key = "natus";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "adipisci";
                uploadProtocol = "quasi";
            }};            

            AndroidenterpriseStorelayoutclustersGetResponse res = sdk.storelayoutclusters.androidenterpriseStorelayoutclustersGet(req, new AndroidenterpriseStorelayoutclustersGetSecurity("magni", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.storeCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseStorelayoutclustersInsert

Inserts a new cluster in a page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersInsertRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersInsertResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LocalizedText;
import org.openapis.openapi.models.shared.StoreCluster;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseStorelayoutclustersInsertRequest req = new AndroidenterpriseStorelayoutclustersInsertRequest("nulla", "necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                storeCluster = new StoreCluster() {{
                    id = "4771778f-f61d-4017-8763-60a15db6a660";
                    name = new org.openapis.openapi.models.shared.LocalizedText[]{{
                        add(new LocalizedText() {{
                            locale = "voluptas";
                            text = "iste";
                        }}),
                        add(new LocalizedText() {{
                            locale = "id";
                            text = "ab";
                        }}),
                    }};
                    orderInPage = "error";
                    productId = new String[]{{
                        add("voluptates"),
                        add("mollitia"),
                        add("laborum"),
                        add("libero"),
                    }};
                }};;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "vitae";
                key = "repellendus";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "ex";
                uploadProtocol = "ut";
            }};            

            AndroidenterpriseStorelayoutclustersInsertResponse res = sdk.storelayoutclusters.androidenterpriseStorelayoutclustersInsert(req, new AndroidenterpriseStorelayoutclustersInsertSecurity("ad", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.storeCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseStorelayoutclustersList

Retrieves the details of all clusters on the specified page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersListRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersListResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseStorelayoutclustersListRequest req = new AndroidenterpriseStorelayoutclustersListRequest("voluptatem", "molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "voluptatum";
                fields = "omnis";
                key = "veritatis";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "culpa";
                uploadProtocol = "voluptatem";
            }};            

            AndroidenterpriseStorelayoutclustersListResponse res = sdk.storelayoutclusters.androidenterpriseStorelayoutclustersList(req, new AndroidenterpriseStorelayoutclustersListSecurity("sapiente", "officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.storeLayoutClustersListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidenterpriseStorelayoutclustersUpdate

Updates a cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersUpdateRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersUpdateResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseStorelayoutclustersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LocalizedText;
import org.openapis.openapi.models.shared.StoreCluster;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseStorelayoutclustersUpdateRequest req = new AndroidenterpriseStorelayoutclustersUpdateRequest("architecto", "fuga", "pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                storeCluster = new StoreCluster() {{
                    id = "008e6f8c-5f35-40d8-8db5-a34181430104";
                    name = new org.openapis.openapi.models.shared.LocalizedText[]{{
                        add(new LocalizedText() {{
                            locale = "ab";
                            text = "laudantium";
                        }}),
                    }};
                    orderInPage = "quae";
                    productId = new String[]{{
                        add("fugiat"),
                    }};
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "quas";
                key = "eveniet";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "esse";
                uploadProtocol = "necessitatibus";
            }};            

            AndroidenterpriseStorelayoutclustersUpdateResponse res = sdk.storelayoutclusters.androidenterpriseStorelayoutclustersUpdate(req, new AndroidenterpriseStorelayoutclustersUpdateSecurity("sed", "veniam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.storeCluster != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
