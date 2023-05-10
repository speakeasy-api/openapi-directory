# projects

### Available Operations

* [integrationsProjectsLocationsAppsScriptProjectsCreate](#integrationsprojectslocationsappsscriptprojectscreate) - Creates an Apps Script project.
* [integrationsProjectsLocationsAppsScriptProjectsLink](#integrationsprojectslocationsappsscriptprojectslink) - Links a existing Apps Script project.
* [integrationsProjectsLocationsConnectionsList](#integrationsprojectslocationsconnectionslist) - Lists Connections in a given project and location.
* [integrationsProjectsLocationsConnectionsRuntimeActionSchemasList](#integrationsprojectslocationsconnectionsruntimeactionschemaslist) - Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
* [integrationsProjectsLocationsConnectionsRuntimeEntitySchemasList](#integrationsprojectslocationsconnectionsruntimeentityschemaslist) - Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
* [integrationsProjectsLocationsProductsAuthConfigsCreate](#integrationsprojectslocationsproductsauthconfigscreate) - Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
* [integrationsProjectsLocationsProductsAuthConfigsList](#integrationsprojectslocationsproductsauthconfigslist) - Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
* [integrationsProjectsLocationsProductsCertificatesCreate](#integrationsprojectslocationsproductscertificatescreate) - Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
* [integrationsProjectsLocationsProductsCertificatesList](#integrationsprojectslocationsproductscertificateslist) - List all the certificates that match the filter. Restrict to certificate of current client only.
* [integrationsProjectsLocationsProductsIntegrationsExecute](#integrationsprojectslocationsproductsintegrationsexecute) - Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsCancel](#integrationsprojectslocationsproductsintegrationsexecutionscancel) - Cancellation of an execution
* [integrationsProjectsLocationsProductsIntegrationsExecutionsList](#integrationsprojectslocationsproductsintegrationsexecutionslist) - Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLift](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionslift) - * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsList](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionslist) - * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
* [integrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolve](#integrationsprojectslocationsproductsintegrationsexecutionssuspensionsresolve) - * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
* [integrationsProjectsLocationsProductsIntegrationsList](#integrationsprojectslocationsproductsintegrationslist) - Returns the list of all integrations in the specified project.
* [integrationsProjectsLocationsProductsIntegrationsSchedule](#integrationsprojectslocationsproductsintegrationsschedule) - Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
* [integrationsProjectsLocationsProductsIntegrationsVersionsDownload](#integrationsprojectslocationsproductsintegrationsversionsdownload) - Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
* [integrationsProjectsLocationsProductsIntegrationsVersionsPublish](#integrationsprojectslocationsproductsintegrationsversionspublish) - This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
* [integrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLock](#integrationsprojectslocationsproductsintegrationsversionstakeovereditlock) - Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
* [integrationsProjectsLocationsProductsIntegrationsVersionsUnpublish](#integrationsprojectslocationsproductsintegrationsversionsunpublish) - Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
* [integrationsProjectsLocationsProductsIntegrationsVersionsUpload](#integrationsprojectslocationsproductsintegrationsversionsupload) - Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
* [integrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate](#integrationsprojectslocationsproductsintegrationtemplatesversionscreate) - Creates an IntegrationTemplateVersion.
* [integrationsProjectsLocationsProductsIntegrationtemplatesVersionsList](#integrationsprojectslocationsproductsintegrationtemplatesversionslist) - Returns the list of all IntegrationTemplateVersions in the specified project.
* [integrationsProjectsLocationsSfdcInstancesCreate](#integrationsprojectslocationssfdcinstancescreate) - Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
* [integrationsProjectsLocationsSfdcInstancesList](#integrationsprojectslocationssfdcinstanceslist) - Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsCreate](#integrationsprojectslocationssfdcinstancessfdcchannelscreate) - Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsDelete](#integrationsprojectslocationssfdcinstancessfdcchannelsdelete) - Deletes an sfdc channel.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsGet](#integrationsprojectslocationssfdcinstancessfdcchannelsget) - Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsList](#integrationsprojectslocationssfdcinstancessfdcchannelslist) - Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
* [integrationsProjectsLocationsSfdcInstancesSfdcChannelsPatch](#integrationsprojectslocationssfdcinstancessfdcchannelspatch) - Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

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
    $request->googleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest->appsScriptProject = 'molestiae';
    $request->googleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest->authConfigId = 'quod';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'totam';
    $request->fields = 'porro';
    $request->key = 'dolorum';
    $request->oauthToken = 'dicta';
    $request->parent = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'fugit';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest = new GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest();
    $request->googleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest->scriptId = 'hic';
    $request->accessToken = 'optio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->oauthToken = 'modi';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'esse';

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
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'ad';
    $request->filter = 'natus';
    $request->key = 'sed';
    $request->oauthToken = 'iste';
    $request->orderBy = 'dolor';
    $request->pageSize = 616934;
    $request->pageToken = 'laboriosam';
    $request->parent = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->filter = 'architecto';
    $request->key = 'ipsa';
    $request->oauthToken = 'reiciendis';
    $request->pageSize = 666767;
    $request->pageToken = 'mollitia';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'corporis';

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
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'nemo';
    $request->filter = 'minima';
    $request->key = 'excepturi';
    $request->oauthToken = 'accusantium';
    $request->pageSize = 438601;
    $request->pageToken = 'culpa';
    $request->parent = 'doloribus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'mollitia';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput = new GoogleCloudIntegrationsV1alphaAuthConfigInput();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->certificateId = 'culpa';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->creatorEmail = 'consequuntur';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->credentialType = GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum::OIDC_TOKEN;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential = new GoogleCloudIntegrationsV1alphaCredential();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->authToken = new GoogleCloudIntegrationsV1alphaAuthToken();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->authToken->token = 'mollitia';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->authToken->type = 'occaecati';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->credentialType = GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum::OAUTH2_AUTHORIZATION_CODE;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->jwt = new GoogleCloudIntegrationsV1alphaJwt();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->jwt->jwt = 'commodi';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->jwt->jwtHeader = 'quam';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->jwt->jwtPayload = 'molestiae';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->jwt->secret = 'velit';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode = new GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken = new GoogleCloudIntegrationsV1alphaAccessToken();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken->accessToken = 'error';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken->accessTokenExpireTime = 'quia';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken->refreshToken = 'quis';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken->refreshTokenExpireTime = 'vitae';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->accessToken->tokenType = 'laborum';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->applyReauthPolicy = false;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authCode = 'animi';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authEndpoint = 'enim';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authParams = new GoogleCloudIntegrationsV1alphaParameterMap();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authParams->entries = [
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authParams->keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum::JSON_VALUE;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->authParams->valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum::INT_VALUE;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->clientId = 'tenetur';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->clientSecret = 'ipsam';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->requestType = GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum::QUERY_PARAMETERS;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->scope = 'possimus';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->tokenEndpoint = 'aut';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->tokenParams = new GoogleCloudIntegrationsV1alphaParameterMap();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->tokenParams->entries = [
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->tokenParams->keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum::DOUBLE_ARRAY;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2AuthorizationCode->tokenParams->valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum::PROTO_VALUE;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials = new GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken = new GoogleCloudIntegrationsV1alphaAccessToken();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken->accessToken = 'laborum';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken->accessTokenExpireTime = 'quasi';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken->refreshToken = 'reiciendis';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken->refreshTokenExpireTime = 'voluptatibus';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->accessToken->tokenType = 'vero';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->clientId = 'nihil';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->clientSecret = 'praesentium';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->requestType = GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsRequestTypeEnum::ENCODED_HEADER;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->scope = 'ipsa';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->tokenEndpoint = 'omnis';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->tokenParams = new GoogleCloudIntegrationsV1alphaParameterMap();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->tokenParams->entries = [
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->tokenParams->keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum::BOOLEAN_ARRAY;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ClientCredentials->tokenParams->valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum::INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials = new GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken = new GoogleCloudIntegrationsV1alphaAccessToken();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken->accessToken = 'doloremque';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken->accessTokenExpireTime = 'reprehenderit';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken->refreshToken = 'ut';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken->refreshTokenExpireTime = 'maiores';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->accessToken->tokenType = 'dicta';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->clientId = 'corporis';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->clientSecret = 'dolore';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->password = 'iusto';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->requestType = GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum::REQUEST_TYPE_UNSPECIFIED;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->scope = 'harum';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->tokenEndpoint = 'enim';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->tokenParams = new GoogleCloudIntegrationsV1alphaParameterMap();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->tokenParams->entries = [
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
        new GoogleCloudIntegrationsV1alphaParameterMapEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->tokenParams->keyType = GoogleCloudIntegrationsV1alphaParameterMapKeyTypeEnum::BOOLEAN_VALUE;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->tokenParams->valueType = GoogleCloudIntegrationsV1alphaParameterMapValueTypeEnum::PROTO_ARRAY;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oauth2ResourceOwnerCredentials->username = 'Anissa_Emmerich56';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oidcToken = new GoogleCloudIntegrationsV1alphaOidcToken();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oidcToken->audience = 'pariatur';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oidcToken->serviceAccountEmail = 'modi';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oidcToken->token = 'praesentium';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->oidcToken->tokenExpireTime = 'rem';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->serviceAccountCredentials = new GoogleCloudIntegrationsV1alphaServiceAccountCredentials();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->serviceAccountCredentials->scope = 'voluptates';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->serviceAccountCredentials->serviceAccount = 'quasi';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->usernameAndPassword = new GoogleCloudIntegrationsV1alphaUsernameAndPassword();
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->usernameAndPassword->password = 'repudiandae';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->decryptedCredential->usernameAndPassword->username = 'Kira.Boehm31';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->description = 'consequatur';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->displayName = 'est';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->encryptedCredential = 'quibusdam';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->expiryNotificationDuration = [
        'deserunt',
    ];
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->lastModifierEmail = 'distinctio';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->name = 'Francisco Gleason';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->overrideValidTime = 'cupiditate';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->reason = 'quos';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->state = GoogleCloudIntegrationsV1alphaAuthConfigStateEnum::STATE_UNSPECIFIED;
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->validTime = 'magni';
    $request->googleCloudIntegrationsV1alphaAuthConfigInput->visibility = GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum::CLIENT_VISIBLE;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->clientCertificateEncryptedPrivateKey = 'dolorum';
    $request->clientCertificatePassphrase = 'excepturi';
    $request->clientCertificateSslCertificate = 'tempora';
    $request->fields = 'facilis';
    $request->key = 'tempore';
    $request->oauthToken = 'labore';
    $request->parent = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'eligendi';

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
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'sint';
    $request->filter = 'officia';
    $request->key = 'dolor';
    $request->oauthToken = 'debitis';
    $request->pageSize = 952749;
    $request->pageToken = 'dolorum';
    $request->parent = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->readMask = 'illum';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';

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
    $request->googleCloudIntegrationsV1alphaCertificateInput->certificateStatus = GoogleCloudIntegrationsV1alphaCertificateCertificateStatusEnum::STATE_UNSPECIFIED;
    $request->googleCloudIntegrationsV1alphaCertificateInput->credentialId = 'cumque';
    $request->googleCloudIntegrationsV1alphaCertificateInput->description = 'facere';
    $request->googleCloudIntegrationsV1alphaCertificateInput->displayName = 'ea';
    $request->googleCloudIntegrationsV1alphaCertificateInput->rawCertificate = new GoogleCloudIntegrationsV1alphaClientCertificate();
    $request->googleCloudIntegrationsV1alphaCertificateInput->rawCertificate->encryptedPrivateKey = 'aliquid';
    $request->googleCloudIntegrationsV1alphaCertificateInput->rawCertificate->passphrase = 'laborum';
    $request->googleCloudIntegrationsV1alphaCertificateInput->rawCertificate->sslCertificate = 'accusamus';
    $request->googleCloudIntegrationsV1alphaCertificateInput->requestorId = 'non';
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'delectus';
    $request->key = 'quidem';
    $request->oauthToken = 'provident';
    $request->parent = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'deleniti';

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
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'vel';
    $request->filter = 'natus';
    $request->key = 'omnis';
    $request->oauthToken = 'molestiae';
    $request->pageSize = 19193;
    $request->pageToken = 'nihil';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->readMask = 'id';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'labore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest = new GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest();
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->doNotPropagateError = false;
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->executionId = 'natus';
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->inputParameters = [
        'eum' => new GoogleCloudIntegrationsV1alphaValueType(),
        'vero' => new GoogleCloudIntegrationsV1alphaValueType(),
        'aspernatur' => new GoogleCloudIntegrationsV1alphaValueType(),
    ];
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->parameterEntries = [
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->parameters = new EnterpriseCrmFrontendsEventbusProtoEventParameters();
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->parameters->parameters = [
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoParameterEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->requestId = 'et';
    $request->googleCloudIntegrationsV1alphaExecuteIntegrationsRequest->triggerId = 'excepturi';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quos';
    $request->fields = 'sint';
    $request->key = 'accusantium';
    $request->name = 'Abel O'Hara';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'nemo';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'doloribus' => 'debitis',
        'eius' => 'maxime',
    ];
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'architecto';
    $request->key = 'architecto';
    $request->name = 'Pedro Ratke';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'sed';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'pariatur';

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
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'magni';
    $request->filter = 'sunt';
    $request->filterParamsCustomFilter = 'quo';
    $request->filterParamsEndTime = 'illum';
    $request->filterParamsEventStatuses = [
        'maxime',
        'ea',
        'excepturi',
        'odit',
    ];
    $request->filterParamsExecutionId = 'ea';
    $request->filterParamsParameterKey = 'accusantium';
    $request->filterParamsParameterPairKey = 'ab';
    $request->filterParamsParameterPairValue = 'maiores';
    $request->filterParamsParameterType = 'quidem';
    $request->filterParamsParameterValue = 'ipsam';
    $request->filterParamsStartTime = 'voluptate';
    $request->filterParamsTaskStatuses = [
        'nam',
        'eaque',
    ];
    $request->filterParamsWorkflowName = 'pariatur';
    $request->key = 'nemo';
    $request->oauthToken = 'voluptatibus';
    $request->orderBy = 'perferendis';
    $request->pageSize = 855804;
    $request->pageToken = 'amet';
    $request->parent = 'aut';
    $request->prettyPrint = false;
    $request->quotaUser = 'cumque';
    $request->readMask = 'corporis';
    $request->refreshAcl = false;
    $request->truncateParams = false;
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'libero';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaLiftSuspensionRequest = new GoogleCloudIntegrationsV1alphaLiftSuspensionRequest();
    $request->googleCloudIntegrationsV1alphaLiftSuspensionRequest->suspensionResult = 'dolores';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'eaque';
    $request->key = 'quis';
    $request->name = 'Ruby Auer';
    $request->oauthToken = 'quam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nostrum';

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
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'perspiciatis';
    $request->filter = 'voluptatem';
    $request->key = 'porro';
    $request->oauthToken = 'consequuntur';
    $request->orderBy = 'blanditiis';
    $request->pageSize = 621479;
    $request->pageToken = 'eaque';
    $request->parent = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'asperiores';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput = new GoogleCloudIntegrationsV1alphaResolveSuspensionRequestInput();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension = new GoogleCloudIntegrationsV1alphaSuspensionInput();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig = new GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig->customMessage = 'modi';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig->emailAddresses = [
        'dolorum',
        'deleniti',
        'pariatur',
    ];
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig->expiration = new GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig->expiration->liftWhenExpired = false;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->approvalConfig->expiration->remindTime = 'provident';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->audit = new GoogleCloudIntegrationsV1alphaSuspensionAudit();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->audit->resolveTime = 'nobis';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->audit->resolver = 'libero';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->eventExecutionInfoId = 'delectus';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->integration = 'quaerat';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->name = 'Gene Effertz';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->state = GoogleCloudIntegrationsV1alphaSuspensionStateEnum::RESOLUTION_STATE_UNSPECIFIED;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig = new EnterpriseCrmEventbusProtoSuspensionConfig();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->customMessage = 'ipsum';
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->notifications = [
        new EnterpriseCrmEventbusProtoNotification(),
        new EnterpriseCrmEventbusProtoNotification(),
        new EnterpriseCrmEventbusProtoNotification(),
        new EnterpriseCrmEventbusProtoNotification(),
    ];
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->suspensionExpiration = new EnterpriseCrmEventbusProtoSuspensionExpiration();
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->suspensionExpiration->expireAfterMs = 569574;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->suspensionExpiration->liftWhenExpired = false;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->suspensionExpiration->remindAfterMs = 739551;
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->suspensionConfig->whoMayResolve = [
        new EnterpriseCrmEventbusProtoSuspensionAuthPermissions(),
        new EnterpriseCrmEventbusProtoSuspensionAuthPermissions(),
    ];
    $request->googleCloudIntegrationsV1alphaResolveSuspensionRequestInput->suspension->taskId = 'dignissimos';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'numquam';
    $request->key = 'veritatis';
    $request->name = 'Angela Kerluke';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'voluptas';

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
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'fugiat';
    $request->filter = 'ab';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->orderBy = 'iusto';
    $request->pageSize = 453697;
    $request->pageToken = 'dolorum';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'distinctio';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest = new GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest();
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest->inputParameters = [
        'ipsum' => new GoogleCloudIntegrationsV1alphaValueType(),
        'voluptate' => new GoogleCloudIntegrationsV1alphaValueType(),
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
        new EnterpriseCrmEventbusProtoParameterEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest->requestId = 'eius';
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest->scheduleTime = 'aspernatur';
    $request->googleCloudIntegrationsV1alphaScheduleIntegrationsRequest->triggerId = 'perferendis';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusamus';
    $request->fields = 'ad';
    $request->key = 'saepe';
    $request->name = 'Rosie McKenzie';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'similique';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'at';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'officiis';
    $request->fileFormat = IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadFileFormatEnum::FILE_FORMAT_UNSPECIFIED;
    $request->key = 'dolorum';
    $request->name = 'Cory Pfeffer';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'tempore';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'enim' => 'dolorem',
        'sapiente' => 'totam',
    ];
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::JSON;
    $request->callback = 'expedita';
    $request->fields = 'neque';
    $request->key = 'sed';
    $request->name = 'Kelli Hintz';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'cupiditate';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'soluta' => 'dicta',
        'laborum' => 'totam',
        'incidunt' => 'aspernatur',
        'dolores' => 'distinctio',
    ];
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'molestias';
    $request->integrationVersion = 'temporibus';
    $request->key = 'qui';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'odio';

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
        'nam' => 'hic',
        'voluptatem' => 'cumque',
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'et';
    $request->fields = 'saepe';
    $request->key = 'ipsum';
    $request->name = 'Gayle Lueilwitz';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'dolore';

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
    $request->googleCloudIntegrationsV1alphaUploadIntegrationVersionRequest->content = 'adipisci';
    $request->googleCloudIntegrationsV1alphaUploadIntegrationVersionRequest->fileFormat = GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum::YAML;
    $request->accessToken = 'architecto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'quas';
    $request->key = 'itaque';
    $request->oauthToken = 'consequatur';
    $request->parent = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'doloribus';

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

## integrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate

Creates an IntegrationTemplateVersion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaErrorCatcherConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaCoordinate;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaNextTask;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoDoubleArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoIntArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoStringArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterEntryDataTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoParameterValueType;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoIntParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoStringParameterArray;
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
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoAttributes;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoAttributesDataTypeEnum;
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
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoNodeIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoNodeIdentifierElementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTriggerConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoWorkflowAlertConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoCloudSchedulerConfig;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmEventbusProtoTriggerCriteria;
use \OpenAPI\OpenAPI\Models\Shared\EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput = new GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionInput();
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->databasePersistencePolicy = GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum::DATABASE_PERSISTENCE_DISABLED;
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->description = 'cupiditate';
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->errorCatcherConfigs = [
        new GoogleCloudIntegrationsV1alphaErrorCatcherConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->lastModifierEmail = 'quae';
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->parentIntegrationVersionId = 'laudantium';
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->status = GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum::ACTIVE;
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->taskConfigs = [
        new EnterpriseCrmFrontendsEventbusProtoTaskConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTaskConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTaskConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->teardown = new EnterpriseCrmEventbusProtoTeardown();
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->teardown->teardownTaskConfigs = [
        new EnterpriseCrmEventbusProtoTeardownTaskConfig(),
        new EnterpriseCrmEventbusProtoTeardownTaskConfig(),
        new EnterpriseCrmEventbusProtoTeardownTaskConfig(),
        new EnterpriseCrmEventbusProtoTeardownTaskConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->templateParameters = new EnterpriseCrmFrontendsEventbusProtoWorkflowParameters();
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->templateParameters->parameters = [
        new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry(),
        new EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->triggerConfigs = [
        new EnterpriseCrmFrontendsEventbusProtoTriggerConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTriggerConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTriggerConfig(),
        new EnterpriseCrmFrontendsEventbusProtoTriggerConfig(),
    ];
    $request->googleCloudIntegrationsV1alphaIntegrationTemplateVersionInput->userLabel = 'omnis';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'voluptate';
    $request->key = 'consectetur';
    $request->newIntegration = false;
    $request->oauthToken = 'vero';
    $request->parent = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreate($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaIntegrationTemplateVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## integrationsProjectsLocationsProductsIntegrationtemplatesVersionsList

Returns the list of all IntegrationTemplateVersions in the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'vero';
    $request->filter = 'ducimus';
    $request->key = 'dolore';
    $request->oauthToken = 'quibusdam';
    $request->pageSize = 848944;
    $request->pageToken = 'sequi';
    $request->parent = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->integrationsProjectsLocationsProductsIntegrationtemplatesVersionsList($request, $requestSecurity);

    if ($response->googleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput = new GoogleCloudIntegrationsV1alphaSfdcInstanceInput();
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->authConfigId = [
        'fugit',
        'porro',
        'maiores',
        'doloribus',
    ];
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->description = 'iusto';
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->displayName = 'eligendi';
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->name = 'Linda Nikolaus';
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->serviceAuthority = 'ea';
    $request->googleCloudIntegrationsV1alphaSfdcInstanceInput->sfdcOrgId = 'aspernatur';
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'ratione';
    $request->key = 'ex';
    $request->oauthToken = 'laudantium';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quasi';

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
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'nostrum';
    $request->filter = 'sapiente';
    $request->key = 'quisquam';
    $request->oauthToken = 'saepe';
    $request->pageSize = 411372;
    $request->pageToken = 'impedit';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'veniam';
    $request->readMask = 'aliquid';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'magnam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput = new GoogleCloudIntegrationsV1alphaSfdcChannelInput();
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->channelTopic = 'quo';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->description = 'consectetur';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->displayName = 'recusandae';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->isActive = false;
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->lastReplayId = 'aspernatur';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->name = 'Shirley Wilderman Jr.';
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquam';
    $request->fields = 'fugit';
    $request->key = 'accusamus';
    $request->oauthToken = 'inventore';
    $request->parent = 'non';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'laborum';

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
    $request->accessToken = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->fields = 'nobis';
    $request->key = 'quas';
    $request->name = 'Drew Hoeger I';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'ipsa';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eius';
    $request->fields = 'esse';
    $request->key = 'esse';
    $request->name = 'Blake Kihn';
    $request->oauthToken = 'ut';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'assumenda';

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
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veritatis';
    $request->fields = 'ipsa';
    $request->filter = 'id';
    $request->key = 'quidem';
    $request->oauthToken = 'neque';
    $request->pageSize = 778696;
    $request->pageToken = 'illum';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->readMask = 'eius';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'voluptas';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput = new GoogleCloudIntegrationsV1alphaSfdcChannelInput();
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->channelTopic = 'cupiditate';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->description = 'consequatur';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->displayName = 'tempora';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->isActive = false;
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->lastReplayId = 'debitis';
    $request->googleCloudIntegrationsV1alphaSfdcChannelInput->name = 'Kelly Donnelly';
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->clientCertificatePassphrase = 'quod';
    $request->clientCertificateSslCertificate = 'dignissimos';
    $request->fields = 'inventore';
    $request->key = 'nihil';
    $request->name = 'Sheldon Hackett';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->updateMask = 'dolores';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'molestiae';

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
