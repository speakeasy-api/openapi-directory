# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/gov.bc.ca/geomark/4.1.2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bounding_box

* `get_geomarks_geomark_id_bounding_box_file_format_extension_` - Gets the bounding box of the geomark

### create

* `post_geomarks_copy` - Create a new geomark by copying the geometries from one or more existing geomarks from the current server.
* `post_geomarks_new` - Create a new geomark

### feature

* `get_geomarks_geomark_id_feature_file_format_extension_` - Get the feature and attribution of the geomark

### info

* `get_geomarks_geomark_id_file_format_extension_` - Get information about a particular geomark

### parts

* `get_geomarks_geomark_id_parts_file_format_extension_` - Get the individual geometries within a multi-part geometry

### point

* `get_geomarks_geomark_id_point_file_format_extension_` - Gets a single spatial point representative of the geomark.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
