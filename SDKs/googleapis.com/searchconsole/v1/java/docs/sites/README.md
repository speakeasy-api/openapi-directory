# sites

### Available Operations

* [webmastersSitesAdd](#webmasterssitesadd) -  Adds a site to the set of the user's sites in Search Console.
* [webmastersSitesDelete](#webmasterssitesdelete) -  Removes a site from the set of the user's Search Console sites.
* [webmastersSitesGet](#webmasterssitesget) -  Retrieves information about specific site.
* [webmastersSitesList](#webmasterssiteslist) -  Lists the user's Search Console sites.

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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitesAddRequest req = new WebmastersSitesAddRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "enim";
                key = "consequatur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "explicabo";
                uploadProtocol = "deserunt";
            }};            

            WebmastersSitesAddResponse res = sdk.sites.webmastersSitesAdd(req, new WebmastersSitesAddSecurity("distinctio", "quibusdam") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitesDeleteRequest req = new WebmastersSitesDeleteRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "quos";
                key = "perferendis";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "ipsam";
                uploadProtocol = "alias";
            }};            

            WebmastersSitesDeleteResponse res = sdk.sites.webmastersSitesDelete(req, new WebmastersSitesDeleteSecurity("fugit", "dolorum") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitesGetRequest req = new WebmastersSitesGetRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "delectus";
                key = "eum";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sint";
                uploadProtocol = "aliquid";
            }};            

            WebmastersSitesGetResponse res = sdk.sites.webmastersSitesGet(req, new WebmastersSitesGetSecurity() {{
                option1 = new WebmastersSitesGetSecurityOption1("provident", "necessitatibus") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitesListRequest req = new WebmastersSitesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "a";
                key = "dolorum";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "illum";
                uploadProtocol = "maiores";
            }};            

            WebmastersSitesListResponse res = sdk.sites.webmastersSitesList(req, new WebmastersSitesListSecurity() {{
                option1 = new WebmastersSitesListSecurityOption1("rerum", "dicta") {{
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
