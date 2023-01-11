<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest(
    security=operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DatalabelingProjectsAnnotationSpecSetsCreatePathParams(
        parent="doloremque",
    ),
    query_params=operations.DatalabelingProjectsAnnotationSpecSetsCreateQueryParams(
        dollar_xgafv="1",
        access_token="laborum",
        alt="json",
        callback="officia",
        fields="illo",
        key="voluptatum",
        oauth_token="aut",
        pretty_print=False,
        quota_user="saepe",
        upload_type="aut",
        upload_protocol="quisquam",
    ),
    request=shared.GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest(
        annotation_spec_set=shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet(
            annotation_specs=[
                shared.GoogleCloudDatalabelingV1beta1AnnotationSpec(
                    description="dolorum",
                    display_name="soluta",
                    index=203986857844851483,
                ),
                shared.GoogleCloudDatalabelingV1beta1AnnotationSpec(
                    description="perspiciatis",
                    display_name="ea",
                    index=616583927086284384,
                ),
            ],
            blocking_resources=[
                "consequuntur",
                "vero",
            ],
            description="est",
            display_name="praesentium",
            name="voluptatibus",
        ),
    ),
)
    
res = s.projects.datalabeling_projects_annotation_spec_sets_create(req)

if res.google_cloud_datalabeling_v1beta1_annotation_spec_set is not None:
    # handle response
```
<!-- End SDK Example Usage -->