<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        meraki_api_key=shared.SchemeMerakiAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetNetworkSwitchAccessControlListsRequest(
    path_params=operations.GetNetworkSwitchAccessControlListsPathParams(
        network_id="voluptatibus",
    ),
)
    
res = s.access_control_lists.get_network_switch_access_control_lists(req)

if res.get_network_switch_access_control_lists_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->