<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AddTrackCollectionItemsRequest(
    security=operations.AddTrackCollectionItemsSecurity(
        customer_access_code=shared.SchemeCustomerAccessCode(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AddTrackCollectionItemsPathParams(
        id="et",
    ),
    request=shared.CollectionItemRequest(
        items=[
            shared.CollectionItem(
                added_time="2009-03-02T11:51:41Z",
                id="delectus",
                media_type="et",
            ),
            shared.CollectionItem(
                added_time="2003-07-08T19:43:43Z",
                id="odit",
                media_type="ullam",
            ),
            shared.CollectionItem(
                added_time="1985-05-06T22:01:15Z",
                id="pariatur",
                media_type="eveniet",
            ),
        ],
    ),
)
    
res = s.audio.add_track_collection_items(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->