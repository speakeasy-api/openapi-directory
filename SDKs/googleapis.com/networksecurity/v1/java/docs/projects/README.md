# projects

### Available Operations

* [networksecurityProjectsLocationsAuthorizationPoliciesCreate](#networksecurityprojectslocationsauthorizationpoliciescreate) - Creates a new AuthorizationPolicy in a given project and location.
* [networksecurityProjectsLocationsAuthorizationPoliciesList](#networksecurityprojectslocationsauthorizationpolicieslist) - Lists AuthorizationPolicies in a given project and location.
* [networksecurityProjectsLocationsClientTlsPoliciesCreate](#networksecurityprojectslocationsclienttlspoliciescreate) - Creates a new ClientTlsPolicy in a given project and location.
* [networksecurityProjectsLocationsClientTlsPoliciesList](#networksecurityprojectslocationsclienttlspolicieslist) - Lists ClientTlsPolicies in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesCreate](#networksecurityprojectslocationsgatewaysecuritypoliciescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesList](#networksecurityprojectslocationsgatewaysecuritypolicieslist) - Lists GatewaySecurityPolicies in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate](#networksecurityprojectslocationsgatewaysecuritypoliciesrulescreate) - Creates a new GatewaySecurityPolicy in a given project and location.
* [networksecurityProjectsLocationsGatewaySecurityPoliciesRulesList](#networksecurityprojectslocationsgatewaysecuritypoliciesruleslist) - Lists GatewaySecurityPolicyRules in a given project and location.
* [networksecurityProjectsLocationsList](#networksecurityprojectslocationslist) - Lists information about the supported locations for this service.
* [networksecurityProjectsLocationsOperationsCancel](#networksecurityprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [networksecurityProjectsLocationsOperationsList](#networksecurityprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [networksecurityProjectsLocationsServerTlsPoliciesCreate](#networksecurityprojectslocationsservertlspoliciescreate) - Creates a new ServerTlsPolicy in a given project and location.
* [networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy](#networksecurityprojectslocationsservertlspoliciesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [networksecurityProjectsLocationsServerTlsPoliciesList](#networksecurityprojectslocationsservertlspolicieslist) - Lists ServerTlsPolicies in a given project and location.
* [networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy](#networksecurityprojectslocationsservertlspoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions](#networksecurityprojectslocationsservertlspoliciestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [networksecurityProjectsLocationsTlsInspectionPoliciesCreate](#networksecurityprojectslocationstlsinspectionpoliciescreate) - Creates a new TlsInspectionPolicy in a given project and location.
* [networksecurityProjectsLocationsTlsInspectionPoliciesList](#networksecurityprojectslocationstlsinspectionpolicieslist) - Lists TlsInspectionPolicies in a given project and location.
* [networksecurityProjectsLocationsUrlListsCreate](#networksecurityprojectslocationsurllistscreate) - Creates a new UrlList in a given project and location.
* [networksecurityProjectsLocationsUrlListsDelete](#networksecurityprojectslocationsurllistsdelete) - Deletes a single UrlList.
* [networksecurityProjectsLocationsUrlListsGet](#networksecurityprojectslocationsurllistsget) - Gets details of a single UrlList.
* [networksecurityProjectsLocationsUrlListsList](#networksecurityprojectslocationsurllistslist) - Lists UrlLists in a given project and location.
* [networksecurityProjectsLocationsUrlListsPatch](#networksecurityprojectslocationsurllistspatch) - Updates the parameters of a single UrlList.

## networksecurityProjectsLocationsAuthorizationPoliciesCreate

Creates a new AuthorizationPolicy in a given project and location.

### Example Usage

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

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest req = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                authorizationPolicyInput = new AuthorizationPolicyInput() {{
                    action = AuthorizationPolicyActionEnum.ACTION_UNSPECIFIED;
                    description = "repellat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("occaecati", "numquam");
                        put("commodi", "quam");
                        put("molestiae", "velit");
                    }};
                    name = "Miss Eugene Hauck";
                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                        add(new Rule() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("sequi"),
                                        add("tenetur"),
                                        add("ipsam"),
                                        add("id"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "possimus";
                                        regexMatch = "aut";
                                    }};
                                    methods = new String[]{{
                                        add("error"),
                                    }};
                                    ports = new Long[]{{
                                        add(673660L),
                                        add(96098L),
                                        add(971945L),
                                        add(976460L),
                                    }};
                                }}),
                            }};
                            sources = new org.openapis.openapi.models.shared.Source[]{{
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("praesentium"),
                                        add("voluptatibus"),
                                    }};
                                    principals = new String[]{{
                                        add("omnis"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("cum"),
                                        add("perferendis"),
                                    }};
                                    principals = new String[]{{
                                        add("reprehenderit"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("maiores"),
                                        add("dicta"),
                                    }};
                                    principals = new String[]{{
                                        add("dolore"),
                                        add("iusto"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("harum"),
                                    }};
                                    principals = new String[]{{
                                        add("accusamus"),
                                        add("commodi"),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new Rule() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("ipsum"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "quidem";
                                        regexMatch = "molestias";
                                    }};
                                    methods = new String[]{{
                                        add("pariatur"),
                                        add("modi"),
                                        add("praesentium"),
                                    }};
                                    ports = new Long[]{{
                                        add(916723L),
                                        add(93940L),
                                        add(921158L),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("veritatis"),
                                        add("itaque"),
                                        add("incidunt"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "enim";
                                        regexMatch = "consequatur";
                                    }};
                                    methods = new String[]{{
                                        add("quibusdam"),
                                        add("explicabo"),
                                        add("deserunt"),
                                    }};
                                    ports = new Long[]{{
                                        add(841386L),
                                        add(289406L),
                                        add(264730L),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("aliquid"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "cupiditate";
                                        regexMatch = "quos";
                                    }};
                                    methods = new String[]{{
                                        add("magni"),
                                    }};
                                    ports = new Long[]{{
                                        add(369808L),
                                        add(4695L),
                                        add(146441L),
                                        add(677817L),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("tempora"),
                                        add("facilis"),
                                        add("tempore"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "labore";
                                        regexMatch = "delectus";
                                    }};
                                    methods = new String[]{{
                                        add("non"),
                                        add("eligendi"),
                                    }};
                                    ports = new Long[]{{
                                        add(396098L),
                                        add(592042L),
                                        add(896039L),
                                    }};
                                }}),
                            }};
                            sources = new org.openapis.openapi.models.shared.Source[]{{
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("dolor"),
                                        add("debitis"),
                                        add("a"),
                                    }};
                                    principals = new String[]{{
                                        add("in"),
                                        add("in"),
                                        add("illum"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("rerum"),
                                        add("dicta"),
                                        add("magnam"),
                                        add("cumque"),
                                    }};
                                    principals = new String[]{{
                                        add("ea"),
                                        add("aliquid"),
                                        add("laborum"),
                                        add("accusamus"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("occaecati"),
                                    }};
                                    principals = new String[]{{
                                        add("accusamus"),
                                        add("delectus"),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                authorizationPolicyId = "nam";
                callback = "id";
                fields = "blanditiis";
                key = "deleniti";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "deserunt";
                uploadProtocol = "nisi";
            }};            

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesCreate(req, new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity("vel", "natus") {{
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

## networksecurityProjectsLocationsAuthorizationPoliciesList

Lists AuthorizationPolicies in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest req = new NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "distinctio";
                key = "id";
                oauthToken = "labore";
                pageSize = 290077L;
                pageToken = "suscipit";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "nobis";
                uploadProtocol = "eum";
            }};            

            NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse res = sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesList(req, new NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity("vero", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAuthorizationPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsClientTlsPoliciesCreate

Creates a new ClientTlsPolicy in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateProviderInstance;
import org.openapis.openapi.models.shared.ClientTlsPolicyInput;
import org.openapis.openapi.models.shared.GoogleCloudNetworksecurityV1CertificateProvider;
import org.openapis.openapi.models.shared.GoogleCloudNetworksecurityV1GrpcEndpoint;
import org.openapis.openapi.models.shared.ValidationCA;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest req = new NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                clientTlsPolicyInput = new ClientTlsPolicyInput() {{
                    clientCertificate = new GoogleCloudNetworksecurityV1CertificateProvider() {{
                        certificateProviderInstance = new CertificateProviderInstance() {{
                            pluginInstance = "et";
                        }};;
                        grpcEndpoint = new GoogleCloudNetworksecurityV1GrpcEndpoint() {{
                            targetUri = "excepturi";
                        }};;
                    }};;
                    description = "ullam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quos", "sint");
                        put("accusantium", "mollitia");
                        put("reiciendis", "mollitia");
                    }};
                    name = "Natalie Ernser";
                    serverValidationCa = new org.openapis.openapi.models.shared.ValidationCA[]{{
                        add(new ValidationCA() {{
                            certificateProviderInstance = new CertificateProviderInstance() {{
                                pluginInstance = "quasi";
                            }};
                            grpcEndpoint = new GoogleCloudNetworksecurityV1GrpcEndpoint() {{
                                targetUri = "iure";
                            }};
                        }}),
                        add(new ValidationCA() {{
                            certificateProviderInstance = new CertificateProviderInstance() {{
                                pluginInstance = "doloribus";
                            }};
                            grpcEndpoint = new GoogleCloudNetworksecurityV1GrpcEndpoint() {{
                                targetUri = "debitis";
                            }};
                        }}),
                    }};
                    sni = "eius";
                }};;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                clientTlsPolicyId = "in";
                fields = "architecto";
                key = "architecto";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "expedita";
                uploadProtocol = "nihil";
            }};            

            NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsClientTlsPoliciesCreate(req, new NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity("repellat", "quibusdam") {{
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

## networksecurityProjectsLocationsClientTlsPoliciesList

Lists ClientTlsPolicies in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsClientTlsPoliciesListRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsClientTlsPoliciesListResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsClientTlsPoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsClientTlsPoliciesListRequest req = new NetworksecurityProjectsLocationsClientTlsPoliciesListRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "praesentium";
                key = "natus";
                oauthToken = "magni";
                pageSize = 123820L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "pariatur";
                uploadProtocol = "maxime";
            }};            

            NetworksecurityProjectsLocationsClientTlsPoliciesListResponse res = sdk.projects.networksecurityProjectsLocationsClientTlsPoliciesList(req, new NetworksecurityProjectsLocationsClientTlsPoliciesListSecurity("ea", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listClientTlsPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsGatewaySecurityPoliciesCreate

Creates a new GatewaySecurityPolicy in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GatewaySecurityPolicyInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest req = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest("odit") {{
                dollarXgafv = XgafvEnum.ONE;
                gatewaySecurityPolicyInput = new GatewaySecurityPolicyInput() {{
                    description = "accusantium";
                    name = "Ebony Predovic";
                    tlsInspectionPolicy = "autem";
                }};;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "nemo";
                gatewaySecurityPolicyId = "voluptatibus";
                key = "perferendis";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "aut";
                uploadProtocol = "cumque";
            }};            

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsGatewaySecurityPoliciesCreate(req, new NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateSecurity("corporis", "hic") {{
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

## networksecurityProjectsLocationsGatewaySecurityPoliciesList

Lists GatewaySecurityPolicies in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesListRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesListResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesListRequest req = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesListRequest("libero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolores";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "dignissimos";
                key = "eaque";
                oauthToken = "quis";
                pageSize = 199996L;
                pageToken = "eos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "dolores";
                uploadProtocol = "minus";
            }};            

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesListResponse res = sdk.projects.networksecurityProjectsLocationsGatewaySecurityPoliciesList(req, new NetworksecurityProjectsLocationsGatewaySecurityPoliciesListSecurity("quam", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGatewaySecurityPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate

Creates a new GatewaySecurityPolicy in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GatewaySecurityPolicyRuleBasicProfileEnum;
import org.openapis.openapi.models.shared.GatewaySecurityPolicyRuleInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateRequest req = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                gatewaySecurityPolicyRuleInput = new GatewaySecurityPolicyRuleInput() {{
                    applicationMatcher = "hic";
                    basicProfile = GatewaySecurityPolicyRuleBasicProfileEnum.DENY;
                    description = "omnis";
                    enabled = false;
                    name = "Freddie Bartoletti";
                    priority = 500026;
                    sessionMatcher = "error";
                    tlsInspectionEnabled = false;
                }};;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "adipisci";
                gatewaySecurityPolicyRuleId = "asperiores";
                key = "earum";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolorum";
                uploadProtocol = "deleniti";
            }};            

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateResponse res = sdk.projects.networksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate(req, new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateSecurity("pariatur", "provident") {{
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

## networksecurityProjectsLocationsGatewaySecurityPoliciesRulesList

Lists GatewaySecurityPolicyRules in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListRequest req = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "aliquid";
                key = "dolorem";
                oauthToken = "dolorem";
                pageSize = 222443L;
                pageToken = "qui";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "hic";
                uploadProtocol = "excepturi";
            }};            

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListResponse res = sdk.projects.networksecurityProjectsLocationsGatewaySecurityPoliciesRulesList(req, new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListSecurity("cum", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGatewaySecurityPolicyRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsListRequest req = new NetworksecurityProjectsLocationsListRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "veritatis";
                filter = "ipsa";
                key = "ipsa";
                oauthToken = "iure";
                pageSize = 487838L;
                pageToken = "quaerat";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "quidem";
                uploadProtocol = "voluptatibus";
            }};            

            NetworksecurityProjectsLocationsListResponse res = sdk.projects.networksecurityProjectsLocationsList(req, new NetworksecurityProjectsLocationsListSecurity("voluptas", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsOperationsCancelRequest req = new NetworksecurityProjectsLocationsOperationsCancelRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("fugiat", "ab");
                }};
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "voluptate";
                key = "dolorum";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "necessitatibus";
                uploadProtocol = "distinctio";
            }};            

            NetworksecurityProjectsLocationsOperationsCancelResponse res = sdk.projects.networksecurityProjectsLocationsOperationsCancel(req, new NetworksecurityProjectsLocationsOperationsCancelSecurity("asperiores", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsOperationsListRequest req = new NetworksecurityProjectsLocationsOperationsListRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "aspernatur";
                filter = "perferendis";
                key = "amet";
                oauthToken = "optio";
                pageSize = 881586L;
                pageToken = "ad";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "suscipit";
                uploadProtocol = "deserunt";
            }};            

            NetworksecurityProjectsLocationsOperationsListResponse res = sdk.projects.networksecurityProjectsLocationsOperationsList(req, new NetworksecurityProjectsLocationsOperationsListSecurity("provident", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsServerTlsPoliciesCreate

Creates a new ServerTlsPolicy in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateProviderInstance;
import org.openapis.openapi.models.shared.GoogleCloudNetworksecurityV1CertificateProvider;
import org.openapis.openapi.models.shared.GoogleCloudNetworksecurityV1GrpcEndpoint;
import org.openapis.openapi.models.shared.MTLSPolicy;
import org.openapis.openapi.models.shared.MTLSPolicyClientValidationModeEnum;
import org.openapis.openapi.models.shared.ServerTlsPolicyInput;
import org.openapis.openapi.models.shared.ValidationCA;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest req = new NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                serverTlsPolicyInput = new ServerTlsPolicyInput() {{
                    allowOpen = false;
                    description = "similique";
                    labels = new java.util.HashMap<String, String>() {{
                        put("at", "quaerat");
                    }};
                    mtlsPolicy = new MTLSPolicy() {{
                        clientValidationCa = new org.openapis.openapi.models.shared.ValidationCA[]{{
                            add(new ValidationCA() {{
                                certificateProviderInstance = new CertificateProviderInstance() {{
                                    pluginInstance = "vel";
                                }};
                                grpcEndpoint = new GoogleCloudNetworksecurityV1GrpcEndpoint() {{
                                    targetUri = "quod";
                                }};
                            }}),
                            add(new ValidationCA() {{
                                certificateProviderInstance = new CertificateProviderInstance() {{
                                    pluginInstance = "officiis";
                                }};
                                grpcEndpoint = new GoogleCloudNetworksecurityV1GrpcEndpoint() {{
                                    targetUri = "qui";
                                }};
                            }}),
                        }};
                        clientValidationMode = MTLSPolicyClientValidationModeEnum.REJECT_INVALID;
                        clientValidationTrustConfig = "a";
                    }};;
                    name = "Fannie Kub";
                    serverCertificate = new GoogleCloudNetworksecurityV1CertificateProvider() {{
                        certificateProviderInstance = new CertificateProviderInstance() {{
                            pluginInstance = "tenetur";
                        }};;
                        grpcEndpoint = new GoogleCloudNetworksecurityV1GrpcEndpoint() {{
                            targetUri = "amet";
                        }};;
                    }};;
                }};;
                accessToken = "tempore";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "enim";
                key = "dolorem";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "totam";
                serverTlsPolicyId = "nihil";
                uploadType = "sit";
                uploadProtocol = "expedita";
            }};            

            NetworksecurityProjectsLocationsServerTlsPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsServerTlsPoliciesCreate(req, new NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity("neque", "sed") {{
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

## networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyRequest req = new NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "ipsum";
                key = "incidunt";
                oauthToken = "qui";
                optionsRequestedPolicyVersion = 586784L;
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "pariatur";
                uploadProtocol = "soluta";
            }};            

            NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyResponse res = sdk.projects.networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy(req, new NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicySecurity("dicta", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsServerTlsPoliciesList

Lists ServerTlsPolicies in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesListRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesListResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsServerTlsPoliciesListRequest req = new NetworksecurityProjectsLocationsServerTlsPoliciesListRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "facilis";
                key = "aliquid";
                oauthToken = "quam";
                pageSize = 565421L;
                pageToken = "temporibus";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "neque";
                uploadProtocol = "fugit";
            }};            

            NetworksecurityProjectsLocationsServerTlsPoliciesListResponse res = sdk.projects.networksecurityProjectsLocationsServerTlsPoliciesList(req, new NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity("magni", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listServerTlsPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.GoogleIamV1AuditConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.GoogleIamV1Binding;
import org.openapis.openapi.models.shared.GoogleIamV1Policy;
import org.openapis.openapi.models.shared.GoogleIamV1SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest req = new NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest("sunt") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("cumque"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("et"),
                                            add("saepe"),
                                            add("ipsum"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quos"),
                                            add("tempore"),
                                            add("cupiditate"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolorem"),
                                            add("dolore"),
                                            add("labore"),
                                            add("adipisci"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "architecto";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quas"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "consequatur";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("porro"),
                                            add("doloribus"),
                                            add("ut"),
                                            add("facilis"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quae"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("occaecati"),
                                            add("voluptatibus"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "vero";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new Expr() {{
                                    description = "quis";
                                    expression = "ipsum";
                                    location = "delectus";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("vero"),
                                }};
                                role = "tenetur";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new Expr() {{
                                    description = "dignissimos";
                                    expression = "hic";
                                    location = "distinctio";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("similique"),
                                    add("facilis"),
                                }};
                                role = "vero";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new Expr() {{
                                    description = "ducimus";
                                    expression = "dolore";
                                    location = "quibusdam";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("natus"),
                                }};
                                role = "impedit";
                            }}),
                        }};
                        etag = "aut";
                        version = 974259;
                    }};;
                    updateMask = "exercitationem";
                }};;
                accessToken = "nulla";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "maiores";
                key = "doloribus";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "ducimus";
                uploadProtocol = "alias";
            }};            

            NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse res = sdk.projects.networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy(req, new NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicySecurity("officia", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest req = new NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("vel"),
                    }};
                }};;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "ratione";
                fields = "ex";
                key = "laudantium";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "maiores";
                uploadProtocol = "quasi";
            }};            

            NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse res = sdk.projects.networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions(req, new NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity("ex", "nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1TestIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsTlsInspectionPoliciesCreate

Creates a new TlsInspectionPolicy in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TlsInspectionPolicyInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateRequest req = new NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                tlsInspectionPolicyInput = new TlsInspectionPolicyInput() {{
                    caPool = "nostrum";
                    description = "sapiente";
                    name = "Elbert Jenkins";
                }};;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "magnam";
                key = "ea";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "consectetur";
                tlsInspectionPolicyId = "recusandae";
                uploadType = "aspernatur";
                uploadProtocol = "minima";
            }};            

            NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsTlsInspectionPoliciesCreate(req, new NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateSecurity("eaque", "a") {{
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

## networksecurityProjectsLocationsTlsInspectionPoliciesList

Lists TlsInspectionPolicies in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesListRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesListResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsTlsInspectionPoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsTlsInspectionPoliciesListRequest req = new NetworksecurityProjectsLocationsTlsInspectionPoliciesListRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "aliquam";
                key = "fugit";
                oauthToken = "accusamus";
                pageSize = 79522L;
                pageToken = "non";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "dolorum";
                uploadProtocol = "laborum";
            }};            

            NetworksecurityProjectsLocationsTlsInspectionPoliciesListResponse res = sdk.projects.networksecurityProjectsLocationsTlsInspectionPoliciesList(req, new NetworksecurityProjectsLocationsTlsInspectionPoliciesListSecurity("placeat", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTlsInspectionPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsUrlListsCreate

Creates a new UrlList in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsCreateRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsCreateResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UrlListInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsUrlListsCreateRequest req = new NetworksecurityProjectsLocationsUrlListsCreateRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                urlListInput = new UrlListInput() {{
                    description = "nobis";
                    name = "Mack Stoltenberg";
                    values = new String[]{{
                        add("tempora"),
                    }};
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "provident";
                fields = "ipsa";
                key = "molestiae";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "eius";
                uploadProtocol = "esse";
                urlListId = "esse";
            }};            

            NetworksecurityProjectsLocationsUrlListsCreateResponse res = sdk.projects.networksecurityProjectsLocationsUrlListsCreate(req, new NetworksecurityProjectsLocationsUrlListsCreateSecurity("rem", "fuga") {{
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

## networksecurityProjectsLocationsUrlListsDelete

Deletes a single UrlList.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsDeleteRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsDeleteResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsUrlListsDeleteRequest req = new NetworksecurityProjectsLocationsUrlListsDeleteRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "suscipit";
                force = false;
                key = "assumenda";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "quisquam";
                uploadProtocol = "veritatis";
            }};            

            NetworksecurityProjectsLocationsUrlListsDeleteResponse res = sdk.projects.networksecurityProjectsLocationsUrlListsDelete(req, new NetworksecurityProjectsLocationsUrlListsDeleteSecurity("ipsa", "id") {{
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

## networksecurityProjectsLocationsUrlListsGet

Gets details of a single UrlList.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsGetRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsGetResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsUrlListsGetRequest req = new NetworksecurityProjectsLocationsUrlListsGetRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "fuga";
                key = "eius";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "ab";
                uploadProtocol = "cupiditate";
            }};            

            NetworksecurityProjectsLocationsUrlListsGetResponse res = sdk.projects.networksecurityProjectsLocationsUrlListsGet(req, new NetworksecurityProjectsLocationsUrlListsGetSecurity("consequatur", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.urlList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsUrlListsList

Lists UrlLists in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsListRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsListResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsUrlListsListRequest req = new NetworksecurityProjectsLocationsUrlListsListRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "esse";
                key = "recusandae";
                oauthToken = "aperiam";
                pageSize = 715179L;
                pageToken = "quod";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "inventore";
                uploadProtocol = "nihil";
            }};            

            NetworksecurityProjectsLocationsUrlListsListResponse res = sdk.projects.networksecurityProjectsLocationsUrlListsList(req, new NetworksecurityProjectsLocationsUrlListsListSecurity("totam", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listUrlListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsUrlListsPatch

Updates the parameters of a single UrlList.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsPatchRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsPatchResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsUrlListsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UrlListInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsUrlListsPatchRequest req = new NetworksecurityProjectsLocationsUrlListsPatchRequest("aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                urlListInput = new UrlListInput() {{
                    description = "occaecati";
                    name = "Miranda Daniel";
                    values = new String[]{{
                        add("porro"),
                    }};
                }};;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                fields = "consequuntur";
                key = "deleniti";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "fuga";
                updateMask = "mollitia";
                uploadType = "incidunt";
                uploadProtocol = "atque";
            }};            

            NetworksecurityProjectsLocationsUrlListsPatchResponse res = sdk.projects.networksecurityProjectsLocationsUrlListsPatch(req, new NetworksecurityProjectsLocationsUrlListsPatchSecurity("explicabo", "minima") {{
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
