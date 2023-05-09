# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/salesforce.local/einstein/2.0.1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Authorization.GenerateTokenV2(ctx, operations.GenerateTokenV2RequestBody{
        Assertion: sdk.String("SOME_ASSERTION_STRING"),
        GrantType: operations.GenerateTokenV2RequestBodyGrantTypeEnumUrnIetfParamsOauthGrantTypeJwtBearer.ToPointer(),
        RefreshToken: sdk.String("SomeRefreshToken"),
        Scope: sdk.String("offline"),
        ValidFor: sdk.Int(120),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateAccessTokenResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Authorization](docs/authorization/README.md)

* [GenerateTokenV2](docs/authorization/README.md#generatetokenv2) - Generate an OAuth Token
* [RevokeRefreshTokenV2](docs/authorization/README.md#revokerefreshtokenv2) - Delete a Refresh Token

### [CheckAPIUsage](docs/checkapiusage/README.md)

* [GetAPIUsagePlansV2](docs/checkapiusage/README.md#getapiusageplansv2) - Get API Isage

### [LanguageDatasets](docs/languagedatasets/README.md)

* [DeleteDataset](docs/languagedatasets/README.md#deletedataset) - Delete a Dataset
* [Get](docs/languagedatasets/README.md#get) - Get Deletion Status
* [GetDataset](docs/languagedatasets/README.md#getdataset) - Get a Dataset
* [ListDatasets](docs/languagedatasets/README.md#listdatasets) - Get All Datasets
* [UploadDatasetAsync](docs/languagedatasets/README.md#uploaddatasetasync) - Create a Dataset From a File Asynchronously
* [UploadDatasetSync](docs/languagedatasets/README.md#uploaddatasetsync) - Create a Dataset From a File Synchronously

### [LanguageExamples](docs/languageexamples/README.md)

* [GetExamples](docs/languageexamples/README.md#getexamples) - Get All Examples
* [GetExamplesByLabel](docs/languageexamples/README.md#getexamplesbylabel) - Get All Examples for Label
* [ProvideFeedback](docs/languageexamples/README.md#providefeedback) - Create a Feedback Example
* [UpdateDatasetAsync](docs/languageexamples/README.md#updatedatasetasync) - Create Examples From a File

### [LanguageModels](docs/languagemodels/README.md)

* [DeleteModel](docs/languagemodels/README.md#deletemodel) - Delete a Model
* [GetTrainedModelLearningCurve](docs/languagemodels/README.md#gettrainedmodellearningcurve) - Get Model Learning Curve
* [GetTrainedModelMetrics](docs/languagemodels/README.md#gettrainedmodelmetrics) - Get Model Metrics
* [GetTrainedModels](docs/languagemodels/README.md#gettrainedmodels) - Get All Models

### [LanguagePrediction](docs/languageprediction/README.md)

* [IntentMultipart](docs/languageprediction/README.md#intentmultipart) - Prediction for Intent
* [SentimentMultipart](docs/languageprediction/README.md#sentimentmultipart) - Prediction for Sentiment

### [LanguageTraining](docs/languagetraining/README.md)

* [GetTrainStatusAndProgress](docs/languagetraining/README.md#gettrainstatusandprogress) - Get Training Status
* [Retrain](docs/languagetraining/README.md#retrain) - Retrain a Dataset
* [Train](docs/languagetraining/README.md#train) - Train a Dataset

### [VisionDatasets](docs/visiondatasets/README.md)

* [CreateDataset](docs/visiondatasets/README.md#createdataset) - Create a Dataset
* [DeleteDataset1](docs/visiondatasets/README.md#deletedataset1) - Delete a Dataset
* [GetDataset1](docs/visiondatasets/README.md#getdataset1) - Get a Dataset
* [Get1](docs/visiondatasets/README.md#get1) - Get Deletion Status
* [ListDatasets1](docs/visiondatasets/README.md#listdatasets1) - Get All Datasets
* [UploadDatasetAsync1](docs/visiondatasets/README.md#uploaddatasetasync1) - Create a Dataset From a Zip File Asynchronously
* [UploadDatasetSync1](docs/visiondatasets/README.md#uploaddatasetsync1) - Create a Dataset From a Zip File Synchronously

### [VisionExamples](docs/visionexamples/README.md)

* [AddExample](docs/visionexamples/README.md#addexample) - Create an Example
* [GetExamplesByLabel1](docs/visionexamples/README.md#getexamplesbylabel1) - Get All Examples for Label
* [GetExamples1](docs/visionexamples/README.md#getexamples1) - Get All Examples
* [ProvideFeedback1](docs/visionexamples/README.md#providefeedback1) - Create a Feedback Example
* [UpdateDatasetAsync1](docs/visionexamples/README.md#updatedatasetasync1) - Create Feedback Examples From a Zip File
* [UpdateDatasetAsync2](docs/visionexamples/README.md#updatedatasetasync2) - Create Examples From a Zip File

### [VisionModels](docs/visionmodels/README.md)

* [DeleteModel1](docs/visionmodels/README.md#deletemodel1) - Delete a Model
* [GetTrainedModelLearningCurve1](docs/visionmodels/README.md#gettrainedmodellearningcurve1) - Get Model Learning Curve
* [GetTrainedModelMetrics1](docs/visionmodels/README.md#gettrainedmodelmetrics1) - Get Model Metrics
* [GetTrainedModels1](docs/visionmodels/README.md#gettrainedmodels1) - Get All Models

### [VisionPrediction](docs/visionprediction/README.md)

* [DetectMultipart](docs/visionprediction/README.md#detectmultipart) - Detection with Image File
* [OcrMultipart](docs/visionprediction/README.md#ocrmultipart) - Detect Text
* [PredictMultipart](docs/visionprediction/README.md#predictmultipart) - Make Prediction

### [VisionTraining](docs/visiontraining/README.md)

* [GetTrainStatusAndProgress1](docs/visiontraining/README.md#gettrainstatusandprogress1) - Get Training Status
* [Retrain1](docs/visiontraining/README.md#retrain1) - Retrain a Dataset
* [Train1](docs/visiontraining/README.md#train1) - Train a Dataset
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
