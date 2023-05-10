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
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\YoutubeAnalyticsGroupItemsDeleteSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new YoutubeAnalyticsGroupItemsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->id = 'd8d69a67-4e0f-4467-8c87-96ed151a05df';
    $request->key = 'quo';
    $request->oauthToken = 'odit';
    $request->onBehalfOfContentOwner = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new YoutubeAnalyticsGroupItemsDeleteSecurity();
    $requestSecurity->option1 = new YoutubeAnalyticsGroupItemsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupItems->youtubeAnalyticsGroupItemsDelete($request, $requestSecurity);

    if ($response->emptyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [groupItems](docs/groupitems/README.md)

* [youtubeAnalyticsGroupItemsDelete](docs/groupitems/README.md#youtubeanalyticsgroupitemsdelete) - Removes an item from a group.
* [youtubeAnalyticsGroupItemsInsert](docs/groupitems/README.md#youtubeanalyticsgroupitemsinsert) - Creates a group item.
* [youtubeAnalyticsGroupItemsList](docs/groupitems/README.md#youtubeanalyticsgroupitemslist) - Returns a collection of group items that match the API request parameters.

### [groups](docs/groups/README.md)

* [youtubeAnalyticsGroupsDelete](docs/groups/README.md#youtubeanalyticsgroupsdelete) - Deletes a group.
* [youtubeAnalyticsGroupsInsert](docs/groups/README.md#youtubeanalyticsgroupsinsert) - Creates a group.
* [youtubeAnalyticsGroupsList](docs/groups/README.md#youtubeanalyticsgroupslist) - Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
* [youtubeAnalyticsGroupsUpdate](docs/groups/README.md#youtubeanalyticsgroupsupdate) - Modifies a group. For example, you could change a group's title.

### [reports](docs/reports/README.md)

* [youtubeAnalyticsReportsQuery](docs/reports/README.md#youtubeanalyticsreportsquery) - Retrieve your YouTube Analytics reports.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
