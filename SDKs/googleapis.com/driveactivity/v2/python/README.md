# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/driveactivity/v2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DriveactivityActivityQueryRequest(
    dollar_xgafv="2",
    query_drive_activity_request=shared.QueryDriveActivityRequest(
        ancestor_name="provident",
        consolidation_strategy=shared.ConsolidationStrategy(
            legacy={
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            none={
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
        ),
        filter="delectus",
        item_name="tempora",
        page_size=383441,
        page_token="molestiae",
    ),
    access_token="minus",
    alt="proto",
    callback="voluptatum",
    fields_="iusto",
    key="excepturi",
    oauth_token="nisi",
    pretty_print=False,
    quota_user="recusandae",
    upload_type="temporibus",
    upload_protocol="ab",
)
    
res = s.activity.driveactivity_activity_query(req, operations.DriveactivityActivityQuerySecurity(
    option1=operations.DriveactivityActivityQuerySecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.query_drive_activity_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activity

* `driveactivity_activity_query` - Query past activity in Google Drive.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
