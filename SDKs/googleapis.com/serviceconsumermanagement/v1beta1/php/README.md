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
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\V1Beta1ImportProducerOverridesRequest;
use \OpenAPI\OpenAPI\Models\Shared\V1Beta1ImportProducerOverridesRequestForceOnlyEnum;
use \OpenAPI\OpenAPI\Models\Shared\V1Beta1OverrideInlineSource;
use \OpenAPI\OpenAPI\Models\Shared\V1Beta1QuotaOverride;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->v1Beta1ImportProducerOverridesRequest = new V1Beta1ImportProducerOverridesRequest();
    $request->v1Beta1ImportProducerOverridesRequest->force = false;
    $request->v1Beta1ImportProducerOverridesRequest->forceOnly = [
        V1Beta1ImportProducerOverridesRequestForceOnlyEnum::LIMIT_DECREASE_PERCENTAGE_TOO_HIGH,
        V1Beta1ImportProducerOverridesRequestForceOnlyEnum::LIMIT_DECREASE_PERCENTAGE_TOO_HIGH,
        V1Beta1ImportProducerOverridesRequestForceOnlyEnum::LIMIT_DECREASE_BELOW_USAGE,
    ];
    $request->v1Beta1ImportProducerOverridesRequest->inlineSource = new V1Beta1OverrideInlineSource();
    $request->v1Beta1ImportProducerOverridesRequest->inlineSource->overrides = [
        new V1Beta1QuotaOverride(),
        new V1Beta1QuotaOverride(),
        new V1Beta1QuotaOverride(),
        new V1Beta1QuotaOverride(),
    ];
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->parent = 'iure';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new ServiceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverridesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->services->serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [services](docs/services/README.md)

* [serviceconsumermanagementServicesConsumerQuotaMetricsImportProducerOverrides](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricsimportproduceroverrides) - Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsGet](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsget) - Retrieves a summary of quota information for a specific quota limit.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreate](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridescreate) - Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDelete](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridesdelete) - Deletes a producer override.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesList](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverrideslist) - Lists all producer overrides on this limit.
* [serviceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatch](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslimitsproduceroverridespatch) - Updates a producer override.
* [serviceconsumermanagementServicesConsumerQuotaMetricsList](docs/services/README.md#serviceconsumermanagementservicesconsumerquotametricslist) - Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
