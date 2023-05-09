# workgroup

### Available Operations

* [getClientWorkgroupList](#getclientworkgrouplist) - List client workgroups
* [getSpecificClientWorkgroup](#getspecificclientworkgroup) - Get a specific client workgroups
* [getSupplierWorkgroupDetail](#getsupplierworkgroupdetail) - Get the specific supplier of My Group
* [getSupplierWorkgroupList](#getsupplierworkgrouplist) - List supplier workgroups
* [getWorkgroupDetail](#getworkgroupdetail) - Detail workgroup info
* [getWorkgroupList](#getworkgrouplist) - List the workgroups
* [putWorkgroupJson](#putworkgroupjson) - Update a specific Workgroup
* [putWorkgroupRaw](#putworkgroupraw) - Update a specific Workgroup

## getClientWorkgroupList

List client workgroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClientWorkgroupListRequest;
import org.openapis.openapi.models.operations.GetClientWorkgroupListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClientWorkgroupListRequest req = new GetClientWorkgroupListRequest("cupiditate");            

            GetClientWorkgroupListResponse res = sdk.workgroup.getClientWorkgroupList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpecificClientWorkgroup

Get a specific client workgroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpecificClientWorkgroupRequest;
import org.openapis.openapi.models.operations.GetSpecificClientWorkgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSpecificClientWorkgroupRequest req = new GetSpecificClientWorkgroupRequest("qui", "quae");            

            GetSpecificClientWorkgroupResponse res = sdk.workgroup.getSpecificClientWorkgroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSupplierWorkgroupDetail

Get the specific supplier of My Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSupplierWorkgroupDetailRequest;
import org.openapis.openapi.models.operations.GetSupplierWorkgroupDetailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSupplierWorkgroupDetailRequest req = new GetSupplierWorkgroupDetailRequest("laudantium", "odio");            

            GetSupplierWorkgroupDetailResponse res = sdk.workgroup.getSupplierWorkgroupDetail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSupplierWorkgroupList

List supplier workgroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSupplierWorkgroupListRequest;
import org.openapis.openapi.models.operations.GetSupplierWorkgroupListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSupplierWorkgroupListRequest req = new GetSupplierWorkgroupListRequest("occaecati");            

            GetSupplierWorkgroupListResponse res = sdk.workgroup.getSupplierWorkgroupList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkgroupDetail

Detail workgroup info

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkgroupDetailRequest;
import org.openapis.openapi.models.operations.GetWorkgroupDetailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkgroupDetailRequest req = new GetWorkgroupDetailRequest("voluptatibus");            

            GetWorkgroupDetailResponse res = sdk.workgroup.getWorkgroupDetail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWorkgroupList

List the workgroups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWorkgroupListRequest;
import org.openapis.openapi.models.operations.GetWorkgroupListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWorkgroupListRequest req = new GetWorkgroupListRequest() {{
                workgroupName = "quisquam";
                workgroupTypes = new String[]{{
                    add("omnis"),
                    add("quis"),
                    add("ipsum"),
                    add("delectus"),
                }};
            }};            

            GetWorkgroupListResponse res = sdk.workgroup.getWorkgroupList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putWorkgroupJson

Update a specific Workgroup

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWorkgroupJsonRequest;
import org.openapis.openapi.models.operations.PutWorkgroupJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.WorkgroupUpdPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWorkgroupJsonRequest req = new PutWorkgroupJsonRequest("voluptate") {{
                workgroupUpdPersistVO = new WorkgroupUpdPersistVO() {{
                    addressLine1 = "sample address_line1";
                    addressLine2 = "sample address_line2";
                    addressLine3 = "sample address_line3";
                    city = "sample city";
                    country = "sample country";
                    customFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                        add(new CustomFieldPersistVO() {{
                            dateValue = LocalDate.parse("2020-02-26");
                            numberValue = "dignissimos";
                            paramName = "sample param_name";
                            stringValue = "sample string_value";
                        }}),
                    }};
                    decimalPlaces = 1L;
                    postal = "sample postal";
                    state = "sample state";
                    workgroupName = "sample workgroup_name";
                }};;
            }};            

            PutWorkgroupJsonResponse res = sdk.workgroup.putWorkgroupJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putWorkgroupRaw

Update a specific Workgroup

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWorkgroupRawRequest;
import org.openapis.openapi.models.operations.PutWorkgroupRawResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.WorkgroupUpdPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWorkgroupRawRequest req = new PutWorkgroupRawRequest("hic") {{
                requestBody = "distinctio".getBytes();
            }};            

            PutWorkgroupRawResponse res = sdk.workgroup.putWorkgroupRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
