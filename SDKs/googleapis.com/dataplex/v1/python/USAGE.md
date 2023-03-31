<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DataplexProjectsLocationsDataAttributeBindingsCreateRequest(
    dollar_xgafv="2",
    google_cloud_dataplex_v1_data_attribute_binding_input=shared.GoogleCloudDataplexV1DataAttributeBindingInput(
        attributes=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        description="nulla",
        display_name="corrupti",
        etag="illum",
        labels={
            "error": "deserunt",
            "suscipit": "iure",
        },
        paths=[
            shared.GoogleCloudDataplexV1DataAttributeBindingPath(
                attributes=[
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                ],
                name="molestiae",
            ),
            shared.GoogleCloudDataplexV1DataAttributeBindingPath(
                attributes=[
                    "placeat",
                    "voluptatum",
                    "iusto",
                    "excepturi",
                ],
                name="nisi",
            ),
        ],
        resource="recusandae",
    ),
    access_token="temporibus",
    alt="json",
    callback="quis",
    data_attribute_binding_id="veritatis",
    fields_="deserunt",
    key="perferendis",
    oauth_token="ipsam",
    parent="repellendus",
    pretty_print=False,
    quota_user="sapiente",
    upload_type="quo",
    upload_protocol="odit",
    validate_only=False,
)
    
res = s.projects.dataplex_projects_locations_data_attribute_bindings_create(req, operations.DataplexProjectsLocationsDataAttributeBindingsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->