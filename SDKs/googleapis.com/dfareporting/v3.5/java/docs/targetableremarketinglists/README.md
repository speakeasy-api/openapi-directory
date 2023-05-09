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

            DfareportingTargetableRemarketingListsGetRequest req = new DfareportingTargetableRemarketingListsGetRequest("corrupti", "delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "recusandae";
                key = "tempore";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "aut";
                uploadProtocol = "officiis";
            }};            

            DfareportingTargetableRemarketingListsGetResponse res = sdk.targetableRemarketingLists.dfareportingTargetableRemarketingListsGet(req, new DfareportingTargetableRemarketingListsGetSecurity("accusamus", "optio") {{
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

            DfareportingTargetableRemarketingListsListRequest req = new DfareportingTargetableRemarketingListsListRequest("sunt", "autem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempore";
                active = false;
                alt = AltEnum.JSON;
                callback = "alias";
                fields = "sunt";
                key = "porro";
                maxResults = 954746L;
                name = "Mr. Steven Hodkiewicz";
                oauthToken = "eum";
                pageToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "alias";
                sortField = DfareportingTargetableRemarketingListsListSortFieldEnum.ID;
                sortOrder = DfareportingTargetableRemarketingListsListSortOrderEnum.ASCENDING;
                uploadType = "nam";
                uploadProtocol = "numquam";
            }};            

            DfareportingTargetableRemarketingListsListResponse res = sdk.targetableRemarketingLists.dfareportingTargetableRemarketingListsList(req, new DfareportingTargetableRemarketingListsListSecurity("earum", "accusantium") {{
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
