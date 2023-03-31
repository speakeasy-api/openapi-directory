# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/mybusinessplaceactions/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### locations

* `mybusinessplaceactions_locations_place_action_links_create` - Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
* `mybusinessplaceactions_locations_place_action_links_delete` - Deletes a place action link from the specified location.
* `mybusinessplaceactions_locations_place_action_links_get` - Gets the specified place action link.
* `mybusinessplaceactions_locations_place_action_links_list` - Lists the place action links for the specified location.
* `mybusinessplaceactions_locations_place_action_links_patch` - Updates the specified place action link and returns it.

### place_action_type_metadata

* `mybusinessplaceactions_place_action_type_metadata_list` - Returns the list of available place action types for a location or country.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
