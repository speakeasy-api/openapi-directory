# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/area120tables/v1alpha1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.Area120tablesTablesListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    order_by="illum",
    page_size=423655,
    page_token="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.tables.area120tables_tables_list(req, operations.Area120tablesTablesListSecurity(
    option1=operations.Area120tablesTablesListSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.list_tables_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### tables

* `area120tables_tables_list` - Lists tables for the user.
* `area120tables_tables_rows_batch_create` - Creates multiple rows.
* `area120tables_tables_rows_batch_delete` - Deletes multiple rows.
* `area120tables_tables_rows_batch_update` - Updates multiple rows.
* `area120tables_tables_rows_create` - Creates a row.
* `area120tables_tables_rows_delete` - Deletes a row.
* `area120tables_tables_rows_list` - Lists rows in a table. Returns NOT_FOUND if the table does not exist.
* `area120tables_tables_rows_patch` - Updates a row.

### workspaces

* `area120tables_workspaces_get` - Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
* `area120tables_workspaces_list` - Lists workspaces for the user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
