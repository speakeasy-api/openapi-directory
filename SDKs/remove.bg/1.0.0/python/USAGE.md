<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key_header="YOUR_API_KEY_HERE",
    ),
)


req = shared.RemoveBgJSON(
    add_shadow=False,
    bg_color="corrupti",
    bg_image_url="provident",
    channels="alpha",
    crop=False,
    crop_margin="quibusdam",
    format="jpg",
    image_file_b64="nulla",
    image_url="https://www.remove.bg/example-hd.jpg",
    position="corrupti",
    roi="illum",
    scale="vel",
    semitransparency=False,
    size="full",
    type="product",
    type_level="1",
)
    
res = s.background_removal.post_removebg_form(req)

if res.remove_bg_json_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->