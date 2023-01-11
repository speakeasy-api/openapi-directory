<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteLikesPlaylistsPlaylistIDRequest(
    security=operations.DeleteLikesPlaylistsPlaylistIDSecurity(
        auth_header=shared.SchemeAuthHeader(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.DeleteLikesPlaylistsPlaylistIDPathParams(
        playlist_id=7908117031578081273,
    ),
)
    
res = s.likes.delete_likes_playlists_playlist_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->