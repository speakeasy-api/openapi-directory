# pdf

### Available Operations

* [createPDF](#createpdf) - Create PDF
* [getPDF](#getpdf) - Get PDF

## createPDF

Creates a PDF containing the background check results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePDFRequest;
import org.openapis.openapi.models.operations.CreatePDFResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePDFRequest req = new CreatePDFRequest("ut");            

            CreatePDFResponse res = sdk.pdf.createPDF(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPDF

Downloads the PDF in the specified language, Spanish by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPDFRequest;
import org.openapis.openapi.models.operations.GetPDFResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPDFRequest req = new GetPDFRequest("dicta") {{
                lang = "corporis";
            }};            

            GetPDFResponse res = sdk.pdf.getPDF(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
