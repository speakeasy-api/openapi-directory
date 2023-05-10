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
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActionOrganizationActivityListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionOrganizationActivityListRequest();
    $request->id = '89bd9d8d-69a6-474e-8f46-7cc8796ed151';

    $response = $sdk->action->getActionOrganizationActivityList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [action](docs/action/README.md)

* [getActionOrganizationActivityList](docs/action/README.md#getactionorganizationactivitylist) - Get the activity stream of an organization
* [getActionOrganizationActivityListHtml](docs/action/README.md#getactionorganizationactivitylisthtml) - Get the activity stream of an organization, HTML format
* [getActionOrganizationAutocomplete](docs/action/README.md#getactionorganizationautocomplete) - Get names of organizations that match a query string
* [getActionOrganizationFollowerCount](docs/action/README.md#getactionorganizationfollowercount) - Get number of followers of an organization
* [getActionOrganizationFollowerList](docs/action/README.md#getactionorganizationfollowerlist) - Get users following an organization
* [getActionOrganizationList](docs/action/README.md#getactionorganizationlist) - Get names of all organizations
* [getActionOrganizationListForUser](docs/action/README.md#getactionorganizationlistforuser) - Get organizations that a user has a given permission for
* [getActionOrganizationRevisionList](docs/action/README.md#getactionorganizationrevisionlist) - Get organization revisions
* [getActionOrganizationShow](docs/action/README.md#getactionorganizationshow) - Get details of a specific organization
* [getActionPackageActivityList](docs/action/README.md#getactionpackageactivitylist) - Get the activity stream of a package (dataset)
* [getActionPackageActivityListHtml](docs/action/README.md#getactionpackageactivitylisthtml) - Get the activity stream of a package (dataset), HTML format
* [getActionPackageAutocomplete](docs/action/README.md#getactionpackageautocomplete) - Find packages (datasets) matching a query
* [getActionPackageList](docs/action/README.md#getactionpackagelist) - Get a list of all packages (datasets)
* [getActionPackageRelationshipsList](docs/action/README.md#getactionpackagerelationshipslist) - Get package (dataset) relationships
* [getActionPackageRevisionList](docs/action/README.md#getactionpackagerevisionlist) - Get list of revisions for a package (dataset)
* [getActionPackageSearch](docs/action/README.md#getactionpackagesearch) - Find packages (datasets) matching query terms
* [getActionPackageShow](docs/action/README.md#getactionpackageshow) - Get metadata about one specific package (dataset)
* [getActionRelatedList](docs/action/README.md#getactionrelatedlist) - Gets items related to a package (dataset)
* [getActionResourceSearch](docs/action/README.md#getactionresourcesearch) - Find resources
* [getActionResourceShow](docs/action/README.md#getactionresourceshow) - Get metadata for a specific resource
* [getActionStatusShow](docs/action/README.md#getactionstatusshow) - Get the site status
* [getActionTagList](docs/action/README.md#getactiontaglist) - Get a list of tags
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
