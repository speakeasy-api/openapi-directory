<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.VectortileTerraintilesGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    altitude_precision_centimeters=844266,
    callback="unde",
    client_info_api_client="nulla",
    client_info_application_id="corrupti",
    client_info_application_version="illum",
    client_info_device_model="vel",
    client_info_operating_system="error",
    client_info_platform="ANDROID",
    client_info_user_id="suscipit",
    enable_modeled_volumes=False,
    enable_political_features=False,
    enable_private_roads=False,
    enable_unclipped_buildings=False,
    fields_="iure",
    key="magnam",
    language_code="debitis",
    max_elevation_resolution_cells=56713,
    min_elevation_resolution_cells=963663,
    name="tempora",
    oauth_token="suscipit",
    pretty_print=False,
    quota_user="molestiae",
    region_code="minus",
    terrain_formats=[
        "FIRST_DERIVATIVE",
        "FIRST_DERIVATIVE",
        "FIRST_DERIVATIVE",
        "FIRST_DERIVATIVE",
    ],
    upload_type="recusandae",
    upload_protocol="temporibus",
)
    
res = s.terraintiles.vectortile_terraintiles_get(req)

if res.terrain_tile is not None:
    # handle response
```
<!-- End SDK Example Usage -->