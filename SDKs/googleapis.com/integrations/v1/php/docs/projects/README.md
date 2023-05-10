# projects

### Available Operations

* [integrationsProjectsGetClientmetadata](#integrationsprojectsgetclientmetadata) - Gets the metadata info for the requested client
* [integrationsProjectsLocationsAppsScriptProjectsCreate](#integrationsprojectslocationsappsscriptprojectscreate) - Creates an Apps Script project.
* [integrationsProjectsLocationsAppsScriptProjectsLink](#integrationsprojectslocationsappsscriptprojectslink) - Links a existing Apps Script project.
* [integrationsProjectsLocationsClientsDeprovision](#integrationsprojectslocationsclientsdeprovision) - Perform the deprovisioning steps to disable a user GCP project to use IP and purge all related data in a wipeout-compliant way.
* [integrationsProjectsLocationsClientsProvision](#integrationsprojectslocationsclientsprovision) - Perform the provisioning steps to enable a user GCP project to use IP. If GCP project already registered on IP end via Apigee Integration, provisioning will fail.
* [integrationsProjectsLocationsClientsSwitch](#integrationsprojectslocationsclientsswitch) - Update client from GMEK to CMEK
* [integrationsProjectsLocationsConnectionsList](#integrationsprojectslocationsconnectionslist) - Lists Connections in a given project and location.
* [integrationsProjectsLocationsConnectionsRuntimeActionSchemasList](#integrationsprojectslocationsconnectionsruntimeactionschemaslist) - Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
* [integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList](#integrationsprojectslocationsconnectionsruntimeentityschemaslist) - Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
* [integrationsProjectsLocationsGetClients](#integrationsprojectslocationsgetclients) - Gets the client configuration for the given project and location resource name
* [integrationsProjectsLocationsProductsAuthConfigsCreate](#integrationsprojectslocationsproductsauthconfigscreate) - Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
* [integrationsProjectsLocationsProductsAuthConfigsList](#integrationsprojectslocationsproductsauthconfigslist) - Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
* [integrationsProjectsLocationsProductsCertificatesCreate](#integrationsprojectslocationsproductscertificatescreate) - Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
* [integrationsProjectsLocationsProductsCertificatesList](#integrationsprojectslocationsproductscertificateslist) - List all the certificates that match the filter. Restrict to certificate of current client only.
* [integrationsProjectsLocationsProductsCloudFunctionsCreate](#integrationsprojectslocationsproductscloudfunctionscreate) - Creates an cloud function project.
* [integrationsProjectsLocationsProductsIntegrationsExecute](#integrationsprojectslocationsproductsintegrationsexecute) - Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsCancel](#integrationsprojectslocationsproductsintegrationsexecutionscancel) - Cancellation of an execution
* [integrationsProjectsLocationsProductsIntegrationsExecutionsList](#integrationsprojectslocationsproductsintegrationsexecutionslist) - Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionslift) - * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionslist) - * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionsresolve) - * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
* [integrationsProjectsLocationsProductsIntegrationsList](#integrationsprojectslocationsproductsintegrationslist) - Returns the list of all integrations in the specified project.
* [integrationsProjectsLocationsProductsIntegrationsSchedule](#integrationsprojectslocationsproductsintegrationsschedule) - Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
* [integrationsProjectsLocationsProductsIntegrationsTest](#integrationsprojectslocationsproductsintegrationstest) - Execute the integration in draft state
* [integrationsProjectsLocationsProductsIntegrationsVersionsCreate](#integrationsprojectslocationsproductsintegrationsversionscreate) - Create a integration with a draft version in the specified project.
* [integrationsProjectsLocationsProductsIntegrationsVersionsDownload](#integrationsprojectslocationsproductsintegrationsversionsdownload) - Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
* [integrationsProjectsLocationsProductsIntegrationsVersionsList](#integrationsprojectslocationsproductsintegrationsversionslist) - Returns the list of all integration versions in the specified project.
* [integrationsProjectsLocationsProductsIntegrationsVersionsPublish](#integrationsprojectslocationsproductsintegrationsversionspublish) - This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
* [integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock](#integrationsprojectslocationsproductsintegrationsversionstakeovereditlock) - Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
* [integrationsProjectsLocationsProductsIntegrationsVersionsUnpublish](#integrationsprojectslocationsproductsintegrationsversionsunpublish) - Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
* [integrationsProjectsLocationsProductsIntegrationsVersionsUpload](#integrationsprojectslocationsproductsintegrationsversionsupload) - Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
* [integrationsProjectsLocationsSfdcInstancesCreate](#integrationsprojectslocationssfdcinstancescreate) - Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
* [integrationsProjectsLocationsSfdcInstancesList](#integrationsprojectslocationssfdcinstanceslist) - Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate](#integrationsprojectslocationssfdcinstancessfdcchannelscreate) - Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete](#integrationsprojectslocationssfdcinstancessfdcchannelsdelete) - Deletes an sfdc channel.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet](#integrationsprojectslocationssfdcinstancessfdcchannelsget) - Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsList](#integrationsprojectslocationssfdcinstancessfdcchannelslist) - Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch](#integrationsprojectslocationssfdcinstancessfdcchannelspatch) - Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

## integrationsProjectsGetClientmetadata

Gets the metadata info for the requested client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsGetClientmetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsGetClientmetadataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsGetClientmetadataRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->parent = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new IntegrationsProjectsGetClientmetadataSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsGetClientmetadata($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaGetClientMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsAppsScriptProjectsCreate

Creates an Apps Script project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsAppsScriptProjectsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest = new GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest();
    $request->googleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest->appsScriptProject = 'fugit';
    $request->googleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest->authConfigId = 'deleniti';
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'beatae';
    $request->key = 'commodi';
    $request->oauthToken = 'molestiae';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new IntegrationsProjectsLocationsAppsScriptProjectsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsAppsScriptProjectsCreate($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsAppsScriptProjectsLink

Links a existing Apps Script project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest = new GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest();
    $request->googleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest->scriptId = 'ipsum';
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'ad';
    $request->key = 'natus';
    $request->oauthToken = 'sed';
    $request->parent = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

    $requestSecurity = new IntegrationsProjectsLocationsAppsScriptProjectsLinkSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsAppsScriptProjectsLink($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsClientsDeprovision

Perform the deprovisioning steps to disable a user GCP project to use IP and purge all related data in a wipeout-compliant way.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsClientsDeprovisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsClientsDeprovisionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsClientsDeprovisionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ];
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'mollitia';
    $request->key = 'laborum';
    $request->oauthToken = 'dolores';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new IntegrationsProjectsLocationsClientsDeprovisionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsClientsDeprovision($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsClientsProvision

Perform the provisioning steps to enable a user GCP project to use IP. If GCP project already registered on IP end via Apigee Integration, provisioning will fail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsClientsProvisionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaProvisionClientRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCloudKmsConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsClientsProvisionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsClientsProvisionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaProvisionClientRequest = new GoogleCloudIntegrationsV1alphaProvisionClientRequest();
    $request->googleCloudIntegrationsV1alphaProvisionClientRequest->cloudKmsConfig = new GoogleCloudIntegrationsV1alphaCloudKmsConfig();
    $request->googleCloudIntegrationsV1alphaProvisionClientRequest->cloudKmsConfig->key = 'omnis';
    $request->googleCloudIntegrationsV1alphaProvisionClientRequest->cloudKmsConfig->keyVersion = 'nemo';
    $request->googleCloudIntegrationsV1alphaProvisionClientRequest->cloudKmsConfig->kmsLocation = 'minima';
    $request->googleCloudIntegrationsV1alphaProvisionClientRequest->cloudKmsConfig->kmsProjectId = 'excepturi';
    $request->googleCloudIntegrationsV1alphaProvisionClientRequest->cloudKmsConfig->kmsRing = 'accusantium';
    $request->googleCloudIntegrationsV1alphaProvisionClientRequest->createSampleWorkflows = false;
    $request->googleCloudIntegrationsV1alphaProvisionClientRequest->provisionGmek = false;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'sapiente';
    $request->key = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->parent = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new IntegrationsProjectsLocationsClientsProvisionSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsClientsProvision($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsClientsSwitch

Update client from GMEK to CMEK

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsClientsSwitchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCloudKmsConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsClientsSwitchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsClientsSwitchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaSwitchEncryptionRequest = new GoogleCloudIntegrationsV1alphaSwitchEncryptionRequest();
    $request->googleCloudIntegrationsV1alphaSwitchEncryptionRequest->cloudKmsConfig = new GoogleCloudIntegrationsV1alphaCloudKmsConfig();
    $request->googleCloudIntegrationsV1alphaSwitchEncryptionRequest->cloudKmsConfig->key = 'occaecati';
    $request->googleCloudIntegrationsV1alphaSwitchEncryptionRequest->cloudKmsConfig->keyVersion = 'numquam';
    $request->googleCloudIntegrationsV1alphaSwitchEncryptionRequest->cloudKmsConfig->kmsLocation = 'commodi';
    $request->googleCloudIntegrationsV1alphaSwitchEncryptionRequest->cloudKmsConfig->kmsProjectId = 'quam';
    $request->googleCloudIntegrationsV1alphaSwitchEncryptionRequest->cloudKmsConfig->kmsRing = 'molestiae';
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quia';
    $request->fields = 'quis';
    $request->key = 'vitae';
    $request->oauthToken = 'laborum';
    $request->parent = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new IntegrationsProjectsLocationsClientsSwitchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsClientsSwitch($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsConnectionsList

Lists Connections in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsConnectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsConnectionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsConnectionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'possimus';
    $request->filter = 'aut';
    $request->key = 'quasi';
    $request->oauthToken = 'error';
    $request->orderBy = 'temporibus';
    $request->pageSize = 673660;
    $request->pageToken = 'quasi';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new IntegrationsProjectsLocationsConnectionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsConnectionsList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsConnectionsRuntimeActionSchemasList

Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'voluptate';
    $request->filter = 'cum';
    $request->key = 'perferendis';
    $request->oauthToken = 'doloremque';
    $request->pageSize = 441711;
    $request->pageToken = 'ut';
    $request->parent = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsConnectionsRuntimeActionSchemasList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList

Lists the JSON schemas for the properties of runtime entities, filtered by entity name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->filter = 'commodi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quae';
    $request->pageSize = 216822;
    $request->pageToken = 'quidem';
    $request->parent = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsGetClients

Gets the client configuration for the given project and location resource name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsGetClientsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsGetClientsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsGetClientsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'repudiandae';
    $request->key = 'sint';
    $request->oauthToken = 'veritatis';
    $request->parent = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'consequatur';

    $requestSecurity = new IntegrationsProjectsLocationsGetClientsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsGetClients($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaGetClientResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsAuthConfigsCreate

Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaAuthConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCredential;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaAuthToken;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaJwt;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaAccessToken;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaParameterMap;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaParameterMapEntry;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaParameterMapField;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaValueType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaOidcToken;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaServiceAccountCredentials;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaUsernameAndPassword;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaAuthConfigStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput = new GoogleCloudIntegrationsV1alphaAuthConfigInput();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->certificateId = 'quibusdam';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->creatorEmail = 'explicabo';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->credentialType = GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum::JWT;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential = new GoogleCloudIntegrationsV1alphaCredential();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->authToken = new GoogleCloudIntegrationsV1alphaAuthToken();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->authToken->token = 'distinctio';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->authToken->type = 'quibusdam';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->credentialType = GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum::OAUTH2_AUTHORIZATION_CODE;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->jwt = new GoogleCloudIntegrationsV1alphaJwt();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->jwt->jwt = 'modi';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->jwt->jwtHeader = 'qui';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->jwt->jwtPayload = 'aliquid';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->jwt->secret = 'cupiditate';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode = new GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken = new GoogleCloudIntegrationsV1alphaAccessToken();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken->accessToken = 'quos';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken->accessTokenExpireTime = 'perferendis';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken->refreshToken = 'magni';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken->refreshTokenExpireTime = 'assumenda';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken->tokenType = 'ipsam';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->applyReauthPolicy = false;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authCode = 'alias';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authEndpoint = 'fugit';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authParams = new GoogleCloudIntegrationsV1alphaParameterMap();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authParams->entries = [
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authParams->keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum::INT_ARRAY;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authParams->valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum::DOUBLE_VALUE;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->clientId = 'facilis';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->clientSecret = 'tempore';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->requestType = GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum::REQUEST_BODY;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->scope = 'delectus';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->tokenEndpoint = 'eum';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->tokenParams = new GoogleCloudIntegrationsV1alphaParameterMap();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->tokenParams->entries = [
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->tokenParams->keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum::JSON_VALUE;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->tokenParams->valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum::INT_ARRAY;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials = new GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken = new GoogleCloudIntegrationsV1alphaAccessToken();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken->accessToken = 'aliquid';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken->accessTokenExpireTime = 'provident';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken->refreshToken = 'necessitatibus';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken->refreshTokenExpireTime = 'sint';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken->tokenType = 'officia';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->clientId = 'dolor';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->clientSecret = 'debitis';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->requestType = GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum::ENCODED_HEADER;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->scope = 'dolorum';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->tokenEndpoint = 'in';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->tokenParams = new GoogleCloudIntegrationsV1alphaParameterMap();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->tokenParams->entries = [
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->tokenParams->keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum::PROTO_VALUE;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->tokenParams->valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum::PROTO_ARRAY;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials = new GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken = new GoogleCloudIntegrationsV1alphaAccessToken();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken->accessToken = 'rerum';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken->accessTokenExpireTime = 'dicta';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken->refreshToken = 'magnam';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken->refreshTokenExpireTime = 'cumque';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken->tokenType = 'facere';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->clientId = 'ea';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->clientSecret = 'aliquid';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->password = 'laborum';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->requestType = GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum::ENCODED_HEADER;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->scope = 'non';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->tokenEndpoint = 'occaecati';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->tokenParams = new GoogleCloudIntegrationsV1alphaParameterMap();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->tokenParams->entries = [
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->tokenParams->keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum::PROTO_VALUE;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->tokenParams->valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum::PROTO_ARRAY;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->username = 'Matilda_McKenzie50';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oidcToken = new GoogleCloudIntegrationsV1alphaOidcToken();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oidcToken->audience = 'deleniti';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oidcToken->serviceAccountEmail = 'sapiente';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oidcToken->token = 'amet';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oidcToken->tokenExpireTime = 'deserunt';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->serviceAccountCredentials = new GoogleCloudIntegrationsV1alphaServiceAccountCredentials();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->serviceAccountCredentials->scope = 'nisi';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->serviceAccountCredentials->serviceAccount = 'vel';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->usernameAndPassword = new GoogleCloudIntegrationsV1alphaUsernameAndPassword();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->usernameAndPassword->password = 'natus';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->usernameAndPassword->username = 'Lenna47';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->description = 'magnam';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->displayName = 'distinctio';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->encryptedCredential = 'id';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->expiryNotificationDuration = [
        'labore',
        'suscipit',
    ];
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->lastModifierEmail = 'natus';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->name = 'Duane Thiel II';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->overrideValidTime = 'et';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->reason = 'excepturi';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->state = GoogleCloudIntegrationsV1alphaAuthConfigStateEnum::INVALID;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->validTime = 'provident';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->visibility = GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum::PRIVATE;
    $request->accessToken = 'sint';
    $request->alt = AltEnum::JSON;
    $request->callback = 'mollitia';
    $request->clientCertificateEncryptedPrivateKey = 'reiciendis';
    $request->clientCertificatePassphrase = 'mollitia';
    $request->clientCertificateSslCertificate = 'ad';
    $request->fields = 'eum';
    $request->key = 'dolor';
    $request->oauthToken = 'necessitatibus';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new IntegrationsProjectsLocationsProductsAuthConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsAuthConfigsCreate($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaAuthConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsAuthConfigsList

Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsAuthConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsAuthConfigsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsAuthConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'deleniti';
    $request->filter = 'facilis';
    $request->key = 'in';
    $request->oauthToken = 'architecto';
    $request->pageSize = 99569;
    $request->pageToken = 'repudiandae';
    $request->parent = 'ullam';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->readMask = 'nihil';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new IntegrationsProjectsLocationsProductsAuthConfigsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsAuthConfigsList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListAuthConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsCertificatesCreate

Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsCertificatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCertificateInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaClientCertificate;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsCertificatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsCertificatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaCertificateInput = new GoogleCloudIntegrationsV1alphaCertificateInput();
    $request->googleCloudIntegrationsV1alphaCertificateInput->certificateStatus = GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum::EXPIRED;
    $request->googleCloudIntegrationsV1alphaCertificateInput->credentialId = 'pariatur';
    $request->googleCloudIntegrationsV1alphaCertificateInput->description = 'accusantium';
    $request->googleCloudIntegrationsV1alphaCertificateInput->displayName = 'consequuntur';
    $request->googleCloudIntegrationsV1alphaCertificateInput->rawCertificate = new GoogleCloudIntegrationsV1alphaClientCertificate();
    $request->googleCloudIntegrationsV1alphaCertificateInput->rawCertificate->encryptedPrivateKey = 'praesentium';
    $request->googleCloudIntegrationsV1alphaCertificateInput->rawCertificate->passphrase = 'natus';
    $request->googleCloudIntegrationsV1alphaCertificateInput->rawCertificate->sslCertificate = 'magni';
    $request->googleCloudIntegrationsV1alphaCertificateInput->requestorId = 'sunt';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'maxime';
    $request->key = 'ea';
    $request->oauthToken = 'excepturi';
    $request->parent = 'odit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new IntegrationsProjectsLocationsProductsCertificatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsCertificatesCreate($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsCertificatesList

List all the certificates that match the filter. Restrict to certificate of current client only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsCertificatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsCertificatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsCertificatesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'autem';
    $request->filter = 'nam';
    $request->key = 'eaque';
    $request->oauthToken = 'pariatur';
    $request->pageSize = 365496;
    $request->pageToken = 'voluptatibus';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->readMask = 'amet';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new IntegrationsProjectsLocationsProductsCertificatesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsCertificatesList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsCloudFunctionsCreate

Creates an cloud function project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsCloudFunctionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsCloudFunctionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsCloudFunctionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaCreateCloudFunctionRequest = new GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest();
    $request->googleCloudIntegrationsV1alphaCreateCloudFunctionRequest->functionName = 'hic';
    $request->googleCloudIntegrationsV1alphaCreateCloudFunctionRequest->functionRegion = 'libero';
    $request->googleCloudIntegrationsV1alphaCreateCloudFunctionRequest->projectId = 'nobis';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'dignissimos';
    $request->key = 'eaque';
    $request->oauthToken = 'quis';
    $request->parent = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new IntegrationsProjectsLocationsProductsCloudFunctionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsCloudFunctionsCreate($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaCreateCloudFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsExecute

Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaValueType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventParameters;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest = new GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest();
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->doNotPropagateError = false;
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->executionId = 'quam';
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->inputParameters = [
        'vero' => new GoogleCloudIntegrationsV1alphaValueType(),
    ];
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->parameterEntries = [
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->parameters = new EnterpriseCrmFrontendsEventbusProtoEventParameters();
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->parameters->parameters = [
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->requestId = 'recusandae';
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->triggerId = 'omnis';
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'porro';
    $request->key = 'consequuntur';
    $request->name = 'Jeremiah Beatty';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsExecuteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsExecute($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaExecuteIntegrationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsExecutionsCancel

Cancellation of an execution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'deleniti' => 'pariatur',
        'provident' => 'nobis',
        'libero' => 'delectus',
    ];
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'dolorem';
    $request->key = 'dolorem';
    $request->name = 'Norma Erdman';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsExecutionsCancel($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaCancelExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsExecutionsList

Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'veritatis';
    $request->fields = 'ipsa';
    $request->filter = 'ipsa';
    $request->filterParamsCustomFilter = 'iure';
    $request->filterParamsEndTime = 'odio';
    $request->filterParamsEventStatuses = [
        'accusamus',
        'quidem',
    ];
    $request->filterParamsExecutionId = 'voluptatibus';
    $request->filterParamsParameterKey = 'voluptas';
    $request->filterParamsParameterPairKey = 'natus';
    $request->filterParamsParameterPairValue = 'eos';
    $request->filterParamsParameterType = 'atque';
    $request->filterParamsParameterValue = 'sit';
    $request->filterParamsStartTime = 'fugiat';
    $request->filterParamsTaskStatuses = [
        'soluta',
    ];
    $request->filterParamsWorkflowName = 'dolorum';
    $request->key = 'iusto';
    $request->oauthToken = 'voluptate';
    $request->orderBy = 'dolorum';
    $request->pageSize = 536579;
    $request->pageToken = 'omnis';
    $request->parent = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->readMask = 'asperiores';
    $request->refreshAcl = false;
    $request->truncateParams = false;
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsExecutionsList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift

* Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaLiftSuspensionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaLiftSuspensionRequest = new GoogleCloudIntegrationsV1alphaLiftSuspensionRequest();
    $request->googleCloudIntegrationsV1alphaLiftSuspensionRequest->suspensionResult = 'id';
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'perferendis';
    $request->key = 'amet';
    $request->name = 'Tomas Hammes';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'repellendus';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaLiftSuspensionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList

* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'quaerat';
    $request->filter = 'tempora';
    $request->key = 'vel';
    $request->oauthToken = 'quod';
    $request->orderBy = 'officiis';
    $request->pageSize = 185636;
    $request->pageToken = 'dolorum';
    $request->parent = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListSuspensionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve

* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSuspensionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSuspensionAudit;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSuspensionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSuspensionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoNotification;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoBuganizerNotification;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoAddress;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoToken;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoCustomSuspensionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoEventParameters;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParameterValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoProtoParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSerializedObjectParameter;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriorityEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSuspensionExpiration;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSuspensionAuthPermissions;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput = new GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension = new GoogleCloudIntegrationsV1alphaSuspensionInput();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig = new GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig->customMessage = 'quisquam';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig->emailAddresses = [
        'amet',
        'tempore',
        'accusamus',
        'numquam',
    ];
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig->expiration = new GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig->expiration->liftWhenExpired = false;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig->expiration->remindTime = 'enim';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->audit = new GoogleCloudIntegrationsV1alphaSuspensionAudit();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->audit->resolveTime = 'dolorem';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->audit->resolver = 'sapiente';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->eventExecutionInfoId = 'totam';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->integration = 'nihil';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->name = 'Mamie Durgan';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->state = GoogleCloudIntegrationsV1alphaSuspensionStateEnum::REJECTED;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig = new EnterpriseCrmEventbusProtoSuspensionConfig();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->customMessage = 'voluptas';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->notifications = [
        new EnterpriseCrmEventbusProtoNotification(),
        new EnterpriseCrmEventbusProtoNotification(),
        new EnterpriseCrmEventbusProtoNotification(),
    ];
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->suspensionExpiration = new EnterpriseCrmEventbusProtoSuspensionExpiration();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->suspensionExpiration->expireAfterMs = 463575;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->suspensionExpiration->liftWhenExpired = false;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->suspensionExpiration->remindAfterMs = 214880;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->whoMayResolve = [
        new EnterpriseCrmEventbusProtoSuspensionAuthPermissions(),
        new EnterpriseCrmEventbusProtoSuspensionAuthPermissions(),
    ];
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->taskId = 'qui';
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'soluta';
    $request->key = 'dicta';
    $request->name = 'Felix Gorczany';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'quam';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaResolveSuspensionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsList

Returns the list of all integrations in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'neque';
    $request->fields = 'fugit';
    $request->filter = 'magni';
    $request->key = 'odio';
    $request->oauthToken = 'sunt';
    $request->orderBy = 'ullam';
    $request->pageSize = 722081;
    $request->pageToken = 'hic';
    $request->parent = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListIntegrationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsSchedule

Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaValueType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoEventParameters;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParameterValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoProtoParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSerializedObjectParameter;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsScheduleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest = new GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest();
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest->inputParameters = [
        'ipsum' => new GoogleCloudIntegrationsV1alphaValueType(),
        'veritatis' => new GoogleCloudIntegrationsV1alphaValueType(),
        'nobis' => new GoogleCloudIntegrationsV1alphaValueType(),
        'quos' => new GoogleCloudIntegrationsV1alphaValueType(),
    ];
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest->parameterEntries = [
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest->parameters = new EnterpriseCrmEventbusProtoEventParameters();
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest->parameters->parameters = [
        new EnterpriseCrmEventbusProtoParameterEntry(),
        new EnterpriseCrmEventbusProtoParameterEntry(),
        new EnterpriseCrmEventbusProtoParameterEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest->requestId = 'aperiam';
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest->scheduleTime = 'delectus';
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest->triggerId = 'dolorem';
    $request->accessToken = 'dolore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'dolorum';
    $request->key = 'architecto';
    $request->name = 'Margaret Luettgen MD';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsScheduleSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsSchedule($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaScheduleIntegrationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsTest

Execute the integration in draft state

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsTestRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTestIntegrationsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaValueType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaErrorCatcherConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCoordinate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaNextTask;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoAttributes;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoAttributesDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoDoubleArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoIntArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoStringArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoLogSettings;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsSanitizeOptions;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsFieldLimits;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoAttributesSearchableEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoNodeIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTaskConfigExternalTaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaFailurePolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaEventParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSuccessPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskAlertConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoFailurePolicy;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoNextTask;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoCombinedCondition;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoCondition;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoConditionOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoCoordinate;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoRollbackStrategy;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventParameters;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSuccessPolicy;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskEntity;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadata;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataAdmin;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataSystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParamSpecEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryValidationRule;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusStats;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusStatsDimensions;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskUiConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskUiModuleConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTeardown;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTeardownTaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoNextTeardownTask;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoEventParameters;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParameterValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoProtoParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSerializedObjectParameter;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoEventBusProperties;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoPropertyEntry;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTriggerConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationAlertConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCloudSchedulerConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTriggerConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoWorkflowAlertConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoCloudSchedulerConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTriggerCriteria;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsTestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsTestRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput = new GoogleCloudIntegrationsV1alphaTestIntegrationsRequestInput();
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->clientId = 'cupiditate';
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->deadlineSecondsTime = 'qui';
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->inputParameters = [
        'laudantium' => new GoogleCloudIntegrationsV1alphaValueType(),
    ];
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion = new GoogleCloudIntegrationsV1alphaIntegrationVersionInput();
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->databasePersistencePolicy = GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum::DATABASE_PERSISTENCE_POLICY_UNSPECIFIED;
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->description = 'occaecati';
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->errorCatcherConfigs = [
        new GoogleCloudIntegrationsV1alphaErrorCatcherConfig(),
        new GoogleCloudIntegrationsV1alphaErrorCatcherConfig(),
        new GoogleCloudIntegrationsV1alphaErrorCatcherConfig(),
        new GoogleCloudIntegrationsV1alphaErrorCatcherConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->integrationParameters = [
        new GoogleCloudIntegrationsV1alphaIntegrationParameter(),
        new GoogleCloudIntegrationsV1alphaIntegrationParameter(),
        new GoogleCloudIntegrationsV1alphaIntegrationParameter(),
        new GoogleCloudIntegrationsV1alphaIntegrationParameter(),
    ];
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->integrationParametersInternal = new EnterpriseCrmFrontendsEventbusProtoWorkflowParameters();
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->integrationParametersInternal->parameters = [
        new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->lastModifierEmail = 'omnis';
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->lockHolder = 'quis';
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->origin = GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum::UI;
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->parentTemplateId = 'delectus';
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->runAsServiceAccount = 'voluptate';
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->snapshotNumber = 'consectetur';
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->taskConfigs = [
        new GoogleCloudIntegrationsV1alphaTaskConfig(),
        new GoogleCloudIntegrationsV1alphaTaskConfig(),
        new GoogleCloudIntegrationsV1alphaTaskConfig(),
        new GoogleCloudIntegrationsV1alphaTaskConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->taskConfigsInternal = [
        new EnterpriseCrmFrontendsEventbusProtoTaskConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTaskConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTaskConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTaskConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->teardown = new EnterpriseCrmEventbusProtoTeardown();
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->teardown->teardownTaskConfigs = [
        new EnterpriseCrmEventbusProtoTeardownTaskConfig(),
        new EnterpriseCrmEventbusProtoTeardownTaskConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->triggerConfigs = [
        new GoogleCloudIntegrationsV1alphaTriggerConfig(),
        new GoogleCloudIntegrationsV1alphaTriggerConfig(),
        new GoogleCloudIntegrationsV1alphaTriggerConfig(),
        new GoogleCloudIntegrationsV1alphaTriggerConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->triggerConfigsInternal = [
        new EnterpriseCrmFrontendsEventbusProtoTriggerConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTriggerConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTriggerConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->integrationVersion->userLabel = 'quod';
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->parameters = new EnterpriseCrmFrontendsEventbusProtoEventParameters();
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->parameters->parameters = [
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->testMode = false;
    $request->googleCloudIntegrationsV1alphaTestIntegrationsRequestInput->triggerId = 'similique';
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ducimus';
    $request->fields = 'dolore';
    $request->key = 'quibusdam';
    $request->name = 'Earl Mosciski DVM';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->quotaUser = 'nulla';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsTestSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsTest($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaTestIntegrationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsVersionsCreate

Create a integration with a draft version in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaErrorCatcherConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCoordinate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaNextTask;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationParameterDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaValueType;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationParameterInputOutputTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoAttributes;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoAttributesDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoDoubleArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoIntArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoStringArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoLogSettings;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsSanitizeOptions;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsSanitizeOptionsLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsSanitizeOptionsPrivacyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoLogSettingsSeedPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoLogSettingsSeedScopeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsFieldLimits;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoAttributesSearchableEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoNodeIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTaskConfigExternalTaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaFailurePolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaEventParameter;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSuccessPolicy;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskAlertConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoFailurePolicy;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoFailurePolicyRetryStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoNextTask;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoCombinedCondition;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoCondition;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoConditionOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoCoordinate;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoRollbackStrategy;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoEventParameters;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSuccessPolicy;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskEntity;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadata;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataAdmin;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataExternalCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskMetadataSystemEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParamSpecEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParamSpecEntryDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryValidationRule;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusStats;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusStatsDimensions;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusStatsDimensionsEnumFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusStatsDimensionsRetryAttemptEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskUiConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskUiModuleConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTeardown;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTeardownTaskConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoNextTeardownTask;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoEventParameters;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoParameterValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoProtoParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoSerializedObjectParameter;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoStringParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoEventBusProperties;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoPropertyEntry;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTriggerConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationAlertConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCloudSchedulerConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTriggerConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoWorkflowAlertConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoCloudSchedulerConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTriggerCriteria;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput = new GoogleCloudIntegrationsV1alphaIntegrationVersionInput();
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->databasePersistencePolicy = GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum::DATABASE_PERSISTENCE_DISABLED;
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->description = 'iusto';
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->errorCatcherConfigs = [
        new GoogleCloudIntegrationsV1alphaErrorCatcherConfig(),
        new GoogleCloudIntegrationsV1alphaErrorCatcherConfig(),
        new GoogleCloudIntegrationsV1alphaErrorCatcherConfig(),
        new GoogleCloudIntegrationsV1alphaErrorCatcherConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->integrationParameters = [
        new GoogleCloudIntegrationsV1alphaIntegrationParameter(),
        new GoogleCloudIntegrationsV1alphaIntegrationParameter(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->integrationParametersInternal = new EnterpriseCrmFrontendsEventbusProtoWorkflowParameters();
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->integrationParametersInternal->parameters = [
        new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->lastModifierEmail = 'officia';
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->lockHolder = 'tempora';
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->origin = GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum::UI;
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->parentTemplateId = 'ea';
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->runAsServiceAccount = 'aspernatur';
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->snapshotNumber = 'vel';
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->taskConfigs = [
        new GoogleCloudIntegrationsV1alphaTaskConfig(),
        new GoogleCloudIntegrationsV1alphaTaskConfig(),
        new GoogleCloudIntegrationsV1alphaTaskConfig(),
        new GoogleCloudIntegrationsV1alphaTaskConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->taskConfigsInternal = [
        new EnterpriseCrmFrontendsEventbusProtoTaskConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTaskConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->teardown = new EnterpriseCrmEventbusProtoTeardown();
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->teardown->teardownTaskConfigs = [
        new EnterpriseCrmEventbusProtoTeardownTaskConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->triggerConfigs = [
        new GoogleCloudIntegrationsV1alphaTriggerConfig(),
        new GoogleCloudIntegrationsV1alphaTriggerConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->triggerConfigsInternal = [
        new EnterpriseCrmFrontendsEventbusProtoTriggerConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTriggerConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTriggerConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationVersionInput->userLabel = 'dicta';
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'ex';
    $request->key = 'nulla';
    $request->newIntegration = false;
    $request->oauthToken = 'excepturi';
    $request->parent = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'nostrum';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'quisquam';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsVersionsCreate($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaIntegrationVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsVersionsDownload

Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'corporis';
    $request->fields = 'veniam';
    $request->fileFormat = IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadFileFormatEnum::JSON;
    $request->key = 'inventore';
    $request->name = 'Rosemary Ryan';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'a';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsVersionsDownload($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsVersionsList

Returns the list of all integration versions in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fieldMask = 'impedit';
    $request->fields = 'aliquam';
    $request->filter = 'fugit';
    $request->key = 'accusamus';
    $request->oauthToken = 'inventore';
    $request->orderBy = 'non';
    $request->pageSize = 89603;
    $request->pageToken = 'dolorum';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsVersionsList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListIntegrationVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsVersionsPublish

This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'quas' => 'assumenda',
        'nulla' => 'voluptas',
        'libero' => 'quasi',
        'tempora' => 'numquam',
    ];
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsa';
    $request->fields = 'molestiae';
    $request->key = 'magnam';
    $request->name = 'Esther Koch';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'reprehenderit';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'fugiat';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsVersionsPublish($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaPublishIntegrationVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock

Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'suscipit' => 'assumenda',
        'eos' => 'praesentium',
    ];
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'id';
    $request->integrationVersion = 'quidem';
    $request->key = 'neque';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaTakeoverEditLockResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsVersionsUnpublish

Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'voluptas' => 'ab',
    ];
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'debitis';
    $request->key = 'ipsam';
    $request->name = 'Emily Satterfield';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsVersionsUnpublishSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsVersionsUnpublish($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationsVersionsUpload

Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaUploadIntegrationVersionRequest = new GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest();
    $request->googleCloudIntegrationsV1alphaUploadIntegrationVersionRequest->content = 'nihil';
    $request->googleCloudIntegrationsV1alphaUploadIntegrationVersionRequest->fileFormat = GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum::JSON;
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->fields = 'occaecati';
    $request->key = 'commodi';
    $request->oauthToken = 'sapiente';
    $request->parent = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationsVersionsUpload($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaUploadIntegrationVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsSfdcInstancesCreate

Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSfdcInstanceInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsSfdcInstancesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput = new GoogleCloudIntegrationsV1alphaSfdcInstanceInput();
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->authConfigId = [
        'quas',
        'praesentium',
    ];
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->description = 'consequuntur';
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->displayName = 'deleniti';
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->name = 'Lee O'Conner';
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->serviceAuthority = 'explicabo';
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->sfdcOrgId = 'minima';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'consequuntur';
    $request->key = 'ratione';
    $request->oauthToken = 'explicabo';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'et';

    $requestSecurity = new IntegrationsProjectsLocationsSfdcInstancesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsSfdcInstancesCreate($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaSfdcInstance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsSfdcInstancesList

Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsSfdcInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veritatis';
    $request->fields = 'esse';
    $request->filter = 'quod';
    $request->key = 'nam';
    $request->oauthToken = 'vero';
    $request->pageSize = 399025;
    $request->pageToken = 'quasi';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->readMask = 'harum';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new IntegrationsProjectsLocationsSfdcInstancesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsSfdcInstancesList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListSfdcInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate

Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSfdcChannelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput = new GoogleCloudIntegrationsV1alphaSfdcChannelInput();
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->channelTopic = 'minima';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->description = 'distinctio';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->displayName = 'eligendi';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->isActive = false;
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->lastReplayId = 'sit';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->name = 'Randolph Fisher';
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->fields = 'sapiente';
    $request->key = 'consectetur';
    $request->oauthToken = 'esse';
    $request->parent = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaSfdcChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete

Deletes an sfdc channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'a';
    $request->fields = 'error';
    $request->key = 'sint';
    $request->name = 'Rufus Crona';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete($request, $requestSecurity);

    if ($response->googleProtobufEmpty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet

Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tenetur';
    $request->fields = 'quae';
    $request->key = 'earum';
    $request->name = 'Pearl Gerlach';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaSfdcChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsSfdcInstancesSfdcChannelsList

Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->fields = 'nisi';
    $request->filter = 'aut';
    $request->key = 'voluptatum';
    $request->oauthToken = 'qui';
    $request->pageSize = 845358;
    $request->pageToken = 'ex';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->readMask = 'dolorum';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsSfdcInstancesSfdcChannelsList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListSfdcChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch

Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSfdcChannelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput = new GoogleCloudIntegrationsV1alphaSfdcChannelInput();
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->channelTopic = 'quasi';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->description = 'at';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->displayName = 'et';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->isActive = false;
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->lastReplayId = 'voluptate';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->name = 'Joann Bogan';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->clientCertificatePassphrase = 'rem';
    $request->clientCertificateSslCertificate = 'aut';
    $request->fields = 'laudantium';
    $request->key = 'eum';
    $request->name = 'Andrew Little I';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'numquam';
    $request->updateMask = 'impedit';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaSfdcChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
