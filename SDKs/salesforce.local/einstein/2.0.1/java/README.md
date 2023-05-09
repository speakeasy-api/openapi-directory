# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateTokenV2RequestBody;
import org.openapis.openapi.models.operations.GenerateTokenV2RequestBodyGrantTypeEnum;
import org.openapis.openapi.models.operations.GenerateTokenV2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateTokenV2RequestBody req = new GenerateTokenV2RequestBody() {{
                assertion = "SOME_ASSERTION_STRING";
                grantType = GenerateTokenV2RequestBodyGrantTypeEnum.URN_IETF_PARAMS_OAUTH_GRANT_TYPE_JWT_BEARER;
                refreshToken = "SomeRefreshToken";
                scope = "offline";
                validFor = 120;
            }};            

            GenerateTokenV2Response res = sdk.authorization.generateTokenV2(req);

            if (res.generateAccessTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [authorization](docs/authorization/README.md)

* [generateTokenV2](docs/authorization/README.md#generatetokenv2) - Generate an OAuth Token
* [revokeRefreshTokenV2](docs/authorization/README.md#revokerefreshtokenv2) - Delete a Refresh Token

### [checkAPIUsage](docs/checkapiusage/README.md)

* [getApiUsagePlansV2](docs/checkapiusage/README.md#getapiusageplansv2) - Get API Isage

### [languageDatasets](docs/languagedatasets/README.md)

* [deleteDataset](docs/languagedatasets/README.md#deletedataset) - Delete a Dataset
* [get](docs/languagedatasets/README.md#get) - Get Deletion Status
* [getDataset](docs/languagedatasets/README.md#getdataset) - Get a Dataset
* [listDatasets](docs/languagedatasets/README.md#listdatasets) - Get All Datasets
* [uploadDatasetAsync](docs/languagedatasets/README.md#uploaddatasetasync) - Create a Dataset From a File Asynchronously
* [uploadDatasetSync](docs/languagedatasets/README.md#uploaddatasetsync) - Create a Dataset From a File Synchronously

### [languageExamples](docs/languageexamples/README.md)

* [getExamples](docs/languageexamples/README.md#getexamples) - Get All Examples
* [getExamplesByLabel](docs/languageexamples/README.md#getexamplesbylabel) - Get All Examples for Label
* [provideFeedback](docs/languageexamples/README.md#providefeedback) - Create a Feedback Example
* [updateDatasetAsync](docs/languageexamples/README.md#updatedatasetasync) - Create Examples From a File

### [languageModels](docs/languagemodels/README.md)

* [deleteModel](docs/languagemodels/README.md#deletemodel) - Delete a Model
* [getTrainedModelLearningCurve](docs/languagemodels/README.md#gettrainedmodellearningcurve) - Get Model Learning Curve
* [getTrainedModelMetrics](docs/languagemodels/README.md#gettrainedmodelmetrics) - Get Model Metrics
* [getTrainedModels](docs/languagemodels/README.md#gettrainedmodels) - Get All Models

### [languagePrediction](docs/languageprediction/README.md)

* [intentMultipart](docs/languageprediction/README.md#intentmultipart) - Prediction for Intent
* [sentimentMultipart](docs/languageprediction/README.md#sentimentmultipart) - Prediction for Sentiment

### [languageTraining](docs/languagetraining/README.md)

* [getTrainStatusAndProgress](docs/languagetraining/README.md#gettrainstatusandprogress) - Get Training Status
* [retrain](docs/languagetraining/README.md#retrain) - Retrain a Dataset
* [train](docs/languagetraining/README.md#train) - Train a Dataset

### [visionDatasets](docs/visiondatasets/README.md)

* [createDataset](docs/visiondatasets/README.md#createdataset) - Create a Dataset
* [deleteDataset1](docs/visiondatasets/README.md#deletedataset1) - Delete a Dataset
* [getDataset1](docs/visiondatasets/README.md#getdataset1) - Get a Dataset
* [get1](docs/visiondatasets/README.md#get1) - Get Deletion Status
* [listDatasets1](docs/visiondatasets/README.md#listdatasets1) - Get All Datasets
* [uploadDatasetAsync1](docs/visiondatasets/README.md#uploaddatasetasync1) - Create a Dataset From a Zip File Asynchronously
* [uploadDatasetSync1](docs/visiondatasets/README.md#uploaddatasetsync1) - Create a Dataset From a Zip File Synchronously

### [visionExamples](docs/visionexamples/README.md)

* [addExample](docs/visionexamples/README.md#addexample) - Create an Example
* [getExamplesByLabel1](docs/visionexamples/README.md#getexamplesbylabel1) - Get All Examples for Label
* [getExamples1](docs/visionexamples/README.md#getexamples1) - Get All Examples
* [provideFeedback1](docs/visionexamples/README.md#providefeedback1) - Create a Feedback Example
* [updateDatasetAsync1](docs/visionexamples/README.md#updatedatasetasync1) - Create Feedback Examples From a Zip File
* [updateDatasetAsync2](docs/visionexamples/README.md#updatedatasetasync2) - Create Examples From a Zip File

### [visionModels](docs/visionmodels/README.md)

* [deleteModel1](docs/visionmodels/README.md#deletemodel1) - Delete a Model
* [getTrainedModelLearningCurve1](docs/visionmodels/README.md#gettrainedmodellearningcurve1) - Get Model Learning Curve
* [getTrainedModelMetrics1](docs/visionmodels/README.md#gettrainedmodelmetrics1) - Get Model Metrics
* [getTrainedModels1](docs/visionmodels/README.md#gettrainedmodels1) - Get All Models

### [visionPrediction](docs/visionprediction/README.md)

* [detectMultipart](docs/visionprediction/README.md#detectmultipart) - Detection with Image File
* [ocrMultipart](docs/visionprediction/README.md#ocrmultipart) - Detect Text
* [predictMultipart](docs/visionprediction/README.md#predictmultipart) - Make Prediction

### [visionTraining](docs/visiontraining/README.md)

* [getTrainStatusAndProgress1](docs/visiontraining/README.md#gettrainstatusandprogress1) - Get Training Status
* [retrain1](docs/visiontraining/README.md#retrain1) - Retrain a Dataset
* [train1](docs/visiontraining/README.md#train1) - Train a Dataset
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
