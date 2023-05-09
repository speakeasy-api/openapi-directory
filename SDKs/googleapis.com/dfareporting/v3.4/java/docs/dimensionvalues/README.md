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

            DfareportingDimensionValuesQueryRequest req = new DfareportingDimensionValuesQueryRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                dimensionValueRequest = new DimensionValueRequest() {{
                    dimensionName = "totam";
                    endDate = LocalDate.parse("2022-12-29");
                    filters = new org.openapis.openapi.models.shared.DimensionFilter[]{{
                        add(new DimensionFilter() {{
                            dimensionName = "sequi";
                            kind = "sapiente";
                            value = "illum";
                        }}),
                        add(new DimensionFilter() {{
                            dimensionName = "nesciunt";
                            kind = "optio";
                            value = "corrupti";
                        }}),
                        add(new DimensionFilter() {{
                            dimensionName = "inventore";
                            kind = "quibusdam";
                            value = "culpa";
                        }}),
                    }};
                    kind = "dicta";
                    startDate = LocalDate.parse("2022-01-04");
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "non";
                key = "fugiat";
                maxResults = 974775L;
                oauthToken = "iste";
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "pariatur";
                uploadProtocol = "officia";
            }};            

            DfareportingDimensionValuesQueryResponse res = sdk.dimensionValues.dfareportingDimensionValuesQuery(req, new DfareportingDimensionValuesQuerySecurity("velit", "debitis") {{
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
