# billingAssignments

### Available Operations

* [dfareportingBillingAssignmentsInsert](#dfareportingbillingassignmentsinsert) - Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.
* [dfareportingBillingAssignmentsList](#dfareportingbillingassignmentslist) - Retrieves a list of billing assignments.

## dfareportingBillingAssignmentsInsert

Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingBillingAssignmentsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingBillingAssignmentsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingBillingAssignmentsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BillingAssignment;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingBillingAssignmentsInsertRequest req = new DfareportingBillingAssignmentsInsertRequest("laudantium", "corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                billingAssignment = new BillingAssignment() {{
                    accountId = "natus";
                    advertiserId = "deleniti";
                    campaignId = "necessitatibus";
                    kind = "aspernatur";
                    subaccountId = "dolores";
                }};;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "eos";
                fields = "voluptatem";
                key = "temporibus";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "commodi";
                uploadProtocol = "a";
            }};            

            DfareportingBillingAssignmentsInsertResponse res = sdk.billingAssignments.dfareportingBillingAssignmentsInsert(req, new DfareportingBillingAssignmentsInsertSecurity("minus", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingBillingAssignmentsList

Retrieves a list of billing assignments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingBillingAssignmentsListRequest;
import org.openapis.openapi.models.operations.DfareportingBillingAssignmentsListResponse;
import org.openapis.openapi.models.operations.DfareportingBillingAssignmentsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingBillingAssignmentsListRequest req = new DfareportingBillingAssignmentsListRequest("nam", "quia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "blanditiis";
                key = "sint";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "molestiae";
                uploadProtocol = "itaque";
            }};            

            DfareportingBillingAssignmentsListResponse res = sdk.billingAssignments.dfareportingBillingAssignmentsList(req, new DfareportingBillingAssignmentsListSecurity("rem", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingAssignmentsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
