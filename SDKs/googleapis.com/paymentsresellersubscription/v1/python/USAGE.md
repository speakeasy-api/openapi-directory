<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PaymentsresellersubscriptionPartnersProductsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    filter="nulla",
    key="corrupti",
    oauth_token="illum",
    page_size=423655,
    page_token="error",
    parent="deserunt",
    pretty_print=False,
    quota_user="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.partners.paymentsresellersubscription_partners_products_list(req)

if res.google_cloud_payments_reseller_subscription_v1_list_products_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->