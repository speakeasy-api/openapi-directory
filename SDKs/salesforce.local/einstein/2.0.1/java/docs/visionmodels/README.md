# visionModels

## Overview

Resources that manage image models and model metrics.

### Available Operations

* [deleteModel1](#deletemodel1) - Delete a Model
* [getTrainedModelLearningCurve1](#gettrainedmodellearningcurve1) - Get Model Learning Curve
* [getTrainedModelMetrics1](#gettrainedmodelmetrics1) - Get Model Metrics
* [getTrainedModels1](#gettrainedmodels1) - Get All Models

## deleteModel1

Deletes the specified model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteModel1Request;
import org.openapis.openapi.models.operations.DeleteModel1Response;
import org.openapis.openapi.models.operations.DeleteModel1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteModel1Request req = new DeleteModel1Request("SomeModelId");            

            DeleteModel1Response res = sdk.visionModels.deleteModel1(req, new DeleteModel1Security("mollitia") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.deletionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrainedModelLearningCurve1

Returns the metrics for each epoch in a model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrainedModelLearningCurve1Request;
import org.openapis.openapi.models.operations.GetTrainedModelLearningCurve1Response;
import org.openapis.openapi.models.operations.GetTrainedModelLearningCurve1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrainedModelLearningCurve1Request req = new GetTrainedModelLearningCurve1Request("SomeModelId") {{
                count = "occaecati";
                offset = "numquam";
            }};            

            GetTrainedModelLearningCurve1Response res = sdk.visionModels.getTrainedModelLearningCurve1(req, new GetTrainedModelLearningCurve1Security("commodi") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.learningCurveList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrainedModelMetrics1

Returns the metrics for a model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrainedModelMetrics1Request;
import org.openapis.openapi.models.operations.GetTrainedModelMetrics1Response;
import org.openapis.openapi.models.operations.GetTrainedModelMetrics1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrainedModelMetrics1Request req = new GetTrainedModelMetrics1Request("SomeModelId");            

            GetTrainedModelMetrics1Response res = sdk.visionModels.getTrainedModelMetrics1(req, new GetTrainedModelMetrics1Security("quam") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.metrics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTrainedModels1

Returns all models for the specified dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrainedModels1Request;
import org.openapis.openapi.models.operations.GetTrainedModels1Response;
import org.openapis.openapi.models.operations.GetTrainedModels1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrainedModels1Request req = new GetTrainedModels1Request("molestiae") {{
                count = "velit";
                offset = "error";
            }};            

            GetTrainedModels1Response res = sdk.visionModels.getTrainedModels1(req, new GetTrainedModels1Security("quia") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.modelList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
