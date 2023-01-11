# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            RuntimeconfigProjectsConfigsCreateRequest req = new RuntimeconfigProjectsConfigsCreateRequest() {{
                security = new RuntimeconfigProjectsConfigsCreateSecurity() {{
                    option1 = new RuntimeconfigProjectsConfigsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new RuntimeconfigProjectsConfigsCreatePathParams() {{
                    parent = "voluptate";
                }};
                queryParams = new RuntimeconfigProjectsConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "molestiae";
                    alt = "proto";
                    callback = "repudiandae";
                    fields = "laborum";
                    key = "ipsam";
                    oauthToken = "pariatur";
                    prettyPrint = false;
                    quotaUser = "impedit";
                    requestId = "consequatur";
                    uploadType = "voluptatem";
                    uploadProtocol = "dolores";
                }};
                request = new RuntimeConfig() {{
                    description = "molestias";
                    name = "expedita";
                }};
            }};

            RuntimeconfigProjectsConfigsCreateResponse res = sdk.projects.runtimeconfigProjectsConfigsCreate(req);

            if (res.runtimeConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `runtimeconfigProjectsConfigsCreate` - Creates a new RuntimeConfig resource. The configuration name must be unique within project.
* `runtimeconfigProjectsConfigsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `runtimeconfigProjectsConfigsList` - Lists all the RuntimeConfig resources within project.
* `runtimeconfigProjectsConfigsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `runtimeconfigProjectsConfigsVariablesCreate` - Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.
* `runtimeconfigProjectsConfigsVariablesList` - Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.
* `runtimeconfigProjectsConfigsVariablesUpdate` - Updates an existing variable with a new value.
* `runtimeconfigProjectsConfigsVariablesWatch` - Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.
* `runtimeconfigProjectsConfigsWaitersCreate` - Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
* `runtimeconfigProjectsConfigsWaitersDelete` - Deletes the waiter with the specified name.
* `runtimeconfigProjectsConfigsWaitersGet` - Gets information about a single waiter.
* `runtimeconfigProjectsConfigsWaitersList` - List waiters within the given configuration.
* `runtimeconfigProjectsConfigsWaitersTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
