# admins

### Available Operations

* [createOrganizationAdmin](#createorganizationadmin) - Create a new dashboard administrator
* [deleteOrganizationAdmin](#deleteorganizationadmin) - Revoke all access for a dashboard administrator within this organization
* [getOrganizationAdmins](#getorganizationadmins) - List the dashboard administrators in this organization
* [updateOrganizationAdmin](#updateorganizationadmin) - Update an administrator

## createOrganizationAdmin

Create a new dashboard administrator

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationAdminRequest;
import org.openapis.openapi.models.operations.CreateOrganizationAdminRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationAdminRequestBodyAuthenticationMethodEnum;
import org.openapis.openapi.models.operations.CreateOrganizationAdminRequestBodyNetworks;
import org.openapis.openapi.models.operations.CreateOrganizationAdminRequestBodyOrgAccessEnum;
import org.openapis.openapi.models.operations.CreateOrganizationAdminRequestBodyTags;
import org.openapis.openapi.models.operations.CreateOrganizationAdminResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationAdminRequest req = new CreateOrganizationAdminRequest(                new CreateOrganizationAdminRequestBody("deleniti", "hic", CreateOrganizationAdminRequestBodyOrgAccessEnum.READ_ONLY) {{
                                authenticationMethod = CreateOrganizationAdminRequestBodyAuthenticationMethodEnum.EMAIL;
                                networks = new org.openapis.openapi.models.operations.CreateOrganizationAdminRequestBodyNetworks[]{{
                                    add(new CreateOrganizationAdminRequestBodyNetworks("laborum", "dolores") {{
                                        access = "commodi";
                                        id = "742cb739-2059-4293-96fe-a7596eb10faa";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.operations.CreateOrganizationAdminRequestBodyTags[]{{
                                    add(new CreateOrganizationAdminRequestBodyTags("nobis", "enim") {{
                                        access = "corporis";
                                        tag = "explicabo";
                                    }}),
                                }};
                            }};, "omnis");            

            CreateOrganizationAdminResponse res = sdk.admins.createOrganizationAdmin(req);

            if (res.createOrganizationAdmin201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationAdmin

Revoke all access for a dashboard administrator within this organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationAdminRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationAdminResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationAdminRequest req = new DeleteOrganizationAdminRequest("minima", "excepturi");            

            DeleteOrganizationAdminResponse res = sdk.admins.deleteOrganizationAdmin(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdmins

List the dashboard administrators in this organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdminsRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdminsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdminsRequest req = new GetOrganizationAdminsRequest("iure");            

            GetOrganizationAdminsResponse res = sdk.admins.getOrganizationAdmins(req);

            if (res.getOrganizationAdmins200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationAdmin

Update an administrator

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationAdminRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationAdminRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationAdminRequestBodyNetworks;
import org.openapis.openapi.models.operations.UpdateOrganizationAdminRequestBodyOrgAccessEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationAdminRequestBodyTags;
import org.openapis.openapi.models.operations.UpdateOrganizationAdminResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAdminRequest req = new UpdateOrganizationAdminRequest("doloribus", "sapiente") {{
                requestBody = new UpdateOrganizationAdminRequestBody() {{
                    name = "Angie Durgan";
                    networks = new org.openapis.openapi.models.operations.UpdateOrganizationAdminRequestBodyNetworks[]{{
                        add(new UpdateOrganizationAdminRequestBodyNetworks("voluptatibus", "ipsa") {{
                            access = "mollitia";
                            id = "94677392-51aa-452c-bf5a-d019da1ffe78";
                        }}),
                        add(new UpdateOrganizationAdminRequestBodyNetworks("itaque", "incidunt") {{
                            access = "omnis";
                            id = "7b0074f1-5471-4b5e-ae13-b99d488e1e91";
                        }}),
                        add(new UpdateOrganizationAdminRequestBodyNetworks("provident", "necessitatibus") {{
                            access = "enim";
                            id = "0ad2abd4-4269-4802-9502-a94bb4f63c96";
                        }}),
                        add(new UpdateOrganizationAdminRequestBodyNetworks("deserunt", "nisi") {{
                            access = "sint";
                            id = "a3efa77d-fb14-4cd6-aae3-95efb9ba88f3";
                        }}),
                    }};
                    orgAccess = UpdateOrganizationAdminRequestBodyOrgAccessEnum.FULL;
                    tags = new org.openapis.openapi.models.operations.UpdateOrganizationAdminRequestBodyTags[]{{
                        add(new UpdateOrganizationAdminRequestBodyTags("perferendis", "nihil") {{
                            access = "omnis";
                            tag = "molestiae";
                        }}),
                        add(new UpdateOrganizationAdminRequestBodyTags("id", "labore") {{
                            access = "magnam";
                            tag = "distinctio";
                        }}),
                        add(new UpdateOrganizationAdminRequestBodyTags("natus", "nobis") {{
                            access = "labore";
                            tag = "suscipit";
                        }}),
                    }};
                }};;
            }};            

            UpdateOrganizationAdminResponse res = sdk.admins.updateOrganizationAdmin(req);

            if (res.updateOrganizationAdmin200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
