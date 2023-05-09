# shipment

### Available Operations

* [getShipment](#getshipment) - Get a specific shipment.
* [getShipmentList](#getshipmentlist) - List shipments of project
* [postShipmentJson](#postshipmentjson) - Create a shipment
* [postShipmentRaw](#postshipmentraw) - Create a shipment
* [putShipmentLocationJson](#putshipmentlocationjson) - Update a specific shipment location
* [putShipmentLocationRaw](#putshipmentlocationraw) - Update a specific shipment location

## getShipment

Get a specific shipment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShipmentRequest;
import org.openapis.openapi.models.operations.GetShipmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShipmentRequest req = new GetShipmentRequest("blanditiis", "error", "eaque");            

            GetShipmentResponse res = sdk.shipment.getShipment(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getShipmentList

List shipments of project

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetShipmentListRequest;
import org.openapis.openapi.models.operations.GetShipmentListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShipmentListRequest req = new GetShipmentListRequest("occaecati", "rerum");            

            GetShipmentListResponse res = sdk.shipment.getShipmentList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postShipmentJson

Create a shipment

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostShipmentJsonRequest;
import org.openapis.openapi.models.operations.PostShipmentJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.ShipmentLocationPostPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostShipmentJsonRequest req = new PostShipmentJsonRequest("adipisci", "asperiores") {{
                shipmentLocationPostPersistVO = new ShipmentLocationPostPersistVO() {{
                    addressLine1 = "sample address_line1";
                    addressLine2 = "sample address_line2";
                    addressLine3 = "sample address_line3";
                    batchLabel = "sample batch_label";
                    city = "sample city";
                    companyName = "sample company_name";
                    countryIsoCode = "sample country_iso_code";
                    deliveryDate = LocalDate.parse("2022-03-14");
                    descriptionOrTitle = "sample description_or_title";
                    email = "sample email";
                    firstName = "sample first_name";
                    innerCartonLabel = "sample inner_carton_label";
                    lastName = "sample last_name";
                    middleName = "sample middle_name";
                    outerCartonLabel = "sample outer_carton_label";
                    palletLablel = "sample pallet_lablel";
                    poofType = "sample poof_type";
                    postalCode = "sample postal_code";
                    requestType = "sample request_type";
                    requestedQuantity = 1L;
                    shipmentCustomFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2021-12-05");
                            numberValue = "pariatur";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2021-07-01");
                            numberValue = "libero";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-01-24");
                            numberValue = "quos";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                    }};
                    shipmentRequestCustomFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-10-16");
                            numberValue = "dolor";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2022-10-13");
                            numberValue = "hic";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                    }};
                    shippingCarrier = "sample shipping_carrier";
                    shippingInstruction = "sample shipping_instruction";
                    shppingMethod = "sample shpping_method";
                    specIds = "sample spec_ids";
                    state = "sample state";
                    workPhoneNumber = "sample work_phone_number";
                    workgroupName = "sample workgroup_name";
                }};;
            }};            

            PostShipmentJsonResponse res = sdk.shipment.postShipmentJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postShipmentRaw

Create a shipment

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostShipmentRawRequest;
import org.openapis.openapi.models.operations.PostShipmentRawResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.ShipmentLocationPostPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostShipmentRawRequest req = new PostShipmentRawRequest("excepturi", "cum") {{
                requestBody = "voluptate".getBytes();
            }};            

            PostShipmentRawResponse res = sdk.shipment.postShipmentRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putShipmentLocationJson

Update a specific shipment location

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutShipmentLocationJsonRequest;
import org.openapis.openapi.models.operations.PutShipmentLocationJsonResponse;
import org.openapis.openapi.models.shared.ShipmentLocationPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutShipmentLocationJsonRequest req = new PutShipmentLocationJsonRequest("dignissimos", "reiciendis", "amet", "dolorum") {{
                shipmentLocationPersistVO = new ShipmentLocationPersistVO() {{
                    dueDate = LocalDate.parse("2022-11-30");
                    qtyReceived = 1L;
                    qtyRequested = 1L;
                    qtyShipped = 1L;
                    receivedDate = LocalDate.parse("2022-12-11");
                    shippedDate = LocalDate.parse("2022-07-06");
                    shippingCost = "quaerat";
                    type = "sample type";
                }};;
            }};            

            PutShipmentLocationJsonResponse res = sdk.shipment.putShipmentLocationJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putShipmentLocationRaw

Update a specific shipment location

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutShipmentLocationRawRequest;
import org.openapis.openapi.models.operations.PutShipmentLocationRawResponse;
import org.openapis.openapi.models.shared.ShipmentLocationPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutShipmentLocationRawRequest req = new PutShipmentLocationRawRequest("accusamus", "quidem", "voluptatibus", "voluptas") {{
                requestBody = "natus".getBytes();
            }};            

            PutShipmentLocationRawResponse res = sdk.shipment.putShipmentLocationRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
