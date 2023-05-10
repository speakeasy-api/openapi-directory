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
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleChromePolicyVersionsV1PolicyTargetKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest = new GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest();
    $request->googleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest->requests = [
        new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(),
        new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(),
        new GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->customer = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->chromepolicyCustomersPoliciesGroupsBatchDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [customers](docs/customers/README.md)

* [chromepolicyCustomersPoliciesGroupsBatchDelete](docs/customers/README.md#chromepolicycustomerspoliciesgroupsbatchdelete) - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsBatchModify](docs/customers/README.md#chromepolicycustomerspoliciesgroupsbatchmodify) - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering](docs/customers/README.md#chromepolicycustomerspoliciesgroupslistgrouppriorityordering) - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering](docs/customers/README.md#chromepolicycustomerspoliciesgroupsupdategrouppriorityordering) - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesNetworksDefineCertificate](docs/customers/README.md#chromepolicycustomerspoliciesnetworksdefinecertificate) - Creates a certificate at a specified OU for a customer.
* [chromepolicyCustomersPoliciesNetworksDefineNetwork](docs/customers/README.md#chromepolicycustomerspoliciesnetworksdefinenetwork) - Define a new network.
* [chromepolicyCustomersPoliciesNetworksRemoveCertificate](docs/customers/README.md#chromepolicycustomerspoliciesnetworksremovecertificate) - Remove an existing certificate by guid.
* [chromepolicyCustomersPoliciesNetworksRemoveNetwork](docs/customers/README.md#chromepolicycustomerspoliciesnetworksremovenetwork) - Remove an existing network by guid.
* [chromepolicyCustomersPoliciesOrgunitsBatchInherit](docs/customers/README.md#chromepolicycustomerspoliciesorgunitsbatchinherit) - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesOrgunitsBatchModify](docs/customers/README.md#chromepolicycustomerspoliciesorgunitsbatchmodify) - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* [chromepolicyCustomersPoliciesResolve](docs/customers/README.md#chromepolicycustomerspoliciesresolve) - Gets the resolved policy values for a list of policies that match a search query.
* [chromepolicyCustomersPolicySchemasGet](docs/customers/README.md#chromepolicycustomerspolicyschemasget) - Get a specific policy schema for a customer by its resource name.
* [chromepolicyCustomersPolicySchemasList](docs/customers/README.md#chromepolicycustomerspolicyschemaslist) - Gets a list of policy schemas that match a specified filter value for a given customer.

### [media](docs/media/README.md)

* [chromepolicyMediaUpload](docs/media/README.md#chromepolicymediaupload) - Creates an enterprise file from the content provided by user. Returns a public download url for end user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
