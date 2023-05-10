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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesAuthorizeddomainsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RunNamespacesAuthorizeddomainsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunNamespacesAuthorizeddomainsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->pageSize = 847252;
    $request->pageToken = 'vel';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new RunNamespacesAuthorizeddomainsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->namespaces->runNamespacesAuthorizeddomainsList($request, $requestSecurity);

    if ($response->listAuthorizedDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [namespaces](docs/namespaces/README.md)

* [runNamespacesAuthorizeddomainsList](docs/namespaces/README.md#runnamespacesauthorizeddomainslist) - List authorized domains.
* [runNamespacesConfigurationsList](docs/namespaces/README.md#runnamespacesconfigurationslist) - List configurations.
* [runNamespacesDomainmappingsCreate](docs/namespaces/README.md#runnamespacesdomainmappingscreate) - Create a new domain mapping.
* [runNamespacesDomainmappingsDelete](docs/namespaces/README.md#runnamespacesdomainmappingsdelete) - Delete a domain mapping.
* [runNamespacesDomainmappingsGet](docs/namespaces/README.md#runnamespacesdomainmappingsget) - Get information about a domain mapping.
* [runNamespacesDomainmappingsList](docs/namespaces/README.md#runnamespacesdomainmappingslist) - List all domain mappings.
* [runNamespacesExecutionsCancel](docs/namespaces/README.md#runnamespacesexecutionscancel) - Cancel an execution.
* [runNamespacesExecutionsList](docs/namespaces/README.md#runnamespacesexecutionslist) - List executions.
* [runNamespacesJobsCreate](docs/namespaces/README.md#runnamespacesjobscreate) - Create a job.
* [runNamespacesJobsDelete](docs/namespaces/README.md#runnamespacesjobsdelete) - Delete a job.
* [runNamespacesJobsList](docs/namespaces/README.md#runnamespacesjobslist) - List jobs.
* [runNamespacesJobsReplaceJob](docs/namespaces/README.md#runnamespacesjobsreplacejob) - Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [runNamespacesJobsRun](docs/namespaces/README.md#runnamespacesjobsrun) - Trigger creation of a new execution of this job.
* [runNamespacesRevisionsList](docs/namespaces/README.md#runnamespacesrevisionslist) - List revisions.
* [runNamespacesRoutesList](docs/namespaces/README.md#runnamespacesrouteslist) - List routes.
* [runNamespacesServicesCreate](docs/namespaces/README.md#runnamespacesservicescreate) - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* [runNamespacesServicesDelete](docs/namespaces/README.md#runnamespacesservicesdelete) - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* [runNamespacesServicesGet](docs/namespaces/README.md#runnamespacesservicesget) - Gets information about a service.
* [runNamespacesServicesList](docs/namespaces/README.md#runnamespacesserviceslist) - Lists services for the given project and region.
* [runNamespacesServicesReplaceService](docs/namespaces/README.md#runnamespacesservicesreplaceservice) - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [runNamespacesTasksGet](docs/namespaces/README.md#runnamespacestasksget) - Get information about a task.
* [runNamespacesTasksList](docs/namespaces/README.md#runnamespacestaskslist) - List tasks.

### [projects](docs/projects/README.md)

* [runProjectsLocationsAuthorizeddomainsList](docs/projects/README.md#runprojectslocationsauthorizeddomainslist) - List authorized domains.
* [runProjectsLocationsConfigurationsList](docs/projects/README.md#runprojectslocationsconfigurationslist) - List configurations.
* [runProjectsLocationsDomainmappingsCreate](docs/projects/README.md#runprojectslocationsdomainmappingscreate) - Create a new domain mapping.
* [runProjectsLocationsDomainmappingsList](docs/projects/README.md#runprojectslocationsdomainmappingslist) - List all domain mappings.
* [runProjectsLocationsList](docs/projects/README.md#runprojectslocationslist) - Lists information about the supported locations for this service.
* [runProjectsLocationsRevisionsList](docs/projects/README.md#runprojectslocationsrevisionslist) - List revisions.
* [runProjectsLocationsRoutesList](docs/projects/README.md#runprojectslocationsrouteslist) - List routes.
* [runProjectsLocationsServicesCreate](docs/projects/README.md#runprojectslocationsservicescreate) - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* [runProjectsLocationsServicesDelete](docs/projects/README.md#runprojectslocationsservicesdelete) - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* [runProjectsLocationsServicesGet](docs/projects/README.md#runprojectslocationsservicesget) - Gets information about a service.
* [runProjectsLocationsServicesGetIamPolicy](docs/projects/README.md#runprojectslocationsservicesgetiampolicy) - Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
* [runProjectsLocationsServicesList](docs/projects/README.md#runprojectslocationsserviceslist) - Lists services for the given project and region.
* [runProjectsLocationsServicesReplaceService](docs/projects/README.md#runprojectslocationsservicesreplaceservice) - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* [runProjectsLocationsServicesSetIamPolicy](docs/projects/README.md#runprojectslocationsservicessetiampolicy) - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* [runProjectsLocationsServicesTestIamPermissions](docs/projects/README.md#runprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
