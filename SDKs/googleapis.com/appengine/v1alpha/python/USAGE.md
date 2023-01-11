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
        apps_id="omnis",
    ),
    query_params=operations.AppengineAppsAuthorizedCertificatesCreateQueryParams(
        dollar_xgafv="2",
        access_token="eligendi",
        alt="media",
        callback="eveniet",
        fields="est",
        key="omnis",
        oauth_token="blanditiis",
        pretty_print=True,
        quota_user="ut",
        upload_type="odit",
        upload_protocol="non",
    ),
    request=shared.AuthorizedCertificate(
        certificate_raw_data=shared.CertificateRawData(
            private_key="porro",
            public_certificate="sunt",
        ),
        display_name="ea",
        domain_mappings_count=1801121852245990253,
        domain_names=[
            "aperiam",
            "aut",
            "ex",
        ],
        expire_time="modi",
        id="qui",
        managed_certificate=shared.ManagedCertificate(
            last_renewal_time="quia",
            status="OK",
        ),
        name="nisi",
        visible_domain_mappings=[
            "tenetur",
            "praesentium",
            "totam",
        ],
    ),
)
    
res = s.apps.appengine_apps_authorized_certificates_create(req)

if res.authorized_certificate is not None:
    # handle response
```
<!-- End SDK Example Usage -->