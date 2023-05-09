# visionExamples

## Overview

Resources that manage image examples.

### Available Operations

* [addExample](#addexample) - Create an Example
* [getExamplesByLabel1](#getexamplesbylabel1) - Get All Examples for Label
* [getExamples1](#getexamples1) - Get All Examples
* [provideFeedback1](#providefeedback1) - Create a Feedback Example
* [updateDatasetAsync1](#updatedatasetasync1) - Create Feedback Examples From a Zip File
* [updateDatasetAsync2](#updatedatasetasync2) - Create Examples From a Zip File

## addExample

Adds an example with the specified label to a dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddExampleRequest;
import org.openapis.openapi.models.operations.AddExampleRequestBody;
import org.openapis.openapi.models.operations.AddExampleResponse;
import org.openapis.openapi.models.operations.AddExampleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddExampleRequest req = new AddExampleRequest("quidem") {{
                requestBody = new AddExampleRequestBody() {{
                    data = "architecto";
                    labelId = 42L;
                    name = "Lela Orn";
                }};;
            }};            

            AddExampleResponse res = sdk.visionExamples.addExample(req, new AddExampleSecurity("dolores") {{
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

## getExamplesByLabel1

Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExamplesByLabel1Request;
import org.openapis.openapi.models.operations.GetExamplesByLabel1Response;
import org.openapis.openapi.models.operations.GetExamplesByLabel1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExamplesByLabel1Request req = new GetExamplesByLabel1Request() {{
                count = "dolorem";
                labelId = "corporis";
                offset = "explicabo";
            }};            

            GetExamplesByLabel1Response res = sdk.visionExamples.getExamplesByLabel1(req, new GetExamplesByLabel1Security("nobis") {{
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

## getExamples1

Returns all the examples for the specified dataset. By default, returns examples created by uploading them from a .zip file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExamples1Request;
import org.openapis.openapi.models.operations.GetExamples1Response;
import org.openapis.openapi.models.operations.GetExamples1Security;
import org.openapis.openapi.models.operations.GetExamples1SourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExamples1Request req = new GetExamples1Request("enim") {{
                count = "omnis";
                offset = "nemo";
                source = GetExamples1SourceEnum.ALL;
            }};            

            GetExamples1Response res = sdk.visionExamples.getExamples1(req, new GetExamples1Security("excepturi") {{
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

## provideFeedback1

Adds a feedback example to the dataset associated with the specified model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvideFeedback1RequestBody;
import org.openapis.openapi.models.operations.ProvideFeedback1Response;
import org.openapis.openapi.models.operations.ProvideFeedback1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProvideFeedback1RequestBody req = new ProvideFeedback1RequestBody() {{
                data = "accusantium";
                expectedLabel = "iure";
                modelId = "culpa";
                name = "feedback-1";
            }};            

            ProvideFeedback1Response res = sdk.visionExamples.provideFeedback1(req, new ProvideFeedback1Security("doloribus") {{
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

## updateDatasetAsync1

Adds feedback examples to the dataset associated with the specified object detection model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatasetAsync1RequestBody;
import org.openapis.openapi.models.operations.UpdateDatasetAsync1Response;
import org.openapis.openapi.models.operations.UpdateDatasetAsync1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDatasetAsync1RequestBody req = new UpdateDatasetAsync1RequestBody() {{
                data = "sapiente";
                modelId = "architecto";
            }};            

            UpdateDatasetAsync1Response res = sdk.visionExamples.updateDatasetAsync1(req, new UpdateDatasetAsync1Security("mollitia") {{
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

## updateDatasetAsync2

Adds examples from a .zip file to a dataset. You can use this call only with a dataset that was created from a .zip file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDatasetAsync2Request;
import org.openapis.openapi.models.operations.UpdateDatasetAsync2RequestBody;
import org.openapis.openapi.models.operations.UpdateDatasetAsync2Response;
import org.openapis.openapi.models.operations.UpdateDatasetAsync2Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDatasetAsync2Request req = new UpdateDatasetAsync2Request("dolorem") {{
                requestBody = new UpdateDatasetAsync2RequestBody() {{
                    data = "culpa";
                    path = "consequuntur";
                }};;
            }};            

            UpdateDatasetAsync2Response res = sdk.visionExamples.updateDatasetAsync2(req, new UpdateDatasetAsync2Security("repellat") {{
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
