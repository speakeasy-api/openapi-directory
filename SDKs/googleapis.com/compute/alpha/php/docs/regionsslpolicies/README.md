# regionSslPolicies

### Available Operations

* [computeRegionSslPoliciesDelete](#computeregionsslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeRegionSslPoliciesGet](#computeregionsslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeRegionSslPoliciesInsert](#computeregionsslpoliciesinsert) - Creates a new policy in the specified project and region using the data included in the request.
* [computeRegionSslPoliciesList](#computeregionsslpolicieslist) - Lists all the SSL policies that have been configured for the specified project and region.
* [computeRegionSslPoliciesListAvailableFeatures](#computeregionsslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeRegionSslPoliciesPatch](#computeregionsslpoliciespatch) - Patches the specified SSL policy with the data included in the request.
* [computeRegionSslPoliciesTestIamPermissions](#computeregionsslpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionSslPoliciesDelete

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'deleniti';
    $request->fields = 'voluptate';
    $request->key = 'repudiandae';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'illo';
    $request->quotaUser = 'aut';
    $request->region = 'ratione';
    $request->requestId = 'deserunt';
    $request->sslPolicy = 'error';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'laboriosam';

    $requestSecurity = new ComputeRegionSslPoliciesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesGet

Lists all of the ordered rules present in a single specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'ipsa';
    $request->key = 'suscipit';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->project = 'cupiditate';
    $request->quotaUser = 'iste';
    $request->region = 'accusamus';
    $request->sslPolicy = 'hic';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'cum';

    $requestSecurity = new ComputeRegionSslPoliciesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesGet($request, $requestSecurity);

    if ($response->sslPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesInsert

Creates a new policy in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesInsertRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sslPolicy = new SslPolicy();
    $request->sslPolicy->creationTimestamp = 'sunt';
    $request->sslPolicy->customFeatures = [
        'ullam',
        'deleniti',
    ];
    $request->sslPolicy->description = 'repellendus';
    $request->sslPolicy->enabledFeatures = [
        'laborum',
        'quidem',
    ];
    $request->sslPolicy->fingerprint = 'veniam';
    $request->sslPolicy->id = 'expedita';
    $request->sslPolicy->kind = 'impedit';
    $request->sslPolicy->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS11;
    $request->sslPolicy->name = 'Betsy Tillman';
    $request->sslPolicy->profile = SslPolicyProfileEnum::CUSTOM;
    $request->sslPolicy->region = 'doloribus';
    $request->sslPolicy->selfLink = 'quibusdam';
    $request->sslPolicy->selfLinkWithId = 'omnis';
    $request->sslPolicy->tlsSettings = new ServerTlsSettings();
    $request->sslPolicy->tlsSettings->proxyTlsContext = new TlsContext();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext = new TlsCertificateContext();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->certificatePaths->certificatePath = 'cupiditate';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->certificatePaths->privateKeyPath = 'dolor';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::INVALID;
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::INVALID;
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Mr. Virgil Sporer';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'impedit';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'tenetur';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'maiores';
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->sslPolicy->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'quisquam';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext = new TlsValidationContext();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->certificatePath = 'dolores';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::GCE_VM;
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Rudy Lockman MD';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'quia';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'totam';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'repudiandae';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::GCE_VM;
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'aperiam';
    $request->sslPolicy->tlsSettings->proxyTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::USE_PATH;
    $request->sslPolicy->tlsSettings->subjectAltNames = [
        'quia',
        'quibusdam',
    ];
    $request->sslPolicy->tlsSettings->tlsMode = ServerTlsSettingsTlsModeEnum::MUTUAL;
    $request->sslPolicy->warnings = [
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'sequi';
    $request->key = 'ut';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'deserunt';
    $request->quotaUser = 'labore';
    $request->region = 'consectetur';
    $request->requestId = 'incidunt';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'nam';

    $requestSecurity = new ComputeRegionSslPoliciesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesList

Lists all the SSL policies that have been configured for the specified project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'provident';
    $request->fields = 'fuga';
    $request->filter = 'et';
    $request->key = 'molestias';
    $request->maxResults = 969125;
    $request->oauthToken = 'qui';
    $request->orderBy = 'quis';
    $request->pageToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'perferendis';
    $request->quotaUser = 'nihil';
    $request->region = 'blanditiis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'praesentium';

    $requestSecurity = new ComputeRegionSslPoliciesListSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesList($request, $requestSecurity);

    if ($response->sslPoliciesList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesListAvailableFeatures

Lists all features that can be specified in the SSL policy when using custom profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListAvailableFeaturesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListAvailableFeaturesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesListAvailableFeaturesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consequatur';
    $request->fields = 'nulla';
    $request->filter = 'fuga';
    $request->key = 'officiis';
    $request->maxResults = 830979;
    $request->oauthToken = 'quaerat';
    $request->orderBy = 'quidem';
    $request->pageToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'voluptatibus';
    $request->region = 'consequatur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'ex';

    $requestSecurity = new ComputeRegionSslPoliciesListAvailableFeaturesSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesListAvailableFeatures($request, $requestSecurity);

    if ($response->sslPoliciesListAvailableFeaturesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesPatch

Patches the specified SSL policy with the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesPatchRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sslPolicy1 = new SslPolicy();
    $request->sslPolicy1->creationTimestamp = 'recusandae';
    $request->sslPolicy1->customFeatures = [
        'ratione',
        'quia',
        'molestiae',
    ];
    $request->sslPolicy1->description = 'ullam';
    $request->sslPolicy1->enabledFeatures = [
        'exercitationem',
        'soluta',
    ];
    $request->sslPolicy1->fingerprint = 'nulla';
    $request->sslPolicy1->id = 'iure';
    $request->sslPolicy1->kind = 'doloremque';
    $request->sslPolicy1->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS12;
    $request->sslPolicy1->name = 'Cameron Bartoletti I';
    $request->sslPolicy1->profile = SslPolicyProfileEnum::MODERN;
    $request->sslPolicy1->region = 'placeat';
    $request->sslPolicy1->selfLink = 'pariatur';
    $request->sslPolicy1->selfLinkWithId = 'dicta';
    $request->sslPolicy1->tlsSettings = new ServerTlsSettings();
    $request->sslPolicy1->tlsSettings->proxyTlsContext = new TlsContext();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext = new TlsCertificateContext();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->certificatePaths = new TlsCertificatePaths();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->certificatePaths->certificatePath = 'quod';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->certificatePaths->privateKeyPath = 'quod';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->certificateSource = TlsCertificateContextCertificateSourceEnum::USE_SDS;
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig = new SdsConfig();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::INVALID;
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Rosemary Dach';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'reiciendis';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'sint';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'qui';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::CERTIFICATES;
    $request->sslPolicy1->tlsSettings->proxyTlsContext->certificateContext->sdsConfig->grpcServiceConfig->targetUri = 'natus';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext = new TlsValidationContext();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->certificatePath = 'alias';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig = new SdsConfig();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig = new GrpcServiceConfig();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials = new CallCredentials();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->callCredentialType = CallCredentialsCallCredentialTypeEnum::FROM_PLUGIN;
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin = new MetadataCredentialsFromPlugin();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->name = 'Beatrice Wilkinson';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->callCredentials->fromPlugin->structConfig = 'deleniti';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials = new ChannelCredentials();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates = new TlsCertificatePaths();
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->certificatePath = 'excepturi';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->certificates->privateKeyPath = 'unde';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->channelCredentials->channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum::INVALID;
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->sdsConfig->grpcServiceConfig->targetUri = 'asperiores';
    $request->sslPolicy1->tlsSettings->proxyTlsContext->validationContext->validationSource = TlsValidationContextValidationSourceEnum::INVALID;
    $request->sslPolicy1->tlsSettings->subjectAltNames = [
        'delectus',
        'accusamus',
        'cum',
        'excepturi',
    ];
    $request->sslPolicy1->tlsSettings->tlsMode = ServerTlsSettingsTlsModeEnum::SIMPLE;
    $request->sslPolicy1->warnings = [
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'nesciunt';
    $request->key = 'beatae';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'voluptatum';
    $request->region = 'vitae';
    $request->requestId = 'eveniet';
    $request->sslPolicyPathParameter = 'expedita';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'beatae';
    $request->userIp = 'fugiat';

    $requestSecurity = new ComputeRegionSslPoliciesPatchSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'iusto',
        'hic',
        'odio',
    ];
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->fields = 'suscipit';
    $request->key = 'culpa';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'enim';
    $request->region = 'repudiandae';
    $request->resource = 'nostrum';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'rem';
    $request->userIp = 'quos';

    $requestSecurity = new ComputeRegionSslPoliciesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
