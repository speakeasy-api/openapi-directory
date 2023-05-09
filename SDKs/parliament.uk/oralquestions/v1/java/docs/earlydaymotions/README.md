# earlyDayMotions

### Available Operations

* [publishedEarlyDayMotionGet](#publishedearlydaymotionget) - Returns a single Early Day Motion by ID
* [getEarlyDayMotionsList](#getearlydaymotionslist) - Returns a list of Early Day Motions

## publishedEarlyDayMotionGet

Get a single Early Day Motion which has the ID specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishedEarlyDayMotionGetRequest;
import org.openapis.openapi.models.operations.PublishedEarlyDayMotionGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishedEarlyDayMotionGetRequest req = new PublishedEarlyDayMotionGetRequest(592845);            

            PublishedEarlyDayMotionGetResponse res = sdk.earlyDayMotions.publishedEarlyDayMotionGet(req);

            if (res.apiResponseListPublishedWrittenQuestion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEarlyDayMotionsList

Get a list of Early Day Motions which meet the specified criteria. Only supports Published and Withdrawn status.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEarlyDayMotionsListParametersOrderByEnum;
import org.openapis.openapi.models.operations.GetEarlyDayMotionsListParametersStatusesEnum;
import org.openapis.openapi.models.operations.GetEarlyDayMotionsListRequest;
import org.openapis.openapi.models.operations.GetEarlyDayMotionsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEarlyDayMotionsListRequest req = new GetEarlyDayMotionsListRequest() {{
                parametersCurrentStatusDateEnd = OffsetDateTime.parse("2021-04-24T16:27:50.833Z");
                parametersCurrentStatusDateStart = OffsetDateTime.parse("2021-04-14T16:47:33.722Z");
                parametersEdmIds = new Integer[]{{
                    add(847252),
                    add(423655),
                    add(623564),
                }};
                parametersIncludeSponsoredByMember = false;
                parametersIsPrayer = false;
                parametersMemberId = 645894;
                parametersOrderBy = GetEarlyDayMotionsListParametersOrderByEnum.TITLE_ASC;
                parametersSearchTerm = "iure";
                parametersSkip = 297534;
                parametersStatuses = new org.openapis.openapi.models.operations.GetEarlyDayMotionsListParametersStatusesEnum[]{{
                    add(GetEarlyDayMotionsListParametersStatusesEnum.PUBLISHED),
                    add(GetEarlyDayMotionsListParametersStatusesEnum.WITHDRAWN),
                    add(GetEarlyDayMotionsListParametersStatusesEnum.PUBLISHED),
                    add(GetEarlyDayMotionsListParametersStatusesEnum.PUBLISHED),
                }};
                parametersTabledEndDate = OffsetDateTime.parse("2022-03-18T00:29:19.137Z");
                parametersTabledStartDate = OffsetDateTime.parse("2021-05-31T20:38:28.793Z");
                parametersTake = 479977;
                parametersUINWithAmendmentSuffix = "excepturi";
            }};            

            GetEarlyDayMotionsListResponse res = sdk.earlyDayMotions.getEarlyDayMotionsList(req);

            if (res.apiResponseListPublishedWrittenQuestion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
