<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveRequest(
    app_id=548814,
    card_id="provident",
)
    
res = s.cards.delete_crm_v3_extensions_cards_app_id_card_id_archive(req, operations.DeleteCrmV3ExtensionsCardsAppIDCardIDArchiveSecurity(
    developer_hapikey="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->