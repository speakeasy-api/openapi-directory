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

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest req = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest() {{
                security = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    authorizationPolicyId = "consequuntur";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new AuthorizationPolicyInput() {{
                    action = "ACTION_UNSPECIFIED";
                    description = "voluptatum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ut", "dolorem");
                    }};
                    name = "et";
                    rules = new openapisdk.models.shared.Rule[]() {{
                        add(new Rule() {{
                            destinations = new openapisdk.models.shared.Destination[]() {{
                                add(new Destination() {{
                                    hosts = new String[]() {{
                                        add("totam"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "dolores";
                                        regexMatch = "illum";
                                    }};
                                    methods = new String[]() {{
                                        add("vel"),
                                    }};
                                    ports = new Long[]() {{
                                        add(6303220950515014660),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]() {{
                                        add("aspernatur"),
                                        add("accusantium"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "totam";
                                        regexMatch = "commodi";
                                    }};
                                    methods = new String[]() {{
                                        add("est"),
                                        add("aut"),
                                        add("odit"),
                                    }};
                                    ports = new Long[]() {{
                                        add(167566062957544642),
                                        add(4778690082005258714),
                                        add(1059542851699319360),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]() {{
                                        add("sed"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "officiis";
                                        regexMatch = "autem";
                                    }};
                                    methods = new String[]() {{
                                        add("nobis"),
                                    }};
                                    ports = new Long[]() {{
                                        add(7699391924090763411),
                                    }};
                                }}),
                            }};
                            sources = new openapisdk.models.shared.Source[]() {{
                                add(new Source() {{
                                    ipBlocks = new String[]() {{
                                        add("ipsum"),
                                        add("eveniet"),
                                    }};
                                    principals = new String[]() {{
                                        add("sint"),
                                        add("inventore"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]() {{
                                        add("exercitationem"),
                                        add("aut"),
                                        add("reprehenderit"),
                                    }};
                                    principals = new String[]() {{
                                        add("maiores"),
                                        add("incidunt"),
                                        add("dolor"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]() {{
                                        add("veritatis"),
                                        add("in"),
                                        add("et"),
                                    }};
                                    principals = new String[]() {{
                                        add("ipsum"),
                                        add("ex"),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};
            }};

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesCreate(req);

            if (res.operation.isPresent()) {
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

* `networksecurityProjectsLocationsAuthorizationPoliciesCreate` - Creates a new AuthorizationPolicy in a given project and location.
* `networksecurityProjectsLocationsAuthorizationPoliciesList` - Lists AuthorizationPolicies in a given project and location.
* `networksecurityProjectsLocationsClientTlsPoliciesCreate` - Creates a new ClientTlsPolicy in a given project and location.
* `networksecurityProjectsLocationsClientTlsPoliciesList` - Lists ClientTlsPolicies in a given project and location.
* `networksecurityProjectsLocationsList` - Lists information about the supported locations for this service.
* `networksecurityProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networksecurityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `networksecurityProjectsLocationsServerTlsPoliciesCreate` - Creates a new ServerTlsPolicy in a given project and location.
* `networksecurityProjectsLocationsServerTlsPoliciesDelete` - Deletes a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesGet` - Gets details of a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networksecurityProjectsLocationsServerTlsPoliciesList` - Lists ServerTlsPolicies in a given project and location.
* `networksecurityProjectsLocationsServerTlsPoliciesPatch` - Updates the parameters of a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
