# resourceGroups

### Available Operations

* [deleteSetupV1ResourcegroupsId](#deletesetupv1resourcegroupsid) - Delete Resource Group
* [getSetupV1Resourcegroups](#getsetupv1resourcegroups) - List Resource Groups
* [getSetupV1ResourcegroupsId](#getsetupv1resourcegroupsid) - Get Resource Group
* [postSetupV1Resourcegroups](#postsetupv1resourcegroups) - Create Resource Group
* [putSetupV1ResourcegroupsId](#putsetupv1resourcegroupsid) - Update Resource Group
* [putSetupV1ResourcegroupsIdRecover](#putsetupv1resourcegroupsidrecover) - Recover Resource Group

## deleteSetupV1ResourcegroupsId

<p>Use this endpoint to <b>Delete</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. The resource group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/resourcegroups​/{id}​/recover</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcegroupsIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1ResourcegroupsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1ResourcegroupsIdRequest req = new DeleteSetupV1ResourcegroupsIdRequest("sapiente");            

            DeleteSetupV1ResourcegroupsIdResponse res = sdk.resourceGroups.deleteSetupV1ResourcegroupsId(req);

            if (res.resourceGroupViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1Resourcegroups

<p>Use this endpoint to <b>List Resource Groups</b> for the specified location. If not specified, the business location defaults to the primary business location. <b>Name</b> is a required field.</p>
<p>Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcegroupsRequest;
import org.openapis.openapi.models.operations.GetSetupV1ResourcegroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcegroupsRequest req = new GetSetupV1ResourcegroupsRequest() {{
                deleted = false;
                limit = 645570;
                locationId = "molestiae";
                offset = 35362;
            }};            

            GetSetupV1ResourcegroupsResponse res = sdk.resourceGroups.getSetupV1Resourcegroups(req);

            if (res.resourceGroupListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1ResourcegroupsId

<p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET setup/v1/resourceGroups</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1ResourcegroupsIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1ResourcegroupsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1ResourcegroupsIdRequest req = new GetSetupV1ResourcegroupsIdRequest("eum");            

            GetSetupV1ResourcegroupsIdResponse res = sdk.resourceGroups.getSetupV1ResourcegroupsId(req);

            if (res.resourceGroupViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1Resourcegroups

<p>Use this endpoint to <b>Create</b> a resourceGroup object. Resource groups are used to categorize your resources.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1ResourcegroupsResponse;
import org.openapis.openapi.models.shared.ResourceGroupInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ResourceGroupInputModel req = new ResourceGroupInputModel() {{
                description = "praesentium";
                email = "Kailyn_Considine27@gmail.com";
                locationId = "atque";
                name = "Cathy Huel";
            }};            

            PostSetupV1ResourcegroupsResponse res = sdk.resourceGroups.postSetupV1Resourcegroups(req);

            if (res.resourceGroupViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ResourcegroupsId

<p>Use this endpoint to <b>Update</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ResourcegroupsIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1ResourcegroupsIdResponse;
import org.openapis.openapi.models.shared.ResourceGroupUpdateModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ResourcegroupsIdRequest req = new PutSetupV1ResourcegroupsIdRequest("ratione") {{
                resourceGroupUpdateModel = new ResourceGroupUpdateModel() {{
                    description = "explicabo";
                    email = "Kole45@hotmail.com";
                    name = "Sheldon Boehm";
                }};;
            }};            

            PutSetupV1ResourcegroupsIdResponse res = sdk.resourceGroups.putSetupV1ResourcegroupsId(req);

            if (res.resourceGroupViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1ResourcegroupsIdRecover

<p>Use this endpoint to <b>Recover</b> a deleted resourceGroup object. A valid <b>resourceGroup id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1ResourcegroupsIdRecoverRequest;
import org.openapis.openapi.models.operations.PutSetupV1ResourcegroupsIdRecoverResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1ResourcegroupsIdRecoverRequest req = new PutSetupV1ResourcegroupsIdRecoverRequest("vero");            

            PutSetupV1ResourcegroupsIdRecoverResponse res = sdk.resourceGroups.putSetupV1ResourcegroupsIdRecover(req);

            if (res.resourceViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
