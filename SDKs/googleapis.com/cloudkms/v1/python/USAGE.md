<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest(
    dollar_xgafv="2",
    ekm_connection_input=shared.EkmConnectionInput(
        crypto_space_path="provident",
        etag="distinctio",
        key_management_mode="CLOUD_KMS",
        service_resolvers=[
            shared.ServiceResolverInput(
                endpoint_filter="nulla",
                hostname="moral-star.info",
                server_certificates=[
                    shared.CertificateInput(
                        raw_der="deserunt",
                    ),
                    shared.CertificateInput(
                        raw_der="suscipit",
                    ),
                    shared.CertificateInput(
                        raw_der="iure",
                    ),
                ],
                service_directory_service="magnam",
            ),
            shared.ServiceResolverInput(
                endpoint_filter="debitis",
                hostname="awesome-voter.biz",
                server_certificates=[
                    shared.CertificateInput(
                        raw_der="molestiae",
                    ),
                    shared.CertificateInput(
                        raw_der="minus",
                    ),
                ],
                service_directory_service="placeat",
            ),
            shared.ServiceResolverInput(
                endpoint_filter="voluptatum",
                hostname="lawful-missionary.info",
                server_certificates=[
                    shared.CertificateInput(
                        raw_der="temporibus",
                    ),
                    shared.CertificateInput(
                        raw_der="ab",
                    ),
                    shared.CertificateInput(
                        raw_der="quis",
                    ),
                    shared.CertificateInput(
                        raw_der="veritatis",
                    ),
                ],
                service_directory_service="deserunt",
            ),
        ],
    ),
    access_token="perferendis",
    alt="media",
    callback="repellendus",
    ekm_connection_id="sapiente",
    fields_="quo",
    key="odit",
    oauth_token="at",
    parent="at",
    pretty_print=False,
    quota_user="maiores",
    upload_type="molestiae",
    upload_protocol="quod",
)
    
res = s.projects.cloudkms_projects_locations_ekm_connections_create(req, operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity(
    option1=operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.ekm_connection is not None:
    # handle response
```
<!-- End SDK Example Usage -->