<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TravelpartnerAccountsAccountLinksCreateRequest(
    dollar_xgafv="2",
    account_link=shared.AccountLink(
        account_link_target=shared.AccountLinkTarget(
            all_hotels=False,
            hotel_list=shared.HotelList(
                partner_hotel_ids=[
                    "distinctio",
                    "quibusdam",
                    "unde",
                ],
            ),
        ),
        google_ads_customer_name="nulla",
        name="corrupti",
        status="APPROVED",
    ),
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    oauth_token="magnam",
    parent="debitis",
    pretty_print=False,
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.accounts.travelpartner_accounts_account_links_create(req)

if res.account_link is not None:
    # handle response
```
<!-- End SDK Example Usage -->