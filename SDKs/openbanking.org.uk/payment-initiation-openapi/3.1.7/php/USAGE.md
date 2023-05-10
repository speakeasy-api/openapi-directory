<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticPaymentConsentsJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4Data;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataAuthorisation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataInitiation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataInitiationCreditorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBPostalAddress6;
use \OpenAPI\OpenAPI\Models\Shared\OBAddressTypeCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataInitiationDebtorAccount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataInitiationInstructedAmount;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataInitiationRemittanceInformation;
use \OpenAPI\OpenAPI\Models\Shared\OBWriteDomesticConsent4DataReadRefundAccountEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1AppliedAuthenticationApproachEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBSCASupportData1RequestedSCAExemptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1DeliveryAddress;
use \OpenAPI\OpenAPI\Models\Shared\OBRisk1PaymentContextCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomesticPaymentConsentsJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomesticPaymentConsentsJsonRequest();
    $request->authorization = 'corrupti';
    $request->obWriteDomesticConsent4 = new OBWriteDomesticConsent4();
    $request->obWriteDomesticConsent4->data = new OBWriteDomesticConsent4Data();
    $request->obWriteDomesticConsent4->data->authorisation = new OBWriteDomesticConsent4DataAuthorisation();
    $request->obWriteDomesticConsent4->data->authorisation->authorisationType = OBWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum::SINGLE;
    $request->obWriteDomesticConsent4->data->authorisation->completionDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-24T16:27:50.833Z');
    $request->obWriteDomesticConsent4->data->initiation = new OBWriteDomesticConsent4DataInitiation();
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount = new OBWriteDomesticConsent4DataInitiationCreditorAccount();
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->identification = 'unde';
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->name = 'Johnnie Stamm';
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->schemeName = 'deserunt';
    $request->obWriteDomesticConsent4->data->initiation->creditorAccount->secondaryIdentification = 'suscipit';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress = new OBPostalAddress6();
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->addressLine = [
        'magnam',
        'debitis',
    ];
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->addressType = OBAddressTypeCodeEnum::BUSINESS;
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->buildingNumber = 'delectus';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->country = 'Ethiopia';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->countrySubDivision = 'suscipit';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->department = 'molestiae';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->postCode = '85453-9803';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->streetName = 'veritatis';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->subDepartment = 'deserunt';
    $request->obWriteDomesticConsent4->data->initiation->creditorPostalAddress->townName = 'perferendis';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount = new OBWriteDomesticConsent4DataInitiationDebtorAccount();
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->identification = 'ipsam';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->name = 'Timmy Satterfield';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->schemeName = 'at';
    $request->obWriteDomesticConsent4->data->initiation->debtorAccount->secondaryIdentification = 'maiores';
    $request->obWriteDomesticConsent4->data->initiation->endToEndIdentification = 'molestiae';
    $request->obWriteDomesticConsent4->data->initiation->instructedAmount = new OBWriteDomesticConsent4DataInitiationInstructedAmount();
    $request->obWriteDomesticConsent4->data->initiation->instructedAmount->amount = 'quod';
    $request->obWriteDomesticConsent4->data->initiation->instructedAmount->currency = 'quod';
    $request->obWriteDomesticConsent4->data->initiation->instructionIdentification = 'esse';
    $request->obWriteDomesticConsent4->data->initiation->localInstrument = 'totam';
    $request->obWriteDomesticConsent4->data->initiation->remittanceInformation = new OBWriteDomesticConsent4DataInitiationRemittanceInformation();
    $request->obWriteDomesticConsent4->data->initiation->remittanceInformation->reference = 'porro';
    $request->obWriteDomesticConsent4->data->initiation->remittanceInformation->unstructured = 'dolorum';
    $request->obWriteDomesticConsent4->data->initiation->supplementaryData = [
        'nam' => 'officia',
    ];
    $request->obWriteDomesticConsent4->data->readRefundAccount = OBWriteDomesticConsent4DataReadRefundAccountEnum::YES;
    $request->obWriteDomesticConsent4->data->scaSupportData = new OBSCASupportData1();
    $request->obWriteDomesticConsent4->data->scaSupportData->appliedAuthenticationApproach = OBSCASupportData1AppliedAuthenticationApproachEnum::CA;
    $request->obWriteDomesticConsent4->data->scaSupportData->referencePaymentOrderId = 'deleniti';
    $request->obWriteDomesticConsent4->data->scaSupportData->requestedSCAExemptionType = OBSCASupportData1RequestedSCAExemptionTypeEnum::PARTY_TO_PARTY;
    $request->obWriteDomesticConsent4->risk = new OBRisk1();
    $request->obWriteDomesticConsent4->risk->deliveryAddress = new OBRisk1DeliveryAddress();
    $request->obWriteDomesticConsent4->risk->deliveryAddress->addressLine = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->obWriteDomesticConsent4->risk->deliveryAddress->buildingNumber = 'modi';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->country = 'Cocos (Keeling) Islands';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->countrySubDivision = 'impedit';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->postCode = '42510-3616';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->streetName = 'dolor';
    $request->obWriteDomesticConsent4->risk->deliveryAddress->townName = 'natus';
    $request->obWriteDomesticConsent4->risk->merchantCategoryCode = 'laboriosam';
    $request->obWriteDomesticConsent4->risk->merchantCustomerIdentification = 'hic';
    $request->obWriteDomesticConsent4->risk->paymentContextCode = OBRisk1PaymentContextCodeEnum::PARTY_TO_PARTY;
    $request->xCustomerUserAgent = 'fuga';
    $request->xFapiAuthDate = 'in';
    $request->xFapiCustomerIpAddress = 'corporis';
    $request->xFapiInteractionId = 'iste';
    $request->xIdempotencyKey = 'iure';
    $request->xJwsSignature = 'saepe';

    $requestSecurity = new CreateDomesticPaymentConsentsJsonSecurity();
    $requestSecurity->tppoAuth2Security = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->domesticPayments->createDomesticPaymentConsentsJson($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->