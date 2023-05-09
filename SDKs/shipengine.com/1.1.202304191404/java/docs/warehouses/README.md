# warehouses

## Overview

warehouses


### Available Operations

* [createWarehouse](#createwarehouse) - Create Warehouse
* [deleteWarehouse](#deletewarehouse) - Delete Warehouse By ID
* [getWarehouseById](#getwarehousebyid) - Get Warehouse By Id
* [listWarehouses](#listwarehouses) - List Warehouses
* [updateWarehouse](#updatewarehouse) - Update Warehouse By Id
* [updateWarehouseSettings](#updatewarehousesettings) - Update Warehouse Settings

## createWarehouse

Create a warehouse location that you can use to create shipping items by simply passing in the generated warehouse id.
If the return address is not supplied in the request body then it is assumed that the origin address is the return address as well


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWarehouseResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressAddressResidentialIndicatorEnum;
import org.openapis.openapi.models.shared.CreateWarehouseRequestBodyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateWarehouseRequestBodyInput req = new CreateWarehouseRequestBodyInput("Zero Cool HQ",                 new Address("1999 Bishop Grandin Blvd.", AddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                addressLine2 = "Unit 408";
                                addressLine3 = "Building #7";
                                companyName = "The Home Depot";
                                email = "example@example.com";
                            }};) {{
                isDefault = false;
                returnAddress = new Address("1999 Bishop Grandin Blvd.", AddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                    addressLine2 = "Unit 408";
                    addressLine3 = "Building #7";
                    companyName = "The Home Depot";
                    email = "example@example.com";
                }};;
            }};            

            CreateWarehouseResponse res = sdk.warehouses.createWarehouse(req);

            if (res.createWarehouseResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWarehouse

Delete a warehouse by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWarehouseRequest;
import org.openapis.openapi.models.operations.DeleteWarehouseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWarehouseRequest req = new DeleteWarehouseRequest("se-28529731");            

            DeleteWarehouseResponse res = sdk.warehouses.deleteWarehouse(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWarehouseById

Retrieve warehouse data based on the warehouse ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWarehouseByIdRequest;
import org.openapis.openapi.models.operations.GetWarehouseByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWarehouseByIdRequest req = new GetWarehouseByIdRequest("se-28529731");            

            GetWarehouseByIdResponse res = sdk.warehouses.getWarehouseById(req);

            if (res.getWarehouseByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWarehouses

Retrieve a list of warehouses associated with this account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWarehousesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWarehousesResponse res = sdk.warehouses.listWarehouses();

            if (res.listWarehousesResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWarehouse

Update Warehouse object information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWarehouseRequest;
import org.openapis.openapi.models.operations.UpdateWarehouseResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.AddressAddressResidentialIndicatorEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateWarehouseRequestBodyInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWarehouseRequest req = new UpdateWarehouseRequest(                new UpdateWarehouseRequestBodyInput("Zero Cool HQ",                 new Address("1999 Bishop Grandin Blvd.", AddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                                addressLine2 = "Unit 408";
                                                addressLine3 = "Building #7";
                                                companyName = "The Home Depot";
                                                email = "example@example.com";
                                            }};) {{
                                isDefault = false;
                                returnAddress = new Address("1999 Bishop Grandin Blvd.", AddressAddressResidentialIndicatorEnum.NO, "Winnipeg", "CA", "John Doe", "+1 204-253-9411 ext. 123", "78756-3717", "Manitoba") {{
                                    addressLine2 = "Unit 408";
                                    addressLine3 = "Building #7";
                                    companyName = "The Home Depot";
                                    email = "example@example.com";
                                }};;
                            }};, "se-28529731");            

            UpdateWarehouseResponse res = sdk.warehouses.updateWarehouse(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWarehouseSettings

Update Warehouse settings object information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWarehouseSettingsRequest;
import org.openapis.openapi.models.operations.UpdateWarehouseSettingsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateWarehouseSettingsRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWarehouseSettingsRequest req = new UpdateWarehouseSettingsRequest(                new UpdateWarehouseSettingsRequestBody() {{
                                isDefault = true;
                            }};, "se-28529731");            

            UpdateWarehouseSettingsResponse res = sdk.warehouses.updateWarehouseSettings(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
