<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest(
    security=operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity(
        developer_hapikey=shared.SchemeDeveloperHapikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchivePathParams(
        app_id=7811612559882029157,
        card_id="et",
    ),
)
    
res = s.cards.delete_crm_v3_extensions_cards_app_id_card_id_archive(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->