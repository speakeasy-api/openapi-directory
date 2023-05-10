# services

### Available Operations

* [servicenetworkingServicesAddSubnetwork](#servicenetworkingservicesaddsubnetwork) - For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.
* [servicenetworkingServicesConnectionsCreate](#servicenetworkingservicesconnectionscreate) - Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.
* [servicenetworkingServicesConnectionsDeleteConnection](#servicenetworkingservicesconnectionsdeleteconnection) - Deletes a private service access connection.
* [servicenetworkingServicesConnectionsList](#servicenetworkingservicesconnectionslist) - List the private connections that are configured in a service consumer's VPC network.
* [servicenetworkingServicesConnectionsPatch](#servicenetworkingservicesconnectionspatch) - Updates the allocated ranges that are assigned to a connection.
* [servicenetworkingServicesDisableVpcServiceControls](#servicenetworkingservicesdisablevpcservicecontrols) - Disables VPC service controls for a connection.
* [servicenetworkingServicesDnsRecordSetsAdd](#servicenetworkingservicesdnsrecordsetsadd) - Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.
* [servicenetworkingServicesDnsRecordSetsRemove](#servicenetworkingservicesdnsrecordsetsremove) - Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.
* [servicenetworkingServicesDnsRecordSetsUpdate](#servicenetworkingservicesdnsrecordsetsupdate) - Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.
* [servicenetworkingServicesDnsZonesAdd](#servicenetworkingservicesdnszonesadd) - Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* [servicenetworkingServicesDnsZonesRemove](#servicenetworkingservicesdnszonesremove) - Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* [servicenetworkingServicesEnableVpcServiceControls](#servicenetworkingservicesenablevpcservicecontrols) - Enables VPC service controls for a connection.
* [servicenetworkingServicesProjectsGlobalNetworksGet](#servicenetworkingservicesprojectsglobalnetworksget) - Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* [servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreate](#servicenetworkingservicesprojectsglobalnetworkspeereddnsdomainscreate) - Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.
* [servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDelete](#servicenetworkingservicesprojectsglobalnetworkspeereddnsdomainsdelete) - Deletes a peered DNS domain.
* [servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsList](#servicenetworkingservicesprojectsglobalnetworkspeereddnsdomainslist) - Lists peered DNS domains for a connection.
* [servicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig](#servicenetworkingservicesprojectsglobalnetworksupdateconsumerconfig) - Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* [servicenetworkingServicesRolesAdd](#servicenetworkingservicesrolesadd) - Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.
* [servicenetworkingServicesSearchRange](#servicenetworkingservicessearchrange) - Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).
* [servicenetworkingServicesValidate](#servicenetworkingservicesvalidate) - Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.

## servicenetworkingServicesAddSubnetwork

For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesAddSubnetworkRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddSubnetworkRequest;
use \OpenAPI\OpenAPI\Models\Shared\SecondaryIpRangeSpec;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesAddSubnetworkSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesAddSubnetworkSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesAddSubnetworkSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesAddSubnetworkRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->addSubnetworkRequest = new AddSubnetworkRequest();
    $request->addSubnetworkRequest->allowSubnetCidrRoutesOverlap = false;
    $request->addSubnetworkRequest->checkServiceNetworkingUsePermission = false;
    $request->addSubnetworkRequest->computeIdempotencyWindow = 'quod';
    $request->addSubnetworkRequest->consumer = 'esse';
    $request->addSubnetworkRequest->consumerNetwork = 'totam';
    $request->addSubnetworkRequest->description = 'porro';
    $request->addSubnetworkRequest->ipPrefixLength = 678880;
    $request->addSubnetworkRequest->outsideAllocationPublicIpRange = 'dicta';
    $request->addSubnetworkRequest->privateIpv6GoogleAccess = 'nam';
    $request->addSubnetworkRequest->purpose = 'officia';
    $request->addSubnetworkRequest->region = 'occaecati';
    $request->addSubnetworkRequest->requestedAddress = 'fugit';
    $request->addSubnetworkRequest->requestedRanges = [
        'hic',
        'optio',
        'totam',
    ];
    $request->addSubnetworkRequest->role = 'beatae';
    $request->addSubnetworkRequest->secondaryIpRangeSpecs = [
        new SecondaryIpRangeSpec(),
        new SecondaryIpRangeSpec(),
    ];
    $request->addSubnetworkRequest->subnetwork = 'molestiae';
    $request->addSubnetworkRequest->subnetworkUsers = [
        'qui',
        'impedit',
    ];
    $request->addSubnetworkRequest->useCustomComputeIdempotencyWindow = false;
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'excepturi';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->parent = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new ServicenetworkingServicesAddSubnetworkSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesAddSubnetworkSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesAddSubnetwork($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesConnectionsCreate

Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->connectionInput = new ConnectionInput();
    $request->connectionInput->network = 'natus';
    $request->connectionInput->reservedPeeringRanges = [
        'hic',
        'saepe',
    ];
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'corporis';
    $request->fields = 'iste';
    $request->key = 'iure';
    $request->oauthToken = 'saepe';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new ServicenetworkingServicesConnectionsCreateSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesConnectionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesConnectionsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesConnectionsDeleteConnection

Deletes a private service access connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsDeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsDeleteConnectionSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesConnectionsDeleteConnectionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->deleteConnectionRequest = new DeleteConnectionRequest();
    $request->deleteConnectionRequest->consumerNetwork = 'mollitia';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'corporis';
    $request->key = 'explicabo';
    $request->name = 'Ronnie Mohr';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new ServicenetworkingServicesConnectionsDeleteConnectionSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesConnectionsDeleteConnectionSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesConnectionsDeleteConnection($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesConnectionsList

List the private connections that are configured in a service consumer's VPC network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesConnectionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->fields = 'dolorem';
    $request->key = 'culpa';
    $request->network = 'consequuntur';
    $request->oauthToken = 'repellat';
    $request->parent = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new ServicenetworkingServicesConnectionsListSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesConnectionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesConnectionsList($request, $requestSecurity);

    if ($response->listConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesConnectionsPatch

Updates the allocated ranges that are assigned to a connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesConnectionsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesConnectionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->connectionInput = new ConnectionInput();
    $request->connectionInput->network = 'molestiae';
    $request->connectionInput->reservedPeeringRanges = [
        'error',
    ];
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vitae';
    $request->fields = 'laborum';
    $request->force = false;
    $request->key = 'animi';
    $request->name = 'Christina Satterfield';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->updateMask = 'possimus';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new ServicenetworkingServicesConnectionsPatchSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesConnectionsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesConnectionsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesDisableVpcServiceControls

Disables VPC service controls for a connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDisableVpcServiceControlsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisableVpcServiceControlsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDisableVpcServiceControlsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDisableVpcServiceControlsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesDisableVpcServiceControlsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->disableVpcServiceControlsRequest = new DisableVpcServiceControlsRequest();
    $request->disableVpcServiceControlsRequest->consumerNetwork = 'temporibus';
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reiciendis';
    $request->fields = 'voluptatibus';
    $request->key = 'vero';
    $request->oauthToken = 'nihil';
    $request->parent = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ServicenetworkingServicesDisableVpcServiceControlsSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesDisableVpcServiceControlsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesDisableVpcServiceControls($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesDnsRecordSetsAdd

Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddDnsRecordSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DnsRecordSet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsAddSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsAddSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsAddSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesDnsRecordSetsAddRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addDnsRecordSetRequest = new AddDnsRecordSetRequest();
    $request->addDnsRecordSetRequest->consumerNetwork = 'cum';
    $request->addDnsRecordSetRequest->dnsRecordSet = new DnsRecordSet();
    $request->addDnsRecordSetRequest->dnsRecordSet->data = [
        'doloremque',
    ];
    $request->addDnsRecordSetRequest->dnsRecordSet->domain = 'reprehenderit';
    $request->addDnsRecordSetRequest->dnsRecordSet->ttl = 'ut';
    $request->addDnsRecordSetRequest->dnsRecordSet->type = 'maiores';
    $request->addDnsRecordSetRequest->zone = 'dicta';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'dicta';
    $request->key = 'harum';
    $request->oauthToken = 'enim';
    $request->parent = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new ServicenetworkingServicesDnsRecordSetsAddSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesDnsRecordSetsAddSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesDnsRecordSetsAdd($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesDnsRecordSetsRemove

Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsRemoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveDnsRecordSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DnsRecordSet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsRemoveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesDnsRecordSetsRemoveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->removeDnsRecordSetRequest = new RemoveDnsRecordSetRequest();
    $request->removeDnsRecordSetRequest->consumerNetwork = 'quidem';
    $request->removeDnsRecordSetRequest->dnsRecordSet = new DnsRecordSet();
    $request->removeDnsRecordSetRequest->dnsRecordSet->data = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->removeDnsRecordSetRequest->dnsRecordSet->domain = 'praesentium';
    $request->removeDnsRecordSetRequest->dnsRecordSet->ttl = 'rem';
    $request->removeDnsRecordSetRequest->dnsRecordSet->type = 'voluptates';
    $request->removeDnsRecordSetRequest->zone = 'quasi';
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'itaque';
    $request->key = 'incidunt';
    $request->oauthToken = 'enim';
    $request->parent = 'consequatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'est';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'explicabo';

    $requestSecurity = new ServicenetworkingServicesDnsRecordSetsRemoveSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesDnsRecordSetsRemove($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesDnsRecordSetsUpdate

Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDnsRecordSetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DnsRecordSet;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesDnsRecordSetsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateDnsRecordSetRequest = new UpdateDnsRecordSetRequest();
    $request->updateDnsRecordSetRequest->consumerNetwork = 'distinctio';
    $request->updateDnsRecordSetRequest->existingDnsRecordSet = new DnsRecordSet();
    $request->updateDnsRecordSetRequest->existingDnsRecordSet->data = [
        'labore',
        'modi',
        'qui',
        'aliquid',
    ];
    $request->updateDnsRecordSetRequest->existingDnsRecordSet->domain = 'cupiditate';
    $request->updateDnsRecordSetRequest->existingDnsRecordSet->ttl = 'quos';
    $request->updateDnsRecordSetRequest->existingDnsRecordSet->type = 'perferendis';
    $request->updateDnsRecordSetRequest->newDnsRecordSet = new DnsRecordSet();
    $request->updateDnsRecordSetRequest->newDnsRecordSet->data = [
        'assumenda',
    ];
    $request->updateDnsRecordSetRequest->newDnsRecordSet->domain = 'ipsam';
    $request->updateDnsRecordSetRequest->newDnsRecordSet->ttl = 'alias';
    $request->updateDnsRecordSetRequest->newDnsRecordSet->type = 'fugit';
    $request->updateDnsRecordSetRequest->zone = 'dolorum';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'tempore';
    $request->key = 'labore';
    $request->oauthToken = 'delectus';
    $request->parent = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new ServicenetworkingServicesDnsRecordSetsUpdateSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesDnsRecordSetsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesDnsZonesAdd

Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsZonesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddDnsZoneRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsZonesAddSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsZonesAddSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsZonesAddSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesDnsZonesAddRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addDnsZoneRequest = new AddDnsZoneRequest();
    $request->addDnsZoneRequest->consumerNetwork = 'provident';
    $request->addDnsZoneRequest->dnsSuffix = 'necessitatibus';
    $request->addDnsZoneRequest->name = 'Luke Fadel';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'illum';
    $request->key = 'maiores';
    $request->oauthToken = 'rerum';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'facere';

    $requestSecurity = new ServicenetworkingServicesDnsZonesAddSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesDnsZonesAddSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesDnsZonesAdd($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesDnsZonesRemove

Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsZonesRemoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RemoveDnsZoneRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsZonesRemoveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsZonesRemoveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesDnsZonesRemoveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesDnsZonesRemoveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->removeDnsZoneRequest = new RemoveDnsZoneRequest();
    $request->removeDnsZoneRequest->consumerNetwork = 'aliquid';
    $request->removeDnsZoneRequest->name = 'Tomas Friesen';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'provident';
    $request->key = 'nam';
    $request->oauthToken = 'id';
    $request->parent = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new ServicenetworkingServicesDnsZonesRemoveSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesDnsZonesRemoveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesDnsZonesRemove($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesEnableVpcServiceControls

Enables VPC service controls for a connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesEnableVpcServiceControlsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnableVpcServiceControlsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesEnableVpcServiceControlsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesEnableVpcServiceControlsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesEnableVpcServiceControlsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->enableVpcServiceControlsRequest = new EnableVpcServiceControlsRequest();
    $request->enableVpcServiceControlsRequest->consumerNetwork = 'nisi';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'omnis';
    $request->fields = 'molestiae';
    $request->key = 'perferendis';
    $request->oauthToken = 'nihil';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new ServicenetworkingServicesEnableVpcServiceControlsSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesEnableVpcServiceControlsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesEnableVpcServiceControls($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesProjectsGlobalNetworksGet

Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesProjectsGlobalNetworksGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'eum';
    $request->includeUsedIpRanges = false;
    $request->key = 'vero';
    $request->name = 'Ms. Julie Gusikowski';
    $request->oauthToken = 'provident';
    $request->pageSize = 551816;
    $request->pageToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new ServicenetworkingServicesProjectsGlobalNetworksGetSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesProjectsGlobalNetworksGet($request, $requestSecurity);

    if ($response->consumerConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreate

Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PeeredDnsDomain;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->peeredDnsDomain = new PeeredDnsDomain();
    $request->peeredDnsDomain->dnsSuffix = 'ad';
    $request->peeredDnsDomain->name = 'Carmen Treutel';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'debitis';
    $request->key = 'eius';
    $request->oauthToken = 'maxime';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDelete

Deletes a peered DNS domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'expedita';
    $request->fields = 'nihil';
    $request->key = 'repellat';
    $request->name = 'Louis Turner Sr.';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'sunt';

    $requestSecurity = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsList

Lists peered DNS domains for a connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'ea';
    $request->key = 'excepturi';
    $request->oauthToken = 'odit';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'maiores';

    $requestSecurity = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsList($request, $requestSecurity);

    if ($response->listPeeredDnsDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig

Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConsumerConfigRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ConsumerConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\CloudSQLConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateConsumerConfigRequestInput = new UpdateConsumerConfigRequestInput();
    $request->updateConsumerConfigRequestInput->consumerConfig = new ConsumerConfigInput();
    $request->updateConsumerConfigRequestInput->consumerConfig->cloudsqlConfigs = [
        new CloudSQLConfig(),
        new CloudSQLConfig(),
    ];
    $request->updateConsumerConfigRequestInput->consumerConfig->consumerExportCustomRoutes = false;
    $request->updateConsumerConfigRequestInput->consumerConfig->consumerExportSubnetRoutesWithPublicIp = false;
    $request->updateConsumerConfigRequestInput->consumerConfig->consumerImportCustomRoutes = false;
    $request->updateConsumerConfigRequestInput->consumerConfig->consumerImportSubnetRoutesWithPublicIp = false;
    $request->updateConsumerConfigRequestInput->consumerConfig->producerExportCustomRoutes = false;
    $request->updateConsumerConfigRequestInput->consumerConfig->producerExportSubnetRoutesWithPublicIp = false;
    $request->updateConsumerConfigRequestInput->consumerConfig->producerImportCustomRoutes = false;
    $request->updateConsumerConfigRequestInput->consumerConfig->producerImportSubnetRoutesWithPublicIp = false;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nam';
    $request->fields = 'eaque';
    $request->key = 'pariatur';
    $request->oauthToken = 'nemo';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesRolesAdd

Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesRolesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddRolesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PolicyBinding;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesRolesAddSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesRolesAddSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesRolesAddSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesRolesAddRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->addRolesRequest = new AddRolesRequest();
    $request->addRolesRequest->consumerNetwork = 'cumque';
    $request->addRolesRequest->policyBinding = [
        new PolicyBinding(),
        new PolicyBinding(),
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'dolores';
    $request->key = 'quis';
    $request->oauthToken = 'totam';
    $request->parent = 'dignissimos';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'nesciunt';

    $requestSecurity = new ServicenetworkingServicesRolesAddSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesRolesAddSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesRolesAdd($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesSearchRange

Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesSearchRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesSearchRangeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesSearchRangeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesSearchRangeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesSearchRangeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->searchRangeRequest = new SearchRangeRequest();
    $request->searchRangeRequest->ipPrefixLength = 18521;
    $request->searchRangeRequest->network = 'dolores';
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'vero';
    $request->key = 'nostrum';
    $request->oauthToken = 'hic';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'perspiciatis';

    $requestSecurity = new ServicenetworkingServicesSearchRangeSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesSearchRangeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesSearchRange($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicenetworkingServicesValidate

Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesValidateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValidateConsumerConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsumerProject;
use \OpenAPI\OpenAPI\Models\Shared\RangeReservation;
use \OpenAPI\OpenAPI\Models\Shared\Subnetwork;
use \OpenAPI\OpenAPI\Models\Shared\SecondaryIpRange;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesValidateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesValidateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicenetworkingServicesValidateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicenetworkingServicesValidateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->validateConsumerConfigRequest = new ValidateConsumerConfigRequest();
    $request->validateConsumerConfigRequest->checkServiceNetworkingUsePermission = false;
    $request->validateConsumerConfigRequest->consumerNetwork = 'porro';
    $request->validateConsumerConfigRequest->consumerProject = new ConsumerProject();
    $request->validateConsumerConfigRequest->consumerProject->projectNum = 'consequuntur';
    $request->validateConsumerConfigRequest->rangeReservation = new RangeReservation();
    $request->validateConsumerConfigRequest->rangeReservation->ipPrefixLength = 500026;
    $request->validateConsumerConfigRequest->rangeReservation->requestedRanges = [
        'eaque',
        'occaecati',
        'rerum',
    ];
    $request->validateConsumerConfigRequest->rangeReservation->secondaryRangeIpPrefixLengths = [
        992397,
    ];
    $request->validateConsumerConfigRequest->rangeReservation->subnetworkCandidates = [
        new Subnetwork(),
        new Subnetwork(),
        new Subnetwork(),
        new Subnetwork(),
    ];
    $request->validateConsumerConfigRequest->validateNetwork = false;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'deleniti';
    $request->key = 'pariatur';
    $request->oauthToken = 'provident';
    $request->parent = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new ServicenetworkingServicesValidateSecurity();
    $requestSecurity->option1 = new ServicenetworkingServicesValidateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicenetworkingServicesValidate($request, $requestSecurity);

    if ($response->validateConsumerConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
