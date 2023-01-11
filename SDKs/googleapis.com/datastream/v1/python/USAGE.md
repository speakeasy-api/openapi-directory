<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest(
    security=operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DatastreamProjectsLocationsConnectionProfilesCreatePathParams(
        parent="similique",
    ),
    query_params=operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams(
        dollar_xgafv="2",
        access_token="cumque",
        alt="json",
        callback="omnis",
        connection_profile_id="ut",
        fields="dicta",
        force=False,
        key="possimus",
        oauth_token="eos",
        pretty_print=False,
        quota_user="natus",
        request_id="consequatur",
        upload_type="aspernatur",
        upload_protocol="dolores",
        validate_only=True,
    ),
    request=shared.ConnectionProfileInput(
        bigquery_profile={
            "omnis": "et",
            "est": "necessitatibus",
        },
        display_name="velit",
        forward_ssh_connectivity=shared.ForwardSSHTunnelConnectivity(
            hostname="repudiandae",
            password="delectus",
            port=5778884639584587050,
            private_key="et",
            username="tenetur",
        ),
        gcs_profile=shared.GcsProfile(
            bucket="labore",
            root_path="est",
        ),
        labels={
            "provident": "perspiciatis",
            "mollitia": "vitae",
        },
        mysql_profile=shared.MysqlProfileInput(
            hostname="ad",
            password="magni",
            port=3484971647339665490,
            ssl_config=shared.MysqlSslConfigInput(
                ca_certificate="autem",
                client_certificate="et",
                client_key="aut",
            ),
            username="explicabo",
        ),
        oracle_profile=shared.OracleProfile(
            connection_attributes={
                "quia": "veniam",
            },
            database_service="repellendus",
            hostname="ducimus",
            password="soluta",
            port=1616641109373168718,
            username="cumque",
        ),
        postgresql_profile=shared.PostgresqlProfile(
            database="aut",
            hostname="explicabo",
            password="maxime",
            port=4805550021675459519,
            username="ut",
        ),
        private_connectivity=shared.PrivateConnectivity(
            private_connection="voluptas",
        ),
        static_service_ip_connectivity={
            "modi": "et",
        },
    ),
)
    
res = s.projects.datastream_projects_locations_connection_profiles_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->