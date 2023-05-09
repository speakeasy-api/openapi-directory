# rfe

### Available Operations

* [getRfe](#getrfe) - Get a specific Rfe
* [getRfeList](#getrfelist) - List the RFES
* [postRfeJson](#postrfejson) - Create a RFE
* [postRfeRaw](#postrferaw) - Create a RFE

## getRfe

Get a specific Rfe

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRfeRequest;
import org.openapis.openapi.models.operations.GetRfeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRfeRequest req = new GetRfeRequest("totam", "dignissimos", "eaque");            

            GetRfeResponse res = sdk.rfe.getRfe(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRfeList

List the RFES

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRfeListRequest;
import org.openapis.openapi.models.operations.GetRfeListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRfeListRequest req = new GetRfeListRequest("quis", "nesciunt");            

            GetRfeListResponse res = sdk.rfe.getRfeList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRfeJson

Create a RFE

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRfeJsonRequest;
import org.openapis.openapi.models.operations.PostRfeJsonResponse;
import org.openapis.openapi.models.shared.RfePO;
import org.openapis.openapi.models.shared.RfeSpecPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRfeJsonRequest req = new PostRfeJsonRequest("eos", "perferendis") {{
                rfePO = new RfePO() {{
                    description = "sample description";
                    details = "sample details";
                    estimateDueDate = LocalDate.parse("2022-03-17");
                    proposedOrderCompletionDate = LocalDate.parse("2022-10-11");
                    rfeNumber = "sample rfe_number";
                    rfeTitle = "sample rfe_title";
                    specs = new org.openapis.openapi.models.shared.RfeSpecPO[]{{
                        add(new RfeSpecPO() {{
                            quantity1 = 1L;
                            quantity2 = 1L;
                            quantity3 = 1L;
                            quantity4 = 1L;
                            quantity5 = 1L;
                            specId = 1L;
                        }}),
                        add(new RfeSpecPO() {{
                            quantity1 = 1L;
                            quantity2 = 1L;
                            quantity3 = 1L;
                            quantity4 = 1L;
                            quantity5 = 1L;
                            specId = 1L;
                        }}),
                        add(new RfeSpecPO() {{
                            quantity1 = 1L;
                            quantity2 = 1L;
                            quantity3 = 1L;
                            quantity4 = 1L;
                            quantity5 = 1L;
                            specId = 1L;
                        }}),
                        add(new RfeSpecPO() {{
                            quantity1 = 1L;
                            quantity2 = 1L;
                            quantity3 = 1L;
                            quantity4 = 1L;
                            quantity5 = 1L;
                            specId = 1L;
                        }}),
                    }};
                    supplierUserIds = new Long[]{{
                        add(1L),
                        add(1L),
                    }};
                }};;
            }};            

            PostRfeJsonResponse res = sdk.rfe.postRfeJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRfeRaw

Create a RFE

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRfeRawRequest;
import org.openapis.openapi.models.operations.PostRfeRawResponse;
import org.openapis.openapi.models.shared.RfePO;
import org.openapis.openapi.models.shared.RfeSpecPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRfeRawRequest req = new PostRfeRawRequest("hic", "recusandae") {{
                requestBody = "omnis".getBytes();
            }};            

            PostRfeRawResponse res = sdk.rfe.postRfeRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
