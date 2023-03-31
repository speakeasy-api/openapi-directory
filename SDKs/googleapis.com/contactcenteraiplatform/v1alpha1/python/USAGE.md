<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest(
    dollar_xgafv="2",
    contact_center_input=shared.ContactCenterInput(
        admin_user=shared.AdminUser(
            family_name="provident",
            given_name="distinctio",
        ),
        ccaip_managed_users=False,
        customer_domain_prefix="quibusdam",
        display_name="unde",
        instance_config=shared.InstanceConfig(
            instance_size="STANDARD_3XLARGE",
        ),
        labels={
            "illum": "vel",
            "error": "deserunt",
            "suscipit": "iure",
        },
        name="magnam",
        saml_params=shared.SAMLParams(
            certificate="debitis",
            entity_id="ipsa",
            sso_uri="delectus",
            user_email="tempora",
        ),
        uris=shared.URIs(
            chat_bot_uri="suscipit",
            media_uri="molestiae",
            root_uri="minus",
            virtual_agent_streaming_service_uri="placeat",
        ),
        user_email="voluptatum",
    ),
    access_token="iusto",
    alt="media",
    callback="nisi",
    contact_center_id="recusandae",
    fields_="temporibus",
    key="ab",
    oauth_token="quis",
    parent="veritatis",
    pretty_print=False,
    quota_user="deserunt",
    request_id="perferendis",
    upload_type="ipsam",
    upload_protocol="repellendus",
)
    
res = s.projects.contactcenteraiplatform_projects_locations_contact_centers_create(req, operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->