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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->authorizedCertificate = new AuthorizedCertificate();
    $request->authorizedCertificate->certificateRawData = new CertificateRawData();
    $request->authorizedCertificate->certificateRawData->privateKey = 'provident';
    $request->authorizedCertificate->certificateRawData->publicCertificate = 'distinctio';
    $request->authorizedCertificate->displayName = 'quibusdam';
    $request->authorizedCertificate->domainMappingsCount = 602763;
    $request->authorizedCertificate->domainNames = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->authorizedCertificate->expireTime = 'deserunt';
    $request->authorizedCertificate->id = '674e0f46-7cc8-4796-ad15-1a05dfc2ddf7';
    $request->authorizedCertificate->managedCertificate = new ManagedCertificate();
    $request->authorizedCertificate->managedCertificate->lastRenewalTime = 'quod';
    $request->authorizedCertificate->managedCertificate->status = ManagedCertificateStatusEnum::FAILED_RETRYING_CAA_FORBIDDEN;
    $request->authorizedCertificate->name = 'Deanna Sauer MD';
    $request->authorizedCertificate->visibleDomainMappings = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'totam';
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apps](docs/apps/README.md)

* [appengineAppsAuthorizedCertificatesCreate](docs/apps/README.md#appengineappsauthorizedcertificatescreate) - Uploads the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesDelete](docs/apps/README.md#appengineappsauthorizedcertificatesdelete) - Deletes the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesGet](docs/apps/README.md#appengineappsauthorizedcertificatesget) - Gets the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesList](docs/apps/README.md#appengineappsauthorizedcertificateslist) - Lists all SSL certificates the user is authorized to administer.
* [appengineAppsAuthorizedCertificatesPatch](docs/apps/README.md#appengineappsauthorizedcertificatespatch) - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* [appengineAppsAuthorizedDomainsList](docs/apps/README.md#appengineappsauthorizeddomainslist) - Lists all domains the user is authorized to administer.
* [appengineAppsCreate](docs/apps/README.md#appengineappscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [appengineAppsDomainMappingsCreate](docs/apps/README.md#appengineappsdomainmappingscreate) - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* [appengineAppsDomainMappingsDelete](docs/apps/README.md#appengineappsdomainmappingsdelete) - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* [appengineAppsDomainMappingsGet](docs/apps/README.md#appengineappsdomainmappingsget) - Gets the specified domain mapping.
* [appengineAppsDomainMappingsList](docs/apps/README.md#appengineappsdomainmappingslist) - Lists the domain mappings on an application.
* [appengineAppsDomainMappingsPatch](docs/apps/README.md#appengineappsdomainmappingspatch) - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* [appengineAppsFirewallIngressRulesBatchUpdate](docs/apps/README.md#appengineappsfirewallingressrulesbatchupdate) - Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
* [appengineAppsFirewallIngressRulesCreate](docs/apps/README.md#appengineappsfirewallingressrulescreate) - Creates a firewall rule for the application.
* [appengineAppsFirewallIngressRulesDelete](docs/apps/README.md#appengineappsfirewallingressrulesdelete) - Deletes the specified firewall rule.
* [appengineAppsFirewallIngressRulesGet](docs/apps/README.md#appengineappsfirewallingressrulesget) - Gets the specified firewall rule.
* [appengineAppsFirewallIngressRulesList](docs/apps/README.md#appengineappsfirewallingressruleslist) - Lists the firewall rules of an application.
* [appengineAppsFirewallIngressRulesPatch](docs/apps/README.md#appengineappsfirewallingressrulespatch) - Updates the specified firewall rule.
* [appengineAppsGet](docs/apps/README.md#appengineappsget) - Gets information about an application.
* [appengineAppsLocationsGet](docs/apps/README.md#appengineappslocationsget) - Gets information about a location.
* [appengineAppsLocationsList](docs/apps/README.md#appengineappslocationslist) - Lists information about the supported locations for this service.
* [appengineAppsOperationsGet](docs/apps/README.md#appengineappsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [appengineAppsOperationsList](docs/apps/README.md#appengineappsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
* [appengineAppsPatch](docs/apps/README.md#appengineappspatch) - Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
* [appengineAppsRepair](docs/apps/README.md#appengineappsrepair) - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* [appengineAppsServicesDelete](docs/apps/README.md#appengineappsservicesdelete) - Deletes the specified service and all enclosed versions.
* [appengineAppsServicesGet](docs/apps/README.md#appengineappsservicesget) - Gets the current configuration of the specified service.
* [appengineAppsServicesList](docs/apps/README.md#appengineappsserviceslist) - Lists all the services in the application.
* [appengineAppsServicesPatch](docs/apps/README.md#appengineappsservicespatch) - Updates the configuration of the specified service.
* [appengineAppsServicesVersionsCreate](docs/apps/README.md#appengineappsservicesversionscreate) - Deploys code and resource files to a new version.
* [appengineAppsServicesVersionsDelete](docs/apps/README.md#appengineappsservicesversionsdelete) - Deletes an existing Version resource.
* [appengineAppsServicesVersionsGet](docs/apps/README.md#appengineappsservicesversionsget) - Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
* [appengineAppsServicesVersionsInstancesDebug](docs/apps/README.md#appengineappsservicesversionsinstancesdebug) - Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
* [appengineAppsServicesVersionsInstancesDelete](docs/apps/README.md#appengineappsservicesversionsinstancesdelete) - Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
* [appengineAppsServicesVersionsInstancesGet](docs/apps/README.md#appengineappsservicesversionsinstancesget) - Gets instance information.
* [appengineAppsServicesVersionsInstancesList](docs/apps/README.md#appengineappsservicesversionsinstanceslist) - Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
* [appengineAppsServicesVersionsList](docs/apps/README.md#appengineappsservicesversionslist) - Lists the versions of a service.
* [appengineAppsServicesVersionsPatch](docs/apps/README.md#appengineappsservicesversionspatch) - Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)

### [projects](docs/projects/README.md)

* [appengineProjectsLocationsApplicationsCreate](docs/projects/README.md#appengineprojectslocationsapplicationscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [appengineProjectsLocationsApplicationsGet](docs/projects/README.md#appengineprojectslocationsapplicationsget) - Gets information about an application.
* [appengineProjectsLocationsApplicationsRepair](docs/projects/README.md#appengineprojectslocationsapplicationsrepair) - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* [appengineProjectsLocationsGet](docs/projects/README.md#appengineprojectslocationsget) - Gets information about a location.
* [appengineProjectsLocationsList](docs/projects/README.md#appengineprojectslocationslist) - Lists information about the supported locations for this service.
* [appengineProjectsLocationsOperationsGet](docs/projects/README.md#appengineprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [appengineProjectsLocationsOperationsList](docs/projects/README.md#appengineprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
