# stats

### Available Operations

* [getCommissionStats](#getcommissionstats) - Returns the total commissions stats.
* [getCommissionStatsByFilter](#getcommissionstatsbyfilter) - Returns the total commissions stats by report filter.
* [getPopularPairs](#getpopularpairs) - View your popular language pairs
* [getProjectStats](#getprojectstats) - View your project statistics
* [getStringStats](#getstringstats) - View your translation statistics

## getCommissionStats

Returns the total commissions stats.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommissionStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCommissionStatsResponse res = sdk.stats.getCommissionStats();

            if (res.commissionStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommissionStatsByFilter

Returns the total commissions stats by report filter.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommissionStatsByFilterResponse;
import org.openapis.openapi.models.shared.ReportFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ReportFilter req = new ReportFilter() {{
                budgetCode = "facilis";
                dateFrom = OffsetDateTime.parse("2022-04-17T04:31:41.347Z");
                dateTo = OffsetDateTime.parse("2022-05-22T17:05:01.514Z");
                sourceLanguages = new String[]{{
                    add("laborum"),
                    add("sed"),
                }};
                targetLanguages = new String[]{{
                    add("commodi"),
                    add("quidem"),
                }};
                users = new Long[]{{
                    add(378326L),
                }};
            }};            

            GetCommissionStatsByFilterResponse res = sdk.stats.getCommissionStatsByFilter(req);

            if (res.commissionStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPopularPairs

View your popular language pairs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPopularPairsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPopularPairsResponse res = sdk.stats.getPopularPairs();

            if (res.popularLanguagePairs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProjectStats

View your project statistics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProjectStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetProjectStatsResponse res = sdk.stats.getProjectStats();

            if (res.clientProjectStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStringStats

View your translation statistics

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStringStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStringStatsResponse res = sdk.stats.getStringStats();

            if (res.clientStringStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
