<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirebasemlProjectsModelsCreateRequest(
    dollar_xgafv="2",
    model_input=shared.ModelInput(
        display_name="provident",
        name="distinctio",
        state=shared.ModelState(
            published=False,
            validation_error=shared.Status(
                code=844266,
                details=[
                    {
                        "corrupti": "illum",
                        "vel": "error",
                        "deserunt": "suscipit",
                        "iure": "magnam",
                    },
                    {
                        "ipsa": "delectus",
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    {
                        "excepturi": "nisi",
                        "recusandae": "temporibus",
                    },
                ],
                message="ab",
            ),
        ),
        tags=[
            "veritatis",
            "deserunt",
        ],
        tflite_model=shared.TfLiteModelInput(
            automl_model="perferendis",
            gcs_tflite_uri="ipsam",
        ),
    ),
    access_token="repellendus",
    alt="proto",
    callback="quo",
    fields_="odit",
    key="at",
    oauth_token="at",
    parent="maiores",
    pretty_print=False,
    quota_user="molestiae",
    upload_type="quod",
    upload_protocol="quod",
)
    
res = s.projects.firebaseml_projects_models_create(req, operations.FirebasemlProjectsModelsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->