# sitemaps

### Available Operations

* [webmastersSitemapsDelete](#webmasterssitemapsdelete) - Deletes a sitemap from this site.
* [webmastersSitemapsGet](#webmasterssitemapsget) - Retrieves information about a specific sitemap.
* [webmastersSitemapsList](#webmasterssitemapslist) - Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
* [webmastersSitemapsSubmit](#webmasterssitemapssubmit) - Submits a sitemap for a site.

## webmastersSitemapsDelete

Deletes a sitemap from this site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebmastersSitemapsDeleteRequest;
import org.openapis.openapi.models.operations.WebmastersSitemapsDeleteResponse;
import org.openapis.openapi.models.operations.WebmastersSitemapsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitemapsDeleteRequest req = new WebmastersSitemapsDeleteRequest("explicabo", "nobis") {{
                alt = AltEnum.JSON;
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                userIp = "excepturi";
            }};            

            WebmastersSitemapsDeleteResponse res = sdk.sitemaps.webmastersSitemapsDelete(req, new WebmastersSitemapsDeleteSecurity("accusantium", "iure") {{
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

## webmastersSitemapsGet

Retrieves information about a specific sitemap.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebmastersSitemapsGetRequest;
import org.openapis.openapi.models.operations.WebmastersSitemapsGetResponse;
import org.openapis.openapi.models.operations.WebmastersSitemapsGetSecurity;
import org.openapis.openapi.models.operations.WebmastersSitemapsGetSecurityOption1;
import org.openapis.openapi.models.operations.WebmastersSitemapsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitemapsGetRequest req = new WebmastersSitemapsGetRequest("culpa", "doloribus") {{
                alt = AltEnum.JSON;
                fields = "sapiente";
                key = "architecto";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "dolorem";
                userIp = "culpa";
            }};            

            WebmastersSitemapsGetResponse res = sdk.sitemaps.webmastersSitemapsGet(req, new WebmastersSitemapsGetSecurity() {{
                option1 = new WebmastersSitemapsGetSecurityOption1("consequuntur", "repellat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.wmxSitemap != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webmastersSitemapsList

Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebmastersSitemapsListRequest;
import org.openapis.openapi.models.operations.WebmastersSitemapsListResponse;
import org.openapis.openapi.models.operations.WebmastersSitemapsListSecurity;
import org.openapis.openapi.models.operations.WebmastersSitemapsListSecurityOption1;
import org.openapis.openapi.models.operations.WebmastersSitemapsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitemapsListRequest req = new WebmastersSitemapsListRequest("mollitia") {{
                alt = AltEnum.JSON;
                fields = "occaecati";
                key = "numquam";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "quam";
                sitemapIndex = "molestiae";
                userIp = "velit";
            }};            

            WebmastersSitemapsListResponse res = sdk.sitemaps.webmastersSitemapsList(req, new WebmastersSitemapsListSecurity() {{
                option1 = new WebmastersSitemapsListSecurityOption1("error", "quia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sitemapsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webmastersSitemapsSubmit

Submits a sitemap for a site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebmastersSitemapsSubmitRequest;
import org.openapis.openapi.models.operations.WebmastersSitemapsSubmitResponse;
import org.openapis.openapi.models.operations.WebmastersSitemapsSubmitSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitemapsSubmitRequest req = new WebmastersSitemapsSubmitRequest("quis", "vitae") {{
                alt = AltEnum.JSON;
                fields = "laborum";
                key = "animi";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                userIp = "quo";
            }};            

            WebmastersSitemapsSubmitResponse res = sdk.sitemaps.webmastersSitemapsSubmit(req, new WebmastersSitemapsSubmitSecurity("sequi", "tenetur") {{
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
