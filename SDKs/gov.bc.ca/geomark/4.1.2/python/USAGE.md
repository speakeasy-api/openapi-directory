<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionRequest(
    path_params=operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionPathParams(
        file_format_extension="shpz",
        geomark_id="quia",
    ),
    query_params=operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionQueryParams(
        srid=1068448084495713022,
    ),
)
    
res = s.bounding_box.get_geomarks_geomark_id_bounding_box_file_format_extension_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->