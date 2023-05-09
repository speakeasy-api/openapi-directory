# projects

### Available Operations

* [firebasehostingProjectsSitesCreate](#firebasehostingprojectssitescreate) - Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
* [firebasehostingProjectsSitesList](#firebasehostingprojectssiteslist) - Lists each Hosting Site associated with the specified parent Firebase project.

## firebasehostingProjectsSitesCreate

Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateRequest;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateResponse;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurity;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SiteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingProjectsSitesCreateRequest req = new FirebasehostingProjectsSitesCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                siteInput = new SiteInput() {{
                    appId = "recusandae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ab", "quis");
                        put("veritatis", "deserunt");
                        put("perferendis", "ipsam");
                        put("repellendus", "sapiente");
                    }};
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "at";
                key = "maiores";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                siteId = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            FirebasehostingProjectsSitesCreateResponse res = sdk.projects.firebasehostingProjectsSitesCreate(req, new FirebasehostingProjectsSitesCreateSecurity() {{
                option1 = new FirebasehostingProjectsSitesCreateSecurityOption1("porro", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.site != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebasehostingProjectsSitesList

Lists each Hosting Site associated with the specified parent Firebase project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesListRequest;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesListResponse;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesListSecurity;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesListSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesListSecurityOption2;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesListSecurityOption3;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingProjectsSitesListRequest req = new FirebasehostingProjectsSitesListRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "deleniti";
                key = "hic";
                oauthToken = "optio";
                pageSize = 521848L;
                pageToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "molestiae";
                uploadProtocol = "modi";
            }};            

            FirebasehostingProjectsSitesListResponse res = sdk.projects.firebasehostingProjectsSitesList(req, new FirebasehostingProjectsSitesListSecurity() {{
                option1 = new FirebasehostingProjectsSitesListSecurityOption1("qui", "impedit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listSitesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
