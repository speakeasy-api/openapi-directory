<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FitnessUsersDataSourcesCreateRequest(
    dollar_xgafv="2",
    data_source=shared.DataSource(
        application=shared.Application(
            details_url="provident",
            name="distinctio",
            package_name="quibusdam",
            version="unde",
        ),
        data_quality_standard=[
            "dataQualityBloodPressureBhsAB",
            "dataQualityBloodGlucoseIso151972003",
            "dataQualityBloodPressureBhsAA",
            "dataQualityBloodPressureBhsBA",
        ],
        data_stream_id="deserunt",
        data_stream_name="suscipit",
        data_type=shared.DataType(
            field=[
                shared.DataTypeField(
                    format="string",
                    name="debitis",
                    optional=False,
                ),
                shared.DataTypeField(
                    format="integer",
                    name="delectus",
                    optional=False,
                ),
            ],
            name="tempora",
        ),
        device=shared.Device(
            manufacturer="suscipit",
            model="molestiae",
            type="headMounted",
            uid="placeat",
            version="voluptatum",
        ),
        name="iusto",
        type="derived",
    ),
    access_token="nisi",
    alt="proto",
    callback="temporibus",
    fields_="ab",
    key="quis",
    oauth_token="veritatis",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="perferendis",
    upload_protocol="ipsam",
    user_id="repellendus",
)
    
res = s.users.fitness_users_data_sources_create(req, operations.FitnessUsersDataSourcesCreateSecurity(
    option1=operations.FitnessUsersDataSourcesCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.data_source is not None:
    # handle response
```
<!-- End SDK Example Usage -->