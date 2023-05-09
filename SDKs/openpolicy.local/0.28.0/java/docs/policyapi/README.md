# policyAPI

## Overview

Allows you to add, remove and modify policy modules. *Policy module identifiers are only used for management purposes. They are not used outside the Policy API.*

### Available Operations

* [deletePolicyModule](#deletepolicymodule) - Delete a policy module
* [getPolicies](#getpolicies) - List policies
* [getPolicyModule](#getpolicymodule) - Get a policy module
* [putPolicyModule](#putpolicymodule) - Create or update a policy module

## deletePolicyModule

This API endpoint removes an existing policy module from the server

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePolicyModuleRequest;
import org.openapis.openapi.models.operations.DeletePolicyModuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePolicyModuleRequest req = new DeletePolicyModuleRequest("commodi") {{
                pretty = false;
            }};            

            DeletePolicyModuleResponse res = sdk.policyAPI.deletePolicyModule(req);

            if (res.deletePolicyModule200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPolicies

This API endpoint responds with a list of all policy modules on the server (result response)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPoliciesRequest;
import org.openapis.openapi.models.operations.GetPoliciesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPoliciesRequest req = new GetPoliciesRequest() {{
                pretty = false;
            }};            

            GetPoliciesResponse res = sdk.policyAPI.getPolicies(req);

            if (res.twoHundredResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPolicyModule

This API endpoint returns the details of the specified policy module (`{id}`)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPolicyModuleRequest;
import org.openapis.openapi.models.operations.GetPolicyModuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPolicyModuleRequest req = new GetPolicyModuleRequest("molestiae") {{
                pretty = false;
            }};            

            GetPolicyModuleResponse res = sdk.policyAPI.getPolicyModule(req);

            if (res.twoHundredResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPolicyModule

- If the policy module does not exist, it is created.
- If the policy module already exists, it is replaced.

If the policy module isn't correctly defined, a *bad request* (400) response is returned.

### Example policy module
```yaml
package opa.examples

import data.servers
import data.networks
import data.ports

public_servers[server] {
  some k, m
  	server := servers[_]
  	server.ports[_] == ports[k].id
  	ports[k].networks[_] == networks[m].id
  	networks[m].public == true
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPolicyModuleRequest;
import org.openapis.openapi.models.operations.PutPolicyModuleResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPolicyModuleRequest req = new PutPolicyModuleRequest("package opa.examples
            
            import data.servers
            import data.networks
            import data.ports
            
            public_servers[server] {
              some k, m
              	server := servers[_]
              	server.ports[_] == ports[k].id
              	ports[k].networks[_] == networks[m].id
              	networks[m].public == true
            }", "modi") {{
                metrics = false;
                pretty = false;
            }};            

            PutPolicyModuleResponse res = sdk.policyAPI.putPolicyModule(req);

            if (res.twoHundredResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
