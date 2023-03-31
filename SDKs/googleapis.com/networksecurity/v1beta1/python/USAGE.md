<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest(
    dollar_xgafv="2",
    add_address_group_items_request=shared.AddAddressGroupItemsRequest(
        items=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        request_id="nulla",
    ),
    access_token="corrupti",
    address_group="illum",
    alt="media",
    callback="error",
    fields_="deserunt",
    key="suscipit",
    oauth_token="iure",
    pretty_print=False,
    quota_user="magnam",
    upload_type="debitis",
    upload_protocol="ipsa",
)
    
res = s.projects.networksecurity_projects_locations_address_groups_add_items(req, operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->