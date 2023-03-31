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