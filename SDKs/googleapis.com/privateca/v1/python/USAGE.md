<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest(
    security=operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams(
        name="occaecati",
    ),
    query_params=operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams(
        dollar_xgafv="2",
        access_token="enim",
        alt="media",
        callback="et",
        fields="voluptatum",
        key="vitae",
        oauth_token="asperiores",
        pretty_print=True,
        quota_user="corrupti",
        upload_type="quibusdam",
        upload_protocol="consequatur",
    ),
    request=shared.ActivateCertificateAuthorityRequest(
        pem_ca_certificate="totam",
        request_id="aperiam",
        subordinate_config=shared.SubordinateConfig(
            certificate_authority="ea",
            pem_issuer_chain=shared.SubordinateConfigChain(
                pem_certificates=[
                    "vero",
                ],
            ),
        ),
    ),
)
    
res = s.projects.privateca_projects_locations_ca_pools_certificate_authorities_activate(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->