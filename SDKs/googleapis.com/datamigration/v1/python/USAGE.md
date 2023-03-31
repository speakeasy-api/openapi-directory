<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest(
    dollar_xgafv="2",
    connection_profile_input=shared.ConnectionProfileInput(
        alloydb=shared.AlloyDbConnectionProfileInput(
            cluster_id="provident",
            settings=shared.AlloyDbSettingsInput(
                initial_user=shared.UserPasswordInput(
                    password="distinctio",
                    user="quibusdam",
                ),
                labels={
                    "nulla": "corrupti",
                    "illum": "vel",
                    "error": "deserunt",
                },
                primary_instance_settings=shared.PrimaryInstanceSettingsInput(
                    database_flags={
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    id="delectus",
                    labels={
                        "suscipit": "molestiae",
                        "minus": "placeat",
                    },
                    machine_config=shared.MachineConfig(
                        cpu_count=528895,
                    ),
                ),
                vpc_network="iusto",
            ),
        ),
        cloudsql=shared.CloudSQLConnectionProfileInput(
            settings=shared.CloudSQLSettingsInput(
                activation_policy="ALWAYS",
                auto_storage_increase=False,
                availability_type="ZONAL",
                cmek_key_name="recusandae",
                collation="temporibus",
                data_disk_size_gb="ab",
                data_disk_type="PD_SSD",
                database_flags={
                    "deserunt": "perferendis",
                },
                database_version="POSTGRES_9_6",
                ip_config=shared.SQLIPConfig(
                    authorized_networks=[
                        shared.SQLACLEntry(
                            expire_time="sapiente",
                            label="quo",
                            ttl="odit",
                            value="at",
                        ),
                        shared.SQLACLEntry(
                            expire_time="at",
                            label="maiores",
                            ttl="molestiae",
                            value="quod",
                        ),
                        shared.SQLACLEntry(
                            expire_time="quod",
                            label="esse",
                            ttl="totam",
                            value="porro",
                        ),
                        shared.SQLACLEntry(
                            expire_time="dolorum",
                            label="dicta",
                            ttl="nam",
                            value="officia",
                        ),
                    ],
                    enable_ipv4=False,
                    private_network="occaecati",
                    require_ssl=False,
                ),
                root_password="fugit",
                secondary_zone="deleniti",
                source_id="hic",
                storage_auto_resize_limit="optio",
                tier="totam",
                user_labels={
                    "commodi": "molestiae",
                },
                zone="modi",
            ),
        ),
        display_name="qui",
        error=shared.Status(
            code=774234,
            details=[
                {
                    "ipsum": "excepturi",
                    "aspernatur": "perferendis",
                },
                {
                    "natus": "sed",
                    "iste": "dolor",
                },
                {
                    "laboriosam": "hic",
                    "saepe": "fuga",
                    "in": "corporis",
                },
            ],
            message="iste",
        ),
        labels={
            "saepe": "quidem",
            "architecto": "ipsa",
        },
        mysql=shared.MySQLConnectionProfileInput(
            cloud_sql_id="reiciendis",
            host="est",
            password="mollitia",
            port=670638,
            ssl=shared.SslConfigInput(
                ca_certificate="dolores",
                client_certificate="dolorem",
                client_key="corporis",
            ),
            username="Braulio60",
        ),
        name="nemo",
        oracle=shared.OracleConnectionProfileInput(
            database_service="minima",
            forward_ssh_connectivity=shared.ForwardSSHTunnelConnectivity(
                hostname="nippy-apse.info",
                password="culpa",
                port=988374,
                private_key="sapiente",
                username="Bart63",
            ),
            host="consequuntur",
            password="repellat",
            port=653108,
            private_connectivity=shared.PrivateConnectivity(
                private_connection="occaecati",
            ),
            static_service_ip_connectivity={
                "commodi": "quam",
                "molestiae": "velit",
            },
            username="Linda.Cronin",
        ),
        postgresql=shared.PostgreSQLConnectionProfileInput(
            cloud_sql_id="laborum",
            host="animi",
            password="enim",
            port=138183,
            private_service_connect_connectivity=shared.PrivateServiceConnectConnectivity(
                service_attachment="quo",
            ),
            ssl=shared.SslConfigInput(
                ca_certificate="sequi",
                client_certificate="tenetur",
                client_key="ipsam",
            ),
            static_ip_connectivity={
                "possimus": "aut",
                "quasi": "error",
                "temporibus": "laborum",
            },
            username="Austyn_Witting46",
        ),
        provider="RDS",
        state="FAILED",
    ),
    access_token="ipsa",
    alt="media",
    callback="voluptate",
    connection_profile_id="cum",
    fields_="perferendis",
    key="doloremque",
    oauth_token="reprehenderit",
    parent="ut",
    pretty_print=False,
    quota_user="maiores",
    request_id="dicta",
    skip_validation=False,
    upload_type="corporis",
    upload_protocol="dolore",
    validate_only=False,
)
    
res = s.projects.datamigration_projects_locations_connection_profiles_create(req, operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->