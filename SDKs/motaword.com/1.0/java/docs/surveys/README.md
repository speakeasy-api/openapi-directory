# surveys

### Available Operations

* [getQuestions](#getquestions) - Get survey questions in given scope and type
* [submitAnswers](#submitanswers) - Post survey answers for scope and type

## getQuestions

Get survey questions in given scope and type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuestionsRequest;
import org.openapis.openapi.models.operations.GetQuestionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetQuestionsRequest req = new GetQuestionsRequest("provident", "repellendus") {{
                attachAnswersForProject = 962771L;
            }};            

            GetQuestionsResponse res = sdk.surveys.getQuestions(req);

            if (res.surveyQuestions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitAnswers

Post survey answers for scope and type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitAnswersRequest;
import org.openapis.openapi.models.operations.SubmitAnswersResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SurveyAnswer;
import org.openapis.openapi.models.shared.SurveyAnswers;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SubmitAnswersRequest req = new SubmitAnswersRequest("perferendis", "est") {{
                surveyAnswers = new SurveyAnswers() {{
                    answers = new org.openapis.openapi.models.shared.SurveyAnswer[]{{
                        add(new SurveyAnswer() {{
                            answer = "reprehenderit";
                            projectId = 813679L;
                            questionAnswerId = 685092L;
                            questionId = 509807L;
                            userId = 648598L;
                        }}),
                        add(new SurveyAnswer() {{
                            answer = "veniam";
                            projectId = 29100L;
                            questionAnswerId = 790840L;
                            questionId = 919532L;
                            userId = 97243L;
                        }}),
                        add(new SurveyAnswer() {{
                            answer = "atque";
                            projectId = 442036L;
                            questionAnswerId = 991142L;
                            questionId = 519952L;
                            userId = 383103L;
                        }}),
                    }};
                }};;
            }};            

            SubmitAnswersResponse res = sdk.surveys.submitAnswers(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
