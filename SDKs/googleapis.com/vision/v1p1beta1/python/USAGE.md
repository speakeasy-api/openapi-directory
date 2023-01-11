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