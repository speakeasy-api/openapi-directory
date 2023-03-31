<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest(
    dollar_xgafv="2",
    connection_profile_input=shared.ConnectionProfileInput(
        cloudsql=shared.CloudSQLConnectionProfileInput(
            settings=shared.CloudSQLSettingsInput(
                activation_policy="ALWAYS",
                auto_storage_increase=False,
                data_disk_size_gb="distinctio",
                data_disk_type="PD_HDD",
                database_flags={
                    "nulla": "corrupti",
                    "illum": "vel",
                    "error": "deserunt",
                },
                database_version="MYSQL_5_6",
                ip_config=shared.SQLIPConfig(
                    authorized_networks=[
                        shared.SQLACLEntry(
                            expire_time="magnam",
                            label="debitis",
                            ttl="ipsa",
                            value="delectus",
                        ),
                        shared.SQLACLEntry(
                            expire_time="tempora",
                            label="suscipit",
                            ttl="molestiae",
                            value="minus",
                        ),
                    ],
                    enable_ipv4=False,
                    private_network="placeat",
                    require_ssl=False,
                ),
                root_password="voluptatum",
                source_id="iusto",
                storage_auto_resize_limit="excepturi",
                tier="nisi",
                user_labels={
                    "temporibus": "ab",
                    "quis": "veritatis",
                    "deserunt": "perferendis",
                    "ipsam": "repellendus",
                },
                zone="sapiente",
            ),
        ),
        display_name="quo",
        error=shared.Status(
            code=140350,
            details=[
                {
                    "maiores": "molestiae",
                    "quod": "quod",
                    "esse": "totam",
                    "porro": "dolorum",
                },
                {
                    "nam": "officia",
                },
                {
                    "fugit": "deleniti",
                    "hic": "optio",
                    "totam": "beatae",
                },
                {
                    "molestiae": "modi",
                    "qui": "impedit",
                },
            ],
            message="cum",
        ),
        labels={
            "ipsum": "excepturi",
            "aspernatur": "perferendis",
        },
        mysql=shared.MySQLConnectionProfileInput(
            cloud_sql_id="ad",
            host="natus",
            password="sed",
            port=612096,
            ssl=shared.SslConfigInput(
                ca_certificate="dolor",
                client_certificate="natus",
                client_key="laboriosam",
            ),
            username="Tyra.Turcotte35",
        ),
        name="iste",
        provider="CLOUDSQL",
        state="FAILED",
    ),
    access_token="quidem",
    alt="json",
    callback="ipsa",
    connection_profile_id="reiciendis",
    fields_="est",
    key="mollitia",
    oauth_token="laborum",
    parent="dolores",
    pretty_print=False,
    quota_user="dolorem",
    request_id="corporis",
    upload_type="explicabo",
    upload_protocol="nobis",
)
    
res = s.projects.datamigration_projects_locations_connection_profiles_create(req, operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->