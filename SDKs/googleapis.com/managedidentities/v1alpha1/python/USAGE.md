<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest(
    dollar_xgafv="2",
    attach_trust_request=shared.AttachTrustRequest(
        trust=shared.Trust(
            create_time="provident",
            last_known_trust_connected_heartbeat_time="distinctio",
            selective_authentication=False,
            state="DISCONNECTED",
            state_description="unde",
            target_dns_ip_addresses=[
                "corrupti",
                "illum",
                "vel",
                "error",
            ],
            target_domain_name="deserunt",
            trust_direction="INBOUND",
            trust_handshake_secret="iure",
            trust_type="TRUST_TYPE_UNSPECIFIED",
            update_time="debitis",
        ),
    ),
    access_token="ipsa",
    alt="proto",
    callback="tempora",
    fields_="suscipit",
    key="molestiae",
    name="minus",
    oauth_token="placeat",
    pretty_print=False,
    quota_user="voluptatum",
    upload_type="iusto",
    upload_protocol="excepturi",
)
    
res = s.projects.managedidentities_projects_locations_global_domains_attach_trust(req, operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->