<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PatchAttractionRequest(
    path_params=operations.PatchAttractionPathParams(
        id="dolorem",
    ),
    headers=operations.PatchAttractionHeaders(
        tmps_correlation_id="dolores",
    ),
    request=shared.AugmentationData(
        changes=[
            shared.Change(
                from_="illo",
                op="add",
                path="reiciendis",
                value={
                    "esse": "omnis",
                },
            ),
            shared.Change(
                from_="velit",
                op="add",
                path="consequatur",
                value={
                    "quo": "consequatur",
                },
            ),
        ],
        related_entity_id="dolor",
        related_entity_type="event",
        score=34.200001,
        source="eius",
        version_number=4361261286928758480,
    ),
)
    
res = s.patch_attraction(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->