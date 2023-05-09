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

            DfareportingTargetableRemarketingListsGetRequest req = new DfareportingTargetableRemarketingListsGetRequest("perferendis", "odio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "quibusdam";
                fields = "magni";
                key = "eum";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "repellat";
                uploadProtocol = "dolorum";
            }};            

            DfareportingTargetableRemarketingListsGetResponse res = sdk.targetableRemarketingLists.dfareportingTargetableRemarketingListsGet(req, new DfareportingTargetableRemarketingListsGetSecurity("veniam", "reprehenderit") {{
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

            DfareportingTargetableRemarketingListsListRequest req = new DfareportingTargetableRemarketingListsListRequest("odio", "aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                active = false;
                alt = AltEnum.JSON;
                callback = "corrupti";
                fields = "amet";
                key = "similique";
                maxResults = 387483L;
                name = "Angelina Ritchie";
                oauthToken = "cum";
                pageToken = "in";
                prettyPrint = false;
                quotaUser = "voluptatum";
                sortField = DfareportingTargetableRemarketingListsListSortFieldEnum.NAME;
                sortOrder = DfareportingTargetableRemarketingListsListSortOrderEnum.DESCENDING;
                uploadType = "in";
                uploadProtocol = "sequi";
            }};            

            DfareportingTargetableRemarketingListsListResponse res = sdk.targetableRemarketingLists.dfareportingTargetableRemarketingListsList(req, new DfareportingTargetableRemarketingListsListSecurity("inventore", "doloremque") {{
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
