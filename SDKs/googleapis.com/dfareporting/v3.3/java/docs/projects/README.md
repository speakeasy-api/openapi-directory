# projects

### Available Operations

* [dfareportingProjectsGet](#dfareportingprojectsget) - Gets one project by ID.
* [dfareportingProjectsList](#dfareportingprojectslist) - Retrieves a list of projects, possibly filtered. This method supports paging .

## dfareportingProjectsGet

Gets one project by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingProjectsGetRequest;
import org.openapis.openapi.models.operations.DfareportingProjectsGetResponse;
import org.openapis.openapi.models.operations.DfareportingProjectsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingProjectsGetRequest req = new DfareportingProjectsGetRequest("neque", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "beatae";
                fields = "id";
                key = "unde";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "quam";
                uploadProtocol = "recusandae";
            }};            

            DfareportingProjectsGetResponse res = sdk.projects.dfareportingProjectsGet(req, new DfareportingProjectsGetSecurity("iste", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.project != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingProjectsList

Retrieves a list of projects, possibly filtered. This method supports paging .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingProjectsListRequest;
import org.openapis.openapi.models.operations.DfareportingProjectsListResponse;
import org.openapis.openapi.models.operations.DfareportingProjectsListSecurity;
import org.openapis.openapi.models.operations.DfareportingProjectsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingProjectsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingProjectsListRequest req = new DfareportingProjectsListRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                advertiserIds = new String[]{{
                    add("consequatur"),
                    add("facilis"),
                    add("ut"),
                }};
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "saepe";
                ids = new String[]{{
                    add("excepturi"),
                    add("architecto"),
                    add("molestias"),
                }};
                key = "dolores";
                maxResults = 210325L;
                oauthToken = "eligendi";
                pageToken = "veritatis";
                prettyPrint = false;
                quotaUser = "deleniti";
                searchString = "cumque";
                sortField = DfareportingProjectsListSortFieldEnum.NAME;
                sortOrder = DfareportingProjectsListSortOrderEnum.DESCENDING;
                uploadType = "facere";
                uploadProtocol = "vel";
            }};            

            DfareportingProjectsListResponse res = sdk.projects.dfareportingProjectsList(req, new DfareportingProjectsListSecurity("cupiditate", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.projectsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
