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


### projects

* `osconfigProjectsGuestPoliciesCreate` - Create an OS Config guest policy.
* `osconfigProjectsGuestPoliciesList` - Get a page of OS Config guest policies.
* `osconfigProjectsPatchDeploymentsCreate` - Create an OS Config patch deployment.
* `osconfigProjectsPatchDeploymentsDelete` - Delete an OS Config patch deployment.
* `osconfigProjectsPatchDeploymentsList` - Get a page of OS Config patch deployments.
* `osconfigProjectsPatchDeploymentsPatch` - Update an OS Config patch deployment.
* `osconfigProjectsPatchDeploymentsPause` - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* `osconfigProjectsPatchDeploymentsResume` - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* `osconfigProjectsPatchJobsCancel` - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* `osconfigProjectsPatchJobsExecute` - Patch VM instances by creating and running a patch job.
* `osconfigProjectsPatchJobsGet` - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* `osconfigProjectsPatchJobsInstanceDetailsList` - Get a list of instance details for a given patch job.
* `osconfigProjectsPatchJobsList` - Get a list of patch jobs.
* `osconfigProjectsZonesInstancesLookupEffectiveGuestPolicy` - Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
