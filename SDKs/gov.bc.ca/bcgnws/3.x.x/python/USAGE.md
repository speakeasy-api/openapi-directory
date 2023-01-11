<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetFeaturesFeatureIDRequest(
    path_params=operations.GetFeaturesFeatureIDPathParams(
        feature_id=4754435599357587291,
    ),
)
    
res = s.feature.get_features_feature_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->