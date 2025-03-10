# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/vision/v1p1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.VisionFilesAnnotateRequest(
    dollar_xgafv="2",
    google_cloud_vision_v1p1beta1_batch_annotate_files_request=shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest(
        parent="provident",
        requests=[
            shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest(
                features=[
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=602763,
                        model="nulla",
                        type="SAFE_SEARCH_DETECTION",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=847252,
                        model="vel",
                        type="IMAGE_PROPERTIES",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=645894,
                        model="suscipit",
                        type="TEXT_DETECTION",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=297534,
                        model="debitis",
                        type="TYPE_UNSPECIFIED",
                    ),
                ],
                image_context=shared.GoogleCloudVisionV1p1beta1ImageContext(
                    crop_hints_params=shared.GoogleCloudVisionV1p1beta1CropHintsParams(
                        aspect_ratios=[
                            2726.56,
                            3834.41,
                            4776.65,
                            7917.25,
                        ],
                    ),
                    language_hints=[
                        "voluptatum",
                        "iusto",
                        "excepturi",
                        "nisi",
                    ],
                    lat_long_rect=shared.GoogleCloudVisionV1p1beta1LatLongRect(
                        max_lat_lng=shared.LatLng(
                            latitude=9255.97,
                            longitude=8360.79,
                        ),
                        min_lat_lng=shared.LatLng(
                            latitude=710.36,
                            longitude=3373.96,
                        ),
                    ),
                    product_search_params=shared.GoogleCloudVisionV1p1beta1ProductSearchParams(
                        bounding_poly=shared.GoogleCloudVisionV1p1beta1BoundingPoly(
                            normalized_vertices=[
                                shared.GoogleCloudVisionV1p1beta1NormalizedVertex(
                                    x=6481.72,
                                    y=202.18,
                                ),
                            ],
                            vertices=[
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=832620,
                                    y=957156,
                                ),
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=778157,
                                    y=140350,
                                ),
                            ],
                        ),
                        filter="at",
                        product_categories=[
                            "maiores",
                            "molestiae",
                            "quod",
                            "quod",
                        ],
                        product_set="esse",
                    ),
                    text_detection_params=shared.GoogleCloudVisionV1p1beta1TextDetectionParams(
                        advanced_ocr_options=[
                            "porro",
                            "dolorum",
                            "dicta",
                        ],
                        enable_text_detection_confidence_score=False,
                    ),
                    web_detection_params=shared.GoogleCloudVisionV1p1beta1WebDetectionParams(
                        include_geo_results=False,
                    ),
                ),
                input_config=shared.GoogleCloudVisionV1p1beta1InputConfig(
                    content="nam",
                    gcs_source=shared.GoogleCloudVisionV1p1beta1GcsSource(
                        uri="https://oily-cephalopod.name",
                    ),
                    mime_type="hic",
                ),
                pages=[
                    521848,
                    105907,
                    414662,
                    473600,
                ],
            ),
            shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest(
                features=[
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=186332,
                        model="impedit",
                        type="CROP_HINTS",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=456150,
                        model="ipsum",
                        type="SAFE_SEARCH_DETECTION",
                    ),
                ],
                image_context=shared.GoogleCloudVisionV1p1beta1ImageContext(
                    crop_hints_params=shared.GoogleCloudVisionV1p1beta1CropHintsParams(
                        aspect_ratios=[
                            187.89,
                        ],
                    ),
                    language_hints=[
                        "natus",
                        "sed",
                    ],
                    lat_long_rect=shared.GoogleCloudVisionV1p1beta1LatLongRect(
                        max_lat_lng=shared.LatLng(
                            latitude=6120.96,
                            longitude=2223.21,
                        ),
                        min_lat_lng=shared.LatLng(
                            latitude=6169.34,
                            longitude=3864.89,
                        ),
                    ),
                    product_search_params=shared.GoogleCloudVisionV1p1beta1ProductSearchParams(
                        bounding_poly=shared.GoogleCloudVisionV1p1beta1BoundingPoly(
                            normalized_vertices=[
                                shared.GoogleCloudVisionV1p1beta1NormalizedVertex(
                                    x=9025.99,
                                    y=6818.2,
                                ),
                                shared.GoogleCloudVisionV1p1beta1NormalizedVertex(
                                    x=4499.5,
                                    y=3595.08,
                                ),
                                shared.GoogleCloudVisionV1p1beta1NormalizedVertex(
                                    x=6130.64,
                                    y=4370.32,
                                ),
                                shared.GoogleCloudVisionV1p1beta1NormalizedVertex(
                                    x=9023.49,
                                    y=6976.31,
                                ),
                            ],
                            vertices=[
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=60225,
                                    y=969810,
                                ),
                            ],
                        ),
                        filter="est",
                        product_categories=[
                            "laborum",
                            "dolores",
                            "dolorem",
                        ],
                        product_set="corporis",
                    ),
                    text_detection_params=shared.GoogleCloudVisionV1p1beta1TextDetectionParams(
                        advanced_ocr_options=[
                            "nobis",
                        ],
                        enable_text_detection_confidence_score=False,
                    ),
                    web_detection_params=shared.GoogleCloudVisionV1p1beta1WebDetectionParams(
                        include_geo_results=False,
                    ),
                ),
                input_config=shared.GoogleCloudVisionV1p1beta1InputConfig(
                    content="enim",
                    gcs_source=shared.GoogleCloudVisionV1p1beta1GcsSource(
                        uri="https://gummy-expedition.name",
                    ),
                    mime_type="accusantium",
                ),
                pages=[
                    634274,
                    988374,
                ],
            ),
            shared.GoogleCloudVisionV1p1beta1AnnotateFileRequest(
                features=[
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=102044,
                        model="mollitia",
                        type="LANDMARK_DETECTION",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=635059,
                        model="consequuntur",
                        type="OBJECT_LOCALIZATION",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=653108,
                        model="occaecati",
                        type="LOGO_DETECTION",
                    ),
                    shared.GoogleCloudVisionV1p1beta1Feature(
                        max_results=414369,
                        model="quam",
                        type="DOCUMENT_TEXT_DETECTION",
                    ),
                ],
                image_context=shared.GoogleCloudVisionV1p1beta1ImageContext(
                    crop_hints_params=shared.GoogleCloudVisionV1p1beta1CropHintsParams(
                        aspect_ratios=[
                            6235.1,
                        ],
                    ),
                    language_hints=[
                        "quis",
                    ],
                    lat_long_rect=shared.GoogleCloudVisionV1p1beta1LatLongRect(
                        max_lat_lng=shared.LatLng(
                            latitude=1103.75,
                            longitude=6747.52,
                        ),
                        min_lat_lng=shared.LatLng(
                            latitude=6563.3,
                            longitude=3172.02,
                        ),
                    ),
                    product_search_params=shared.GoogleCloudVisionV1p1beta1ProductSearchParams(
                        bounding_poly=shared.GoogleCloudVisionV1p1beta1BoundingPoly(
                            normalized_vertices=[
                                shared.GoogleCloudVisionV1p1beta1NormalizedVertex(
                                    x=7783.46,
                                    y=1965.82,
                                ),
                            ],
                            vertices=[
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=368725,
                                    y=662527,
                                ),
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=820994,
                                    y=13571,
                                ),
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=97101,
                                    y=622846,
                                ),
                                shared.GoogleCloudVisionV1p1beta1Vertex(
                                    x=837945,
                                    y=673660,
                                ),
                            ],
                        ),
                        filter="quasi",
                        product_categories=[
                            "voluptatibus",
                            "vero",
                            "nihil",
                            "praesentium",
                        ],
                        product_set="voluptatibus",
                    ),
                    text_detection_params=shared.GoogleCloudVisionV1p1beta1TextDetectionParams(
                        advanced_ocr_options=[
                            "omnis",
                        ],
                        enable_text_detection_confidence_score=False,
                    ),
                    web_detection_params=shared.GoogleCloudVisionV1p1beta1WebDetectionParams(
                        include_geo_results=False,
                    ),
                ),
                input_config=shared.GoogleCloudVisionV1p1beta1InputConfig(
                    content="voluptate",
                    gcs_source=shared.GoogleCloudVisionV1p1beta1GcsSource(
                        uri="https://agile-arch-rival.info",
                    ),
                    mime_type="ut",
                ),
                pages=[
                    120196,
                    359444,
                    296140,
                    480894,
                ],
            ),
        ],
    ),
    access_token="dicta",
    alt="proto",
    callback="enim",
    fields_="accusamus",
    key="commodi",
    oauth_token="repudiandae",
    pretty_print=False,
    quota_user="quae",
    upload_type="ipsum",
    upload_protocol="quidem",
)
    
res = s.files.vision_files_annotate(req, operations.VisionFilesAnnotateSecurity(
    option1=operations.VisionFilesAnnotateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.google_cloud_vision_v1p1beta1_batch_annotate_files_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
