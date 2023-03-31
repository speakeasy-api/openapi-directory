<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetV2AccountStagesJsonQueryParams;
import org.openapis.openapi.models.operations.GetV2AccountStagesJsonRequest;
import org.openapis.openapi.models.operations.GetV2AccountStagesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2AccountStagesJsonRequest req = new GetV2AccountStagesJsonRequest() {{
                queryParams = new GetV2AccountStagesJsonQueryParams() {{
                    ids = new Long[]{{
                        add(592845),
                        add(715190),
                        add(844266),
                    }};
                    includePagingCounts = false;
                    limitPagingCounts = false;
                    page = 602763;
                    perPage = 857946;
                    sortBy = "corrupti";
                    sortDirection = "illum";
                    updatedAt = new String[]{{
                        add("error"),
                        add("deserunt"),
                    }};
                }};
            }};            

            GetV2AccountStagesJsonResponse res = sdk.accountStages.getV2AccountStagesJson(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->