<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AppengineAppsAuthorizedCertificatesCreateRequest(
    dollar_xgafv="2",
    authorized_certificate=shared.AuthorizedCertificate(
        certificate_raw_data=shared.CertificateRawData(
            private_key="provident",
            public_certificate="distinctio",
        ),
        display_name="quibusdam",
        domain_mappings_count=602763,
        domain_names=[
            "corrupti",
            "illum",
            "vel",
            "error",
        ],
        expire_time="deserunt",
        id="suscipit",
        managed_certificate=shared.ManagedCertificate(
            last_renewal_time="iure",
            status="PENDING",
        ),
        name="debitis",
        visible_domain_mappings=[
            "delectus",
        ],
    ),
    access_token="tempora",
    alt="media",
    apps_id="molestiae",
    callback="minus",
    fields_="placeat",
    key="voluptatum",
    oauth_token="iusto",
    pretty_print=False,
    quota_user="excepturi",
    upload_type="nisi",
    upload_protocol="recusandae",
)
    
res = s.apps.appengine_apps_authorized_certificates_create(req, operations.AppengineAppsAuthorizedCertificatesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.authorized_certificate is not None:
    # handle response
```
<!-- End SDK Example Usage -->