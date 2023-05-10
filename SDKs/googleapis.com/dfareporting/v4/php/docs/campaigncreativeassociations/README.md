# campaignCreativeAssociations

### Available Operations

* [dfareportingCampaignCreativeAssociationsInsert](#dfareportingcampaigncreativeassociationsinsert) - Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
* [dfareportingCampaignCreativeAssociationsList](#dfareportingcampaigncreativeassociationslist) - Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

## dfareportingCampaignCreativeAssociationsInsert

Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignCreativeAssociationsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignCreativeAssociation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignCreativeAssociationsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCampaignCreativeAssociationsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->campaignCreativeAssociation = new CampaignCreativeAssociation();
    $request->campaignCreativeAssociation->creativeId = 'repellat';
    $request->campaignCreativeAssociation->kind = 'nulla';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusamus';
    $request->campaignId = 'doloremque';
    $request->fields = 'nisi';
    $request->key = 'rerum';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->profileId = 'voluptates';
    $request->quotaUser = 'non';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new DfareportingCampaignCreativeAssociationsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaignCreativeAssociations->dfareportingCampaignCreativeAssociationsInsert($request, $requestSecurity);

    if ($response->campaignCreativeAssociation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingCampaignCreativeAssociationsList

Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignCreativeAssociationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignCreativeAssociationsListSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignCreativeAssociationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingCampaignCreativeAssociationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->campaignId = 'eligendi';
    $request->fields = 'quae';
    $request->key = 'officiis';
    $request->maxResults = 100002;
    $request->oauthToken = 'architecto';
    $request->pageToken = 'enim';
    $request->prettyPrint = false;
    $request->profileId = 'optio';
    $request->quotaUser = 'rem';
    $request->sortOrder = DfareportingCampaignCreativeAssociationsListSortOrderEnum::ASCENDING;
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DfareportingCampaignCreativeAssociationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->campaignCreativeAssociations->dfareportingCampaignCreativeAssociationsList($request, $requestSecurity);

    if ($response->campaignCreativeAssociationsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
