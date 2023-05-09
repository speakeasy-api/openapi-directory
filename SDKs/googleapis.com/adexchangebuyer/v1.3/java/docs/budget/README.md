# budget

### Available Operations

* [adexchangebuyerBudgetGet](#adexchangebuyerbudgetget) - Returns the budget information for the adgroup specified by the accountId and billingId.
* [adexchangebuyerBudgetPatch](#adexchangebuyerbudgetpatch) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* [adexchangebuyerBudgetUpdate](#adexchangebuyerbudgetupdate) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

## adexchangebuyerBudgetGet

Returns the budget information for the adgroup specified by the accountId and billingId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerBudgetGetRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerBudgetGetResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerBudgetGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerBudgetGetRequest req = new AdexchangebuyerBudgetGetRequest("est", "mollitia") {{
                alt = AltEnum.JSON;
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "corporis";
                userIp = "explicabo";
            }};            

            AdexchangebuyerBudgetGetResponse res = sdk.budget.adexchangebuyerBudgetGet(req, new AdexchangebuyerBudgetGetSecurity("nobis", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.budget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerBudgetPatch

Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerBudgetPatchRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerBudgetPatchResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerBudgetPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Budget;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerBudgetPatchRequest req = new AdexchangebuyerBudgetPatchRequest("omnis", "nemo") {{
                budget = new Budget() {{
                    accountId = "minima";
                    billingId = "excepturi";
                    budgetAmount = "accusantium";
                    currencyCode = "iure";
                    id = "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0";
                    kind = "quasi";
                }};;
                alt = AltEnum.JSON;
                fields = "error";
                key = "temporibus";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "quasi";
                userIp = "reiciendis";
            }};            

            AdexchangebuyerBudgetPatchResponse res = sdk.budget.adexchangebuyerBudgetPatch(req, new AdexchangebuyerBudgetPatchSecurity("voluptatibus", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.budget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adexchangebuyerBudgetUpdate

Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerBudgetUpdateRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerBudgetUpdateResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerBudgetUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Budget;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerBudgetUpdateRequest req = new AdexchangebuyerBudgetUpdateRequest("nihil", "praesentium") {{
                budget = new Budget() {{
                    accountId = "voluptatibus";
                    billingId = "ipsa";
                    budgetAmount = "omnis";
                    currencyCode = "voluptate";
                    id = "b0074f15-471b-45e6-a13b-99d488e1e91e";
                    kind = "incidunt";
                }};;
                alt = AltEnum.JSON;
                fields = "enim";
                key = "consequatur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "quibusdam";
                userIp = "explicabo";
            }};            

            AdexchangebuyerBudgetUpdateResponse res = sdk.budget.adexchangebuyerBudgetUpdate(req, new AdexchangebuyerBudgetUpdateSecurity("deserunt", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.budget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
