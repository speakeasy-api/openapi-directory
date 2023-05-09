# oralQuestions

### Available Operations

* [publishedOralQuestionGet](#publishedoralquestionget) - Returns a list of oral questions

## publishedOralQuestionGet

A list of oral questions meeting the specified criteria.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishedOralQuestionGetParametersQuestionTypeEnum;
import org.openapis.openapi.models.operations.PublishedOralQuestionGetRequest;
import org.openapis.openapi.models.operations.PublishedOralQuestionGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishedOralQuestionGetRequest req = new PublishedOralQuestionGetRequest() {{
                parametersAnsweringBodyIds = new Integer[]{{
                    add(978619),
                    add(473608),
                    add(799159),
                    add(800911),
                }};
                parametersAnsweringDateEnd = OffsetDateTime.parse("2022-06-25T00:37:01.696Z");
                parametersAnsweringDateStart = OffsetDateTime.parse("2020-12-18T15:02:44.758Z");
                parametersAskingMemberIds = new Integer[]{{
                    add(720633),
                }};
                parametersOralQuestionTimeId = 639921;
                parametersQuestionType = PublishedOralQuestionGetParametersQuestionTypeEnum.TOPICAL;
                parametersSkip = 143353;
                parametersTake = 537373;
                parametersUINs = new Integer[]{{
                    add(758616),
                    add(521848),
                    add(105907),
                    add(414662),
                }};
            }};            

            PublishedOralQuestionGetResponse res = sdk.oralQuestions.publishedOralQuestionGet(req);

            if (res.apiResponseListPublishedWrittenQuestion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
