# companySpecificSchema

### Available Operations

* [getCompanySpecificOpenAPIDocumentation](#getcompanyspecificopenapidocumentation) - Get Company-Specific Open API Documentation

## getCompanySpecificOpenAPIDocumentation

The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompanySpecificOpenAPIDocumentationRequest;
import org.openapis.openapi.models.operations.GetCompanySpecificOpenAPIDocumentationResponse;
import org.openapis.openapi.models.operations.GetCompanySpecificOpenAPIDocumentationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompanySpecificOpenAPIDocumentationRequest req = new GetCompanySpecificOpenAPIDocumentationRequest("sapiente", "quo");            

            GetCompanySpecificOpenAPIDocumentationResponse res = sdk.companySpecificSchema.getCompanySpecificOpenAPIDocumentation(req, new GetCompanySpecificOpenAPIDocumentationSecurity("odit") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
