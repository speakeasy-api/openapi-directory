<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AddTrackCollectionItemsRequest(
    collection_item_request=shared.CollectionItemRequest(
        items=[
            shared.CollectionItem(
                added_time="2021-07-27T21:52:56.087Z",
                id="quibusdam",
                media_type="unde",
            ),
            shared.CollectionItem(
                added_time="2021-05-14T08:28:11.899Z",
                id="illum",
                media_type="vel",
            ),
            shared.CollectionItem(
                added_time="2021-09-16T11:56:06.019Z",
                id="suscipit",
                media_type="iure",
            ),
        ],
    ),
    id="magnam",
)
    
res = s.audio.add_track_collection_items(req, operations.AddTrackCollectionItemsSecurity(
    customer_access_code="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->