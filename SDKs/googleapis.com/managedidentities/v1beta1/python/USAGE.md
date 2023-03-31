<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest(
    dollar_xgafv="2",
    attach_trust_request_input=shared.AttachTrustRequestInput(
        trust=shared.TrustInput(
            selective_authentication=False,
            target_dns_ip_addresses=[
                "distinctio",
                "quibusdam",
                "unde",
            ],
            target_domain_name="nulla",
            trust_direction="OUTBOUND",
            trust_handshake_secret="illum",
            trust_type="FOREST",
        ),
    ),
    access_token="error",
    alt="media",
    callback="suscipit",
    fields_="iure",
    key="magnam",
    name="debitis",
    oauth_token="ipsa",
    pretty_print=False,
    quota_user="delectus",
    upload_type="tempora",
    upload_protocol="suscipit",
)
    
res = s.projects.managedidentities_projects_locations_global_domains_attach_trust(req, operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->