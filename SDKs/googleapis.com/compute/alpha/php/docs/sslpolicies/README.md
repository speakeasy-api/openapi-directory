# sslPolicies

### Available Operations

* [computeSslPoliciesAggregatedList](#computesslpoliciesaggregatedlist) - Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.
* [computeSslPoliciesDelete](#computesslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeSslPoliciesGet](#computesslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeSslPoliciesInsert](#computesslpoliciesinsert) - Returns the specified SSL policy resource.
* [computeSslPoliciesList](#computesslpolicieslist) - Lists all the SSL policies that have been configured for the specified project.
* [computeSslPoliciesListAvailableFeatures](#computesslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeSslPoliciesPatch](#computesslpoliciespatch) - Patches the specified SSL policy with the data included in the request.
* [computeSslPoliciesTestIamPermissions](#computesslpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeSslPoliciesAggregatedList

Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequatur';
    $request->fields = 'nam';
    $request->filter = 'laboriosam';
    $request->includeAllScopes = false;
    $request->key = 'minima';
    $request->maxResults = 901115;
    $request->oauthToken = 'asperiores';
    $request->orderBy = 'ex';
    $request->pageToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'illo';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'quaerat';
    $request->userIp = 'cupiditate';

    $requestSecurity = new ComputeSslPoliciesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesAggregatedList($request, $requestSecurity);

    if ($response->sslPoliciesAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesDelete

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'veritatis';
    $request->key = 'occaecati';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'aut';
    $request->quotaUser = 'commodi';
    $request->requestId = 'temporibus';
    $request->sslPolicy = 'sapiente';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'sit';

    $requestSecurity = new ComputeSslPoliciesDeleteSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesGet

Lists all of the ordered rules present in a single specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'distinctio';
    $request->fields = 'culpa';
    $request->key = 'quasi';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'deleniti';
    $request->quotaUser = 'veniam';
    $request->sslPolicy = 'corrupti';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'adipisci';

    $requestSecurity = new ComputeSslPoliciesGetSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesGet($request, $requestSecurity);

    if ($response->sslPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesInsert

Returns the specified SSL policy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyMinTlsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServerTlsSettings;
use \OpenAPI\OpenAPI\Models\Shared\TlsContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificateContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificatePaths;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificateContextCertificateSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SdsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GrpcServiceConfig;
use \OpenAPI\OpenAPI\Models\Shared\CallCredentials;
use \OpenAPI\OpenAPI\Models\Shared\CallCredentialsCallCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataCredentialsFromPlugin;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCredentialsChannelCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextValidationSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServerTlsSettingsTlsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarnings;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sslPolicy = new SslPolicy();
    $request->sslPolicy->creationTimestamp = 'nesciunt';
    $request->sslPolicy->customFeatures = [
        'magnam',
        'quos',
        'perspiciatis',
    ];
    $request->sslPolicy->description = 'totam';
    $request->sslPolicy->enabledFeatures = [
        'fugiat',
    ];
    $request->sslPolicy->fingerprint = 'et';
    $request->sslPolicy->id = 'tenetur';
    $request->sslPolicy->kind = 'voluptatum';
    $request->sslPolicy->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS12;
    $request->sslPolicy->name = 'Jimmy Gerlach';
    $request->sslPolicy->profile = SslPolicyProfileEnum::CUSTOM;
    $request->sslPolicy->region = 'ab';
    $request->sslPolicy->selfLink = 'aut';
    $request->sslPolicy->selfLinkWithId = 'expedita';
    $request->sslPolicy->tlsSettings = new ServerTlsSettings();
    $request->sslPolicy->tlsSettings->proxyTlsContext = new TlsContext();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext = new TlsCertificateContext();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->certificatePaths->certificatePath = 'deleniti';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->certificatePaths->privateKeyPath = 'aliquid';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::INVALID;
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::GCE_VM;
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Nellie Ritchie';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'minus';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'ad';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'sequi';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'eos';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext = new TlsValidationContext();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->certificatePath = 'ipsa';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::INVALID;
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Tommy Heller';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'voluptatum';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'ratione';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'cupiditate';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'amet';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::USE_SDS;
    $request->sslPolicy->tlsSettings->subjectAltNames = [
        'quod',
        'eius',
    ];
    $request->sslPolicy->tlsSettings->tlsMode = ServerTlsSettingsTlsModeEnum::SIMPLE;
    $request->sslPolicy->warnings = [
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->fields = 'pariatur';
    $request->key = 'esse';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'iure';
    $request->requestId = 'consequatur';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'a';

    $requestSecurity = new ComputeSslPoliciesInsertSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesList

Lists all the SSL policies that have been configured for the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'similique';
    $request->fields = 'illo';
    $request->filter = 'pariatur';
    $request->key = 'accusamus';
    $request->maxResults = 385770;
    $request->oauthToken = 'fugit';
    $request->orderBy = 'molestias';
    $request->pageToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'cumque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'cum';
    $request->userIp = 'dignissimos';

    $requestSecurity = new ComputeSslPoliciesListSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesList($request, $requestSecurity);

    if ($response->sslPoliciesList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesListAvailableFeatures

Lists all features that can be specified in the SSL policy when using custom profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListAvailableFeaturesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListAvailableFeaturesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListAvailableFeaturesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListAvailableFeaturesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListAvailableFeaturesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesListAvailableFeaturesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatum';
    $request->fields = 'animi';
    $request->filter = 'atque';
    $request->key = 'beatae';
    $request->maxResults = 776105;
    $request->oauthToken = 'nulla';
    $request->orderBy = 'quidem';
    $request->pageToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'reprehenderit';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'saepe';
    $request->userIp = 'doloremque';

    $requestSecurity = new ComputeSslPoliciesListAvailableFeaturesSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesListAvailableFeaturesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesListAvailableFeatures($request, $requestSecurity);

    if ($response->sslPoliciesListAvailableFeaturesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesPatch

Patches the specified SSL policy with the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyMinTlsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServerTlsSettings;
use \OpenAPI\OpenAPI\Models\Shared\TlsContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificateContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificatePaths;
use \OpenAPI\OpenAPI\Models\Shared\TlsCertificateContextCertificateSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SdsConfig;
use \OpenAPI\OpenAPI\Models\Shared\GrpcServiceConfig;
use \OpenAPI\OpenAPI\Models\Shared\CallCredentials;
use \OpenAPI\OpenAPI\Models\Shared\CallCredentialsCallCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetadataCredentialsFromPlugin;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCredentials;
use \OpenAPI\OpenAPI\Models\Shared\ChannelCredentialsChannelCredentialTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContext;
use \OpenAPI\OpenAPI\Models\Shared\TlsValidationContextValidationSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServerTlsSettingsTlsModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarnings;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sslPolicy1 = new SslPolicy();
    $request->sslPolicy1->creationTimestamp = 'consectetur';
    $request->sslPolicy1->customFeatures = [
        'fuga',
    ];
    $request->sslPolicy1->description = 'odio';
    $request->sslPolicy1->enabledFeatures = [
        'rem',
        'odio',
        'temporibus',
        'nam',
    ];
    $request->sslPolicy1->fingerprint = 'perspiciatis';
    $request->sslPolicy1->id = 'totam';
    $request->sslPolicy1->kind = 'quae';
    $request->sslPolicy1->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS11;
    $request->sslPolicy1->name = 'Dr. Valerie Olson';
    $request->sslPolicy1->profile = SslPolicyProfileEnum::CUSTOM;
    $request->sslPolicy1->region = 'aliquam';
    $request->sslPolicy1->selfLink = 'doloribus';
    $request->sslPolicy1->selfLinkWithId = 'iure';
    $request->sslPolicy1->tlsSettings = new ServerTlsSettings();
    $request->sslPolicy1->tlsSettings->proxyTlsContext = new TlsContext();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext = new TlsCertificateContext();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->certificatePaths->certificatePath = 'corrupti';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->certificatePaths->privateKeyPath = 'iste';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::USE_PATH;
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::FROM_PLUGIN;
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Genevieve McClure';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'quidem';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'suscipit';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'voluptates';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'dolor';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext = new TlsValidationContext();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->certificatePath = 'ducimus';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::FROM_PLUGIN;
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Mrs. Luis Lakin';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'tenetur';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'blanditiis';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'accusamus';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'odit';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::USE_SDS;
    $request->sslPolicy1->tlsSettings->subjectAltNames = [
        'alias',
        'sequi',
        'perspiciatis',
        'excepturi',
    ];
    $request->sslPolicy1->tlsSettings->tlsMode = ServerTlsSettingsTlsModeEnum::INVALID;
    $request->sslPolicy1->warnings = [
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugiat';
    $request->fields = 'dolorem';
    $request->key = 'nisi';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->project = 'molestiae';
    $request->quotaUser = 'dolorum';
    $request->requestId = 'reiciendis';
    $request->sslPolicyPathParameter = 'soluta';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'omnis';

    $requestSecurity = new ComputeSslPoliciesPatchSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'qui',
        'minus',
    ];
    $request->accessToken = 'animi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'amet';
    $request->fields = 'illum';
    $request->key = 'consequuntur';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'veritatis';
    $request->resource = 'cum';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'expedita';
    $request->userIp = 'non';

    $requestSecurity = new ComputeSslPoliciesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
