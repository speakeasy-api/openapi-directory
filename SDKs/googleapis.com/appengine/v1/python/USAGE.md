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
        apps_id="et",
    ),
    query_params=operations.AppengineAppsAuthorizedCertificatesCreateQueryParams(
        dollar_xgafv="2",
        access_token="saepe",
        alt="proto",
        callback="ducimus",
        fields="rerum",
        key="autem",
        oauth_token="sint",
        pretty_print=False,
        quota_user="blanditiis",
        upload_type="impedit",
        upload_protocol="sunt",
    ),
    request=shared.AuthorizedCertificate(
        certificate_raw_data=shared.CertificateRawData(
            private_key="ea",
            public_certificate="asperiores",
        ),
        display_name="ipsam",
        domain_mappings_count=4423674668372831048,
        domain_names=[
            "eaque",
            "esse",
        ],
        expire_time="ut",
        id="sapiente",
        managed_certificate=shared.ManagedCertificate(
            last_renewal_time="natus",
            status="FAILED_RETRYING_CAA_CHECKING",
        ),
        name="tempora",
        visible_domain_mappings=[
            "ad",
            "culpa",
        ],
    ),
)
    
res = s.apps.appengine_apps_authorized_certificates_create(req)

if res.authorized_certificate is not None:
    # handle response
```
<!-- End SDK Example Usage -->