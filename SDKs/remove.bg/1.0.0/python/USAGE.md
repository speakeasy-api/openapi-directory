<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key_header=shared.SchemeAPIKeyHeader(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.PostRemovebgRequest(
    request=operations.PostRemovebgRequests(
        remove_bg_json=shared.RemoveBgJSON(
            add_shadow=True,
            bg_color="culpa",
            bg_image_url="officia",
            channels="rgba",
            crop=False,
            crop_margin="aliquid",
            format="png",
            image_file_b64="iusto",
            image_url="quia",
            position="sint",
            roi="veritatis",
            scale="ipsum",
            semitransparency=True,
            size="auto",
            type="auto",
            type_level="2",
        ),
        remove_bg_json1=shared.RemoveBgJSON(
            add_shadow=False,
            bg_color="nobis",
            bg_image_url="animi",
            channels="alpha",
            crop=False,
            crop_margin="dolor",
            format="png",
            image_file_b64="et",
            image_url="fugit",
            position="veritatis",
            roi="aut",
            scale="est",
            semitransparency=False,
            size="full",
            type="auto",
            type_level="latest",
        ),
        remove_bg_multipart=shared.RemoveBgMultipart(
            add_shadow=False,
            bg_color="rerum",
            bg_image_file=shared.RemoveBgMultipartBgImageFile(
                bg_image_file="accusamus",
                content="voluptatibus".encode(),
            ),
            bg_image_url="eos",
            channels="alpha",
            crop=True,
            crop_margin="consectetur",
            format="png",
            image_file=shared.RemoveBgMultipartImageFile(
                content="quaerat".encode(),
                image_file="voluptas",
            ),
            image_file_b64="iusto",
            image_url="rerum",
            position="non",
            roi="possimus",
            scale="eius",
            semitransparency=True,
            size="preview",
            type="auto",
            type_level="latest",
        ),
    ),
)
    
res = s.background_removal.post_removebg(req)

if res.remove_bg_json_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->