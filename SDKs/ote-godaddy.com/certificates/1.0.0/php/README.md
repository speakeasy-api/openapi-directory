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
use \OpenAPI\OpenAPI\Models\Operations\CertificateActionRetrieveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificateActionRetrieveRequest();
    $request->certificateId = 'corrupti';

    $response = $sdk->v1->certificateActionRetrieve($request);

    if ($response->arrayOfCertificateAction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [v1](docs/v1/README.md)

* [certificateActionRetrieve](docs/v1/README.md#certificateactionretrieve) - Retrieve all certificate actions
* [certificateAlternateEmailAddress](docs/v1/README.md#certificatealternateemailaddress) - Add alternate email address
* [certificateCallbackDelete](docs/v1/README.md#certificatecallbackdelete) - Unregister system callback
* [certificateCallbackGet](docs/v1/README.md#certificatecallbackget) - Retrieve system stateful action callback url
* [certificateCallbackReplace](docs/v1/README.md#certificatecallbackreplace) - Register of certificate action callback
* [certificateCancel](docs/v1/README.md#certificatecancel) - Cancel a pending certificate
* [certificateCreate](docs/v1/README.md#certificatecreate) - Create a pending order for certificate
* [certificateDownload](docs/v1/README.md#certificatedownload) - Download certificate
* [certificateDownloadEntitlement](docs/v1/README.md#certificatedownloadentitlement) - Download certificate by entitlement
* [certificateEmailHistory](docs/v1/README.md#certificateemailhistory) - Retrieve email history
* [certificateGet](docs/v1/README.md#certificateget) - Retrieve certificate details
* [certificateGetEntitlement](docs/v1/README.md#certificategetentitlement) - Search for certificate details by entitlement
* [certificateReissue](docs/v1/README.md#certificatereissue) - Reissue active certificate
* [certificateRenew](docs/v1/README.md#certificaterenew) - Renew active certificate
* [certificateResendEmail](docs/v1/README.md#certificateresendemail) - Resend an email
* [certificateResendEmailAddress](docs/v1/README.md#certificateresendemailaddress) - Resend email to email address
* [certificateRevoke](docs/v1/README.md#certificaterevoke) - Revoke active certificate
* [certificateSitesealGet](docs/v1/README.md#certificatesitesealget) - Get Site seal
* [certificateValidate](docs/v1/README.md#certificatevalidate) - Validate a pending order for certificate
* [certificateVerifydomaincontrol](docs/v1/README.md#certificateverifydomaincontrol) - Check Domain Control

### [v2](docs/v2/README.md)

* [getAcmeExternalAccountBinding](docs/v2/README.md#getacmeexternalaccountbinding) - Retrieves the external account binding for the specified customer
* [getCertificateDetailByCertIdentifier](docs/v2/README.md#getcertificatedetailbycertidentifier) - Retrieve individual certificate details
* [getCustomerCertificatesByCustomerId](docs/v2/README.md#getcustomercertificatesbycustomerid) - Retrieve customer's certificates
* [getDomainDetailsByDomain](docs/v2/README.md#getdomaindetailsbydomain) - Retrieve detailed information for supplied domain
* [getDomainInformationByCertificateId](docs/v2/README.md#getdomaininformationbycertificateid) - Retrieve domain verification status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
