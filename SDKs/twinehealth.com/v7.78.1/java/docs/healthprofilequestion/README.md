# healthProfileQuestion

## Overview

A health profile question contains a health question and the corresponding answer for a patient.

### Available Operations

* [fetchHealthProfileQuestion](#fetchhealthprofilequestion) - Get a health profile question
* [fetchHealthProfileQuestions](#fetchhealthprofilequestions) - List health profile questions

## fetchHealthProfileQuestion

Get a health profile by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchHealthProfileQuestionIncludeEnum;
import org.openapis.openapi.models.operations.FetchHealthProfileQuestionRequest;
import org.openapis.openapi.models.operations.FetchHealthProfileQuestionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchHealthProfileQuestionRequest req = new FetchHealthProfileQuestionRequest("architecto") {{
                include = FetchHealthProfileQuestionIncludeEnum.ANSWER;
            }};            

            FetchHealthProfileQuestionResponse res = sdk.healthProfileQuestion.fetchHealthProfileQuestion(req);

            if (res.fetchHealthProfileQuestionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchHealthProfileQuestions

Get a list of health profile questions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchHealthProfileQuestionsIncludeEnum;
import org.openapis.openapi.models.operations.FetchHealthProfileQuestionsRequest;
import org.openapis.openapi.models.operations.FetchHealthProfileQuestionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchHealthProfileQuestionsRequest req = new FetchHealthProfileQuestionsRequest() {{
                filterGroups = "tenetur";
                filterOrganization = "quasi";
                filterPatient = "at";
                include = FetchHealthProfileQuestionsIncludeEnum.QUESTION_DEFINITION;
            }};            

            FetchHealthProfileQuestionsResponse res = sdk.healthProfileQuestion.fetchHealthProfileQuestions(req);

            if (res.fetchHealthProfileQuestionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
