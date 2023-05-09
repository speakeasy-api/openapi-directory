# dimensionValues

### Available Operations

* [dfareportingDimensionValuesQuery](#dfareportingdimensionvaluesquery) - Retrieves list of report dimension values for a list of filters.

## dfareportingDimensionValuesQuery

Retrieves list of report dimension values for a list of filters.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingDimensionValuesQueryRequest;
import org.openapis.openapi.models.operations.DfareportingDimensionValuesQueryResponse;
import org.openapis.openapi.models.operations.DfareportingDimensionValuesQuerySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DimensionFilter;
import org.openapis.openapi.models.shared.DimensionValueRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingDimensionValuesQueryRequest req = new DfareportingDimensionValuesQueryRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                dimensionValueRequest = new DimensionValueRequest() {{
                    dimensionName = "delectus";
                    endDate = LocalDate.parse("2022-08-19");
                    filters = new org.openapis.openapi.models.shared.DimensionFilter[]{{
                        add(new DimensionFilter() {{
                            dimensionName = "dolorum";
                            kind = "officia";
                            value = "earum";
                        }}),
                        add(new DimensionFilter() {{
                            dimensionName = "est";
                            kind = "quisquam";
                            value = "officia";
                        }}),
                        add(new DimensionFilter() {{
                            dimensionName = "officiis";
                            kind = "ratione";
                            value = "consequuntur";
                        }}),
                    }};
                    kind = "neque";
                    startDate = LocalDate.parse("2022-07-08");
                }};;
                accessToken = "inventore";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "ducimus";
                key = "rerum";
                maxResults = 671256L;
                oauthToken = "architecto";
                pageToken = "quod";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "molestias";
                uploadProtocol = "quam";
            }};            

            DfareportingDimensionValuesQueryResponse res = sdk.dimensionValues.dfareportingDimensionValuesQuery(req, new DfareportingDimensionValuesQuerySecurity("nihil", "inventore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.dimensionValueList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
