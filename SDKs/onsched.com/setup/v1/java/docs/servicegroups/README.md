# serviceGroups

### Available Operations

* [deleteSetupV1ServicegroupsId](#deletesetupv1servicegroupsid) - Delete Service Group
* [getSetupV1Servicegroups](#getsetupv1servicegroups) - List Service Groups
* [getSetupV1ServicegroupsId](#getsetupv1servicegroupsid) - Get Service Group
* [postSetupV1Servicegroups](#postsetupv1servicegroups) - Create Service Group
* [putSetupV1ServicegroupsId](#putsetupv1servicegroupsid) - Update Service Group
* [putSetupV1ServicegroupsIdRecover](#putsetupv1servicegroupsidrecover) - Recover Service Group

## deleteSetupV1ServicegroupsId

<p>Use this endpoint to <b>Delete</b> a Service Group object. A valid <b>serviceGroup id</b> is required. The service group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/servicegroups​/{id}​/recover</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicegroupsIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ServicegroupsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ServicegroupsIdRequest req = new DeleteSetupV1ServicegroupsIdRequest(425402);            

            DeleteSetupV1ServicegroupsIdResponse res = sdk.serviceGroups.deleteSetupV1ServicegroupsId(req);

            if (res.serviceGroupViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1Servicegroups

<p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If no business location is specified it will default to the Primary Business Location of the company. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ServicegroupsRequest;
import org.openapis.openapi.models.operations.GetSetupV1ServicegroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ServicegroupsRequest req = new GetSetupV1ServicegroupsRequest() {{
                limit = 63553;
                locationId = "modi";
                offset = 208253;
            }};            

            GetSetupV1ServicegroupsResponse res = sdk.serviceGroups.getSetupV1Servicegroups(req);

            if (res.serviceGroupListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ServicegroupsId

<p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find service group id's by using the <i>GET /setup/v1/serviceGroups</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ServicegroupsIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1ServicegroupsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ServicegroupsIdRequest req = new GetSetupV1ServicegroupsIdRequest(932394);            

            GetSetupV1ServicegroupsIdResponse res = sdk.serviceGroups.getSetupV1ServicegroupsId(req);

            if (res.serviceGroupViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1Servicegroups

<p>Use this endpoint to <b>Create</b> a Service Group. If no locationId is specified in the body, the business location will default to the primary business location. Service groups are used to categorize services. Service groups are optional and only make sense if you have multiple services that will be easier read if categorized. Only the service group Type of 0 is supported by the API. It defaults to 0 if not supplied.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ServicegroupsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceGroupInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ServiceGroupInputModel req = new ServiceGroupInputModel() {{
                description = "ipsum";
                locationId = "unde";
                name = "Kelvin Schmitt";
                type = 342137;
            }};            

            PostSetupV1ServicegroupsResponse res = sdk.serviceGroups.postSetupV1Servicegroups(req);

            if (res.serviceGroupViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ServicegroupsId

<p>Use this endpoint to <b>Update</b> a Service Group object. A valid <b>serviceGroup id</b> is required. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ServicegroupsIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1ServicegroupsIdResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceGroupInputModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ServicegroupsIdRequest req = new PutSetupV1ServicegroupsIdRequest(727250) {{
                serviceGroupInputModel = new ServiceGroupInputModel() {{
                    description = "dicta";
                    locationId = "id";
                    name = "Laurence Nienow";
                    type = 25756;
                }};;
            }};            

            PutSetupV1ServicegroupsIdResponse res = sdk.serviceGroups.putSetupV1ServicegroupsId(req);

            if (res.serviceGroupViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ServicegroupsIdRecover

<p>Use this endpoint to <b>Recover</b> a deleted Service Group. A valid <b>serviceGroup id</b> is required. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ServicegroupsIdRecoverRequest;
import org.openapis.openapi.models.operations.PutSetupV1ServicegroupsIdRecoverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ServicegroupsIdRecoverRequest req = new PutSetupV1ServicegroupsIdRecoverRequest(57320);            

            PutSetupV1ServicegroupsIdRecoverResponse res = sdk.serviceGroups.putSetupV1ServicegroupsIdRecover(req);

            if (res.serviceGroupViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
