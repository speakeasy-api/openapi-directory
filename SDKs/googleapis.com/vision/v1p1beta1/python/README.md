# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.VisionFilesAnnotateRequest(
    security=operations.VisionFilesAnnotateSecurity(
        option1=operations.VisionFilesAnnotateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.VisionFilesAnnotateQueryParams(
        dollar_xgafv="1",
        access_token="eius",
        alt="proto",
        callback="minus",
        fields="esse",
        key="autem",
        oauth_token="rerum",
        pretty_print=True,
        quota_user="laboriosam",
        upload_type="sint",
        upload_protocol="nisi",
    ),
    request=shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest(
        parent="recusandae",
        requests=[
            shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest(
                features=[
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=3971315781086113626,
                        model="esse",
                        type="CROP_HINTS",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=3280961666086257703,
                        model="dolore",
                        type="PRODUCT_SEARCH",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=2168295586647050175,
                        model="reprehenderit",
                        type="LOGO_DETECTION",
                    ),
                ],
                image_context=shared.GoogleCloudVisionV1p1beta1ImageContext(
                    crop_hints_params=shared.GoogleCloudVisionV1p1beta1CropHintsParams(
                        aspect_ratios=[
                            33.200001,
                            24.200001,
                            19.200001,
                        ],
                    ),
                    language_hints=[
                        "ducimus",
                        "quam",
                        "voluptas",
                    ],
                    lat_long_rect=shared.GoogleCloudVisionV1p1beta1LatLongRect(
                        max_lat_lng=shared.LatLng(
                            latitude=66.099998,
                            longitude=11.100000,
                        ),
                        min_lat_lng=shared.LatLng(
                            latitude=97.099998,
                            longitude=99.199997,
                        ),
                    ),
                    product_search_params=shared.GoogleCloudVisionV1p1beta1ProductSearchParams(
                        bounding_poly=shared.GoogleCloudVisionV1p1beta1BoundingPoly(
                            normalized_vertices=[
                                shared.GoogleCloudVisionV1p1beta1NormalizedVertex(
                                    x=73.199997,
                                    y=20.200001,
                                ),
                            ],
                            vertices=[
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=4811534959094338657,
                                    y=8138503825895719319,
                                ),
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=3370215413715443786,
                                    y=894693224882232375,
                                ),
                            ],
                        ),
                        filter="enim",
                        product_categories=[
                            "voluptatem",
                            "et",
                        ],
                        product_set="quia",
                    ),
                    text_detection_params=shared.GoogleCloudVisionV1p1beta1TextDetectionParams(
                        advanced_ocr_options=[
                            "omnis",
                            "libero",
                            "eum",
                        ],
                        enable_text_detection_confidence_score=False,
                    ),
                    web_detection_params=shared.GoogleCloudVisionV1p1beta1WebDetectionParams(
                        include_geo_results=False,
                    ),
                ),
                input_config=shared.GoogleCloudVisionV1p1beta1InputConfig(
                    content="est",
                    gcs_source=shared.GoogleCloudVisionV1p1beta1GcsSource(
                        uri="soluta",
                    ),
                    mime_type="consequatur",
                ),
                pages=[
                    888600988671988232,
                ],
            ),
        ],
    ),
)
    
res = s.files.vision_files_annotate(req)

if res.google_cloud_vision_v1p1beta1_batch_annotate_files_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### files

* `vision_files_annotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `vision_files_async_batch_annotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).

### images

* `vision_images_annotate` - Run image detection and annotation for a batch of images.
* `vision_images_async_batch_annotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

### projects

* `vision_projects_locations_files_annotate` - Service that performs image detection and annotation for a batch of files. Now only "application/pdf", "image/tiff" and "image/gif" are supported. This service will extract at most 5 (customers can specify which 5 in AnnotateFileRequest.pages) frames (gif) or pages (pdf or tiff) from each file provided and perform detection and annotation for each image extracted.
* `vision_projects_locations_files_async_batch_annotate` - Run asynchronous image detection and annotation for a list of generic files, such as PDF files, which may contain multiple pages and multiple images per page. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateFilesResponse` (results).
* `vision_projects_locations_images_annotate` - Run image detection and annotation for a batch of images.
* `vision_projects_locations_images_async_batch_annotate` - Run asynchronous image detection and annotation for a list of images. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `OperationMetadata` (metadata). `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results). This service will write image annotation outputs to json files in customer GCS bucket, each json file containing BatchAnnotateImagesResponse proto.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
