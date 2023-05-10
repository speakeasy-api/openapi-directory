# projects

### Available Operations

* [connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh](#connectorsprojectslocationsconnectionsconnectionschemametadatarefresh) - Refresh runtime schema of a connection.
* [connectorsProjectsLocationsConnectionsCreate](#connectorsprojectslocationsconnectionscreate) - Creates a new Connection in a given project and location.
* [connectorsProjectsLocationsConnectionsList](#connectorsprojectslocationsconnectionslist) - Lists Connections in a given project and location.
* [connectorsProjectsLocationsConnectionsRuntimeActionSchemasList](#connectorsprojectslocationsconnectionsruntimeactionschemaslist) - List schema of a runtime actions filtered by action name.
* [connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList](#connectorsprojectslocationsconnectionsruntimeentityschemaslist) - List schema of a runtime entities filtered by entity name.
* [connectorsProjectsLocationsEndpointAttachmentsCreate](#connectorsprojectslocationsendpointattachmentscreate) - Creates a new EndpointAttachment in a given project and location.
* [connectorsProjectsLocationsEndpointAttachmentsList](#connectorsprojectslocationsendpointattachmentslist) - List EndpointAttachments in a given project
* [connectorsProjectsLocationsGlobalManagedZonesCreate](#connectorsprojectslocationsglobalmanagedzonescreate) - Creates a new ManagedZone in a given project and location.
* [connectorsProjectsLocationsGlobalManagedZonesList](#connectorsprojectslocationsglobalmanagedzoneslist) - List ManagedZones in a given project
* [connectorsProjectsLocationsGlobalManagedZonesPatch](#connectorsprojectslocationsglobalmanagedzonespatch) - Updates the parameters of a single ManagedZone.
* [connectorsProjectsLocationsList](#connectorsprojectslocationslist) - Lists information about the supported locations for this service.
* [connectorsProjectsLocationsOperationsCancel](#connectorsprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [connectorsProjectsLocationsOperationsDelete](#connectorsprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [connectorsProjectsLocationsOperationsList](#connectorsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [connectorsProjectsLocationsProvidersConnectorsList](#connectorsprojectslocationsprovidersconnectorslist) - Lists Connectors in a given project and location.
* [connectorsProjectsLocationsProvidersConnectorsVersionsGet](#connectorsprojectslocationsprovidersconnectorsversionsget) - Gets details of a single connector version.
* [connectorsProjectsLocationsProvidersConnectorsVersionsList](#connectorsprojectslocationsprovidersconnectorsversionslist) - Lists Connector Versions in a given project and location.
* [connectorsProjectsLocationsProvidersGetIamPolicy](#connectorsprojectslocationsprovidersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [connectorsProjectsLocationsProvidersList](#connectorsprojectslocationsproviderslist) - Lists Providers in a given project and location.
* [connectorsProjectsLocationsProvidersSetIamPolicy](#connectorsprojectslocationsproviderssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [connectorsProjectsLocationsProvidersTestIamPermissions](#connectorsprojectslocationsproviderstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh

Refresh runtime schema of a connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->name = 'Estelle Will';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsCreate

Creates a new Connection in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\AuthConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConfigVariable;
use \OpenAPI\OpenAPI\Models\Shared\Secret;
use \OpenAPI\OpenAPI\Models\Shared\AuthConfigAuthTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Oauth2AuthCodeFlow;
use \OpenAPI\OpenAPI\Models\Shared\Oauth2ClientCredentials;
use \OpenAPI\OpenAPI\Models\Shared\Oauth2JwtBearer;
use \OpenAPI\OpenAPI\Models\Shared\JwtClaims;
use \OpenAPI\OpenAPI\Models\Shared\SshPublicKey;
use \OpenAPI\OpenAPI\Models\Shared\UserPassword;
use \OpenAPI\OpenAPI\Models\Shared\DestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\Destination;
use \OpenAPI\OpenAPI\Models\Shared\LockConfig;
use \OpenAPI\OpenAPI\Models\Shared\ConnectorsLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\NodeConfig;
use \OpenAPI\OpenAPI\Models\Shared\SslConfig;
use \OpenAPI\OpenAPI\Models\Shared\SslConfigClientCertTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslConfigServerCertTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslConfigTrustModelEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionStatus;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionStatusStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->connectionInput = new ConnectionInput();
    $request->connectionInput->authConfig = new AuthConfig();
    $request->connectionInput->authConfig->additionalVariables = [
        new ConfigVariable(),
        new ConfigVariable(),
        new ConfigVariable(),
        new ConfigVariable(),
    ];
    $request->connectionInput->authConfig->authKey = 'esse';
    $request->connectionInput->authConfig->authType = AuthConfigAuthTypeEnum::OAUTH2_CLIENT_CREDENTIALS;
    $request->connectionInput->authConfig->oauth2AuthCodeFlow = new Oauth2AuthCodeFlow();
    $request->connectionInput->authConfig->oauth2AuthCodeFlow->authCode = 'porro';
    $request->connectionInput->authConfig->oauth2AuthCodeFlow->clientId = 'dolorum';
    $request->connectionInput->authConfig->oauth2AuthCodeFlow->clientSecret = new Secret();
    $request->connectionInput->authConfig->oauth2AuthCodeFlow->clientSecret->secretVersion = 'dicta';
    $request->connectionInput->authConfig->oauth2AuthCodeFlow->enablePkce = false;
    $request->connectionInput->authConfig->oauth2AuthCodeFlow->pkceVerifier = 'nam';
    $request->connectionInput->authConfig->oauth2AuthCodeFlow->redirectUri = 'officia';
    $request->connectionInput->authConfig->oauth2AuthCodeFlow->scopes = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->connectionInput->authConfig->oauth2ClientCredentials = new Oauth2ClientCredentials();
    $request->connectionInput->authConfig->oauth2ClientCredentials->clientId = 'optio';
    $request->connectionInput->authConfig->oauth2ClientCredentials->clientSecret = new Secret();
    $request->connectionInput->authConfig->oauth2ClientCredentials->clientSecret->secretVersion = 'totam';
    $request->connectionInput->authConfig->oauth2JwtBearer = new Oauth2JwtBearer();
    $request->connectionInput->authConfig->oauth2JwtBearer->clientKey = new Secret();
    $request->connectionInput->authConfig->oauth2JwtBearer->clientKey->secretVersion = 'beatae';
    $request->connectionInput->authConfig->oauth2JwtBearer->jwtClaims = new JwtClaims();
    $request->connectionInput->authConfig->oauth2JwtBearer->jwtClaims->audience = 'commodi';
    $request->connectionInput->authConfig->oauth2JwtBearer->jwtClaims->issuer = 'molestiae';
    $request->connectionInput->authConfig->oauth2JwtBearer->jwtClaims->subject = 'modi';
    $request->connectionInput->authConfig->sshPublicKey = new SshPublicKey();
    $request->connectionInput->authConfig->sshPublicKey->certType = 'qui';
    $request->connectionInput->authConfig->sshPublicKey->sshClientCert = new Secret();
    $request->connectionInput->authConfig->sshPublicKey->sshClientCert->secretVersion = 'impedit';
    $request->connectionInput->authConfig->sshPublicKey->sshClientCertPass = new Secret();
    $request->connectionInput->authConfig->sshPublicKey->sshClientCertPass->secretVersion = 'cum';
    $request->connectionInput->authConfig->sshPublicKey->username = 'Jacky.Emmerich';
    $request->connectionInput->authConfig->userPassword = new UserPassword();
    $request->connectionInput->authConfig->userPassword->password = new Secret();
    $request->connectionInput->authConfig->userPassword->password->secretVersion = 'perferendis';
    $request->connectionInput->authConfig->userPassword->username = 'Enrique61';
    $request->connectionInput->configVariables = [
        new ConfigVariable(),
    ];
    $request->connectionInput->connectorVersion = 'natus';
    $request->connectionInput->description = 'laboriosam';
    $request->connectionInput->destinationConfigs = [
        new DestinationConfig(),
        new DestinationConfig(),
        new DestinationConfig(),
        new DestinationConfig(),
    ];
    $request->connectionInput->labels = [
        'fuga' => 'in',
        'corporis' => 'iste',
        'iure' => 'saepe',
        'quidem' => 'architecto',
    ];
    $request->connectionInput->lockConfig = new LockConfig();
    $request->connectionInput->lockConfig->locked = false;
    $request->connectionInput->lockConfig->reason = 'ipsa';
    $request->connectionInput->logConfig = new ConnectorsLogConfig();
    $request->connectionInput->logConfig->enabled = false;
    $request->connectionInput->nodeConfig = new NodeConfig();
    $request->connectionInput->nodeConfig->maxNodeCount = 969810;
    $request->connectionInput->nodeConfig->minNodeCount = 666767;
    $request->connectionInput->serviceAccount = 'mollitia';
    $request->connectionInput->sslConfig = new SslConfig();
    $request->connectionInput->sslConfig->additionalVariables = [
        new ConfigVariable(),
        new ConfigVariable(),
        new ConfigVariable(),
    ];
    $request->connectionInput->sslConfig->clientCertType = SslConfigClientCertTypeEnum::CERT_TYPE_UNSPECIFIED;
    $request->connectionInput->sslConfig->clientCertificate = new Secret();
    $request->connectionInput->sslConfig->clientCertificate->secretVersion = 'dolorem';
    $request->connectionInput->sslConfig->clientPrivateKey = new Secret();
    $request->connectionInput->sslConfig->clientPrivateKey->secretVersion = 'corporis';
    $request->connectionInput->sslConfig->clientPrivateKeyPass = new Secret();
    $request->connectionInput->sslConfig->clientPrivateKeyPass->secretVersion = 'explicabo';
    $request->connectionInput->sslConfig->privateServerCertificate = new Secret();
    $request->connectionInput->sslConfig->privateServerCertificate->secretVersion = 'nobis';
    $request->connectionInput->sslConfig->serverCertType = SslConfigServerCertTypeEnum::CERT_TYPE_UNSPECIFIED;
    $request->connectionInput->sslConfig->trustModel = SslConfigTrustModelEnum::PRIVATE;
    $request->connectionInput->sslConfig->type = SslConfigTypeEnum::TLS;
    $request->connectionInput->sslConfig->useSsl = false;
    $request->connectionInput->status = new ConnectionStatus();
    $request->connectionInput->status->description = 'minima';
    $request->connectionInput->status->state = ConnectionStatusStateEnum::DELETING;
    $request->connectionInput->status->status = 'accusantium';
    $request->connectionInput->suspended = false;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->connectionId = 'sapiente';
    $request->fields = 'architecto';
    $request->key = 'mollitia';
    $request->oauthToken = 'dolorem';
    $request->parent = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'repellat';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsList

Lists Connections in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'molestiae';
    $request->filter = 'velit';
    $request->key = 'error';
    $request->oauthToken = 'quia';
    $request->orderBy = 'quis';
    $request->pageSize = 110375;
    $request->pageToken = 'laborum';
    $request->parent = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quo';
    $request->view = ConnectorsProjectsLocationsConnectionsListViewEnum::CONNECTION_VIEW_UNSPECIFIED;

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsList($request, $requestSecurity);

    if ($response->listConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsRuntimeActionSchemasList

List schema of a runtime actions filtered by action name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'aut';
    $request->filter = 'quasi';
    $request->key = 'error';
    $request->oauthToken = 'temporibus';
    $request->pageSize = 673660;
    $request->pageToken = 'quasi';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsRuntimeActionSchemasList($request, $requestSecurity);

    if ($response->listRuntimeActionSchemasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList

List schema of a runtime entities filtered by entity name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest();
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

    $requestSecurity = new ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList($request, $requestSecurity);

    if ($response->listRuntimeEntitySchemasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsEndpointAttachmentsCreate

Creates a new EndpointAttachment in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsEndpointAttachmentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointAttachmentInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsEndpointAttachmentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsEndpointAttachmentsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->endpointAttachmentInput = new EndpointAttachmentInput();
    $request->endpointAttachmentInput->description = 'dicta';
    $request->endpointAttachmentInput->labels = [
        'enim' => 'accusamus',
        'commodi' => 'repudiandae',
        'quae' => 'ipsum',
    ];
    $request->endpointAttachmentInput->serviceAttachment = 'quidem';
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'pariatur';
    $request->endpointAttachmentId = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->oauthToken = 'voluptates';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new ConnectorsProjectsLocationsEndpointAttachmentsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsEndpointAttachmentsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsEndpointAttachmentsList

List EndpointAttachments in a given project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsEndpointAttachmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsEndpointAttachmentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsEndpointAttachmentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'est';
    $request->filter = 'quibusdam';
    $request->key = 'explicabo';
    $request->oauthToken = 'deserunt';
    $request->orderBy = 'distinctio';
    $request->pageSize = 841386;
    $request->pageToken = 'labore';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new ConnectorsProjectsLocationsEndpointAttachmentsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsEndpointAttachmentsList($request, $requestSecurity);

    if ($response->listEndpointAttachmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsGlobalManagedZonesCreate

Creates a new ManagedZone in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsGlobalManagedZonesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsGlobalManagedZonesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsGlobalManagedZonesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->managedZoneInput = new ManagedZoneInput();
    $request->managedZoneInput->description = 'perferendis';
    $request->managedZoneInput->dns = 'magni';
    $request->managedZoneInput->labels = [
        'ipsam' => 'alias',
        'fugit' => 'dolorum',
        'excepturi' => 'tempora',
        'facilis' => 'tempore',
    ];
    $request->managedZoneInput->targetProject = 'labore';
    $request->managedZoneInput->targetVpc = 'delectus';
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eligendi';
    $request->fields = 'sint';
    $request->key = 'aliquid';
    $request->managedZoneId = 'provident';
    $request->oauthToken = 'necessitatibus';
    $request->parent = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'debitis';

    $requestSecurity = new ConnectorsProjectsLocationsGlobalManagedZonesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsGlobalManagedZonesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsGlobalManagedZonesList

List ManagedZones in a given project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsGlobalManagedZonesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsGlobalManagedZonesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsGlobalManagedZonesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'illum';
    $request->filter = 'maiores';
    $request->key = 'rerum';
    $request->oauthToken = 'dicta';
    $request->orderBy = 'magnam';
    $request->pageSize = 767024;
    $request->pageToken = 'facere';
    $request->parent = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new ConnectorsProjectsLocationsGlobalManagedZonesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsGlobalManagedZonesList($request, $requestSecurity);

    if ($response->listManagedZonesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsGlobalManagedZonesPatch

Updates the parameters of a single ManagedZone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsGlobalManagedZonesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedZoneInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsGlobalManagedZonesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsGlobalManagedZonesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->managedZoneInput = new ManagedZoneInput();
    $request->managedZoneInput->description = 'occaecati';
    $request->managedZoneInput->dns = 'enim';
    $request->managedZoneInput->labels = [
        'delectus' => 'quidem',
        'provident' => 'nam',
        'id' => 'blanditiis',
        'deleniti' => 'sapiente',
    ];
    $request->managedZoneInput->targetProject = 'amet';
    $request->managedZoneInput->targetVpc = 'deserunt';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'omnis';
    $request->key = 'molestiae';
    $request->name = 'Marcia Gutkowski';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->updateMask = 'suscipit';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new ConnectorsProjectsLocationsGlobalManagedZonesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsGlobalManagedZonesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'magnam';
    $request->filter = 'et';
    $request->key = 'excepturi';
    $request->name = 'Ramona Lueilwitz MD';
    $request->oauthToken = 'reiciendis';
    $request->pageSize = 652103;
    $request->pageToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new ConnectorsProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'quasi' => 'iure',
        'doloribus' => 'debitis',
    ];
    $request->accessToken = 'eius';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'facilis';
    $request->key = 'in';
    $request->name = 'Diane VonRueden';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'sed';

    $requestSecurity = new ConnectorsProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequuntur';
    $request->fields = 'praesentium';
    $request->key = 'natus';
    $request->name = 'Joan Satterfield';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'ea';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new ConnectorsProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'quidem';
    $request->filter = 'ipsam';
    $request->key = 'voluptate';
    $request->name = 'Candice Beatty';
    $request->oauthToken = 'voluptatibus';
    $request->pageSize = 16627;
    $request->pageToken = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new ConnectorsProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsProvidersConnectorsList

Lists Connectors in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersConnectorsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersConnectorsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsProvidersConnectorsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nobis';
    $request->fields = 'dolores';
    $request->key = 'quis';
    $request->oauthToken = 'totam';
    $request->pageSize = 489549;
    $request->pageToken = 'eaque';
    $request->parent = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new ConnectorsProjectsLocationsProvidersConnectorsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsProvidersConnectorsList($request, $requestSecurity);

    if ($response->listConnectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsProvidersConnectorsVersionsGet

Gets details of a single connector version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolor';
    $request->fields = 'vero';
    $request->key = 'nostrum';
    $request->name = 'Percy Mohr';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'blanditiis';
    $request->view = ConnectorsProjectsLocationsProvidersConnectorsVersionsGetViewEnum::CONNECTOR_VERSION_VIEW_BASIC;

    $requestSecurity = new ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsProvidersConnectorsVersionsGet($request, $requestSecurity);

    if ($response->connectorVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsProvidersConnectorsVersionsList

Lists Connector Versions in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'adipisci';
    $request->fields = 'asperiores';
    $request->key = 'earum';
    $request->oauthToken = 'modi';
    $request->pageSize = 613966;
    $request->pageToken = 'dolorum';
    $request->parent = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nobis';
    $request->view = ConnectorsProjectsLocationsProvidersConnectorsVersionsListViewEnum::CONNECTOR_VERSION_VIEW_FULL;

    $requestSecurity = new ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsProvidersConnectorsVersionsList($request, $requestSecurity);

    if ($response->listConnectorVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsProvidersGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsProvidersGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'dolorem';
    $request->key = 'dolorem';
    $request->oauthToken = 'dolor';
    $request->optionsRequestedPolicyVersion = 186193;
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsum';
    $request->resource = 'hic';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new ConnectorsProjectsLocationsProvidersGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsProvidersGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsProvidersList

Lists Providers in a given project and location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsProvidersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'dolorum';
    $request->key = 'numquam';
    $request->oauthToken = 'veritatis';
    $request->pageSize = 58029;
    $request->pageToken = 'ipsa';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new ConnectorsProjectsLocationsProvidersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsProvidersList($request, $requestSecurity);

    if ($response->listProvidersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsProvidersSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsProvidersSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'natus';
    $request->setIamPolicyRequest->policy->version = 179603;
    $request->setIamPolicyRequest->updateMask = 'atque';
    $request->accessToken = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'soluta';
    $request->key = 'dolorum';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->resource = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new ConnectorsProjectsLocationsProvidersSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsProvidersSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## connectorsProjectsLocationsProvidersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConnectorsProjectsLocationsProvidersTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'asperiores',
        'nihil',
        'ipsum',
    ];
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'eius';
    $request->key = 'aspernatur';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->resource = 'optio';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new ConnectorsProjectsLocationsProvidersTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->connectorsProjectsLocationsProvidersTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
