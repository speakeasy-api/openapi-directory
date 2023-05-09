# projects

### Available Operations

* [iapProjectsBrandsCreate](#iapprojectsbrandscreate) - Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
* [iapProjectsBrandsIdentityAwareProxyClientsCreate](#iapprojectsbrandsidentityawareproxyclientscreate) - Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
* [iapProjectsBrandsIdentityAwareProxyClientsList](#iapprojectsbrandsidentityawareproxyclientslist) - Lists the existing clients for the brand.
* [iapProjectsBrandsIdentityAwareProxyClientsResetSecret](#iapprojectsbrandsidentityawareproxyclientsresetsecret) - Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
* [iapProjectsBrandsList](#iapprojectsbrandslist) - Lists the existing brands for the project.
* [iapProjectsIapTunnelLocationsDestGroupsCreate](#iapprojectsiaptunnellocationsdestgroupscreate) - Creates a new TunnelDestGroup.
* [iapProjectsIapTunnelLocationsDestGroupsDelete](#iapprojectsiaptunnellocationsdestgroupsdelete) - Deletes a TunnelDestGroup.
* [iapProjectsIapTunnelLocationsDestGroupsGet](#iapprojectsiaptunnellocationsdestgroupsget) - Retrieves an existing TunnelDestGroup.
* [iapProjectsIapTunnelLocationsDestGroupsList](#iapprojectsiaptunnellocationsdestgroupslist) - Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
* [iapProjectsIapTunnelLocationsDestGroupsPatch](#iapprojectsiaptunnellocationsdestgroupspatch) - Updates a TunnelDestGroup.

## iapProjectsBrandsCreate

Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateRequest;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateResponse;
import org.openapis.openapi.models.operations.IapProjectsBrandsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BrandInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsBrandsCreateRequest req = new IapProjectsBrandsCreateRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                brandInput = new BrandInput() {{
                    applicationTitle = "tempora";
                    supportEmail = "suscipit";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            IapProjectsBrandsCreateResponse res = sdk.projects.iapProjectsBrandsCreate(req, new IapProjectsBrandsCreateSecurity("ab", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.brand != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## iapProjectsBrandsIdentityAwareProxyClientsCreate

Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapProjectsBrandsIdentityAwareProxyClientsCreateRequest;
import org.openapis.openapi.models.operations.IapProjectsBrandsIdentityAwareProxyClientsCreateResponse;
import org.openapis.openapi.models.operations.IapProjectsBrandsIdentityAwareProxyClientsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IdentityAwareProxyClientInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsBrandsIdentityAwareProxyClientsCreateRequest req = new IapProjectsBrandsIdentityAwareProxyClientsCreateRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                identityAwareProxyClientInput = new IdentityAwareProxyClientInput() {{
                    displayName = "perferendis";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            IapProjectsBrandsIdentityAwareProxyClientsCreateResponse res = sdk.projects.iapProjectsBrandsIdentityAwareProxyClientsCreate(req, new IapProjectsBrandsIdentityAwareProxyClientsCreateSecurity("quod", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.identityAwareProxyClient != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## iapProjectsBrandsIdentityAwareProxyClientsList

Lists the existing clients for the brand.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapProjectsBrandsIdentityAwareProxyClientsListRequest;
import org.openapis.openapi.models.operations.IapProjectsBrandsIdentityAwareProxyClientsListResponse;
import org.openapis.openapi.models.operations.IapProjectsBrandsIdentityAwareProxyClientsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsBrandsIdentityAwareProxyClientsListRequest req = new IapProjectsBrandsIdentityAwareProxyClientsListRequest("esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                pageSize = 143353L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "optio";
                uploadProtocol = "totam";
            }};            

            IapProjectsBrandsIdentityAwareProxyClientsListResponse res = sdk.projects.iapProjectsBrandsIdentityAwareProxyClientsList(req, new IapProjectsBrandsIdentityAwareProxyClientsListSecurity("beatae", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listIdentityAwareProxyClientsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## iapProjectsBrandsIdentityAwareProxyClientsResetSecret

Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest;
import org.openapis.openapi.models.operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse;
import org.openapis.openapi.models.operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest req = new IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("impedit", "cum");
                }};
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
            }};            

            IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse res = sdk.projects.iapProjectsBrandsIdentityAwareProxyClientsResetSecret(req, new IapProjectsBrandsIdentityAwareProxyClientsResetSecretSecurity("dolor", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.identityAwareProxyClient != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## iapProjectsBrandsList

Lists the existing brands for the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapProjectsBrandsListRequest;
import org.openapis.openapi.models.operations.IapProjectsBrandsListResponse;
import org.openapis.openapi.models.operations.IapProjectsBrandsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsBrandsListRequest req = new IapProjectsBrandsListRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "corporis";
                key = "iste";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "quidem";
                uploadProtocol = "architecto";
            }};            

            IapProjectsBrandsListResponse res = sdk.projects.iapProjectsBrandsList(req, new IapProjectsBrandsListSecurity("ipsa", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBrandsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## iapProjectsIapTunnelLocationsDestGroupsCreate

Creates a new TunnelDestGroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsCreateRequest;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsCreateResponse;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TunnelDestGroup;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsIapTunnelLocationsDestGroupsCreateRequest req = new IapProjectsIapTunnelLocationsDestGroupsCreateRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                tunnelDestGroup = new TunnelDestGroup() {{
                    cidrs = new String[]{{
                        add("dolores"),
                        add("dolorem"),
                        add("corporis"),
                    }};
                    fqdns = new String[]{{
                        add("nobis"),
                    }};
                    name = "Guadalupe Hickle";
                }};;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "doloribus";
                key = "sapiente";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "mollitia";
                tunnelDestGroupId = "dolorem";
                uploadType = "culpa";
                uploadProtocol = "consequuntur";
            }};            

            IapProjectsIapTunnelLocationsDestGroupsCreateResponse res = sdk.projects.iapProjectsIapTunnelLocationsDestGroupsCreate(req, new IapProjectsIapTunnelLocationsDestGroupsCreateSecurity("repellat", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tunnelDestGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## iapProjectsIapTunnelLocationsDestGroupsDelete

Deletes a TunnelDestGroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsDeleteRequest;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsDeleteResponse;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsIapTunnelLocationsDestGroupsDeleteRequest req = new IapProjectsIapTunnelLocationsDestGroupsDeleteRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "velit";
                key = "error";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "vitae";
                uploadProtocol = "laborum";
            }};            

            IapProjectsIapTunnelLocationsDestGroupsDeleteResponse res = sdk.projects.iapProjectsIapTunnelLocationsDestGroupsDelete(req, new IapProjectsIapTunnelLocationsDestGroupsDeleteSecurity("animi", "enim") {{
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

## iapProjectsIapTunnelLocationsDestGroupsGet

Retrieves an existing TunnelDestGroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsGetRequest;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsGetResponse;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsIapTunnelLocationsDestGroupsGetRequest req = new IapProjectsIapTunnelLocationsDestGroupsGetRequest("odit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "id";
                key = "possimus";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "error";
                uploadProtocol = "temporibus";
            }};            

            IapProjectsIapTunnelLocationsDestGroupsGetResponse res = sdk.projects.iapProjectsIapTunnelLocationsDestGroupsGet(req, new IapProjectsIapTunnelLocationsDestGroupsGetSecurity("laborum", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tunnelDestGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## iapProjectsIapTunnelLocationsDestGroupsList

Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsListRequest;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsListResponse;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsIapTunnelLocationsDestGroupsListRequest req = new IapProjectsIapTunnelLocationsDestGroupsListRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                fields = "voluptatibus";
                key = "ipsa";
                oauthToken = "omnis";
                pageSize = 451159L;
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "doloremque";
                uploadProtocol = "reprehenderit";
            }};            

            IapProjectsIapTunnelLocationsDestGroupsListResponse res = sdk.projects.iapProjectsIapTunnelLocationsDestGroupsList(req, new IapProjectsIapTunnelLocationsDestGroupsListSecurity("ut", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTunnelDestGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## iapProjectsIapTunnelLocationsDestGroupsPatch

Updates a TunnelDestGroup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsPatchRequest;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsPatchResponse;
import org.openapis.openapi.models.operations.IapProjectsIapTunnelLocationsDestGroupsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TunnelDestGroup;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapProjectsIapTunnelLocationsDestGroupsPatchRequest req = new IapProjectsIapTunnelLocationsDestGroupsPatchRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                tunnelDestGroup = new TunnelDestGroup() {{
                    cidrs = new String[]{{
                        add("iusto"),
                        add("dicta"),
                    }};
                    fqdns = new String[]{{
                        add("enim"),
                        add("accusamus"),
                        add("commodi"),
                    }};
                    name = "Eric Emmerich";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "praesentium";
                key = "rem";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "quasi";
                updateMask = "repudiandae";
                uploadType = "sint";
                uploadProtocol = "veritatis";
            }};            

            IapProjectsIapTunnelLocationsDestGroupsPatchResponse res = sdk.projects.iapProjectsIapTunnelLocationsDestGroupsPatch(req, new IapProjectsIapTunnelLocationsDestGroupsPatchSecurity("itaque", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tunnelDestGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
