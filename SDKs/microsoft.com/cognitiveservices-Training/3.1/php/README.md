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
use \OpenAPI\OpenAPI\Models\Operations\GetDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainRequest();
    $request->trainingKey = 'corrupti';
    $request->domainId = '9bd9d8d6-9a67-44e0-b467-cc8796ed151a';

    $response = $sdk->domainsApi->getDomain($request);

    if ($response->domain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [domainsApi](docs/domainsapi/README.md)

* [getDomain](docs/domainsapi/README.md#getdomain) - Get information about a specific domain.
* [getDomains](docs/domainsapi/README.md#getdomains) - Get a list of the available domains.

### [imageApi](docs/imageapi/README.md)

* [createImageRegionsForm](docs/imageapi/README.md#createimageregionsform) - Create a set of image regions.
* [createImageRegionsJson](docs/imageapi/README.md#createimageregionsjson) - Create a set of image regions.
* [createImageRegionsRaw](docs/imageapi/README.md#createimageregionsraw) - Create a set of image regions.
* [createImageTagsForm](docs/imageapi/README.md#createimagetagsform) - Associate a set of images with a set of tags.
* [createImageTagsJson](docs/imageapi/README.md#createimagetagsjson) - Associate a set of images with a set of tags.
* [createImageTagsRaw](docs/imageapi/README.md#createimagetagsraw) - Associate a set of images with a set of tags.
* [createImagesFromData](docs/imageapi/README.md#createimagesfromdata) - Add the provided images to the set of training images.
* [createImagesFromFilesForm](docs/imageapi/README.md#createimagesfromfilesform) - Add the provided batch of images to the set of training images.
* [createImagesFromFilesJson](docs/imageapi/README.md#createimagesfromfilesjson) - Add the provided batch of images to the set of training images.
* [createImagesFromFilesRaw](docs/imageapi/README.md#createimagesfromfilesraw) - Add the provided batch of images to the set of training images.
* [createImagesFromPredictionsForm](docs/imageapi/README.md#createimagesfrompredictionsform) - Add the specified predicted images to the set of training images.
* [createImagesFromPredictionsJson](docs/imageapi/README.md#createimagesfrompredictionsjson) - Add the specified predicted images to the set of training images.
* [createImagesFromPredictionsRaw](docs/imageapi/README.md#createimagesfrompredictionsraw) - Add the specified predicted images to the set of training images.
* [createImagesFromUrlsForm](docs/imageapi/README.md#createimagesfromurlsform) - Add the provided images urls to the set of training images.
* [createImagesFromUrlsJson](docs/imageapi/README.md#createimagesfromurlsjson) - Add the provided images urls to the set of training images.
* [createImagesFromUrlsRaw](docs/imageapi/README.md#createimagesfromurlsraw) - Add the provided images urls to the set of training images.
* [deleteImageRegions](docs/imageapi/README.md#deleteimageregions) - Delete a set of image regions.
* [deleteImageTags](docs/imageapi/README.md#deleteimagetags) - Remove a set of tags from a set of images.
* [deleteImages](docs/imageapi/README.md#deleteimages) - Delete images from the set of training images.
* [getImagesByIds](docs/imageapi/README.md#getimagesbyids) - Get images by id for a given project iteration.
* [getTaggedImageCount](docs/imageapi/README.md#gettaggedimagecount) - Gets the number of images tagged with the provided {tagIds}.
* [getTaggedImages](docs/imageapi/README.md#gettaggedimages) - Get tagged images for a given project iteration.
* [getUntaggedImageCount](docs/imageapi/README.md#getuntaggedimagecount) - Gets the number of untagged images.
* [getUntaggedImages](docs/imageapi/README.md#getuntaggedimages) - Get untagged images for a given project iteration.
* [querySuggestedImageCountForm](docs/imageapi/README.md#querysuggestedimagecountform) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [querySuggestedImageCountJson](docs/imageapi/README.md#querysuggestedimagecountjson) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [querySuggestedImageCountRaw](docs/imageapi/README.md#querysuggestedimagecountraw) - Get count of images whose suggested tags match given tags and their probabilities are greater than or equal to the given threshold. Returns count as 0 if none found.
* [querySuggestedImagesForm](docs/imageapi/README.md#querysuggestedimagesform) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
* [querySuggestedImagesJson](docs/imageapi/README.md#querysuggestedimagesjson) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.
* [querySuggestedImagesRaw](docs/imageapi/README.md#querysuggestedimagesraw) - Get untagged images whose suggested tags match given tags. Returns empty array if no images are found.

### [imageRegionProposalApi](docs/imageregionproposalapi/README.md)

* [getImageRegionProposals](docs/imageregionproposalapi/README.md#getimageregionproposals) - Get region proposals for an image. Returns empty array if no proposals are found.

### [predictionsApi](docs/predictionsapi/README.md)

* [deletePrediction](docs/predictionsapi/README.md#deleteprediction) - Delete a set of predicted images and their associated prediction results.
* [queryPredictionsForm](docs/predictionsapi/README.md#querypredictionsform) - Get images that were sent to your prediction endpoint.
* [queryPredictionsJson](docs/predictionsapi/README.md#querypredictionsjson) - Get images that were sent to your prediction endpoint.
* [queryPredictionsRaw](docs/predictionsapi/README.md#querypredictionsraw) - Get images that were sent to your prediction endpoint.
* [quickTestImage](docs/predictionsapi/README.md#quicktestimage) - Quick test an image.
* [quickTestImageUrlForm](docs/predictionsapi/README.md#quicktestimageurlform) - Quick test an image url.
* [quickTestImageUrlJson](docs/predictionsapi/README.md#quicktestimageurljson) - Quick test an image url.
* [quickTestImageUrlRaw](docs/predictionsapi/README.md#quicktestimageurlraw) - Quick test an image url.

### [projectApi](docs/projectapi/README.md)

* [createProject](docs/projectapi/README.md#createproject) - Create a project.
* [deleteIteration](docs/projectapi/README.md#deleteiteration) - Delete a specific iteration of a project.
* [deleteProject](docs/projectapi/README.md#deleteproject) - Delete a specific project.
* [exportIteration](docs/projectapi/README.md#exportiteration) - Export a trained iteration.
* [getExports](docs/projectapi/README.md#getexports) - Get the list of exports for a specific iteration.
* [getImagePerformanceCount](docs/projectapi/README.md#getimageperformancecount) - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}.
* [getImagePerformances](docs/projectapi/README.md#getimageperformances) - Get image with its prediction for a given project iteration.
* [getIteration](docs/projectapi/README.md#getiteration) - Get a specific iteration.
* [getIterationPerformance](docs/projectapi/README.md#getiterationperformance) - Get detailed performance information about an iteration.
* [getIterations](docs/projectapi/README.md#getiterations) - Get iterations for the project.
* [getProject](docs/projectapi/README.md#getproject) - Get a specific project.
* [getProjects](docs/projectapi/README.md#getprojects) - Get your projects.
* [publishIteration](docs/projectapi/README.md#publishiteration) - Publish a specific iteration.
* [trainProject](docs/projectapi/README.md#trainproject) - Queues project for training.
* [unpublishIteration](docs/projectapi/README.md#unpublishiteration) - Unpublish a specific iteration.
* [updateIterationForm](docs/projectapi/README.md#updateiterationform) - Update a specific iteration.
* [updateIterationJson](docs/projectapi/README.md#updateiterationjson) - Update a specific iteration.
* [updateIterationRaw](docs/projectapi/README.md#updateiterationraw) - Update a specific iteration.
* [updateProjectForm](docs/projectapi/README.md#updateprojectform) - Update a specific project.
* [updateProjectJson](docs/projectapi/README.md#updateprojectjson) - Update a specific project.
* [updateProjectRaw](docs/projectapi/README.md#updateprojectraw) - Update a specific project.

### [suggestTagsAndRegionsApi](docs/suggesttagsandregionsapi/README.md)

* [suggestTagsAndRegions](docs/suggesttagsandregionsapi/README.md#suggesttagsandregions) - Suggest tags and regions for an array/batch of untagged images. Returns empty array if no tags are found.

### [tagsApi](docs/tagsapi/README.md)

* [createTag](docs/tagsapi/README.md#createtag) - Create a tag for the project.
* [deleteTag](docs/tagsapi/README.md#deletetag) - Delete a tag from the project.
* [getTag](docs/tagsapi/README.md#gettag) - Get information about a specific tag.
* [getTags](docs/tagsapi/README.md#gettags) - Get the tags for a given project and iteration.
* [updateTagForm](docs/tagsapi/README.md#updatetagform) - Update a tag.
* [updateTagJson](docs/tagsapi/README.md#updatetagjson) - Update a tag.
* [updateTagRaw](docs/tagsapi/README.md#updatetagraw) - Update a tag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
