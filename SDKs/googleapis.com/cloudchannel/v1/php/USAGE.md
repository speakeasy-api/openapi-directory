<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ChannelPartnerRepricingConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1PercentageAdjustment;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDecimal;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ConditionalOverride;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1ConditionalOverrideRebillingBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingCondition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1SkuGroupCondition;
use \OpenAPI\OpenAPI\Models\Shared\GoogleTypeDate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfigEntitlementGranularity;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput = new GoogleCloudChannelV1ChannelPartnerRepricingConfigInput();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig = new GoogleCloudChannelV1RepricingConfig();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->adjustment = new GoogleCloudChannelV1RepricingAdjustment();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment = new GoogleCloudChannelV1PercentageAdjustment();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment->percentage = new GoogleTypeDecimal();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->adjustment->percentageAdjustment->percentage->value = 'provident';
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->channelPartnerGranularity = [
        'quibusdam' => 'unde',
        'nulla' => 'corrupti',
        'illum' => 'vel',
    ];
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->conditionalOverrides = [
        new GoogleCloudChannelV1ConditionalOverride(),
        new GoogleCloudChannelV1ConditionalOverride(),
        new GoogleCloudChannelV1ConditionalOverride(),
    ];
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth = new GoogleTypeDate();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->day = 645894;
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->month = 384382;
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->effectiveInvoiceMonth->year = 437587;
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->entitlementGranularity = new GoogleCloudChannelV1RepricingConfigEntitlementGranularity();
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->entitlementGranularity->entitlement = 'magnam';
    $request->googleCloudChannelV1ChannelPartnerRepricingConfigInput->repricingConfig->rebillingBasis = GoogleCloudChannelV1RepricingConfigRebillingBasisEnum::DIRECT_CUSTOMER_COST;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->parent = 'placeat';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatum';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accounts->cloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreate($request, $requestSecurity);

    if ($response->googleCloudChannelV1ChannelPartnerRepricingConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->