# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/microsoft.com/cognitiveservices-Training/1.2/go
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
    res, err := s.AccountAPI.GetAccountInfo(ctx, operations.GetAccountInfoRequest{
        TrainingKey: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AccountAPI](docs/accountapi/README.md)

* [GetAccountInfo](docs/accountapi/README.md#getaccountinfo) - Get basic information about your account

### [DomainsAPI](docs/domainsapi/README.md)

* [GetDomain](docs/domainsapi/README.md#getdomain) - Get information about a specific domain
* [GetDomains](docs/domainsapi/README.md#getdomains) - Get a list of the available domains

### [ImageAPI](docs/imageapi/README.md)

* [CreateImagesFromData](docs/imageapi/README.md#createimagesfromdata) - Add the provided images to the set of training images
* [CreateImagesFromFilesForm](docs/imageapi/README.md#createimagesfromfilesform) - Add the provided batch of images to the set of training images
* [CreateImagesFromFilesJSON](docs/imageapi/README.md#createimagesfromfilesjson) - Add the provided batch of images to the set of training images
* [CreateImagesFromFilesRaw](docs/imageapi/README.md#createimagesfromfilesraw) - Add the provided batch of images to the set of training images
* [CreateImagesFromPredictionsForm](docs/imageapi/README.md#createimagesfrompredictionsform) - Add the specified predicted images to the set of training images
* [CreateImagesFromPredictionsJSON](docs/imageapi/README.md#createimagesfrompredictionsjson) - Add the specified predicted images to the set of training images
* [CreateImagesFromPredictionsRaw](docs/imageapi/README.md#createimagesfrompredictionsraw) - Add the specified predicted images to the set of training images
* [CreateImagesFromUrlsForm](docs/imageapi/README.md#createimagesfromurlsform) - Add the provided images urls to the set of training images
* [CreateImagesFromUrlsJSON](docs/imageapi/README.md#createimagesfromurlsjson) - Add the provided images urls to the set of training images
* [CreateImagesFromUrlsRaw](docs/imageapi/README.md#createimagesfromurlsraw) - Add the provided images urls to the set of training images
* [DeleteImageTags](docs/imageapi/README.md#deleteimagetags) - Remove a set of tags from a set of images
* [DeleteImages](docs/imageapi/README.md#deleteimages) - Delete images from the set of training images
* [GetTaggedImages](docs/imageapi/README.md#gettaggedimages) - Get tagged images for a given project iteration
* [GetUntaggedImages](docs/imageapi/README.md#getuntaggedimages) - Get untagged images for a given project iteration
* [PostImageTagsForm](docs/imageapi/README.md#postimagetagsform) - Associate a set of images with a set of tags
* [PostImageTagsJSON](docs/imageapi/README.md#postimagetagsjson) - Associate a set of images with a set of tags
* [PostImageTagsRaw](docs/imageapi/README.md#postimagetagsraw) - Associate a set of images with a set of tags

### [PredictionsAPI](docs/predictionsapi/README.md)

* [DeletePrediction](docs/predictionsapi/README.md#deleteprediction) - Delete a set of predicted images and their associated prediction results
* [QueryPredictionResultsForm](docs/predictionsapi/README.md#querypredictionresultsform) - Get images that were sent to your prediction endpoint
* [QueryPredictionResultsJSON](docs/predictionsapi/README.md#querypredictionresultsjson) - Get images that were sent to your prediction endpoint
* [QueryPredictionResultsRaw](docs/predictionsapi/README.md#querypredictionresultsraw) - Get images that were sent to your prediction endpoint
* [QuickTestImage](docs/predictionsapi/README.md#quicktestimage) - Quick test an image
* [QuickTestImageURLForm](docs/predictionsapi/README.md#quicktestimageurlform) - Quick test an image url
* [QuickTestImageURLJSON](docs/predictionsapi/README.md#quicktestimageurljson) - Quick test an image url
* [QuickTestImageURLRaw](docs/predictionsapi/README.md#quicktestimageurlraw) - Quick test an image url

### [ProjectAPI](docs/projectapi/README.md)

* [CreateProject](docs/projectapi/README.md#createproject) - Create a project
* [DeleteIteration](docs/projectapi/README.md#deleteiteration) - Delete a specific iteration of a project
* [DeleteProject](docs/projectapi/README.md#deleteproject) - Delete a specific project
* [ExportIteration](docs/projectapi/README.md#exportiteration) - Export a trained iteration
* [GetExports](docs/projectapi/README.md#getexports) - Get the list of exports for a specific iteration
* [GetIteration](docs/projectapi/README.md#getiteration) - Get a specific iteration
* [GetIterationPerformance](docs/projectapi/README.md#getiterationperformance) - Get detailed performance information about a trained iteration
* [GetIterations](docs/projectapi/README.md#getiterations) - Get iterations for the project
* [GetProject](docs/projectapi/README.md#getproject) - Get a specific project
* [GetProjects](docs/projectapi/README.md#getprojects) - Get your projects
* [TrainProject](docs/projectapi/README.md#trainproject) - Queues project for training
* [UpdateIterationForm](docs/projectapi/README.md#updateiterationform) - Update a specific iteration
* [UpdateIterationJSON](docs/projectapi/README.md#updateiterationjson) - Update a specific iteration
* [UpdateIterationRaw](docs/projectapi/README.md#updateiterationraw) - Update a specific iteration
* [UpdateProjectForm](docs/projectapi/README.md#updateprojectform) - Update a specific project
* [UpdateProjectJSON](docs/projectapi/README.md#updateprojectjson) - Update a specific project
* [UpdateProjectRaw](docs/projectapi/README.md#updateprojectraw) - Update a specific project

### [TagsAPI](docs/tagsapi/README.md)

* [CreateTag](docs/tagsapi/README.md#createtag) - Create a tag for the project
* [DeleteTag](docs/tagsapi/README.md#deletetag) - Delete a tag from the project
* [GetTag](docs/tagsapi/README.md#gettag) - Get information about a specific tag
* [GetTags](docs/tagsapi/README.md#gettags) - Get the tags for a given project and iteration
* [UpdateTagForm](docs/tagsapi/README.md#updatetagform) - Update a tag
* [UpdateTagJSON](docs/tagsapi/README.md#updatetagjson) - Update a tag
* [UpdateTagRaw](docs/tagsapi/README.md#updatetagraw) - Update a tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
