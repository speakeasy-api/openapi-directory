# sitemaps

### Available Operations

* [webmastersSitemapsDelete](#webmasterssitemapsdelete) - Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
* [webmastersSitemapsGet](#webmasterssitemapsget) - Retrieves information about a specific sitemap.
* [webmastersSitemapsList](#webmasterssitemapslist) -  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
* [webmastersSitemapsSubmit](#webmasterssitemapssubmit) - Submits a sitemap for a site.

## webmastersSitemapsDelete

Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebmastersSitemapsDeleteRequest;
import org.openapis.openapi.models.operations.WebmastersSitemapsDeleteResponse;
import org.openapis.openapi.models.operations.WebmastersSitemapsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitemapsDeleteRequest req = new WebmastersSitemapsDeleteRequest("error", "quia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "animi";
                fields = "enim";
                key = "odit";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "tenetur";
                uploadProtocol = "ipsam";
            }};            

            WebmastersSitemapsDeleteResponse res = sdk.sitemaps.webmastersSitemapsDelete(req, new WebmastersSitemapsDeleteSecurity("id", "possimus") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitemapsGetRequest req = new WebmastersSitemapsGetRequest("aut", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "praesentium";
                uploadProtocol = "voluptatibus";
            }};            

            WebmastersSitemapsGetResponse res = sdk.sitemaps.webmastersSitemapsGet(req, new WebmastersSitemapsGetSecurity() {{
                option1 = new WebmastersSitemapsGetSecurityOption1("ipsa", "omnis") {{
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

 Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).

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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitemapsListRequest req = new WebmastersSitemapsListRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "reprehenderit";
                fields = "ut";
                key = "maiores";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "corporis";
                sitemapIndex = "dolore";
                uploadType = "iusto";
                uploadProtocol = "dicta";
            }};            

            WebmastersSitemapsListResponse res = sdk.sitemaps.webmastersSitemapsList(req, new WebmastersSitemapsListSecurity() {{
                option1 = new WebmastersSitemapsListSecurityOption1("harum", "enim") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebmastersSitemapsSubmitRequest req = new WebmastersSitemapsSubmitRequest("accusamus", "commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "molestias";
                key = "excepturi";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "praesentium";
                uploadProtocol = "rem";
            }};            

            WebmastersSitemapsSubmitResponse res = sdk.sitemaps.webmastersSitemapsSubmit(req, new WebmastersSitemapsSubmitSecurity("voluptates", "quasi") {{
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
