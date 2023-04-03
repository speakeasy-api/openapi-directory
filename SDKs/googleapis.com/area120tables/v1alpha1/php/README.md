# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### tables

* `area120tablesTablesList` - Lists tables for the user.
* `area120tablesTablesRowsBatchCreate` - Creates multiple rows.
* `area120tablesTablesRowsBatchDelete` - Deletes multiple rows.
* `area120tablesTablesRowsBatchUpdate` - Updates multiple rows.
* `area120tablesTablesRowsCreate` - Creates a row.
* `area120tablesTablesRowsDelete` - Deletes a row.
* `area120tablesTablesRowsList` - Lists rows in a table. Returns NOT_FOUND if the table does not exist.
* `area120tablesTablesRowsPatch` - Updates a row.

### workspaces

* `area120tablesWorkspacesGet` - Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
* `area120tablesWorkspacesList` - Lists workspaces for the user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
