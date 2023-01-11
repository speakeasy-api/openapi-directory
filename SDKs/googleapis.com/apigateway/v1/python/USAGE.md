<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ApigatewayProjectsLocationsApisConfigsCreateRequest(
    security=operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ApigatewayProjectsLocationsApisConfigsCreatePathParams(
        parent="sint",
    ),
    query_params=operations.ApigatewayProjectsLocationsApisConfigsCreateQueryParams(
        dollar_xgafv="1",
        access_token="a",
        alt="media",
        api_config_id="eveniet",
        callback="perferendis",
        fields="numquam",
        key="assumenda",
        oauth_token="vitae",
        pretty_print=True,
        quota_user="a",
        upload_type="mollitia",
        upload_protocol="ut",
    ),
    request=shared.ApigatewayAPIConfigInput(
        display_name="consequatur",
        gateway_service_account="repellat",
        grpc_services=[
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="repellendus",
                    path="alias",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="blanditiis",
                        path="pariatur",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="ipsam",
                        path="veritatis",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="voluptatem",
                        path="ullam",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="quasi",
                    path="deleniti",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="sit",
                        path="assumenda",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="quo",
                    path="ipsum",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="laudantium",
                        path="aperiam",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="eos",
                        path="qui",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="perspiciatis",
                        path="quod",
                    ),
                ],
            ),
        ],
        labels={
            "aliquam": "aut",
            "laborum": "voluptatem",
            "enim": "non",
        },
        managed_service_configs=[
            shared.ApigatewayAPIConfigFile(
                contents="saepe",
                path="dolores",
            ),
            shared.ApigatewayAPIConfigFile(
                contents="dolorum",
                path="ab",
            ),
            shared.ApigatewayAPIConfigFile(
                contents="earum",
                path="nihil",
            ),
        ],
        openapi_documents=[
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="consectetur",
                    path="ut",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="qui",
                    path="deleniti",
                ),
            ),
        ],
    ),
)
    
res = s.projects.apigateway_projects_locations_apis_configs_create(req)

if res.apigateway_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->