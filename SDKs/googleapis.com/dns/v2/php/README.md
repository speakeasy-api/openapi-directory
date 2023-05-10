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
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Change;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordSet;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyHealthCheckTargets;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTarget;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyPrimaryBackupPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\ChangeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsChangesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->change = new Change();
    $request->change->additions = [
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
    ];
    $request->change->deletions = [
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
    ];
    $request->change->id = 'd9d8d69a-674e-40f4-a7cc-8796ed151a05';
    $request->change->isServing = false;
    $request->change->kind = 'repellendus';
    $request->change->startTime = 'sapiente';
    $request->change->status = ChangeStatusEnum::DONE;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'at';
    $request->clientOperationId = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->location = 'quod';
    $request->managedZone = 'esse';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new DnsChangesCreateSecurity();
    $requestSecurity->option1 = new DnsChangesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->changes->dnsChangesCreate($request, $requestSecurity);

    if ($response->change !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [changes](docs/changes/README.md)

* [dnsChangesCreate](docs/changes/README.md#dnschangescreate) - Atomically updates the ResourceRecordSet collection.
* [dnsChangesGet](docs/changes/README.md#dnschangesget) - Fetches the representation of an existing Change.
* [dnsChangesList](docs/changes/README.md#dnschangeslist) - Enumerates Changes to a ResourceRecordSet collection.

### [dnsKeys](docs/dnskeys/README.md)

* [dnsDnsKeysGet](docs/dnskeys/README.md#dnsdnskeysget) - Fetches the representation of an existing DnsKey.
* [dnsDnsKeysList](docs/dnskeys/README.md#dnsdnskeyslist) - Enumerates DnsKeys to a ResourceRecordSet collection.

### [managedZoneOperations](docs/managedzoneoperations/README.md)

* [dnsManagedZoneOperationsGet](docs/managedzoneoperations/README.md#dnsmanagedzoneoperationsget) - Fetches the representation of an existing Operation.
* [dnsManagedZoneOperationsList](docs/managedzoneoperations/README.md#dnsmanagedzoneoperationslist) - Enumerates Operations for the given ManagedZone.

### [managedZones](docs/managedzones/README.md)

* [dnsManagedZonesCreate](docs/managedzones/README.md#dnsmanagedzonescreate) - Creates a new ManagedZone.
* [dnsManagedZonesDelete](docs/managedzones/README.md#dnsmanagedzonesdelete) - Deletes a previously created ManagedZone.
* [dnsManagedZonesGet](docs/managedzones/README.md#dnsmanagedzonesget) - Fetches the representation of an existing ManagedZone.
* [dnsManagedZonesGetIamPolicy](docs/managedzones/README.md#dnsmanagedzonesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [dnsManagedZonesList](docs/managedzones/README.md#dnsmanagedzoneslist) - Enumerates ManagedZones that have been created but not yet deleted.
* [dnsManagedZonesPatch](docs/managedzones/README.md#dnsmanagedzonespatch) - Applies a partial update to an existing ManagedZone.
* [dnsManagedZonesSetIamPolicy](docs/managedzones/README.md#dnsmanagedzonessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [dnsManagedZonesTestIamPermissions](docs/managedzones/README.md#dnsmanagedzonestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [dnsManagedZonesUpdate](docs/managedzones/README.md#dnsmanagedzonesupdate) - Updates an existing ManagedZone.

### [policies](docs/policies/README.md)

* [dnsPoliciesCreate](docs/policies/README.md#dnspoliciescreate) - Creates a new Policy.
* [dnsPoliciesDelete](docs/policies/README.md#dnspoliciesdelete) - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* [dnsPoliciesGet](docs/policies/README.md#dnspoliciesget) - Fetches the representation of an existing Policy.
* [dnsPoliciesList](docs/policies/README.md#dnspolicieslist) - Enumerates all Policies associated with a project.
* [dnsPoliciesPatch](docs/policies/README.md#dnspoliciespatch) - Applies a partial update to an existing Policy.
* [dnsPoliciesUpdate](docs/policies/README.md#dnspoliciesupdate) - Updates an existing Policy.

### [projects](docs/projects/README.md)

* [dnsProjectsGet](docs/projects/README.md#dnsprojectsget) - Fetches the representation of an existing Project.

### [resourceRecordSets](docs/resourcerecordsets/README.md)

* [dnsResourceRecordSetsCreate](docs/resourcerecordsets/README.md#dnsresourcerecordsetscreate) - Creates a new ResourceRecordSet.
* [dnsResourceRecordSetsDelete](docs/resourcerecordsets/README.md#dnsresourcerecordsetsdelete) - Deletes a previously created ResourceRecordSet.
* [dnsResourceRecordSetsGet](docs/resourcerecordsets/README.md#dnsresourcerecordsetsget) - Fetches the representation of an existing ResourceRecordSet.
* [dnsResourceRecordSetsList](docs/resourcerecordsets/README.md#dnsresourcerecordsetslist) - Enumerates ResourceRecordSets that you have created but not yet deleted.
* [dnsResourceRecordSetsPatch](docs/resourcerecordsets/README.md#dnsresourcerecordsetspatch) - Applies a partial update to an existing ResourceRecordSet.

### [responsePolicies](docs/responsepolicies/README.md)

* [dnsResponsePoliciesCreate](docs/responsepolicies/README.md#dnsresponsepoliciescreate) - Creates a new Response Policy
* [dnsResponsePoliciesDelete](docs/responsepolicies/README.md#dnsresponsepoliciesdelete) - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* [dnsResponsePoliciesGet](docs/responsepolicies/README.md#dnsresponsepoliciesget) - Fetches the representation of an existing Response Policy.
* [dnsResponsePoliciesList](docs/responsepolicies/README.md#dnsresponsepolicieslist) - Enumerates all Response Policies associated with a project.
* [dnsResponsePoliciesPatch](docs/responsepolicies/README.md#dnsresponsepoliciespatch) - Applies a partial update to an existing Response Policy.
* [dnsResponsePoliciesUpdate](docs/responsepolicies/README.md#dnsresponsepoliciesupdate) - Updates an existing Response Policy.

### [responsePolicyRules](docs/responsepolicyrules/README.md)

* [dnsResponsePolicyRulesCreate](docs/responsepolicyrules/README.md#dnsresponsepolicyrulescreate) - Creates a new Response Policy Rule.
* [dnsResponsePolicyRulesDelete](docs/responsepolicyrules/README.md#dnsresponsepolicyrulesdelete) - Deletes a previously created Response Policy Rule.
* [dnsResponsePolicyRulesGet](docs/responsepolicyrules/README.md#dnsresponsepolicyrulesget) - Fetches the representation of an existing Response Policy Rule.
* [dnsResponsePolicyRulesList](docs/responsepolicyrules/README.md#dnsresponsepolicyruleslist) - Enumerates all Response Policy Rules associated with a project.
* [dnsResponsePolicyRulesPatch](docs/responsepolicyrules/README.md#dnsresponsepolicyrulespatch) - Applies a partial update to an existing Response Policy Rule.
* [dnsResponsePolicyRulesUpdate](docs/responsepolicyrules/README.md#dnsresponsepolicyrulesupdate) - Updates an existing Response Policy Rule.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
