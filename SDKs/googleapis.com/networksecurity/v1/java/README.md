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
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthorizationPolicyActionEnum;
import org.openapis.openapi.models.shared.AuthorizationPolicyInput;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.HttpHeaderMatch;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest req = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                authorizationPolicyInput = new AuthorizationPolicyInput() {{
                    action = AuthorizationPolicyActionEnum.DENY;
                    description = "quibusdam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nulla", "corrupti");
                        put("illum", "vel");
                        put("error", "deserunt");
                    }};
                    name = "Willie Gulgowski DVM";
                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                        add(new Rule() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("minus"),
                                        add("placeat"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "voluptatum";
                                        regexMatch = "iusto";
                                    }};
                                    methods = new String[]{{
                                        add("nisi"),
                                        add("recusandae"),
                                        add("temporibus"),
                                    }};
                                    ports = new Long[]{{
                                        add(337396L),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("deserunt"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "perferendis";
                                        regexMatch = "ipsam";
                                    }};
                                    methods = new String[]{{
                                        add("sapiente"),
                                        add("quo"),
                                        add("odit"),
                                        add("at"),
                                    }};
                                    ports = new Long[]{{
                                        add(978619L),
                                        add(473608L),
                                        add(799159L),
                                        add(800911L),
                                    }};
                                }}),
                            }};
                            sources = new org.openapis.openapi.models.shared.Source[]{{
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("porro"),
                                        add("dolorum"),
                                        add("dicta"),
                                    }};
                                    principals = new String[]{{
                                        add("officia"),
                                        add("occaecati"),
                                        add("fugit"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("hic"),
                                        add("optio"),
                                        add("totam"),
                                    }};
                                    principals = new String[]{{
                                        add("commodi"),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new Rule() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("qui"),
                                        add("impedit"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "cum";
                                        regexMatch = "esse";
                                    }};
                                    methods = new String[]{{
                                        add("excepturi"),
                                    }};
                                    ports = new Long[]{{
                                        add(18789L),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("natus"),
                                        add("sed"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "iste";
                                        regexMatch = "dolor";
                                    }};
                                    methods = new String[]{{
                                        add("laboriosam"),
                                        add("hic"),
                                        add("saepe"),
                                    }};
                                    ports = new Long[]{{
                                        add(449950L),
                                        add(359508L),
                                        add(613064L),
                                    }};
                                }}),
                            }};
                            sources = new org.openapis.openapi.models.shared.Source[]{{
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("quidem"),
                                        add("architecto"),
                                        add("ipsa"),
                                        add("reiciendis"),
                                    }};
                                    principals = new String[]{{
                                        add("mollitia"),
                                        add("laborum"),
                                        add("dolores"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("corporis"),
                                    }};
                                    principals = new String[]{{
                                        add("nobis"),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                authorizationPolicyId = "nemo";
                callback = "minima";
                fields = "excepturi";
                key = "accusantium";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "doloribus";
                uploadProtocol = "sapiente";
            }};            

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesCreate(req, new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity("architecto", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [networksecurityProjectsLocationsAuthorizationPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsauthorizationpoliciescreate) - Creates a new AuthorizationPolicy in a given project and location.
* [networksecurityProjectsLocationsAuthorizationPoliciesList](docs/projects/README.md#networksecurityprojectslocationsauthorizationpolicieslist) - Lists AuthorizationPolicies in a given project and location.
* [networksecurityProjectsLocationsClientTlsPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsclienttlspoliciescreate) - Creates a new ClientTlsPolicy in a given project and location.
* [networksecurityProjectsLocationsClientTlsPoliciesList](docs/projects/README.md#networksecurityprojectslocationsclienttlspolicieslist) - Lists ClientTlsPolicies in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypoliciescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesList](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypolicieslist) - Lists GatewaySecurityPolicies in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypoliciesrulescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesRulesList](docs/projects/README.md#networksecurityprojectslocationsgatewaysecuritypoliciesruleslist) - Lists GatewaySecurityPolicyRules in a given project and location.
* [networksecurityProjectsLocationsList](docs/projects/README.md#networksecurityprojectslocationslist) - Lists information about the supported locations for this service.
* [networksecurityProjectsLocationsOperationsCancel](docs/projects/README.md#networksecurityprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networksecurityProjectsLocationsOperationsList](docs/projects/README.md#networksecurityprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networksecurityProjectsLocationsServerTlsPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciescreate) - Creates a new ServerTlsPolicy in a given project and location.
* [networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networksecurityProjectsLocationsServerTlsPoliciesList](docs/projects/README.md#networksecurityprojectslocationsservertlspolicieslist) - Lists ServerTlsPolicies in a given project and location.
* [networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions](docs/projects/README.md#networksecurityprojectslocationsservertlspoliciestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [networksecurityProjectsLocationsTlsInspectionPoliciesCreate](docs/projects/README.md#networksecurityprojectslocationstlsinspectionpoliciescreate) - Creates a new TlsInspectionPolicy in a given project and location.
* [networksecurityProjectsLocationsTlsInspectionPoliciesList](docs/projects/README.md#networksecurityprojectslocationstlsinspectionpolicieslist) - Lists TlsInspectionPolicies in a given project and location.
* [networksecurityProjectsLocationsUrlListsCreate](docs/projects/README.md#networksecurityprojectslocationsurllistscreate) - Creates a new UrlList in a given project and location.
* [networksecurityProjectsLocationsUrlListsDelete](docs/projects/README.md#networksecurityprojectslocationsurllistsdelete) - Deletes a single UrlList.
* [networksecurityProjectsLocationsUrlListsGet](docs/projects/README.md#networksecurityprojectslocationsurllistsget) - Gets details of a single UrlList.
* [networksecurityProjectsLocationsUrlListsList](docs/projects/README.md#networksecurityprojectslocationsurllistslist) - Lists UrlLists in a given project and location.
* [networksecurityProjectsLocationsUrlListsPatch](docs/projects/README.md#networksecurityprojectslocationsurllistspatch) - Updates the parameters of a single UrlList.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
