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
        parent="similique",
    ),
    query_params=operations.ApigatewayProjectsLocationsApisConfigsCreateQueryParams(
        dollar_xgafv="1",
        access_token="minus",
        alt="media",
        api_config_id="fuga",
        callback="reiciendis",
        fields="et",
        key="repudiandae",
        oauth_token="minima",
        pretty_print=True,
        quota_user="corporis",
        upload_type="iusto",
        upload_protocol="qui",
    ),
    request=shared.ApigatewayAPIConfigInput(
        display_name="quaerat",
        gateway_config=shared.ApigatewayGatewayConfig(
            backend_config=shared.ApigatewayBackendConfig(
                google_service_account="sed",
            ),
        ),
        gateway_service_account="autem",
        grpc_services=[
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="quia",
                    path="et",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="fugiat",
                        path="consequatur",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="pariatur",
                        path="et",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="voluptas",
                        path="non",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="minima",
                    path="nihil",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="impedit",
                        path="ipsum",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="cum",
                    path="similique",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="ab",
                        path="ut",
                    ),
                ],
            ),
        ],
        labels={
            "asperiores": "natus",
            "dolor": "harum",
        },
        managed_service_configs=[
            shared.ApigatewayAPIConfigFile(
                contents="nesciunt",
                path="porro",
            ),
            shared.ApigatewayAPIConfigFile(
                contents="ut",
                path="quo",
            ),
        ],
        openapi_documents=[
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="id",
                    path="officiis",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="nulla",
                    path="aut",
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