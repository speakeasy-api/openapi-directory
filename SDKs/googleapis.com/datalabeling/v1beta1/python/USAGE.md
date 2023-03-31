<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest(
    dollar_xgafv="2",
    google_cloud_datalabeling_v1beta1_create_annotation_spec_set_request=shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest(
        annotation_spec_set=shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet(
            annotation_specs=[
                shared.GoogleCloudDatalabelingV1beta1AnnotationSpec(
                    description="distinctio",
                    display_name="quibusdam",
                    index=602763,
                ),
                shared.GoogleCloudDatalabelingV1beta1AnnotationSpec(
                    description="nulla",
                    display_name="corrupti",
                    index=847252,
                ),
                shared.GoogleCloudDatalabelingV1beta1AnnotationSpec(
                    description="vel",
                    display_name="error",
                    index=645894,
                ),
            ],
            blocking_resources=[
                "iure",
                "magnam",
            ],
            description="debitis",
            display_name="ipsa",
            name="delectus",
        ),
    ),
    access_token="tempora",
    alt="media",
    callback="molestiae",
    fields_="minus",
    key="placeat",
    oauth_token="voluptatum",
    parent="iusto",
    pretty_print=False,
    quota_user="excepturi",
    upload_type="nisi",
    upload_protocol="recusandae",
)
    
res = s.projects.datalabeling_projects_annotation_spec_sets_create(req, operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_datalabeling_v1beta1_annotation_spec_set is not None:
    # handle response
```
<!-- End SDK Example Usage -->