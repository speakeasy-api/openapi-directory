# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/appengine/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesCreate(ctx, operations.AppengineAppsAuthorizedCertificatesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AuthorizedCertificate: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: sdk.String("provident"),
                PublicCertificate: sdk.String("distinctio"),
            },
            DisplayName: sdk.String("quibusdam"),
            DomainMappingsCount: sdk.Int(602763),
            DomainNames: []string{
                "corrupti",
                "illum",
                "vel",
                "error",
            },
            ExpireTime: sdk.String("deserunt"),
            ID: sdk.String("674e0f46-7cc8-4796-ad15-1a05dfc2ddf7"),
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: sdk.String("quod"),
                Status: shared.ManagedCertificateStatusEnumFailedRetryingCaaForbidden.ToPointer(),
            },
            Name: sdk.String("Deanna Sauer MD"),
            VisibleDomainMappings: []string{
                "occaecati",
                "fugit",
                "deleniti",
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "totam",
        Callback: sdk.String("beatae"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
    }, operations.AppengineAppsAuthorizedCertificatesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCertificate != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Apps](docs/apps/README.md)

* [AppengineAppsAuthorizedCertificatesCreate](docs/apps/README.md#appengineappsauthorizedcertificatescreate) - Uploads the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesDelete](docs/apps/README.md#appengineappsauthorizedcertificatesdelete) - Deletes the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesGet](docs/apps/README.md#appengineappsauthorizedcertificatesget) - Gets the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesList](docs/apps/README.md#appengineappsauthorizedcertificateslist) - Lists all SSL certificates the user is authorized to administer.
* [AppengineAppsAuthorizedCertificatesPatch](docs/apps/README.md#appengineappsauthorizedcertificatespatch) - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* [AppengineAppsAuthorizedDomainsList](docs/apps/README.md#appengineappsauthorizeddomainslist) - Lists all domains the user is authorized to administer.
* [AppengineAppsCreate](docs/apps/README.md#appengineappscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [AppengineAppsDomainMappingsCreate](docs/apps/README.md#appengineappsdomainmappingscreate) - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* [AppengineAppsDomainMappingsDelete](docs/apps/README.md#appengineappsdomainmappingsdelete) - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* [AppengineAppsDomainMappingsGet](docs/apps/README.md#appengineappsdomainmappingsget) - Gets the specified domain mapping.
* [AppengineAppsDomainMappingsList](docs/apps/README.md#appengineappsdomainmappingslist) - Lists the domain mappings on an application.
* [AppengineAppsDomainMappingsPatch](docs/apps/README.md#appengineappsdomainmappingspatch) - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* [AppengineAppsFirewallIngressRulesBatchUpdate](docs/apps/README.md#appengineappsfirewallingressrulesbatchupdate) - Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
* [AppengineAppsFirewallIngressRulesCreate](docs/apps/README.md#appengineappsfirewallingressrulescreate) - Creates a firewall rule for the application.
* [AppengineAppsFirewallIngressRulesDelete](docs/apps/README.md#appengineappsfirewallingressrulesdelete) - Deletes the specified firewall rule.
* [AppengineAppsFirewallIngressRulesGet](docs/apps/README.md#appengineappsfirewallingressrulesget) - Gets the specified firewall rule.
* [AppengineAppsFirewallIngressRulesList](docs/apps/README.md#appengineappsfirewallingressruleslist) - Lists the firewall rules of an application.
* [AppengineAppsFirewallIngressRulesPatch](docs/apps/README.md#appengineappsfirewallingressrulespatch) - Updates the specified firewall rule.
* [AppengineAppsGet](docs/apps/README.md#appengineappsget) - Gets information about an application.
* [AppengineAppsLocationsGet](docs/apps/README.md#appengineappslocationsget) - Gets information about a location.
* [AppengineAppsLocationsList](docs/apps/README.md#appengineappslocationslist) - Lists information about the supported locations for this service.
* [AppengineAppsOperationsGet](docs/apps/README.md#appengineappsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [AppengineAppsOperationsList](docs/apps/README.md#appengineappsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
* [AppengineAppsPatch](docs/apps/README.md#appengineappspatch) - Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
* [AppengineAppsRepair](docs/apps/README.md#appengineappsrepair) - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* [AppengineAppsServicesDelete](docs/apps/README.md#appengineappsservicesdelete) - Deletes the specified service and all enclosed versions.
* [AppengineAppsServicesGet](docs/apps/README.md#appengineappsservicesget) - Gets the current configuration of the specified service.
* [AppengineAppsServicesList](docs/apps/README.md#appengineappsserviceslist) - Lists all the services in the application.
* [AppengineAppsServicesPatch](docs/apps/README.md#appengineappsservicespatch) - Updates the configuration of the specified service.
* [AppengineAppsServicesVersionsCreate](docs/apps/README.md#appengineappsservicesversionscreate) - Deploys code and resource files to a new version.
* [AppengineAppsServicesVersionsDelete](docs/apps/README.md#appengineappsservicesversionsdelete) - Deletes an existing Version resource.
* [AppengineAppsServicesVersionsGet](docs/apps/README.md#appengineappsservicesversionsget) - Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
* [AppengineAppsServicesVersionsInstancesDebug](docs/apps/README.md#appengineappsservicesversionsinstancesdebug) - Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
* [AppengineAppsServicesVersionsInstancesDelete](docs/apps/README.md#appengineappsservicesversionsinstancesdelete) - Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
* [AppengineAppsServicesVersionsInstancesGet](docs/apps/README.md#appengineappsservicesversionsinstancesget) - Gets instance information.
* [AppengineAppsServicesVersionsInstancesList](docs/apps/README.md#appengineappsservicesversionsinstanceslist) - Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
* [AppengineAppsServicesVersionsList](docs/apps/README.md#appengineappsservicesversionslist) - Lists the versions of a service.
* [AppengineAppsServicesVersionsPatch](docs/apps/README.md#appengineappsservicesversionspatch) - Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)

### [Projects](docs/projects/README.md)

* [AppengineProjectsLocationsApplicationsCreate](docs/projects/README.md#appengineprojectslocationsapplicationscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [AppengineProjectsLocationsApplicationsGet](docs/projects/README.md#appengineprojectslocationsapplicationsget) - Gets information about an application.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
