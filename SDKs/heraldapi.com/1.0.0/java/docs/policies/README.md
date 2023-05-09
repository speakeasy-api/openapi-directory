# policies

### Available Operations

* [getPoliciesPolicyId](#getpoliciespolicyid) - /policies/{policy_id}
* [postPolicies](#postpolicies) - /policies

## getPoliciesPolicyId

### Get a policy
Get the latest details for a specific policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPoliciesPolicyIdRequest;
import org.openapis.openapi.models.operations.GetPoliciesPolicyIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetPoliciesPolicyIdRequest req = new GetPoliciesPolicyIdRequest("magnam");            

            GetPoliciesPolicyIdResponse res = sdk.policies.getPoliciesPolicyId(req);

            if (res.getPoliciesPolicyId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPolicies

### Bind a policy
Take a quote and bind it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPoliciesRequestBody;
import org.openapis.openapi.models.operations.PostPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PostPoliciesRequestBody req = new PostPoliciesRequestBody() {{
                quoteId = "d66ae395-efb9-4ba8-8f3a-66997074ba44";
            }};            

            PostPoliciesResponse res = sdk.policies.postPolicies(req);

            if (res.postPolicies200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
