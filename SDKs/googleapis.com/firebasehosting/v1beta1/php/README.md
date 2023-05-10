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
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SiteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingProjectsSitesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingProjectsSitesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->siteInput = new SiteInput();
    $request->siteInput->appId = 'provident';
    $request->siteInput->labels = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->oauthToken = 'debitis';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->siteId = 'tempora';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new FirebasehostingProjectsSitesCreateSecurity();
    $requestSecurity->option1 = new FirebasehostingProjectsSitesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->firebasehostingProjectsSitesCreate($request, $requestSecurity);

    if ($response->site !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [firebasehostingProjectsSitesCreate](docs/projects/README.md#firebasehostingprojectssitescreate) - Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
* [firebasehostingProjectsSitesList](docs/projects/README.md#firebasehostingprojectssiteslist) - Lists each Hosting Site associated with the specified parent Firebase project.

### [sites](docs/sites/README.md)

* [firebasehostingSitesChannelsCreate](docs/sites/README.md#firebasehostingsiteschannelscreate) - Creates a new channel in the specified site.
* [firebasehostingSitesChannelsList](docs/sites/README.md#firebasehostingsiteschannelslist) - Lists the channels for the specified site. All sites have a default `live` channel.
* [firebasehostingSitesDomainsCreate](docs/sites/README.md#firebasehostingsitesdomainscreate) - Creates a domain mapping on the specified site.
* [firebasehostingSitesDomainsList](docs/sites/README.md#firebasehostingsitesdomainslist) - Lists the domains for the specified site.
* [firebasehostingSitesDomainsUpdate](docs/sites/README.md#firebasehostingsitesdomainsupdate) - Updates the specified domain mapping, creating the mapping as if it does not exist.
* [firebasehostingSitesReleasesCreate](docs/sites/README.md#firebasehostingsitesreleasescreate) - Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
* [firebasehostingSitesReleasesList](docs/sites/README.md#firebasehostingsitesreleaseslist) - Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
* [firebasehostingSitesVersionsClone](docs/sites/README.md#firebasehostingsitesversionsclone) - Creates a new version on the specified target site using the content of the specified version.
* [firebasehostingSitesVersionsCreate](docs/sites/README.md#firebasehostingsitesversionscreate) - Creates a new version for the specified site.
* [firebasehostingSitesVersionsDelete](docs/sites/README.md#firebasehostingsitesversionsdelete) - Deletes the specified version.
* [firebasehostingSitesVersionsFilesList](docs/sites/README.md#firebasehostingsitesversionsfileslist) - Lists the remaining files to be uploaded for the specified version.
* [firebasehostingSitesVersionsGet](docs/sites/README.md#firebasehostingsitesversionsget) - Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
* [firebasehostingSitesVersionsList](docs/sites/README.md#firebasehostingsitesversionslist) - Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
* [firebasehostingSitesVersionsPatch](docs/sites/README.md#firebasehostingsitesversionspatch) -  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
* [firebasehostingSitesVersionsPopulateFiles](docs/sites/README.md#firebasehostingsitesversionspopulatefiles) -  Adds content files to the specified version. Each file must be under 2 GB.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
