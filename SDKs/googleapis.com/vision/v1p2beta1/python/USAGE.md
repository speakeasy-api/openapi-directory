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
        dollar_xgafv="2",
        access_token="perspiciatis",
        alt="json",
        callback="quae",
        fields="quo",
        key="nobis",
        oauth_token="vitae",
        pretty_print=True,
        quota_user="est",
        upload_type="explicabo",
        upload_protocol="in",
    ),
    request=shared.GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest(
        parent="dicta",
        requests=[
            shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest(
                features=[
                    shared.GoogleCloudVisionV1p2beta1Feature(
                        max_results=5028166937415380028,
                        model="voluptate",
                        type="OBJECT_LOCALIZATION",
                    ),
                ],
                image_context=shared.GoogleCloudVisionV1p2beta1ImageContext(
                    crop_hints_params=shared.GoogleCloudVisionV1p2beta1CropHintsParams(
                        aspect_ratios=[
                            95.099998,
                            47.200001,
                        ],
                    ),
                    language_hints=[
                        "ut",
                        "molestiae",
                    ],
                    lat_long_rect=shared.GoogleCloudVisionV1p2beta1LatLongRect(
                        max_lat_lng=shared.LatLng(
                            latitude=56.200001,
                            longitude=5.100000,
                        ),
                        min_lat_lng=shared.LatLng(
                            latitude=64.099998,
                            longitude=34.099998,
                        ),
                    ),
                    product_search_params=shared.GoogleCloudVisionV1p2beta1ProductSearchParams(
                        bounding_poly=shared.GoogleCloudVisionV1p2beta1BoundingPoly(
                            normalized_vertices=[
                                shared.GoogleCloudVisionV1p2beta1NormalizedVertex(
                                    x=69.099998,
                                    y=13.100000,
                                ),
                                shared.GoogleCloudVisionV1p2beta1NormalizedVertex(
                                    x=67.099998,
                                    y=29.200001,
                                ),
                                shared.GoogleCloudVisionV1p2beta1NormalizedVertex(
                                    x=41.099998,
                                    y=82.199997,
                                ),
                            ],
                            vertices=[
                                shared.GoogleCloudVisionV1p2beta1Vertex(
                                    x=3181428753883207237,
                                    y=3059598609751937721,
                                ),
                                shared.GoogleCloudVisionV1p2beta1Vertex(
                                    x=6736358041285325865,
                                    y=3681302652654899017,
                                ),
                            ],
                        ),
                        filter="sed",
                        product_categories=[
                            "illo",
                            "aliquam",
                        ],
                        product_set="culpa",
                    ),
                    text_detection_params=shared.GoogleCloudVisionV1p2beta1TextDetectionParams(
                        advanced_ocr_options=[
                            "fuga",
                            "suscipit",
                            "nulla",
                        ],
                        enable_text_detection_confidence_score=True,
                    ),
                    web_detection_params=shared.GoogleCloudVisionV1p2beta1WebDetectionParams(
                        include_geo_results=True,
                    ),
                ),
                input_config=shared.GoogleCloudVisionV1p2beta1InputConfig(
                    content="cumque",
                    gcs_source=shared.GoogleCloudVisionV1p2beta1GcsSource(
                        uri="incidunt",
                    ),
                    mime_type="nostrum",
                ),
                pages=[
                    4139992464823148597,
                ],
            ),
        ],
    ),
)
    
res = s.files.vision_files_annotate(req)

if res.google_cloud_vision_v1p2beta1_batch_annotate_files_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->