# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse;
import org.openapis.openapi.models.shared.AuthorizationPolicyActionEnum;
import org.openapis.openapi.models.shared.AuthorizationPolicyInput;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.HttpHeaderMatch;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    authorizationPolicyId = "unde";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new AuthorizationPolicyInput() {{
                    action = "ALLOW";
                    description = "magnam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "delectus");
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    name = "iusto";
                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                        add(new Rule() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("temporibus"),
                                        add("ab"),
                                        add("quis"),
                                        add("veritatis"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "deserunt";
                                        regexMatch = "perferendis";
                                    }};
                                    methods = new String[]{{
                                        add("repellendus"),
                                        add("sapiente"),
                                    }};
                                    ports = new Long[]{{
                                        add(140350),
                                        add(870013),
                                        add(870088),
                                        add(978619),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("quod"),
                                        add("quod"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "esse";
                                        regexMatch = "totam";
                                    }};
                                    methods = new String[]{{
                                        add("dolorum"),
                                        add("dicta"),
                                        add("nam"),
                                        add("officia"),
                                    }};
                                    ports = new Long[]{{
                                        add(143353),
                                        add(537373),
                                        add(944669),
                                    }};
                                }}),
                            }};
                            sources = new org.openapis.openapi.models.shared.Source[]{{
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("beatae"),
                                        add("commodi"),
                                        add("molestiae"),
                                    }};
                                    principals = new String[]{{
                                        add("qui"),
                                        add("impedit"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("esse"),
                                        add("ipsum"),
                                        add("excepturi"),
                                    }};
                                    principals = new String[]{{
                                        add("perferendis"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("natus"),
                                        add("sed"),
                                    }};
                                    principals = new String[]{{
                                        add("dolor"),
                                        add("natus"),
                                        add("laboriosam"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("saepe"),
                                        add("fuga"),
                                        add("in"),
                                        add("corporis"),
                                    }};
                                    principals = new String[]{{
                                        add("iure"),
                                        add("saepe"),
                                        add("quidem"),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new Rule() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("reiciendis"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "est";
                                        regexMatch = "mollitia";
                                    }};
                                    methods = new String[]{{
                                        add("dolores"),
                                        add("dolorem"),
                                        add("corporis"),
                                    }};
                                    ports = new Long[]{{
                                        add(750686),
                                    }};
                                }}),
                            }};
                            sources = new org.openapis.openapi.models.shared.Source[]{{
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("nemo"),
                                        add("minima"),
                                        add("excepturi"),
                                    }};
                                    principals = new String[]{{
                                        add("iure"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("doloribus"),
                                        add("sapiente"),
                                        add("architecto"),
                                    }};
                                    principals = new String[]{{
                                        add("dolorem"),
                                        add("culpa"),
                                        add("consequuntur"),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new Rule() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("occaecati"),
                                        add("numquam"),
                                        add("commodi"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "quam";
                                        regexMatch = "molestiae";
                                    }};
                                    methods = new String[]{{
                                        add("error"),
                                    }};
                                    ports = new Long[]{{
                                        add(338007),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("laborum"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "animi";
                                        regexMatch = "enim";
                                    }};
                                    methods = new String[]{{
                                        add("quo"),
                                    }};
                                    ports = new Long[]{{
                                        add(949572),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("id"),
                                        add("possimus"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "aut";
                                        regexMatch = "quasi";
                                    }};
                                    methods = new String[]{{
                                        add("temporibus"),
                                        add("laborum"),
                                        add("quasi"),
                                    }};
                                    ports = new Long[]{{
                                        add(976460),
                                        add(878194),
                                        add(468651),
                                        add(509624),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("ipsa"),
                                        add("omnis"),
                                        add("voluptate"),
                                        add("cum"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "perferendis";
                                        regexMatch = "doloremque";
                                    }};
                                    methods = new String[]{{
                                        add("ut"),
                                        add("maiores"),
                                    }};
                                    ports = new Long[]{{
                                        add(359444),
                                    }};
                                }}),
                            }};
                            sources = new org.openapis.openapi.models.shared.Source[]{{
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("dicta"),
                                        add("harum"),
                                    }};
                                    principals = new String[]{{
                                        add("accusamus"),
                                        add("commodi"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("quae"),
                                        add("ipsum"),
                                        add("quidem"),
                                        add("molestias"),
                                    }};
                                    principals = new String[]{{
                                        add("pariatur"),
                                        add("modi"),
                                        add("praesentium"),
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
* `networksecurityProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `networksecurityProjectsLocationsServerTlsPoliciesCreate` - Creates a new ServerTlsPolicy in a given project and location.
* `networksecurityProjectsLocationsServerTlsPoliciesDelete` - Deletes a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesGet` - Gets details of a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networksecurityProjectsLocationsServerTlsPoliciesList` - Lists ServerTlsPolicies in a given project and location.
* `networksecurityProjectsLocationsServerTlsPoliciesPatch` - Updates the parameters of a single ServerTlsPolicy.
* `networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
