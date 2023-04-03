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


### pools

* `replicapoolPoolsDelete` - Deletes a replica pool.
* `replicapoolPoolsGet` - Gets information about a single replica pool.
* `replicapoolPoolsInsert` - Inserts a new replica pool.
* `replicapoolPoolsList` - List all replica pools.
* `replicapoolPoolsResize` - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
* `replicapoolPoolsUpdatetemplate` - Update the template used by the pool.

### replicas

* `replicapoolReplicasDelete` - Deletes a replica from the pool.
* `replicapoolReplicasGet` - Gets information about a specific replica.
* `replicapoolReplicasList` - Lists all replicas in a pool.
* `replicapoolReplicasRestart` - Restarts a replica in a pool.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
