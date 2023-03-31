<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest(
    dollar_xgafv="2",
    connection_input=shared.ConnectionInput(
        cloud_sql=shared.CloudSQLPropertiesInput(
            credential=shared.CloudSQLCredential(
                password="provident",
                username="Micheal_Sporer",
            ),
            database="corrupti",
            instance_id="illum",
            type="POSTGRES",
        ),
        description="error",
        friendly_name="deserunt",
        name="suscipit",
    ),
    access_token="iure",
    alt="json",
    callback="debitis",
    connection_id="ipsa",
    fields_="delectus",
    key="tempora",
    oauth_token="suscipit",
    parent="molestiae",
    pretty_print=False,
    quota_user="minus",
    upload_type="placeat",
    upload_protocol="voluptatum",
)
    
res = s.projects.bigqueryconnection_projects_locations_connections_create(req, operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity(
    option1=operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.connection is not None:
    # handle response
```
<!-- End SDK Example Usage -->