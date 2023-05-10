# v1

### Available Operations

* [certificateActionRetrieve](#certificateactionretrieve) - Retrieve all certificate actions
* [certificateAlternateEmailAddress](#certificatealternateemailaddress) - Add alternate email address
* [certificateCallbackDelete](#certificatecallbackdelete) - Unregister system callback
* [certificateCallbackGet](#certificatecallbackget) - Retrieve system stateful action callback url
* [certificateCallbackReplace](#certificatecallbackreplace) - Register of certificate action callback
* [certificateCancel](#certificatecancel) - Cancel a pending certificate
* [certificateCreate](#certificatecreate) - Create a pending order for certificate
* [certificateDownload](#certificatedownload) - Download certificate
* [certificateDownloadEntitlement](#certificatedownloadentitlement) - Download certificate by entitlement
* [certificateEmailHistory](#certificateemailhistory) - Retrieve email history
* [certificateGet](#certificateget) - Retrieve certificate details
* [certificateGetEntitlement](#certificategetentitlement) - Search for certificate details by entitlement
* [certificateReissue](#certificatereissue) - Reissue active certificate
* [certificateRenew](#certificaterenew) - Renew active certificate
* [certificateResendEmail](#certificateresendemail) - Resend an email
* [certificateResendEmailAddress](#certificateresendemailaddress) - Resend email to email address
* [certificateRevoke](#certificaterevoke) - Revoke active certificate
* [certificateSitesealGet](#certificatesitesealget) - Get Site seal
* [certificateValidate](#certificatevalidate) - Validate a pending order for certificate
* [certificateVerifydomaincontrol](#certificateverifydomaincontrol) - Check Domain Control

## certificateActionRetrieve

This method is used to retrieve all stateful actions relating to a certificate lifecycle.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateActionRetrieveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateActionRetrieveRequest();
    $request->certificateId = 'provident';

    $response = $sdk->v1->certificateActionRetrieve($request);

    if ($response->arrayOfCertificateAction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateAlternateEmailAddress

This method adds an alternate email address to a certificate order and re-sends all existing request emails to that address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateAlternateEmailAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateAlternateEmailAddressRequest();
    $request->certificateId = 'distinctio';
    $request->emailAddress = 'quibusdam';

    $response = $sdk->v1->certificateAlternateEmailAddress($request);

    if ($response->certificateEmailHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateCallbackDelete

Unregister the callback for a particular certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateCallbackDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateCallbackDeleteRequest();
    $request->certificateId = 'unde';

    $response = $sdk->v1->certificateCallbackDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateCallbackGet

This method is used to retrieve the registered callback url for a certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateCallbackGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateCallbackGetRequest();
    $request->certificateId = 'nulla';

    $response = $sdk->v1->certificateCallbackGet($request);

    if ($response->certificateCallback !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateCallbackReplace

This method is used to register/replace url for callbacks for stateful actions relating to a certificate lifecycle. The callback url is a Webhook style pattern and will receive POST http requests with json body defined in the CertificateAction model definition for each certificate action.  Only one callback URL is allowed to be registered for each certificateId, so it will replace a previous registration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateCallbackReplaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateCallbackReplaceRequest();
    $request->callbackUrl = 'corrupti';
    $request->certificateId = 'illum';

    $response = $sdk->v1->certificateCallbackReplace($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateCancel

Use the cancel call to cancel a pending certificate order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateCancelRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateCancelRequest();
    $request->certificateId = 'vel';

    $response = $sdk->v1->certificateCancel($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateCreate

<p>Creating a certificate order can be a long running asynchronous operation in the PKI workflow. The PKI API supports 2 options for getting the completion stateful actions for this asynchronous operations: 1) by polling operations -- see /v1/certificates/{certificateId}/actions 2) via WebHook style callback -- see '/v1/certificates/{certificateId}/callback'.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateCreate;
use \OpenAPI\OpenAPI\Models\Shared\CertificateContact;
use \OpenAPI\OpenAPI\Models\Shared\CertificateOrganizationCreate;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAddress;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAddressCountryEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateCreateProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateCreateRootTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateCreateSlotSizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateCreateRequest();
    $request->certificateCreate = new CertificateCreate();
    $request->certificateCreate->callbackUrl = 'error';
    $request->certificateCreate->commonName = 'deserunt';
    $request->certificateCreate->contact = new CertificateContact();
    $request->certificateCreate->contact->email = 'Hunter.Gulgowski96@yahoo.com';
    $request->certificateCreate->contact->jobTitle = 'Future Markets Architect';
    $request->certificateCreate->contact->nameFirst = 'minus';
    $request->certificateCreate->contact->nameLast = 'placeat';
    $request->certificateCreate->contact->nameMiddle = 'voluptatum';
    $request->certificateCreate->contact->phone = '639.803.0603 x897';
    $request->certificateCreate->contact->suffix = 'odit';
    $request->certificateCreate->csr = 'at';
    $request->certificateCreate->intelVPro = false;
    $request->certificateCreate->organization = new CertificateOrganizationCreate();
    $request->certificateCreate->organization->address = new CertificateAddress();
    $request->certificateCreate->organization->address->address1 = 'at';
    $request->certificateCreate->organization->address->address2 = 'maiores';
    $request->certificateCreate->organization->address->city = 'Pinkiefield';
    $request->certificateCreate->organization->address->country = CertificateAddressCountryEnum::KE;
    $request->certificateCreate->organization->address->postalCode = '76176-5159';
    $request->certificateCreate->organization->address->state = 'optio';
    $request->certificateCreate->organization->assumedName = 'totam';
    $request->certificateCreate->organization->name = 'Lucy Krajcik';
    $request->certificateCreate->organization->phone = '742-610-3616 x26399';
    $request->certificateCreate->organization->registrationAgent = 'fuga';
    $request->certificateCreate->organization->registrationNumber = 'in';
    $request->certificateCreate->period = 359508;
    $request->certificateCreate->productType = CertificateCreateProductTypeEnum::OV_WILDCARD_SSL;
    $request->certificateCreate->rootType = CertificateCreateRootTypeEnum::GODADDY_SHA2;
    $request->certificateCreate->slotSize = CertificateCreateSlotSizeEnum::ONE_HUNDRED;
    $request->certificateCreate->subjectAlternativeNames = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->xMarketId = 'est';

    $response = $sdk->v1->certificateCreate($request);

    if ($response->certificateIdentifier !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateDownload

Download certificate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateDownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateDownloadRequest();
    $request->certificateId = 'mollitia';

    $response = $sdk->v1->certificateDownload($request);

    if ($response->certificateBundle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateDownloadEntitlement

Download certificate by entitlement

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateDownloadEntitlementRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateDownloadEntitlementRequest();
    $request->entitlementId = 'laborum';

    $response = $sdk->v1->certificateDownloadEntitlement($request);

    if ($response->certificateBundle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateEmailHistory

This method can be used to retrieve all emails sent for a certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateEmailHistoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateEmailHistoryRequest();
    $request->certificateId = 'dolores';

    $response = $sdk->v1->certificateEmailHistory($request);

    if ($response->certificateEmailHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateGet

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateGetRequest();
    $request->certificateId = 'dolorem';

    $response = $sdk->v1->certificateGet($request);

    if ($response->certificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateGetEntitlement

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificates associated to an entitlement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateGetEntitlementRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateGetEntitlementRequest();
    $request->entitlementId = 'corporis';
    $request->latest = false;

    $response = $sdk->v1->certificateGetEntitlement($request);

    if ($response->certificates !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateReissue

<p>Rekeying is the process by which the private and public key is changed for a certificate. It is a simplified reissue,where only the CSR is changed. Reissuing is the process by which domain names are added or removed from a certificate.Once a request is validated and approved, the certificate will be reissued with the new common name and sans specified. Unlimited reissues are available during the lifetime of the certificate.New names added to a certificate that do not share the base domain of the common name may take additional time to validate. If this API call is made before a previous pending reissue has been validated and issued, the previous reissue request is automatically rejected and replaced with the current request.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateReissueRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReissue;
use \OpenAPI\OpenAPI\Models\Shared\CertificateReissueRootTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateReissueRequest();
    $request->certificateReissue = new CertificateReissue();
    $request->certificateReissue->callbackUrl = 'explicabo';
    $request->certificateReissue->commonName = 'nobis';
    $request->certificateReissue->csr = 'enim';
    $request->certificateReissue->delayExistingRevoke = 607831;
    $request->certificateReissue->forceDomainRevetting = [
        'minima',
        'excepturi',
    ];
    $request->certificateReissue->rootType = CertificateReissueRootTypeEnum::GODADDY_SHA1;
    $request->certificateReissue->subjectAlternativeNames = [
        'culpa',
        'doloribus',
    ];
    $request->certificateId = 'sapiente';

    $response = $sdk->v1->certificateReissue($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateRenew

Renewal is the process by which the validity of a certificate is extended. Renewal is only available 60 days prior to expiration of the previous certificate and 30 days after the expiration of the previous certificate. The renewal supports modifying a set of the original certificate order information. Once a request is validated and approved, the certificate will be issued with extended validity. Since subject alternative names can be removed during a renewal, we require that you provide the subject alternative names you expect in the renewed certificate. New names added to a certificate that do not share the base domain of the common name may take additional time to validate. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateRenewRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateRenew;
use \OpenAPI\OpenAPI\Models\Shared\CertificateRenewRootTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateRenewRequest();
    $request->certificateRenew = new CertificateRenew();
    $request->certificateRenew->callbackUrl = 'architecto';
    $request->certificateRenew->commonName = 'mollitia';
    $request->certificateRenew->csr = 'dolorem';
    $request->certificateRenew->period = 635059;
    $request->certificateRenew->rootType = CertificateRenewRootTypeEnum::GODADDY_SHA1;
    $request->certificateRenew->subjectAlternativeNames = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->certificateId = 'quam';

    $response = $sdk->v1->certificateRenew($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateResendEmail

This method can be used to resend emails by providing the certificate id and the email id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateResendEmailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateResendEmailRequest();
    $request->certificateId = 'molestiae';
    $request->emailId = 'velit';

    $response = $sdk->v1->certificateResendEmail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateResendEmailAddress

This method can be used to resend emails by providing the certificate id, the email id, and the recipient email address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateResendEmailAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateResendEmailAddressRequest();
    $request->certificateId = 'error';
    $request->emailAddress = 'quia';
    $request->emailId = 'quis';

    $response = $sdk->v1->certificateResendEmailAddress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateRevoke

Use revoke call to revoke an active certificate, if the certificate has not been issued a 404 response will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateRevokeRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateRevoke;
use \OpenAPI\OpenAPI\Models\Shared\CertificateRevokeReasonEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateRevokeRequest();
    $request->certificateRevoke = new CertificateRevoke();
    $request->certificateRevoke->reason = CertificateRevokeReasonEnum::AFFILIATION_CHANGED;
    $request->certificateId = 'laborum';

    $response = $sdk->v1->certificateRevoke($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateSitesealGet

<p>This method is used to obtain the site seal information for an issued certificate. A site seal is a graphic that the certificate purchaser can embed on their web site to show their visitors information about their SSL certificate. If a web site visitor clicks on the site seal image, a pop-up page is displayed that contains detailed information about the SSL certificate. The site seal token is used to link the site seal graphic image to the appropriate certificate details pop-up page display when a user clicks on the site seal. The site seal images are expected to be static images and hosted on the reseller's website, to minimize delays for customer page load times.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateSitesealGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CertificateSitesealGetThemeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateSitesealGetRequest();
    $request->certificateId = 'animi';
    $request->locale = 'enim';
    $request->theme = CertificateSitesealGetThemeEnum::DARK;

    $response = $sdk->v1->certificateSitesealGet($request);

    if ($response->certificateSiteSeal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateValidate

Validate a pending order for certificate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CertificateCreate;
use \OpenAPI\OpenAPI\Models\Shared\CertificateContact;
use \OpenAPI\OpenAPI\Models\Shared\CertificateOrganizationCreate;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAddress;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAddressCountryEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateCreateProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateCreateRootTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateCreateSlotSizeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateValidateRequest();
    $request->certificateCreate = new CertificateCreate();
    $request->certificateCreate->callbackUrl = 'quo';
    $request->certificateCreate->commonName = 'sequi';
    $request->certificateCreate->contact = new CertificateContact();
    $request->certificateCreate->contact->email = 'Freida.Ondricka9@hotmail.com';
    $request->certificateCreate->contact->jobTitle = 'Investor Configuration Technician';
    $request->certificateCreate->contact->nameFirst = 'quasi';
    $request->certificateCreate->contact->nameLast = 'reiciendis';
    $request->certificateCreate->contact->nameMiddle = 'voluptatibus';
    $request->certificateCreate->contact->phone = '1-559-264-7004 x29132';
    $request->certificateCreate->contact->suffix = 'iusto';
    $request->certificateCreate->csr = 'dicta';
    $request->certificateCreate->intelVPro = false;
    $request->certificateCreate->organization = new CertificateOrganizationCreate();
    $request->certificateCreate->organization->address = new CertificateAddress();
    $request->certificateCreate->organization->address->address1 = 'harum';
    $request->certificateCreate->organization->address->address2 = 'enim';
    $request->certificateCreate->organization->address->city = 'Idaho Falls';
    $request->certificateCreate->organization->address->country = CertificateAddressCountryEnum::UG;
    $request->certificateCreate->organization->address->postalCode = '26558';
    $request->certificateCreate->organization->address->state = 'modi';
    $request->certificateCreate->organization->assumedName = 'praesentium';
    $request->certificateCreate->organization->name = 'Grady Botsford';
    $request->certificateCreate->organization->phone = '(923) 268-1678';
    $request->certificateCreate->organization->registrationAgent = 'labore';
    $request->certificateCreate->organization->registrationNumber = 'modi';
    $request->certificateCreate->period = 183191;
    $request->certificateCreate->productType = CertificateCreateProductTypeEnum::OV_CS;
    $request->certificateCreate->rootType = CertificateCreateRootTypeEnum::STARFIELD_SHA1;
    $request->certificateCreate->slotSize = CertificateCreateSlotSizeEnum::THIRTY;
    $request->certificateCreate->subjectAlternativeNames = [
        'magni',
    ];
    $request->xMarketId = 'assumenda';

    $response = $sdk->v1->certificateValidate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## certificateVerifydomaincontrol

Domain control is a means for verifying the domain included in the certificate order. This resource is useful for resellers that control the domains for their customers, and can expedite the verification process. See https://www.godaddy.com/help/verifying-your-domain-ownership-for-ssl-certificate-requests-html-or-dns-7452

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CertificateVerifydomaincontrolRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateVerifydomaincontrolRequest();
    $request->certificateId = 'ipsam';

    $response = $sdk->v1->certificateVerifydomaincontrol($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
