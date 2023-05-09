# sites

### Available Operations

* [webmastersSitesAdd](#webmasterssitesadd) - Adds a site to the set of the user's sites in Search Console.
* [webmastersSitesDelete](#webmasterssitesdelete) - Removes a site from the set of the user's Search Console sites.
* [webmastersSitesGet](#webmasterssitesget) - Retrieves information about specific site.
* [webmastersSitesList](#webmasterssiteslist) - Lists the user's Search Console sites.

## webmastersSitesAdd

Adds a site to the set of the user's sites in Search Console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebmastersSitesAddRequest;
import org.openapis.openapi.models.operations.WebmastersSitesAddResponse;
import org.openapis.openapi.models.operations.WebmastersSitesAddSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitesAddRequest req = new WebmastersSitesAddRequest("ipsam") {{
                alt = AltEnum.JSON;
                fields = "id";
                key = "possimus";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "quasi";
                userIp = "error";
            }};            

            WebmastersSitesAddResponse res = sdk.sites.webmastersSitesAdd(req, new WebmastersSitesAddSecurity("temporibus", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webmastersSitesDelete

Removes a site from the set of the user's Search Console sites.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebmastersSitesDeleteRequest;
import org.openapis.openapi.models.operations.WebmastersSitesDeleteResponse;
import org.openapis.openapi.models.operations.WebmastersSitesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitesDeleteRequest req = new WebmastersSitesDeleteRequest("quasi") {{
                alt = AltEnum.JSON;
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                userIp = "praesentium";
            }};            

            WebmastersSitesDeleteResponse res = sdk.sites.webmastersSitesDelete(req, new WebmastersSitesDeleteSecurity("voluptatibus", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webmastersSitesGet

Retrieves information about specific site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebmastersSitesGetRequest;
import org.openapis.openapi.models.operations.WebmastersSitesGetResponse;
import org.openapis.openapi.models.operations.WebmastersSitesGetSecurity;
import org.openapis.openapi.models.operations.WebmastersSitesGetSecurityOption1;
import org.openapis.openapi.models.operations.WebmastersSitesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitesGetRequest req = new WebmastersSitesGetRequest("omnis") {{
                alt = AltEnum.JSON;
                fields = "voluptate";
                key = "cum";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "doloremque";
                userIp = "reprehenderit";
            }};            

            WebmastersSitesGetResponse res = sdk.sites.webmastersSitesGet(req, new WebmastersSitesGetSecurity() {{
                option1 = new WebmastersSitesGetSecurityOption1("ut", "maiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.wmxSite != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webmastersSitesList

Lists the user's Search Console sites.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebmastersSitesListRequest;
import org.openapis.openapi.models.operations.WebmastersSitesListResponse;
import org.openapis.openapi.models.operations.WebmastersSitesListSecurity;
import org.openapis.openapi.models.operations.WebmastersSitesListSecurityOption1;
import org.openapis.openapi.models.operations.WebmastersSitesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitesListRequest req = new WebmastersSitesListRequest() {{
                alt = AltEnum.JSON;
                fields = "dicta";
                key = "corporis";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "iusto";
                userIp = "dicta";
            }};            

            WebmastersSitesListResponse res = sdk.sites.webmastersSitesList(req, new WebmastersSitesListSecurity() {{
                option1 = new WebmastersSitesListSecurityOption1("harum", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sitesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
