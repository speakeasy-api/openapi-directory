<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest(
    dollar_xgafv="2",
    activate_certificate_authority_request=shared.ActivateCertificateAuthorityRequest(
        pem_ca_certificate="provident",
        request_id="distinctio",
        subordinate_config=shared.SubordinateConfig(
            certificate_authority="quibusdam",
            pem_issuer_chain=shared.SubordinateConfigChain(
                pem_certificates=[
                    "nulla",
                    "corrupti",
                    "illum",
                ],
            ),
        ),
    ),
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    name="magnam",
    oauth_token="debitis",
    pretty_print=False,
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.projects.privateca_projects_locations_ca_pools_certificate_authorities_activate(req, operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->