# classifications

### Available Operations

* [getClassifications](#getclassifications) - /classifications/naics_index_entries

## getClassifications

### Get a list of [classifications](https://www.heraldapi.com/docs/classifications) to classify an applicant

Returns an array of classifications, specific to the industries defined by NAICS. Can query by classification description or NAICS code to refine the list.

Read more on [getting classifications](https://www.heraldapi.com/docs/getting-classifications).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsRequest;
import org.openapis.openapi.models.operations.GetClassificationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetClassificationsRequest req = new GetClassificationsRequest() {{
                limit = 2961.4;
                naics2017 = "?naics_2017=611420";
                page = 4808.94;
                search = "dicta";
            }};            

            GetClassificationsResponse res = sdk.classifications.getClassifications(req);

            if (res.getClassifications200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
