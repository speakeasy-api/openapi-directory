# accountInformationServiceAIS

## Overview

The Account Information Service (AIS) offers the following services:
  * Transaction reports for a given account or card account including balances if applicable
  * Balances of a given account or card account
  * A list of available accounts or card account
  * Account details of a given account or card account or of the list of all accessible accounts or card account  relative to a granted consent


### Available Operations

* [createConsent](#createconsent) - Create consent
* [deleteConsent](#deleteconsent) - Delete Consent
* [getAccountList](#getaccountlist) - Read account list
* [getBalances](#getbalances) - Read balance
* [getConsentAuthorisation](#getconsentauthorisation) - Get consent authorisation sub-resources request
* [getConsentInformation](#getconsentinformation) - Get consent request
* [getConsentScaStatus](#getconsentscastatus) - Read the SCA status of the consent authorisation
* [getConsentStatus](#getconsentstatus) - Consent status request
* [getTransactionDetails](#gettransactiondetails) - Read transaction details
* [getTransactionList](#gettransactionlist) - Read transaction list of an account
* [readAccountDetails](#readaccountdetails) - Read account details
* [startConsentAuthorisation](#startconsentauthorisation) - Start the authorisation process for a consent
* [updateConsentsPsuData](#updateconsentspsudata) - Update PSU Data for consents

## createConsent

This method create a consent resource, defining access rights to dedicated accounts of 
a given PSU-ID. These accounts are addressed explicitly in the method as 
parameters as a core function.

**Side Effects**
When this consent request is a request where the "recurringIndicator" equals "true",
and if it exists already a former consent for recurring access on account information 
for the addressed PSU, then the former consent automatically expires as soon as the new 
consent request is authorised by the PSU.

Optional Extension:
As an option, an ASPSP might optionally accept a specific access right on the access on all PSD2 related services for all available accounts.

As another option an ASPSP might optionally also accept a command, where only access rights are inserted without mentioning the addressed account. 
The relation to accounts is then handled afterwards between PSU and ASPSP. 
This option is not supported for the Embedded SCA Approach. 
As a last option, an ASPSP might in addition accept a command with access rights
  * to see the list of available payment accounts or
  * to see the list of available payment accounts with balances.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateConsentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\Consents;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountReference16CH;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalInformationAccess;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessAllPsd2Enum;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessAvailableAccountsEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountAccessAvailableAccountsWithBalanceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateConsentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConsentRequest();
    $request->digest = 'totam';
    $request->psuAccept = 'porro';
    $request->psuAcceptCharset = 'dolorum';
    $request->psuAcceptEncoding = 'dicta';
    $request->psuAcceptLanguage = 'nam';
    $request->psuCorporateID = 'officia';
    $request->psuCorporateIDType = 'occaecati';
    $request->psuDeviceID = 'fugit';
    $request->psuGeoLocation = 'deleniti';
    $request->psuHttpMethod = PSUHttpMethodEnum::DELETE;
    $request->psuId = 'optio';
    $request->psuIDType = 'totam';
    $request->psuIPAddress = '27.106.121.67';
    $request->psuIPPort = 'qui';
    $request->psuUserAgent = 'impedit';
    $request->signature = 'cum';
    $request->tppBrandLoggingInformation = 'esse';
    $request->tppExplicitAuthorisationPreferred = false;
    $request->tppNokRedirectURI = 'http://nifty-case.com';
    $request->tppNotificationContentPreferred = 'ad';
    $request->tppNotificationURI = 'natus';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'http://passionate-crewman.name';
    $request->tppSignatureCertificate = 'laboriosam';
    $request->xRequestID = 'hic';
    $request->consents = new Consents();
    $request->consents->access = new AccountAccess();
    $request->consents->access->accounts = [
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->access->additionalInformation = new AdditionalInformationAccess();
    $request->consents->access->additionalInformation->ownerName = [
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->access->additionalInformation->trustedBeneficiaries = [
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->access->allPsd2 = AccountAccessAllPsd2Enum::ALL_ACCOUNTS;
    $request->consents->access->availableAccounts = AccountAccessAvailableAccountsEnum::ALL_ACCOUNTS_WITH_OWNER_NAME;
    $request->consents->access->availableAccountsWithBalance = AccountAccessAvailableAccountsWithBalanceEnum::ALL_ACCOUNTS;
    $request->consents->access->balances = [
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->access->restrictedTo = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->consents->access->transactions = [
        new AccountReference16CH(),
        new AccountReference16CH(),
        new AccountReference16CH(),
    ];
    $request->consents->combinedServiceIndicator = false;
    $request->consents->frequencyPerDay = 4;
    $request->consents->recurringIndicator = false;
    $request->consents->validUntil = DateTime::createFromFormat('Y-m-d', '2020-12-31');

    $requestSecurity = new CreateConsentSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->createConsent($request, $requestSecurity);

    if ($response->consentsResponse201 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConsent

The TPP can delete an account information consent object if needed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConsentRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConsentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConsentRequest();
    $request->digest = 'mollitia';
    $request->psuAccept = 'laborum';
    $request->psuAcceptCharset = 'dolores';
    $request->psuAcceptEncoding = 'dolorem';
    $request->psuAcceptLanguage = 'corporis';
    $request->psuDeviceID = 'explicabo';
    $request->psuGeoLocation = 'nobis';
    $request->psuHttpMethod = PSUHttpMethodEnum::POST;
    $request->psuIPAddress = '155.93.83.145';
    $request->psuIPPort = 'accusantium';
    $request->psuUserAgent = 'iure';
    $request->signature = 'culpa';
    $request->tppSignatureCertificate = 'doloribus';
    $request->xRequestID = 'sapiente';
    $request->consentId = 'architecto';

    $requestSecurity = new DeleteConsentSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->deleteConsent($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountList

Read the identifiers of the available payment account together with 
booking balance information, depending on the consent granted.

It is assumed that a consent of the PSU to this access is already given and stored on the ASPSP system.
The addressed list of accounts depends then on the PSU ID and the stored consent addressed by consentId,
respectively the OAuth2 access token.

Returns all identifiers of the accounts, to which an account access has been granted to through
the /consents endpoint by the PSU.
In addition, relevant information about the accounts and hyperlinks to corresponding account
information resources are provided if a related consent has been already granted.

Remark: Note that the /consents endpoint optionally offers to grant an access on all available
payment accounts of a PSU.
In this case, this endpoint will deliver the information about all available payment accounts
of the PSU at this ASPSP.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountListRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountListRequest();
    $request->consentID = 'mollitia';
    $request->digest = 'dolorem';
    $request->psuAccept = 'culpa';
    $request->psuAcceptCharset = 'consequuntur';
    $request->psuAcceptEncoding = 'repellat';
    $request->psuAcceptLanguage = 'mollitia';
    $request->psuDeviceID = 'occaecati';
    $request->psuGeoLocation = 'numquam';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuIPAddress = '119.121.62.159';
    $request->psuIPPort = 'quia';
    $request->psuUserAgent = 'quis';
    $request->signature = 'vitae';
    $request->tppSignatureCertificate = 'laborum';
    $request->xRequestID = 'animi';
    $request->withBalance = false;

    $requestSecurity = new GetAccountListSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->getAccountList($request, $requestSecurity);

    if ($response->accountList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBalances

Reads account data from a given account addressed by "account-id". 

**Remark:** This account-id can be a tokenised identification due to data protection reason since the path 
information might be logged on intermediary servers within the ASPSP sphere. 
This account-id then can be retrieved by the "Get account list" call.

The account-id is constant at least throughout the lifecycle of a given consent.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBalancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBalancesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBalancesRequest();
    $request->consentID = 'enim';
    $request->digest = 'odit';
    $request->psuAccept = 'quo';
    $request->psuAcceptCharset = 'sequi';
    $request->psuAcceptEncoding = 'tenetur';
    $request->psuAcceptLanguage = 'ipsam';
    $request->psuDeviceID = 'id';
    $request->psuGeoLocation = 'possimus';
    $request->psuHttpMethod = PSUHttpMethodEnum::GET;
    $request->psuIPAddress = '24.159.214.172';
    $request->psuIPPort = 'quasi';
    $request->psuUserAgent = 'reiciendis';
    $request->signature = 'voluptatibus';
    $request->tppSignatureCertificate = 'vero';
    $request->xRequestID = 'nihil';
    $request->accountId = 'qwer3456tzui7890';

    $requestSecurity = new GetBalancesSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->getBalances($request, $requestSecurity);

    if ($response->readAccountBalanceResponse200 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsentAuthorisation

Return a list of all authorisation subresources IDs which have been created.

This function returns an array of hyperlinks to all generated authorisation sub-resources.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConsentAuthorisationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetConsentAuthorisationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsentAuthorisationRequest();
    $request->digest = 'praesentium';
    $request->psuAccept = 'voluptatibus';
    $request->psuAcceptCharset = 'ipsa';
    $request->psuAcceptEncoding = 'omnis';
    $request->psuAcceptLanguage = 'voluptate';
    $request->psuDeviceID = 'cum';
    $request->psuGeoLocation = 'perferendis';
    $request->psuHttpMethod = PSUHttpMethodEnum::GET;
    $request->psuIPAddress = '113.72.250.30';
    $request->psuIPPort = 'corporis';
    $request->psuUserAgent = 'dolore';
    $request->signature = 'iusto';
    $request->tppSignatureCertificate = 'dicta';
    $request->xRequestID = 'harum';
    $request->consentId = 'enim';

    $requestSecurity = new GetConsentAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->getConsentAuthorisation($request, $requestSecurity);

    if ($response->authorisations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsentInformation

Returns the content of an account information consent object. 
This is returning the data for the TPP especially in cases, 
where the consent was directly managed between ASPSP and PSU e.g. in a redirect SCA Approach.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConsentInformationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetConsentInformationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsentInformationRequest();
    $request->digest = 'accusamus';
    $request->psuAccept = 'commodi';
    $request->psuAcceptCharset = 'repudiandae';
    $request->psuAcceptEncoding = 'quae';
    $request->psuAcceptLanguage = 'ipsum';
    $request->psuDeviceID = 'quidem';
    $request->psuGeoLocation = 'molestias';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuIPAddress = '221.67.130.133';
    $request->psuIPPort = 'voluptates';
    $request->psuUserAgent = 'quasi';
    $request->signature = 'repudiandae';
    $request->tppSignatureCertificate = 'sint';
    $request->xRequestID = 'veritatis';
    $request->consentId = 'itaque';

    $requestSecurity = new GetConsentInformationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->getConsentInformation($request, $requestSecurity);

    if ($response->consentInformationResponse200Json !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsentScaStatus

This method returns the SCA status of a consent initiation's authorisation sub-resource.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConsentScaStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetConsentScaStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsentScaStatusRequest();
    $request->digest = 'incidunt';
    $request->psuAccept = 'enim';
    $request->psuAcceptCharset = 'consequatur';
    $request->psuAcceptEncoding = 'est';
    $request->psuAcceptLanguage = 'quibusdam';
    $request->psuDeviceID = 'explicabo';
    $request->psuGeoLocation = 'deserunt';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuIPAddress = '215.74.67.46';
    $request->psuIPPort = 'aliquid';
    $request->psuUserAgent = 'cupiditate';
    $request->signature = 'quos';
    $request->tppSignatureCertificate = 'perferendis';
    $request->xRequestID = 'magni';
    $request->authorisationId = '123auth456';
    $request->consentId = 'assumenda';

    $requestSecurity = new GetConsentScaStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->getConsentScaStatus($request, $requestSecurity);

    if ($response->scaStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConsentStatus

Read the status of an account information consent resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConsentStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetConsentStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConsentStatusRequest();
    $request->digest = 'ipsam';
    $request->psuAccept = 'alias';
    $request->psuAcceptCharset = 'fugit';
    $request->psuAcceptEncoding = 'dolorum';
    $request->psuAcceptLanguage = 'excepturi';
    $request->psuDeviceID = 'tempora';
    $request->psuGeoLocation = 'facilis';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuIPAddress = '73.246.110.63';
    $request->psuIPPort = 'eligendi';
    $request->psuUserAgent = 'sint';
    $request->signature = 'aliquid';
    $request->tppSignatureCertificate = 'provident';
    $request->xRequestID = 'necessitatibus';
    $request->consentId = 'sint';

    $requestSecurity = new GetConsentStatusSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->getConsentStatus($request, $requestSecurity);

    if ($response->consentStatusResponse200 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionDetails

Reads transaction details from a given transaction addressed by "transactionId" on a given account addressed by "account-id".
This call is only available on transactions as reported in a JSON format.

**Remark:** Please note that the PATH might be already given in detail by the corresponding entry of the response of the
"Read Transaction List" call within the _links subfield.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionDetailsRequest();
    $request->consentID = 'officia';
    $request->digest = 'dolor';
    $request->psuAccept = 'debitis';
    $request->psuAcceptCharset = 'a';
    $request->psuAcceptEncoding = 'dolorum';
    $request->psuAcceptLanguage = 'in';
    $request->psuDeviceID = 'in';
    $request->psuGeoLocation = 'illum';
    $request->psuHttpMethod = PSUHttpMethodEnum::DELETE;
    $request->psuIPAddress = '179.29.76.196';
    $request->psuIPPort = 'facere';
    $request->psuUserAgent = 'ea';
    $request->signature = 'aliquid';
    $request->tppSignatureCertificate = 'laborum';
    $request->xRequestID = 'accusamus';
    $request->accountId = 'qwer3456tzui7890';
    $request->transactionId = '3dc3d5b3-7023-4848-9853-f5400a64e80f';

    $requestSecurity = new GetTransactionDetailsSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->getTransactionDetails($request, $requestSecurity);

    if ($response->getTransactionDetails200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionList

Read transaction reports or transaction lists of a given account ddressed by "account-id", depending on the steering parameter
"bookingStatus" together with balances.

For a given account, additional parameters are e.g. the attributes "dateFrom" and "dateTo".
The ASPSP might add balance information, if transaction lists without balances are not supported.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionListRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\BookingStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionListRequest();
    $request->consentID = 'non';
    $request->digest = 'occaecati';
    $request->psuAccept = 'enim';
    $request->psuAcceptCharset = 'accusamus';
    $request->psuAcceptEncoding = 'delectus';
    $request->psuAcceptLanguage = 'quidem';
    $request->psuDeviceID = 'provident';
    $request->psuGeoLocation = 'nam';
    $request->psuHttpMethod = PSUHttpMethodEnum::PATCH;
    $request->psuIPAddress = '128.136.244.59';
    $request->psuIPPort = 'deserunt';
    $request->psuUserAgent = 'nisi';
    $request->signature = 'vel';
    $request->tppSignatureCertificate = 'natus';
    $request->xRequestID = 'omnis';
    $request->accountId = 'qwer3456tzui7890';
    $request->bookingStatus = BookingStatusEnum::BOOKED;
    $request->dateFrom = DateTime::createFromFormat('Y-m-d', '2022-07-13');
    $request->dateTo = DateTime::createFromFormat('Y-m-d', '2022-04-14');
    $request->deltaList = false;
    $request->entryReferenceFrom = 'id';
    $request->withBalance = false;

    $requestSecurity = new GetTransactionListSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->getTransactionList($request, $requestSecurity);

    if ($response->transactionsResponse200Json !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## readAccountDetails

Reads details about an account, with balances where required. 
It is assumed that a consent of the PSU to 
this access is already given and stored on the ASPSP system. 
The addressed details of this account depends then on the stored consent addressed by consentId, 
respectively the OAuth2 access token.

**NOTE:** The account-id can represent a multicurrency account.
In this case the currency code is set to "XXX".

Give detailed information about the addressed account.

Give detailed information about the addressed account together with balance information


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ReadAccountDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReadAccountDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ReadAccountDetailsRequest();
    $request->consentID = 'labore';
    $request->digest = 'labore';
    $request->psuAccept = 'suscipit';
    $request->psuAcceptCharset = 'natus';
    $request->psuAcceptEncoding = 'nobis';
    $request->psuAcceptLanguage = 'eum';
    $request->psuDeviceID = 'vero';
    $request->psuGeoLocation = 'aspernatur';
    $request->psuHttpMethod = PSUHttpMethodEnum::GET;
    $request->psuIPAddress = '76.23.145.90';
    $request->psuIPPort = 'provident';
    $request->psuUserAgent = 'quos';
    $request->signature = 'sint';
    $request->tppSignatureCertificate = 'accusantium';
    $request->xRequestID = 'mollitia';
    $request->accountId = 'qwer3456tzui7890';
    $request->withBalance = false;

    $requestSecurity = new ReadAccountDetailsSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->readAccountDetails($request, $requestSecurity);

    if ($response->readAccountDetails200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startConsentAuthorisation

Create an authorisation sub-resource and start the authorisation process of a consent.
The message might in addition transmit authentication and authorisation related data.

his method is iterated n times for a n times SCA authorisation in a
corporate context, each creating an own authorisation sub-endpoint for
the corresponding PSU authorising the consent.

The ASPSP might make the usage of this access method unnecessary,
since the related authorisation resource will be automatically created by
the ASPSP after the submission of the consent data with the first POST consents call.

The start authorisation process is a process which is needed for creating a new authorisation
or cancellation sub-resource.

This applies in the following scenarios:

  * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding Payment 
    initiation response that an explicit start of the authorisation process is needed by the TPP. 
    The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
    uploaded by using the extended forms:
    * 'startAuthorisationWithPsuIdentfication', 
    * 'startAuthorisationWithPsuAuthentication' 
    * 'startAuthorisationWithEncryptedPsuAuthentication'
    * 'startAuthorisationWithAuthentciationMethodSelection'
  * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
  * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding 
    payment cancellation response that an explicit start of the authorisation process is needed by the TPP. 
    The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded 
    by using the extended forms as indicated above.
  * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
    executing the cancellation.
  * The signing basket needs to be authorised yet.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StartConsentAuthorisationRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartConsentAuthorisationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartConsentAuthorisationRequest();
    $request->digest = 'reiciendis';
    $request->psuAccept = 'mollitia';
    $request->psuAcceptCharset = 'ad';
    $request->psuAcceptEncoding = 'eum';
    $request->psuAcceptLanguage = 'dolor';
    $request->psuCorporateID = 'necessitatibus';
    $request->psuCorporateIDType = 'odit';
    $request->psuDeviceID = 'nemo';
    $request->psuGeoLocation = 'quasi';
    $request->psuHttpMethod = PSUHttpMethodEnum::PUT;
    $request->psuId = 'doloribus';
    $request->psuIDType = 'debitis';
    $request->psuIPAddress = '66.206.137.180';
    $request->psuIPPort = 'in';
    $request->psuUserAgent = 'architecto';
    $request->requestBody = 'repudiandae';
    $request->signature = 'ullam';
    $request->tppNokRedirectURI = 'https://knobby-zither.org';
    $request->tppNotificationContentPreferred = 'sed';
    $request->tppNotificationURI = 'saepe';
    $request->tppRedirectPreferred = false;
    $request->tppRedirectURI = 'https://another-circuit.name';
    $request->tppSignatureCertificate = 'natus';
    $request->xRequestID = 'magni';
    $request->consentId = 'sunt';

    $requestSecurity = new StartConsentAuthorisationSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->startConsentAuthorisation($request, $requestSecurity);

    if ($response->startScaprocessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConsentsPsuData

This method update PSU data on the consents  resource if needed.
It may authorise a consent within the Embedded SCA Approach where needed.

Independently from the SCA Approach it supports e.g. the selection of
the authentication method and a non-SCA PSU authentication.

There are several possible update PSU data requests in the context of a consent request if needed, 
which depends on the SCA approach:

* Redirect SCA Approach:
  A specific Update PSU data request is applicable for 
    * the selection of authentication methods, before choosing the actual SCA approach.
* Decoupled SCA Approach:
  A specific update PSU data request is only applicable for
  * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
  * the selection of authentication methods.
* Embedded SCA Approach: 
  The Update PSU data request might be used 
  * to add credentials as a first factor authentication data of the PSU and
  * to select the authentication method and
  * transaction authorisation.

The SCA Approach might depend on the chosen SCA method. 
For that reason, the following possible update PSU data request can apply to all SCA approaches:

* Select an SCA method in case of several SCA methods are available for the customer.

There are the following request types on this access path:
  * Update PSU identification
  * Update PSU authentication
  * Select PSU autorization method 
    WARNING: This method needs a reduced header, 
    therefore many optional elements are not present. 
    Maybe in a later version the access path will change.
  * Transaction Authorisation
    WARNING: This method needs a reduced header, 
    therefore many optional elements are not present. 
    Maybe in a later version the access path will change.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConsentsPsuDataRequest;
use \OpenAPI\OpenAPI\Models\Shared\PSUHttpMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConsentsPsuDataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConsentsPsuDataRequest();
    $request->digest = 'quo';
    $request->psuAccept = 'illum';
    $request->psuAcceptCharset = 'pariatur';
    $request->psuAcceptEncoding = 'maxime';
    $request->psuAcceptLanguage = 'ea';
    $request->psuCorporateID = 'excepturi';
    $request->psuCorporateIDType = 'odit';
    $request->psuDeviceID = 'ea';
    $request->psuGeoLocation = 'accusantium';
    $request->psuHttpMethod = PSUHttpMethodEnum::GET;
    $request->psuId = 'maiores';
    $request->psuIDType = 'quidem';
    $request->psuIPAddress = '95.116.107.184';
    $request->psuIPPort = 'eaque';
    $request->psuUserAgent = 'pariatur';
    $request->requestBody = new UpdatePsuAuthentication();
    $request->requestBody->psuData = new PsuData();
    $request->requestBody->psuData->additionalEncryptedPassword = 'voluptatibus';
    $request->requestBody->psuData->additionalPassword = 'perferendis';
    $request->requestBody->psuData->encryptedPassword = 'fugiat';
    $request->requestBody->psuData->password = 'amet';
    $request->signature = 'aut';
    $request->tppSignatureCertificate = 'cumque';
    $request->xRequestID = 'corporis';
    $request->authorisationId = '123auth456';
    $request->consentId = 'hic';

    $requestSecurity = new UpdateConsentsPsuDataSecurity();
    $requestSecurity->bearerAuthOAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->accountInformationServiceAIS->updateConsentsPsuData($request, $requestSecurity);

    if ($response->updateConsentsPsuData200ApplicationJSONOneOf !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
