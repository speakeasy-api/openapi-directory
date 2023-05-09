# healthQuestionDefinition

## Overview

A health question definition specifies a health question and the corresponding answer choices.

### Available Operations

* [fetchHealthQuestionDefinition](#fetchhealthquestiondefinition) - Get a health question definition
* [fetchHealthQuestionDefinitions](#fetchhealthquestiondefinitions) - List health question definitions

## fetchHealthQuestionDefinition

Get a health question definition by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchHealthQuestionDefinitionRequest;
import org.openapis.openapi.models.operations.FetchHealthQuestionDefinitionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchHealthQuestionDefinitionRequest req = new FetchHealthQuestionDefinitionRequest("voluptate");            

            FetchHealthQuestionDefinitionResponse res = sdk.healthQuestionDefinition.fetchHealthQuestionDefinition(req);

            if (res.fetchHealthQuestionDefinitionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchHealthQuestionDefinitions

Get a list of all health question definitions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchHealthQuestionDefinitionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchHealthQuestionDefinitionsResponse res = sdk.healthQuestionDefinition.fetchHealthQuestionDefinitions();

            if (res.fetchHealthQuestionDefinitionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
