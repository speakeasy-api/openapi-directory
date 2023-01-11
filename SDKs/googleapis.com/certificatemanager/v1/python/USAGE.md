<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest(
    security=operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams(
        parent="voluptate",
    ),
    query_params=operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams(
        dollar_xgafv="2",
        access_token="aut",
        alt="media",
        callback="vel",
        certificate_issuance_config_id="accusamus",
        fields="qui",
        key="sit",
        oauth_token="exercitationem",
        pretty_print=False,
        quota_user="animi",
        upload_type="autem",
        upload_protocol="voluptatibus",
    ),
    request=shared.CertificateIssuanceConfigInput(
        certificate_authority_config=shared.CertificateAuthorityConfig(
            certificate_authority_service_config=shared.CertificateAuthorityServiceConfig(
                ca_pool="ipsa",
            ),
        ),
        description="numquam",
        key_algorithm="KEY_ALGORITHM_UNSPECIFIED",
        labels={
            "quos": "doloremque",
        },
        lifetime="repellendus",
        name="id",
        rotation_window_percentage=7869921020381450909,
    ),
)
    
res = s.projects.certificatemanager_projects_locations_certificate_issuance_configs_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->