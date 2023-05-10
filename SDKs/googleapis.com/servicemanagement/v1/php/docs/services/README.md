# services

### Available Operations

* [servicemanagementServicesConfigsCreate](#servicemanagementservicesconfigscreate) - Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.
* [servicemanagementServicesConfigsGet](#servicemanagementservicesconfigsget) - Gets a service configuration (version) for a managed service.
* [servicemanagementServicesConfigsList](#servicemanagementservicesconfigslist) - Lists the history of the service configuration for a managed service, from the newest to the oldest.
* [servicemanagementServicesConfigsSubmit](#servicemanagementservicesconfigssubmit) - Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation
* [servicemanagementServicesConsumersGetIamPolicy](#servicemanagementservicesconsumersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [servicemanagementServicesConsumersSetIamPolicy](#servicemanagementservicesconsumerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [servicemanagementServicesConsumersTestIamPermissions](#servicemanagementservicesconsumerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [servicemanagementServicesCreate](#servicemanagementservicescreate) - Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation
* [servicemanagementServicesDelete](#servicemanagementservicesdelete) - Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation
* [servicemanagementServicesGenerateConfigReport](#servicemanagementservicesgenerateconfigreport) - Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.
* [servicemanagementServicesGet](#servicemanagementservicesget) - Gets a managed service. Authentication is required unless the service is public.
* [servicemanagementServicesGetConfig](#servicemanagementservicesgetconfig) - Gets a service configuration (version) for a managed service.
* [servicemanagementServicesList](#servicemanagementserviceslist) - Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.
* [servicemanagementServicesRolloutsCreate](#servicemanagementservicesrolloutscreate) - Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation
* [servicemanagementServicesRolloutsGet](#servicemanagementservicesrolloutsget) - Gets a service configuration rollout.
* [servicemanagementServicesRolloutsList](#servicemanagementservicesrolloutslist) - Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
* [servicemanagementServicesUndelete](#servicemanagementservicesundelete) - Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation

## servicemanagementServicesConfigsCreate

Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Service;
use \OpenAPI\OpenAPI\Models\Shared\Api;
use \OpenAPI\OpenAPI\Models\Shared\Method;
use \OpenAPI\OpenAPI\Models\Shared\Option;
use \OpenAPI\OpenAPI\Models\Shared\MethodSyntaxEnum;
use \OpenAPI\OpenAPI\Models\Shared\Mixin;
use \OpenAPI\OpenAPI\Models\Shared\SourceContext;
use \OpenAPI\OpenAPI\Models\Shared\ApiSyntaxEnum;
use \OpenAPI\OpenAPI\Models\Shared\Authentication;
use \OpenAPI\OpenAPI\Models\Shared\AuthProvider;
use \OpenAPI\OpenAPI\Models\Shared\JwtLocation;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticationRule;
use \OpenAPI\OpenAPI\Models\Shared\OAuthRequirements;
use \OpenAPI\OpenAPI\Models\Shared\AuthRequirement;
use \OpenAPI\OpenAPI\Models\Shared\Backend;
use \OpenAPI\OpenAPI\Models\Shared\BackendRule;
use \OpenAPI\OpenAPI\Models\Shared\BackendRulePathTranslationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Billing;
use \OpenAPI\OpenAPI\Models\Shared\BillingDestination;
use \OpenAPI\OpenAPI\Models\Shared\Context;
use \OpenAPI\OpenAPI\Models\Shared\ContextRule;
use \OpenAPI\OpenAPI\Models\Shared\Control;
use \OpenAPI\OpenAPI\Models\Shared\CustomError;
use \OpenAPI\OpenAPI\Models\Shared\CustomErrorRule;
use \OpenAPI\OpenAPI\Models\Shared\Documentation;
use \OpenAPI\OpenAPI\Models\Shared\Page;
use \OpenAPI\OpenAPI\Models\Shared\DocumentationRule;
use \OpenAPI\OpenAPI\Models\Shared\Endpoint;
use \OpenAPI\OpenAPI\Models\Shared\Enum;
use \OpenAPI\OpenAPI\Models\Shared\EnumValue;
use \OpenAPI\OpenAPI\Models\Shared\EnumSyntaxEnum;
use \OpenAPI\OpenAPI\Models\Shared\Http;
use \OpenAPI\OpenAPI\Models\Shared\HttpRule;
use \OpenAPI\OpenAPI\Models\Shared\CustomHttpPattern;
use \OpenAPI\OpenAPI\Models\Shared\Logging;
use \OpenAPI\OpenAPI\Models\Shared\LoggingDestination;
use \OpenAPI\OpenAPI\Models\Shared\LogDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\LabelDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\LabelDescriptorValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptorLaunchStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptorMetadata;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptorMetadataLaunchStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptorMetricKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptorValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoredResourceDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\MonitoredResourceDescriptorLaunchStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\Monitoring;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringDestination;
use \OpenAPI\OpenAPI\Models\Shared\Publishing;
use \OpenAPI\OpenAPI\Models\Shared\ClientLibrarySettings;
use \OpenAPI\OpenAPI\Models\Shared\CppSettings;
use \OpenAPI\OpenAPI\Models\Shared\CommonLanguageSettings;
use \OpenAPI\OpenAPI\Models\Shared\CommonLanguageSettingsDestinationsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DotnetSettings;
use \OpenAPI\OpenAPI\Models\Shared\GoSettings;
use \OpenAPI\OpenAPI\Models\Shared\JavaSettings;
use \OpenAPI\OpenAPI\Models\Shared\ClientLibrarySettingsLaunchStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeSettings;
use \OpenAPI\OpenAPI\Models\Shared\PhpSettings;
use \OpenAPI\OpenAPI\Models\Shared\PythonSettings;
use \OpenAPI\OpenAPI\Models\Shared\RubySettings;
use \OpenAPI\OpenAPI\Models\Shared\MethodSettings;
use \OpenAPI\OpenAPI\Models\Shared\LongRunning;
use \OpenAPI\OpenAPI\Models\Shared\PublishingOrganizationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Quota;
use \OpenAPI\OpenAPI\Models\Shared\QuotaLimit;
use \OpenAPI\OpenAPI\Models\Shared\MetricRule;
use \OpenAPI\OpenAPI\Models\Shared\SourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\SystemParameters;
use \OpenAPI\OpenAPI\Models\Shared\SystemParameterRule;
use \OpenAPI\OpenAPI\Models\Shared\SystemParameter;
use \OpenAPI\OpenAPI\Models\Shared\Type;
use \OpenAPI\OpenAPI\Models\Shared\Field;
use \OpenAPI\OpenAPI\Models\Shared\FieldCardinalityEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypeSyntaxEnum;
use \OpenAPI\OpenAPI\Models\Shared\Usage;
use \OpenAPI\OpenAPI\Models\Shared\UsageRule;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->service = new Service();
    $request->service->apis = [
        new Api(),
        new Api(),
        new Api(),
    ];
    $request->service->authentication = new Authentication();
    $request->service->authentication->providers = [
        new AuthProvider(),
        new AuthProvider(),
        new AuthProvider(),
    ];
    $request->service->authentication->rules = [
        new AuthenticationRule(),
        new AuthenticationRule(),
        new AuthenticationRule(),
    ];
    $request->service->backend = new Backend();
    $request->service->backend->rules = [
        new BackendRule(),
    ];
    $request->service->billing = new Billing();
    $request->service->billing->consumerDestinations = [
        new BillingDestination(),
        new BillingDestination(),
        new BillingDestination(),
    ];
    $request->service->configVersion = 944669;
    $request->service->context = new Context();
    $request->service->context->rules = [
        new ContextRule(),
        new ContextRule(),
        new ContextRule(),
        new ContextRule(),
    ];
    $request->service->control = new Control();
    $request->service->control->environment = 'totam';
    $request->service->customError = new CustomError();
    $request->service->customError->rules = [
        new CustomErrorRule(),
    ];
    $request->service->customError->types = [
        'molestiae',
        'modi',
    ];
    $request->service->documentation = new Documentation();
    $request->service->documentation->documentationRootUrl = 'qui';
    $request->service->documentation->overview = 'impedit';
    $request->service->documentation->pages = [
        new Page(),
        new Page(),
        new Page(),
    ];
    $request->service->documentation->rules = [
        new DocumentationRule(),
        new DocumentationRule(),
    ];
    $request->service->documentation->serviceRootUrl = 'ipsum';
    $request->service->documentation->summary = 'excepturi';
    $request->service->endpoints = [
        new Endpoint(),
    ];
    $request->service->enums = [
        new Enum(),
    ];
    $request->service->http = new Http();
    $request->service->http->fullyDecodeReservedExpansion = false;
    $request->service->http->rules = [
        new HttpRule(),
        new HttpRule(),
    ];
    $request->service->id = '929396fe-a759-46eb-90fa-aa2352c59559';
    $request->service->logging = new Logging();
    $request->service->logging->consumerDestinations = [
        new LoggingDestination(),
    ];
    $request->service->logging->producerDestinations = [
        new LoggingDestination(),
        new LoggingDestination(),
    ];
    $request->service->logs = [
        new LogDescriptor(),
        new LogDescriptor(),
        new LogDescriptor(),
    ];
    $request->service->metrics = [
        new MetricDescriptor(),
        new MetricDescriptor(),
        new MetricDescriptor(),
        new MetricDescriptor(),
    ];
    $request->service->monitoredResources = [
        new MonitoredResourceDescriptor(),
        new MonitoredResourceDescriptor(),
        new MonitoredResourceDescriptor(),
        new MonitoredResourceDescriptor(),
    ];
    $request->service->monitoring = new Monitoring();
    $request->service->monitoring->consumerDestinations = [
        new MonitoringDestination(),
    ];
    $request->service->monitoring->producerDestinations = [
        new MonitoringDestination(),
        new MonitoringDestination(),
        new MonitoringDestination(),
    ];
    $request->service->name = 'Cecilia Crooks';
    $request->service->producerProjectId = 'occaecati';
    $request->service->publishing = new Publishing();
    $request->service->publishing->apiShortName = 'numquam';
    $request->service->publishing->codeownerGithubTeams = [
        'quam',
        'molestiae',
    ];
    $request->service->publishing->docTagPrefix = 'velit';
    $request->service->publishing->documentationUri = 'error';
    $request->service->publishing->githubLabel = 'quia';
    $request->service->publishing->librarySettings = [
        new ClientLibrarySettings(),
        new ClientLibrarySettings(),
    ];
    $request->service->publishing->methodSettings = [
        new MethodSettings(),
    ];
    $request->service->publishing->newIssueUri = 'laborum';
    $request->service->publishing->organization = PublishingOrganizationEnum::SHOPPING;
    $request->service->publishing->protoReferenceDocumentationUri = 'enim';
    $request->service->quota = new Quota();
    $request->service->quota->limits = [
        new QuotaLimit(),
    ];
    $request->service->quota->metricRules = [
        new MetricRule(),
        new MetricRule(),
        new MetricRule(),
        new MetricRule(),
    ];
    $request->service->sourceInfo = new SourceInfo();
    $request->service->sourceInfo->sourceFiles = [
        [
            'ipsam' => 'id',
            'possimus' => 'aut',
            'quasi' => 'error',
            'temporibus' => 'laborum',
        ],
    ];
    $request->service->systemParameters = new SystemParameters();
    $request->service->systemParameters->rules = [
        new SystemParameterRule(),
    ];
    $request->service->systemTypes = [
        new Type(),
        new Type(),
        new Type(),
        new Type(),
    ];
    $request->service->title = 'Dr.';
    $request->service->types = [
        new Type(),
        new Type(),
        new Type(),
        new Type(),
    ];
    $request->service->usage = new Usage();
    $request->service->usage->producerNotificationChannel = 'nihil';
    $request->service->usage->requirements = [
        'voluptatibus',
        'ipsa',
        'omnis',
    ];
    $request->service->usage->rules = [
        new UsageRule(),
        new UsageRule(),
    ];
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'reprehenderit';
    $request->key = 'ut';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->serviceName = 'corporis';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new ServicemanagementServicesConfigsCreateSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesConfigsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesConfigsCreate($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesConfigsGet

Gets a service configuration (version) for a managed service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesConfigsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->configId = 'commodi';
    $request->fields = 'repudiandae';
    $request->key = 'quae';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->serviceName = 'molestias';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';
    $request->view = ServicemanagementServicesConfigsGetViewEnum::BASIC;

    $requestSecurity = new ServicemanagementServicesConfigsGetSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesConfigsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesConfigsGet($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesConfigsList

Lists the history of the service configuration for a managed service, from the newest to the oldest.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'repudiandae';
    $request->key = 'sint';
    $request->oauthToken = 'veritatis';
    $request->pageSize = 929297;
    $request->pageToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->serviceName = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new ServicemanagementServicesConfigsListSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesConfigsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesConfigsList($request, $requestSecurity);

    if ($response->listServiceConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesConfigsSubmit

Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsSubmitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubmitConfigSourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigSource;
use \OpenAPI\OpenAPI\Models\Shared\ConfigFile;
use \OpenAPI\OpenAPI\Models\Shared\ConfigFileFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsSubmitSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsSubmitSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConfigsSubmitSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesConfigsSubmitRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->submitConfigSourceRequest = new SubmitConfigSourceRequest();
    $request->submitConfigSourceRequest->configSource = new ConfigSource();
    $request->submitConfigSourceRequest->configSource->files = [
        new ConfigFile(),
        new ConfigFile(),
        new ConfigFile(),
    ];
    $request->submitConfigSourceRequest->configSource->id = 'bd442698-02d5-402a-94bb-4f63c969e9a3';
    $request->submitConfigSourceRequest->validateOnly = false;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'in';
    $request->key = 'in';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->serviceName = 'rerum';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new ServicemanagementServicesConfigsSubmitSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesConfigsSubmitSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesConfigsSubmit($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesConsumersGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPolicyOptions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersGetIamPolicySecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersGetIamPolicySecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesConsumersGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getIamPolicyRequest = new GetIamPolicyRequest();
    $request->getIamPolicyRequest->options = new GetPolicyOptions();
    $request->getIamPolicyRequest->options->requestedPolicyVersion = 813798;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'accusamus';
    $request->key = 'non';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->resource = 'accusamus';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new ServicemanagementServicesConsumersGetIamPolicySecurity();
    $requestSecurity->option1 = new ServicemanagementServicesConsumersGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesConsumersGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesConsumersSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesConsumersSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'blanditiis';
    $request->setIamPolicyRequest->policy->version = 533206;
    $request->setIamPolicyRequest->updateMask = 'sapiente';
    $request->accessToken = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'vel';
    $request->key = 'natus';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->resource = 'perferendis';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new ServicemanagementServicesConsumersSetIamPolicySecurity();
    $requestSecurity->option1 = new ServicemanagementServicesConsumersSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesConsumersSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesConsumersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesConsumersTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'labore',
        'labore',
        'suscipit',
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eum';
    $request->fields = 'vero';
    $request->key = 'aspernatur';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->resource = 'et';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new ServicemanagementServicesConsumersTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesConsumersTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesCreate

Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagedService;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->managedService = new ManagedService();
    $request->managedService->producerProjectId = 'quos';
    $request->managedService->serviceName = 'sint';
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'mollitia';
    $request->key = 'ad';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new ServicemanagementServicesCreateSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesDelete

Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'doloribus';
    $request->fields = 'debitis';
    $request->key = 'eius';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->serviceName = 'facilis';
    $request->uploadType = 'in';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new ServicemanagementServicesDeleteSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesGenerateConfigReport

Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGenerateConfigReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateConfigReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGenerateConfigReportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGenerateConfigReportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGenerateConfigReportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesGenerateConfigReportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->generateConfigReportRequest = new GenerateConfigReportRequest();
    $request->generateConfigReportRequest->newConfig = [
        'ullam' => 'expedita',
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->generateConfigReportRequest->oldConfig = [
        'consequuntur' => 'praesentium',
    ];
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->oauthToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'excepturi';

    $requestSecurity = new ServicemanagementServicesGenerateConfigReportSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesGenerateConfigReportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesGenerateConfigReport($request, $requestSecurity);

    if ($response->generateConfigReportResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesGet

Gets a managed service. Authentication is required unless the service is public.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'maiores';
    $request->key = 'quidem';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->serviceName = 'autem';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'eaque';

    $requestSecurity = new ServicemanagementServicesGetSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesGet($request, $requestSecurity);

    if ($response->managedService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesGetConfig

Gets a service configuration (version) for a managed service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetConfigViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetConfigSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetConfigSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetConfigSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetConfigSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesGetConfigSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesGetConfigRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->configId = 'fugiat';
    $request->fields = 'amet';
    $request->key = 'aut';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'corporis';
    $request->serviceName = 'hic';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'nobis';
    $request->view = ServicemanagementServicesGetConfigViewEnum::BASIC;

    $requestSecurity = new ServicemanagementServicesGetConfigSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesGetConfigSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesGetConfig($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesList

Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eaque';
    $request->consumerId = 'quis';
    $request->fields = 'nesciunt';
    $request->key = 'eos';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 170986;
    $request->pageToken = 'minus';
    $request->prettyPrint = false;
    $request->producerProjectId = 'quam';
    $request->quotaUser = 'dolor';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'nostrum';

    $requestSecurity = new ServicemanagementServicesListSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesList($request, $requestSecurity);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesRolloutsCreate

Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rollout;
use \OpenAPI\OpenAPI\Models\Shared\RolloutStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrafficPercentStrategy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesRolloutsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->rollout = new Rollout();
    $request->rollout->createTime = 'recusandae';
    $request->rollout->createdBy = 'omnis';
    $request->rollout->deleteServiceStrategy = [
        'perspiciatis' => 'voluptatem',
        'porro' => 'consequuntur',
        'blanditiis' => 'error',
    ];
    $request->rollout->rolloutId = 'eaque';
    $request->rollout->serviceName = 'occaecati';
    $request->rollout->status = RolloutStatusEnum::FAILED;
    $request->rollout->trafficPercentStrategy = new TrafficPercentStrategy();
    $request->rollout->trafficPercentStrategy->percentages = [
        'asperiores' => 9342.14,
    ];
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'deleniti';
    $request->key = 'pariatur';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->serviceName = 'libero';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'quaerat';

    $requestSecurity = new ServicemanagementServicesRolloutsCreateSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesRolloutsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesRolloutsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesRolloutsGet

Gets a service configuration rollout.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesRolloutsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorem';
    $request->fields = 'dolor';
    $request->key = 'qui';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->rolloutId = 'excepturi';
    $request->serviceName = 'cum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new ServicemanagementServicesRolloutsGetSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesRolloutsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesRolloutsGet($request, $requestSecurity);

    if ($response->rollout !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesRolloutsList

Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesRolloutsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesRolloutsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'veritatis';
    $request->filter = 'ipsa';
    $request->key = 'ipsa';
    $request->oauthToken = 'iure';
    $request->pageSize = 487838;
    $request->pageToken = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->serviceName = 'quidem';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new ServicemanagementServicesRolloutsListSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesRolloutsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesRolloutsList($request, $requestSecurity);

    if ($response->listServiceRolloutsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## servicemanagementServicesUndelete

Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesUndeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesUndeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ServicemanagementServicesUndeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicemanagementServicesUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sit';
    $request->fields = 'fugiat';
    $request->key = 'ab';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->serviceName = 'iusto';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new ServicemanagementServicesUndeleteSecurity();
    $requestSecurity->option1 = new ServicemanagementServicesUndeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->servicemanagementServicesUndelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
