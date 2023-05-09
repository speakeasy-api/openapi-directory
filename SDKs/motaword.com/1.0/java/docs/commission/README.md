# commission

### Available Operations

* [getCommissions](#getcommissions) - Returns a commission list of current client.
* [getCommissionsByFilter](#getcommissionsbyfilter) - Returns a commission list of current client.

## getCommissions

Returns a commission list of current client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCommissionsResponse res = sdk.commission.getCommissions();

            if (res.commissionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommissionsByFilter

Returns a commission list of current client.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommissionsByFilterResponse;
import org.openapis.openapi.models.shared.ReportFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ReportFilter req = new ReportFilter() {{
                budgetCode = "impedit";
                dateFrom = OffsetDateTime.parse("2022-02-02T00:14:45.467Z");
                dateTo = OffsetDateTime.parse("2022-06-07T12:31:06.574Z");
                sourceLanguages = new String[]{{
                    add("perferendis"),
                }};
                targetLanguages = new String[]{{
                    add("natus"),
                    add("sed"),
                }};
                users = new Long[]{{
                    add(222321L),
                    add(616934L),
                    add(386489L),
                }};
            }};            

            GetCommissionsByFilterResponse res = sdk.commission.getCommissionsByFilter(req);

            if (res.commissionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
