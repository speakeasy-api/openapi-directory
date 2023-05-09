# samlRoles

### Available Operations

* [createOrganizationSamlRole](#createorganizationsamlrole) - Create a SAML role
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
import org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequestBodyTags;
import org.openapis.openapi.models.operations.CreateOrganizationSamlRoleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationSamlRoleRequest req = new CreateOrganizationSamlRoleRequest(                new CreateOrganizationSamlRoleRequestBody("quasi", "laboriosam") {{
                                networks = new org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequestBodyNetworks[]{{
                                    add(new CreateOrganizationSamlRoleRequestBodyNetworks("deserunt", "doloremque") {{
                                        access = "libero";
                                        id = "99545fc9-5fa8-4897-8e18-9dbb30fcb33e";
                                    }}),
                                    add(new CreateOrganizationSamlRoleRequestBodyNetworks("nisi", "libero") {{
                                        access = "quis";
                                        id = "5b197cd4-4e2f-452d-82d3-513bb6f48b65";
                                    }}),
                                    add(new CreateOrganizationSamlRoleRequestBodyNetworks("aspernatur", "enim") {{
                                        access = "minus";
                                        id = "db35ff2e-4b27-4537-a8cd-9e7319c177d5";
                                    }}),
                                    add(new CreateOrganizationSamlRoleRequestBodyNetworks("aspernatur", "nam") {{
                                        access = "delectus";
                                        id = "77b114ee-b52f-4f78-9fc3-7814d4c98e0c";
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.operations.CreateOrganizationSamlRoleRequestBodyTags[]{{
                                    add(new CreateOrganizationSamlRoleRequestBodyTags("repudiandae", "rerum") {{
                                        access = "quas";
                                        tag = "provident";
                                    }}),
                                    add(new CreateOrganizationSamlRoleRequestBodyTags("vero", "similique") {{
                                        access = "dignissimos";
                                        tag = "corporis";
                                    }}),
                                    add(new CreateOrganizationSamlRoleRequestBodyTags("dolorem", "commodi") {{
                                        access = "repellendus";
                                        tag = "iure";
                                    }}),
                                }};
                            }};, "impedit");            

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
                .setSecurity(new Security("commodi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSamlRoleRequest req = new GetOrganizationSamlRoleRequest("aut", "voluptatem");            

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
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSamlRolesRequest req = new GetOrganizationSamlRolesRequest("quae");            

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
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequestBodyTags;
import org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationSamlRoleRequest req = new UpdateOrganizationSamlRoleRequest("illum", "praesentium") {{
                requestBody = new UpdateOrganizationSamlRoleRequestBody() {{
                    networks = new org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequestBodyNetworks[]{{
                        add(new UpdateOrganizationSamlRoleRequestBodyNetworks("occaecati", "atque") {{
                            access = "cum";
                            id = "31180f73-9ae9-4e05-beb8-09e2810331f3";
                        }}),
                        add(new UpdateOrganizationSamlRoleRequestBodyNetworks("qui", "consectetur") {{
                            access = "beatae";
                            id = "d4c700b6-07f3-4c93-873b-9da3f2ceda7e";
                        }}),
                        add(new UpdateOrganizationSamlRoleRequestBodyNetworks("sit", "modi") {{
                            access = "repellat";
                            id = "2257411f-af4b-4754-8e47-2e802857a5b4";
                        }}),
                    }};
                    orgAccess = "eum";
                    role = "nesciunt";
                    tags = new org.openapis.openapi.models.operations.UpdateOrganizationSamlRoleRequestBodyTags[]{{
                        add(new UpdateOrganizationSamlRoleRequestBodyTags("nostrum", "molestiae") {{
                            access = "dignissimos";
                            tag = "fugiat";
                        }}),
                        add(new UpdateOrganizationSamlRoleRequestBodyTags("ab", "modi") {{
                            access = "veniam";
                            tag = "reiciendis";
                        }}),
                        add(new UpdateOrganizationSamlRoleRequestBodyTags("eveniet", "odio") {{
                            access = "aut";
                            tag = "aut";
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
