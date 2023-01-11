<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest(
    path_params=operations.MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams(
        parent="aut",
    ),
    query_params=operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams(
        dollar_xgafv="2",
        access_token="dignissimos",
        alt="proto",
        callback="commodi",
        fields="rerum",
        key="voluptas",
        oauth_token="quasi",
        pretty_print=False,
        quota_user="vel",
        upload_type="sed",
        upload_protocol="et",
    ),
    request=shared.PlaceActionLinkInput(
        is_preferred=True,
        name="aut",
        place_action_type="DINING_RESERVATION",
        uri="modi",
    ),
)
    
res = s.locations.mybusinessplaceactions_locations_place_action_links_create(req)

if res.place_action_link is not None:
    # handle response
```
<!-- End SDK Example Usage -->