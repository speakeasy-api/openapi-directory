# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### authorization

* `generateTokenV2` - Generate an OAuth Token
* `revokeRefreshTokenV2` - Delete a Refresh Token

### checkAPIUsage

* `getApiUsagePlansV2` - Get API Isage

### languageDatasets

* `deleteDataset` - Delete a Dataset
* `get` - Get Deletion Status
* `getDataset` - Get a Dataset
* `listDatasets` - Get All Datasets
* `uploadDatasetAsync` - Create a Dataset From a File Asynchronously
* `uploadDatasetSync` - Create a Dataset From a File Synchronously

### languageExamples

* `getExamples` - Get All Examples
* `getExamplesByLabel` - Get All Examples for Label
* `provideFeedback` - Create a Feedback Example
* `updateDatasetAsync` - Create Examples From a File

### languageModels

* `deleteModel` - Delete a Model
* `getTrainedModelLearningCurve` - Get Model Learning Curve
* `getTrainedModelMetrics` - Get Model Metrics
* `getTrainedModels` - Get All Models

### languagePrediction

* `intentMultipart` - Prediction for Intent
* `sentimentMultipart` - Prediction for Sentiment

### languageTraining

* `getTrainStatusAndProgress` - Get Training Status
* `retrain` - Retrain a Dataset
* `train` - Train a Dataset

### visionDatasets

* `createDataset` - Create a Dataset
* `deleteDataset1` - Delete a Dataset
* `getDataset1` - Get a Dataset
* `get1` - Get Deletion Status
* `listDatasets1` - Get All Datasets
* `uploadDatasetAsync1` - Create a Dataset From a Zip File Asynchronously
* `uploadDatasetSync1` - Create a Dataset From a Zip File Synchronously

### visionExamples

* `addExample` - Create an Example
* `getExamplesByLabel1` - Get All Examples for Label
* `getExamples1` - Get All Examples
* `provideFeedback1` - Create a Feedback Example
* `updateDatasetAsync1` - Create Feedback Examples From a Zip File
* `updateDatasetAsync2` - Create Examples From a Zip File

### visionModels

* `deleteModel1` - Delete a Model
* `getTrainedModelLearningCurve1` - Get Model Learning Curve
* `getTrainedModelMetrics1` - Get Model Metrics
* `getTrainedModels1` - Get All Models

### visionPrediction

* `detectMultipart` - Detection with Image File
* `ocrMultipart` - Detect Text
* `predictMultipart` - Make Prediction

### visionTraining

* `getTrainStatusAndProgress1` - Get Training Status
* `retrain1` - Retrain a Dataset
* `train1` - Train a Dataset
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
