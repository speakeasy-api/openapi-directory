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

            DfareportingDimensionValuesQueryRequest req = new DfareportingDimensionValuesQueryRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                dimensionValueRequest = new DimensionValueRequest() {{
                    dimensionName = "alias";
                    endDate = LocalDate.parse("2022-08-11");
                    filters = new org.openapis.openapi.models.shared.DimensionFilter[]{{
                        add(new DimensionFilter() {{
                            dimensionName = "illum";
                            kind = "nesciunt";
                            value = "optio";
                        }}),
                        add(new DimensionFilter() {{
                            dimensionName = "corrupti";
                            kind = "inventore";
                            value = "quibusdam";
                        }}),
                        add(new DimensionFilter() {{
                            dimensionName = "culpa";
                            kind = "dicta";
                            value = "perferendis";
                        }}),
                        add(new DimensionFilter() {{
                            dimensionName = "asperiores";
                            kind = "deleniti";
                            value = "optio";
                        }}),
                    }};
                    kind = "consequuntur";
                    startDate = LocalDate.parse("2022-02-23");
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "amet";
                fields = "quae";
                key = "pariatur";
                maxResults = 641254L;
                oauthToken = "velit";
                pageToken = "debitis";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "tempore";
                uploadProtocol = "minima";
            }};            

            DfareportingDimensionValuesQueryResponse res = sdk.dimensionValues.dfareportingDimensionValuesQuery(req, new DfareportingDimensionValuesQuerySecurity("vitae", "repellat") {{
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
