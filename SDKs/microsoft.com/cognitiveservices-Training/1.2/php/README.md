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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountInfoRequest();
    $request->trainingKey = 'corrupti';

    $response = $sdk->accountApi->getAccountInfo($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountApi](docs/accountapi/README.md)

* [getAccountInfo](docs/accountapi/README.md#getaccountinfo) - Get basic information about your account

### [domainsApi](docs/domainsapi/README.md)

* [getDomain](docs/domainsapi/README.md#getdomain) - Get information about a specific domain
* [getDomains](docs/domainsapi/README.md#getdomains) - Get a list of the available domains

### [imageApi](docs/imageapi/README.md)

* [createImagesFromData](docs/imageapi/README.md#createimagesfromdata) - Add the provided images to the set of training images
* [createImagesFromFilesForm](docs/imageapi/README.md#createimagesfromfilesform) - Add the provided batch of images to the set of training images
* [createImagesFromFilesJson](docs/imageapi/README.md#createimagesfromfilesjson) - Add the provided batch of images to the set of training images
* [createImagesFromFilesRaw](docs/imageapi/README.md#createimagesfromfilesraw) - Add the provided batch of images to the set of training images
* [createImagesFromPredictionsForm](docs/imageapi/README.md#createimagesfrompredictionsform) - Add the specified predicted images to the set of training images
* [createImagesFromPredictionsJson](docs/imageapi/README.md#createimagesfrompredictionsjson) - Add the specified predicted images to the set of training images
* [createImagesFromPredictionsRaw](docs/imageapi/README.md#createimagesfrompredictionsraw) - Add the specified predicted images to the set of training images
* [createImagesFromUrlsForm](docs/imageapi/README.md#createimagesfromurlsform) - Add the provided images urls to the set of training images
* [createImagesFromUrlsJson](docs/imageapi/README.md#createimagesfromurlsjson) - Add the provided images urls to the set of training images
* [createImagesFromUrlsRaw](docs/imageapi/README.md#createimagesfromurlsraw) - Add the provided images urls to the set of training images
* [deleteImageTags](docs/imageapi/README.md#deleteimagetags) - Remove a set of tags from a set of images
* [deleteImages](docs/imageapi/README.md#deleteimages) - Delete images from the set of training images
* [getTaggedImages](docs/imageapi/README.md#gettaggedimages) - Get tagged images for a given project iteration
* [getUntaggedImages](docs/imageapi/README.md#getuntaggedimages) - Get untagged images for a given project iteration
* [postImageTagsForm](docs/imageapi/README.md#postimagetagsform) - Associate a set of images with a set of tags
* [postImageTagsJson](docs/imageapi/README.md#postimagetagsjson) - Associate a set of images with a set of tags
* [postImageTagsRaw](docs/imageapi/README.md#postimagetagsraw) - Associate a set of images with a set of tags

### [predictionsApi](docs/predictionsapi/README.md)

* [deletePrediction](docs/predictionsapi/README.md#deleteprediction) - Delete a set of predicted images and their associated prediction results
* [queryPredictionResultsForm](docs/predictionsapi/README.md#querypredictionresultsform) - Get images that were sent to your prediction endpoint
* [queryPredictionResultsJson](docs/predictionsapi/README.md#querypredictionresultsjson) - Get images that were sent to your prediction endpoint
* [queryPredictionResultsRaw](docs/predictionsapi/README.md#querypredictionresultsraw) - Get images that were sent to your prediction endpoint
* [quickTestImage](docs/predictionsapi/README.md#quicktestimage) - Quick test an image
* [quickTestImageUrlForm](docs/predictionsapi/README.md#quicktestimageurlform) - Quick test an image url
* [quickTestImageUrlJson](docs/predictionsapi/README.md#quicktestimageurljson) - Quick test an image url
* [quickTestImageUrlRaw](docs/predictionsapi/README.md#quicktestimageurlraw) - Quick test an image url

### [projectApi](docs/projectapi/README.md)

* [createProject](docs/projectapi/README.md#createproject) - Create a project
* [deleteIteration](docs/projectapi/README.md#deleteiteration) - Delete a specific iteration of a project
* [deleteProject](docs/projectapi/README.md#deleteproject) - Delete a specific project
* [exportIteration](docs/projectapi/README.md#exportiteration) - Export a trained iteration
* [getExports](docs/projectapi/README.md#getexports) - Get the list of exports for a specific iteration
* [getIteration](docs/projectapi/README.md#getiteration) - Get a specific iteration
* [getIterationPerformance](docs/projectapi/README.md#getiterationperformance) - Get detailed performance information about a trained iteration
* [getIterations](docs/projectapi/README.md#getiterations) - Get iterations for the project
* [getProject](docs/projectapi/README.md#getproject) - Get a specific project
* [getProjects](docs/projectapi/README.md#getprojects) - Get your projects
* [trainProject](docs/projectapi/README.md#trainproject) - Queues project for training
* [updateIterationForm](docs/projectapi/README.md#updateiterationform) - Update a specific iteration
* [updateIterationJson](docs/projectapi/README.md#updateiterationjson) - Update a specific iteration
* [updateIterationRaw](docs/projectapi/README.md#updateiterationraw) - Update a specific iteration
* [updateProjectForm](docs/projectapi/README.md#updateprojectform) - Update a specific project
* [updateProjectJson](docs/projectapi/README.md#updateprojectjson) - Update a specific project
* [updateProjectRaw](docs/projectapi/README.md#updateprojectraw) - Update a specific project

### [tagsApi](docs/tagsapi/README.md)

* [createTag](docs/tagsapi/README.md#createtag) - Create a tag for the project
* [deleteTag](docs/tagsapi/README.md#deletetag) - Delete a tag from the project
* [getTag](docs/tagsapi/README.md#gettag) - Get information about a specific tag
* [getTags](docs/tagsapi/README.md#gettags) - Get the tags for a given project and iteration
* [updateTagForm](docs/tagsapi/README.md#updatetagform) - Update a tag
* [updateTagJson](docs/tagsapi/README.md#updatetagjson) - Update a tag
* [updateTagRaw](docs/tagsapi/README.md#updatetagraw) - Update a tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
