# pos

### Available Operations

* [contentPosCustombatch](#contentposcustombatch) - Batches multiple POS-related calls in a single request.
* [contentPosDelete](#contentposdelete) - Deletes a store for the given merchant.
* [contentPosGet](#contentposget) - Retrieves information about the given store.
* [contentPosInsert](#contentposinsert) - Creates a store for the given merchant.
* [contentPosInventory](#contentposinventory) - Submit inventory for the given merchant.
* [contentPosList](#contentposlist) - Lists the stores of the target merchant.
* [contentPosSale](#contentpossale) - Submit a sale event for the given merchant.

## contentPosCustombatch

Batches multiple POS-related calls in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentPosCustombatchRequest;
import org.openapis.openapi.models.operations.ContentPosCustombatchResponse;
import org.openapis.openapi.models.operations.ContentPosCustombatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PosCustomBatchRequest;
import org.openapis.openapi.models.shared.PosCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.PosInventory;
import org.openapis.openapi.models.shared.PosSale;
import org.openapis.openapi.models.shared.PosStore;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentPosCustombatchRequest req = new ContentPosCustombatchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                posCustomBatchRequest = new PosCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.PosCustomBatchRequestEntry[]{{
                        add(new PosCustomBatchRequestEntry() {{
                            batchId = 577284L;
                            inventory = new PosInventory() {{
                                contentLanguage = "quibusdam";
                                gtin = "magni";
                                itemId = "consequuntur";
                                kind = "consequuntur";
                                price = new Price() {{
                                    currency = "eius";
                                    value = "commodi";
                                }};
                                quantity = "ipsam";
                                storeCode = "vel";
                                targetCountry = "cupiditate";
                                timestamp = "modi";
                            }};
                            merchantId = "nisi";
                            method = "explicabo";
                            sale = new PosSale() {{
                                contentLanguage = "modi";
                                gtin = "doloremque";
                                itemId = "odio";
                                kind = "sit";
                                price = new Price() {{
                                    currency = "voluptatum";
                                    value = "tempora";
                                }};
                                quantity = "delectus";
                                saleId = "quam";
                                storeCode = "dolorum";
                                targetCountry = "libero";
                                timestamp = "ratione";
                            }};
                            store = new PosStore() {{
                                gcidCategory = new String[]{{
                                    add("optio"),
                                    add("saepe"),
                                }};
                                kind = "maiores";
                                phoneNumber = "accusantium";
                                placeId = "sed";
                                storeAddress = "eos";
                                storeCode = "consequuntur";
                                storeName = "quis";
                                websiteUrl = "vitae";
                            }};
                            storeCode = "occaecati";
                            targetMerchantId = "labore";
                        }}),
                    }};
                }};;
                accessToken = "fugiat";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "veniam";
                key = "modi";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "similique";
                uploadProtocol = "possimus";
            }};            

            ContentPosCustombatchResponse res = sdk.pos.contentPosCustombatch(req, new ContentPosCustombatchSecurity("quo", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.posCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentPosDelete

Deletes a store for the given merchant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentPosDeleteRequest;
import org.openapis.openapi.models.operations.ContentPosDeleteResponse;
import org.openapis.openapi.models.operations.ContentPosDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentPosDeleteRequest req = new ContentPosDeleteRequest("ex", "sint", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "fugit";
                key = "autem";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "maxime";
                uploadProtocol = "facere";
            }};            

            ContentPosDeleteResponse res = sdk.pos.contentPosDelete(req, new ContentPosDeleteSecurity("impedit", "cupiditate") {{
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

## contentPosGet

Retrieves information about the given store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentPosGetRequest;
import org.openapis.openapi.models.operations.ContentPosGetResponse;
import org.openapis.openapi.models.operations.ContentPosGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentPosGetRequest req = new ContentPosGetRequest("deleniti", "quasi", "maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "unde";
                fields = "corrupti";
                key = "quae";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "libero";
                uploadProtocol = "nam";
            }};            

            ContentPosGetResponse res = sdk.pos.contentPosGet(req, new ContentPosGetSecurity("amet", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.posStore != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentPosInsert

Creates a store for the given merchant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentPosInsertRequest;
import org.openapis.openapi.models.operations.ContentPosInsertResponse;
import org.openapis.openapi.models.operations.ContentPosInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PosStore;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentPosInsertRequest req = new ContentPosInsertRequest("minus", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                posStore = new PosStore() {{
                    gcidCategory = new String[]{{
                        add("consectetur"),
                        add("labore"),
                        add("laudantium"),
                    }};
                    kind = "cumque";
                    phoneNumber = "adipisci";
                    placeId = "veritatis";
                    storeAddress = "nam";
                    storeCode = "voluptatibus";
                    storeName = "magnam";
                    websiteUrl = "aperiam";
                }};;
                accessToken = "ducimus";
                alt = AltEnum.PROTO;
                callback = "necessitatibus";
                fields = "numquam";
                key = "doloribus";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "alias";
                uploadProtocol = "impedit";
            }};            

            ContentPosInsertResponse res = sdk.pos.contentPosInsert(req, new ContentPosInsertSecurity("numquam", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.posStore != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentPosInventory

Submit inventory for the given merchant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentPosInventoryRequest;
import org.openapis.openapi.models.operations.ContentPosInventoryResponse;
import org.openapis.openapi.models.operations.ContentPosInventorySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PosInventoryRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentPosInventoryRequest req = new ContentPosInventoryRequest("nobis", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                posInventoryRequest = new PosInventoryRequest() {{
                    contentLanguage = "reiciendis";
                    gtin = "vitae";
                    itemId = "ullam";
                    price = new Price() {{
                        currency = "nisi";
                        value = "consequuntur";
                    }};;
                    quantity = "voluptas";
                    storeCode = "ratione";
                    targetCountry = "excepturi";
                    timestamp = "corrupti";
                }};;
                accessToken = "est";
                alt = AltEnum.JSON;
                callback = "quibusdam";
                fields = "impedit";
                key = "ducimus";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "dolor";
                uploadProtocol = "fugit";
            }};            

            ContentPosInventoryResponse res = sdk.pos.contentPosInventory(req, new ContentPosInventorySecurity("dolore", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.posInventoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentPosList

Lists the stores of the target merchant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentPosListRequest;
import org.openapis.openapi.models.operations.ContentPosListResponse;
import org.openapis.openapi.models.operations.ContentPosListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentPosListRequest req = new ContentPosListRequest("maxime", "expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ea";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "optio";
                key = "est";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellendus";
                uploadProtocol = "sit";
            }};            

            ContentPosListResponse res = sdk.pos.contentPosList(req, new ContentPosListSecurity("dolores", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.posListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentPosSale

Submit a sale event for the given merchant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentPosSaleRequest;
import org.openapis.openapi.models.operations.ContentPosSaleResponse;
import org.openapis.openapi.models.operations.ContentPosSaleSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PosSaleRequest;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentPosSaleRequest req = new ContentPosSaleRequest("aspernatur", "perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                posSaleRequest = new PosSaleRequest() {{
                    contentLanguage = "odio";
                    gtin = "alias";
                    itemId = "quidem";
                    price = new Price() {{
                        currency = "deleniti";
                        value = "possimus";
                    }};;
                    quantity = "ipsam";
                    saleId = "odio";
                    storeCode = "fugit";
                    targetCountry = "aspernatur";
                    timestamp = "at";
                }};;
                accessToken = "illum";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "exercitationem";
                key = "cum";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "placeat";
                uploadProtocol = "reiciendis";
            }};            

            ContentPosSaleResponse res = sdk.pos.contentPosSale(req, new ContentPosSaleSecurity("dolores", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.posSaleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
