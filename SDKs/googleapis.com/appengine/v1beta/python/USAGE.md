<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AppengineAppsAuthorizedCertificatesCreateRequest(
    security=operations.AppengineAppsAuthorizedCertificatesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AppengineAppsAuthorizedCertificatesCreatePathParams(
        apps_id="ut",
    ),
    query_params=operations.AppengineAppsAuthorizedCertificatesCreateQueryParams(
        dollar_xgafv="1",
        access_token="eos",
        alt="json",
        callback="quaerat",
        fields="quod",
        key="nihil",
        oauth_token="sapiente",
        pretty_print=False,
        quota_user="alias",
        upload_type="rerum",
        upload_protocol="qui",
    ),
    request=shared.AuthorizedCertificate(
        certificate_raw_data=shared.CertificateRawData(
            private_key="quis",
            public_certificate="sed",
        ),
        display_name="magni",
        domain_mappings_count=8132118161408055480,
        domain_names=[
            "inventore",
            "vel",
        ],
        expire_time="alias",
        id="quidem",
        managed_certificate=shared.ManagedCertificate(
            last_renewal_time="nostrum",
            status="PENDING",
        ),
        name="molestiae",
        visible_domain_mappings=[
            "qui",
            "pariatur",
        ],
    ),
)
    
res = s.apps.appengine_apps_authorized_certificates_create(req)

if res.authorized_certificate is not None:
    # handle response
```
<!-- End SDK Example Usage -->