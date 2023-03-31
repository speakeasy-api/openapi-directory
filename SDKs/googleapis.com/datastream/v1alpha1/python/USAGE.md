<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest(
    dollar_xgafv="2",
    connection_profile_input=shared.ConnectionProfileInput(
        display_name="provident",
        forward_ssh_connectivity=shared.ForwardSSHTunnelConnectivity(
            hostname="salty-stag.name",
            password="nulla",
            port=544883,
            private_key="illum",
            username="Henry.Mueller",
        ),
        gcs_profile=shared.GcsProfile(
            bucket_name="iure",
            root_path="magnam",
        ),
        labels={
            "ipsa": "delectus",
            "tempora": "suscipit",
            "molestiae": "minus",
            "placeat": "voluptatum",
        },
        mysql_profile=shared.MysqlProfileInput(
            hostname="lawful-missionary.info",
            password="recusandae",
            port=836079,
            ssl_config=shared.MysqlSslConfigInput(
                ca_certificate="ab",
                client_certificate="quis",
                client_key="veritatis",
            ),
            username="Lydia_Aufderhar",
        ),
        no_connectivity={
            "quo": "odit",
            "at": "at",
            "maiores": "molestiae",
            "quod": "quod",
        },
        oracle_profile=shared.OracleProfile(
            connection_attributes={
                "totam": "porro",
                "dolorum": "dicta",
            },
            database_service="nam",
            hostname="posh-muffin.com",
            password="deleniti",
            port=944669,
            username="Nina41",
        ),
        private_connectivity=shared.PrivateConnectivity(
            private_connection_name="molestiae",
        ),
        static_service_ip_connectivity={
            "qui": "impedit",
            "cum": "esse",
        },
    ),
    access_token="ipsum",
    alt="media",
    callback="aspernatur",
    connection_profile_id="perferendis",
    fields_="ad",
    key="natus",
    oauth_token="sed",
    parent="iste",
    pretty_print=False,
    quota_user="dolor",
    request_id="natus",
    upload_type="laboriosam",
    upload_protocol="hic",
)
    
res = s.projects.datastream_projects_locations_connection_profiles_create(req, operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->