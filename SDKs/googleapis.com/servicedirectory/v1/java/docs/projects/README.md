# projects

### Available Operations

* [servicedirectoryProjectsLocationsList](#servicedirectoryprojectslocationslist) - Lists information about the supported locations for this service.
* [servicedirectoryProjectsLocationsNamespacesCreate](#servicedirectoryprojectslocationsnamespacescreate) - Creates a namespace, and returns the new namespace.
* [servicedirectoryProjectsLocationsNamespacesList](#servicedirectoryprojectslocationsnamespaceslist) - Lists all namespaces.
* [servicedirectoryProjectsLocationsNamespacesServicesCreate](#servicedirectoryprojectslocationsnamespacesservicescreate) - Creates a service, and returns the new service.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate](#servicedirectoryprojectslocationsnamespacesservicesendpointscreate) - Creates an endpoint, and returns the new endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete](#servicedirectoryprojectslocationsnamespacesservicesendpointsdelete) - Deletes an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet](#servicedirectoryprojectslocationsnamespacesservicesendpointsget) - Gets an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsList](#servicedirectoryprojectslocationsnamespacesservicesendpointslist) - Lists all endpoints.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch](#servicedirectoryprojectslocationsnamespacesservicesendpointspatch) - Updates an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesGetIamPolicy](#servicedirectoryprojectslocationsnamespacesservicesgetiampolicy) - Gets the IAM Policy for a resource (namespace or service only).
* [servicedirectoryProjectsLocationsNamespacesServicesList](#servicedirectoryprojectslocationsnamespacesserviceslist) - Lists all services belonging to a namespace.
* [servicedirectoryProjectsLocationsNamespacesServicesResolve](#servicedirectoryprojectslocationsnamespacesservicesresolve) - Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
* [servicedirectoryProjectsLocationsNamespacesServicesSetIamPolicy](#servicedirectoryprojectslocationsnamespacesservicessetiampolicy) - Sets the IAM Policy for a resource (namespace or service only).
* [servicedirectoryProjectsLocationsNamespacesServicesTestIamPermissions](#servicedirectoryprojectslocationsnamespacesservicestestiampermissions) - Tests IAM permissions for a resource (namespace or service only).

## servicedirectoryProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsListRequest req = new ServicedirectoryProjectsLocationsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            ServicedirectoryProjectsLocationsListResponse res = sdk.projects.servicedirectoryProjectsLocationsList(req, new ServicedirectoryProjectsLocationsListSecurity("veritatis", "deserunt") {{
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

## servicedirectoryProjectsLocationsNamespacesCreate

Creates a namespace, and returns the new namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesCreateRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesCreateResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NamespaceInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesCreateRequest req = new ServicedirectoryProjectsLocationsNamespacesCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                namespaceInput = new NamespaceInput() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("sapiente", "quo");
                        put("odit", "at");
                        put("at", "maiores");
                        put("molestiae", "quod");
                    }};
                    name = "Erik Lebsack";
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "occaecati";
                key = "fugit";
                namespaceId = "deleniti";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "totam";
                uploadProtocol = "beatae";
            }};            

            ServicedirectoryProjectsLocationsNamespacesCreateResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesCreate(req, new ServicedirectoryProjectsLocationsNamespacesCreateSecurity("commodi", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.namespace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicedirectoryProjectsLocationsNamespacesList

Lists all namespaces.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesListRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesListResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesListRequest req = new ServicedirectoryProjectsLocationsNamespacesListRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "ipsum";
                filter = "excepturi";
                key = "aspernatur";
                oauthToken = "perferendis";
                orderBy = "ad";
                pageSize = 617636L;
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolor";
                uploadProtocol = "natus";
            }};            

            ServicedirectoryProjectsLocationsNamespacesListResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesList(req, new ServicedirectoryProjectsLocationsNamespacesListSecurity("laboriosam", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNamespacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicedirectoryProjectsLocationsNamespacesServicesCreate

Creates a service, and returns the new service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ServiceInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest req = new ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                serviceInput = new ServiceInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("corporis", "iste");
                        put("iure", "saepe");
                    }};
                    name = "Roger Beier";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "dolorem";
                key = "corporis";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                serviceId = "enim";
                uploadType = "omnis";
                uploadProtocol = "nemo";
            }};            

            ServicedirectoryProjectsLocationsNamespacesServicesCreateResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesServicesCreate(req, new ServicedirectoryProjectsLocationsNamespacesServicesCreateSecurity("minima", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate

Creates an endpoint, and returns the new endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EndpointInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest req = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                endpointInput = new EndpointInput() {{
                    address = "9916 Lorine Crossing";
                    annotations = new java.util.HashMap<String, String>() {{
                        put("mollitia", "occaecati");
                        put("numquam", "commodi");
                        put("quam", "molestiae");
                        put("velit", "error");
                    }};
                    name = "Beatrice Brown";
                    network = "enim";
                    port = 138183;
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "tenetur";
                endpointId = "ipsam";
                fields = "id";
                key = "possimus";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "error";
                uploadProtocol = "temporibus";
            }};            

            ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate(req, new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity("laborum", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.endpoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete

Deletes an endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest req = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                fields = "voluptatibus";
                key = "ipsa";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "cum";
                uploadProtocol = "perferendis";
            }};            

            ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete(req, new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity("doloremque", "reprehenderit") {{
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

## servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet

Gets an endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest req = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "iusto";
                key = "dicta";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "accusamus";
                uploadProtocol = "commodi";
            }};            

            ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet(req, new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity("repudiandae", "quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.endpoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicedirectoryProjectsLocationsNamespacesServicesEndpointsList

Lists all endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListRequest req = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "pariatur";
                fields = "modi";
                filter = "praesentium";
                key = "rem";
                oauthToken = "voluptates";
                orderBy = "quasi";
                pageSize = 921158L;
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "itaque";
                uploadProtocol = "incidunt";
            }};            

            ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesServicesEndpointsList(req, new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListSecurity("enim", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch

Updates an endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EndpointInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest req = new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                endpointInput = new EndpointInput() {{
                    address = "67822 Grant Oval";
                    annotations = new java.util.HashMap<String, String>() {{
                        put("perferendis", "magni");
                        put("assumenda", "ipsam");
                        put("alias", "fugit");
                    }};
                    name = "Marshall Glover";
                    network = "labore";
                    port = 962189;
                }};;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "eligendi";
                fields = "sint";
                key = "aliquid";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                updateMask = "sint";
                uploadType = "officia";
                uploadProtocol = "dolor";
            }};            

            ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch(req, new ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchSecurity("debitis", "a") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.endpoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicedirectoryProjectsLocationsNamespacesServicesGetIamPolicy

Gets the IAM Policy for a resource (namespace or service only).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyRequest req = new ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 449198;
                    }};;
                }};;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "rerum";
                fields = "dicta";
                key = "magnam";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "ea";
                uploadProtocol = "aliquid";
            }};            

            ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesServicesGetIamPolicy(req, new ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicySecurity("laborum", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicedirectoryProjectsLocationsNamespacesServicesList

Lists all services belonging to a namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesListRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesListResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesServicesListRequest req = new ServicedirectoryProjectsLocationsNamespacesServicesListRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "quidem";
                filter = "provident";
                key = "nam";
                oauthToken = "id";
                orderBy = "blanditiis";
                pageSize = 533206L;
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "deserunt";
                uploadProtocol = "nisi";
            }};            

            ServicedirectoryProjectsLocationsNamespacesServicesListResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesServicesList(req, new ServicedirectoryProjectsLocationsNamespacesServicesListSecurity("vel", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicedirectoryProjectsLocationsNamespacesServicesResolve

Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ResolveServiceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest req = new ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                resolveServiceRequest = new ResolveServiceRequest() {{
                    endpointFilter = "perferendis";
                    maxEndpoints = 470132;
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "labore";
                key = "labore";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "nobis";
                uploadProtocol = "eum";
            }};            

            ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesServicesResolve(req, new ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity("vero", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resolveServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicedirectoryProjectsLocationsNamespacesServicesSetIamPolicy

Sets the IAM Policy for a resource (namespace or service only).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyRequest req = new ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "excepturi";
                                    expression = "ullam";
                                    location = "provident";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("accusantium"),
                                    add("mollitia"),
                                    add("reiciendis"),
                                }};
                                role = "mollitia";
                            }}),
                        }};
                        etag = "ad";
                        version = 431418;
                    }};;
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "nemo";
                key = "quasi";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "debitis";
                uploadProtocol = "eius";
            }};            

            ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesServicesSetIamPolicy(req, new ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicySecurity("maxime", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicedirectoryProjectsLocationsNamespacesServicesTestIamPermissions

Tests IAM permissions for a resource (namespace or service only).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest req = new ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest("facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("architecto"),
                    }};
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "expedita";
                fields = "nihil";
                key = "repellat";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "saepe";
                uploadProtocol = "pariatur";
            }};            

            ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse res = sdk.projects.servicedirectoryProjectsLocationsNamespacesServicesTestIamPermissions(req, new ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity("accusantium", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
