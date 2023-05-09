# projects

### Available Operations

* [networksecurityProjectsLocationsAddressGroupsAddItems](#networksecurityprojectslocationsaddressgroupsadditems) - Adds items to an address group.
* [networksecurityProjectsLocationsAddressGroupsCloneItems](#networksecurityprojectslocationsaddressgroupscloneitems) - Clones items from one address group to another.
* [networksecurityProjectsLocationsAddressGroupsCreate](#networksecurityprojectslocationsaddressgroupscreate) - Creates a new address group in a given project and location.
* [networksecurityProjectsLocationsAddressGroupsList](#networksecurityprojectslocationsaddressgroupslist) - Lists address groups in a given project and location.
* [networksecurityProjectsLocationsAddressGroupsListReferences](#networksecurityprojectslocationsaddressgroupslistreferences) - Lists references of an address group.
* [networksecurityProjectsLocationsAddressGroupsRemoveItems](#networksecurityprojectslocationsaddressgroupsremoveitems) - Removes items from an address group.
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

## networksecurityProjectsLocationsAddressGroupsAddItems

Adds items to an address group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity;
import org.openapis.openapi.models.shared.AddAddressGroupItemsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest req = new NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest("suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                addAddressGroupItemsRequest = new AddAddressGroupItemsRequest() {{
                    items = new String[]{{
                        add("placeat"),
                        add("voluptatum"),
                        add("iusto"),
                        add("excepturi"),
                    }};
                    requestId = "nisi";
                }};;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "quis";
                key = "veritatis";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "ipsam";
                uploadProtocol = "repellendus";
            }};            

            NetworksecurityProjectsLocationsAddressGroupsAddItemsResponse res = sdk.projects.networksecurityProjectsLocationsAddressGroupsAddItems(req, new NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity("sapiente", "quo") {{
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

## networksecurityProjectsLocationsAddressGroupsCloneItems

Clones items from one address group to another.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsCloneItemsRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsCloneItemsResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsCloneItemsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloneAddressGroupItemsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsAddressGroupsCloneItemsRequest req = new NetworksecurityProjectsLocationsAddressGroupsCloneItemsRequest("odit") {{
                dollarXgafv = XgafvEnum.TWO;
                cloneAddressGroupItemsRequest = new CloneAddressGroupItemsRequest() {{
                    requestId = "at";
                    sourceAddressGroup = "maiores";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "esse";
                key = "totam";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "dicta";
                uploadProtocol = "nam";
            }};            

            NetworksecurityProjectsLocationsAddressGroupsCloneItemsResponse res = sdk.projects.networksecurityProjectsLocationsAddressGroupsCloneItems(req, new NetworksecurityProjectsLocationsAddressGroupsCloneItemsSecurity("officia", "occaecati") {{
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

## networksecurityProjectsLocationsAddressGroupsCreate

Creates a new address group in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsCreateRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsCreateResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsCreateSecurity;
import org.openapis.openapi.models.shared.AddressGroupInput;
import org.openapis.openapi.models.shared.AddressGroupTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsAddressGroupsCreateRequest req = new NetworksecurityProjectsLocationsAddressGroupsCreateRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                addressGroupInput = new AddressGroupInput() {{
                    capacity = 944669;
                    description = "optio";
                    items = new String[]{{
                        add("beatae"),
                        add("commodi"),
                        add("molestiae"),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("qui", "impedit");
                        put("cum", "esse");
                    }};
                    name = "Mrs. Miriam Collier";
                    type = AddressGroupTypeEnum.TYPE_UNSPECIFIED;
                }};;
                accessToken = "iste";
                addressGroupId = "dolor";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                fields = "hic";
                key = "saepe";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "corporis";
                uploadType = "iste";
                uploadProtocol = "iure";
            }};            

            NetworksecurityProjectsLocationsAddressGroupsCreateResponse res = sdk.projects.networksecurityProjectsLocationsAddressGroupsCreate(req, new NetworksecurityProjectsLocationsAddressGroupsCreateSecurity("saepe", "quidem") {{
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

## networksecurityProjectsLocationsAddressGroupsList

Lists address groups in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsListRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsListResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsAddressGroupsListRequest req = new NetworksecurityProjectsLocationsAddressGroupsListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                pageSize = 358152L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "enim";
                uploadProtocol = "omnis";
            }};            

            NetworksecurityProjectsLocationsAddressGroupsListResponse res = sdk.projects.networksecurityProjectsLocationsAddressGroupsList(req, new NetworksecurityProjectsLocationsAddressGroupsListSecurity("nemo", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAddressGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsAddressGroupsListReferences

Lists references of an address group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsListReferencesRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsListReferencesResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsListReferencesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsAddressGroupsListReferencesRequest req = new NetworksecurityProjectsLocationsAddressGroupsListReferencesRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "sapiente";
                key = "architecto";
                oauthToken = "mollitia";
                pageSize = 208876L;
                pageToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            NetworksecurityProjectsLocationsAddressGroupsListReferencesResponse res = sdk.projects.networksecurityProjectsLocationsAddressGroupsListReferences(req, new NetworksecurityProjectsLocationsAddressGroupsListReferencesSecurity("occaecati", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAddressGroupReferencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## networksecurityProjectsLocationsAddressGroupsRemoveItems

Removes items from an address group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsRemoveItemsRequest;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsRemoveItemsResponse;
import org.openapis.openapi.models.operations.NetworksecurityProjectsLocationsAddressGroupsRemoveItemsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveAddressGroupItemsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsAddressGroupsRemoveItemsRequest req = new NetworksecurityProjectsLocationsAddressGroupsRemoveItemsRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                removeAddressGroupItemsRequest = new RemoveAddressGroupItemsRequest() {{
                    items = new String[]{{
                        add("velit"),
                        add("error"),
                    }};
                    requestId = "quia";
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "animi";
                key = "enim";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            NetworksecurityProjectsLocationsAddressGroupsRemoveItemsResponse res = sdk.projects.networksecurityProjectsLocationsAddressGroupsRemoveItems(req, new NetworksecurityProjectsLocationsAddressGroupsRemoveItemsSecurity("ipsam", "id") {{
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

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest req = new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                authorizationPolicyInput = new AuthorizationPolicyInput() {{
                    action = AuthorizationPolicyActionEnum.ACTION_UNSPECIFIED;
                    description = "error";
                    labels = new java.util.HashMap<String, String>() {{
                        put("laborum", "quasi");
                        put("reiciendis", "voluptatibus");
                        put("vero", "nihil");
                        put("praesentium", "voluptatibus");
                    }};
                    name = "Geneva Klein Jr.";
                    rules = new org.openapis.openapi.models.shared.Rule[]{{
                        add(new Rule() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("dicta"),
                                        add("corporis"),
                                        add("dolore"),
                                        add("iusto"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "dicta";
                                        regexMatch = "harum";
                                    }};
                                    methods = new String[]{{
                                        add("accusamus"),
                                        add("commodi"),
                                    }};
                                    ports = new Long[]{{
                                        add(64147L),
                                        add(216822L),
                                        add(692472L),
                                        add(565189L),
                                    }};
                                }}),
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("pariatur"),
                                        add("modi"),
                                        add("praesentium"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "rem";
                                        regexMatch = "voluptates";
                                    }};
                                    methods = new String[]{{
                                        add("repudiandae"),
                                    }};
                                    ports = new Long[]{{
                                        add(83112L),
                                        add(929297L),
                                        add(277718L),
                                    }};
                                }}),
                            }};
                            sources = new org.openapis.openapi.models.shared.Source[]{{
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("est"),
                                    }};
                                    principals = new String[]{{
                                        add("explicabo"),
                                        add("deserunt"),
                                        add("distinctio"),
                                        add("quibusdam"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("modi"),
                                        add("qui"),
                                    }};
                                    principals = new String[]{{
                                        add("cupiditate"),
                                        add("quos"),
                                    }};
                                }}),
                            }};
                        }}),
                        add(new Rule() {{
                            destinations = new org.openapis.openapi.models.shared.Destination[]{{
                                add(new Destination() {{
                                    hosts = new String[]{{
                                        add("assumenda"),
                                    }};
                                    httpHeaderMatch = new HttpHeaderMatch() {{
                                        headerName = "ipsam";
                                        regexMatch = "alias";
                                    }};
                                    methods = new String[]{{
                                        add("dolorum"),
                                    }};
                                    ports = new Long[]{{
                                        add(270008L),
                                        add(703737L),
                                        add(735194L),
                                    }};
                                }}),
                            }};
                            sources = new org.openapis.openapi.models.shared.Source[]{{
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("eum"),
                                        add("non"),
                                        add("eligendi"),
                                        add("sint"),
                                    }};
                                    principals = new String[]{{
                                        add("provident"),
                                        add("necessitatibus"),
                                    }};
                                }}),
                                add(new Source() {{
                                    ipBlocks = new String[]{{
                                        add("officia"),
                                        add("dolor"),
                                        add("debitis"),
                                    }};
                                    principals = new String[]{{
                                        add("dolorum"),
                                        add("in"),
                                        add("in"),
                                        add("illum"),
                                    }};
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                authorizationPolicyId = "dicta";
                callback = "magnam";
                fields = "cumque";
                key = "facere";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "laborum";
                uploadProtocol = "accusamus";
            }};            

            NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesCreate(req, new NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity("non", "occaecati") {{
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

            NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest req = new NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "nam";
                key = "id";
                oauthToken = "blanditiis";
                pageSize = 533206L;
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "deserunt";
                uploadProtocol = "nisi";
            }};            

            NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse res = sdk.projects.networksecurityProjectsLocationsAuthorizationPoliciesList(req, new NetworksecurityProjectsLocationsAuthorizationPoliciesListSecurity("vel", "natus") {{
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
import org.openapis.openapi.models.shared.GoogleCloudNetworksecurityV1beta1CertificateProvider;
import org.openapis.openapi.models.shared.GoogleCloudNetworksecurityV1beta1GrpcEndpoint;
import org.openapis.openapi.models.shared.ValidationCA;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest req = new NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                clientTlsPolicyInput = new ClientTlsPolicyInput() {{
                    clientCertificate = new GoogleCloudNetworksecurityV1beta1CertificateProvider() {{
                        certificateProviderInstance = new CertificateProviderInstance() {{
                            pluginInstance = "perferendis";
                        }};;
                        grpcEndpoint = new GoogleCloudNetworksecurityV1beta1GrpcEndpoint() {{
                            targetUri = "nihil";
                        }};;
                    }};;
                    description = "magnam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("id", "labore");
                        put("labore", "suscipit");
                        put("natus", "nobis");
                    }};
                    name = "Mrs. Meghan Collins V";
                    serverValidationCa = new org.openapis.openapi.models.shared.ValidationCA[]{{
                        add(new ValidationCA() {{
                            certificateProviderInstance = new CertificateProviderInstance() {{
                                pluginInstance = "provident";
                            }};
                            grpcEndpoint = new GoogleCloudNetworksecurityV1beta1GrpcEndpoint() {{
                                targetUri = "quos";
                            }};
                        }}),
                        add(new ValidationCA() {{
                            certificateProviderInstance = new CertificateProviderInstance() {{
                                pluginInstance = "sint";
                            }};
                            grpcEndpoint = new GoogleCloudNetworksecurityV1beta1GrpcEndpoint() {{
                                targetUri = "accusantium";
                            }};
                        }}),
                    }};
                    sni = "mollitia";
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "ad";
                clientTlsPolicyId = "eum";
                fields = "dolor";
                key = "necessitatibus";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "quasi";
                uploadProtocol = "iure";
            }};            

            NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsClientTlsPoliciesCreate(req, new NetworksecurityProjectsLocationsClientTlsPoliciesCreateSecurity("doloribus", "debitis") {{
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

            NetworksecurityProjectsLocationsClientTlsPoliciesListRequest req = new NetworksecurityProjectsLocationsClientTlsPoliciesListRequest("eius") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "architecto";
                key = "architecto";
                oauthToken = "repudiandae";
                pageSize = 352312L;
                pageToken = "expedita";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "repellat";
                uploadProtocol = "quibusdam";
            }};            

            NetworksecurityProjectsLocationsClientTlsPoliciesListResponse res = sdk.projects.networksecurityProjectsLocationsClientTlsPoliciesList(req, new NetworksecurityProjectsLocationsClientTlsPoliciesListSecurity("sed", "saepe") {{
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

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest req = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateRequest("pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                gatewaySecurityPolicyInput = new GatewaySecurityPolicyInput() {{
                    description = "consequuntur";
                    name = "Miss Nick Cummerata";
                    tlsInspectionPolicy = "pariatur";
                }};;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "odit";
                gatewaySecurityPolicyId = "ea";
                key = "accusantium";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "quidem";
                uploadProtocol = "ipsam";
            }};            

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsGatewaySecurityPoliciesCreate(req, new NetworksecurityProjectsLocationsGatewaySecurityPoliciesCreateSecurity("voluptate", "autem") {{
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

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesListRequest req = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesListRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "perferendis";
                key = "fugiat";
                oauthToken = "amet";
                pageSize = 11714L;
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "hic";
                uploadProtocol = "libero";
            }};            

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesListResponse res = sdk.projects.networksecurityProjectsLocationsGatewaySecurityPoliciesList(req, new NetworksecurityProjectsLocationsGatewaySecurityPoliciesListSecurity("nobis", "dolores") {{
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

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateRequest req = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateRequest("quis") {{
                dollarXgafv = XgafvEnum.TWO;
                gatewaySecurityPolicyRuleInput = new GatewaySecurityPolicyRuleInput() {{
                    applicationMatcher = "dignissimos";
                    basicProfile = GatewaySecurityPolicyRuleBasicProfileEnum.BASIC_PROFILE_UNSPECIFIED;
                    description = "quis";
                    enabled = false;
                    name = "Ruby Auer";
                    priority = 463451;
                    sessionMatcher = "dolor";
                    tlsInspectionEnabled = false;
                }};;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "recusandae";
                gatewaySecurityPolicyRuleId = "omnis";
                key = "facilis";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "porro";
                uploadProtocol = "consequuntur";
            }};            

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateResponse res = sdk.projects.networksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreate(req, new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesCreateSecurity("blanditiis", "error") {{
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

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListRequest req = new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListRequest("eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "earum";
                key = "modi";
                oauthToken = "iste";
                pageSize = 679091L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "provident";
                uploadProtocol = "nobis";
            }};            

            NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListResponse res = sdk.projects.networksecurityProjectsLocationsGatewaySecurityPoliciesRulesList(req, new NetworksecurityProjectsLocationsGatewaySecurityPoliciesRulesListSecurity("libero", "delectus") {{
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

            NetworksecurityProjectsLocationsListRequest req = new NetworksecurityProjectsLocationsListRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "dolor";
                filter = "qui";
                key = "ipsum";
                oauthToken = "hic";
                pageSize = 569574L;
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "dignissimos";
                uploadProtocol = "reiciendis";
            }};            

            NetworksecurityProjectsLocationsListResponse res = sdk.projects.networksecurityProjectsLocationsList(req, new NetworksecurityProjectsLocationsListSecurity("amet", "dolorum") {{
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

            NetworksecurityProjectsLocationsOperationsCancelRequest req = new NetworksecurityProjectsLocationsOperationsCancelRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ipsa", "iure");
                }};
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "quidem";
                key = "voluptatibus";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "eos";
                uploadProtocol = "atque";
            }};            

            NetworksecurityProjectsLocationsOperationsCancelResponse res = sdk.projects.networksecurityProjectsLocationsOperationsCancel(req, new NetworksecurityProjectsLocationsOperationsCancelSecurity("sit", "fugiat") {{
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

            NetworksecurityProjectsLocationsOperationsListRequest req = new NetworksecurityProjectsLocationsOperationsListRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "dolorum";
                filter = "deleniti";
                key = "omnis";
                oauthToken = "necessitatibus";
                pageSize = 714697L;
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "ipsum";
                uploadProtocol = "voluptate";
            }};            

            NetworksecurityProjectsLocationsOperationsListResponse res = sdk.projects.networksecurityProjectsLocationsOperationsList(req, new NetworksecurityProjectsLocationsOperationsListSecurity("id", "saepe") {{
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
import org.openapis.openapi.models.shared.GoogleCloudNetworksecurityV1beta1CertificateProvider;
import org.openapis.openapi.models.shared.GoogleCloudNetworksecurityV1beta1GrpcEndpoint;
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

            NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest req = new NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest("eius") {{
                dollarXgafv = XgafvEnum.ONE;
                serverTlsPolicyInput = new ServerTlsPolicyInput() {{
                    allowOpen = false;
                    description = "perferendis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("optio", "accusamus");
                    }};
                    mtlsPolicy = new MTLSPolicy() {{
                        clientValidationCa = new org.openapis.openapi.models.shared.ValidationCA[]{{
                            add(new ValidationCA() {{
                                certificateProviderInstance = new CertificateProviderInstance() {{
                                    pluginInstance = "saepe";
                                }};
                                grpcEndpoint = new GoogleCloudNetworksecurityV1beta1GrpcEndpoint() {{
                                    targetUri = "suscipit";
                                }};
                            }}),
                            add(new ValidationCA() {{
                                certificateProviderInstance = new CertificateProviderInstance() {{
                                    pluginInstance = "deserunt";
                                }};
                                grpcEndpoint = new GoogleCloudNetworksecurityV1beta1GrpcEndpoint() {{
                                    targetUri = "provident";
                                }};
                            }}),
                        }};
                        clientValidationMode = MTLSPolicyClientValidationModeEnum.CLIENT_VALIDATION_MODE_UNSPECIFIED;
                        clientValidationTrustConfig = "repellendus";
                    }};;
                    name = "Donnie Abbott";
                    serverCertificate = new GoogleCloudNetworksecurityV1beta1CertificateProvider() {{
                        certificateProviderInstance = new CertificateProviderInstance() {{
                            pluginInstance = "tempora";
                        }};;
                        grpcEndpoint = new GoogleCloudNetworksecurityV1beta1GrpcEndpoint() {{
                            targetUri = "vel";
                        }};;
                    }};;
                }};;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "dolorum";
                key = "a";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "harum";
                serverTlsPolicyId = "iusto";
                uploadType = "ipsum";
                uploadProtocol = "quisquam";
            }};            

            NetworksecurityProjectsLocationsServerTlsPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsServerTlsPoliciesCreate(req, new NetworksecurityProjectsLocationsServerTlsPoliciesCreateSecurity("tenetur", "amet") {{
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

            NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyRequest req = new NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "sapiente";
                key = "totam";
                oauthToken = "nihil";
                optionsRequestedPolicyVersion = 25662L;
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "neque";
                uploadProtocol = "sed";
            }};            

            NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyResponse res = sdk.projects.networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy(req, new NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicySecurity("vel", "libero") {{
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

            NetworksecurityProjectsLocationsServerTlsPoliciesListRequest req = new NetworksecurityProjectsLocationsServerTlsPoliciesListRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "qui";
                key = "cupiditate";
                oauthToken = "maxime";
                pageSize = 863856L;
                pageToken = "soluta";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "laborum";
                uploadProtocol = "totam";
            }};            

            NetworksecurityProjectsLocationsServerTlsPoliciesListResponse res = sdk.projects.networksecurityProjectsLocationsServerTlsPoliciesList(req, new NetworksecurityProjectsLocationsServerTlsPoliciesListSecurity("incidunt", "aspernatur") {{
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

            NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest req = new NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("molestias"),
                                            add("temporibus"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fugit"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "odio";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nam"),
                                            add("hic"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "cumque";
                            }}),
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
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
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new Expr() {{
                                    description = "aut";
                                    expression = "quas";
                                    location = "itaque";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("repellendus"),
                                    add("porro"),
                                    add("doloribus"),
                                }};
                                role = "ut";
                            }}),
                        }};
                        etag = "facilis";
                        version = 586410;
                    }};;
                    updateMask = "qui";
                }};;
                accessToken = "quae";
                alt = AltEnum.MEDIA;
                callback = "odio";
                fields = "occaecati";
                key = "voluptatibus";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "omnis";
                uploadProtocol = "quis";
            }};            

            NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse res = sdk.projects.networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy(req, new NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicySecurity("ipsum", "delectus") {{
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

            NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest req = new NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest("voluptate") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("tenetur"),
                        add("dignissimos"),
                        add("hic"),
                        add("distinctio"),
                    }};
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "similique";
                fields = "facilis";
                key = "vero";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "quibusdam";
                uploadProtocol = "illum";
            }};            

            NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse res = sdk.projects.networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions(req, new NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity("sequi", "natus") {{
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

            NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateRequest req = new NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateRequest("impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                tlsInspectionPolicyInput = new TlsInspectionPolicyInput() {{
                    caPool = "voluptatibus";
                    description = "exercitationem";
                    name = "Louis Sauer";
                }};;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "alias";
                key = "officia";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "ipsam";
                tlsInspectionPolicyId = "ea";
                uploadType = "aspernatur";
                uploadProtocol = "vel";
            }};            

            NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateResponse res = sdk.projects.networksecurityProjectsLocationsTlsInspectionPoliciesCreate(req, new NetworksecurityProjectsLocationsTlsInspectionPoliciesCreateSecurity("possimus", "magnam") {{
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

            NetworksecurityProjectsLocationsTlsInspectionPoliciesListRequest req = new NetworksecurityProjectsLocationsTlsInspectionPoliciesListRequest("ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "maiores";
                key = "quasi";
                oauthToken = "ex";
                pageSize = 862192L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "nostrum";
                uploadProtocol = "sapiente";
            }};            

            NetworksecurityProjectsLocationsTlsInspectionPoliciesListResponse res = sdk.projects.networksecurityProjectsLocationsTlsInspectionPoliciesList(req, new NetworksecurityProjectsLocationsTlsInspectionPoliciesListSecurity("quisquam", "saepe") {{
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

            NetworksecurityProjectsLocationsUrlListsCreateRequest req = new NetworksecurityProjectsLocationsUrlListsCreateRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                urlListInput = new UrlListInput() {{
                    description = "corporis";
                    name = "Jeanne Bode";
                    values = new String[]{{
                        add("consectetur"),
                        add("recusandae"),
                        add("aspernatur"),
                        add("minima"),
                    }};
                }};;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "aut";
                key = "aut";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "aliquam";
                uploadProtocol = "fugit";
                urlListId = "accusamus";
            }};            

            NetworksecurityProjectsLocationsUrlListsCreateResponse res = sdk.projects.networksecurityProjectsLocationsUrlListsCreate(req, new NetworksecurityProjectsLocationsUrlListsCreateSecurity("inventore", "non") {{
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

            NetworksecurityProjectsLocationsUrlListsDeleteRequest req = new NetworksecurityProjectsLocationsUrlListsDeleteRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "velit";
                fields = "eum";
                force = false;
                key = "autem";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "assumenda";
                uploadProtocol = "nulla";
            }};            

            NetworksecurityProjectsLocationsUrlListsDeleteResponse res = sdk.projects.networksecurityProjectsLocationsUrlListsDelete(req, new NetworksecurityProjectsLocationsUrlListsDeleteSecurity("voluptas", "libero") {{
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

            NetworksecurityProjectsLocationsUrlListsGetRequest req = new NetworksecurityProjectsLocationsUrlListsGetRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
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
            }};            

            NetworksecurityProjectsLocationsUrlListsGetResponse res = sdk.projects.networksecurityProjectsLocationsUrlListsGet(req, new NetworksecurityProjectsLocationsUrlListsGetSecurity("esse", "rem") {{
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

            NetworksecurityProjectsLocationsUrlListsListRequest req = new NetworksecurityProjectsLocationsUrlListsListRequest("fuga") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "ut";
                fields = "eum";
                key = "suscipit";
                oauthToken = "assumenda";
                pageSize = 181151L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "veritatis";
                uploadProtocol = "ipsa";
            }};            

            NetworksecurityProjectsLocationsUrlListsListResponse res = sdk.projects.networksecurityProjectsLocationsUrlListsList(req, new NetworksecurityProjectsLocationsUrlListsListSecurity("id", "quidem") {{
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

            NetworksecurityProjectsLocationsUrlListsPatchRequest req = new NetworksecurityProjectsLocationsUrlListsPatchRequest("neque") {{
                dollarXgafv = XgafvEnum.TWO;
                urlListInput = new UrlListInput() {{
                    description = "illum";
                    name = "Wilbur Gerlach";
                    values = new String[]{{
                        add("cupiditate"),
                    }};
                }};;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsam";
                key = "aspernatur";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "quo";
                updateMask = "esse";
                uploadType = "recusandae";
                uploadProtocol = "aperiam";
            }};            

            NetworksecurityProjectsLocationsUrlListsPatchResponse res = sdk.projects.networksecurityProjectsLocationsUrlListsPatch(req, new NetworksecurityProjectsLocationsUrlListsPatchSecurity("distinctio", "quod") {{
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
