<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest(
    security=operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams(
        name="unde",
    ),
    query_params=operations.PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams(
        dollar_xgafv="2",
        access_token="cumque",
        alt="media",
        callback="voluptatum",
        fields="labore",
        key="rerum",
        oauth_token="qui",
        pretty_print=False,
        quota_user="quo",
        upload_type="et",
        upload_protocol="sit",
    ),
    request=shared.ActivateCertificateAuthorityRequest(
        pem_ca_certificate="doloribus",
        request_id="et",
        subordinate_config=shared.SubordinateConfig(
            certificate_authority="eveniet",
            pem_issuer_chain=shared.SubordinateConfigChain(
                pem_certificates=[
                    "praesentium",
                    "sequi",
                    "illum",
                ],
            ),
        ),
    ),
)
    
res = s.projects.privateca_projects_locations_certificate_authorities_activate(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->