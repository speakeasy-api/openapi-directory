<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest(
    security=operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DatamigrationProjectsLocationsConnectionProfilesCreatePathParams(
        parent="soluta",
    ),
    query_params=operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams(
        dollar_xgafv="1",
        access_token="iusto",
        alt="media",
        callback="eum",
        connection_profile_id="molestias",
        fields="nihil",
        key="ut",
        oauth_token="qui",
        pretty_print=False,
        quota_user="id",
        request_id="odit",
        upload_type="maiores",
        upload_protocol="vel",
    ),
    request=shared.ConnectionProfileInput(
        alloydb=shared.AlloyDbConnectionProfileInput(
            cluster_id="molestias",
            settings=shared.AlloyDbSettingsInput(
                initial_user=shared.UserPasswordInput(
                    password="aspernatur",
                    user="et",
                ),
                labels={
                    "rerum": "cupiditate",
                    "magnam": "cupiditate",
                    "reiciendis": "ut",
                },
                primary_instance_settings=shared.PrimaryInstanceSettingsInput(
                    database_flags={
                        "repellat": "quibusdam",
                        "et": "cum",
                    },
                    id="aut",
                    labels={
                        "voluptatem": "incidunt",
                        "delectus": "aut",
                    },
                    machine_config=shared.MachineConfig(
                        cpu_count=1865472394289304243,
                    ),
                ),
                vpc_network="unde",
            ),
        ),
        cloudsql=shared.CloudSQLConnectionProfileInput(
            settings=shared.CloudSQLSettingsInput(
                activation_policy="SQL_ACTIVATION_POLICY_UNSPECIFIED",
                auto_storage_increase=False,
                availability_type="ZONAL",
                cmek_key_name="ipsam",
                collation="tenetur",
                data_disk_size_gb="sit",
                data_disk_type="SQL_DATA_DISK_TYPE_UNSPECIFIED",
                database_flags={
                    "sapiente": "aut",
                    "perspiciatis": "qui",
                    "inventore": "incidunt",
                },
                database_version="MYSQL_5_7",
                ip_config=shared.SQLIPConfig(
                    authorized_networks=[
                        shared.SQLACLEntry(
                            expire_time="ut",
                            label="blanditiis",
                            ttl="saepe",
                            value="nesciunt",
                        ),
                        shared.SQLACLEntry(
                            expire_time="optio",
                            label="labore",
                            ttl="illum",
                            value="omnis",
                        ),
                    ],
                    enable_ipv4=True,
                    private_network="sit",
                    require_ssl=True,
                ),
                root_password="vel",
                secondary_zone="consequatur",
                source_id="eius",
                storage_auto_resize_limit="eaque",
                tier="quisquam",
                user_labels={
                    "sed": "labore",
                    "nemo": "magnam",
                    "quam": "libero",
                },
                zone="voluptate",
            ),
        ),
        display_name="sint",
        error=shared.Status(
            code=8998435203028350084,
            details=[
                {
                    "numquam": "a",
                    "cumque": "et",
                },
                {
                    "adipisci": "non",
                },
                {
                    "est": "praesentium",
                    "magnam": "unde",
                    "nisi": "odio",
                },
            ],
            message="accusantium",
        ),
        labels={
            "voluptas": "voluptatem",
        },
        mysql=shared.MySQLConnectionProfileInput(
            cloud_sql_id="maxime",
            host="maiores",
            password="eum",
            port=8700369731861466797,
            ssl=shared.SslConfigInput(
                ca_certificate="quis",
                client_certificate="expedita",
                client_key="laborum",
            ),
            username="ipsam",
        ),
        name="voluptate",
        postgresql=shared.PostgreSQLConnectionProfileInput(
            cloud_sql_id="neque",
            host="placeat",
            password="et",
            port=4811490384291894312,
            ssl=shared.SslConfigInput(
                ca_certificate="qui",
                client_certificate="nihil",
                client_key="accusamus",
            ),
            username="necessitatibus",
        ),
        provider="RDS",
        state="STATE_UNSPECIFIED",
    ),
)
    
res = s.projects.datamigration_projects_locations_connection_profiles_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->