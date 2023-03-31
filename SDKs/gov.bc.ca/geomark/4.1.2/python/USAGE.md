<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionRequest(
    file_format_extension="shpz",
    geomark_id="provident",
    srid="26909",
)
    
res = s.bounding_box.get_geomarks_geomark_id_bounding_box_file_format_extension_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->