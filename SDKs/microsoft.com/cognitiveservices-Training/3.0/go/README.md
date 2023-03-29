# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/microsoft.com/cognitiveservices-Training/3.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetDomainRequest{
        PathParams: operations.GetDomainPathParams{
            DomainID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        },
        Headers: operations.GetDomainHeaders{
            TrainingKey: "est",
        },
    }

    ctx := context.Background()
    res, err := s.DomainsAPI.GetDomain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Domain != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### DomainsAPI

* `GetDomain` - Get information about a specific domain.
* `GetDomains` - Get a list of the available domains.

### ImageAPI

* `CreateImageRegionsForm` - Create a set of image regions.
* `CreateImageRegionsJSON` - Create a set of image regions.
* `CreateImageRegionsRaw` - Create a set of image regions.
* `CreateImageTagsForm` - Associate a set of images with a set of tags.
* `CreateImageTagsJSON` - Associate a set of images with a set of tags.
* `CreateImageTagsRaw` - Associate a set of images with a set of tags.
* `CreateImagesFromData` - Add the provided images to the set of training images.
* `CreateImagesFromFilesForm` - Add the provided batch of images to the set of training images.
* `CreateImagesFromFilesJSON` - Add the provided batch of images to the set of training images.
* `CreateImagesFromFilesRaw` - Add the provided batch of images to the set of training images.
* `CreateImagesFromPredictionsForm` - Add the specified predicted images to the set of training images.
* `CreateImagesFromPredictionsJSON` - Add the specified predicted images to the set of training images.
* `CreateImagesFromPredictionsRaw` - Add the specified predicted images to the set of training images.
* `CreateImagesFromUrlsForm` - Add the provided images urls to the set of training images.
* `CreateImagesFromUrlsJSON` - Add the provided images urls to the set of training images.
* `CreateImagesFromUrlsRaw` - Add the provided images urls to the set of training images.
* `DeleteImageRegions` - Delete a set of image regions.
* `DeleteImageTags` - Remove a set of tags from a set of images.
* `DeleteImages` - Delete images from the set of training images.
* `GetImagesByIds` - Get images by id for a given project iteration.
* `GetTaggedImageCount` - Gets the number of images tagged with the provided {tagIds}.
* `GetTaggedImages` - Get tagged images for a given project iteration.
* `GetUntaggedImageCount` - Gets the number of untagged images.
* `GetUntaggedImages` - Get untagged images for a given project iteration.

### ImageRegionProposalAPI

* `GetImageRegionProposals` - Get region proposals for an image. Returns empty array if no proposals are found.

### PredictionsAPI

* `DeletePrediction` - Delete a set of predicted images and their associated prediction results.
* `QueryPredictionsForm` - Get images that were sent to your prediction endpoint.
* `QueryPredictionsJSON` - Get images that were sent to your prediction endpoint.
* `QueryPredictionsRaw` - Get images that were sent to your prediction endpoint.
* `QuickTestImage` - Quick test an image.
* `QuickTestImageURLForm` - Quick test an image url.
* `QuickTestImageURLJSON` - Quick test an image url.
* `QuickTestImageURLRaw` - Quick test an image url.

### ProjectAPI

* `CreateProject` - Create a project.
* `DeleteIteration` - Delete a specific iteration of a project.
* `DeleteProject` - Delete a specific project.
* `ExportIteration` - Export a trained iteration.
* `GetExports` - Get the list of exports for a specific iteration.
* `GetImagePerformanceCount` - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}.
* `GetImagePerformances` - Get image with its prediction for a given project iteration.
* `GetIteration` - Get a specific iteration.
* `GetIterationPerformance` - Get detailed performance information about an iteration.
* `GetIterations` - Get iterations for the project.
* `GetProject` - Get a specific project.
* `GetProjects` - Get your projects.
* `PublishIteration` - Publish a specific iteration.
* `TrainProject` - Queues project for training.
* `UnpublishIteration` - Unpublish a specific iteration.
* `UpdateIterationForm` - Update a specific iteration.
* `UpdateIterationJSON` - Update a specific iteration.
* `UpdateIterationRaw` - Update a specific iteration.
* `UpdateProjectForm` - Update a specific project.
* `UpdateProjectJSON` - Update a specific project.
* `UpdateProjectRaw` - Update a specific project.

### TagsAPI

* `CreateTag` - Create a tag for the project.
* `DeleteTag` - Delete a tag from the project.
* `GetTag` - Get information about a specific tag.
* `GetTags` - Get the tags for a given project and iteration.
* `UpdateTagForm` - Update a tag.
* `UpdateTagJSON` - Update a tag.
* `UpdateTagRaw` - Update a tag.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
