<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest(
    dollar_xgafv="2",
    certificate_issuance_config_input=shared.CertificateIssuanceConfigInput(
        certificate_authority_config=shared.CertificateAuthorityConfig(
            certificate_authority_service_config=shared.CertificateAuthorityServiceConfig(
                ca_pool="provident",
            ),
        ),
        description="distinctio",
        key_algorithm="ECDSA_P256",
        labels={
            "nulla": "corrupti",
            "illum": "vel",
            "error": "deserunt",
        },
        lifetime="suscipit",
        name="iure",
        rotation_window_percentage=297534,
    ),
    access_token="debitis",
    alt="json",
    callback="delectus",
    certificate_issuance_config_id="tempora",
    fields_="suscipit",
    key="molestiae",
    oauth_token="minus",
    parent="placeat",
    pretty_print=False,
    quota_user="voluptatum",
    upload_type="iusto",
    upload_protocol="excepturi",
)
    
res = s.projects.certificatemanager_projects_locations_certificate_issuance_configs_create(req, operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->