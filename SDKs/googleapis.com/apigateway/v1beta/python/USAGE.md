<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ApigatewayProjectsLocationsApisConfigsCreateRequest(
    dollar_xgafv="2",
    apigateway_api_config_input=shared.ApigatewayAPIConfigInput(
        display_name="provident",
        gateway_config=shared.ApigatewayGatewayConfig(
            backend_config=shared.ApigatewayBackendConfig(
                google_service_account="distinctio",
            ),
        ),
        gateway_service_account="quibusdam",
        grpc_services=[
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="nulla",
                    path="corrupti",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="vel",
                        path="error",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="deserunt",
                        path="suscipit",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="iure",
                        path="magnam",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="debitis",
                        path="ipsa",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="delectus",
                    path="tempora",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="molestiae",
                        path="minus",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="placeat",
                        path="voluptatum",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="iusto",
                    path="excepturi",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="recusandae",
                        path="temporibus",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="ab",
                        path="quis",
                    ),
                ],
            ),
        ],
        labels={
            "deserunt": "perferendis",
        },
        managed_service_configs=[
            shared.ApigatewayAPIConfigFile(
                contents="repellendus",
                path="sapiente",
            ),
            shared.ApigatewayAPIConfigFile(
                contents="quo",
                path="odit",
            ),
        ],
        openapi_documents=[
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="at",
                    path="maiores",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="molestiae",
                    path="quod",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="quod",
                    path="esse",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="totam",
                    path="porro",
                ),
            ),
        ],
    ),
    access_token="dolorum",
    alt="json",
    api_config_id="nam",
    callback="officia",
    fields_="occaecati",
    key="fugit",
    oauth_token="deleniti",
    parent="hic",
    pretty_print=False,
    quota_user="optio",
    upload_type="totam",
    upload_protocol="beatae",
)
    
res = s.projects.apigateway_projects_locations_apis_configs_create(req, operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.apigateway_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->