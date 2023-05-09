# languageModels

## Overview

Resources that manage text models and model metrics.

### Available Operations

* [deleteModel](#deletemodel) - Delete a Model
* [getTrainedModelLearningCurve](#gettrainedmodellearningcurve) - Get Model Learning Curve
* [getTrainedModelMetrics](#gettrainedmodelmetrics) - Get Model Metrics
* [getTrainedModels](#gettrainedmodels) - Get All Models

## deleteModel

Deletes the specified model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteModelRequest;
import org.openapis.openapi.models.operations.DeleteModelResponse;
import org.openapis.openapi.models.operations.DeleteModelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteModelRequest req = new DeleteModelRequest("odit");            

            DeleteModelResponse res = sdk.languageModels.deleteModel(req, new DeleteModelSecurity("at") {{
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

## getTrainedModelLearningCurve

Returns the metrics for each epoch in a model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrainedModelLearningCurveRequest;
import org.openapis.openapi.models.operations.GetTrainedModelLearningCurveResponse;
import org.openapis.openapi.models.operations.GetTrainedModelLearningCurveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrainedModelLearningCurveRequest req = new GetTrainedModelLearningCurveRequest("at") {{
                count = "maiores";
                offset = "molestiae";
            }};            

            GetTrainedModelLearningCurveResponse res = sdk.languageModels.getTrainedModelLearningCurve(req, new GetTrainedModelLearningCurveSecurity("quod") {{
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

## getTrainedModelMetrics

Returns the metrics for a model

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrainedModelMetricsRequest;
import org.openapis.openapi.models.operations.GetTrainedModelMetricsResponse;
import org.openapis.openapi.models.operations.GetTrainedModelMetricsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrainedModelMetricsRequest req = new GetTrainedModelMetricsRequest("quod");            

            GetTrainedModelMetricsResponse res = sdk.languageModels.getTrainedModelMetrics(req, new GetTrainedModelMetricsSecurity("esse") {{
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

## getTrainedModels

Returns all models for the specified dataset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrainedModelsRequest;
import org.openapis.openapi.models.operations.GetTrainedModelsResponse;
import org.openapis.openapi.models.operations.GetTrainedModelsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrainedModelsRequest req = new GetTrainedModelsRequest("totam") {{
                count = "porro";
                offset = "dolorum";
            }};            

            GetTrainedModelsResponse res = sdk.languageModels.getTrainedModels(req, new GetTrainedModelsSecurity("dicta") {{
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
