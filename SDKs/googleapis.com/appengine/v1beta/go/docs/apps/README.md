# Apps

### Available Operations

* [AppengineAppsAuthorizedCertificatesCreate](#appengineappsauthorizedcertificatescreate) - Uploads the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesDelete](#appengineappsauthorizedcertificatesdelete) - Deletes the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesGet](#appengineappsauthorizedcertificatesget) - Gets the specified SSL certificate.
* [AppengineAppsAuthorizedCertificatesList](#appengineappsauthorizedcertificateslist) - Lists all SSL certificates the user is authorized to administer.
* [AppengineAppsAuthorizedCertificatesPatch](#appengineappsauthorizedcertificatespatch) - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* [AppengineAppsAuthorizedDomainsList](#appengineappsauthorizeddomainslist) - Lists all domains the user is authorized to administer.
* [AppengineAppsCreate](#appengineappscreate) - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
* [AppengineAppsDomainMappingsCreate](#appengineappsdomainmappingscreate) - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* [AppengineAppsDomainMappingsDelete](#appengineappsdomainmappingsdelete) - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* [AppengineAppsDomainMappingsGet](#appengineappsdomainmappingsget) - Gets the specified domain mapping.
* [AppengineAppsDomainMappingsList](#appengineappsdomainmappingslist) - Lists the domain mappings on an application.
* [AppengineAppsDomainMappingsPatch](#appengineappsdomainmappingspatch) - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* [AppengineAppsFirewallIngressRulesBatchUpdate](#appengineappsfirewallingressrulesbatchupdate) - Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
* [AppengineAppsFirewallIngressRulesCreate](#appengineappsfirewallingressrulescreate) - Creates a firewall rule for the application.
* [AppengineAppsFirewallIngressRulesDelete](#appengineappsfirewallingressrulesdelete) - Deletes the specified firewall rule.
* [AppengineAppsFirewallIngressRulesGet](#appengineappsfirewallingressrulesget) - Gets the specified firewall rule.
* [AppengineAppsFirewallIngressRulesList](#appengineappsfirewallingressruleslist) - Lists the firewall rules of an application.
* [AppengineAppsFirewallIngressRulesPatch](#appengineappsfirewallingressrulespatch) - Updates the specified firewall rule.
* [AppengineAppsGet](#appengineappsget) - Gets information about an application.
* [AppengineAppsLocationsGet](#appengineappslocationsget) - Gets information about a location.
* [AppengineAppsLocationsList](#appengineappslocationslist) - Lists information about the supported locations for this service.
* [AppengineAppsOperationsGet](#appengineappsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [AppengineAppsOperationsList](#appengineappsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
* [AppengineAppsPatch](#appengineappspatch) - Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
* [AppengineAppsRepair](#appengineappsrepair) - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
* [AppengineAppsServicesDelete](#appengineappsservicesdelete) - Deletes the specified service and all enclosed versions.
* [AppengineAppsServicesGet](#appengineappsservicesget) - Gets the current configuration of the specified service.
* [AppengineAppsServicesList](#appengineappsserviceslist) - Lists all the services in the application.
* [AppengineAppsServicesPatch](#appengineappsservicespatch) - Updates the configuration of the specified service.
* [AppengineAppsServicesVersionsCreate](#appengineappsservicesversionscreate) - Deploys code and resource files to a new version.
* [AppengineAppsServicesVersionsDelete](#appengineappsservicesversionsdelete) - Deletes an existing Version resource.
* [AppengineAppsServicesVersionsGet](#appengineappsservicesversionsget) - Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
* [AppengineAppsServicesVersionsInstancesDebug](#appengineappsservicesversionsinstancesdebug) - Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
* [AppengineAppsServicesVersionsInstancesDelete](#appengineappsservicesversionsinstancesdelete) - Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
* [AppengineAppsServicesVersionsInstancesGet](#appengineappsservicesversionsinstancesget) - Gets instance information.
* [AppengineAppsServicesVersionsInstancesList](#appengineappsservicesversionsinstanceslist) - Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
* [AppengineAppsServicesVersionsList](#appengineappsservicesversionslist) - Lists the versions of a service.
* [AppengineAppsServicesVersionsPatch](#appengineappsservicesversionspatch) - Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)

## AppengineAppsAuthorizedCertificatesCreate

Uploads the specified SSL certificate.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AuthorizedCertificate: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: sdk.String("ipsum"),
                PublicCertificate: sdk.String("excepturi"),
            },
            DisplayName: sdk.String("aspernatur"),
            DomainMappingsCount: sdk.Int(18789),
            DomainNames: []string{
                "natus",
                "sed",
            },
            ExpireTime: sdk.String("iste"),
            ID: sdk.String("396fea75-96eb-410f-aaa2-352c5955907a"),
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: sdk.String("doloribus"),
                Status: shared.ManagedCertificateStatusEnumFailedRetryingCaaChecking.ToPointer(),
            },
            Name: sdk.String("Angie Durgan"),
            VisibleDomainMappings: []string{
                "mollitia",
                "occaecati",
                "numquam",
                "commodi",
            },
        },
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "velit",
        Callback: sdk.String("error"),
        Fields: sdk.String("quia"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("enim"),
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

## AppengineAppsAuthorizedCertificatesDelete

Deletes the specified SSL certificate.

### Example Usage

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
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesDelete(ctx, operations.AppengineAppsAuthorizedCertificatesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "tenetur",
        AuthorizedCertificatesID: "ipsam",
        Callback: sdk.String("id"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.AppengineAppsAuthorizedCertificatesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AppengineAppsAuthorizedCertificatesGet

Gets the specified SSL certificate.

### Example Usage

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
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesGet(ctx, operations.AppengineAppsAuthorizedCertificatesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "vero",
        AuthorizedCertificatesID: "nihil",
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("perferendis"),
        View: operations.AppengineAppsAuthorizedCertificatesGetViewEnumBasicCertificate.ToPointer(),
    }, operations.AppengineAppsAuthorizedCertificatesGetSecurity{
        Option1: &operations.AppengineAppsAuthorizedCertificatesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuthorizedCertificate != nil {
        // handle response
    }
}
```

## AppengineAppsAuthorizedCertificatesList

Lists all SSL certificates the user is authorized to administer.

### Example Usage

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
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesList(ctx, operations.AppengineAppsAuthorizedCertificatesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ut"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "dicta",
        Callback: sdk.String("corporis"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(688661),
        PageToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("repudiandae"),
        View: operations.AppengineAppsAuthorizedCertificatesListViewEnumBasicCertificate.ToPointer(),
    }, operations.AppengineAppsAuthorizedCertificatesListSecurity{
        Option1: &operations.AppengineAppsAuthorizedCertificatesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizedCertificatesResponse != nil {
        // handle response
    }
}
```

## AppengineAppsAuthorizedCertificatesPatch

Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.

### Example Usage

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
    res, err := s.Apps.AppengineAppsAuthorizedCertificatesPatch(ctx, operations.AppengineAppsAuthorizedCertificatesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AuthorizedCertificate: &shared.AuthorizedCertificate{
            CertificateRawData: &shared.CertificateRawData{
                PrivateKey: sdk.String("quidem"),
                PublicCertificate: sdk.String("molestias"),
            },
            DisplayName: sdk.String("excepturi"),
            DomainMappingsCount: sdk.Int(865103),
            DomainNames: []string{
                "praesentium",
                "rem",
            },
            ExpireTime: sdk.String("voluptates"),
            ID: sdk.String("1e91e450-ad2a-4bd4-8269-802d502a94bb"),
            ManagedCertificate: &shared.ManagedCertificate{
                LastRenewalTime: sdk.String("labore"),
                Status: shared.ManagedCertificateStatusEnumFailedRetryingCaaChecking.ToPointer(),
            },
            Name: sdk.String("Ethel Roob"),
            VisibleDomainMappings: []string{
                "necessitatibus",
                "sint",
                "officia",
            },
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "a",
        AuthorizedCertificatesID: "dolorum",
        Callback: sdk.String("in"),
        Fields: sdk.String("in"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UpdateMask: sdk.String("dicta"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.AppengineAppsAuthorizedCertificatesPatchSecurity{
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

## AppengineAppsAuthorizedDomainsList

Lists all domains the user is authorized to administer.

### Example Usage

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
    res, err := s.Apps.AppengineAppsAuthorizedDomainsList(ctx, operations.AppengineAppsAuthorizedDomainsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "laborum",
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("non"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("enim"),
        PageSize: sdk.Int64(881736),
        PageToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nam"),
    }, operations.AppengineAppsAuthorizedDomainsListSecurity{
        Option1: &operations.AppengineAppsAuthorizedDomainsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAuthorizedDomainsResponse != nil {
        // handle response
    }
}
```

## AppengineAppsCreate

Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).

### Example Usage

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
    res, err := s.Apps.AppengineAppsCreate(ctx, operations.AppengineAppsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApplicationInput: &shared.ApplicationInput{
            AuthDomain: sdk.String("blanditiis"),
            DatabaseType: shared.ApplicationDatabaseTypeEnumCloudFirestore.ToPointer(),
            DefaultCookieExpiration: sdk.String("sapiente"),
            DispatchRules: []shared.URLDispatchRule{
                shared.URLDispatchRule{
                    Domain: sdk.String("deserunt"),
                    Path: sdk.String("nisi"),
                    Service: sdk.String("vel"),
                },
            },
            FeatureSettings: &shared.FeatureSettings{
                SplitHealthChecks: sdk.Bool(false),
                UseContainerOptimizedOs: sdk.Bool(false),
            },
            Iap: &shared.IdentityAwareProxyInput{
                Enabled: sdk.Bool(false),
                Oauth2ClientID: sdk.String("natus"),
                Oauth2ClientSecret: sdk.String("omnis"),
            },
            ID: sdk.String("7074ba44-69b6-4e21-8195-9890afa563e2"),
            LocationID: sdk.String("nemo"),
            ServiceAccount: sdk.String("quasi"),
            ServingStatus: shared.ApplicationServingStatusEnumServing.ToPointer(),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("maxime"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("facilis"),
        Parent: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.AppengineAppsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsDomainMappingsCreate

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

### Example Usage

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
    res, err := s.Apps.AppengineAppsDomainMappingsCreate(ctx, operations.AppengineAppsDomainMappingsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DomainMapping: &shared.DomainMapping{
            ID: sdk.String("b7fd2ed0-2892-41cd-9c69-2601fb576b0d"),
            Name: sdk.String("Camille Armstrong"),
            ResourceRecords: []shared.ResourceRecord{
                shared.ResourceRecord{
                    Name: sdk.String("Lewis Welch"),
                    Rrdata: sdk.String("dolores"),
                    Type: shared.ResourceRecordTypeEnumAaaa.ToPointer(),
                },
            },
            SslSettings: &shared.SslSettings{
                CertificateID: sdk.String("totam"),
                PendingManagedCertificateID: sdk.String("dignissimos"),
                SslManagementType: shared.SslSettingsSslManagementTypeEnumAutomatic.ToPointer(),
            },
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "eos",
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("dolores"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("quam"),
        OverrideStrategy: operations.AppengineAppsDomainMappingsCreateOverrideStrategyEnumUnspecifiedDomainOverrideStrategy.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("hic"),
    }, operations.AppengineAppsDomainMappingsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsDomainMappingsDelete

Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.

### Example Usage

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
    res, err := s.Apps.AppengineAppsDomainMappingsDelete(ctx, operations.AppengineAppsDomainMappingsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "perspiciatis",
        Callback: sdk.String("voluptatem"),
        DomainMappingsID: "porro",
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.AppengineAppsDomainMappingsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsDomainMappingsGet

Gets the specified domain mapping.

### Example Usage

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
    res, err := s.Apps.AppengineAppsDomainMappingsGet(ctx, operations.AppengineAppsDomainMappingsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "modi",
        Callback: sdk.String("iste"),
        DomainMappingsID: "dolorum",
        Fields: sdk.String("deleniti"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.AppengineAppsDomainMappingsGetSecurity{
        Option1: &operations.AppengineAppsDomainMappingsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DomainMapping != nil {
        // handle response
    }
}
```

## AppengineAppsDomainMappingsList

Lists the domain mappings on an application.

### Example Usage

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
    res, err := s.Apps.AppengineAppsDomainMappingsList(ctx, operations.AppengineAppsDomainMappingsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "dolorem",
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("ipsum"),
        PageSize: sdk.Int64(944373),
        PageToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("dignissimos"),
    }, operations.AppengineAppsDomainMappingsListSecurity{
        Option1: &operations.AppengineAppsDomainMappingsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainMappingsResponse != nil {
        // handle response
    }
}
```

## AppengineAppsDomainMappingsPatch

Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.

### Example Usage

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
    res, err := s.Apps.AppengineAppsDomainMappingsPatch(ctx, operations.AppengineAppsDomainMappingsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DomainMapping: &shared.DomainMapping{
            ID: sdk.String("3a410067-4ebf-4692-80d1-ba77a89ebf73"),
            Name: sdk.String("Alberta Ullrich"),
            ResourceRecords: []shared.ResourceRecord{
                shared.ResourceRecord{
                    Name: sdk.String("Marianne Thompson"),
                    Rrdata: sdk.String("suscipit"),
                    Type: shared.ResourceRecordTypeEnumAaaa.ToPointer(),
                },
            },
            SslSettings: &shared.SslSettings{
                CertificateID: sdk.String("provident"),
                PendingManagedCertificateID: sdk.String("minima"),
                SslManagementType: shared.SslSettingsSslManagementTypeEnumManual.ToPointer(),
            },
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "alias",
        Callback: sdk.String("at"),
        DomainMappingsID: "quaerat",
        Fields: sdk.String("tempora"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UpdateMask: sdk.String("qui"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("a"),
    }, operations.AppengineAppsDomainMappingsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsFirewallIngressRulesBatchUpdate

Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.

### Example Usage

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
    res, err := s.Apps.AppengineAppsFirewallIngressRulesBatchUpdate(ctx, operations.AppengineAppsFirewallIngressRulesBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchUpdateIngressRulesRequest: &shared.BatchUpdateIngressRulesRequest{
            IngressRules: []shared.FirewallRule{
                shared.FirewallRule{
                    Action: shared.FirewallRuleActionEnumAllow.ToPointer(),
                    Description: sdk.String("ipsum"),
                    Priority: sdk.Int(788740),
                    SourceRange: sdk.String("tenetur"),
                },
                shared.FirewallRule{
                    Action: shared.FirewallRuleActionEnumUnspecifiedAction.ToPointer(),
                    Description: sdk.String("tempore"),
                    Priority: sdk.Int(880298),
                    SourceRange: sdk.String("numquam"),
                },
                shared.FirewallRule{
                    Action: shared.FirewallRuleActionEnumUnspecifiedAction.ToPointer(),
                    Description: sdk.String("dolorem"),
                    Priority: sdk.Int(957451),
                    SourceRange: sdk.String("totam"),
                },
            },
        },
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "expedita",
        Callback: sdk.String("neque"),
        Fields: sdk.String("sed"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("quam"),
    }, operations.AppengineAppsFirewallIngressRulesBatchUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateIngressRulesResponse != nil {
        // handle response
    }
}
```

## AppengineAppsFirewallIngressRulesCreate

Creates a firewall rule for the application.

### Example Usage

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
    res, err := s.Apps.AppengineAppsFirewallIngressRulesCreate(ctx, operations.AppengineAppsFirewallIngressRulesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FirewallRule: &shared.FirewallRule{
            Action: shared.FirewallRuleActionEnumUnspecifiedAction.ToPointer(),
            Description: sdk.String("qui"),
            Priority: sdk.Int(586784),
            SourceRange: sdk.String("maxime"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "dicta",
        Callback: sdk.String("laborum"),
        Fields: sdk.String("totam"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.AppengineAppsFirewallIngressRulesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirewallRule != nil {
        // handle response
    }
}
```

## AppengineAppsFirewallIngressRulesDelete

Deletes the specified firewall rule.

### Example Usage

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
    res, err := s.Apps.AppengineAppsFirewallIngressRulesDelete(ctx, operations.AppengineAppsFirewallIngressRulesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "temporibus",
        Callback: sdk.String("qui"),
        Fields: sdk.String("neque"),
        IngressRulesID: "fugit",
        Key: sdk.String("magni"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("nam"),
    }, operations.AppengineAppsFirewallIngressRulesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## AppengineAppsFirewallIngressRulesGet

Gets the specified firewall rule.

### Example Usage

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
    res, err := s.Apps.AppengineAppsFirewallIngressRulesGet(ctx, operations.AppengineAppsFirewallIngressRulesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "soluta",
        Callback: sdk.String("nobis"),
        Fields: sdk.String("et"),
        IngressRulesID: "saepe",
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.AppengineAppsFirewallIngressRulesGetSecurity{
        Option1: &operations.AppengineAppsFirewallIngressRulesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirewallRule != nil {
        // handle response
    }
}
```

## AppengineAppsFirewallIngressRulesList

Lists the firewall rules of an application.

### Example Usage

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
    res, err := s.Apps.AppengineAppsFirewallIngressRulesList(ctx, operations.AppengineAppsFirewallIngressRulesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "dolorem",
        Callback: sdk.String("dolore"),
        Fields: sdk.String("labore"),
        Key: sdk.String("adipisci"),
        MatchingAddress: sdk.String("dolorum"),
        OauthToken: sdk.String("architecto"),
        PageSize: sdk.Int64(63038),
        PageToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.AppengineAppsFirewallIngressRulesListSecurity{
        Option1: &operations.AppengineAppsFirewallIngressRulesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIngressRulesResponse != nil {
        // handle response
    }
}
```

## AppengineAppsFirewallIngressRulesPatch

Updates the specified firewall rule.

### Example Usage

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
    res, err := s.Apps.AppengineAppsFirewallIngressRulesPatch(ctx, operations.AppengineAppsFirewallIngressRulesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FirewallRule: &shared.FirewallRule{
            Action: shared.FirewallRuleActionEnumDeny.ToPointer(),
            Description: sdk.String("porro"),
            Priority: sdk.Int(984330),
            SourceRange: sdk.String("ut"),
        },
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "qui",
        Callback: sdk.String("quae"),
        Fields: sdk.String("laudantium"),
        IngressRulesID: "odio",
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UpdateMask: sdk.String("vero"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("quis"),
    }, operations.AppengineAppsFirewallIngressRulesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FirewallRule != nil {
        // handle response
    }
}
```

## AppengineAppsGet

Gets information about an application.

### Example Usage

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
    res, err := s.Apps.AppengineAppsGet(ctx, operations.AppengineAppsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "consectetur",
        Callback: sdk.String("vero"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("odio"),
    }, operations.AppengineAppsGetSecurity{
        Option1: &operations.AppengineAppsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Application != nil {
        // handle response
    }
}
```

## AppengineAppsLocationsGet

Gets information about a location.

### Example Usage

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
    res, err := s.Apps.AppengineAppsLocationsGet(ctx, operations.AppengineAppsLocationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "ducimus",
        Callback: sdk.String("dolore"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("illum"),
        LocationsID: "sequi",
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.AppengineAppsLocationsGetSecurity{
        Option1: &operations.AppengineAppsLocationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Location != nil {
        // handle response
    }
}
```

## AppengineAppsLocationsList

Lists information about the supported locations for this service.

### Example Usage

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
    res, err := s.Apps.AppengineAppsLocationsList(ctx, operations.AppengineAppsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "porro",
        Callback: sdk.String("maiores"),
        Fields: sdk.String("doloribus"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("eligendi"),
        OauthToken: sdk.String("ducimus"),
        PageSize: sdk.Int64(4048),
        PageToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("ea"),
    }, operations.AppengineAppsLocationsListSecurity{
        Option1: &operations.AppengineAppsLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## AppengineAppsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

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
    res, err := s.Apps.AppengineAppsOperationsGet(ctx, operations.AppengineAppsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "magnam",
        Callback: sdk.String("ratione"),
        Fields: sdk.String("ex"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("dicta"),
        OperationsID: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("ex"),
    }, operations.AppengineAppsOperationsGetSecurity{
        Option1: &operations.AppengineAppsOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

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
    res, err := s.Apps.AppengineAppsOperationsList(ctx, operations.AppengineAppsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "nostrum",
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quisquam"),
        Filter: sdk.String("saepe"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("impedit"),
        PageSize: sdk.Int64(359271),
        PageToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.AppengineAppsOperationsListSecurity{
        Option1: &operations.AppengineAppsOperationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## AppengineAppsPatch

Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.

### Example Usage

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
    res, err := s.Apps.AppengineAppsPatch(ctx, operations.AppengineAppsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ApplicationInput: &shared.ApplicationInput{
            AuthDomain: sdk.String("quo"),
            DatabaseType: shared.ApplicationDatabaseTypeEnumDatabaseTypeUnspecified.ToPointer(),
            DefaultCookieExpiration: sdk.String("recusandae"),
            DispatchRules: []shared.URLDispatchRule{
                shared.URLDispatchRule{
                    Domain: sdk.String("minima"),
                    Path: sdk.String("eaque"),
                    Service: sdk.String("a"),
                },
            },
            FeatureSettings: &shared.FeatureSettings{
                SplitHealthChecks: sdk.Bool(false),
                UseContainerOptimizedOs: sdk.Bool(false),
            },
            Iap: &shared.IdentityAwareProxyInput{
                Enabled: sdk.Bool(false),
                Oauth2ClientID: sdk.String("libero"),
                Oauth2ClientSecret: sdk.String("aut"),
            },
            ID: sdk.String("08c42e14-1aac-4366-88dd-6b1442907474"),
            LocationID: sdk.String("esse"),
            ServiceAccount: sdk.String("esse"),
            ServingStatus: shared.ApplicationServingStatusEnumUserDisabled.ToPointer(),
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "quidem",
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("ut"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UpdateMask: sdk.String("eos"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.AppengineAppsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsRepair

Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.

### Example Usage

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
    res, err := s.Apps.AppengineAppsRepair(ctx, operations.AppengineAppsRepairRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "id": "quidem",
        },
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "illum",
        Callback: sdk.String("quo"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.AppengineAppsRepairSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsServicesDelete

Deletes the specified service and all enclosed versions.

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesDelete(ctx, operations.AppengineAppsServicesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "ipsam",
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        ServicesID: "aperiam",
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quod"),
    }, operations.AppengineAppsServicesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsServicesGet

Gets the current configuration of the specified service.

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesGet(ctx, operations.AppengineAppsServicesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("inventore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "totam",
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        ServicesID: "sapiente",
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.AppengineAppsServicesGetSecurity{
        Option1: &operations.AppengineAppsServicesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## AppengineAppsServicesList

Lists all the services in the application.

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesList(ctx, operations.AppengineAppsServicesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "eum",
        Callback: sdk.String("quas"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("deleniti"),
        PageSize: sdk.Int64(143829),
        PageToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("atque"),
    }, operations.AppengineAppsServicesListSecurity{
        Option1: &operations.AppengineAppsServicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## AppengineAppsServicesPatch

Updates the configuration of the specified service.

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesPatch(ctx, operations.AppengineAppsServicesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Service: &shared.Service{
            ID: sdk.String("562f222e-9817-4ee1-bcbe-61e6b7b95bc0"),
            Labels: map[string]string{
                "tempore": "adipisci",
                "cumque": "consequuntur",
                "consequatur": "minus",
            },
            Name: sdk.String("Miranda Feest"),
            NetworkSettings: &shared.NetworkSettings{
                IngressTrafficAllowed: shared.NetworkSettingsIngressTrafficAllowedEnumIngressTrafficAllowedInternalOnly.ToPointer(),
            },
            Split: &shared.TrafficSplit{
                Allocations: map[string]float64{
                    "nulla": 5578.11,
                    "esse": 974.68,
                    "a": 6216.79,
                    "sint": 8630.23,
                },
                ShardBy: shared.TrafficSplitShardByEnumRandom.ToPointer(),
            },
        },
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "asperiores",
        Callback: sdk.String("facere"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("consequuntur"),
        MigrateTraffic: sdk.Bool(false),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        ServicesID: "culpa",
        UpdateMask: sdk.String("aliquid"),
        UploadType: sdk.String("tenetur"),
        UploadProtocol: sdk.String("quae"),
    }, operations.AppengineAppsServicesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsServicesVersionsCreate

Deploys code and resource files to a new version.

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesVersionsCreate(ctx, operations.AppengineAppsServicesVersionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Version: &shared.Version{
            APIConfig: &shared.APIConfigHandler{
                AuthFailAction: shared.APIConfigHandlerAuthFailActionEnumAuthFailActionRedirect.ToPointer(),
                Login: shared.APIConfigHandlerLoginEnumLoginOptional.ToPointer(),
                Script: sdk.String("eius"),
                SecurityLevel: shared.APIConfigHandlerSecurityLevelEnumSecureOptional.ToPointer(),
                URL: sdk.String("illum"),
            },
            AppEngineApis: sdk.Bool(false),
            AutomaticScaling: &shared.AutomaticScaling{
                CoolDownPeriod: sdk.String("soluta"),
                CPUUtilization: &shared.CPUUtilization{
                    AggregationWindowLength: sdk.String("accusantium"),
                    TargetUtilization: sdk.Float64(3069.86),
                },
                CustomMetrics: []shared.CustomMetric{
                    shared.CustomMetric{
                        Filter: sdk.String("dicta"),
                        MetricName: sdk.String("ullam"),
                        SingleInstanceAssignment: sdk.Float64(4438.79),
                        TargetType: sdk.String("ullam"),
                        TargetUtilization: sdk.Float64(3917.74),
                    },
                    shared.CustomMetric{
                        Filter: sdk.String("aut"),
                        MetricName: sdk.String("voluptatum"),
                        SingleInstanceAssignment: sdk.Float64(1852.32),
                        TargetType: sdk.String("quibusdam"),
                        TargetUtilization: sdk.Float64(4012.59),
                    },
                    shared.CustomMetric{
                        Filter: sdk.String("deleniti"),
                        MetricName: sdk.String("itaque"),
                        SingleInstanceAssignment: sdk.Float64(6802.7),
                        TargetType: sdk.String("architecto"),
                        TargetUtilization: sdk.Float64(6091.78),
                    },
                    shared.CustomMetric{
                        Filter: sdk.String("tenetur"),
                        MetricName: sdk.String("quasi"),
                        SingleInstanceAssignment: sdk.Float64(8694.89),
                        TargetType: sdk.String("et"),
                        TargetUtilization: sdk.Float64(4541.62),
                    },
                },
                DiskUtilization: &shared.DiskUtilization{
                    TargetReadBytesPerSecond: sdk.Int(55965),
                    TargetReadOpsPerSecond: sdk.Int(326701),
                    TargetWriteBytesPerSecond: sdk.Int(86532),
                    TargetWriteOpsPerSecond: sdk.Int(232744),
                },
                MaxConcurrentRequests: sdk.Int(237173),
                MaxIdleInstances: sdk.Int(614465),
                MaxPendingLatency: sdk.String("temporibus"),
                MaxTotalInstances: sdk.Int(33074),
                MinIdleInstances: sdk.Int(522371),
                MinPendingLatency: sdk.String("aut"),
                MinTotalInstances: sdk.Int(513075),
                NetworkUtilization: &shared.NetworkUtilization{
                    TargetReceivedBytesPerSecond: sdk.Int(428796),
                    TargetReceivedPacketsPerSecond: sdk.Int(649832),
                    TargetSentBytesPerSecond: sdk.Int(68074),
                    TargetSentPacketsPerSecond: sdk.Int(544591),
                },
                RequestUtilization: &shared.RequestUtilization{
                    TargetConcurrentRequests: sdk.Int(251941),
                    TargetRequestCountPerSecond: sdk.Int(32465),
                },
                StandardSchedulerSettings: &shared.StandardSchedulerSettings{
                    MaxInstances: sdk.Int(221161),
                    MinInstances: sdk.Int(580152),
                    TargetCPUUtilization: sdk.Float64(2531.91),
                    TargetThroughputUtilization: sdk.Float64(7710.89),
                },
            },
            BasicScaling: &shared.BasicScaling{
                IdleTimeout: sdk.String("explicabo"),
                MaxInstances: sdk.Int(376226),
            },
            BetaSettings: map[string]string{
                "dignissimos": "dicta",
            },
            BuildEnvVariables: map[string]string{
                "natus": "velit",
                "voluptatibus": "voluptas",
                "asperiores": "aperiam",
                "ea": "quaerat",
            },
            CreateTime: sdk.String("consequuntur"),
            CreatedBy: sdk.String("repellendus"),
            DefaultExpiration: sdk.String("officia"),
            Deployment: &shared.Deployment{
                Build: &shared.BuildInfo{
                    CloudBuildID: sdk.String("maxime"),
                },
                CloudBuildOptions: &shared.CloudBuildOptions{
                    AppYamlPath: sdk.String("dignissimos"),
                    CloudBuildTimeout: sdk.String("officia"),
                },
                Container: &shared.ContainerInfo{
                    Image: sdk.String("asperiores"),
                },
                Files: map[string]shared.FileInfo{
                    "quae": shared.FileInfo{
                        MimeType: sdk.String("quaerat"),
                        Sha1Sum: sdk.String("porro"),
                        SourceURL: sdk.String("quod"),
                    },
                    "labore": shared.FileInfo{
                        MimeType: sdk.String("ab"),
                        Sha1Sum: sdk.String("adipisci"),
                        SourceURL: sdk.String("fuga"),
                    },
                },
                Zip: &shared.ZipInfo{
                    FilesCount: sdk.Int(662505),
                    SourceURL: sdk.String("suscipit"),
                },
            },
            DiskUsageBytes: sdk.String("velit"),
            EndpointsAPIService: &shared.EndpointsAPIService{
                ConfigID: sdk.String("culpa"),
                DisableTraceSampling: sdk.Bool(false),
                Name: sdk.String("Clay Larson"),
                RolloutStrategy: shared.EndpointsAPIServiceRolloutStrategyEnumFixed.ToPointer(),
            },
            Entrypoint: &shared.Entrypoint{
                Shell: sdk.String("quos"),
            },
            Env: sdk.String("vel"),
            EnvVariables: map[string]string{
                "possimus": "facilis",
                "cum": "commodi",
            },
            ErrorHandlers: []shared.ErrorHandler{
                shared.ErrorHandler{
                    ErrorCode: shared.ErrorHandlerErrorCodeEnumErrorCodeDefault.ToPointer(),
                    MimeType: sdk.String("reiciendis"),
                    StaticFile: sdk.String("assumenda"),
                },
                shared.ErrorHandler{
                    ErrorCode: shared.ErrorHandlerErrorCodeEnumErrorCodeDefault.ToPointer(),
                    MimeType: sdk.String("recusandae"),
                    StaticFile: sdk.String("aliquid"),
                },
            },
            FlexibleRuntimeSettings: &shared.FlexibleRuntimeSettings{
                OperatingSystem: sdk.String("aperiam"),
                RuntimeVersion: sdk.String("cum"),
            },
            Handlers: []shared.URLMap{
                shared.URLMap{
                    APIEndpoint: &shared.APIEndpointHandler{
                        ScriptPath: sdk.String("in"),
                    },
                    AuthFailAction: shared.URLMapAuthFailActionEnumAuthFailActionRedirect.ToPointer(),
                    Login: shared.URLMapLoginEnumLoginRequired.ToPointer(),
                    RedirectHTTPResponseCode: shared.URLMapRedirectHTTPResponseCodeEnumRedirectHTTPResponseCode307.ToPointer(),
                    Script: &shared.ScriptHandler{
                        ScriptPath: sdk.String("numquam"),
                    },
                    SecurityLevel: shared.URLMapSecurityLevelEnumSecureAlways.ToPointer(),
                    StaticFiles: &shared.StaticFilesHandler{
                        ApplicationReadable: sdk.Bool(false),
                        Expiration: sdk.String("suscipit"),
                        HTTPHeaders: map[string]string{
                            "quidem": "saepe",
                            "necessitatibus": "dolore",
                            "sunt": "asperiores",
                            "adipisci": "non",
                        },
                        MimeType: sdk.String("amet"),
                        Path: sdk.String("beatae"),
                        RequireMatchingFile: sdk.Bool(false),
                        UploadPathRegex: sdk.String("dignissimos"),
                    },
                    URLRegex: sdk.String("a"),
                },
            },
            HealthCheck: &shared.HealthCheck{
                CheckInterval: sdk.String("debitis"),
                DisableHealthCheck: sdk.Bool(false),
                HealthyThreshold: sdk.Int64(233420),
                Host: sdk.String("corporis"),
                RestartThreshold: sdk.Int64(689768),
                Timeout: sdk.String("laboriosam"),
                UnhealthyThreshold: sdk.Int64(58356),
            },
            ID: sdk.String("eb1ea426-555b-4a3c-a874-4ed53b88f3a8"),
            InboundServices: []shared.VersionInboundServicesEnum{
                shared.VersionInboundServicesEnumInboundServiceXMPPMessage,
                shared.VersionInboundServicesEnumInboundServiceWarmup,
                shared.VersionInboundServicesEnumInboundServiceXMPPError,
                shared.VersionInboundServicesEnumInboundServiceXMPPPresence,
            },
            InstanceClass: sdk.String("sit"),
            Libraries: []shared.Library{
                shared.Library{
                    Name: sdk.String("Faith Cole"),
                    Version: sdk.String("voluptate"),
                },
                shared.Library{
                    Name: sdk.String("Raymond Moore"),
                    Version: sdk.String("sed"),
                },
                shared.Library{
                    Name: sdk.String("Tonya Predovic"),
                    Version: sdk.String("unde"),
                },
            },
            LivenessCheck: &shared.LivenessCheck{
                CheckInterval: sdk.String("architecto"),
                FailureThreshold: sdk.Int64(382808),
                Host: sdk.String("sapiente"),
                InitialDelay: sdk.String("debitis"),
                Path: sdk.String("illo"),
                SuccessThreshold: sdk.Int64(967795),
                Timeout: sdk.String("perferendis"),
            },
            ManualScaling: &shared.ManualScaling{
                Instances: sdk.Int(546885),
            },
            Name: sdk.String("Troy Cormier"),
            Network: &shared.Network{
                ForwardedPorts: []string{
                    "ipsum",
                    "ea",
                    "occaecati",
                    "quos",
                },
                InstanceIPMode: shared.NetworkInstanceIPModeEnumInternal.ToPointer(),
                InstanceTag: sdk.String("tempora"),
                Name: sdk.String("Allison Wisozk I"),
                SessionAffinity: sdk.Bool(false),
                SubnetworkName: sdk.String("officiis"),
            },
            NobuildFilesRegex: sdk.String("praesentium"),
            ReadinessCheck: &shared.ReadinessCheck{
                AppStartTimeout: sdk.String("facilis"),
                CheckInterval: sdk.String("quaerat"),
                FailureThreshold: sdk.Int64(277773),
                Host: sdk.String("ipsam"),
                Path: sdk.String("debitis"),
                SuccessThreshold: sdk.Int64(524970),
                Timeout: sdk.String("sit"),
            },
            Resources: &shared.Resources{
                CPU: sdk.Float64(7505.95),
                DiskGb: sdk.Float64(6256.37),
                KmsKeyReference: sdk.String("veniam"),
                MemoryGb: sdk.Float64(3295.43),
                Volumes: []shared.Volume{
                    shared.Volume{
                        Name: sdk.String("Dr. Jody Cummings"),
                        SizeGb: sdk.Float64(3299.35),
                        VolumeType: sdk.String("in"),
                    },
                    shared.Volume{
                        Name: sdk.String("Jack Langworth"),
                        SizeGb: sdk.Float64(7400.98),
                        VolumeType: sdk.String("laboriosam"),
                    },
                    shared.Volume{
                        Name: sdk.String("Bob Mueller"),
                        SizeGb: sdk.Float64(8928.63),
                        VolumeType: sdk.String("neque"),
                    },
                    shared.Volume{
                        Name: sdk.String("Wesley Nikolaus"),
                        SizeGb: sdk.Float64(8792.35),
                        VolumeType: sdk.String("tempora"),
                    },
                },
            },
            Runtime: sdk.String("atque"),
            RuntimeAPIVersion: sdk.String("fugit"),
            RuntimeChannel: sdk.String("ut"),
            RuntimeMainExecutablePath: sdk.String("fugiat"),
            ServiceAccount: sdk.String("voluptatem"),
            ServingStatus: shared.VersionServingStatusEnumServing.ToPointer(),
            Threadsafe: sdk.Bool(false),
            VersionURL: sdk.String("expedita"),
            VM: sdk.Bool(false),
            VpcAccessConnector: &shared.VpcAccessConnector{
                EgressSetting: shared.VpcAccessConnectorEgressSettingEnumEgressSettingUnspecified.ToPointer(),
                Name: sdk.String("Ms. Georgia Hintz"),
            },
            Zones: []string{
                "corporis",
                "et",
                "blanditiis",
                "ex",
            },
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "vel",
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        ServicesID: "reiciendis",
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("harum"),
    }, operations.AppengineAppsServicesVersionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsServicesVersionsDelete

Deletes an existing Version resource.

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesVersionsDelete(ctx, operations.AppengineAppsServicesVersionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "labore",
        Callback: sdk.String("quidem"),
        Fields: sdk.String("atque"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        ServicesID: "laboriosam",
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("amet"),
        VersionsID: "deserunt",
    }, operations.AppengineAppsServicesVersionsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsServicesVersionsGet

Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesVersionsGet(ctx, operations.AppengineAppsServicesVersionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("unde"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "provident",
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        ServicesID: "quidem",
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("facere"),
        VersionsID: "fuga",
        View: operations.AppengineAppsServicesVersionsGetViewEnumFull.ToPointer(),
    }, operations.AppengineAppsServicesVersionsGetSecurity{
        Option1: &operations.AppengineAppsServicesVersionsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Version != nil {
        // handle response
    }
}
```

## AppengineAppsServicesVersionsInstancesDebug

Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesVersionsInstancesDebug(ctx, operations.AppengineAppsServicesVersionsInstancesDebugRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DebugInstanceRequest: &shared.DebugInstanceRequest{
            SSHKey: sdk.String("veniam"),
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "repudiandae",
        Callback: sdk.String("quasi"),
        Fields: sdk.String("atque"),
        InstancesID: "reprehenderit",
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        ServicesID: "quidem",
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("et"),
        VersionsID: "esse",
    }, operations.AppengineAppsServicesVersionsInstancesDebugSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsServicesVersionsInstancesDelete

Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesVersionsInstancesDelete(ctx, operations.AppengineAppsServicesVersionsInstancesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "atque",
        Callback: sdk.String("error"),
        Fields: sdk.String("officiis"),
        InstancesID: "officiis",
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("natus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        ServicesID: "aspernatur",
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("maiores"),
        VersionsID: "corrupti",
    }, operations.AppengineAppsServicesVersionsInstancesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## AppengineAppsServicesVersionsInstancesGet

Gets instance information.

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesVersionsInstancesGet(ctx, operations.AppengineAppsServicesVersionsInstancesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AppsID: "suscipit",
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("atque"),
        InstancesID: "atque",
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        ServicesID: "repellendus",
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("reiciendis"),
        VersionsID: "doloremque",
    }, operations.AppengineAppsServicesVersionsInstancesGetSecurity{
        Option1: &operations.AppengineAppsServicesVersionsInstancesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Instance != nil {
        // handle response
    }
}
```

## AppengineAppsServicesVersionsInstancesList

Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesVersionsInstancesList(ctx, operations.AppengineAppsServicesVersionsInstancesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "beatae",
        Callback: sdk.String("dolores"),
        Fields: sdk.String("enim"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("velit"),
        PageSize: sdk.Int64(952143),
        PageToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        ServicesID: "saepe",
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("occaecati"),
        VersionsID: "officiis",
    }, operations.AppengineAppsServicesVersionsInstancesListSecurity{
        Option1: &operations.AppengineAppsServicesVersionsInstancesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstancesResponse != nil {
        // handle response
    }
}
```

## AppengineAppsServicesVersionsList

Lists the versions of a service.

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesVersionsList(ctx, operations.AppengineAppsServicesVersionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AppsID: "eveniet",
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("id"),
        PageSize: sdk.Int64(335631),
        PageToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        ServicesID: "illo",
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("quidem"),
        View: operations.AppengineAppsServicesVersionsListViewEnumFull.ToPointer(),
    }, operations.AppengineAppsServicesVersionsListSecurity{
        Option1: &operations.AppengineAppsServicesVersionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVersionsResponse != nil {
        // handle response
    }
}
```

## AppengineAppsServicesVersionsPatch

Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)

### Example Usage

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
    res, err := s.Apps.AppengineAppsServicesVersionsPatch(ctx, operations.AppengineAppsServicesVersionsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Version: &shared.Version{
            APIConfig: &shared.APIConfigHandler{
                AuthFailAction: shared.APIConfigHandlerAuthFailActionEnumAuthFailActionUnauthorized.ToPointer(),
                Login: shared.APIConfigHandlerLoginEnumLoginUnspecified.ToPointer(),
                Script: sdk.String("iure"),
                SecurityLevel: shared.APIConfigHandlerSecurityLevelEnumSecureUnspecified.ToPointer(),
                URL: sdk.String("totam"),
            },
            AppEngineApis: sdk.Bool(false),
            AutomaticScaling: &shared.AutomaticScaling{
                CoolDownPeriod: sdk.String("quae"),
                CPUUtilization: &shared.CPUUtilization{
                    AggregationWindowLength: sdk.String("molestiae"),
                    TargetUtilization: sdk.Float64(9077.33),
                },
                CustomMetrics: []shared.CustomMetric{
                    shared.CustomMetric{
                        Filter: sdk.String("cum"),
                        MetricName: sdk.String("iure"),
                        SingleInstanceAssignment: sdk.Float64(8980.63),
                        TargetType: sdk.String("ratione"),
                        TargetUtilization: sdk.Float64(6725.82),
                    },
                },
                DiskUtilization: &shared.DiskUtilization{
                    TargetReadBytesPerSecond: sdk.Int(715208),
                    TargetReadOpsPerSecond: sdk.Int(528940),
                    TargetWriteBytesPerSecond: sdk.Int(523006),
                    TargetWriteOpsPerSecond: sdk.Int(304446),
                },
                MaxConcurrentRequests: sdk.Int(320565),
                MaxIdleInstances: sdk.Int(997963),
                MaxPendingLatency: sdk.String("alias"),
                MaxTotalInstances: sdk.Int(362189),
                MinIdleInstances: sdk.Int(597303),
                MinPendingLatency: sdk.String("nihil"),
                MinTotalInstances: sdk.Int(649078),
                NetworkUtilization: &shared.NetworkUtilization{
                    TargetReceivedBytesPerSecond: sdk.Int(378245),
                    TargetReceivedPacketsPerSecond: sdk.Int(5189),
                    TargetSentBytesPerSecond: sdk.Int(979527),
                    TargetSentPacketsPerSecond: sdk.Int(970222),
                },
                RequestUtilization: &shared.RequestUtilization{
                    TargetConcurrentRequests: sdk.Int(174658),
                    TargetRequestCountPerSecond: sdk.Int(663866),
                },
                StandardSchedulerSettings: &shared.StandardSchedulerSettings{
                    MaxInstances: sdk.Int(327988),
                    MinInstances: sdk.Int(293144),
                    TargetCPUUtilization: sdk.Float64(6803.49),
                    TargetThroughputUtilization: sdk.Float64(2003.64),
                },
            },
            BasicScaling: &shared.BasicScaling{
                IdleTimeout: sdk.String("quae"),
                MaxInstances: sdk.Int(925703),
            },
            BetaSettings: map[string]string{
                "quaerat": "molestiae",
                "ex": "ut",
                "culpa": "adipisci",
            },
            BuildEnvVariables: map[string]string{
                "laudantium": "eum",
                "nemo": "recusandae",
                "esse": "provident",
                "quis": "eum",
            },
            CreateTime: sdk.String("reiciendis"),
            CreatedBy: sdk.String("provident"),
            DefaultExpiration: sdk.String("aspernatur"),
            Deployment: &shared.Deployment{
                Build: &shared.BuildInfo{
                    CloudBuildID: sdk.String("ullam"),
                },
                CloudBuildOptions: &shared.CloudBuildOptions{
                    AppYamlPath: sdk.String("quasi"),
                    CloudBuildTimeout: sdk.String("animi"),
                },
                Container: &shared.ContainerInfo{
                    Image: sdk.String("nostrum"),
                },
                Files: map[string]shared.FileInfo{
                    "provident": shared.FileInfo{
                        MimeType: sdk.String("possimus"),
                        Sha1Sum: sdk.String("animi"),
                        SourceURL: sdk.String("ex"),
                    },
                    "aliquid": shared.FileInfo{
                        MimeType: sdk.String("accusantium"),
                        Sha1Sum: sdk.String("repellat"),
                        SourceURL: sdk.String("doloribus"),
                    },
                    "ullam": shared.FileInfo{
                        MimeType: sdk.String("in"),
                        Sha1Sum: sdk.String("nam"),
                        SourceURL: sdk.String("earum"),
                    },
                },
                Zip: &shared.ZipInfo{
                    FilesCount: sdk.Int(637583),
                    SourceURL: sdk.String("laborum"),
                },
            },
            DiskUsageBytes: sdk.String("placeat"),
            EndpointsAPIService: &shared.EndpointsAPIService{
                ConfigID: sdk.String("modi"),
                DisableTraceSampling: sdk.Bool(false),
                Name: sdk.String("Virgil Towne"),
                RolloutStrategy: shared.EndpointsAPIServiceRolloutStrategyEnumUnspecifiedRolloutStrategy.ToPointer(),
            },
            Entrypoint: &shared.Entrypoint{
                Shell: sdk.String("rerum"),
            },
            Env: sdk.String("tempora"),
            EnvVariables: map[string]string{
                "inventore": "fugit",
                "cumque": "quae",
            },
            ErrorHandlers: []shared.ErrorHandler{
                shared.ErrorHandler{
                    ErrorCode: shared.ErrorHandlerErrorCodeEnumErrorCodeDefault.ToPointer(),
                    MimeType: sdk.String("aspernatur"),
                    StaticFile: sdk.String("eum"),
                },
            },
            FlexibleRuntimeSettings: &shared.FlexibleRuntimeSettings{
                OperatingSystem: sdk.String("eius"),
                RuntimeVersion: sdk.String("rem"),
            },
            Handlers: []shared.URLMap{
                shared.URLMap{
                    APIEndpoint: &shared.APIEndpointHandler{
                        ScriptPath: sdk.String("impedit"),
                    },
                    AuthFailAction: shared.URLMapAuthFailActionEnumAuthFailActionUnspecified.ToPointer(),
                    Login: shared.URLMapLoginEnumLoginRequired.ToPointer(),
                    RedirectHTTPResponseCode: shared.URLMapRedirectHTTPResponseCodeEnumRedirectHTTPResponseCode302.ToPointer(),
                    Script: &shared.ScriptHandler{
                        ScriptPath: sdk.String("dicta"),
                    },
                    SecurityLevel: shared.URLMapSecurityLevelEnumSecureDefault.ToPointer(),
                    StaticFiles: &shared.StaticFilesHandler{
                        ApplicationReadable: sdk.Bool(false),
                        Expiration: sdk.String("beatae"),
                        HTTPHeaders: map[string]string{
                            "provident": "earum",
                            "soluta": "hic",
                            "illum": "eaque",
                        },
                        MimeType: sdk.String("earum"),
                        Path: sdk.String("perspiciatis"),
                        RequireMatchingFile: sdk.Bool(false),
                        UploadPathRegex: sdk.String("maiores"),
                    },
                    URLRegex: sdk.String("debitis"),
                },
                shared.URLMap{
                    APIEndpoint: &shared.APIEndpointHandler{
                        ScriptPath: sdk.String("aliquid"),
                    },
                    AuthFailAction: shared.URLMapAuthFailActionEnumAuthFailActionUnauthorized.ToPointer(),
                    Login: shared.URLMapLoginEnumLoginOptional.ToPointer(),
                    RedirectHTTPResponseCode: shared.URLMapRedirectHTTPResponseCodeEnumRedirectHTTPResponseCode301.ToPointer(),
                    Script: &shared.ScriptHandler{
                        ScriptPath: sdk.String("fugit"),
                    },
                    SecurityLevel: shared.URLMapSecurityLevelEnumSecureOptional.ToPointer(),
                    StaticFiles: &shared.StaticFilesHandler{
                        ApplicationReadable: sdk.Bool(false),
                        Expiration: sdk.String("fuga"),
                        HTTPHeaders: map[string]string{
                            "animi": "necessitatibus",
                        },
                        MimeType: sdk.String("nulla"),
                        Path: sdk.String("consequatur"),
                        RequireMatchingFile: sdk.Bool(false),
                        UploadPathRegex: sdk.String("quasi"),
                    },
                    URLRegex: sdk.String("et"),
                },
                shared.URLMap{
                    APIEndpoint: &shared.APIEndpointHandler{
                        ScriptPath: sdk.String("ducimus"),
                    },
                    AuthFailAction: shared.URLMapAuthFailActionEnumAuthFailActionRedirect.ToPointer(),
                    Login: shared.URLMapLoginEnumLoginAdmin.ToPointer(),
                    RedirectHTTPResponseCode: shared.URLMapRedirectHTTPResponseCodeEnumRedirectHTTPResponseCode301.ToPointer(),
                    Script: &shared.ScriptHandler{
                        ScriptPath: sdk.String("adipisci"),
                    },
                    SecurityLevel: shared.URLMapSecurityLevelEnumSecureUnspecified.ToPointer(),
                    StaticFiles: &shared.StaticFilesHandler{
                        ApplicationReadable: sdk.Bool(false),
                        Expiration: sdk.String("magni"),
                        HTTPHeaders: map[string]string{
                            "nulla": "necessitatibus",
                            "ipsa": "tempora",
                            "nihil": "molestiae",
                            "dicta": "iusto",
                        },
                        MimeType: sdk.String("esse"),
                        Path: sdk.String("praesentium"),
                        RequireMatchingFile: sdk.Bool(false),
                        UploadPathRegex: sdk.String("maiores"),
                    },
                    URLRegex: sdk.String("reiciendis"),
                },
                shared.URLMap{
                    APIEndpoint: &shared.APIEndpointHandler{
                        ScriptPath: sdk.String("vel"),
                    },
                    AuthFailAction: shared.URLMapAuthFailActionEnumAuthFailActionUnspecified.ToPointer(),
                    Login: shared.URLMapLoginEnumLoginRequired.ToPointer(),
                    RedirectHTTPResponseCode: shared.URLMapRedirectHTTPResponseCodeEnumRedirectHTTPResponseCodeUnspecified.ToPointer(),
                    Script: &shared.ScriptHandler{
                        ScriptPath: sdk.String("dicta"),
                    },
                    SecurityLevel: shared.URLMapSecurityLevelEnumSecureNever.ToPointer(),
                    StaticFiles: &shared.StaticFilesHandler{
                        ApplicationReadable: sdk.Bool(false),
                        Expiration: sdk.String("tempora"),
                        HTTPHeaders: map[string]string{
                            "ex": "consectetur",
                            "aliquid": "ipsa",
                        },
                        MimeType: sdk.String("laborum"),
                        Path: sdk.String("sunt"),
                        RequireMatchingFile: sdk.Bool(false),
                        UploadPathRegex: sdk.String("nostrum"),
                    },
                    URLRegex: sdk.String("fugiat"),
                },
            },
            HealthCheck: &shared.HealthCheck{
                CheckInterval: sdk.String("expedita"),
                DisableHealthCheck: sdk.Bool(false),
                HealthyThreshold: sdk.Int64(399667),
                Host: sdk.String("officia"),
                RestartThreshold: sdk.Int64(381397),
                Timeout: sdk.String("aliquid"),
                UnhealthyThreshold: sdk.Int64(21973),
            },
            ID: sdk.String("659a1ade-aab5-4851-96c6-45b08b61891b"),
            InboundServices: []shared.VersionInboundServicesEnum{
                shared.VersionInboundServicesEnumInboundServiceXMPPSubscribe,
                shared.VersionInboundServicesEnumInboundServiceUnspecified,
                shared.VersionInboundServicesEnumInboundServiceWarmup,
            },
            InstanceClass: sdk.String("officiis"),
            Libraries: []shared.Library{
                shared.Library{
                    Name: sdk.String("Mr. Dewey Toy"),
                    Version: sdk.String("earum"),
                },
            },
            LivenessCheck: &shared.LivenessCheck{
                CheckInterval: sdk.String("ex"),
                FailureThreshold: sdk.Int64(958308),
                Host: sdk.String("rem"),
                InitialDelay: sdk.String("minus"),
                Path: sdk.String("nemo"),
                SuccessThreshold: sdk.Int64(992074),
                Timeout: sdk.String("ratione"),
            },
            ManualScaling: &shared.ManualScaling{
                Instances: sdk.Int(355225),
            },
            Name: sdk.String("Desiree Leannon"),
            Network: &shared.Network{
                ForwardedPorts: []string{
                    "ipsam",
                    "culpa",
                    "dolor",
                },
                InstanceIPMode: shared.NetworkInstanceIPModeEnumInstanceIPModeUnspecified.ToPointer(),
                InstanceTag: sdk.String("inventore"),
                Name: sdk.String("Peter Goodwin Sr."),
                SessionAffinity: sdk.Bool(false),
                SubnetworkName: sdk.String("sit"),
            },
            NobuildFilesRegex: sdk.String("modi"),
            ReadinessCheck: &shared.ReadinessCheck{
                AppStartTimeout: sdk.String("fugit"),
                CheckInterval: sdk.String("ab"),
                FailureThreshold: sdk.Int64(513760),
                Host: sdk.String("quae"),
                Path: sdk.String("dolor"),
                SuccessThreshold: sdk.Int64(856277),
                Timeout: sdk.String("ipsam"),
            },
            Resources: &shared.Resources{
                CPU: sdk.Float64(1621.2),
                DiskGb: sdk.Float64(551.07),
                KmsKeyReference: sdk.String("quas"),
                MemoryGb: sdk.Float64(9111.98),
                Volumes: []shared.Volume{
                    shared.Volume{
                        Name: sdk.String("Cory Treutel"),
                        SizeGb: sdk.Float64(1995.96),
                        VolumeType: sdk.String("expedita"),
                    },
                    shared.Volume{
                        Name: sdk.String("Kristin Legros"),
                        SizeGb: sdk.Float64(704.1),
                        VolumeType: sdk.String("porro"),
                    },
                    shared.Volume{
                        Name: sdk.String("Della Howell"),
                        SizeGb: sdk.Float64(289.52),
                        VolumeType: sdk.String("exercitationem"),
                    },
                    shared.Volume{
                        Name: sdk.String("Arthur Huel"),
                        SizeGb: sdk.Float64(6675.93),
                        VolumeType: sdk.String("harum"),
                    },
                },
            },
            Runtime: sdk.String("sequi"),
            RuntimeAPIVersion: sdk.String("doloribus"),
            RuntimeChannel: sdk.String("repudiandae"),
            RuntimeMainExecutablePath: sdk.String("optio"),
            ServiceAccount: sdk.String("occaecati"),
            ServingStatus: shared.VersionServingStatusEnumServing.ToPointer(),
            Threadsafe: sdk.Bool(false),
            VersionURL: sdk.String("voluptate"),
            VM: sdk.Bool(false),
            VpcAccessConnector: &shared.VpcAccessConnector{
                EgressSetting: shared.VpcAccessConnectorEgressSettingEnumAllTraffic.ToPointer(),
                Name: sdk.String("Hector Funk"),
            },
            Zones: []string{
                "aspernatur",
                "ducimus",
            },
        },
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        AppsID: "laudantium",
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("rem"),
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        ServicesID: "nisi",
        UpdateMask: sdk.String("consequuntur"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("aperiam"),
        VersionsID: "cupiditate",
    }, operations.AppengineAppsServicesVersionsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
