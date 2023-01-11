<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateAliasRequest(
    security=operations.CreateAliasSecurity(
        api_key_auth=shared.SchemeAPIKeyAuth(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.CreateAliasQueryParams(
        alias_name="aut",
        domain_name="porro",
    ),
    request=shared.CreateAliasModel(
        destinations=[
            shared.DestinationModel(
                country="magni",
                os="nihil",
                url="est",
            ),
            shared.DestinationModel(
                country="ad",
                os="autem",
                url="autem",
            ),
        ],
        metatags=[
            shared.MetaTagModel(
                content="a",
                name="ut",
            ),
            shared.MetaTagModel(
                content="quia",
                name="deleniti",
            ),
        ],
        snippets=[
            shared.SnippetModel(
                id="inventore",
                parameters={
                    "in": "soluta",
                },
            ),
        ],
    ),
)
    
res = s.alias.create_alias(req)

if res.create_alias_response_model is not None:
    # handle response
```
<!-- End SDK Example Usage -->