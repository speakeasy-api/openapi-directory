# proposals

### Available Operations

* [adexchangebuyerProposalsGet](#adexchangebuyerproposalsget) - Get a proposal given its id
* [adexchangebuyerProposalsInsert](#adexchangebuyerproposalsinsert) - Create the given list of proposals
* [adexchangebuyerProposalsPatch](#adexchangebuyerproposalspatch) - Update the given proposal. This method supports patch semantics.
* [adexchangebuyerProposalsSearch](#adexchangebuyerproposalssearch) - Search for proposals using pql query
* [adexchangebuyerProposalsSetupcomplete](#adexchangebuyerproposalssetupcomplete) - Update the given proposal to indicate that setup has been completed.
* [adexchangebuyerProposalsUpdate](#adexchangebuyerproposalsupdate) - Update the given proposal

## adexchangebuyerProposalsGet

Get a proposal given its id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerProposalsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'fuga';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->proposalId = 'fugiat';
    $request->quotaUser = 'ut';
    $request->userIp = 'eum';

    $requestSecurity = new AdexchangebuyerProposalsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->proposals->adexchangebuyerProposalsGet($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerProposalsInsert

Create the given list of proposals

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateOrdersRequest;
use \OpenAPI\OpenAPI\Models\Shared\Proposal;
use \OpenAPI\OpenAPI\Models\Shared\Buyer;
use \OpenAPI\OpenAPI\Models\Shared\ContactInformation;
use \OpenAPI\OpenAPI\Models\Shared\PrivateData;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceLabel;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceDealParty;
use \OpenAPI\OpenAPI\Models\Shared\Seller;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerProposalsInsertRequest();
    $request->createOrdersRequest = new CreateOrdersRequest();
    $request->createOrdersRequest->proposals = [
        new Proposal(),
        new Proposal(),
    ];
    $request->createOrdersRequest->webPropertyCode = 'assumenda';
    $request->alt = AltEnum::JSON;
    $request->fields = 'eos';
    $request->key = 'praesentium';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->userIp = 'ipsa';

    $requestSecurity = new AdexchangebuyerProposalsInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->proposals->adexchangebuyerProposalsInsert($request, $requestSecurity);

    if ($response->createOrdersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerProposalsPatch

Update the given proposal. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Proposal;
use \OpenAPI\OpenAPI\Models\Shared\Buyer;
use \OpenAPI\OpenAPI\Models\Shared\ContactInformation;
use \OpenAPI\OpenAPI\Models\Shared\PrivateData;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceLabel;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceDealParty;
use \OpenAPI\OpenAPI\Models\Shared\Seller;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsPatchUpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerProposalsPatchRequest();
    $request->proposal = new Proposal();
    $request->proposal->billedBuyer = new Buyer();
    $request->proposal->billedBuyer->accountId = 'id';
    $request->proposal->buyer = new Buyer();
    $request->proposal->buyer->accountId = 'quidem';
    $request->proposal->buyerContacts = [
        new ContactInformation(),
    ];
    $request->proposal->buyerPrivateData = new PrivateData();
    $request->proposal->buyerPrivateData->referenceId = 'quo';
    $request->proposal->buyerPrivateData->referencePayload = 'illum';
    $request->proposal->dbmAdvertiserIds = [
        'fuga',
        'eius',
        'eos',
        'voluptas',
    ];
    $request->proposal->hasBuyerSignedOff = false;
    $request->proposal->hasSellerSignedOff = false;
    $request->proposal->inventorySource = 'ab';
    $request->proposal->isRenegotiating = false;
    $request->proposal->isSetupComplete = false;
    $request->proposal->kind = 'cupiditate';
    $request->proposal->labels = [
        new MarketplaceLabel(),
    ];
    $request->proposal->lastUpdaterOrCommentorRole = 'tempora';
    $request->proposal->name = 'Roberto Collier';
    $request->proposal->negotiationId = 'esse';
    $request->proposal->originatorRole = 'recusandae';
    $request->proposal->privateAuctionId = 'aperiam';
    $request->proposal->proposalId = 'distinctio';
    $request->proposal->proposalState = 'quod';
    $request->proposal->revisionNumber = 'dignissimos';
    $request->proposal->revisionTimeMs = 'inventore';
    $request->proposal->seller = new Seller();
    $request->proposal->seller->accountId = 'nihil';
    $request->proposal->seller->subAccountId = 'totam';
    $request->proposal->sellerContacts = [
        new ContactInformation(),
        new ContactInformation(),
        new ContactInformation(),
        new ContactInformation(),
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'aliquam';
    $request->key = 'odio';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->proposalId = 'commodi';
    $request->quotaUser = 'sapiente';
    $request->revisionNumber = 'dolores';
    $request->updateAction = AdexchangebuyerProposalsPatchUpdateActionEnum::PROPOSE_AND_ACCEPT;
    $request->userIp = 'molestiae';

    $requestSecurity = new AdexchangebuyerProposalsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->proposals->adexchangebuyerProposalsPatch($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerProposalsSearch

Search for proposals using pql query

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerProposalsSearchRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'accusantium';
    $request->key = 'porro';
    $request->oauthToken = 'eum';
    $request->pqlQuery = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->userIp = 'consequuntur';

    $requestSecurity = new AdexchangebuyerProposalsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->proposals->adexchangebuyerProposalsSearch($request, $requestSecurity);

    if ($response->getOrdersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerProposalsSetupcomplete

Update the given proposal to indicate that setup has been completed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsSetupcompleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsSetupcompleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerProposalsSetupcompleteRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'deleniti';
    $request->key = 'fugit';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->proposalId = 'mollitia';
    $request->quotaUser = 'incidunt';
    $request->userIp = 'atque';

    $requestSecurity = new AdexchangebuyerProposalsSetupcompleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->proposals->adexchangebuyerProposalsSetupcomplete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adexchangebuyerProposalsUpdate

Update the given proposal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Proposal;
use \OpenAPI\OpenAPI\Models\Shared\Buyer;
use \OpenAPI\OpenAPI\Models\Shared\ContactInformation;
use \OpenAPI\OpenAPI\Models\Shared\PrivateData;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceLabel;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceDealParty;
use \OpenAPI\OpenAPI\Models\Shared\Seller;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsUpdateUpdateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerProposalsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerProposalsUpdateRequest();
    $request->proposal = new Proposal();
    $request->proposal->billedBuyer = new Buyer();
    $request->proposal->billedBuyer->accountId = 'explicabo';
    $request->proposal->buyer = new Buyer();
    $request->proposal->buyer->accountId = 'minima';
    $request->proposal->buyerContacts = [
        new ContactInformation(),
        new ContactInformation(),
    ];
    $request->proposal->buyerPrivateData = new PrivateData();
    $request->proposal->buyerPrivateData->referenceId = 'fugit';
    $request->proposal->buyerPrivateData->referencePayload = 'sapiente';
    $request->proposal->dbmAdvertiserIds = [
        'ratione',
    ];
    $request->proposal->hasBuyerSignedOff = false;
    $request->proposal->hasSellerSignedOff = false;
    $request->proposal->inventorySource = 'explicabo';
    $request->proposal->isRenegotiating = false;
    $request->proposal->isSetupComplete = false;
    $request->proposal->kind = 'saepe';
    $request->proposal->labels = [
        new MarketplaceLabel(),
        new MarketplaceLabel(),
        new MarketplaceLabel(),
    ];
    $request->proposal->lastUpdaterOrCommentorRole = 'atque';
    $request->proposal->name = 'Tamara Vandervort IV';
    $request->proposal->negotiationId = 'quod';
    $request->proposal->originatorRole = 'nam';
    $request->proposal->privateAuctionId = 'vero';
    $request->proposal->proposalId = 'aliquid';
    $request->proposal->proposalState = 'quasi';
    $request->proposal->revisionNumber = 'saepe';
    $request->proposal->revisionTimeMs = 'vel';
    $request->proposal->seller = new Seller();
    $request->proposal->seller->accountId = 'harum';
    $request->proposal->seller->subAccountId = 'molestiae';
    $request->proposal->sellerContacts = [
        new ContactInformation(),
        new ContactInformation(),
        new ContactInformation(),
    ];
    $request->alt = AltEnum::JSON;
    $request->fields = 'occaecati';
    $request->key = 'minima';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->proposalId = 'eligendi';
    $request->quotaUser = 'sit';
    $request->revisionNumber = 'culpa';
    $request->updateAction = AdexchangebuyerProposalsUpdateUpdateActionEnum::UNKNOWN_ACTION;
    $request->userIp = 'adipisci';

    $requestSecurity = new AdexchangebuyerProposalsUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->proposals->adexchangebuyerProposalsUpdate($request, $requestSecurity);

    if ($response->proposal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
