<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.KgsearchEntitiesSearchRequest(
    query_params=operations.KgsearchEntitiesSearchQueryParams(
        dollar_xgafv="1",
        access_token="ut",
        alt="json",
        callback="dolore",
        fields="nihil",
        ids=[
            "saepe",
            "illum",
        ],
        indent=False,
        key="atque",
        languages=[
            "ipsum",
            "ut",
            "et",
        ],
        limit=8686164055761658444,
        oauth_token="assumenda",
        prefix=True,
        pretty_print=False,
        query="sed",
        quota_user="ducimus",
        types=[
            "id",
        ],
        upload_type="enim",
        upload_protocol="quia",
    ),
)
    
res = s.entities.kgsearch_entities_search(req)

if res.search_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->