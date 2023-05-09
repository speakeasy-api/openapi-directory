# projects

### Available Operations

* [contactcenteraiplatformProjectsLocationsContactCentersCreate](#contactcenteraiplatformprojectslocationscontactcenterscreate) - Creates a new ContactCenter in a given project and location.
* [contactcenteraiplatformProjectsLocationsContactCentersList](#contactcenteraiplatformprojectslocationscontactcenterslist) - Lists ContactCenters in a given project and location.
* [contactcenteraiplatformProjectsLocationsContactCentersPatch](#contactcenteraiplatformprojectslocationscontactcenterspatch) - Updates the parameters of a single ContactCenter.
* [contactcenteraiplatformProjectsLocationsList](#contactcenteraiplatformprojectslocationslist) - Lists information about the supported locations for this service.
* [contactcenteraiplatformProjectsLocationsOperationsCancel](#contactcenteraiplatformprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [contactcenteraiplatformProjectsLocationsOperationsDelete](#contactcenteraiplatformprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [contactcenteraiplatformProjectsLocationsOperationsGet](#contactcenteraiplatformprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [contactcenteraiplatformProjectsLocationsOperationsList](#contactcenteraiplatformprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [contactcenteraiplatformProjectsLocationsQueryContactCenterQuota](#contactcenteraiplatformprojectslocationsquerycontactcenterquota) - Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.

## contactcenteraiplatformProjectsLocationsContactCentersCreate

Creates a new ContactCenter in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity;
import org.openapis.openapi.models.shared.AdminUser;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactCenterInput;
import org.openapis.openapi.models.shared.InstanceConfig;
import org.openapis.openapi.models.shared.InstanceConfigInstanceSizeEnum;
import org.openapis.openapi.models.shared.SAMLParams;
import org.openapis.openapi.models.shared.URIs;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest req = new ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                contactCenterInput = new ContactCenterInput() {{
                    adminUser = new AdminUser() {{
                        familyName = "totam";
                        givenName = "porro";
                    }};;
                    ccaipManagedUsers = false;
                    customerDomainPrefix = "dolorum";
                    displayName = "dicta";
                    instanceConfig = new InstanceConfig() {{
                        instanceSize = InstanceConfigInstanceSizeEnum.STANDARD2_XLARGE;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("occaecati", "fugit");
                        put("deleniti", "hic");
                        put("optio", "totam");
                    }};
                    name = "Lucy Krajcik";
                    samlParams = new SAMLParams() {{
                        certificate = "impedit";
                        entityId = "cum";
                        ssoUri = "esse";
                        userEmail = "ipsum";
                    }};;
                    uris = new URIs() {{
                        chatBotUri = "excepturi";
                        mediaUri = "aspernatur";
                        rootUri = "perferendis";
                        virtualAgentStreamingServiceUri = "ad";
                    }};;
                    userEmail = "natus";
                }};;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                contactCenterId = "natus";
                fields = "laboriosam";
                key = "hic";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "fuga";
                requestId = "in";
                uploadType = "corporis";
                uploadProtocol = "iste";
            }};            

            ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsContactCentersCreate(req, new ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity("iure", "saepe") {{
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

## contactcenteraiplatformProjectsLocationsContactCentersList

Lists ContactCenters in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersListRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersListResponse;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsContactCentersListRequest req = new ContactcenteraiplatformProjectsLocationsContactCentersListRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "mollitia";
                filter = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                orderBy = "corporis";
                pageSize = 128926L;
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "omnis";
                uploadProtocol = "nemo";
            }};            

            ContactcenteraiplatformProjectsLocationsContactCentersListResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsContactCentersList(req, new ContactcenteraiplatformProjectsLocationsContactCentersListSecurity("minima", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listContactCentersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactcenteraiplatformProjectsLocationsContactCentersPatch

Updates the parameters of a single ContactCenter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersPatchRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersPatchResponse;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersPatchSecurity;
import org.openapis.openapi.models.shared.AdminUser;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactCenterInput;
import org.openapis.openapi.models.shared.InstanceConfig;
import org.openapis.openapi.models.shared.InstanceConfigInstanceSizeEnum;
import org.openapis.openapi.models.shared.SAMLParams;
import org.openapis.openapi.models.shared.URIs;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsContactCentersPatchRequest req = new ContactcenteraiplatformProjectsLocationsContactCentersPatchRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                contactCenterInput = new ContactCenterInput() {{
                    adminUser = new AdminUser() {{
                        familyName = "culpa";
                        givenName = "doloribus";
                    }};;
                    ccaipManagedUsers = false;
                    customerDomainPrefix = "sapiente";
                    displayName = "architecto";
                    instanceConfig = new InstanceConfig() {{
                        instanceSize = InstanceConfigInstanceSizeEnum.STANDARD_XLARGE;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("culpa", "consequuntur");
                    }};
                    name = "Shaun McCullough";
                    samlParams = new SAMLParams() {{
                        certificate = "quam";
                        entityId = "molestiae";
                        ssoUri = "velit";
                        userEmail = "error";
                    }};;
                    uris = new URIs() {{
                        chatBotUri = "quia";
                        mediaUri = "quis";
                        rootUri = "vitae";
                        virtualAgentStreamingServiceUri = "laborum";
                    }};;
                    userEmail = "animi";
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "sequi";
                key = "tenetur";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "id";
                requestId = "possimus";
                updateMask = "aut";
                uploadType = "quasi";
                uploadProtocol = "error";
            }};            

            ContactcenteraiplatformProjectsLocationsContactCentersPatchResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsContactCentersPatch(req, new ContactcenteraiplatformProjectsLocationsContactCentersPatchSecurity("temporibus", "laborum") {{
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

## contactcenteraiplatformProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsListRequest req = new ContactcenteraiplatformProjectsLocationsListRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "praesentium";
                filter = "voluptatibus";
                key = "ipsa";
                oauthToken = "omnis";
                pageSize = 451159L;
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "doloremque";
                uploadProtocol = "reprehenderit";
            }};            

            ContactcenteraiplatformProjectsLocationsListResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsList(req, new ContactcenteraiplatformProjectsLocationsListSecurity("ut", "maiores") {{
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

## contactcenteraiplatformProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsOperationsCancelRequest req = new ContactcenteraiplatformProjectsLocationsOperationsCancelRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iusto", "dicta");
                    put("harum", "enim");
                }};
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "quae";
                key = "ipsum";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "excepturi";
                uploadProtocol = "pariatur";
            }};            

            ContactcenteraiplatformProjectsLocationsOperationsCancelResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsOperationsCancel(req, new ContactcenteraiplatformProjectsLocationsOperationsCancelSecurity("modi", "praesentium") {{
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

## contactcenteraiplatformProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsOperationsDeleteRequest req = new ContactcenteraiplatformProjectsLocationsOperationsDeleteRequest("rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "veritatis";
                key = "itaque";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "enim";
                requestId = "consequatur";
                uploadType = "est";
                uploadProtocol = "quibusdam";
            }};            

            ContactcenteraiplatformProjectsLocationsOperationsDeleteResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsOperationsDelete(req, new ContactcenteraiplatformProjectsLocationsOperationsDeleteSecurity("explicabo", "deserunt") {{
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

## contactcenteraiplatformProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsOperationsGetRequest req = new ContactcenteraiplatformProjectsLocationsOperationsGetRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "aliquid";
                key = "cupiditate";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "magni";
                uploadProtocol = "assumenda";
            }};            

            ContactcenteraiplatformProjectsLocationsOperationsGetResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsOperationsGet(req, new ContactcenteraiplatformProjectsLocationsOperationsGetSecurity("ipsam", "alias") {{
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

## contactcenteraiplatformProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsOperationsListRequest req = new ContactcenteraiplatformProjectsLocationsOperationsListRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                filter = "labore";
                key = "delectus";
                oauthToken = "eum";
                pageSize = 248753L;
                pageToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "aliquid";
                uploadProtocol = "provident";
            }};            

            ContactcenteraiplatformProjectsLocationsOperationsListResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsOperationsList(req, new ContactcenteraiplatformProjectsLocationsOperationsListSecurity("necessitatibus", "sint") {{
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

## contactcenteraiplatformProjectsLocationsQueryContactCenterQuota

Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaResponse;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaRequest req = new ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaRequest("officia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "in";
                key = "in";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "rerum";
                uploadProtocol = "dicta";
            }};            

            ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsQueryContactCenterQuota(req, new ContactcenteraiplatformProjectsLocationsQueryContactCenterQuotaSecurity("magnam", "cumque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contactCenterQuota != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
