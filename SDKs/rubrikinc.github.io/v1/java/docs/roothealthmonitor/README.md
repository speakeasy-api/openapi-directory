# rootHealthMonitor

## Overview

Health monitor operations.

### Available Operations

* [getPolicies](#getpolicies) - Get details of health monitor policies
* [getPolicyStatus](#getpolicystatus) - Get the status of health monitor policy enforcement
* [runPolicies](#runpolicies) - Enforce health monitor policies

## getPolicies

Retrieves the details of all the health monitor policies when policy IDs are not specified in the query parameter. If the request includes a list of policy IDs in the query parameter, the response will include the details of the specified policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPoliciesRequest;
import org.openapis.openapi.models.operations.GetPoliciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nesciunt", "quae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetPoliciesRequest req = new GetPoliciesRequest() {{
                policyIds = new String[]{{
                    add("omnis"),
                    add("quaerat"),
                    add("molestiae"),
                    add("ex"),
                }};
            }};            

            GetPoliciesResponse res = sdk.rootHealthMonitor.getPolicies(req);

            if (res.healthMonitorPolicies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPolicyStatus

Retrieves the status of the policy enforcement for a list of nodes if specified. If nodes are not specified, the response includes the policy enforcement status for all the nodes on the Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPolicyStatusRequest;
import org.openapis.openapi.models.operations.GetPolicyStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ut", "culpa") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetPolicyStatusRequest req = new GetPolicyStatusRequest() {{
                hasDetailedStatus = false;
                nodeIds = new String[]{{
                    add("debitis"),
                }};
                policyIds = new String[]{{
                    add("eum"),
                    add("nemo"),
                    add("recusandae"),
                }};
            }};            

            GetPolicyStatusResponse res = sdk.rootHealthMonitor.getPolicyStatus(req);

            if (res.nodePolicyCheckResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runPolicies

Triggers on-demand enforcement of the set of policies specified in the request body. If a list of nodes is provided, policies are run against these nodes, otherwise the policies are run on all active nodes of the Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunPoliciesResponse;
import org.openapis.openapi.models.shared.RunPolicyArg;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("esse", "provident") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.RunPolicyArg req = new RunPolicyArg(                new String[]{{
                                add("eum"),
                                add("reiciendis"),
                            }}) {{
                nodeIds = new String[]{{
                    add("aspernatur"),
                    add("ullam"),
                    add("quasi"),
                }};
            }};            

            RunPoliciesResponse res = sdk.rootHealthMonitor.runPolicies(req);

            if (res.nodePolicyCheckResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
