<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest(
    security=operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity(
        option1=operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.BigqueryconnectionProjectsLocationsConnectionsCreatePathParams(
        parent="ipsa",
    ),
    query_params=operations.BigqueryconnectionProjectsLocationsConnectionsCreateQueryParams(
        dollar_xgafv="1",
        access_token="rerum",
        alt="json",
        callback="fuga",
        connection_id="ad",
        fields="rem",
        key="neque",
        oauth_token="voluptas",
        pretty_print=False,
        quota_user="distinctio",
        upload_type="culpa",
        upload_protocol="sunt",
    ),
    request=shared.ConnectionInput(
        cloud_sql=shared.CloudSQLPropertiesInput(
            credential=shared.CloudSQLCredential(
                password="incidunt",
                username="quo",
            ),
            database="sed",
            instance_id="est",
            type="MYSQL",
        ),
        description="et",
        friendly_name="eveniet",
        name="et",
    ),
)
    
res = s.projects.bigqueryconnection_projects_locations_connections_create(req)

if res.connection is not None:
    # handle response
```
<!-- End SDK Example Usage -->