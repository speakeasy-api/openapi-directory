# samlRoles

### Available Operations

* [createOrganizationSamlRole](#createorganizationsamlrole) - Create a SAML role
* [deleteOrganizationSamlRole](#deleteorganizationsamlrole) - Remove a SAML role
* [getOrganizationSamlRole](#getorganizationsamlrole) - Return a SAML role
* [getOrganizationSamlRoles](#getorganizationsamlroles) - List the SAML roles for this organization
* [updateOrganizationSamlRole](#updateorganizationsamlrole) - Update a SAML role

## createOrganizationSamlRole

Create a SAML role

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequest;
import org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequestBodyNetworks;
import org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
import org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequestBodyOrgAccessEnum;
import org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequestBodyTags;
import org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequestBodyTagsAccessEnum;
import org.openapis.openapi.models.operations.CreateOrganizationSamlRoleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationSamlRoleRequest req = new CreateOrganizationSamlRoleRequest(                new CreateOrganizationSamlRoleRequestBody(CreateOrganizationSamlRoleRequestBodyOrgAccessEnum.READ_ONLY, "numquam") {{
                                networks = new org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequestBodyNetworks[]{{
                                    add(new CreateOrganizationSamlRoleRequestBodyNetworks(CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum.GUEST_AMBASSADOR, "sapiente") {{
                                        access = CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum.READ_ONLY;
                                        id = "2dc3a0c6-3813-4ec7-bf99-f09e6b2ff77f";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequestBodyTags[]{{
                                    add(new CreateOrganizationSamlRoleRequestBodyTags(CreateOrganizationSamlRoleRequestBodyTagsAccessEnum.MONITOR_ONLY, "et") {{
                                        access = CreateOrganizationSamlRoleRequestBodyTagsAccessEnum.READ_ONLY;
                                        tag = "quod";
                                    }}),
                                    add(new CreateOrganizationSamlRoleRequestBodyTags(CreateOrganizationSamlRoleRequestBodyTagsAccessEnum.MONITOR_ONLY, "et") {{
                                        access = CreateOrganizationSamlRoleRequestBodyTagsAccessEnum.MONITOR_ONLY;
                                        tag = "veritatis";
                                    }}),
                                    add(new CreateOrganizationSamlRoleRequestBodyTags(CreateOrganizationSamlRoleRequestBodyTagsAccessEnum.FULL, "molestias") {{
                                        access = CreateOrganizationSamlRoleRequestBodyTagsAccessEnum.GUEST_AMBASSADOR;
                                        tag = "accusantium";
                                    }}),
                                    add(new CreateOrganizationSamlRoleRequestBodyTags(CreateOrganizationSamlRoleRequestBodyTagsAccessEnum.MONITOR_ONLY, "est") {{
                                        access = CreateOrganizationSamlRoleRequestBodyTagsAccessEnum.FULL;
                                        tag = "qui";
                                    }}),
                                }};
                            }};, "non");            

            CreateOrganizationSamlRoleResponse res = sdk.samlRoles.createOrganizationSamlRole(req);

            if (res.createOrganizationSamlRole201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationSamlRole

Remove a SAML role

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationSamlRoleRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationSamlRoleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationSamlRoleRequest req = new DeleteOrganizationSamlRoleRequest("velit", "rem");            

            DeleteOrganizationSamlRoleResponse res = sdk.samlRoles.deleteOrganizationSamlRole(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSamlRole

Return a SAML role

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSamlRoleRequest;
import org.openapis.openapi.models.operations.GetOrganizationSamlRoleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSamlRoleRequest req = new GetOrganizationSamlRoleRequest("assumenda", "saepe");            

            GetOrganizationSamlRoleResponse res = sdk.samlRoles.getOrganizationSamlRole(req);

            if (res.getOrganizationSamlRole200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSamlRoles

List the SAML roles for this organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSamlRolesRequest;
import org.openapis.openapi.models.operations.GetOrganizationSamlRolesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSamlRolesRequest req = new GetOrganizationSamlRolesRequest("quam");            

            GetOrganizationSamlRolesResponse res = sdk.samlRoles.getOrganizationSamlRoles(req);

            if (res.getOrganizationSamlRoles200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationSamlRole

Update a SAML role

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequestBodyNetworks;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequestBodyTags;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationSamlRoleRequest req = new UpdateOrganizationSamlRoleRequest("eos", "repellendus") {{
                requestBody = new UpdateOrganizationSamlRoleRequestBody() {{
                    networks = new org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequestBodyNetworks[]{{
                        add(new UpdateOrganizationSamlRoleRequestBodyNetworks(UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum.GUEST_AMBASSADOR, "iusto") {{
                            access = UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum.GUEST_AMBASSADOR;
                            id = "6f9bf0a2-5dd9-4e7c-8048-9c05f5f0365c";
                        }}),
                        add(new UpdateOrganizationSamlRoleRequestBodyNetworks(UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum.FULL, "a") {{
                            access = UpdateOrganizationSamlRoleRequestBodyNetworksAccessEnum.GUEST_AMBASSADOR;
                            id = "814b2563-3865-4b10-a1b7-9572fcbbffca";
                        }}),
                    }};
                    orgAccess = UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum.ENTERPRISE;
                    role = "voluptatibus";
                    tags = new org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequestBodyTags[]{{
                        add(new UpdateOrganizationSamlRoleRequestBodyTags(UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum.FULL, "dignissimos") {{
                            access = UpdateOrganizationSamlRoleRequestBodyTagsAccessEnum.FULL;
                            tag = "aliquid";
                        }}),
                    }};
                }};;
            }};            

            UpdateOrganizationSamlRoleResponse res = sdk.samlRoles.updateOrganizationSamlRole(req);

            if (res.updateOrganizationSamlRole200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
