<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2AccountStagesJsonRequest;
import org.openapis.openapi.models.operations.GetV2AccountStagesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2AccountStagesJsonRequest req = new GetV2AccountStagesJsonRequest() {{
                ids = new Long[]{{
                    add(592845L),
                    add(715190L),
                    add(844266L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 602763L;
                perPage = 857946L;
                sortBy = "corrupti";
                sortDirection = "illum";
                updatedAt = new String[]{{
                    add("error"),
                    add("deserunt"),
                }};
            }};            

            GetV2AccountStagesJsonResponse res = sdk.accountStages.getV2AccountStagesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->