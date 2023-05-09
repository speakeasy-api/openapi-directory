# projects

### Available Operations

* [servicebrokerProjectsBrokersCreate](#servicebrokerprojectsbrokerscreate) - CreateBroker creates a Broker.
* [servicebrokerProjectsBrokersInstancesBindingsList](#servicebrokerprojectsbrokersinstancesbindingslist) - Lists all the bindings in the instance.
* [servicebrokerProjectsBrokersInstancesList](#servicebrokerprojectsbrokersinstanceslist) - Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.
* [servicebrokerProjectsBrokersList](#servicebrokerprojectsbrokerslist) - ListBrokers lists brokers.
* [servicebrokerProjectsBrokersV2CatalogList](#servicebrokerprojectsbrokersv2cataloglist) - Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.
* [servicebrokerProjectsBrokersV2ServiceInstancesCreate](#servicebrokerprojectsbrokersv2serviceinstancescreate) - Provisions a service instance.
If `request.accepts_incomplete` is false and Broker cannot execute request
synchronously HTTP 422 error will be returned along with
FAILED_PRECONDITION status.
If `request.accepts_incomplete` is true and the Broker decides to execute
resource asynchronously then HTTP 202 response code will be returned and a
valid polling operation in the response will be included.
If Broker executes the request synchronously and it succeeds HTTP 201
response will be furnished.
If identical instance exists, then HTTP 200 response will be returned.
If an instance with identical ID but mismatching parameters exists, then
HTTP 409 status code will be returned.
* [servicebrokerProjectsBrokersV2ServiceInstancesPatch](#servicebrokerprojectsbrokersv2serviceinstancespatch) - Updates an existing service instance.
See CreateServiceInstance for possible response codes.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingscreate) - CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsdelete) - Unbinds from a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If binding does not exist HTTP 410 status will be returned.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsget) - GetBinding returns the binding information.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation](#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsgetlastoperation) - Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.

## servicebrokerProjectsBrokersCreate

CreateBroker creates a Broker.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudServicebrokerV1beta1Broker;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersCreateRequest req = new ServicebrokerProjectsBrokersCreateRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudServicebrokerV1beta1Broker = new GoogleCloudServicebrokerV1beta1Broker() {{
                    createTime = "iusto";
                    name = "Charlie Walsh II";
                    title = "Mr.";
                    url = "deserunt";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "at";
                uploadProtocol = "maiores";
            }};            

            ServicebrokerProjectsBrokersCreateResponse res = sdk.projects.servicebrokerProjectsBrokersCreate(req, new ServicebrokerProjectsBrokersCreateSecurity("molestiae", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerProjectsBrokersInstancesBindingsList

Lists all the bindings in the instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersInstancesBindingsListRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersInstancesBindingsListResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersInstancesBindingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersInstancesBindingsListRequest req = new ServicebrokerProjectsBrokersInstancesBindingsListRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "dicta";
                key = "nam";
                oauthToken = "officia";
                pageSize = 582020L;
                pageToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            ServicebrokerProjectsBrokersInstancesBindingsListResponse res = sdk.projects.servicebrokerProjectsBrokersInstancesBindingsList(req, new ServicebrokerProjectsBrokersInstancesBindingsListSecurity("totam", "beatae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerProjectsBrokersInstancesList

Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersInstancesListRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersInstancesListResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersInstancesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersInstancesListRequest req = new ServicebrokerProjectsBrokersInstancesListRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                pageSize = 568434L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "ad";
                uploadProtocol = "natus";
            }};            

            ServicebrokerProjectsBrokersInstancesListResponse res = sdk.projects.servicebrokerProjectsBrokersInstancesList(req, new ServicebrokerProjectsBrokersInstancesListSecurity("sed", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerProjectsBrokersList

ListBrokers lists brokers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersListRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersListResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersListRequest req = new ServicebrokerProjectsBrokersListRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "fuga";
                key = "in";
                oauthToken = "corporis";
                pageSize = 613064L;
                pageToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "quidem";
                uploadProtocol = "architecto";
            }};            

            ServicebrokerProjectsBrokersListResponse res = sdk.projects.servicebrokerProjectsBrokersList(req, new ServicebrokerProjectsBrokersListSecurity("ipsa", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerProjectsBrokersV2CatalogList

Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2CatalogListRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2CatalogListResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2CatalogListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersV2CatalogListRequest req = new ServicebrokerProjectsBrokersV2CatalogListRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "corporis";
                key = "explicabo";
                oauthToken = "nobis";
                pageSize = 315428L;
                pageToken = "omnis";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "minima";
                uploadProtocol = "excepturi";
            }};            

            ServicebrokerProjectsBrokersV2CatalogListResponse res = sdk.projects.servicebrokerProjectsBrokersV2CatalogList(req, new ServicebrokerProjectsBrokersV2CatalogListSecurity("accusantium", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesCreate

Provisions a service instance.
If `request.accepts_incomplete` is false and Broker cannot execute request
synchronously HTTP 422 error will be returned along with
FAILED_PRECONDITION status.
If `request.accepts_incomplete` is true and the Broker decides to execute
resource asynchronously then HTTP 202 response code will be returned and a
valid polling operation in the response will be included.
If Broker executes the request synchronously and it succeeds HTTP 201
response will be furnished.
If identical instance exists, then HTTP 200 response will be returned.
If an instance with identical ID but mismatching parameters exists, then
HTTP 409 status code will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudServicebrokerV1beta1ServiceInstance;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest req = new ServicebrokerProjectsBrokersV2ServiceInstancesCreateRequest("culpa", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudServicebrokerV1beta1ServiceInstance = new GoogleCloudServicebrokerV1beta1ServiceInstance() {{
                    context = new java.util.HashMap<String, Object>() {{
                        put("mollitia", "dolorem");
                    }};
                    createTime = "culpa";
                    deploymentName = "consequuntur";
                    description = "repellat";
                    instanceId = "mollitia";
                    organizationGuid = "occaecati";
                    parameters = new java.util.HashMap<String, Object>() {{
                        put("commodi", "quam");
                        put("molestiae", "velit");
                    }};
                    planId = "error";
                    previousValues = new java.util.HashMap<String, Object>() {{
                        put("quis", "vitae");
                    }};
                    resourceName = "laborum";
                    serviceId = "animi";
                    spaceGuid = "enim";
                }};;
                acceptsIncomplete = false;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "tenetur";
                key = "ipsam";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "aut";
                uploadProtocol = "quasi";
            }};            

            ServicebrokerProjectsBrokersV2ServiceInstancesCreateResponse res = sdk.projects.servicebrokerProjectsBrokersV2ServiceInstancesCreate(req, new ServicebrokerProjectsBrokersV2ServiceInstancesCreateSecurity("error", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesPatch

Updates an existing service instance.
See CreateServiceInstance for possible response codes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudServicebrokerV1beta1ServiceInstance;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest req = new ServicebrokerProjectsBrokersV2ServiceInstancesPatchRequest("laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudServicebrokerV1beta1ServiceInstance = new GoogleCloudServicebrokerV1beta1ServiceInstance() {{
                    context = new java.util.HashMap<String, Object>() {{
                        put("voluptatibus", "vero");
                        put("nihil", "praesentium");
                        put("voluptatibus", "ipsa");
                        put("omnis", "voluptate");
                    }};
                    createTime = "cum";
                    deploymentName = "perferendis";
                    description = "doloremque";
                    instanceId = "reprehenderit";
                    organizationGuid = "ut";
                    parameters = new java.util.HashMap<String, Object>() {{
                        put("dicta", "corporis");
                        put("dolore", "iusto");
                        put("dicta", "harum");
                        put("enim", "accusamus");
                    }};
                    planId = "commodi";
                    previousValues = new java.util.HashMap<String, Object>() {{
                        put("quae", "ipsum");
                        put("quidem", "molestias");
                        put("excepturi", "pariatur");
                        put("modi", "praesentium");
                    }};
                    resourceName = "rem";
                    serviceId = "voluptates";
                    spaceGuid = "quasi";
                }};;
                acceptsIncomplete = false;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "itaque";
                key = "incidunt";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "est";
                uploadProtocol = "quibusdam";
            }};            

            ServicebrokerProjectsBrokersV2ServiceInstancesPatchResponse res = sdk.projects.servicebrokerProjectsBrokersV2ServiceInstancesPatch(req, new ServicebrokerProjectsBrokersV2ServiceInstancesPatchSecurity("explicabo", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate

CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudServicebrokerV1beta1Binding;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest req = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateRequest("distinctio", "quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudServicebrokerV1beta1Binding = new GoogleCloudServicebrokerV1beta1Binding() {{
                    bindResource = new java.util.HashMap<String, Object>() {{
                        put("qui", "aliquid");
                        put("cupiditate", "quos");
                    }};
                    bindingId = "perferendis";
                    createTime = "magni";
                    deploymentName = "assumenda";
                    parameters = new java.util.HashMap<String, Object>() {{
                        put("alias", "fugit");
                        put("dolorum", "excepturi");
                    }};
                    planId = "tempora";
                    resourceName = "facilis";
                    serviceId = "tempore";
                }};;
                acceptsIncomplete = false;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "non";
                key = "eligendi";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "provident";
                uploadProtocol = "necessitatibus";
            }};            

            ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateResponse res = sdk.projects.servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate(req, new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreateSecurity("sint", "officia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete

Unbinds from a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If binding does not exist HTTP 410 status will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest req = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                acceptsIncomplete = false;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "in";
                key = "illum";
                oauthToken = "maiores";
                planId = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                serviceId = "magnam";
                uploadType = "cumque";
                uploadProtocol = "facere";
            }};            

            ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteResponse res = sdk.projects.servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete(req, new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDeleteSecurity("ea", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet

GetBinding returns the binding information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest req = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "accusamus";
                key = "delectus";
                oauthToken = "quidem";
                planId = "provident";
                prettyPrint = false;
                quotaUser = "nam";
                serviceId = "id";
                uploadType = "blanditiis";
                uploadProtocol = "deleniti";
            }};            

            ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetResponse res = sdk.projects.servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet(req, new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetSecurity("sapiente", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation

Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse;
import org.openapis.openapi.models.operations.ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest req = new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationRequest("deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "molestiae";
                key = "perferendis";
                oauthToken = "nihil";
                operation = "magnam";
                planId = "distinctio";
                prettyPrint = false;
                quotaUser = "id";
                serviceId = "labore";
                uploadType = "labore";
                uploadProtocol = "suscipit";
            }};            

            ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationResponse res = sdk.projects.servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation(req, new ServicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperationSecurity("natus", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
