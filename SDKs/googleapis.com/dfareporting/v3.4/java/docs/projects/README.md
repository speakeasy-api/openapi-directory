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

            DfareportingProjectsGetRequest req = new DfareportingProjectsGetRequest("earum", "necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "itaque";
                fields = "alias";
                key = "ea";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "nam";
                uploadProtocol = "consectetur";
            }};            

            DfareportingProjectsGetResponse res = sdk.projects.dfareportingProjectsGet(req, new DfareportingProjectsGetSecurity("suscipit", "est") {{
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

            DfareportingProjectsListRequest req = new DfareportingProjectsListRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odio";
                advertiserIds = new String[]{{
                    add("ut"),
                }};
                alt = AltEnum.JSON;
                callback = "corrupti";
                fields = "accusantium";
                ids = new String[]{{
                    add("consequatur"),
                    add("fuga"),
                    add("dolorem"),
                    add("tenetur"),
                }};
                key = "maxime";
                maxResults = 447619L;
                oauthToken = "dolor";
                pageToken = "animi";
                prettyPrint = false;
                quotaUser = "ullam";
                searchString = "similique";
                sortField = DfareportingProjectsListSortFieldEnum.ID;
                sortOrder = DfareportingProjectsListSortOrderEnum.ASCENDING;
                uploadType = "aliquam";
                uploadProtocol = "soluta";
            }};            

            DfareportingProjectsListResponse res = sdk.projects.dfareportingProjectsList(req, new DfareportingProjectsListSecurity("inventore", "ab") {{
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
