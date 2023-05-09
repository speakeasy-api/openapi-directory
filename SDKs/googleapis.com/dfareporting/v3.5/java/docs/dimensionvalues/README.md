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

            DfareportingDimensionValuesQueryRequest req = new DfareportingDimensionValuesQueryRequest("aut") {{
                dollarXgafv = XgafvEnum.ONE;
                dimensionValueRequest = new DimensionValueRequest() {{
                    dimensionName = "delectus";
                    endDate = LocalDate.parse("2021-03-06");
                    filters = new org.openapis.openapi.models.shared.DimensionFilter[]{{
                        add(new DimensionFilter() {{
                            dimensionName = "ipsam";
                            kind = "soluta";
                            value = "esse";
                        }}),
                        add(new DimensionFilter() {{
                            dimensionName = "vitae";
                            kind = "beatae";
                            value = "pariatur";
                        }}),
                    }};
                    kind = "voluptatem";
                    startDate = LocalDate.parse("2021-06-27");
                }};;
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "necessitatibus";
                key = "cumque";
                maxResults = 611630L;
                oauthToken = "reiciendis";
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "perspiciatis";
                uploadProtocol = "occaecati";
            }};            

            DfareportingDimensionValuesQueryResponse res = sdk.dimensionValues.dfareportingDimensionValuesQuery(req, new DfareportingDimensionValuesQuerySecurity("officia", "nemo") {{
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
