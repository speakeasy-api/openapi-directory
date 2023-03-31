# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/ticketmaster.com/publish/v2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `patch_attraction` - Publish a patch on an attraction
* `patch_event` - Publish a patch on an event
* `patch_venue` - Publish a patch on a venue
* `publish_attraction` - Publish an attractions
* `publish_attraction_videos` - Publish a video on an attraction
* `publish_entitlements` - Publish entitlements on an entity
* `publish_event` - Publish an event
* `publish_event_videos` - Publish a video on an event
* `publish_extension` - Publish extension on an entity
* `publish_venue` - Publish a venue
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
