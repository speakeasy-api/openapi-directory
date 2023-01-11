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
        parent="qui",
    ),
    query_params=operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams(
        dollar_xgafv="2",
        access_token="rerum",
        alt="media",
        callback="dolor",
        connection_profile_id="exercitationem",
        fields="inventore",
        key="voluptate",
        oauth_token="excepturi",
        pretty_print=True,
        quota_user="aut",
        request_id="et",
        upload_type="ipsam",
        upload_protocol="odit",
    ),
    request=shared.ConnectionProfileInput(
        display_name="repudiandae",
        forward_ssh_connectivity=shared.ForwardSSHTunnelConnectivity(
            hostname="repellat",
            password="voluptatum",
            port=3174294702629569041,
            private_key="provident",
            username="laboriosam",
        ),
        gcs_profile=shared.GcsProfile(
            bucket_name="placeat",
            root_path="dignissimos",
        ),
        labels={
            "reiciendis": "omnis",
        },
        mysql_profile=shared.MysqlProfileInput(
            hostname="quis",
            password="quis",
            port=2818121241612799699,
            ssl_config=shared.MysqlSslConfigInput(
                ca_certificate="in",
                client_certificate="at",
                client_key="at",
            ),
            username="molestiae",
        ),
        no_connectivity={
            "ipsam": "eos",
        },
        oracle_profile=shared.OracleProfile(
            connection_attributes={
                "quia": "et",
                "maxime": "similique",
                "esse": "quo",
            },
            database_service="et",
            hostname="a",
            password="commodi",
            port=6029522833312950284,
            username="qui",
        ),
        private_connectivity=shared.PrivateConnectivity(
            private_connection_name="et",
        ),
        static_service_ip_connectivity={
            "beatae": "doloremque",
        },
    ),
)
    
res = s.projects.datastream_projects_locations_connection_profiles_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->