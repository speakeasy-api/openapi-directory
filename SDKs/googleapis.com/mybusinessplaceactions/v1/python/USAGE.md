<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest(
    dollar_xgafv="2",
    place_action_link_input=shared.PlaceActionLinkInput(
        is_preferred=False,
        name="provident",
        place_action_type="FOOD_DELIVERY",
        uri="https://outstanding-strait.name",
    ),
    access_token="illum",
    alt="media",
    callback="error",
    fields_="deserunt",
    key="suscipit",
    oauth_token="iure",
    parent="magnam",
    pretty_print=False,
    quota_user="debitis",
    upload_type="ipsa",
    upload_protocol="delectus",
)
    
res = s.locations.mybusinessplaceactions_locations_place_action_links_create(req)

if res.place_action_link is not None:
    # handle response
```
<!-- End SDK Example Usage -->