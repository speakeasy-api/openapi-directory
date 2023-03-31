<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ApigatewayProjectsLocationsApisConfigsCreateRequest(
    dollar_xgafv="2",
    apigateway_api_config_input=shared.ApigatewayAPIConfigInput(
        display_name="provident",
        gateway_service_account="distinctio",
        grpc_services=[
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="unde",
                    path="nulla",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="illum",
                        path="vel",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="error",
                        path="deserunt",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="suscipit",
                        path="iure",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="magnam",
                    path="debitis",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="delectus",
                        path="tempora",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="suscipit",
                    path="molestiae",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="placeat",
                        path="voluptatum",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="iusto",
                        path="excepturi",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="nisi",
                        path="recusandae",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="temporibus",
                        path="ab",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="quis",
                    path="veritatis",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="perferendis",
                        path="ipsam",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="repellendus",
                        path="sapiente",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="quo",
                        path="odit",
                    ),
                ],
            ),
        ],
        labels={
            "at": "maiores",
            "molestiae": "quod",
            "quod": "esse",
            "totam": "porro",
        },
        managed_service_configs=[
            shared.ApigatewayAPIConfigFile(
                contents="dicta",
                path="nam",
            ),
            shared.ApigatewayAPIConfigFile(
                contents="officia",
                path="occaecati",
            ),
            shared.ApigatewayAPIConfigFile(
                contents="fugit",
                path="deleniti",
            ),
        ],
        openapi_documents=[
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="optio",
                    path="totam",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="beatae",
                    path="commodi",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="molestiae",
                    path="modi",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="qui",
                    path="impedit",
                ),
            ),
        ],
    ),
    access_token="cum",
    alt="media",
    api_config_id="ipsum",
    callback="excepturi",
    fields_="aspernatur",
    key="perferendis",
    oauth_token="ad",
    parent="natus",
    pretty_print=False,
    quota_user="sed",
    upload_type="iste",
    upload_protocol="dolor",
)
    
res = s.projects.apigateway_projects_locations_apis_configs_create(req, operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.apigateway_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->