# targetableRemarketingLists

### Available Operations

* [dfareportingTargetableRemarketingListsGet](#dfareportingtargetableremarketinglistsget) - Gets one remarketing list by ID.
* [dfareportingTargetableRemarketingListsList](#dfareportingtargetableremarketinglistslist) - Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

## dfareportingTargetableRemarketingListsGet

Gets one remarketing list by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingTargetableRemarketingListsGetRequest;
import org.openapis.openapi.models.operations.DfareportingTargetableRemarketingListsGetResponse;
import org.openapis.openapi.models.operations.DfareportingTargetableRemarketingListsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingTargetableRemarketingListsGetRequest req = new DfareportingTargetableRemarketingListsGetRequest("deserunt", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "placeat";
                alt = AltEnum.JSON;
                callback = "quaerat";
                fields = "numquam";
                key = "aperiam";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "iusto";
                uploadProtocol = "rerum";
            }};            

            DfareportingTargetableRemarketingListsGetResponse res = sdk.targetableRemarketingLists.dfareportingTargetableRemarketingListsGet(req, new DfareportingTargetableRemarketingListsGetSecurity("repudiandae", "unde") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.targetableRemarketingList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingTargetableRemarketingListsList

Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingTargetableRemarketingListsListRequest;
import org.openapis.openapi.models.operations.DfareportingTargetableRemarketingListsListResponse;
import org.openapis.openapi.models.operations.DfareportingTargetableRemarketingListsListSecurity;
import org.openapis.openapi.models.operations.DfareportingTargetableRemarketingListsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingTargetableRemarketingListsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingTargetableRemarketingListsListRequest req = new DfareportingTargetableRemarketingListsListRequest("dolorum", "optio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                active = false;
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "reprehenderit";
                key = "facilis";
                maxResults = 589402L;
                name = "Matt Kerluke";
                oauthToken = "blanditiis";
                pageToken = "harum";
                prettyPrint = false;
                quotaUser = "architecto";
                sortField = DfareportingTargetableRemarketingListsListSortFieldEnum.NAME;
                sortOrder = DfareportingTargetableRemarketingListsListSortOrderEnum.DESCENDING;
                uploadType = "quibusdam";
                uploadProtocol = "a";
            }};            

            DfareportingTargetableRemarketingListsListResponse res = sdk.targetableRemarketingLists.dfareportingTargetableRemarketingListsList(req, new DfareportingTargetableRemarketingListsListSecurity("reprehenderit", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.targetableRemarketingListsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
