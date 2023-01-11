<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest(
    security=operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity(
        option1=operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.CloudkmsProjectsLocationsEkmConnectionsCreatePathParams(
        parent="autem",
    ),
    query_params=operations.CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams(
        dollar_xgafv="1",
        access_token="aut",
        alt="proto",
        callback="excepturi",
        ekm_connection_id="temporibus",
        fields="eum",
        key="qui",
        oauth_token="quidem",
        pretty_print=False,
        quota_user="sint",
        upload_type="aliquam",
        upload_protocol="fugit",
    ),
    request=shared.EkmConnectionInput(
        etag="consequatur",
        service_resolvers=[
            shared.ServiceResolverInput(
                endpoint_filter="est",
                hostname="dolores",
                server_certificates=[
                    shared.CertificateInput(
                        raw_der="sit",
                    ),
                ],
                service_directory_service="corrupti",
            ),
        ],
    ),
)
    
res = s.projects.cloudkms_projects_locations_ekm_connections_create(req)

if res.ekm_connection is not None:
    # handle response
```
<!-- End SDK Example Usage -->