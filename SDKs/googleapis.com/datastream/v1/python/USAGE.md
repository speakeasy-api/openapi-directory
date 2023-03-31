<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest(
    dollar_xgafv="2",
    connection_profile_input=shared.ConnectionProfileInput(
        bigquery_profile={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        display_name="vel",
        forward_ssh_connectivity=shared.ForwardSSHTunnelConnectivity(
            hostname="physical-pegboard.info",
            password="iure",
            port=297534,
            private_key="debitis",
            username="Anahi38",
        ),
        gcs_profile=shared.GcsProfile(
            bucket="molestiae",
            root_path="minus",
        ),
        labels={
            "voluptatum": "iusto",
            "excepturi": "nisi",
            "recusandae": "temporibus",
            "ab": "quis",
        },
        mysql_profile=shared.MysqlProfileInput(
            hostname="bountiful-pension.com",
            password="ipsam",
            port=832620,
            ssl_config=shared.MysqlSslConfigInput(
                ca_certificate="sapiente",
                client_certificate="quo",
                client_key="odit",
            ),
            username="Sarah.Strosin79",
        ),
        oracle_profile=shared.OracleProfile(
            connection_attributes={
                "esse": "totam",
                "porro": "dolorum",
                "dicta": "nam",
                "officia": "occaecati",
            },
            database_service="fugit",
            hostname="miserly-usage.net",
            password="totam",
            port=105907,
            username="Haskell18",
        ),
        postgresql_profile=shared.PostgresqlProfile(
            database="impedit",
            hostname="several-increase.biz",
            password="excepturi",
            port=135218,
            username="Aiden.Hane",
        ),
        private_connectivity=shared.PrivateConnectivity(
            private_connection="iste",
        ),
        static_service_ip_connectivity={
            "natus": "laboriosam",
        },
    ),
    access_token="hic",
    alt="proto",
    callback="fuga",
    connection_profile_id="in",
    fields_="corporis",
    force=False,
    key="iste",
    oauth_token="iure",
    parent="saepe",
    pretty_print=False,
    quota_user="quidem",
    request_id="architecto",
    upload_type="ipsa",
    upload_protocol="reiciendis",
    validate_only=False,
)
    
res = s.projects.datastream_projects_locations_connection_profiles_create(req, operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->