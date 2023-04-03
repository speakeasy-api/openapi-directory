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

import org.openapis.openapi.models.operations.GetDomainRequest;
import org.openapis.openapi.models.operations.GetDomainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainRequest req = new GetDomainRequest() {{
                trainingKey = "corrupti";
                domainId = "9bd9d8d6-9a67-44e0-b467-cc8796ed151a";
            }}            

            GetDomainResponse res = sdk.domainsApi.getDomain(req);

            if (res.domain.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### domainsApi

* `getDomain` - Get information about a specific domain.
* `getDomains` - Get a list of the available domains.

### imageApi

* `createImageRegionsForm` - Create a set of image regions.
* `createImageRegionsJson` - Create a set of image regions.
* `createImageRegionsRaw` - Create a set of image regions.
* `createImageTagsForm` - Associate a set of images with a set of tags.
* `createImageTagsJson` - Associate a set of images with a set of tags.
* `createImageTagsRaw` - Associate a set of images with a set of tags.
* `createImagesFromData` - Add the provided images to the set of training images.
* `createImagesFromFilesForm` - Add the provided batch of images to the set of training images.
* `createImagesFromFilesJson` - Add the provided batch of images to the set of training images.
* `createImagesFromFilesRaw` - Add the provided batch of images to the set of training images.
* `createImagesFromPredictionsForm` - Add the specified predicted images to the set of training images.
* `createImagesFromPredictionsJson` - Add the specified predicted images to the set of training images.
* `createImagesFromPredictionsRaw` - Add the specified predicted images to the set of training images.
* `createImagesFromUrlsForm` - Add the provided images urls to the set of training images.
* `createImagesFromUrlsJson` - Add the provided images urls to the set of training images.
* `createImagesFromUrlsRaw` - Add the provided images urls to the set of training images.
* `deleteImageRegions` - Delete a set of image regions.
* `deleteImageTags` - Remove a set of tags from a set of images.
* `deleteImages` - Delete images from the set of training images.
* `getImagesByIds` - Get images by id for a given project iteration.
* `getTaggedImageCount` - Gets the number of images tagged with the provided {tagIds}.
* `getTaggedImages` - Get tagged images for a given project iteration.
* `getUntaggedImageCount` - Gets the number of untagged images.
* `getUntaggedImages` - Get untagged images for a given project iteration.

### imageRegionProposalApi

* `getImageRegionProposals` - Get region proposals for an image. Returns empty array if no proposals are found.

### predictionsApi

* `deletePrediction` - Delete a set of predicted images and their associated prediction results.
* `queryPredictionsForm` - Get images that were sent to your prediction endpoint.
* `queryPredictionsJson` - Get images that were sent to your prediction endpoint.
* `queryPredictionsRaw` - Get images that were sent to your prediction endpoint.
* `quickTestImage` - Quick test an image.
* `quickTestImageUrlForm` - Quick test an image url.
* `quickTestImageUrlJson` - Quick test an image url.
* `quickTestImageUrlRaw` - Quick test an image url.

### projectApi

* `createProject` - Create a project.
* `deleteIteration` - Delete a specific iteration of a project.
* `deleteProject` - Delete a specific project.
* `exportIteration` - Export a trained iteration.
* `getExports` - Get the list of exports for a specific iteration.
* `getImagePerformanceCount` - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}.
* `getImagePerformances` - Get image with its prediction for a given project iteration.
* `getIteration` - Get a specific iteration.
* `getIterationPerformance` - Get detailed performance information about an iteration.
* `getIterations` - Get iterations for the project.
* `getProject` - Get a specific project.
* `getProjects` - Get your projects.
* `publishIteration` - Publish a specific iteration.
* `trainProject` - Queues project for training.
* `unpublishIteration` - Unpublish a specific iteration.
* `updateIterationForm` - Update a specific iteration.
* `updateIterationJson` - Update a specific iteration.
* `updateIterationRaw` - Update a specific iteration.
* `updateProjectForm` - Update a specific project.
* `updateProjectJson` - Update a specific project.
* `updateProjectRaw` - Update a specific project.

### tagsApi

* `createTag` - Create a tag for the project.
* `deleteTag` - Delete a tag from the project.
* `getTag` - Get information about a specific tag.
* `getTags` - Get the tags for a given project and iteration.
* `updateTagForm` - Update a tag.
* `updateTagJson` - Update a tag.
* `updateTagRaw` - Update a tag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
