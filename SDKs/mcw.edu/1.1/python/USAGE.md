<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAffectedGenomicModelsUsingGetRequest(
    path_params=operations.GetAffectedGenomicModelsUsingGetPathParams(
        taxon_id="placeat",
    ),
)
    
res = s.agr.get_affected_genomic_models_using_get(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->