<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FirebasemlProjectsModelsCreateRequest(
    security=operations.FirebasemlProjectsModelsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.FirebasemlProjectsModelsCreatePathParams(
        parent="laudantium",
    ),
    query_params=operations.FirebasemlProjectsModelsCreateQueryParams(
        dollar_xgafv="2",
        access_token="a",
        alt="media",
        callback="dolor",
        fields="et",
        key="amet",
        oauth_token="exercitationem",
        pretty_print=False,
        quota_user="aut",
        upload_type="corrupti",
        upload_protocol="consequuntur",
    ),
    request=shared.ModelInput(
        display_name="repellat",
        name="consequatur",
        state=shared.ModelState(
            published=True,
            validation_error=shared.Status(
                code=6350045115577120987,
                details=[
                    {
                        "accusantium": "quibusdam",
                        "et": "recusandae",
                        "voluptatibus": "consequatur",
                    },
                    {
                        "consequatur": "sit",
                        "amet": "quia",
                        "sed": "ut",
                    },
                ],
                message="dolorem",
            ),
        ),
        tags=[
            "tempore",
            "et",
        ],
        tflite_model=shared.TfLiteModelInput(
            automl_model="aut",
            gcs_tflite_uri="iure",
        ),
    ),
)
    
res = s.projects.firebaseml_projects_models_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->