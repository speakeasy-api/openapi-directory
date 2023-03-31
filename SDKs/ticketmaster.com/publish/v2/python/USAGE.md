<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.PatchAttractionRequest(
    augmentation_data=shared.AugmentationData(
        changes=[
            shared.Change(
                from_="provident",
                op="copy",
                path="quibusdam",
                value={
                    "nulla": "corrupti",
                    "illum": "vel",
                    "error": "deserunt",
                },
            ),
            shared.Change(
                from_="suscipit",
                op="replace",
                path="magnam",
                value={
                    "ipsa": "delectus",
                    "tempora": "suscipit",
                    "molestiae": "minus",
                    "placeat": "voluptatum",
                },
            ),
            shared.Change(
                from_="iusto",
                op="move",
                path="nisi",
                value={
                    "temporibus": "ab",
                    "quis": "veritatis",
                    "deserunt": "perferendis",
                    "ipsam": "repellendus",
                },
            ),
        ],
        related_entity_id="sapiente",
        related_entity_type="venue",
        score=1403.5,
        source="at",
        version_number=870088,
    ),
    tmps_correlation_id="maiores",
    id="molestiae",
)
    
res = s.patch_attraction(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->