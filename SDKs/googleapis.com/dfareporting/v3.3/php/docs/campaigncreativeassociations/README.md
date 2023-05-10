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
    $request->campaignCreativeAssociation->creativeId = 'dolorum';
    $request->campaignCreativeAssociation->kind = 'necessitatibus';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequatur';
    $request->campaignId = 'nemo';
    $request->fields = 'molestiae';
    $request->key = 'itaque';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->profileId = 'corrupti';
    $request->quotaUser = 'aperiam';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'accusamus';

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
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatem';
    $request->campaignId = 'velit';
    $request->fields = 'dolor';
    $request->key = 'sunt';
    $request->maxResults = 953676;
    $request->oauthToken = 'dolor';
    $request->pageToken = 'occaecati';
    $request->prettyPrint = false;
    $request->profileId = 'atque';
    $request->quotaUser = 'beatae';
    $request->sortOrder = DfareportingCampaignCreativeAssociationsListSortOrderEnum::DESCENDING;
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'minus';

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
