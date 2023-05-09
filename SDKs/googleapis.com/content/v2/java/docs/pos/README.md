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
                            batchId = 310195L;
                            inventory = new PosInventory() {{
                                contentLanguage = "consequatur";
                                gtin = "laudantium";
                                itemId = "repellendus";
                                kind = "commodi";
                                price = new Price() {{
                                    currency = "quibusdam";
                                    value = "consectetur";
                                }};
                                quantity = "voluptas";
                                storeCode = "quaerat";
                                targetCountry = "earum";
                                timestamp = "tenetur";
                            }};
                            merchantId = "assumenda";
                            method = "dolore";
                            sale = new PosSale() {{
                                contentLanguage = "enim";
                                gtin = "ullam";
                                itemId = "perspiciatis";
                                kind = "alias";
                                price = new Price() {{
                                    currency = "ex";
                                    value = "quibusdam";
                                }};
                                quantity = "dicta";
                                saleId = "quia";
                                storeCode = "commodi";
                                targetCountry = "neque";
                                timestamp = "quibusdam";
                            }};
                            store = new PosStore() {{
                                gcidCategory = new String[]{{
                                    add("rem"),
                                    add("officiis"),
                                }};
                                kind = "omnis";
                                phoneNumber = "neque";
                                placeId = "corporis";
                                storeAddress = "quod";
                                storeCode = "dolores";
                                storeName = "placeat";
                                websiteUrl = "excepturi";
                            }};
                            storeCode = "recusandae";
                            targetMerchantId = "quos";
                        }}),
                    }};
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "ipsum";
                dryRun = false;
                fields = "consequatur";
                key = "soluta";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "recusandae";
                uploadProtocol = "labore";
            }};            

            ContentPosCustombatchResponse res = sdk.pos.contentPosCustombatch(req, new ContentPosCustombatchSecurity("adipisci", "magni") {{
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

            ContentPosDeleteRequest req = new ContentPosDeleteRequest("aperiam", "dolores", "illum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "aliquid";
                dryRun = false;
                fields = "ad";
                key = "voluptate";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "sit";
                uploadProtocol = "vel";
            }};            

            ContentPosDeleteResponse res = sdk.pos.contentPosDelete(req, new ContentPosDeleteSecurity("laboriosam", "quaerat") {{
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

            ContentPosGetRequest req = new ContentPosGetRequest("quasi", "rem", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "facere";
                fields = "sed";
                key = "inventore";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "deserunt";
                uploadProtocol = "repellendus";
            }};            

            ContentPosGetResponse res = sdk.pos.contentPosGet(req, new ContentPosGetSecurity("consequatur", "adipisci") {{
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

            ContentPosInsertRequest req = new ContentPosInsertRequest("doloremque", "optio") {{
                dollarXgafv = XgafvEnum.ONE;
                posStore = new PosStore() {{
                    gcidCategory = new String[]{{
                        add("cumque"),
                        add("maxime"),
                        add("et"),
                        add("beatae"),
                    }};
                    kind = "id";
                    phoneNumber = "consequatur";
                    placeId = "quos";
                    storeAddress = "ratione";
                    storeCode = "iure";
                    storeName = "tempora";
                    websiteUrl = "eos";
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                dryRun = false;
                fields = "laudantium";
                key = "facilis";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "aut";
                uploadProtocol = "quia";
            }};            

            ContentPosInsertResponse res = sdk.pos.contentPosInsert(req, new ContentPosInsertSecurity("officia", "quaerat") {{
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

            ContentPosInventoryRequest req = new ContentPosInventoryRequest("corporis", "accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                posInventoryRequest = new PosInventoryRequest() {{
                    contentLanguage = "sapiente";
                    gtin = "esse";
                    itemId = "neque";
                    price = new Price() {{
                        currency = "quidem";
                        value = "quisquam";
                    }};;
                    quantity = "praesentium";
                    storeCode = "tempora";
                    targetCountry = "ipsam";
                    timestamp = "officiis";
                }};;
                accessToken = "sequi";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                dryRun = false;
                fields = "est";
                key = "amet";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "voluptatibus";
                uploadProtocol = "numquam";
            }};            

            ContentPosInventoryResponse res = sdk.pos.contentPosInventory(req, new ContentPosInventorySecurity("rerum", "dolorum") {{
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

            ContentPosListRequest req = new ContentPosListRequest("quibusdam", "earum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "error";
                key = "animi";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "nihil";
                uploadProtocol = "facilis";
            }};            

            ContentPosListResponse res = sdk.pos.contentPosList(req, new ContentPosListSecurity("optio", "incidunt") {{
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

            ContentPosSaleRequest req = new ContentPosSaleRequest("eos", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                posSaleRequest = new PosSaleRequest() {{
                    contentLanguage = "aliquid";
                    gtin = "eum";
                    itemId = "vel";
                    price = new Price() {{
                        currency = "ad";
                        value = "quos";
                    }};;
                    quantity = "illo";
                    saleId = "suscipit";
                    storeCode = "quibusdam";
                    targetCountry = "fugiat";
                    timestamp = "impedit";
                }};;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "voluptates";
                dryRun = false;
                fields = "maiores";
                key = "nemo";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "cumque";
                uploadProtocol = "expedita";
            }};            

            ContentPosSaleResponse res = sdk.pos.contentPosSale(req, new ContentPosSaleSecurity("modi", "cumque") {{
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
