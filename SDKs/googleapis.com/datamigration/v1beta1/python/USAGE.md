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
        parent="animi",
    ),
    query_params=operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams(
        dollar_xgafv="1",
        access_token="qui",
        alt="media",
        callback="quis",
        connection_profile_id="repudiandae",
        fields="dolorem",
        key="eum",
        oauth_token="aut",
        pretty_print=False,
        quota_user="velit",
        request_id="unde",
        upload_type="esse",
        upload_protocol="libero",
    ),
    request=shared.ConnectionProfileInput(
        cloudsql=shared.CloudSQLConnectionProfileInput(
            settings=shared.CloudSQLSettingsInput(
                activation_policy="NEVER",
                auto_storage_increase=False,
                data_disk_size_gb="id",
                data_disk_type="PD_HDD",
                database_flags={
                    "molestiae": "est",
                    "molestiae": "commodi",
                    "impedit": "ipsa",
                },
                database_version="MYSQL_5_6",
                ip_config=shared.SQLIPConfig(
                    authorized_networks=[
                        shared.SQLACLEntry(
                            expire_time="aut",
                            label="aut",
                            ttl="consequuntur",
                            value="asperiores",
                        ),
                    ],
                    enable_ipv4=False,
                    private_network="in",
                    require_ssl=True,
                ),
                root_password="molestiae",
                source_id="dolores",
                storage_auto_resize_limit="ut",
                tier="eos",
                user_labels={
                    "tempora": "excepturi",
                    "repellendus": "nihil",
                },
                zone="quasi",
            ),
        ),
        display_name="et",
        error=shared.Status(
            code=5616495351279140944,
            details=[
                {
                    "aut": "qui",
                    "laborum": "quod",
                    "eius": "officia",
                },
                {
                    "itaque": "a",
                },
            ],
            message="minima",
        ),
        labels={
            "est": "sed",
            "odio": "non",
        },
        mysql=shared.MySQLConnectionProfileInput(
            cloud_sql_id="aspernatur",
            host="quod",
            password="et",
            port=8176960718989686902,
            ssl=shared.SslConfigInput(
                ca_certificate="corporis",
                client_certificate="rerum",
                client_key="ut",
            ),
            username="asperiores",
        ),
        name="animi",
        provider="CLOUDSQL",
        state="DELETING",
    ),
)
    
res = s.projects.datamigration_projects_locations_connection_profiles_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->