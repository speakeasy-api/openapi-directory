<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetFeaturesFeatureIDRequest(
    feature_id=548814,
)
    
res = s.feature.get_features_feature_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->