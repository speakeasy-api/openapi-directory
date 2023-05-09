# userActivity

### Available Operations

* [analyticsreportingUserActivitySearch](#analyticsreportinguseractivitysearch) - Returns User Activity data.

## analyticsreportingUserActivitySearch

Returns User Activity data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsreportingUserActivitySearchRequest;
import org.openapis.openapi.models.operations.AnalyticsreportingUserActivitySearchResponse;
import org.openapis.openapi.models.operations.AnalyticsreportingUserActivitySearchSecurity;
import org.openapis.openapi.models.operations.AnalyticsreportingUserActivitySearchSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsreportingUserActivitySearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.SearchUserActivityRequest;
import org.openapis.openapi.models.shared.SearchUserActivityRequestActivityTypesEnum;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsreportingUserActivitySearchRequest req = new AnalyticsreportingUserActivitySearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                searchUserActivityRequest = new SearchUserActivityRequest() {{
                    activityTypes = new org.openapis.openapi.models.shared.SearchUserActivityRequestActivityTypesEnum[]{{
                        add(SearchUserActivityRequestActivityTypesEnum.SCREENVIEW),
                        add(SearchUserActivityRequestActivityTypesEnum.ACTIVITY_TYPE_UNSPECIFIED),
                        add(SearchUserActivityRequestActivityTypesEnum.EVENT),
                        add(SearchUserActivityRequestActivityTypesEnum.EVENT),
                    }};
                    dateRange = new DateRange() {{
                        endDate = "doloribus";
                        startDate = "laudantium";
                    }};;
                    pageSize = 941780;
                    pageToken = "eveniet";
                    user = new User() {{
                        type = UserTypeEnum.USER_ID_TYPE_UNSPECIFIED;
                        userId = "officiis";
                    }};;
                    viewId = "eaque";
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "voluptas";
                fields = "delectus";
                key = "qui";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "debitis";
                uploadProtocol = "aspernatur";
            }};            

            AnalyticsreportingUserActivitySearchResponse res = sdk.userActivity.analyticsreportingUserActivitySearch(req, new AnalyticsreportingUserActivitySearchSecurity() {{
                option1 = new AnalyticsreportingUserActivitySearchSecurityOption1("occaecati", "repellendus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchUserActivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
