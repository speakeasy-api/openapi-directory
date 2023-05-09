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

            DfareportingProjectsGetRequest req = new DfareportingProjectsGetRequest("ducimus", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "placeat";
                fields = "ratione";
                key = "magni";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "ex";
                uploadProtocol = "sint";
            }};            

            DfareportingProjectsGetResponse res = sdk.projects.dfareportingProjectsGet(req, new DfareportingProjectsGetSecurity("dignissimos", "rerum") {{
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

            DfareportingProjectsListRequest req = new DfareportingProjectsListRequest("inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                advertiserIds = new String[]{{
                    add("reiciendis"),
                }};
                alt = AltEnum.PROTO;
                callback = "rerum";
                fields = "expedita";
                ids = new String[]{{
                    add("distinctio"),
                }};
                key = "excepturi";
                maxResults = 207213L;
                oauthToken = "maxime";
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "nostrum";
                searchString = "repellat";
                sortField = DfareportingProjectsListSortFieldEnum.ID;
                sortOrder = DfareportingProjectsListSortOrderEnum.ASCENDING;
                uploadType = "alias";
                uploadProtocol = "libero";
            }};            

            DfareportingProjectsListResponse res = sdk.projects.dfareportingProjectsList(req, new DfareportingProjectsListSecurity("at", "quasi") {{
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
