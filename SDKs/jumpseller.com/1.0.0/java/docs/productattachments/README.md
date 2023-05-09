# productAttachments

### Available Operations

* [deleteProductsIdAttachmentsAttachmentIdJson](#deleteproductsidattachmentsattachmentidjson) - Delete a Product Attachment.
* [getProductsIdAttachmentsJson](#getproductsidattachmentsjson) - Retrieve all Product Attachments.
* [getProductsIdAttachmentsCountJson](#getproductsidattachmentscountjson) - Count all Product Attachments.
* [getProductsIdAttachmentsAttachmentIdJson](#getproductsidattachmentsattachmentidjson) - Retrieve a single Product Attachment.
* [postProductsIdAttachmentsJson](#postproductsidattachmentsjson) - Create a new Product Attachment.

## deleteProductsIdAttachmentsAttachmentIdJson

Delete a Product Attachment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductsIdAttachmentsAttachmentIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteProductsIdAttachmentsAttachmentIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProductsIdAttachmentsAttachmentIdJsonRequest req = new DeleteProductsIdAttachmentsAttachmentIdJsonRequest(224317, "maiores", 97844, "ex");            

            DeleteProductsIdAttachmentsAttachmentIdJsonResponse res = sdk.productAttachments.deleteProductsIdAttachmentsAttachmentIdJson(req);

            if (res.deleteProductsIdAttachmentsAttachmentIdJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdAttachmentsJson

Retrieve all Product Attachments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdAttachmentsJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdAttachmentsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdAttachmentsJsonRequest req = new GetProductsIdAttachmentsJsonRequest("nulla", 569211, "voluptatibus");            

            GetProductsIdAttachmentsJsonResponse res = sdk.productAttachments.getProductsIdAttachmentsJson(req);

            if (res.attachments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdAttachmentsCountJson

Count all Product Attachments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdAttachmentsCountJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdAttachmentsCountJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdAttachmentsCountJsonRequest req = new GetProductsIdAttachmentsCountJsonRequest("nostrum", 960835, "quisquam");            

            GetProductsIdAttachmentsCountJsonResponse res = sdk.productAttachments.getProductsIdAttachmentsCountJson(req);

            if (res.count != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProductsIdAttachmentsAttachmentIdJson

Retrieve a single Product Attachment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsIdAttachmentsAttachmentIdJsonRequest;
import org.openapis.openapi.models.operations.GetProductsIdAttachmentsAttachmentIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductsIdAttachmentsAttachmentIdJsonRequest req = new GetProductsIdAttachmentsAttachmentIdJsonRequest(906556, "ea", 774048, "corporis");            

            GetProductsIdAttachmentsAttachmentIdJsonResponse res = sdk.productAttachments.getProductsIdAttachmentsAttachmentIdJson(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProductsIdAttachmentsJson

Create a new Product Attachment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProductsIdAttachmentsJsonRequest;
import org.openapis.openapi.models.operations.PostProductsIdAttachmentsJsonResponse;
import org.openapis.openapi.models.shared.AttachmentEdit;
import org.openapis.openapi.models.shared.AttachmentEditFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProductsIdAttachmentsJsonRequest req = new PostProductsIdAttachmentsJsonRequest(                new AttachmentEdit() {{
                                attachment = new AttachmentEditFields() {{
                                    filename = "veniam";
                                    url = "aliquid";
                                }};;
                            }};, "inventore", 301831, "ea");            

            PostProductsIdAttachmentsJsonResponse res = sdk.productAttachments.postProductsIdAttachmentsJson(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
