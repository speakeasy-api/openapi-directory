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
import org.openapis.openapi.models.operations.CreateOrganizationAdminRequestBodyTagsAccessEnum;
import org.openapis.openapi.models.operations.CreateOrganizationAdminResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationAdminRequest req = new CreateOrganizationAdminRequest(                new CreateOrganizationAdminRequestBody("corporis", "harum", CreateOrganizationAdminRequestBodyOrgAccessEnum.FULL) {{
                                authenticationMethod = CreateOrganizationAdminRequestBodyAuthenticationMethodEnum.CISCO_SECURE_X_SIGN_ON;
                                networks = new org.openapis.openapi.models.operations.CreateOrganizationAdminRequestBodyNetworks[]{{
                                    add(new CreateOrganizationAdminRequestBodyNetworks("hic", "exercitationem") {{
                                        access = "libero";
                                        id = "1ea42655-5ba3-4c28-b44e-d53b88f3a8d8";
                                    }}),
                                    add(new CreateOrganizationAdminRequestBodyNetworks("provident", "eius") {{
                                        access = "nobis";
                                        id = "0b2f2fb7-b194-4a27-ab26-916fe1f08f42";
                                    }}),
                                    add(new CreateOrganizationAdminRequestBodyNetworks("numquam", "veniam") {{
                                        access = "necessitatibus";
                                        id = "3698f447-f603-4e8b-845e-80ca55efd20e";
                                    }}),
                                    add(new CreateOrganizationAdminRequestBodyNetworks("ipsam", "sit") {{
                                        access = "in";
                                        id = "e1858b6a-89fb-4e3a-9aa8-e4824d0ab407";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.operations.CreateOrganizationAdminRequestBodyTags[]{{
                                    add(new CreateOrganizationAdminRequestBodyTags(CreateOrganizationAdminRequestBodyTagsAccessEnum.GUEST_AMBASSADOR, "et") {{
                                        access = CreateOrganizationAdminRequestBodyTagsAccessEnum.MONITOR_ONLY;
                                        tag = "repudiandae";
                                    }}),
                                    add(new CreateOrganizationAdminRequestBodyTags(CreateOrganizationAdminRequestBodyTagsAccessEnum.FULL, "sit") {{
                                        access = CreateOrganizationAdminRequestBodyTagsAccessEnum.MONITOR_ONLY;
                                        tag = "ex";
                                    }}),
                                    add(new CreateOrganizationAdminRequestBodyTags(CreateOrganizationAdminRequestBodyTagsAccessEnum.READ_ONLY, "error") {{
                                        access = CreateOrganizationAdminRequestBodyTagsAccessEnum.GUEST_AMBASSADOR;
                                        tag = "nostrum";
                                    }}),
                                }};
                            }};, "consequatur");            

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
                .setSecurity(new Security("incidunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationAdminRequest req = new DeleteOrganizationAdminRequest("reiciendis", "dolorem");            

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
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdminsRequest req = new GetOrganizationAdminsRequest("dicta");            

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
import org.openapis.openapi.models.operations.UpdateOrganizationAdminRequestBodyTagsAccessEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationAdminResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAdminRequest req = new UpdateOrganizationAdminRequest("occaecati", "labore") {{
                requestBody = new UpdateOrganizationAdminRequestBody() {{
                    name = "Alberto Osinski";
                    networks = new org.openapis.openapi.models.operations.UpdateOrganizationAdminRequestBodyNetworks[]{{
                        add(new UpdateOrganizationAdminRequestBodyNetworks("amet", "assumenda") {{
                            access = "alias";
                            id = "3a79f9df-e0ab-47da-8a50-ce187f86bc17";
                        }}),
                        add(new UpdateOrganizationAdminRequestBodyNetworks("laboriosam", "velit") {{
                            access = "ea";
                            id = "89eee952-6f8d-4986-a881-ead4f0e10125";
                        }}),
                    }};
                    orgAccess = UpdateOrganizationAdminRequestBodyOrgAccessEnum.READ_ONLY;
                    tags = new org.openapis.openapi.models.operations.UpdateOrganizationAdminRequestBodyTags[]{{
                        add(new UpdateOrganizationAdminRequestBodyTags(UpdateOrganizationAdminRequestBodyTagsAccessEnum.FULL, "occaecati") {{
                            access = UpdateOrganizationAdminRequestBodyTagsAccessEnum.GUEST_AMBASSADOR;
                            tag = "saepe";
                        }}),
                        add(new UpdateOrganizationAdminRequestBodyTags(UpdateOrganizationAdminRequestBodyTagsAccessEnum.GUEST_AMBASSADOR, "adipisci") {{
                            access = UpdateOrganizationAdminRequestBodyTagsAccessEnum.READ_ONLY;
                            tag = "perspiciatis";
                        }}),
                        add(new UpdateOrganizationAdminRequestBodyTags(UpdateOrganizationAdminRequestBodyTagsAccessEnum.FULL, "fugit") {{
                            access = UpdateOrganizationAdminRequestBodyTagsAccessEnum.READ_ONLY;
                            tag = "occaecati";
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
