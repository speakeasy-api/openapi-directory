# marketplaceprivateauction

### Available Operations

* [adexchangebuyerMarketplaceprivateauctionUpdateproposal](#adexchangebuyermarketplaceprivateauctionupdateproposal) - Update a given private auction proposal

## adexchangebuyerMarketplaceprivateauctionUpdateproposal

Update a given private auction proposal

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePrivateAuctionProposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\MarketplaceNote;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest();
    $request->updatePrivateAuctionProposalRequest = new UpdatePrivateAuctionProposalRequest();
    $request->updatePrivateAuctionProposalRequest->externalDealId = 'asperiores';
    $request->updatePrivateAuctionProposalRequest->note = new MarketplaceNote();
    $request->updatePrivateAuctionProposalRequest->note->creatorRole = 'earum';
    $request->updatePrivateAuctionProposalRequest->note->dealId = 'modi';
    $request->updatePrivateAuctionProposalRequest->note->kind = 'iste';
    $request->updatePrivateAuctionProposalRequest->note->note = 'dolorum';
    $request->updatePrivateAuctionProposalRequest->note->noteId = 'deleniti';
    $request->updatePrivateAuctionProposalRequest->note->proposalId = 'pariatur';
    $request->updatePrivateAuctionProposalRequest->note->proposalRevisionNumber = 'provident';
    $request->updatePrivateAuctionProposalRequest->note->timestampMs = 'nobis';
    $request->updatePrivateAuctionProposalRequest->proposalRevisionNumber = 'libero';
    $request->updatePrivateAuctionProposalRequest->updateAction = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->fields = 'quaerat';
    $request->key = 'quos';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->privateAuctionId = 'dolorem';
    $request->quotaUser = 'dolorem';
    $request->userIp = 'dolor';

    $requestSecurity = new AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketplaceprivateauction->adexchangebuyerMarketplaceprivateauctionUpdateproposal($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
