# languageTraining

## Overview

Resources that handle text dataset training.

### Available Operations

* [getTrainStatusAndProgress](#gettrainstatusandprogress) - Get Training Status
* [retrain](#retrain) - Retrain a Dataset
* [train](#train) - Train a Dataset

## getTrainStatusAndProgress

Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTrainStatusAndProgressRequest;
import org.openapis.openapi.models.operations.GetTrainStatusAndProgressResponse;
import org.openapis.openapi.models.operations.GetTrainStatusAndProgressSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTrainStatusAndProgressRequest req = new GetTrainStatusAndProgressRequest("deleniti");            

            GetTrainStatusAndProgressResponse res = sdk.languageTraining.getTrainStatusAndProgress(req, new GetTrainStatusAndProgressSecurity("hic") {{
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

## retrain

Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrainRequestBody;
import org.openapis.openapi.models.operations.RetrainResponse;
import org.openapis.openapi.models.operations.RetrainSecurity;
import org.openapis.openapi.models.shared.V2LanguageTrainParams;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrainRequestBody req = new RetrainRequestBody() {{
                algorithm = "intent";
                epochs = 20;
                learningRate = 0.0001;
                modelId = "7JXCXTRXTMNLJCEF2DR5CJ46QU";
                trainParams = new V2LanguageTrainParams() {{
                    trainSplitRatio = 0.9;
                    withFeedback = false;
                    withGlobalDatasetId = 758616L;
                }};;
            }};            

            RetrainResponse res = sdk.languageTraining.retrain(req, new RetrainSecurity("totam") {{
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

## train

Trains a dataset and creates a model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrainRequestBody;
import org.openapis.openapi.models.operations.TrainResponse;
import org.openapis.openapi.models.operations.TrainSecurity;
import org.openapis.openapi.models.shared.V2LanguageTrainParams;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrainRequestBody req = new TrainRequestBody() {{
                algorithm = "intent";
                datasetId = 57L;
                epochs = 20;
                learningRate = 1059.07;
                name = "Tanya Gleason";
                trainParams = new V2LanguageTrainParams() {{
                    trainSplitRatio = 0.9;
                    withFeedback = false;
                    withGlobalDatasetId = 736918L;
                }};;
            }};            

            TrainResponse res = sdk.languageTraining.train(req, new TrainSecurity("esse") {{
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
