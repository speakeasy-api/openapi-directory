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
    description_exclude=[
        "Landmarks",
        "Landmarks",
        "Landmarks",
    ],
    details=[
        "Landmarks",
        "Landmarks",
        "Celebrities",
        "Landmarks",
    ],
    language="pt",
    visual_features=[
        "Categories",
        "Adult",
    ],
)
    
res = s.analyze_image(req)

if res.image_analysis is not None:
    # handle response
```
<!-- End SDK Example Usage -->