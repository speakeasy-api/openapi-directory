<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAdditionalTaxIdentifierPathParams;
import org.openapis.openapi.models.operations.CreateAdditionalTaxIdentifierRequest;
import org.openapis.openapi.models.operations.CreateAdditionalTaxIdentifierResponse;
import org.openapis.openapi.models.shared.AdditionalTaxIdentifierCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = new SchemeBearer() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateAdditionalTaxIdentifierRequest req = new CreateAdditionalTaxIdentifierRequest() {{
                pathParams = new CreateAdditionalTaxIdentifierPathParams() {{
                    legalEntityId = 548814;
                }};
                request = new AdditionalTaxIdentifierCreate() {{
                    country = "Montenegro";
                    county = "distinctio";
                    identifier = "quibusdam";
                    scheme = "unde";
                    superscheme = "nulla";
                    thirdPartyPassword = "corrupti";
                    thirdPartyUsername = "illum";
                }};
            }};            

            CreateAdditionalTaxIdentifierResponse res = sdk.additionalTaxIdentifiers.createAdditionalTaxIdentifier(req);

            if (res.additionalTaxIdentifier.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->