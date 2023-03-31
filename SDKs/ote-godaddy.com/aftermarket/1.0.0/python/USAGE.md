<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = [
    shared.AftermarketListingExpiryCreate(
        domain="provident",
        expires_at="distinctio",
        losing_registrar_id=844266,
        page_views_monthly=602763,
        revenue_monthly=857946,
    ),
    shared.AftermarketListingExpiryCreate(
        domain="corrupti",
        expires_at="illum",
        losing_registrar_id=423655,
        page_views_monthly=623564,
        revenue_monthly=645894,
    ),
    shared.AftermarketListingExpiryCreate(
        domain="suscipit",
        expires_at="iure",
        losing_registrar_id=297534,
        page_views_monthly=891773,
        revenue_monthly=56713,
    ),
]
    
res = s.v1.add_expiry_listings_json(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->