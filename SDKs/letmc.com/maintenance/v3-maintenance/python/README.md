# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/letmc.com/maintenance/v3-maintenance/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MaintenanceControllerCreateMaintenanceJobFormRequest(
    maintenance_issue_model=shared.MaintenanceIssueModel(
        documents=[
            shared.MaintenanceDocumentModel(
                mime_type="provident",
                url="distinctio",
            ),
            shared.MaintenanceDocumentModel(
                mime_type="quibusdam",
                url="unde",
            ),
            shared.MaintenanceDocumentModel(
                mime_type="nulla",
                url="corrupti",
            ),
        ],
        external_id="illum",
        issue_fault="vel",
        issue_notes="error",
        issue_priority="Medium",
        issue_title="suscipit",
        property_address1="iure",
        property_address2="magnam",
        property_address3="debitis",
        property_address4="ipsa",
        property_country="delectus",
        property_postcode="tempora",
        reported_at="2022-07-10T15:39:12.517Z",
        tenant_e_mail_address="minus",
        tenant_forename="placeat",
        tenant_phone_primary="voluptatum",
        tenant_phone_secondary="iusto",
        tenant_presence_requested=False,
        tenant_surname="excepturi",
        tenant_title="nisi",
    ),
    branch_id="recusandae",
    short_name="temporibus",
)
    
res = s.maintenance_controller.maintenance_controller_create_maintenance_job_form(req)

if res.object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### maintenance_controller

* `maintenance_controller_create_maintenance_job_form` - Create a maintenance job for a specific branch
* `maintenance_controller_create_maintenance_job_json` - Create a maintenance job for a specific branch
* `maintenance_controller_create_maintenance_job_raw` - Create a maintenance job for a specific branch
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
