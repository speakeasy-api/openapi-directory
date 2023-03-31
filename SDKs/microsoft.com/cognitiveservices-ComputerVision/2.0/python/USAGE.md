<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apim_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.AnalyzeImageRequest(
    image_url=shared.ImageURL(
        url="corrupti",
    ),
    details=[
        "Landmarks",
        "Landmarks",
        "Landmarks",
    ],
    language="zh",
    visual_features=[
        "Objects",
        "Categories",
        "Tags",
    ],
)
    
res = s.analyze_image(req)

if res.image_analysis is not None:
    # handle response
```
<!-- End SDK Example Usage -->