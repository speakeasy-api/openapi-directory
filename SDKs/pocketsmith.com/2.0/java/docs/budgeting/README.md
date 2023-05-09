# budgeting

### Available Operations

* [deleteUsersIdForecastCache](#deleteusersidforecastcache) - Delete forecast cache for user
* [getUsersIdBudget](#getusersidbudget) - List budget for user
* [getUsersIdBudgetSummary](#getusersidbudgetsummary) - Get budget summary for user
* [getUsersIdTrendAnalysis](#getusersidtrendanalysis) - Get trend analysis for user

## deleteUsersIdForecastCache

Delete the user's cached forecast by recalculating the forecast.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUsersIdForecastCacheRequest;
import org.openapis.openapi.models.operations.DeleteUsersIdForecastCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUsersIdForecastCacheRequest req = new DeleteUsersIdForecastCacheRequest(449950L);            

            DeleteUsersIdForecastCacheResponse res = sdk.budgeting.deleteUsersIdForecastCache(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdBudget

Lists the user's budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdBudgetRequest;
import org.openapis.openapi.models.operations.GetUsersIdBudgetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdBudgetRequest req = new GetUsersIdBudgetRequest(613064L) {{
                rollUp = false;
            }};            

            GetUsersIdBudgetResponse res = sdk.budgeting.getUsersIdBudget(req);

            if (res.budgetAnalysisPackages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdBudgetSummary

Get the user's budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdBudgetSummaryPeriodEnum;
import org.openapis.openapi.models.operations.GetUsersIdBudgetSummaryRequest;
import org.openapis.openapi.models.operations.GetUsersIdBudgetSummaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdBudgetSummaryRequest req = new GetUsersIdBudgetSummaryRequest("saepe", 697631L, 99280L, GetUsersIdBudgetSummaryPeriodEnum.WEEKS, "reiciendis");            

            GetUsersIdBudgetSummaryResponse res = sdk.budgeting.getUsersIdBudgetSummary(req);

            if (res.budgetAnalysisPackages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdTrendAnalysis

Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdTrendAnalysisPeriodEnum;
import org.openapis.openapi.models.operations.GetUsersIdTrendAnalysisRequest;
import org.openapis.openapi.models.operations.GetUsersIdTrendAnalysisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdTrendAnalysisRequest req = new GetUsersIdTrendAnalysisRequest("mollitia", "laborum", 170909L, 210382L, GetUsersIdTrendAnalysisPeriodEnum.MONTHS, "explicabo", "nobis");            

            GetUsersIdTrendAnalysisResponse res = sdk.budgeting.getUsersIdTrendAnalysis(req);

            if (res.budgetAnalysisPackages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
