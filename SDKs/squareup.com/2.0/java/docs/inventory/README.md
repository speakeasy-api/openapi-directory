# inventory

### Available Operations

* [batchChangeInventory](#batchchangeinventory) - BatchChangeInventory
* [batchRetrieveInventoryChanges](#batchretrieveinventorychanges) - BatchRetrieveInventoryChanges
* [batchRetrieveInventoryCounts](#batchretrieveinventorycounts) - BatchRetrieveInventoryCounts
* [deprecatedBatchChangeInventory](#deprecatedbatchchangeinventory) - DeprecatedBatchChangeInventory
* [deprecatedBatchRetrieveInventoryChanges](#deprecatedbatchretrieveinventorychanges) - DeprecatedBatchRetrieveInventoryChanges
* [deprecatedBatchRetrieveInventoryCounts](#deprecatedbatchretrieveinventorycounts) - DeprecatedBatchRetrieveInventoryCounts
* [deprecatedRetrieveInventoryAdjustment](#deprecatedretrieveinventoryadjustment) - DeprecatedRetrieveInventoryAdjustment
* [deprecatedRetrieveInventoryPhysicalCount](#deprecatedretrieveinventoryphysicalcount) - DeprecatedRetrieveInventoryPhysicalCount
* [retrieveInventoryAdjustment](#retrieveinventoryadjustment) - RetrieveInventoryAdjustment
* [retrieveInventoryChanges](#retrieveinventorychanges) - RetrieveInventoryChanges
* [retrieveInventoryCount](#retrieveinventorycount) - RetrieveInventoryCount
* [retrieveInventoryPhysicalCount](#retrieveinventoryphysicalcount) - RetrieveInventoryPhysicalCount
* [retrieveInventoryTransfer](#retrieveinventorytransfer) - RetrieveInventoryTransfer

## batchChangeInventory

Applies adjustments and counts to the provided item quantities.

On success: returns the current calculated counts for all objects
referenced in the request.
On failure: returns a list of related errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchChangeInventoryResponse;
import org.openapis.openapi.models.operations.BatchChangeInventorySecurity;
import org.openapis.openapi.models.shared.BatchChangeInventoryRequest;
import org.openapis.openapi.models.shared.CatalogMeasurementUnit;
import org.openapis.openapi.models.shared.InventoryAdjustment;
import org.openapis.openapi.models.shared.InventoryAdjustmentGroup;
import org.openapis.openapi.models.shared.InventoryChange;
import org.openapis.openapi.models.shared.InventoryPhysicalCount;
import org.openapis.openapi.models.shared.InventoryTransfer;
import org.openapis.openapi.models.shared.MeasurementUnit;
import org.openapis.openapi.models.shared.MeasurementUnitCustom;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.SourceApplication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchChangeInventoryRequest req = new BatchChangeInventoryRequest("atque") {{
                changes = new org.openapis.openapi.models.shared.InventoryChange[]{{
                    add(new InventoryChange() {{
                        adjustment = new InventoryAdjustment() {{
                            adjustmentGroup = new InventoryAdjustmentGroup() {{
                                fromState = "illo";
                                id = "a94f6436-64a8-4f0a-b8c6-91d732d9fbaf";
                                rootAdjustmentId = "molestias";
                                toState = "magnam";
                            }};
                            catalogObjectId = "voluptate";
                            catalogObjectType = "aliquid";
                            createdAt = "officia";
                            employeeId = "qui";
                            fromState = "animi";
                            goodsReceiptId = "vero";
                            id = "8dcc50c8-a351-42c7-b784-8930750a00e9";
                            locationId = "commodi";
                            occurredAt = "voluptas";
                            purchaseOrderId = "eveniet";
                            quantity = "eligendi";
                            referenceId = "ducimus";
                            refundId = "dolorem";
                            source = new SourceApplication() {{
                                applicationId = "eum";
                                name = "Miss Theodore DuBuque";
                                product = "nesciunt";
                            }};
                            toState = "omnis";
                            totalPriceMoney = new Money() {{
                                amount = 547191L;
                                currency = "optio";
                            }};
                            transactionId = "molestiae";
                        }};
                        measurementUnit = new CatalogMeasurementUnit() {{
                            measurementUnit = new MeasurementUnit() {{
                                areaUnit = "atque";
                                customUnit = new MeasurementUnitCustom("praesentium", "accusamus") {{
                                    abbreviation = "dolor";
                                    name = "Seth Crona";
                                }};
                                genericUnit = "fugiat";
                                lengthUnit = "ipsum";
                                timeUnit = "pariatur";
                                type = "amet";
                                volumeUnit = "deserunt";
                                weightUnit = "nobis";
                            }};
                            precision = 465324L;
                        }};
                        measurementUnitId = "placeat";
                        physicalCount = new InventoryPhysicalCount() {{
                            catalogObjectId = "est";
                            catalogObjectType = "non";
                            createdAt = "placeat";
                            employeeId = "veniam";
                            id = "ca8649a7-0cfd-45d6-989b-7206451077d1";
                            locationId = "perspiciatis";
                            occurredAt = "accusamus";
                            quantity = "laborum";
                            referenceId = "voluptatum";
                            source = new SourceApplication() {{
                                applicationId = "ratione";
                                name = "Frederick Mertz";
                                product = "quibusdam";
                            }};
                            state = "inventore";
                        }};
                        transfer = new InventoryTransfer() {{
                            catalogObjectId = "ut";
                            catalogObjectType = "tempore";
                            createdAt = "molestias";
                            employeeId = "fuga";
                            fromLocationId = "odit";
                            id = "c1954545-e955-4dcc-985e-a4901c7c43ad";
                            occurredAt = "explicabo";
                            quantity = "nulla";
                            referenceId = "laborum";
                            source = new SourceApplication() {{
                                applicationId = "animi";
                                name = "Christy Gorczany";
                                product = "culpa";
                            }};
                            state = "ratione";
                            toLocationId = "illum";
                        }};
                        type = "sed";
                    }}),
                    add(new InventoryChange() {{
                        adjustment = new InventoryAdjustment() {{
                            adjustmentGroup = new InventoryAdjustmentGroup() {{
                                fromState = "amet";
                                id = "0edf7381-1a11-4538-abd7-ed56507621c5";
                                rootAdjustmentId = "deleniti";
                                toState = "doloribus";
                            }};
                            catalogObjectId = "magnam";
                            catalogObjectType = "nulla";
                            createdAt = "iusto";
                            employeeId = "adipisci";
                            fromState = "provident";
                            goodsReceiptId = "voluptas";
                            id = "564c20a0-711a-4961-924a-7dbb8f532d89";
                            locationId = "odit";
                            occurredAt = "eligendi";
                            purchaseOrderId = "earum";
                            quantity = "iusto";
                            referenceId = "atque";
                            refundId = "sunt";
                            source = new SourceApplication() {{
                                applicationId = "dolores";
                                name = "Mr. Alton Heidenreich";
                                product = "deleniti";
                            }};
                            toState = "esse";
                            totalPriceMoney = new Money() {{
                                amount = 528169L;
                                currency = "aspernatur";
                            }};
                            transactionId = "eius";
                        }};
                        measurementUnit = new CatalogMeasurementUnit() {{
                            measurementUnit = new MeasurementUnit() {{
                                areaUnit = "accusantium";
                                customUnit = new MeasurementUnitCustom("corrupti", "blanditiis") {{
                                    abbreviation = "nobis";
                                    name = "Lewis Goodwin";
                                }};
                                genericUnit = "hic";
                                lengthUnit = "blanditiis";
                                timeUnit = "maiores";
                                type = "et";
                                volumeUnit = "harum";
                                weightUnit = "a";
                            }};
                            precision = 812L;
                        }};
                        measurementUnitId = "tempore";
                        physicalCount = new InventoryPhysicalCount() {{
                            catalogObjectId = "quod";
                            catalogObjectType = "totam";
                            createdAt = "officiis";
                            employeeId = "dicta";
                            id = "f206d5d8-31d0-4081-890f-6706673f3a68";
                            locationId = "dicta";
                            occurredAt = "minus";
                            quantity = "exercitationem";
                            referenceId = "molestiae";
                            source = new SourceApplication() {{
                                applicationId = "iure";
                                name = "Levi Ryan";
                                product = "quaerat";
                            }};
                            state = "explicabo";
                        }};
                        transfer = new InventoryTransfer() {{
                            catalogObjectId = "dolore";
                            catalogObjectType = "accusantium";
                            createdAt = "excepturi";
                            employeeId = "deserunt";
                            fromLocationId = "odit";
                            id = "15e08601-489a-45f6-be3a-f3dd9dda33dc";
                            occurredAt = "pariatur";
                            quantity = "vel";
                            referenceId = "non";
                            source = new SourceApplication() {{
                                applicationId = "incidunt";
                                name = "Nathan Ward";
                                product = "esse";
                            }};
                            state = "id";
                            toLocationId = "natus";
                        }};
                        type = "quas";
                    }}),
                    add(new InventoryChange() {{
                        adjustment = new InventoryAdjustment() {{
                            adjustmentGroup = new InventoryAdjustmentGroup() {{
                                fromState = "saepe";
                                id = "4df37e45-b895-45d4-93e1-3a482310907b";
                                rootAdjustmentId = "facere";
                                toState = "ratione";
                            }};
                            catalogObjectId = "quis";
                            catalogObjectType = "modi";
                            createdAt = "quo";
                            employeeId = "aut";
                            fromState = "cupiditate";
                            goodsReceiptId = "sed";
                            id = "bd734f02-449d-486f-8bb2-0fe5d911cbfe";
                            locationId = "dignissimos";
                            occurredAt = "magnam";
                            purchaseOrderId = "excepturi";
                            quantity = "placeat";
                            referenceId = "dolorum";
                            refundId = "voluptatibus";
                            source = new SourceApplication() {{
                                applicationId = "modi";
                                name = "Iris Corwin";
                                product = "ex";
                            }};
                            toState = "error";
                            totalPriceMoney = new Money() {{
                                amount = 902802L;
                                currency = "consequuntur";
                            }};
                            transactionId = "quod";
                        }};
                        measurementUnit = new CatalogMeasurementUnit() {{
                            measurementUnit = new MeasurementUnit() {{
                                areaUnit = "occaecati";
                                customUnit = new MeasurementUnitCustom("temporibus", "quidem") {{
                                    abbreviation = "earum";
                                    name = "Dr. Paulette Berge";
                                }};
                                genericUnit = "neque";
                                lengthUnit = "est";
                                timeUnit = "repellendus";
                                type = "tempora";
                                volumeUnit = "quisquam";
                                weightUnit = "vel";
                            }};
                            precision = 741473L;
                        }};
                        measurementUnitId = "doloremque";
                        physicalCount = new InventoryPhysicalCount() {{
                            catalogObjectId = "adipisci";
                            catalogObjectType = "quasi";
                            createdAt = "accusantium";
                            employeeId = "molestias";
                            id = "d9c33747-3082-4b94-b2ab-1fd5671e9c32";
                            locationId = "commodi";
                            occurredAt = "neque";
                            quantity = "enim";
                            referenceId = "eaque";
                            source = new SourceApplication() {{
                                applicationId = "officia";
                                name = "Mrs. Natalie Kozey";
                                product = "nihil";
                            }};
                            state = "blanditiis";
                        }};
                        transfer = new InventoryTransfer() {{
                            catalogObjectId = "natus";
                            catalogObjectType = "quisquam";
                            createdAt = "itaque";
                            employeeId = "consequatur";
                            fromLocationId = "recusandae";
                            id = "991594d9-3a74-4c02-92fe-3b4b4db8b778";
                            occurredAt = "voluptates";
                            quantity = "distinctio";
                            referenceId = "nam";
                            source = new SourceApplication() {{
                                applicationId = "nisi";
                                name = "Arthur Stehr";
                                product = "voluptatibus";
                            }};
                            state = "ad";
                            toLocationId = "eaque";
                        }};
                        type = "aspernatur";
                    }}),
                }};
                ignoreUnchangedCounts = false;
            }};            

            BatchChangeInventoryResponse res = sdk.inventory.batchChangeInventory(req, new BatchChangeInventorySecurity("expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchChangeInventoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchRetrieveInventoryChanges

Returns historical physical counts and adjustments based on the
provided filter criteria.

Results are paginated and sorted in ascending order according their
`occurred_at` timestamp (oldest first).

BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
that cannot be handled by other, simpler endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchRetrieveInventoryChangesResponse;
import org.openapis.openapi.models.operations.BatchRetrieveInventoryChangesSecurity;
import org.openapis.openapi.models.shared.BatchRetrieveInventoryChangesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchRetrieveInventoryChangesRequest req = new BatchRetrieveInventoryChangesRequest() {{
                catalogObjectIds = new String[]{{
                    add("hic"),
                    add("rerum"),
                    add("explicabo"),
                }};
                cursor = "eligendi";
                locationIds = new String[]{{
                    add("placeat"),
                    add("aliquam"),
                    add("aliquid"),
                }};
                states = new String[]{{
                    add("ipsam"),
                }};
                types = new String[]{{
                    add("enim"),
                    add("eveniet"),
                    add("eum"),
                    add("exercitationem"),
                }};
                updatedAfter = "at";
                updatedBefore = "culpa";
            }};            

            BatchRetrieveInventoryChangesResponse res = sdk.inventory.batchRetrieveInventoryChanges(req, new BatchRetrieveInventoryChangesSecurity("alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchRetrieveInventoryChangesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchRetrieveInventoryCounts

Returns current counts for the provided
[CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s at the requested
[Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s.

Results are paginated and sorted in descending order according to their
`calculated_at` timestamp (newest first).

When `updated_after` is specified, only counts that have changed since that
time (based on the server timestamp for the most recent change) are
returned. This allows clients to perform a "sync" operation, for example
in response to receiving a Webhook notification.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchRetrieveInventoryCountsResponse;
import org.openapis.openapi.models.operations.BatchRetrieveInventoryCountsSecurity;
import org.openapis.openapi.models.shared.BatchRetrieveInventoryCountsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchRetrieveInventoryCountsRequest req = new BatchRetrieveInventoryCountsRequest() {{
                catalogObjectIds = new String[]{{
                    add("quos"),
                }};
                cursor = "quisquam";
                locationIds = new String[]{{
                    add("accusamus"),
                }};
                states = new String[]{{
                    add("enim"),
                    add("veritatis"),
                    add("mollitia"),
                }};
                updatedAfter = "veritatis";
            }};            

            BatchRetrieveInventoryCountsResponse res = sdk.inventory.batchRetrieveInventoryCounts(req, new BatchRetrieveInventoryCountsSecurity("vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchRetrieveInventoryCountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deprecatedBatchChangeInventory

Deprecated version of [BatchChangeInventory](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-change-inventory) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeprecatedBatchChangeInventoryResponse;
import org.openapis.openapi.models.operations.DeprecatedBatchChangeInventorySecurity;
import org.openapis.openapi.models.shared.BatchChangeInventoryRequest;
import org.openapis.openapi.models.shared.CatalogMeasurementUnit;
import org.openapis.openapi.models.shared.InventoryAdjustment;
import org.openapis.openapi.models.shared.InventoryAdjustmentGroup;
import org.openapis.openapi.models.shared.InventoryChange;
import org.openapis.openapi.models.shared.InventoryPhysicalCount;
import org.openapis.openapi.models.shared.InventoryTransfer;
import org.openapis.openapi.models.shared.MeasurementUnit;
import org.openapis.openapi.models.shared.MeasurementUnitCustom;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.SourceApplication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchChangeInventoryRequest req = new BatchChangeInventoryRequest("ratione") {{
                changes = new org.openapis.openapi.models.shared.InventoryChange[]{{
                    add(new InventoryChange() {{
                        adjustment = new InventoryAdjustment() {{
                            adjustmentGroup = new InventoryAdjustmentGroup() {{
                                fromState = "doloribus";
                                id = "da966489-d7b7-4867-be13-a12a6b992494";
                                rootAdjustmentId = "corporis";
                                toState = "natus";
                            }};
                            catalogObjectId = "numquam";
                            catalogObjectType = "tempora";
                            createdAt = "corrupti";
                            employeeId = "ducimus";
                            fromState = "asperiores";
                            goodsReceiptId = "veniam";
                            id = "c843836b-86b3-4cdf-a415-b0449f9df13f";
                            locationId = "ut";
                            occurredAt = "officiis";
                            purchaseOrderId = "itaque";
                            quantity = "nulla";
                            referenceId = "distinctio";
                            refundId = "recusandae";
                            source = new SourceApplication() {{
                                applicationId = "in";
                                name = "Geoffrey Witting III";
                                product = "molestias";
                            }};
                            toState = "quia";
                            totalPriceMoney = new Money() {{
                                amount = 373095L;
                                currency = "rem";
                            }};
                            transactionId = "molestias";
                        }};
                        measurementUnit = new CatalogMeasurementUnit() {{
                            measurementUnit = new MeasurementUnit() {{
                                areaUnit = "eius";
                                customUnit = new MeasurementUnitCustom("corporis", "impedit") {{
                                    abbreviation = "necessitatibus";
                                    name = "Harvey Jacobi";
                                }};
                                genericUnit = "in";
                                lengthUnit = "fugit";
                                timeUnit = "voluptate";
                                type = "provident";
                                volumeUnit = "quis";
                                weightUnit = "expedita";
                            }};
                            precision = 462646L;
                        }};
                        measurementUnitId = "laudantium";
                        physicalCount = new InventoryPhysicalCount() {{
                            catalogObjectId = "exercitationem";
                            catalogObjectType = "vitae";
                            createdAt = "magnam";
                            employeeId = "blanditiis";
                            id = "d6d549e5-635b-433b-80f9-70c42fc9f484";
                            locationId = "numquam";
                            occurredAt = "sunt";
                            quantity = "consequuntur";
                            referenceId = "veniam";
                            source = new SourceApplication() {{
                                applicationId = "voluptates";
                                name = "Cathy Ratke";
                                product = "eum";
                            }};
                            state = "doloremque";
                        }};
                        transfer = new InventoryTransfer() {{
                            catalogObjectId = "iure";
                            catalogObjectType = "nostrum";
                            createdAt = "cumque";
                            employeeId = "eaque";
                            fromLocationId = "earum";
                            id = "fa6f93b9-0a1b-48c9-9be1-254b739f4fe7";
                            occurredAt = "voluptate";
                            quantity = "explicabo";
                            referenceId = "architecto";
                            source = new SourceApplication() {{
                                applicationId = "perferendis";
                                name = "Samuel Wintheiser";
                                product = "quis";
                            }};
                            state = "quos";
                            toLocationId = "impedit";
                        }};
                        type = "cupiditate";
                    }}),
                }};
                ignoreUnchangedCounts = false;
            }};            

            DeprecatedBatchChangeInventoryResponse res = sdk.inventory.deprecatedBatchChangeInventory(req, new DeprecatedBatchChangeInventorySecurity("excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchChangeInventoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deprecatedBatchRetrieveInventoryChanges

Deprecated version of [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-changes) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeprecatedBatchRetrieveInventoryChangesResponse;
import org.openapis.openapi.models.operations.DeprecatedBatchRetrieveInventoryChangesSecurity;
import org.openapis.openapi.models.shared.BatchRetrieveInventoryChangesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchRetrieveInventoryChangesRequest req = new BatchRetrieveInventoryChangesRequest() {{
                catalogObjectIds = new String[]{{
                    add("iure"),
                    add("sed"),
                    add("odit"),
                    add("quibusdam"),
                }};
                cursor = "fugit";
                locationIds = new String[]{{
                    add("optio"),
                    add("accusantium"),
                    add("earum"),
                }};
                states = new String[]{{
                    add("numquam"),
                    add("voluptatem"),
                    add("voluptatum"),
                }};
                types = new String[]{{
                    add("possimus"),
                    add("unde"),
                }};
                updatedAfter = "maxime";
                updatedBefore = "culpa";
            }};            

            DeprecatedBatchRetrieveInventoryChangesResponse res = sdk.inventory.deprecatedBatchRetrieveInventoryChanges(req, new DeprecatedBatchRetrieveInventoryChangesSecurity("deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchRetrieveInventoryChangesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deprecatedBatchRetrieveInventoryCounts

Deprecated version of [BatchRetrieveInventoryCounts](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-counts) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeprecatedBatchRetrieveInventoryCountsResponse;
import org.openapis.openapi.models.operations.DeprecatedBatchRetrieveInventoryCountsSecurity;
import org.openapis.openapi.models.shared.BatchRetrieveInventoryCountsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchRetrieveInventoryCountsRequest req = new BatchRetrieveInventoryCountsRequest() {{
                catalogObjectIds = new String[]{{
                    add("doloremque"),
                    add("magnam"),
                    add("quia"),
                    add("quibusdam"),
                }};
                cursor = "temporibus";
                locationIds = new String[]{{
                    add("placeat"),
                    add("est"),
                }};
                states = new String[]{{
                    add("placeat"),
                    add("occaecati"),
                    add("nam"),
                }};
                updatedAfter = "modi";
            }};            

            DeprecatedBatchRetrieveInventoryCountsResponse res = sdk.inventory.deprecatedBatchRetrieveInventoryCounts(req, new DeprecatedBatchRetrieveInventoryCountsSecurity("minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchRetrieveInventoryCountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deprecatedRetrieveInventoryAdjustment

Deprecated version of [RetrieveInventoryAdjustment](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/retrieve-inventory-adjustment) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeprecatedRetrieveInventoryAdjustmentRequest;
import org.openapis.openapi.models.operations.DeprecatedRetrieveInventoryAdjustmentResponse;
import org.openapis.openapi.models.operations.DeprecatedRetrieveInventoryAdjustmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeprecatedRetrieveInventoryAdjustmentRequest req = new DeprecatedRetrieveInventoryAdjustmentRequest("id");            

            DeprecatedRetrieveInventoryAdjustmentResponse res = sdk.inventory.deprecatedRetrieveInventoryAdjustment(req, new DeprecatedRetrieveInventoryAdjustmentSecurity("culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveInventoryAdjustmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deprecatedRetrieveInventoryPhysicalCount

Deprecated version of [RetrieveInventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/retrieve-inventory-physical-count) after the endpoint URL 
is updated to conform to the standard convention.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeprecatedRetrieveInventoryPhysicalCountRequest;
import org.openapis.openapi.models.operations.DeprecatedRetrieveInventoryPhysicalCountResponse;
import org.openapis.openapi.models.operations.DeprecatedRetrieveInventoryPhysicalCountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeprecatedRetrieveInventoryPhysicalCountRequest req = new DeprecatedRetrieveInventoryPhysicalCountRequest("beatae");            

            DeprecatedRetrieveInventoryPhysicalCountResponse res = sdk.inventory.deprecatedRetrieveInventoryPhysicalCount(req, new DeprecatedRetrieveInventoryPhysicalCountSecurity("quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveInventoryPhysicalCountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveInventoryAdjustment

Returns the [InventoryAdjustment](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryAdjustment) object
with the provided `adjustment_id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveInventoryAdjustmentRequest;
import org.openapis.openapi.models.operations.RetrieveInventoryAdjustmentResponse;
import org.openapis.openapi.models.operations.RetrieveInventoryAdjustmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveInventoryAdjustmentRequest req = new RetrieveInventoryAdjustmentRequest("a");            

            RetrieveInventoryAdjustmentResponse res = sdk.inventory.retrieveInventoryAdjustment(req, new RetrieveInventoryAdjustmentSecurity("eveniet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveInventoryAdjustmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveInventoryChanges

Returns a set of physical counts and inventory adjustments for the
provided [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) at the requested
[Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s. 

You can achieve the same result by calling [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-changes) 
and having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID.

Results are paginated and sorted in descending order according to their
`occurred_at` timestamp (newest first).

There are no limits on how far back the caller can page. This endpoint can be 
used to display recent changes for a specific item. For more
sophisticated queries, use a batch endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveInventoryChangesRequest;
import org.openapis.openapi.models.operations.RetrieveInventoryChangesResponse;
import org.openapis.openapi.models.operations.RetrieveInventoryChangesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveInventoryChangesRequest req = new RetrieveInventoryChangesRequest("sint") {{
                cursor = "saepe";
                locationIds = "illo";
            }};            

            RetrieveInventoryChangesResponse res = sdk.inventory.retrieveInventoryChanges(req, new RetrieveInventoryChangesSecurity("minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveInventoryChangesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveInventoryCount

Retrieves the current calculated stock count for a given
[CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) at a given set of
[Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s. Responses are paginated and unsorted.
For more sophisticated queries, use a batch endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveInventoryCountRequest;
import org.openapis.openapi.models.operations.RetrieveInventoryCountResponse;
import org.openapis.openapi.models.operations.RetrieveInventoryCountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveInventoryCountRequest req = new RetrieveInventoryCountRequest("nulla") {{
                cursor = "reiciendis";
                locationIds = "molestias";
            }};            

            RetrieveInventoryCountResponse res = sdk.inventory.retrieveInventoryCount(req, new RetrieveInventoryCountSecurity("ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveInventoryCountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveInventoryPhysicalCount

Returns the [InventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryPhysicalCount)
object with the provided `physical_count_id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveInventoryPhysicalCountRequest;
import org.openapis.openapi.models.operations.RetrieveInventoryPhysicalCountResponse;
import org.openapis.openapi.models.operations.RetrieveInventoryPhysicalCountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveInventoryPhysicalCountRequest req = new RetrieveInventoryPhysicalCountRequest("amet");            

            RetrieveInventoryPhysicalCountResponse res = sdk.inventory.retrieveInventoryPhysicalCount(req, new RetrieveInventoryPhysicalCountSecurity("natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveInventoryPhysicalCountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveInventoryTransfer

Returns the [InventoryTransfer](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryTransfer) object
with the provided `transfer_id`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveInventoryTransferRequest;
import org.openapis.openapi.models.operations.RetrieveInventoryTransferResponse;
import org.openapis.openapi.models.operations.RetrieveInventoryTransferSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveInventoryTransferRequest req = new RetrieveInventoryTransferRequest("aperiam");            

            RetrieveInventoryTransferResponse res = sdk.inventory.retrieveInventoryTransfer(req, new RetrieveInventoryTransferSecurity("ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveInventoryTransferResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
