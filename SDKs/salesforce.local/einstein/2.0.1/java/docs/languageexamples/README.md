# languageExamples

## Overview

Resources that manage text examples.

### Available Operations

* [getExamples](#getexamples) - Get All Examples
* [getExamplesByLabel](#getexamplesbylabel) - Get All Examples for Label
* [provideFeedback](#providefeedback) - Create a Feedback Example
* [updateDatasetAsync](#updatedatasetasync) - Create Examples From a File

## getExamples

Returns all the examples for the specified dataset,

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExamplesRequest;
import org.openapis.openapi.models.operations.GetExamplesResponse;
import org.openapis.openapi.models.operations.GetExamplesSecurity;
import org.openapis.openapi.models.operations.GetExamplesSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExamplesRequest req = new GetExamplesRequest("minus") {{
                count = "placeat";
                offset = "voluptatum";
                source = GetExamplesSourceEnum.FEEDBACK;
            }};            

            GetExamplesResponse res = sdk.languageExamples.getExamples(req, new GetExamplesSecurity("excepturi") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exampleList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExamplesByLabel

Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExamplesByLabelRequest;
import org.openapis.openapi.models.operations.GetExamplesByLabelResponse;
import org.openapis.openapi.models.operations.GetExamplesByLabelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExamplesByLabelRequest req = new GetExamplesByLabelRequest() {{
                count = "nisi";
                labelId = "recusandae";
                offset = "temporibus";
            }};            

            GetExamplesByLabelResponse res = sdk.languageExamples.getExamplesByLabel(req, new GetExamplesByLabelSecurity("ab") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exampleList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## provideFeedback

Adds a feedback example to the dataset associated with the specified model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvideFeedbackRequestBody;
import org.openapis.openapi.models.operations.ProvideFeedbackResponse;
import org.openapis.openapi.models.operations.ProvideFeedbackSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProvideFeedbackRequestBody req = new ProvideFeedbackRequestBody() {{
                document = "quis";
                expectedLabel = "veritatis";
                modelId = "deserunt";
                name = "feedback-2";
            }};            

            ProvideFeedbackResponse res = sdk.languageExamples.provideFeedback(req, new ProvideFeedbackSecurity("perferendis") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.example != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDatasetAsync

Adds examples from a .csv, .tsv, or .json file to a dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatasetAsyncRequest;
import org.openapis.openapi.models.operations.UpdateDatasetAsyncRequestBody;
import org.openapis.openapi.models.operations.UpdateDatasetAsyncResponse;
import org.openapis.openapi.models.operations.UpdateDatasetAsyncSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDatasetAsyncRequest req = new UpdateDatasetAsyncRequest("ipsam") {{
                requestBody = new UpdateDatasetAsyncRequestBody() {{
                    data = "repellendus";
                    type = "sapiente";
                }};;
            }};            

            UpdateDatasetAsyncResponse res = sdk.languageExamples.updateDatasetAsync(req, new UpdateDatasetAsyncSecurity("quo") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.dataset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
