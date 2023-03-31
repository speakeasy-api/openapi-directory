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

import org.openapis.openapi.models.operations.GetAccountInfoHeaders;
import org.openapis.openapi.models.operations.GetAccountInfoRequest;
import org.openapis.openapi.models.operations.GetAccountInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountInfoRequest req = new GetAccountInfoRequest() {{
                headers = new GetAccountInfoHeaders() {{
                    trainingKey = "corrupti";
                }};
            }};            

            GetAccountInfoResponse res = sdk.accountApi.getAccountInfo(req);

            if (res.account.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accountApi

* `getAccountInfo` - Get basic information about your account

### domainsApi

* `getDomain` - Get information about a specific domain
* `getDomains` - Get a list of the available domains

### imageApi

* `createImagesFromData` - Add the provided images to the set of training images
* `createImagesFromFilesForm` - Add the provided batch of images to the set of training images
* `createImagesFromFilesJson` - Add the provided batch of images to the set of training images
* `createImagesFromFilesRaw` - Add the provided batch of images to the set of training images
* `createImagesFromPredictionsForm` - Add the specified predicted images to the set of training images
* `createImagesFromPredictionsJson` - Add the specified predicted images to the set of training images
* `createImagesFromPredictionsRaw` - Add the specified predicted images to the set of training images
* `createImagesFromUrlsForm` - Add the provided images urls to the set of training images
* `createImagesFromUrlsJson` - Add the provided images urls to the set of training images
* `createImagesFromUrlsRaw` - Add the provided images urls to the set of training images
* `deleteImageTags` - Remove a set of tags from a set of images
* `deleteImages` - Delete images from the set of training images
* `getTaggedImages` - Get tagged images for a given project iteration
* `getUntaggedImages` - Get untagged images for a given project iteration
* `postImageTagsForm` - Associate a set of images with a set of tags
* `postImageTagsJson` - Associate a set of images with a set of tags
* `postImageTagsRaw` - Associate a set of images with a set of tags

### predictionsApi

* `deletePrediction` - Delete a set of predicted images and their associated prediction results
* `queryPredictionResultsForm` - Get images that were sent to your prediction endpoint
* `queryPredictionResultsJson` - Get images that were sent to your prediction endpoint
* `queryPredictionResultsRaw` - Get images that were sent to your prediction endpoint
* `quickTestImage` - Quick test an image
* `quickTestImageUrlForm` - Quick test an image url
* `quickTestImageUrlJson` - Quick test an image url
* `quickTestImageUrlRaw` - Quick test an image url

### projectApi

* `createProject` - Create a project
* `deleteIteration` - Delete a specific iteration of a project
* `deleteProject` - Delete a specific project
* `exportIteration` - Export a trained iteration
* `getExports` - Get the list of exports for a specific iteration
* `getIteration` - Get a specific iteration
* `getIterationPerformance` - Get detailed performance information about a trained iteration
* `getIterations` - Get iterations for the project
* `getProject` - Get a specific project
* `getProjects` - Get your projects
* `trainProject` - Queues project for training
* `updateIterationForm` - Update a specific iteration
* `updateIterationJson` - Update a specific iteration
* `updateIterationRaw` - Update a specific iteration
* `updateProjectForm` - Update a specific project
* `updateProjectJson` - Update a specific project
* `updateProjectRaw` - Update a specific project

### tagsApi

* `createTag` - Create a tag for the project
* `deleteTag` - Delete a tag from the project
* `getTag` - Get information about a specific tag
* `getTags` - Get the tags for a given project and iteration
* `updateTagForm` - Update a tag
* `updateTagJson` - Update a tag
* `updateTagRaw` - Update a tag
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
