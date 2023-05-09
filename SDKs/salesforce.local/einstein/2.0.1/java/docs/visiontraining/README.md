# visionTraining

## Overview

Resources that handle image dataset training.

### Available Operations

* [getTrainStatusAndProgress1](#gettrainstatusandprogress1) - Get Training Status
* [retrain1](#retrain1) - Retrain a Dataset
* [train1](#train1) - Train a Dataset

## getTrainStatusAndProgress1

Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrainStatusAndProgress1Request;
import org.openapis.openapi.models.operations.GetTrainStatusAndProgress1Response;
import org.openapis.openapi.models.operations.GetTrainStatusAndProgress1Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrainStatusAndProgress1Request req = new GetTrainStatusAndProgress1Request("SomeModelId");            

            GetTrainStatusAndProgress1Response res = sdk.visionTraining.getTrainStatusAndProgress1(req, new GetTrainStatusAndProgress1Security("possimus") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.trainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrain1

Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Retrain1RequestBody;
import org.openapis.openapi.models.operations.Retrain1Response;
import org.openapis.openapi.models.operations.Retrain1Security;
import org.openapis.openapi.models.shared.V2VisionTrainParams;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Retrain1RequestBody req = new Retrain1RequestBody() {{
                algorithm = "object-detection";
                epochs = 20;
                learningRate = 0.0001;
                modelId = "7JXCXTRXTMNLJCEF2DR5CJ46QU";
                trainParams = new V2VisionTrainParams() {{
                    trainSplitRatio = 0.9;
                    withFeedback = false;
                    withGlobalDatasetId = 13571L;
                }};;
            }};            

            Retrain1Response res = sdk.visionTraining.retrain1(req, new Retrain1Security("quasi") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.trainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## train1

Trains a dataset and creates a model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Train1RequestBody;
import org.openapis.openapi.models.operations.Train1Response;
import org.openapis.openapi.models.operations.Train1Security;
import org.openapis.openapi.models.shared.V2VisionTrainParams;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Train1RequestBody req = new Train1RequestBody() {{
                algorithm = "object-detection";
                datasetId = 57L;
                epochs = 20;
                learningRate = 0.0001;
                name = "Dr. Jake Pacocha";
                trainParams = new V2VisionTrainParams() {{
                    trainSplitRatio = 0.9;
                    withFeedback = false;
                    withGlobalDatasetId = 878194L;
                }};;
            }};            

            Train1Response res = sdk.visionTraining.train1(req, new Train1Security("nihil") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.trainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
