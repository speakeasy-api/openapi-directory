# contributor

### Available Operations

* [getContributor](#getcontributor) - Contributor Detail
* [listContributor](#listcontributor) - Contributor Collection

## getContributor

Return the content of the selected contributor.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContributorRequest;
import org.openapis.openapi.models.operations.GetContributorResponse;
import org.openapis.openapi.models.operations.GetContributorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContributorRequest req = new GetContributorRequest("deserunt") {{
                aliases = false;
            }};            

            GetContributorResponse res = sdk.contributor.getContributor(req, new GetContributorSecurity("perferendis") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getContributor200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listContributor

Return a collection of Contributors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListContributorRequest;
import org.openapis.openapi.models.operations.ListContributorResponse;
import org.openapis.openapi.models.operations.ListContributorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListContributorRequest req = new ListContributorRequest() {{
                aliases = false;
                limit = 368241;
                updatedAfter = "repellendus";
            }};            

            ListContributorResponse res = sdk.contributor.listContributor(req, new ListContributorSecurity("sapiente") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.listContributor200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
