# oralQuestionTimes

### Available Operations

* [publishedOralQuestionTimeGet](#publishedoralquestiontimeget) - Returns a list of oral question times

## publishedOralQuestionTimeGet

A list of oral question times meeting the specified criteria.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishedOralQuestionTimeGetRequest;
import org.openapis.openapi.models.operations.PublishedOralQuestionTimeGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishedOralQuestionTimeGetRequest req = new PublishedOralQuestionTimeGetRequest() {{
                parametersAnsweringBodyIds = new Integer[]{{
                    add(925597),
                    add(836079),
                }};
                parametersAnsweringDateEnd = OffsetDateTime.parse("2022-08-30T20:24:33.984Z");
                parametersAnsweringDateStart = OffsetDateTime.parse("2022-05-09T10:00:51.349Z");
                parametersDeadlineDateEnd = OffsetDateTime.parse("2022-08-19T14:12:14.246Z");
                parametersDeadlineDateStart = OffsetDateTime.parse("2020-02-17T21:57:45.117Z");
                parametersOralQuestionTimeId = 778157;
                parametersSkip = 140350;
                parametersTake = 870013;
            }};            

            PublishedOralQuestionTimeGetResponse res = sdk.oralQuestionTimes.publishedOralQuestionTimeGet(req);

            if (res.apiResponseListPublishedWrittenQuestion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
