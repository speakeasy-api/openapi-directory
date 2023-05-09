# organizations

### Available Operations

* [accesscontextmanagerOrganizationsGcpUserAccessBindingsCreate](#accesscontextmanagerorganizationsgcpuseraccessbindingscreate) - Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsDelete](#accesscontextmanagerorganizationsgcpuseraccessbindingsdelete) - Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsGet](#accesscontextmanagerorganizationsgcpuseraccessbindingsget) - Gets the GcpUserAccessBinding with the given name.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsList](#accesscontextmanagerorganizationsgcpuseraccessbindingslist) - Lists all GcpUserAccessBindings for a Google Cloud organization.
* [accesscontextmanagerOrganizationsGcpUserAccessBindingsPatch](#accesscontextmanagerorganizationsgcpuseraccessbindingspatch) - Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.

## accesscontextmanagerOrganizationsGcpUserAccessBindingsCreate

Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GcpUserAccessBinding;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest req = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest("facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                gcpUserAccessBinding = new GcpUserAccessBinding() {{
                    accessLevels = new String[]{{
                        add("voluptatibus"),
                        add("voluptatibus"),
                    }};
                    dryRunAccessLevels = new String[]{{
                        add("debitis"),
                    }};
                    groupKey = "labore";
                    name = "Craig Kiehn";
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "eligendi";
                key = "fugiat";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "ducimus";
                uploadProtocol = "dolor";
            }};            

            AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateResponse res = sdk.organizations.accesscontextmanagerOrganizationsGcpUserAccessBindingsCreate(req, new AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateSecurity("dicta", "error") {{
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

## accesscontextmanagerOrganizationsGcpUserAccessBindingsDelete

Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest req = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest("porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "ad";
                key = "aspernatur";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "iusto";
                uploadProtocol = "dignissimos";
            }};            

            AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse res = sdk.organizations.accesscontextmanagerOrganizationsGcpUserAccessBindingsDelete(req, new AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteSecurity("libero", "illo") {{
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

## accesscontextmanagerOrganizationsGcpUserAccessBindingsGet

Gets the GcpUserAccessBinding with the given name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest req = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "veniam";
                filter = AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetFilterEnum.LEVEL_FORMAT_UNSPECIFIED;
                key = "reiciendis";
                oauthToken = "earum";
                pageSize = 444121L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "repellat";
                uploadProtocol = "quisquam";
            }};            

            AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse res = sdk.organizations.accesscontextmanagerOrganizationsGcpUserAccessBindingsGet(req, new AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetSecurity("sequi", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.gcpUserAccessBinding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accesscontextmanagerOrganizationsGcpUserAccessBindingsList

Lists all GcpUserAccessBindings for a Google Cloud organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest req = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest("deleniti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "aliquam";
                fields = "quisquam";
                key = "provident";
                oauthToken = "laudantium";
                pageSize = 921719L;
                pageToken = "consequatur";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "aspernatur";
                uploadProtocol = "nam";
            }};            

            AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse res = sdk.organizations.accesscontextmanagerOrganizationsGcpUserAccessBindingsList(req, new AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity("expedita", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGcpUserAccessBindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accesscontextmanagerOrganizationsGcpUserAccessBindingsPatch

Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchResponse;
import org.openapis.openapi.models.operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GcpUserAccessBinding;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest req = new AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                gcpUserAccessBinding = new GcpUserAccessBinding() {{
                    accessLevels = new String[]{{
                        add("dignissimos"),
                        add("corporis"),
                        add("vero"),
                    }};
                    dryRunAccessLevels = new String[]{{
                        add("repellendus"),
                        add("iure"),
                        add("dolorem"),
                    }};
                    groupKey = "commodi";
                    name = "Mrs. Leslie Anderson I";
                }};;
                accessToken = "illum";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "cum";
                key = "amet";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "dicta";
                updateMask = "laudantium";
                uploadType = "doloremque";
                uploadProtocol = "earum";
            }};            

            AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchResponse res = sdk.organizations.accesscontextmanagerOrganizationsGcpUserAccessBindingsPatch(req, new AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchSecurity("iusto", "amet") {{
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
