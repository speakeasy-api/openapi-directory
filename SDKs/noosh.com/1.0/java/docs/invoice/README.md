# invoice

### Available Operations

* [getInvoice](#getinvoice) - List a specific invoice of project Level
* [getInvoiceFiles](#getinvoicefiles) - List files of invoice Level
* [getInvoices](#getinvoices) - List invoices by a specific order

## getInvoice

List a specific invoice of project Level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvoiceRequest;
import org.openapis.openapi.models.operations.GetInvoiceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInvoiceRequest req = new GetInvoiceRequest("doloremque", "reprehenderit", "ut");            

            GetInvoiceResponse res = sdk.invoice.getInvoice(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInvoiceFiles

List files of invoice Level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvoiceFilesRequest;
import org.openapis.openapi.models.operations.GetInvoiceFilesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInvoiceFilesRequest req = new GetInvoiceFilesRequest("maiores", "dicta", "corporis");            

            GetInvoiceFilesResponse res = sdk.invoice.getInvoiceFiles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInvoices

List invoices by a specific order

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvoicesRequest;
import org.openapis.openapi.models.operations.GetInvoicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInvoicesRequest req = new GetInvoicesRequest("dolore", "iusto", "dicta");            

            GetInvoicesResponse res = sdk.invoice.getInvoices(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
