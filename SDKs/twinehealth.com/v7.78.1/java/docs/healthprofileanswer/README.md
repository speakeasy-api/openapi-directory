# healthProfileAnswer

## Overview

A health profile answer is the answer to a question for a patient.

### Available Operations

* [fetchHealthProfileAnswer](#fetchhealthprofileanswer) - Get a health profile answer
* [fetchHealthProfileAnswers](#fetchhealthprofileanswers) - List health profile answers

## fetchHealthProfileAnswer

Get a health profile answer by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchHealthProfileAnswerIncludeEnum;
import org.openapis.openapi.models.operations.FetchHealthProfileAnswerRequest;
import org.openapis.openapi.models.operations.FetchHealthProfileAnswerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchHealthProfileAnswerRequest req = new FetchHealthProfileAnswerRequest("aut") {{
                include = FetchHealthProfileAnswerIncludeEnum.PATIENT;
            }};            

            FetchHealthProfileAnswerResponse res = sdk.healthProfileAnswer.fetchHealthProfileAnswer(req);

            if (res.fetchHealthProfileAnswerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchHealthProfileAnswers

Get a list of health profile answers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchHealthProfileAnswersIncludeEnum;
import org.openapis.openapi.models.operations.FetchHealthProfileAnswersRequest;
import org.openapis.openapi.models.operations.FetchHealthProfileAnswersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchHealthProfileAnswersRequest req = new FetchHealthProfileAnswersRequest() {{
                filterGroups = "voluptatum";
                filterOrganization = "qui";
                filterPatient = "quibusdam";
                include = FetchHealthProfileAnswersIncludeEnum.PATIENT;
                pageCursor = "ex";
                pageLimit = 536275L;
                pageNumber = 929292L;
                pageSize = 680270L;
            }};            

            FetchHealthProfileAnswersResponse res = sdk.healthProfileAnswer.fetchHealthProfileAnswers(req);

            if (res.fetchHealthProfileAnswersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
