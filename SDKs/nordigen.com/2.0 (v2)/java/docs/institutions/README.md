# institutions

### Available Operations

* [retrieveAllSupportedInstitutionsInAGivenCountry](#retrieveallsupportedinstitutionsinagivencountry) - List all available institutions
* [retrieveInstitution](#retrieveinstitution) - Get details about a specific Institution

## retrieveAllSupportedInstitutionsInAGivenCountry

List all available institutions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveAllSupportedInstitutionsInAGivenCountryRequest;
import org.openapis.openapi.models.operations.RetrieveAllSupportedInstitutionsInAGivenCountryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveAllSupportedInstitutionsInAGivenCountryRequest req = new RetrieveAllSupportedInstitutionsInAGivenCountryRequest() {{
                country = "Tokelau";
                paymentsEnabled = "odit";
            }};            

            RetrieveAllSupportedInstitutionsInAGivenCountryResponse res = sdk.institutions.retrieveAllSupportedInstitutionsInAGivenCountry(req);

            if (res.integrations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveInstitution

Get details about a specific Institution

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveInstitutionRequest;
import org.openapis.openapi.models.operations.RetrieveInstitutionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    jwtAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            RetrieveInstitutionRequest req = new RetrieveInstitutionRequest("quasi");            

            RetrieveInstitutionResponse res = sdk.institutions.retrieveInstitution(req);

            if (res.integrationRetrieve != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
