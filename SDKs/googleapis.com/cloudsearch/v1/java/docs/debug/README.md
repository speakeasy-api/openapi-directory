# debug

### Available Operations

* [cloudsearchDebugDatasourcesItemsCheckAccess](#cloudsearchdebugdatasourcesitemscheckaccess) - Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
* [cloudsearchDebugDatasourcesItemsSearchByViewUrl](#cloudsearchdebugdatasourcesitemssearchbyviewurl) - Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
* [cloudsearchDebugIdentitysourcesItemsListForunmappedidentity](#cloudsearchdebugidentitysourcesitemslistforunmappedidentity) - Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
* [cloudsearchDebugIdentitysourcesUnmappedidsList](#cloudsearchdebugidentitysourcesunmappedidslist) - Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

## cloudsearchDebugDatasourcesItemsCheckAccess

Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GSuitePrincipal;
import org.openapis.openapi.models.shared.Principal;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchDebugDatasourcesItemsCheckAccessRequest req = new CloudsearchDebugDatasourcesItemsCheckAccessRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                principal = new Principal() {{
                    groupResourceName = "molestiae";
                    gsuitePrincipal = new GSuitePrincipal() {{
                        gsuiteDomain = false;
                        gsuiteGroupEmail = "minus";
                        gsuiteUserEmail = "placeat";
                    }};;
                    userResourceName = "voluptatum";
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                debugOptionsEnableDebugging = false;
                fields = "recusandae";
                key = "temporibus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }};            

            CloudsearchDebugDatasourcesItemsCheckAccessResponse res = sdk.debug.cloudsearchDebugDatasourcesItemsCheckAccess(req, new CloudsearchDebugDatasourcesItemsCheckAccessSecurity() {{
                option1 = new CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1("perferendis", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchDebugDatasourcesItemsSearchByViewUrl

Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlResponse;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurity;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.SearchItemsByViewUrlRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest req = new CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                searchItemsByViewUrlRequest = new SearchItemsByViewUrlRequest() {{
                    debugOptions = new DebugOptions() {{
                        enableDebugging = false;
                    }};;
                    pageToken = "quo";
                    viewUrl = "odit";
                }};;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "molestiae";
                key = "quod";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "totam";
                uploadProtocol = "porro";
            }};            

            CloudsearchDebugDatasourcesItemsSearchByViewUrlResponse res = sdk.debug.cloudsearchDebugDatasourcesItemsSearchByViewUrl(req, new CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurity() {{
                option1 = new CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurityOption1("dolorum", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchItemsByViewUrlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchDebugIdentitysourcesItemsListForunmappedidentity

Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest;
import org.openapis.openapi.models.operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse;
import org.openapis.openapi.models.operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity;
import org.openapis.openapi.models.operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest req = new CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "deleniti";
                debugOptionsEnableDebugging = false;
                fields = "hic";
                groupResourceName = "optio";
                key = "totam";
                oauthToken = "beatae";
                pageSize = 414662L;
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "impedit";
                userResourceName = "cum";
            }};            

            CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse res = sdk.debug.cloudsearchDebugIdentitysourcesItemsListForunmappedidentity(req, new CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity() {{
                option1 = new CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1("esse", "ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listItemNamesForUnmappedIdentityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchDebugIdentitysourcesUnmappedidsList

Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchDebugIdentitysourcesUnmappedidsListRequest;
import org.openapis.openapi.models.operations.CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum;
import org.openapis.openapi.models.operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse;
import org.openapis.openapi.models.operations.CloudsearchDebugIdentitysourcesUnmappedidsListSecurity;
import org.openapis.openapi.models.operations.CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchDebugIdentitysourcesUnmappedidsListRequest req = new CloudsearchDebugIdentitysourcesUnmappedidsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                debugOptionsEnableDebugging = false;
                fields = "sed";
                key = "iste";
                oauthToken = "dolor";
                pageSize = 616934L;
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                resolutionStatusCode = CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum.INTERNAL_ERROR;
                uploadType = "fuga";
                uploadProtocol = "in";
            }};            

            CloudsearchDebugIdentitysourcesUnmappedidsListResponse res = sdk.debug.cloudsearchDebugIdentitysourcesUnmappedidsList(req, new CloudsearchDebugIdentitysourcesUnmappedidsListSecurity() {{
                option1 = new CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1("corporis", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listUnmappedIdentitiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
