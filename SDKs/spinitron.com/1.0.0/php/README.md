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
use \OpenAPI\OpenAPI\Models\Operations\GetPersonasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPersonasRequest();
    $request->count = 548814;
    $request->expand = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->fields = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->name = 'Rick Kertzmann';
    $request->page = 56713;

    $response = $sdk->persona->getPersonas($request);

    if ($response->getPersonas200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [persona](docs/persona/README.md)

* [getPersonas](docs/persona/README.md#getpersonas) - Get Personas
* [getPersonasId](docs/persona/README.md#getpersonasid) - Get Persona by id

### [playlist](docs/playlist/README.md)

* [getPlaylists](docs/playlist/README.md#getplaylists) - Returns playlists optionally filtered by {start} and/or {end} datetimes
* [getPlaylistsId](docs/playlist/README.md#getplaylistsid) - Get a Playlist by id

### [show](docs/show/README.md)

* [getShows](docs/show/README.md#getshows) - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
* [getShowsId](docs/show/README.md#getshowsid) - Get a Show by id

### [spin](docs/spin/README.md)

* [getSpins](docs/spin/README.md#getspins) - Returns spins optionally filtered by {start} and/or {end} datetimes
* [getSpinsId](docs/spin/README.md#getspinsid) - Get a Spin by id
* [postSpins](docs/spin/README.md#postspins) - Log a Spin
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
