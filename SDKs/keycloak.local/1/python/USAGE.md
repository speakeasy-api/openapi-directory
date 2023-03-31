<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        access_token="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.DeleteRealmAttackDetectionBruteForceUsersRequest(
    realm="corrupti",
)
    
res = s.attack_detection.delete_realm_attack_detection_brute_force_users(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->