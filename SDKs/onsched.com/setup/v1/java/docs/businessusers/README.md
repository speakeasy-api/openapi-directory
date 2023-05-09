# businessUsers

### Available Operations

* [deleteSetupV1BusinessusersId](#deletesetupv1businessusersid) - Delete User
* [getSetupV1Businessusers](#getsetupv1businessusers) - List Users
* [getSetupV1BusinessusersPermissions](#getsetupv1businessuserspermissions) - List User Permissions
* [getSetupV1BusinessusersEmailCompanies](#getsetupv1businessusersemailcompanies) - List User Companies
* [getSetupV1BusinessusersId](#getsetupv1businessusersid) - Get User
* [postSetupV1Businessusers](#postsetupv1businessusers) - Create User
* [putSetupV1BusinessusersId](#putsetupv1businessusersid) - Update User

## deleteSetupV1BusinessusersId

<p>Use this endpoint to permanently <b>Delete</b> a Business User. A valid <b>businessUser id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSetupV1BusinessusersIdRequest;
import org.openapis.openapi.models.operations.DeleteSetupV1BusinessusersIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteSetupV1BusinessusersIdRequest req = new DeleteSetupV1BusinessusersIdRequest("nam");            

            DeleteSetupV1BusinessusersIdResponse res = sdk.businessUsers.deleteSetupV1BusinessusersId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1Businessusers

<p>Use this endpoint to return a <b>List of Business Users and their Roles</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1BusinessusersRequest;
import org.openapis.openapi.models.operations.GetSetupV1BusinessusersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1BusinessusersRequest req = new GetSetupV1BusinessusersRequest() {{
                email = "Buck_Lind52@yahoo.com";
                limit = 105907;
                locationId = "commodi";
                offset = 473600;
                role = "modi";
            }};            

            GetSetupV1BusinessusersResponse res = sdk.businessUsers.getSetupV1Businessusers(req);

            if (res.businessUserListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1BusinessusersPermissions

<p>Use this endpoint to return a <b>List of Business User Permissions by Role</b>. Results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1BusinessusersPermissionsRequest;
import org.openapis.openapi.models.operations.GetSetupV1BusinessusersPermissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1BusinessusersPermissionsRequest req = new GetSetupV1BusinessusersPermissionsRequest() {{
                limit = 774234;
                offset = 736918;
                role = "esse";
            }};            

            GetSetupV1BusinessusersPermissionsResponse res = sdk.businessUsers.getSetupV1BusinessusersPermissions(req);

            if (res.businessPermissionListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1BusinessusersEmailCompanies

<p>Use this endpoint to return a <b>List of Companies</b> associated with the business users email requested. A business user <b>email</b> address is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1BusinessusersEmailCompaniesRequest;
import org.openapis.openapi.models.operations.GetSetupV1BusinessusersEmailCompaniesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1BusinessusersEmailCompaniesRequest req = new GetSetupV1BusinessusersEmailCompaniesRequest("excepturi") {{
                limit = 135218;
                offset = 18789;
                searchText = "ad";
            }};            

            GetSetupV1BusinessusersEmailCompaniesResponse res = sdk.businessUsers.getSetupV1BusinessusersEmailCompanies(req);

            if (res.authorizedCompanyListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetupV1BusinessusersId

<p>Use this endpoint to return a <b>Business User</b> object. A valid <b>businessUser id</b> is required. Find businessUser id's using the <i>GET /setup/v1/businessusers</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1BusinessusersIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1BusinessusersIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1BusinessusersIdRequest req = new GetSetupV1BusinessusersIdRequest("sed");            

            GetSetupV1BusinessusersIdResponse res = sdk.businessUsers.getSetupV1BusinessusersId(req);

            if (res.businessUserViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupV1Businessusers

<p>Use this endpoint to <b>Create</b> a Business User. If not specified, the business location defaults to the primary business location. </p>
<p>Required fields: <b>Name</b>, <b>Email</b> and <b>Role</b><b>Note:</b> If the businessUser is a bookable resource (bizresource) then a resourceId is required.</p>
<p>For role, use one of the values listed. <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>
<p>The <b>sendRegistrationInvite</b> parameter is available to API consumers for their own use. It provides no added functionality in OnSched.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupV1BusinessusersResponse;
import org.openapis.openapi.models.shared.BusinessUserInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BusinessUserInputModel req = new BusinessUserInputModel() {{
                email = "Lexie_Howe68@gmail.com";
                locationId = "in";
                name = "Sheryl Kertzmann";
                resourceId = "architecto";
                role = "ipsa";
                sendRegistrationInvite = false;
            }};            

            PostSetupV1BusinessusersResponse res = sdk.businessUsers.postSetupV1Businessusers(req);

            if (res.businessUserViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1BusinessusersId

<p>Use this endpoint to <b>Update</b> a Business User. A valid <b>businessUser id</b> is required.</p>
<p>
  <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1BusinessusersIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1BusinessusersIdResponse;
import org.openapis.openapi.models.shared.BusinessUserUpdateModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1BusinessusersIdRequest req = new PutSetupV1BusinessusersIdRequest("est") {{
                businessUserUpdateModel = new BusinessUserUpdateModel() {{
                    email = "Marcos35@yahoo.com";
                    name = "Della Halvorson";
                    resourceId = "minima";
                    role = "excepturi";
                    sendRegistrationInvite = false;
                }};;
            }};            

            PutSetupV1BusinessusersIdResponse res = sdk.businessUsers.putSetupV1BusinessusersId(req);

            if (res.businessUserViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
