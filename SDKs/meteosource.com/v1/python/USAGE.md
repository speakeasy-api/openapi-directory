<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FindPlacesFindPlacesGetRequest(
    key="corrupti",
    language="fr",
    text="distinctio",
)
    
res = s.location_endpoints.find_places_find_places_get(req, operations.FindPlacesFindPlacesGetSecurity(
    api_key_header="YOUR_API_KEY_HERE",
))

if res.find_places_models is not None:
    # handle response
```
<!-- End SDK Example Usage -->