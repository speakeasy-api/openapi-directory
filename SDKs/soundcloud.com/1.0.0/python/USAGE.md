<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteLikesPlaylistsPlaylistIDRequest(
    playlist_id=548814,
)
    
res = s.likes.delete_likes_playlists_playlist_id_(req, operations.DeleteLikesPlaylistsPlaylistIDSecurity(
    auth_header="YOUR_API_KEY_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->