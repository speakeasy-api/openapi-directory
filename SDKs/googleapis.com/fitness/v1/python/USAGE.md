<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FitnessUsersDataSourcesCreateRequest(
    security=operations.FitnessUsersDataSourcesCreateSecurity(
        option1=operations.FitnessUsersDataSourcesCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    path_params=operations.FitnessUsersDataSourcesCreatePathParams(
        user_id="saepe",
    ),
    query_params=operations.FitnessUsersDataSourcesCreateQueryParams(
        dollar_xgafv="1",
        access_token="hic",
        alt="json",
        callback="reprehenderit",
        fields="voluptas",
        key="porro",
        oauth_token="saepe",
        pretty_print=True,
        quota_user="est",
        upload_type="consectetur",
        upload_protocol="ipsam",
    ),
    request=shared.DataSource(
        application=shared.Application(
            details_url="deserunt",
            name="temporibus",
            package_name="occaecati",
            version="deleniti",
        ),
        data_quality_standard=[
            "dataQualityBloodGlucoseIso151972013",
        ],
        data_stream_id="eligendi",
        data_stream_name="ut",
        data_type=shared.DataType(
            field=[
                shared.DataTypeField(
                    format="map",
                    name="blanditiis",
                    optional=True,
                ),
                shared.DataTypeField(
                    format="map",
                    name="voluptatem",
                    optional=True,
                ),
            ],
            name="ratione",
        ),
        device=shared.Device(
            manufacturer="qui",
            model="nemo",
            type="smartDisplay",
            uid="saepe",
            version="deleniti",
        ),
        name="ex",
        type="raw",
    ),
)
    
res = s.users.fitness_users_data_sources_create(req)

if res.data_source is not None:
    # handle response
```
<!-- End SDK Example Usage -->