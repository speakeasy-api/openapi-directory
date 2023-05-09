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

            AdexchangebuyerBudgetGetRequest req = new AdexchangebuyerBudgetGetRequest("ipsa", "reiciendis") {{
                alt = AltEnum.JSON;
                fields = "est";
                key = "mollitia";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "dolores";
                userIp = "dolorem";
            }};            

            AdexchangebuyerBudgetGetResponse res = sdk.budget.adexchangebuyerBudgetGet(req, new AdexchangebuyerBudgetGetSecurity("corporis", "explicabo") {{
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

            AdexchangebuyerBudgetPatchRequest req = new AdexchangebuyerBudgetPatchRequest("nobis", "enim") {{
                budget = new Budget() {{
                    accountId = "omnis";
                    billingId = "nemo";
                    budgetAmount = "minima";
                    currencyCode = "excepturi";
                    id = "07aff1a3-a2fa-4946-b739-251aa52c3f5a";
                    kind = "possimus";
                }};;
                alt = AltEnum.JSON;
                fields = "aut";
                key = "quasi";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "temporibus";
                userIp = "laborum";
            }};            

            AdexchangebuyerBudgetPatchResponse res = sdk.budget.adexchangebuyerBudgetPatch(req, new AdexchangebuyerBudgetPatchSecurity("quasi", "reiciendis") {{
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

            AdexchangebuyerBudgetUpdateRequest req = new AdexchangebuyerBudgetUpdateRequest("voluptatibus", "vero") {{
                budget = new Budget() {{
                    accountId = "nihil";
                    billingId = "praesentium";
                    budgetAmount = "voluptatibus";
                    currencyCode = "ipsa";
                    id = "97b0074f-1547-41b5-a6e1-3b99d488e1e9";
                    kind = "veritatis";
                }};;
                alt = AltEnum.JSON;
                fields = "itaque";
                key = "incidunt";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "consequatur";
                userIp = "est";
            }};            

            AdexchangebuyerBudgetUpdateResponse res = sdk.budget.adexchangebuyerBudgetUpdate(req, new AdexchangebuyerBudgetUpdateSecurity("quibusdam", "explicabo") {{
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
