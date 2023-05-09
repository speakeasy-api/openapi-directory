# SDK

## Overview

Polls is a simple API allowing consumers to view polls and vote in them.

### Available Operations

* [createANewQuestion](#createanewquestion) - Create a New Question
* [listAllQuestions](#listallquestions) - List All Questions

## createANewQuestion

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateANewQuestionRequestBody;
import org.openapis.openapi.models.operations.CreateANewQuestionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateANewQuestionRequestBody req = new CreateANewQuestionRequestBody() {{
                choices = new String[]{{
                    add("corrupti"),
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                question = "deserunt";
            }};            

            CreateANewQuestionResponse res = sdk.sdk.createANewQuestion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAllQuestions

List All Questions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAllQuestionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAllQuestionsResponse res = sdk.sdk.listAllQuestions();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
