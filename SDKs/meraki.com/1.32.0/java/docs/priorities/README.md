# priorities

### Available Operations

* [getOrganizationBrandingPoliciesPriorities](#getorganizationbrandingpoliciespriorities) - Return the branding policy IDs of an organization in priority order
* [updateOrganizationBrandingPoliciesPriorities](#updateorganizationbrandingpoliciespriorities) - Update the priority ordering of an organization's branding policies.

## getOrganizationBrandingPoliciesPriorities

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationBrandingPoliciesPrioritiesRequest;
import org.openapis.openapi.models.operations.GetOrganizationBrandingPoliciesPrioritiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationBrandingPoliciesPrioritiesRequest req = new GetOrganizationBrandingPoliciesPrioritiesRequest("ad");            

            GetOrganizationBrandingPoliciesPrioritiesResponse res = sdk.priorities.getOrganizationBrandingPoliciesPriorities(req);

            if (res.getOrganizationBrandingPoliciesPriorities200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationBrandingPoliciesPriorities

Update the priority ordering of an organization's branding policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationBrandingPoliciesPrioritiesRequest req = new UpdateOrganizationBrandingPoliciesPrioritiesRequest("illum") {{
                requestBody = new UpdateOrganizationBrandingPoliciesPrioritiesRequestBody() {{
                    brandingPolicyIds = new String[]{{
                        add("odio"),
                        add("rerum"),
                        add("aut"),
                    }};
                }};;
            }};            

            UpdateOrganizationBrandingPoliciesPrioritiesResponse res = sdk.priorities.updateOrganizationBrandingPoliciesPriorities(req);

            if (res.updateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
