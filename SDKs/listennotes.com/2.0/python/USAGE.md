<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetBestPodcastsRequest(
    x_listen_api_key="corrupti",
    genre_id="provident",
    language="distinctio",
    page=844266,
    publisher_region="unde",
    region="nulla",
    safe_mode="1",
    sort="listen_score",
)
    
res = s.directory_api.get_best_podcasts(req)

if res.best_podcasts_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->