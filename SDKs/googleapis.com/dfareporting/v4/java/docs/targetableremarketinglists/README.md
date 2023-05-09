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

            DfareportingTargetableRemarketingListsGetRequest req = new DfareportingTargetableRemarketingListsGetRequest("quibusdam", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "neque";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "est";
                key = "vitae";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "aspernatur";
                uploadProtocol = "aliquid";
            }};            

            DfareportingTargetableRemarketingListsGetResponse res = sdk.targetableRemarketingLists.dfareportingTargetableRemarketingListsGet(req, new DfareportingTargetableRemarketingListsGetSecurity("quidem", "ex") {{
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

            DfareportingTargetableRemarketingListsListRequest req = new DfareportingTargetableRemarketingListsListRequest("pariatur", "autem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                active = false;
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "sint";
                key = "eius";
                maxResults = 297128L;
                name = "Catherine West";
                oauthToken = "reprehenderit";
                pageToken = "odit";
                prettyPrint = false;
                quotaUser = "neque";
                sortField = DfareportingTargetableRemarketingListsListSortFieldEnum.NAME;
                sortOrder = DfareportingTargetableRemarketingListsListSortOrderEnum.DESCENDING;
                uploadType = "voluptates";
                uploadProtocol = "quo";
            }};            

            DfareportingTargetableRemarketingListsListResponse res = sdk.targetableRemarketingLists.dfareportingTargetableRemarketingListsList(req, new DfareportingTargetableRemarketingListsListSecurity("quis", "velit") {{
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
