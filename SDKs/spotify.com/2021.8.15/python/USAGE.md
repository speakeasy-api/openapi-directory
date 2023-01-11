<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.EndpointGetAnAlbumRequest(
    security=operations.EndpointGetAnAlbumSecurity(
        spotify_auth=shared.SchemeSpotifyAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.EndpointGetAnAlbumPathParams(
        id="aperiam",
    ),
    query_params=operations.EndpointGetAnAlbumQueryParams(
        market="doloremque",
    ),
    headers=operations.EndpointGetAnAlbumHeaders(
        authorization="in",
    ),
)
    
res = s.category_albums.endpoint_get_an_album(req)

if res.album_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->