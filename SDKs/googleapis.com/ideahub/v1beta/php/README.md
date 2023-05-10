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
use \OpenAPI\OpenAPI\Models\Operations\IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1betaIdeaActivity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleSearchIdeahubV1betaIdeaActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleSearchIdeahubV1betaIdeaActivity = new GoogleSearchIdeahubV1betaIdeaActivity();
    $request->googleSearchIdeahubV1betaIdeaActivity->ideas = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->googleSearchIdeahubV1betaIdeaActivity->name = 'Johnnie Stamm';
    $request->googleSearchIdeahubV1betaIdeaActivity->topics = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->googleSearchIdeahubV1betaIdeaActivity->type = GoogleSearchIdeahubV1betaIdeaActivityTypeEnum::POST_UNPUBLISHED;
    $request->googleSearchIdeahubV1betaIdeaActivity->uri = 'http://whirlwind-diver.info';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->key = 'iusto';
    $request->oauthToken = 'excepturi';
    $request->parent = 'nisi';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'ab';

    $response = $sdk->platforms->ideahubPlatformsPropertiesIdeaActivitiesCreate($request);

    if ($response->googleSearchIdeahubV1betaIdeaActivity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [platforms](docs/platforms/README.md)

* [ideahubPlatformsPropertiesIdeaActivitiesCreate](docs/platforms/README.md#ideahubplatformspropertiesideaactivitiescreate) - Creates an idea activity entry.
* [ideahubPlatformsPropertiesIdeasList](docs/platforms/README.md#ideahubplatformspropertiesideaslist) - List ideas for a given Creator and filter and sort options.
* [ideahubPlatformsPropertiesLocalesList](docs/platforms/README.md#ideahubplatformspropertieslocaleslist) - Returns which locales ideas are available in for a given Creator.
* [ideahubPlatformsPropertiesTopicStatesPatch](docs/platforms/README.md#ideahubplatformspropertiestopicstatespatch) - Update a topic state resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
