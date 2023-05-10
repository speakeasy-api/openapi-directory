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
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BrandInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IapProjectsBrandsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IapProjectsBrandsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->brandInput = new BrandInput();
    $request->brandInput->applicationTitle = 'provident';
    $request->brandInput->supportEmail = 'distinctio';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new IapProjectsBrandsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->iapProjectsBrandsCreate($request, $requestSecurity);

    if ($response->brand !== null) {
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

* [iapProjectsBrandsCreate](docs/projects/README.md#iapprojectsbrandscreate) - Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
* [iapProjectsBrandsIdentityAwareProxyClientsCreate](docs/projects/README.md#iapprojectsbrandsidentityawareproxyclientscreate) - Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
* [iapProjectsBrandsIdentityAwareProxyClientsList](docs/projects/README.md#iapprojectsbrandsidentityawareproxyclientslist) - Lists the existing clients for the brand.
* [iapProjectsBrandsIdentityAwareProxyClientsResetSecret](docs/projects/README.md#iapprojectsbrandsidentityawareproxyclientsresetsecret) - Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
* [iapProjectsBrandsList](docs/projects/README.md#iapprojectsbrandslist) - Lists the existing brands for the project.
* [iapProjectsIapTunnelLocationsDestGroupsCreate](docs/projects/README.md#iapprojectsiaptunnellocationsdestgroupscreate) - Creates a new TunnelDestGroup.
* [iapProjectsIapTunnelLocationsDestGroupsDelete](docs/projects/README.md#iapprojectsiaptunnellocationsdestgroupsdelete) - Deletes a TunnelDestGroup.
* [iapProjectsIapTunnelLocationsDestGroupsGet](docs/projects/README.md#iapprojectsiaptunnellocationsdestgroupsget) - Retrieves an existing TunnelDestGroup.
* [iapProjectsIapTunnelLocationsDestGroupsList](docs/projects/README.md#iapprojectsiaptunnellocationsdestgroupslist) - Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
* [iapProjectsIapTunnelLocationsDestGroupsPatch](docs/projects/README.md#iapprojectsiaptunnellocationsdestgroupspatch) - Updates a TunnelDestGroup.

### [v1](docs/v1/README.md)

* [iapGetIamPolicy](docs/v1/README.md#iapgetiampolicy) - Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [iapGetIapSettings](docs/v1/README.md#iapgetiapsettings) - Gets the IAP settings on a particular IAP protected resource.
* [iapSetIamPolicy](docs/v1/README.md#iapsetiampolicy) - Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [iapTestIamPermissions](docs/v1/README.md#iaptestiampermissions) - Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [iapUpdateIapSettings](docs/v1/README.md#iapupdateiapsettings) - Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
