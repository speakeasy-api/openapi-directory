# apps

### Available Operations

* [appengineAppsAuthorizedCertificatesCreate](#appengineappsauthorizedcertificatescreate) - Uploads the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesDelete](#appengineappsauthorizedcertificatesdelete) - Deletes the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesGet](#appengineappsauthorizedcertificatesget) - Gets the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesList](#appengineappsauthorizedcertificateslist) - Lists all SSL certificates the user is authorized to administer.
* [appengineAppsAuthorizedCertificatesPatch](#appengineappsauthorizedcertificatespatch) - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* [appengineAppsAuthorizedDomainsList](#appengineappsauthorizeddomainslist) - Lists all domains the user is authorized to administer.
* [appengineAppsCreate](#appengineappscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [appengineAppsDomainMappingsCreate](#appengineappsdomainmappingscreate) - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* [appengineAppsDomainMappingsDelete](#appengineappsdomainmappingsdelete) - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* [appengineAppsDomainMappingsGet](#appengineappsdomainmappingsget) - Gets the specified domain mapping.
* [appengineAppsDomainMappingsList](#appengineappsdomainmappingslist) - Lists the domain mappings on an application.
* [appengineAppsDomainMappingsPatch](#appengineappsdomainmappingspatch) - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* [appengineAppsFirewallIngressRulesBatchUpdate](#appengineappsfirewallingressrulesbatchupdate) - Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
* [appengineAppsFirewallIngressRulesCreate](#appengineappsfirewallingressrulescreate) - Creates a firewall rule for the application.
* [appengineAppsFirewallIngressRulesDelete](#appengineappsfirewallingressrulesdelete) - Deletes the specified firewall rule.
* [appengineAppsFirewallIngressRulesGet](#appengineappsfirewallingressrulesget) - Gets the specified firewall rule.
* [appengineAppsFirewallIngressRulesList](#appengineappsfirewallingressruleslist) - Lists the firewall rules of an application.
* [appengineAppsFirewallIngressRulesPatch](#appengineappsfirewallingressrulespatch) - Updates the specified firewall rule.
* [appengineAppsGet](#appengineappsget) - Gets information about an application.
* [appengineAppsLocationsGet](#appengineappslocationsget) - Gets information about a location.
* [appengineAppsLocationsList](#appengineappslocationslist) - Lists information about the supported locations for this service.
* [appengineAppsOperationsGet](#appengineappsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [appengineAppsOperationsList](#appengineappsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
* [appengineAppsPatch](#appengineappspatch) - Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
* [appengineAppsRepair](#appengineappsrepair) - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* [appengineAppsServicesDelete](#appengineappsservicesdelete) - Deletes the specified service and all enclosed versions.
* [appengineAppsServicesGet](#appengineappsservicesget) - Gets the current configuration of the specified service.
* [appengineAppsServicesList](#appengineappsserviceslist) - Lists all the services in the application.
* [appengineAppsServicesPatch](#appengineappsservicespatch) - Updates the configuration of the specified service.
* [appengineAppsServicesVersionsCreate](#appengineappsservicesversionscreate) - Deploys code and resource files to a new version.
* [appengineAppsServicesVersionsDelete](#appengineappsservicesversionsdelete) - Deletes an existing Version resource.
* [appengineAppsServicesVersionsGet](#appengineappsservicesversionsget) - Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
* [appengineAppsServicesVersionsInstancesDebug](#appengineappsservicesversionsinstancesdebug) - Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
* [appengineAppsServicesVersionsInstancesDelete](#appengineappsservicesversionsinstancesdelete) - Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
* [appengineAppsServicesVersionsInstancesGet](#appengineappsservicesversionsinstancesget) - Gets instance information.
* [appengineAppsServicesVersionsInstancesList](#appengineappsservicesversionsinstanceslist) - Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
* [appengineAppsServicesVersionsList](#appengineappsservicesversionslist) - Lists the versions of a service.
* [appengineAppsServicesVersionsPatch](#appengineappsservicesversionspatch) - Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)

## appengineAppsAuthorizedCertificatesCreate

Uploads the specified SSL certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\CertificateRawData;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->authorizedCertificate = new AuthorizedCertificate();
    $request->authorizedCertificate->certificateRawData = new CertificateRawData();
    $request->authorizedCertificate->certificateRawData->privateKey = 'ipsum';
    $request->authorizedCertificate->certificateRawData->publicCertificate = 'excepturi';
    $request->authorizedCertificate->displayName = 'aspernatur';
    $request->authorizedCertificate->domainMappingsCount = 18789;
    $request->authorizedCertificate->domainNames = [
        'natus',
        'sed',
    ];
    $request->authorizedCertificate->expireTime = 'iste';
    $request->authorizedCertificate->id = '396fea75-96eb-410f-aaa2-352c5955907a';
    $request->authorizedCertificate->managedCertificate = new ManagedCertificate();
    $request->authorizedCertificate->managedCertificate->lastRenewalTime = 'doloribus';
    $request->authorizedCertificate->managedCertificate->status = ManagedCertificateStatusEnum::FAILED_RETRYING_CAA_CHECKING;
    $request->authorizedCertificate->name = 'Angie Durgan';
    $request->authorizedCertificate->visibleDomainMappings = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'velit';
    $request->callback = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new AppengineAppsAuthorizedCertificatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesCreate($request, $requestSecurity);

    if ($response->authorizedCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsAuthorizedCertificatesDelete

Deletes the specified SSL certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'tenetur';
    $request->authorizedCertificatesId = 'ipsam';
    $request->callback = 'id';
    $request->fields = 'possimus';
    $request->key = 'aut';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new AppengineAppsAuthorizedCertificatesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsAuthorizedCertificatesGet

Gets the specified SSL certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'vero';
    $request->authorizedCertificatesId = 'nihil';
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'perferendis';
    $request->view = AppengineAppsAuthorizedCertificatesGetViewEnum::BASIC_CERTIFICATE;

    $requestSecurity = new AppengineAppsAuthorizedCertificatesGetSecurity();
    $requestSecurity->option1 = new AppengineAppsAuthorizedCertificatesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesGet($request, $requestSecurity);

    if ($response->authorizedCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsAuthorizedCertificatesList

Lists all SSL certificates the user is authorized to administer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'dicta';
    $request->callback = 'corporis';
    $request->fields = 'dolore';
    $request->key = 'iusto';
    $request->oauthToken = 'dicta';
    $request->pageSize = 688661;
    $request->pageToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'repudiandae';
    $request->view = AppengineAppsAuthorizedCertificatesListViewEnum::BASIC_CERTIFICATE;

    $requestSecurity = new AppengineAppsAuthorizedCertificatesListSecurity();
    $requestSecurity->option1 = new AppengineAppsAuthorizedCertificatesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesList($request, $requestSecurity);

    if ($response->listAuthorizedCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsAuthorizedCertificatesPatch

Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\CertificateRawData;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->authorizedCertificate = new AuthorizedCertificate();
    $request->authorizedCertificate->certificateRawData = new CertificateRawData();
    $request->authorizedCertificate->certificateRawData->privateKey = 'quidem';
    $request->authorizedCertificate->certificateRawData->publicCertificate = 'molestias';
    $request->authorizedCertificate->displayName = 'excepturi';
    $request->authorizedCertificate->domainMappingsCount = 865103;
    $request->authorizedCertificate->domainNames = [
        'praesentium',
        'rem',
    ];
    $request->authorizedCertificate->expireTime = 'voluptates';
    $request->authorizedCertificate->id = '1e91e450-ad2a-4bd4-8269-802d502a94bb';
    $request->authorizedCertificate->managedCertificate = new ManagedCertificate();
    $request->authorizedCertificate->managedCertificate->lastRenewalTime = 'labore';
    $request->authorizedCertificate->managedCertificate->status = ManagedCertificateStatusEnum::FAILED_RETRYING_CAA_CHECKING;
    $request->authorizedCertificate->name = 'Ethel Roob';
    $request->authorizedCertificate->visibleDomainMappings = [
        'necessitatibus',
        'sint',
        'officia',
    ];
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'a';
    $request->authorizedCertificatesId = 'dolorum';
    $request->callback = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->updateMask = 'dicta';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new AppengineAppsAuthorizedCertificatesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesPatch($request, $requestSecurity);

    if ($response->authorizedCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsAuthorizedDomainsList

Lists all domains the user is authorized to administer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedDomainsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedDomainsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedDomainsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedDomainsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedDomainsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedDomainsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'laborum';
    $request->callback = 'accusamus';
    $request->fields = 'non';
    $request->key = 'occaecati';
    $request->oauthToken = 'enim';
    $request->pageSize = 881736;
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new AppengineAppsAuthorizedDomainsListSecurity();
    $requestSecurity->option1 = new AppengineAppsAuthorizedDomainsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedDomainsList($request, $requestSecurity);

    if ($response->listAuthorizedDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsCreate

Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationInput;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationDatabaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlDispatchRule;
use \OpenAPI\OpenAPI\Models\Shared\FeatureSettings;
use \OpenAPI\OpenAPI\Models\Shared\IdentityAwareProxyInput;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationServingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->applicationInput = new ApplicationInput();
    $request->applicationInput->authDomain = 'blanditiis';
    $request->applicationInput->databaseType = ApplicationDatabaseTypeEnum::CLOUD_FIRESTORE;
    $request->applicationInput->defaultCookieExpiration = 'sapiente';
    $request->applicationInput->dispatchRules = [
        new UrlDispatchRule(),
    ];
    $request->applicationInput->featureSettings = new FeatureSettings();
    $request->applicationInput->featureSettings->splitHealthChecks = false;
    $request->applicationInput->featureSettings->useContainerOptimizedOs = false;
    $request->applicationInput->iap = new IdentityAwareProxyInput();
    $request->applicationInput->iap->enabled = false;
    $request->applicationInput->iap->oauth2ClientId = 'deserunt';
    $request->applicationInput->iap->oauth2ClientSecret = 'nisi';
    $request->applicationInput->id = '6997074b-a446-49b6-a214-1959890afa56';
    $request->applicationInput->locationId = 'dolor';
    $request->applicationInput->serviceAccount = 'necessitatibus';
    $request->applicationInput->servingStatus = ApplicationServingStatusEnum::UNSPECIFIED;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'doloribus';
    $request->key = 'debitis';
    $request->oauthToken = 'eius';
    $request->parent = 'maxime';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'in';

    $requestSecurity = new AppengineAppsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsDomainMappingsCreate

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainMapping;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecord;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslSettings;
use \OpenAPI\OpenAPI\Models\Shared\SslSettingsSslManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsCreateOverrideStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsDomainMappingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->domainMapping = new DomainMapping();
    $request->domainMapping->id = '1e5b7fd2-ed02-4892-9cdd-c692601fb576';
    $request->domainMapping->name = 'Gary Streich';
    $request->domainMapping->resourceRecords = [
        new ResourceRecord(),
    ];
    $request->domainMapping->sslSettings = new SslSettings();
    $request->domainMapping->sslSettings->certificateId = 'fugiat';
    $request->domainMapping->sslSettings->pendingManagedCertificateId = 'amet';
    $request->domainMapping->sslSettings->sslManagementType = SslSettingsSslManagementTypeEnum::AUTOMATIC;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'hic';
    $request->callback = 'libero';
    $request->fields = 'nobis';
    $request->key = 'dolores';
    $request->oauthToken = 'quis';
    $request->overrideStrategy = AppengineAppsDomainMappingsCreateOverrideStrategyEnum::STRICT;
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new AppengineAppsDomainMappingsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsDomainMappingsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsDomainMappingsDelete

Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsDomainMappingsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'dolores';
    $request->callback = 'minus';
    $request->domainMappingsId = 'quam';
    $request->fields = 'dolor';
    $request->key = 'vero';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new AppengineAppsDomainMappingsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsDomainMappingsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsDomainMappingsGet

Gets the specified domain mapping.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsDomainMappingsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'porro';
    $request->callback = 'consequuntur';
    $request->domainMappingsId = 'blanditiis';
    $request->fields = 'error';
    $request->key = 'eaque';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'asperiores';

    $requestSecurity = new AppengineAppsDomainMappingsGetSecurity();
    $requestSecurity->option1 = new AppengineAppsDomainMappingsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsDomainMappingsGet($request, $requestSecurity);

    if ($response->domainMapping !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsDomainMappingsList

Lists the domain mappings on an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsDomainMappingsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'dolorum';
    $request->callback = 'deleniti';
    $request->fields = 'pariatur';
    $request->key = 'provident';
    $request->oauthToken = 'nobis';
    $request->pageSize = 730122;
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new AppengineAppsDomainMappingsListSecurity();
    $requestSecurity->option1 = new AppengineAppsDomainMappingsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsDomainMappingsList($request, $requestSecurity);

    if ($response->listDomainMappingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsDomainMappingsPatch

Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainMapping;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecord;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslSettings;
use \OpenAPI\OpenAPI\Models\Shared\SslSettingsSslManagementTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsDomainMappingsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsDomainMappingsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->domainMapping = new DomainMapping();
    $request->domainMapping->id = '3323f9b7-7f3a-4410-8674-ebf69280d1ba';
    $request->domainMapping->name = 'Colleen Pagac';
    $request->domainMapping->resourceRecords = [
        new ResourceRecord(),
        new ResourceRecord(),
        new ResourceRecord(),
        new ResourceRecord(),
    ];
    $request->domainMapping->sslSettings = new SslSettings();
    $request->domainMapping->sslSettings->certificateId = 'distinctio';
    $request->domainMapping->sslSettings->pendingManagedCertificateId = 'asperiores';
    $request->domainMapping->sslSettings->sslManagementType = SslSettingsSslManagementTypeEnum::AUTOMATIC;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'id';
    $request->callback = 'saepe';
    $request->domainMappingsId = 'eius';
    $request->fields = 'aspernatur';
    $request->key = 'perferendis';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->updateMask = 'accusamus';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new AppengineAppsDomainMappingsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsDomainMappingsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsFirewallIngressRulesBatchUpdate

Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesBatchUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateIngressRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\FirewallRule;
use \OpenAPI\OpenAPI\Models\Shared\FirewallRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesBatchUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsFirewallIngressRulesBatchUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->batchUpdateIngressRulesRequest = new BatchUpdateIngressRulesRequest();
    $request->batchUpdateIngressRulesRequest->ingressRules = [
        new FirewallRule(),
        new FirewallRule(),
        new FirewallRule(),
    ];
    $request->accessToken = 'provident';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'repellendus';
    $request->callback = 'totam';
    $request->fields = 'similique';
    $request->key = 'alias';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'vel';

    $requestSecurity = new AppengineAppsFirewallIngressRulesBatchUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsFirewallIngressRulesBatchUpdate($request, $requestSecurity);

    if ($response->batchUpdateIngressRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsFirewallIngressRulesCreate

Creates a firewall rule for the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallRule;
use \OpenAPI\OpenAPI\Models\Shared\FirewallRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsFirewallIngressRulesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->firewallRule = new FirewallRule();
    $request->firewallRule->action = FirewallRuleActionEnum::DENY;
    $request->firewallRule->description = 'qui';
    $request->firewallRule->priority = 679880;
    $request->firewallRule->sourceRange = 'a';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'iusto';
    $request->callback = 'ipsum';
    $request->fields = 'quisquam';
    $request->key = 'tenetur';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'tempore';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new AppengineAppsFirewallIngressRulesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsFirewallIngressRulesCreate($request, $requestSecurity);

    if ($response->firewallRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsFirewallIngressRulesDelete

Deletes the specified firewall rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsFirewallIngressRulesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'totam';
    $request->callback = 'nihil';
    $request->fields = 'sit';
    $request->ingressRulesId = 'expedita';
    $request->key = 'neque';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'voluptas';

    $requestSecurity = new AppengineAppsFirewallIngressRulesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsFirewallIngressRulesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsFirewallIngressRulesGet

Gets the specified firewall rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsFirewallIngressRulesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'incidunt';
    $request->callback = 'qui';
    $request->fields = 'cupiditate';
    $request->ingressRulesId = 'maxime';
    $request->key = 'pariatur';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new AppengineAppsFirewallIngressRulesGetSecurity();
    $requestSecurity->option1 = new AppengineAppsFirewallIngressRulesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsFirewallIngressRulesGet($request, $requestSecurity);

    if ($response->firewallRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsFirewallIngressRulesList

Lists the firewall rules of an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsFirewallIngressRulesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'distinctio';
    $request->callback = 'facilis';
    $request->fields = 'aliquid';
    $request->key = 'quam';
    $request->matchingAddress = 'molestias';
    $request->oauthToken = 'temporibus';
    $request->pageSize = 183280;
    $request->pageToken = 'neque';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugit';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new AppengineAppsFirewallIngressRulesListSecurity();
    $requestSecurity->option1 = new AppengineAppsFirewallIngressRulesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsFirewallIngressRulesList($request, $requestSecurity);

    if ($response->listIngressRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsFirewallIngressRulesPatch

Updates the specified firewall rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallRule;
use \OpenAPI\OpenAPI\Models\Shared\FirewallRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsFirewallIngressRulesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsFirewallIngressRulesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->firewallRule = new FirewallRule();
    $request->firewallRule->action = FirewallRuleActionEnum::ALLOW;
    $request->firewallRule->description = 'nam';
    $request->firewallRule->priority = 940432;
    $request->firewallRule->sourceRange = 'voluptatem';
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'nobis';
    $request->callback = 'et';
    $request->fields = 'saepe';
    $request->ingressRulesId = 'ipsum';
    $request->key = 'veritatis';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->updateMask = 'tempore';
    $request->uploadType = 'cupiditate';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new AppengineAppsFirewallIngressRulesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsFirewallIngressRulesPatch($request, $requestSecurity);

    if ($response->firewallRule !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsGet

Gets information about an application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'labore';
    $request->callback = 'adipisci';
    $request->fields = 'dolorum';
    $request->key = 'architecto';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'itaque';

    $requestSecurity = new AppengineAppsGetSecurity();
    $requestSecurity->option1 = new AppengineAppsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsGet($request, $requestSecurity);

    if ($response->application !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsLocationsGet

Gets information about a location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsLocationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'porro';
    $request->callback = 'doloribus';
    $request->fields = 'ut';
    $request->key = 'facilis';
    $request->locationsId = 'cupiditate';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new AppengineAppsLocationsGetSecurity();
    $requestSecurity->option1 = new AppengineAppsLocationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsLocationsGet($request, $requestSecurity);

    if ($response->location !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsLocationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'vero';
    $request->callback = 'omnis';
    $request->fields = 'quis';
    $request->filter = 'ipsum';
    $request->key = 'delectus';
    $request->oauthToken = 'voluptate';
    $request->pageSize = 231701;
    $request->pageToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'hic';

    $requestSecurity = new AppengineAppsLocationsListSecurity();
    $requestSecurity->option1 = new AppengineAppsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quod';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'similique';
    $request->callback = 'facilis';
    $request->fields = 'vero';
    $request->key = 'ducimus';
    $request->oauthToken = 'dolore';
    $request->operationsId = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new AppengineAppsOperationsGetSecurity();
    $requestSecurity->option1 = new AppengineAppsOperationsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsOperationsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'exercitationem';
    $request->callback = 'nulla';
    $request->fields = 'fugit';
    $request->filter = 'porro';
    $request->key = 'maiores';
    $request->oauthToken = 'doloribus';
    $request->pageSize = 478370;
    $request->pageToken = 'eligendi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new AppengineAppsOperationsListSecurity();
    $requestSecurity->option1 = new AppengineAppsOperationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsPatch

Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationInput;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationDatabaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlDispatchRule;
use \OpenAPI\OpenAPI\Models\Shared\FeatureSettings;
use \OpenAPI\OpenAPI\Models\Shared\IdentityAwareProxyInput;
use \OpenAPI\OpenAPI\Models\Shared\ApplicationServingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->applicationInput = new ApplicationInput();
    $request->applicationInput->authDomain = 'ipsam';
    $request->applicationInput->databaseType = ApplicationDatabaseTypeEnum::CLOUD_DATASTORE;
    $request->applicationInput->defaultCookieExpiration = 'aspernatur';
    $request->applicationInput->dispatchRules = [
        new UrlDispatchRule(),
        new UrlDispatchRule(),
    ];
    $request->applicationInput->featureSettings = new FeatureSettings();
    $request->applicationInput->featureSettings->splitHealthChecks = false;
    $request->applicationInput->featureSettings->useContainerOptimizedOs = false;
    $request->applicationInput->iap = new IdentityAwareProxyInput();
    $request->applicationInput->iap->enabled = false;
    $request->applicationInput->iap->oauth2ClientId = 'possimus';
    $request->applicationInput->iap->oauth2ClientSecret = 'magnam';
    $request->applicationInput->id = '36813f16-d9f5-4fce-ac55-6146c3e250fb';
    $request->applicationInput->locationId = 'aut';
    $request->applicationInput->serviceAccount = 'aut';
    $request->applicationInput->servingStatus = ApplicationServingStatusEnum::USER_DISABLED;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'fugit';
    $request->callback = 'accusamus';
    $request->fields = 'inventore';
    $request->key = 'non';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->updateMask = 'laborum';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new AppengineAppsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsRepair

Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsRepairRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsRepairSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsRepairRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'nobis' => 'quas',
        'assumenda' => 'nulla',
    ];
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'quasi';
    $request->callback = 'tempora';
    $request->fields = 'numquam';
    $request->key = 'explicabo';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new AppengineAppsRepairSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsRepair($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesDelete

Deletes the specified service and all enclosed versions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'esse';
    $request->callback = 'rem';
    $request->fields = 'fuga';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->servicesId = 'ut';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new AppengineAppsServicesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesGet

Gets the current configuration of the specified service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'quisquam';
    $request->callback = 'veritatis';
    $request->fields = 'ipsa';
    $request->key = 'id';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'neque';
    $request->servicesId = 'quo';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new AppengineAppsServicesGetSecurity();
    $requestSecurity->option1 = new AppengineAppsServicesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesGet($request, $requestSecurity);

    if ($response->service !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesList

Lists all the services in the application.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eius';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'voluptas';
    $request->callback = 'ab';
    $request->fields = 'cupiditate';
    $request->key = 'consequatur';
    $request->oauthToken = 'tempora';
    $request->pageSize = 892050;
    $request->pageToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new AppengineAppsServicesListSecurity();
    $requestSecurity->option1 = new AppengineAppsServicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesList($request, $requestSecurity);

    if ($response->listServicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesPatch

Updates the configuration of the specified service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Service;
use \OpenAPI\OpenAPI\Models\Shared\NetworkSettings;
use \OpenAPI\OpenAPI\Models\Shared\NetworkSettingsIngressTrafficAllowedEnum;
use \OpenAPI\OpenAPI\Models\Shared\TrafficSplit;
use \OpenAPI\OpenAPI\Models\Shared\TrafficSplitShardByEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->service = new Service();
    $request->service->id = 'e0bc7178-e479-46f2-a70c-688282aa4825';
    $request->service->labels = [
        'fugit' => 'sapiente',
        'consequuntur' => 'ratione',
    ];
    $request->service->name = 'Kerry Mayert IV';
    $request->service->networkSettings = new NetworkSettings();
    $request->service->networkSettings->ingressTrafficAllowed = NetworkSettingsIngressTrafficAllowedEnum::INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB;
    $request->service->split = new TrafficSplit();
    $request->service->split->allocations = [
        'veritatis' => 4586.04,
        'quod' => 7241.68,
        'vero' => 3990.25,
        'quasi' => 9040.45,
    ];
    $request->service->split->shardBy = TrafficSplitShardByEnum::COOKIE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'rerum';
    $request->callback = 'occaecati';
    $request->fields = 'minima';
    $request->key = 'distinctio';
    $request->migrateTraffic = false;
    $request->oauthToken = 'eligendi';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->servicesId = 'culpa';
    $request->updateMask = 'tempore';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'cumque';

    $requestSecurity = new AppengineAppsServicesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesVersionsCreate

Deploys code and resource files to a new version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Version;
use \OpenAPI\OpenAPI\Models\Shared\ApiConfigHandler;
use \OpenAPI\OpenAPI\Models\Shared\ApiConfigHandlerAuthFailActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiConfigHandlerLoginEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiConfigHandlerSecurityLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutomaticScaling;
use \OpenAPI\OpenAPI\Models\Shared\CpuUtilization;
use \OpenAPI\OpenAPI\Models\Shared\CustomMetric;
use \OpenAPI\OpenAPI\Models\Shared\DiskUtilization;
use \OpenAPI\OpenAPI\Models\Shared\NetworkUtilization;
use \OpenAPI\OpenAPI\Models\Shared\RequestUtilization;
use \OpenAPI\OpenAPI\Models\Shared\StandardSchedulerSettings;
use \OpenAPI\OpenAPI\Models\Shared\BasicScaling;
use \OpenAPI\OpenAPI\Models\Shared\Deployment;
use \OpenAPI\OpenAPI\Models\Shared\BuildInfo;
use \OpenAPI\OpenAPI\Models\Shared\CloudBuildOptions;
use \OpenAPI\OpenAPI\Models\Shared\ContainerInfo;
use \OpenAPI\OpenAPI\Models\Shared\FileInfo;
use \OpenAPI\OpenAPI\Models\Shared\ZipInfo;
use \OpenAPI\OpenAPI\Models\Shared\EndpointsApiService;
use \OpenAPI\OpenAPI\Models\Shared\EndpointsApiServiceRolloutStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Entrypoint;
use \OpenAPI\OpenAPI\Models\Shared\ErrorHandler;
use \OpenAPI\OpenAPI\Models\Shared\ErrorHandlerErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FlexibleRuntimeSettings;
use \OpenAPI\OpenAPI\Models\Shared\UrlMap;
use \OpenAPI\OpenAPI\Models\Shared\ApiEndpointHandler;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapAuthFailActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapLoginEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapRedirectHttpResponseCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScriptHandler;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapSecurityLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\StaticFilesHandler;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\VersionInboundServicesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Library;
use \OpenAPI\OpenAPI\Models\Shared\LivenessCheck;
use \OpenAPI\OpenAPI\Models\Shared\ManualScaling;
use \OpenAPI\OpenAPI\Models\Shared\Network;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInstanceIpModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReadinessCheck;
use \OpenAPI\OpenAPI\Models\Shared\Resources;
use \OpenAPI\OpenAPI\Models\Shared\Volume;
use \OpenAPI\OpenAPI\Models\Shared\VersionServingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpcAccessConnector;
use \OpenAPI\OpenAPI\Models\Shared\VpcAccessConnectorEgressSettingEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->version = new Version();
    $request->version->apiConfig = new ApiConfigHandler();
    $request->version->apiConfig->authFailAction = ApiConfigHandlerAuthFailActionEnum::AUTH_FAIL_ACTION_UNSPECIFIED;
    $request->version->apiConfig->login = ApiConfigHandlerLoginEnum::LOGIN_REQUIRED;
    $request->version->apiConfig->script = 'quaerat';
    $request->version->apiConfig->securityLevel = ApiConfigHandlerSecurityLevelEnum::SECURE_ALWAYS;
    $request->version->apiConfig->url = 'consectetur';
    $request->version->appEngineApis = false;
    $request->version->automaticScaling = new AutomaticScaling();
    $request->version->automaticScaling->coolDownPeriod = 'esse';
    $request->version->automaticScaling->cpuUtilization = new CpuUtilization();
    $request->version->automaticScaling->cpuUtilization->aggregationWindowLength = 'blanditiis';
    $request->version->automaticScaling->cpuUtilization->targetUtilization = 5909.84;
    $request->version->automaticScaling->customMetrics = [
        new CustomMetric(),
        new CustomMetric(),
        new CustomMetric(),
        new CustomMetric(),
    ];
    $request->version->automaticScaling->diskUtilization = new DiskUtilization();
    $request->version->automaticScaling->diskUtilization->targetReadBytesPerSecond = 857723;
    $request->version->automaticScaling->diskUtilization->targetReadOpsPerSecond = 557811;
    $request->version->automaticScaling->diskUtilization->targetWriteBytesPerSecond = 457223;
    $request->version->automaticScaling->diskUtilization->targetWriteOpsPerSecond = 97468;
    $request->version->automaticScaling->maxConcurrentRequests = 951875;
    $request->version->automaticScaling->maxIdleInstances = 621679;
    $request->version->automaticScaling->maxPendingLatency = 'sint';
    $request->version->automaticScaling->maxTotalInstances = 863023;
    $request->version->automaticScaling->minIdleInstances = 820767;
    $request->version->automaticScaling->minPendingLatency = 'quia';
    $request->version->automaticScaling->minTotalInstances = 908844;
    $request->version->automaticScaling->networkUtilization = new NetworkUtilization();
    $request->version->automaticScaling->networkUtilization->targetReceivedBytesPerSecond = 992430;
    $request->version->automaticScaling->networkUtilization->targetReceivedPacketsPerSecond = 815524;
    $request->version->automaticScaling->networkUtilization->targetSentBytesPerSecond = 85001;
    $request->version->automaticScaling->networkUtilization->targetSentPacketsPerSecond = 159414;
    $request->version->automaticScaling->requestUtilization = new RequestUtilization();
    $request->version->automaticScaling->requestUtilization->targetConcurrentRequests = 94458;
    $request->version->automaticScaling->requestUtilization->targetRequestCountPerSecond = 628899;
    $request->version->automaticScaling->standardSchedulerSettings = new StandardSchedulerSettings();
    $request->version->automaticScaling->standardSchedulerSettings->maxInstances = 633608;
    $request->version->automaticScaling->standardSchedulerSettings->minInstances = 398434;
    $request->version->automaticScaling->standardSchedulerSettings->targetCpuUtilization = 9492.98;
    $request->version->automaticScaling->standardSchedulerSettings->targetThroughputUtilization = 627.13;
    $request->version->basicScaling = new BasicScaling();
    $request->version->basicScaling->idleTimeout = 'earum';
    $request->version->basicScaling->maxInstances = 424032;
    $request->version->betaSettings = [
        'eius' => 'libero',
        'illum' => 'soluta',
    ];
    $request->version->buildEnvVariables = [
        'aliquam' => 'sapiente',
    ];
    $request->version->createTime = 'dicta';
    $request->version->createdBy = 'ullam';
    $request->version->defaultExpiration = 'reprehenderit';
    $request->version->deployment = new Deployment();
    $request->version->deployment->build = new BuildInfo();
    $request->version->deployment->build->cloudBuildId = 'ullam';
    $request->version->deployment->cloudBuildOptions = new CloudBuildOptions();
    $request->version->deployment->cloudBuildOptions->appYamlPath = 'nisi';
    $request->version->deployment->cloudBuildOptions->cloudBuildTimeout = 'aut';
    $request->version->deployment->container = new ContainerInfo();
    $request->version->deployment->container->image = 'voluptatum';
    $request->version->deployment->files = [
        'quibusdam' => new FileInfo(),
    ];
    $request->version->deployment->zip = new ZipInfo();
    $request->version->deployment->zip->filesCount = 401259;
    $request->version->deployment->zip->sourceUrl = 'deleniti';
    $request->version->diskUsageBytes = 'itaque';
    $request->version->endpointsApiService = new EndpointsApiService();
    $request->version->endpointsApiService->configId = 'dolorum';
    $request->version->endpointsApiService->disableTraceSampling = false;
    $request->version->endpointsApiService->name = 'Dr. Belinda West III';
    $request->version->endpointsApiService->rolloutStrategy = EndpointsApiServiceRolloutStrategyEnum::UNSPECIFIED_ROLLOUT_STRATEGY;
    $request->version->entrypoint = new Entrypoint();
    $request->version->entrypoint->shell = 'minima';
    $request->version->env = 'veritatis';
    $request->version->envVariables = [
        'adipisci' => 'iste',
    ];
    $request->version->errorHandlers = [
        new ErrorHandler(),
        new ErrorHandler(),
        new ErrorHandler(),
        new ErrorHandler(),
    ];
    $request->version->flexibleRuntimeSettings = new FlexibleRuntimeSettings();
    $request->version->flexibleRuntimeSettings->operatingSystem = 'accusantium';
    $request->version->flexibleRuntimeSettings->runtimeVersion = 'rem';
    $request->version->handlers = [
        new UrlMap(),
    ];
    $request->version->healthCheck = new HealthCheck();
    $request->version->healthCheck->checkInterval = 'laudantium';
    $request->version->healthCheck->disableHealthCheck = false;
    $request->version->healthCheck->healthyThreshold = 428796;
    $request->version->healthCheck->host = 'mollitia';
    $request->version->healthCheck->restartThreshold = 68074;
    $request->version->healthCheck->timeout = 'corrupti';
    $request->version->healthCheck->unhealthyThreshold = 251941;
    $request->version->id = '0394c260-71f9-43f5-b064-2dac7af515cc';
    $request->version->inboundServices = [
        VersionInboundServicesEnum::INBOUND_SERVICE_UNSPECIFIED,
        VersionInboundServicesEnum::INBOUND_SERVICE_MAIL_BOUNCE,
    ];
    $request->version->instanceClass = 'fuga';
    $request->version->libraries = [
        new Library(),
        new Library(),
        new Library(),
    ];
    $request->version->livenessCheck = new LivenessCheck();
    $request->version->livenessCheck->checkInterval = 'suscipit';
    $request->version->livenessCheck->failureThreshold = 246063;
    $request->version->livenessCheck->host = 'culpa';
    $request->version->livenessCheck->initialDelay = 'est';
    $request->version->livenessCheck->path = 'recusandae';
    $request->version->livenessCheck->successThreshold = 517309;
    $request->version->livenessCheck->timeout = 'fugiat';
    $request->version->manualScaling = new ManualScaling();
    $request->version->manualScaling->instances = 424089;
    $request->version->name = 'Billie Keebler';
    $request->version->network = new Network();
    $request->version->network->forwardedPorts = [
        'cum',
        'commodi',
        'in',
    ];
    $request->version->network->instanceIpMode = NetworkInstanceIpModeEnum::EXTERNAL;
    $request->version->network->instanceTag = 'reiciendis';
    $request->version->network->name = 'Corey Walsh DDS';
    $request->version->network->sessionAffinity = false;
    $request->version->network->subnetworkName = 'consectetur';
    $request->version->nobuildFilesRegex = 'in';
    $request->version->readinessCheck = new ReadinessCheck();
    $request->version->readinessCheck->appStartTimeout = 'exercitationem';
    $request->version->readinessCheck->checkInterval = 'earum';
    $request->version->readinessCheck->failureThreshold = 814967;
    $request->version->readinessCheck->host = 'numquam';
    $request->version->readinessCheck->path = 'doloribus';
    $request->version->readinessCheck->successThreshold = 381760;
    $request->version->readinessCheck->timeout = 'reiciendis';
    $request->version->resources = new Resources();
    $request->version->resources->cpu = 6971.42;
    $request->version->resources->diskGb = 9049.49;
    $request->version->resources->kmsKeyReference = 'necessitatibus';
    $request->version->resources->memoryGb = 2965.56;
    $request->version->resources->volumes = [
        new Volume(),
    ];
    $request->version->runtime = 'asperiores';
    $request->version->runtimeApiVersion = 'adipisci';
    $request->version->runtimeChannel = 'non';
    $request->version->runtimeMainExecutablePath = 'amet';
    $request->version->serviceAccount = 'beatae';
    $request->version->servingStatus = VersionServingStatusEnum::SERVING;
    $request->version->threadsafe = false;
    $request->version->versionUrl = 'a';
    $request->version->vm = false;
    $request->version->vpcAccessConnector = new VpcAccessConnector();
    $request->version->vpcAccessConnector->egressSetting = VpcAccessConnectorEgressSettingEnum::PRIVATE_IP_RANGES;
    $request->version->vpcAccessConnector->name = 'Stacy Pollich DVM';
    $request->version->zones = [
        'vitae',
        'accusamus',
        'similique',
    ];
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'voluptas';
    $request->callback = 'voluptas';
    $request->fields = 'voluptas';
    $request->key = 'minima';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->servicesId = 'adipisci';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new AppengineAppsServicesVersionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesVersionsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesVersionsDelete

Deletes an existing Version resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesVersionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'aliquam';
    $request->callback = 'officiis';
    $request->fields = 'temporibus';
    $request->key = 'ullam';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->servicesId = 'blanditiis';
    $request->uploadType = 'quas';
    $request->uploadProtocol = 'hic';
    $request->versionsId = 'nesciunt';

    $requestSecurity = new AppengineAppsServicesVersionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesVersionsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesVersionsGet

Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsGetViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesVersionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'totam';
    $request->callback = 'hic';
    $request->fields = 'exercitationem';
    $request->key = 'nobis';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'rerum';
    $request->servicesId = 'sed';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'explicabo';
    $request->versionsId = 'asperiores';
    $request->view = AppengineAppsServicesVersionsGetViewEnum::FULL;

    $requestSecurity = new AppengineAppsServicesVersionsGetSecurity();
    $requestSecurity->option1 = new AppengineAppsServicesVersionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesVersionsGet($request, $requestSecurity);

    if ($response->version !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesVersionsInstancesDebug

Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesDebugRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DebugInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesDebugSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesVersionsInstancesDebugRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->debugInstanceRequest = new DebugInstanceRequest();
    $request->debugInstanceRequest->sshKey = 'expedita';
    $request->accessToken = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'dolore';
    $request->callback = 'laborum';
    $request->fields = 'sed';
    $request->instancesId = 'in';
    $request->key = 'commodi';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->servicesId = 'voluptas';
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'architecto';
    $request->versionsId = 'suscipit';

    $requestSecurity = new AppengineAppsServicesVersionsInstancesDebugSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesVersionsInstancesDebug($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesVersionsInstancesDelete

Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesVersionsInstancesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'reiciendis';
    $request->callback = 'perferendis';
    $request->fields = 'corrupti';
    $request->instancesId = 'maiores';
    $request->key = 'incidunt';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->servicesId = 'eius';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'ipsum';
    $request->versionsId = 'ea';

    $requestSecurity = new AppengineAppsServicesVersionsInstancesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesVersionsInstancesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesVersionsInstancesGet

Gets instance information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesVersionsInstancesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'tempora';
    $request->callback = 'tempora';
    $request->fields = 'voluptate';
    $request->instancesId = 'reiciendis';
    $request->key = 'ex';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->servicesId = 'officiis';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'facilis';
    $request->versionsId = 'quaerat';

    $requestSecurity = new AppengineAppsServicesVersionsInstancesGetSecurity();
    $requestSecurity->option1 = new AppengineAppsServicesVersionsInstancesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesVersionsInstancesGet($request, $requestSecurity);

    if ($response->instance !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesVersionsInstancesList

Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsInstancesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesVersionsInstancesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'rem';
    $request->callback = 'sit';
    $request->fields = 'nobis';
    $request->key = 'error';
    $request->oauthToken = 'veniam';
    $request->pageSize = 329543;
    $request->pageToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->servicesId = 'nulla';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'aperiam';
    $request->versionsId = 'saepe';

    $requestSecurity = new AppengineAppsServicesVersionsInstancesListSecurity();
    $requestSecurity->option1 = new AppengineAppsServicesVersionsInstancesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesVersionsInstancesList($request, $requestSecurity);

    if ($response->listInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesVersionsList

Lists the versions of a service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'veniam';
    $request->alt = AltEnum::MEDIA;
    $request->appsId = 'officiis';
    $request->callback = 'beatae';
    $request->fields = 'laudantium';
    $request->key = 'exercitationem';
    $request->oauthToken = 'praesentium';
    $request->pageSize = 740098;
    $request->pageToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->servicesId = 'voluptatum';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'hic';
    $request->view = AppengineAppsServicesVersionsListViewEnum::FULL;

    $requestSecurity = new AppengineAppsServicesVersionsListSecurity();
    $requestSecurity->option1 = new AppengineAppsServicesVersionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesVersionsList($request, $requestSecurity);

    if ($response->listVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appengineAppsServicesVersionsPatch

Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Version;
use \OpenAPI\OpenAPI\Models\Shared\ApiConfigHandler;
use \OpenAPI\OpenAPI\Models\Shared\ApiConfigHandlerAuthFailActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiConfigHandlerLoginEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiConfigHandlerSecurityLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AutomaticScaling;
use \OpenAPI\OpenAPI\Models\Shared\CpuUtilization;
use \OpenAPI\OpenAPI\Models\Shared\CustomMetric;
use \OpenAPI\OpenAPI\Models\Shared\DiskUtilization;
use \OpenAPI\OpenAPI\Models\Shared\NetworkUtilization;
use \OpenAPI\OpenAPI\Models\Shared\RequestUtilization;
use \OpenAPI\OpenAPI\Models\Shared\StandardSchedulerSettings;
use \OpenAPI\OpenAPI\Models\Shared\BasicScaling;
use \OpenAPI\OpenAPI\Models\Shared\Deployment;
use \OpenAPI\OpenAPI\Models\Shared\BuildInfo;
use \OpenAPI\OpenAPI\Models\Shared\CloudBuildOptions;
use \OpenAPI\OpenAPI\Models\Shared\ContainerInfo;
use \OpenAPI\OpenAPI\Models\Shared\FileInfo;
use \OpenAPI\OpenAPI\Models\Shared\ZipInfo;
use \OpenAPI\OpenAPI\Models\Shared\EndpointsApiService;
use \OpenAPI\OpenAPI\Models\Shared\EndpointsApiServiceRolloutStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Entrypoint;
use \OpenAPI\OpenAPI\Models\Shared\ErrorHandler;
use \OpenAPI\OpenAPI\Models\Shared\ErrorHandlerErrorCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FlexibleRuntimeSettings;
use \OpenAPI\OpenAPI\Models\Shared\UrlMap;
use \OpenAPI\OpenAPI\Models\Shared\ApiEndpointHandler;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapAuthFailActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapLoginEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapRedirectHttpResponseCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ScriptHandler;
use \OpenAPI\OpenAPI\Models\Shared\UrlMapSecurityLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\StaticFilesHandler;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheck;
use \OpenAPI\OpenAPI\Models\Shared\VersionInboundServicesEnum;
use \OpenAPI\OpenAPI\Models\Shared\Library;
use \OpenAPI\OpenAPI\Models\Shared\LivenessCheck;
use \OpenAPI\OpenAPI\Models\Shared\ManualScaling;
use \OpenAPI\OpenAPI\Models\Shared\Network;
use \OpenAPI\OpenAPI\Models\Shared\NetworkInstanceIpModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReadinessCheck;
use \OpenAPI\OpenAPI\Models\Shared\Resources;
use \OpenAPI\OpenAPI\Models\Shared\Volume;
use \OpenAPI\OpenAPI\Models\Shared\VersionServingStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\VpcAccessConnector;
use \OpenAPI\OpenAPI\Models\Shared\VpcAccessConnectorEgressSettingEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsServicesVersionsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsServicesVersionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->version = new Version();
    $request->version->apiConfig = new ApiConfigHandler();
    $request->version->apiConfig->authFailAction = ApiConfigHandlerAuthFailActionEnum::AUTH_FAIL_ACTION_UNSPECIFIED;
    $request->version->apiConfig->login = ApiConfigHandlerLoginEnum::LOGIN_ADMIN;
    $request->version->apiConfig->script = 'nostrum';
    $request->version->apiConfig->securityLevel = ApiConfigHandlerSecurityLevelEnum::SECURE_OPTIONAL;
    $request->version->apiConfig->url = 'dolorum';
    $request->version->appEngineApis = false;
    $request->version->automaticScaling = new AutomaticScaling();
    $request->version->automaticScaling->coolDownPeriod = 'corrupti';
    $request->version->automaticScaling->cpuUtilization = new CpuUtilization();
    $request->version->automaticScaling->cpuUtilization->aggregationWindowLength = 'accusamus';
    $request->version->automaticScaling->cpuUtilization->targetUtilization = 2726.83;
    $request->version->automaticScaling->customMetrics = [
        new CustomMetric(),
        new CustomMetric(),
        new CustomMetric(),
    ];
    $request->version->automaticScaling->diskUtilization = new DiskUtilization();
    $request->version->automaticScaling->diskUtilization->targetReadBytesPerSecond = 148268;
    $request->version->automaticScaling->diskUtilization->targetReadOpsPerSecond = 282699;
    $request->version->automaticScaling->diskUtilization->targetWriteBytesPerSecond = 856303;
    $request->version->automaticScaling->diskUtilization->targetWriteOpsPerSecond = 30235;
    $request->version->automaticScaling->maxConcurrentRequests = 635057;
    $request->version->automaticScaling->maxIdleInstances = 710337;
    $request->version->automaticScaling->maxPendingLatency = 'magnam';
    $request->version->automaticScaling->maxTotalInstances = 7884;
    $request->version->automaticScaling->minIdleInstances = 460220;
    $request->version->automaticScaling->minPendingLatency = 'ipsam';
    $request->version->automaticScaling->minTotalInstances = 24527;
    $request->version->automaticScaling->networkUtilization = new NetworkUtilization();
    $request->version->automaticScaling->networkUtilization->targetReceivedBytesPerSecond = 530537;
    $request->version->automaticScaling->networkUtilization->targetReceivedPacketsPerSecond = 558065;
    $request->version->automaticScaling->networkUtilization->targetSentBytesPerSecond = 922112;
    $request->version->automaticScaling->networkUtilization->targetSentPacketsPerSecond = 361151;
    $request->version->automaticScaling->requestUtilization = new RequestUtilization();
    $request->version->automaticScaling->requestUtilization->targetConcurrentRequests = 89494;
    $request->version->automaticScaling->requestUtilization->targetRequestCountPerSecond = 502710;
    $request->version->automaticScaling->standardSchedulerSettings = new StandardSchedulerSettings();
    $request->version->automaticScaling->standardSchedulerSettings->maxInstances = 405942;
    $request->version->automaticScaling->standardSchedulerSettings->minInstances = 153627;
    $request->version->automaticScaling->standardSchedulerSettings->targetCpuUtilization = 243.13;
    $request->version->automaticScaling->standardSchedulerSettings->targetThroughputUtilization = 4255.08;
    $request->version->basicScaling = new BasicScaling();
    $request->version->basicScaling->idleTimeout = 'nostrum';
    $request->version->basicScaling->maxInstances = 906172;
    $request->version->betaSettings = [
        'consequatur' => 'incidunt',
        'reiciendis' => 'dolorem',
        'harum' => 'dicta',
    ];
    $request->version->buildEnvVariables = [
        'occaecati' => 'labore',
    ];
    $request->version->createTime = 'quidem';
    $request->version->createdBy = 'atque';
    $request->version->defaultExpiration = 'laborum';
    $request->version->deployment = new Deployment();
    $request->version->deployment->build = new BuildInfo();
    $request->version->deployment->build->cloudBuildId = 'nam';
    $request->version->deployment->cloudBuildOptions = new CloudBuildOptions();
    $request->version->deployment->cloudBuildOptions->appYamlPath = 'tenetur';
    $request->version->deployment->cloudBuildOptions->cloudBuildTimeout = 'laboriosam';
    $request->version->deployment->container = new ContainerInfo();
    $request->version->deployment->container->image = 'alias';
    $request->version->deployment->files = [
        'deserunt' => new FileInfo(),
    ];
    $request->version->deployment->zip = new ZipInfo();
    $request->version->deployment->zip->filesCount = 454860;
    $request->version->deployment->zip->sourceUrl = 'unde';
    $request->version->diskUsageBytes = 'reiciendis';
    $request->version->endpointsApiService = new EndpointsApiService();
    $request->version->endpointsApiService->configId = 'provident';
    $request->version->endpointsApiService->disableTraceSampling = false;
    $request->version->endpointsApiService->name = 'Miss Brendan Volkman';
    $request->version->endpointsApiService->rolloutStrategy = EndpointsApiServiceRolloutStrategyEnum::FIXED;
    $request->version->entrypoint = new Entrypoint();
    $request->version->entrypoint->shell = 'facere';
    $request->version->env = 'fuga';
    $request->version->envVariables = [
        'mollitia' => 'veniam',
        'voluptatem' => 'quisquam',
        'repudiandae' => 'quasi',
    ];
    $request->version->errorHandlers = [
        new ErrorHandler(),
        new ErrorHandler(),
        new ErrorHandler(),
    ];
    $request->version->flexibleRuntimeSettings = new FlexibleRuntimeSettings();
    $request->version->flexibleRuntimeSettings->operatingSystem = 'reprehenderit';
    $request->version->flexibleRuntimeSettings->runtimeVersion = 'asperiores';
    $request->version->handlers = [
        new UrlMap(),
        new UrlMap(),
        new UrlMap(),
    ];
    $request->version->healthCheck = new HealthCheck();
    $request->version->healthCheck->checkInterval = 'suscipit';
    $request->version->healthCheck->disableHealthCheck = false;
    $request->version->healthCheck->healthyThreshold = 693957;
    $request->version->healthCheck->host = 'maxime';
    $request->version->healthCheck->restartThreshold = 90885;
    $request->version->healthCheck->timeout = 'esse';
    $request->version->healthCheck->unhealthyThreshold = 227759;
    $request->version->id = 'd689eee9-526f-48d9-86e8-81ead4f0e101';
    $request->version->inboundServices = [
        VersionInboundServicesEnum::INBOUND_SERVICE_MAIL_BOUNCE,
    ];
    $request->version->instanceClass = 'laboriosam';
    $request->version->libraries = [
        new Library(),
    ];
    $request->version->livenessCheck = new LivenessCheck();
    $request->version->livenessCheck->checkInterval = 'a';
    $request->version->livenessCheck->failureThreshold = 562783;
    $request->version->livenessCheck->host = 'magnam';
    $request->version->livenessCheck->initialDelay = 'saepe';
    $request->version->livenessCheck->path = 'consequuntur';
    $request->version->livenessCheck->successThreshold = 580107;
    $request->version->livenessCheck->timeout = 'officiis';
    $request->version->manualScaling = new ManualScaling();
    $request->version->manualScaling->instances = 597937;
    $request->version->name = 'Sylvia Upton';
    $request->version->network = new Network();
    $request->version->network->forwardedPorts = [
        'id',
    ];
    $request->version->network->instanceIpMode = NetworkInstanceIpModeEnum::EXTERNAL;
    $request->version->network->instanceTag = 'reprehenderit';
    $request->version->network->name = 'Jerry Hessel';
    $request->version->network->sessionAffinity = false;
    $request->version->network->subnetworkName = 'non';
    $request->version->nobuildFilesRegex = 'vero';
    $request->version->readinessCheck = new ReadinessCheck();
    $request->version->readinessCheck->appStartTimeout = 'doloremque';
    $request->version->readinessCheck->checkInterval = 'iure';
    $request->version->readinessCheck->failureThreshold = 59944;
    $request->version->readinessCheck->host = 'totam';
    $request->version->readinessCheck->path = 'quae';
    $request->version->readinessCheck->successThreshold = 474668;
    $request->version->readinessCheck->timeout = 'eveniet';
    $request->version->resources = new Resources();
    $request->version->resources->cpu = 1843.62;
    $request->version->resources->diskGb = 7398.84;
    $request->version->resources->kmsKeyReference = 'iure';
    $request->version->resources->memoryGb = 8980.63;
    $request->version->resources->volumes = [
        new Volume(),
    ];
    $request->version->runtime = 'laborum';
    $request->version->runtimeApiVersion = 'distinctio';
    $request->version->runtimeChannel = 'voluptatum';
    $request->version->runtimeMainExecutablePath = 'rem';
    $request->version->serviceAccount = 'aliquam';
    $request->version->servingStatus = VersionServingStatusEnum::SERVING_STATUS_UNSPECIFIED;
    $request->version->threadsafe = false;
    $request->version->versionUrl = 'repellat';
    $request->version->vm = false;
    $request->version->vpcAccessConnector = new VpcAccessConnector();
    $request->version->vpcAccessConnector->egressSetting = VpcAccessConnectorEgressSettingEnum::EGRESS_SETTING_UNSPECIFIED;
    $request->version->vpcAccessConnector->name = 'Katrina Kovacek';
    $request->version->zones = [
        'maiores',
    ];
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->appsId = 'id';
    $request->callback = 'minima';
    $request->fields = 'dolore';
    $request->key = 'dolorum';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->servicesId = 'recusandae';
    $request->updateMask = 'omnis';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'molestiae';
    $request->versionsId = 'ex';

    $requestSecurity = new AppengineAppsServicesVersionsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsServicesVersionsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
