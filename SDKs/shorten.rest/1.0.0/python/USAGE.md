<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateAliasRequest(
    create_alias_model=shared.CreateAliasModel(
        destinations=[
            shared.DestinationModel(
                country="Montenegro",
                os="distinctio",
                url="quibusdam",
            ),
            shared.DestinationModel(
                country="Mozambique",
                os="nulla",
                url="corrupti",
            ),
            shared.DestinationModel(
                country="Suriname",
                os="vel",
                url="error",
            ),
        ],
        metatags=[
            shared.MetaTagModel(
                content="suscipit",
                name="iure",
            ),
            shared.MetaTagModel(
                content="magnam",
                name="debitis",
            ),
            shared.MetaTagModel(
                content="ipsa",
                name="delectus",
            ),
        ],
        snippets=[
            shared.SnippetModel(
                id="suscipit",
                parameters={
                    "minus": "placeat",
                    "voluptatum": "iusto",
                },
            ),
            shared.SnippetModel(
                id="excepturi",
                parameters={
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
            ),
        ],
    ),
    alias_name="veritatis",
    domain_name="deserunt",
)
    
res = s.alias.create_alias(req, operations.CreateAliasSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.create_alias_response_model is not None:
    # handle response
```
<!-- End SDK Example Usage -->