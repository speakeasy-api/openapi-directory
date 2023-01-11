<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetBestPodcastsRequest(
    query_params=operations.GetBestPodcastsQueryParams(
        genre_id="voluptatem",
        language="libero",
        page=894224865029978060,
        publisher_region="magnam",
        region="ut",
        safe_mode=5723728336937391556,
    ),
    headers=operations.GetBestPodcastsHeaders(
        x_listen_api_key="ut",
    ),
)
    
res = s.directory_api.get_best_podcasts(req)

if res.best_podcasts_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->