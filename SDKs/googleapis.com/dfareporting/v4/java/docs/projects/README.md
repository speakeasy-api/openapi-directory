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

            DfareportingProjectsGetRequest req = new DfareportingProjectsGetRequest("quod", "animi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nam";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "esse";
                key = "voluptatem";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "temporibus";
                uploadProtocol = "corporis";
            }};            

            DfareportingProjectsGetResponse res = sdk.projects.dfareportingProjectsGet(req, new DfareportingProjectsGetSecurity("odio", "iste") {{
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

            DfareportingProjectsListRequest req = new DfareportingProjectsListRequest("rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "velit";
                advertiserIds = new String[]{{
                    add("veniam"),
                    add("illum"),
                    add("labore"),
                }};
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "ullam";
                ids = new String[]{{
                    add("omnis"),
                    add("quibusdam"),
                    add("nostrum"),
                }};
                key = "impedit";
                maxResults = 202175L;
                oauthToken = "velit";
                pageToken = "magnam";
                prettyPrint = false;
                quotaUser = "cupiditate";
                searchString = "nemo";
                sortField = DfareportingProjectsListSortFieldEnum.ID;
                sortOrder = DfareportingProjectsListSortOrderEnum.ASCENDING;
                uploadType = "facere";
                uploadProtocol = "minima";
            }};            

            DfareportingProjectsListResponse res = sdk.projects.dfareportingProjectsList(req, new DfareportingProjectsListSecurity("ullam", "dolores") {{
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
