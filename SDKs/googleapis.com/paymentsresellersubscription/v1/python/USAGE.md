<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PaymentsresellersubscriptionPartnersProductsListRequest(
    path_params=operations.PaymentsresellersubscriptionPartnersProductsListPathParams(
        parent="velit",
    ),
    query_params=operations.PaymentsresellersubscriptionPartnersProductsListQueryParams(
        dollar_xgafv="2",
        access_token="sint",
        alt="json",
        callback="fuga",
        fields="modi",
        filter="illo",
        key="autem",
        oauth_token="dolores",
        page_size=4740378950094471264,
        page_token="blanditiis",
        pretty_print=True,
        quota_user="fuga",
        upload_type="alias",
        upload_protocol="quas",
    ),
)
    
res = s.partners.paymentsresellersubscription_partners_products_list(req)

if res.google_cloud_payments_reseller_subscription_v1_list_products_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->