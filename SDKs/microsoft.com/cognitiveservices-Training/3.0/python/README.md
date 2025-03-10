# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/microsoft.com/cognitiveservices-Training/3.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetDomainRequest(
    training_key="corrupti",
    domain_id="9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
)
    
res = s.domains_api.get_domain(req)

if res.domain is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### domains_api

* `get_domain` - Get information about a specific domain.
* `get_domains` - Get a list of the available domains.

### image_api

* `create_image_regions_form` - Create a set of image regions.
* `create_image_regions_json` - Create a set of image regions.
* `create_image_regions_raw` - Create a set of image regions.
* `create_image_tags_form` - Associate a set of images with a set of tags.
* `create_image_tags_json` - Associate a set of images with a set of tags.
* `create_image_tags_raw` - Associate a set of images with a set of tags.
* `create_images_from_data` - Add the provided images to the set of training images.
* `create_images_from_files_form` - Add the provided batch of images to the set of training images.
* `create_images_from_files_json` - Add the provided batch of images to the set of training images.
* `create_images_from_files_raw` - Add the provided batch of images to the set of training images.
* `create_images_from_predictions_form` - Add the specified predicted images to the set of training images.
* `create_images_from_predictions_json` - Add the specified predicted images to the set of training images.
* `create_images_from_predictions_raw` - Add the specified predicted images to the set of training images.
* `create_images_from_urls_form` - Add the provided images urls to the set of training images.
* `create_images_from_urls_json` - Add the provided images urls to the set of training images.
* `create_images_from_urls_raw` - Add the provided images urls to the set of training images.
* `delete_image_regions` - Delete a set of image regions.
* `delete_image_tags` - Remove a set of tags from a set of images.
* `delete_images` - Delete images from the set of training images.
* `get_images_by_ids` - Get images by id for a given project iteration.
* `get_tagged_image_count` - Gets the number of images tagged with the provided {tagIds}.
* `get_tagged_images` - Get tagged images for a given project iteration.
* `get_untagged_image_count` - Gets the number of untagged images.
* `get_untagged_images` - Get untagged images for a given project iteration.

### image_region_proposal_api

* `get_image_region_proposals` - Get region proposals for an image. Returns empty array if no proposals are found.

### predictions_api

* `delete_prediction` - Delete a set of predicted images and their associated prediction results.
* `query_predictions_form` - Get images that were sent to your prediction endpoint.
* `query_predictions_json` - Get images that were sent to your prediction endpoint.
* `query_predictions_raw` - Get images that were sent to your prediction endpoint.
* `quick_test_image` - Quick test an image.
* `quick_test_image_url_form` - Quick test an image url.
* `quick_test_image_url_json` - Quick test an image url.
* `quick_test_image_url_raw` - Quick test an image url.

### project_api

* `create_project` - Create a project.
* `delete_iteration` - Delete a specific iteration of a project.
* `delete_project` - Delete a specific project.
* `export_iteration` - Export a trained iteration.
* `get_exports` - Get the list of exports for a specific iteration.
* `get_image_performance_count` - Gets the number of images tagged with the provided {tagIds} that have prediction results from
training for the provided iteration {iterationId}.
* `get_image_performances` - Get image with its prediction for a given project iteration.
* `get_iteration` - Get a specific iteration.
* `get_iteration_performance` - Get detailed performance information about an iteration.
* `get_iterations` - Get iterations for the project.
* `get_project` - Get a specific project.
* `get_projects` - Get your projects.
* `publish_iteration` - Publish a specific iteration.
* `train_project` - Queues project for training.
* `unpublish_iteration` - Unpublish a specific iteration.
* `update_iteration_form` - Update a specific iteration.
* `update_iteration_json` - Update a specific iteration.
* `update_iteration_raw` - Update a specific iteration.
* `update_project_form` - Update a specific project.
* `update_project_json` - Update a specific project.
* `update_project_raw` - Update a specific project.

### tags_api

* `create_tag` - Create a tag for the project.
* `delete_tag` - Delete a tag from the project.
* `get_tag` - Get information about a specific tag.
* `get_tags` - Get the tags for a given project and iteration.
* `update_tag_form` - Update a tag.
* `update_tag_json` - Update a tag.
* `update_tag_raw` - Update a tag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
