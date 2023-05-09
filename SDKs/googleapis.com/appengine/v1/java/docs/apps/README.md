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
* [appengineAppsServicesVersionsPatch](#appengineappsservicesversionspatch) - Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)

## appengineAppsAuthorizedCertificatesCreate

Uploads the specified SSL certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthorizedCertificate;
import org.openapis.openapi.models.shared.CertificateRawData;
import org.openapis.openapi.models.shared.ManagedCertificate;
import org.openapis.openapi.models.shared.ManagedCertificateStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesCreateRequest req = new AppengineAppsAuthorizedCertificatesCreateRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                authorizedCertificate = new AuthorizedCertificate() {{
                    certificateRawData = new CertificateRawData() {{
                        privateKey = "aspernatur";
                        publicCertificate = "perferendis";
                    }};;
                    displayName = "ad";
                    domainMappingsCount = 617636;
                    domainNames = new String[]{{
                        add("iste"),
                    }};
                    expireTime = "dolor";
                    id = "96fea759-6eb1-40fa-aa23-52c5955907af";
                    managedCertificate = new ManagedCertificate() {{
                        lastRenewalTime = "sapiente";
                        status = ManagedCertificateStatusEnum.MANAGEMENT_STATUS_UNSPECIFIED;
                    }};;
                    name = "Mike Nicolas";
                    visibleDomainMappings = new String[]{{
                        add("occaecati"),
                        add("numquam"),
                        add("commodi"),
                    }};
                }};;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "error";
                key = "quia";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "laborum";
                uploadProtocol = "animi";
            }};            

            AppengineAppsAuthorizedCertificatesCreateResponse res = sdk.apps.appengineAppsAuthorizedCertificatesCreate(req, new AppengineAppsAuthorizedCertificatesCreateSecurity("enim", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authorizedCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsAuthorizedCertificatesDelete

Deletes the specified SSL certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesDeleteRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesDeleteResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesDeleteRequest req = new AppengineAppsAuthorizedCertificatesDeleteRequest("quo", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "aut";
                key = "quasi";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "laborum";
                uploadProtocol = "quasi";
            }};            

            AppengineAppsAuthorizedCertificatesDeleteResponse res = sdk.apps.appengineAppsAuthorizedCertificatesDelete(req, new AppengineAppsAuthorizedCertificatesDeleteSecurity("reiciendis", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsAuthorizedCertificatesGet

Gets the specified SSL certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetSecurityOption3;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesGetRequest req = new AppengineAppsAuthorizedCertificatesGetRequest("vero", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "voluptate";
                key = "cum";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "reprehenderit";
                uploadProtocol = "ut";
                view = AppengineAppsAuthorizedCertificatesGetViewEnum.FULL_CERTIFICATE;
            }};            

            AppengineAppsAuthorizedCertificatesGetResponse res = sdk.apps.appengineAppsAuthorizedCertificatesGet(req, new AppengineAppsAuthorizedCertificatesGetSecurity() {{
                option1 = new AppengineAppsAuthorizedCertificatesGetSecurityOption1("dicta", "corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.authorizedCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsAuthorizedCertificatesList

Lists all SSL certificates the user is authorized to administer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListSecurityOption3;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesListRequest req = new AppengineAppsAuthorizedCertificatesListRequest("dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "accusamus";
                key = "commodi";
                oauthToken = "repudiandae";
                pageSize = 64147L;
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "molestias";
                uploadProtocol = "excepturi";
                view = AppengineAppsAuthorizedCertificatesListViewEnum.FULL_CERTIFICATE;
            }};            

            AppengineAppsAuthorizedCertificatesListResponse res = sdk.apps.appengineAppsAuthorizedCertificatesList(req, new AppengineAppsAuthorizedCertificatesListSecurity() {{
                option1 = new AppengineAppsAuthorizedCertificatesListSecurityOption1("modi", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAuthorizedCertificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsAuthorizedCertificatesPatch

Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesPatchRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesPatchResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthorizedCertificate;
import org.openapis.openapi.models.shared.CertificateRawData;
import org.openapis.openapi.models.shared.ManagedCertificate;
import org.openapis.openapi.models.shared.ManagedCertificateStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesPatchRequest req = new AppengineAppsAuthorizedCertificatesPatchRequest("rem", "voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                authorizedCertificate = new AuthorizedCertificate() {{
                    certificateRawData = new CertificateRawData() {{
                        privateKey = "repudiandae";
                        publicCertificate = "sint";
                    }};;
                    displayName = "veritatis";
                    domainMappingsCount = 929297;
                    domainNames = new String[]{{
                        add("enim"),
                        add("consequatur"),
                    }};
                    expireTime = "est";
                    id = "d2abd442-6980-42d5-82a9-4bb4f63c969e";
                    managedCertificate = new ManagedCertificate() {{
                        lastRenewalTime = "sint";
                        status = ManagedCertificateStatusEnum.FAILED_PERMANENT;
                    }};;
                    name = "Raquel Wilderman";
                    visibleDomainMappings = new String[]{{
                        add("illum"),
                        add("maiores"),
                    }};
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "cumque";
                key = "facere";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "aliquid";
                updateMask = "laborum";
                uploadType = "accusamus";
                uploadProtocol = "non";
            }};            

            AppengineAppsAuthorizedCertificatesPatchResponse res = sdk.apps.appengineAppsAuthorizedCertificatesPatch(req, new AppengineAppsAuthorizedCertificatesPatchSecurity("occaecati", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authorizedCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsAuthorizedDomainsList

Lists all domains the user is authorized to administer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedDomainsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedDomainsListRequest req = new AppengineAppsAuthorizedDomainsListRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "id";
                key = "blanditiis";
                oauthToken = "deleniti";
                pageSize = 956084L;
                pageToken = "amet";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "nisi";
                uploadProtocol = "vel";
            }};            

            AppengineAppsAuthorizedDomainsListResponse res = sdk.apps.appengineAppsAuthorizedDomainsList(req, new AppengineAppsAuthorizedDomainsListSecurity() {{
                option1 = new AppengineAppsAuthorizedDomainsListSecurityOption1("natus", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAuthorizedDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsCreate

Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsCreateRequest;
import org.openapis.openapi.models.operations.AppengineAppsCreateResponse;
import org.openapis.openapi.models.operations.AppengineAppsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplicationDatabaseTypeEnum;
import org.openapis.openapi.models.shared.ApplicationInput;
import org.openapis.openapi.models.shared.ApplicationServingStatusEnum;
import org.openapis.openapi.models.shared.FeatureSettings;
import org.openapis.openapi.models.shared.IdentityAwareProxyInput;
import org.openapis.openapi.models.shared.UrlDispatchRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsCreateRequest req = new AppengineAppsCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                applicationInput = new ApplicationInput() {{
                    authDomain = "perferendis";
                    databaseType = ApplicationDatabaseTypeEnum.CLOUD_DATASTORE;
                    defaultCookieExpiration = "magnam";
                    dispatchRules = new org.openapis.openapi.models.shared.UrlDispatchRule[]{{
                        add(new UrlDispatchRule() {{
                            domain = "id";
                            path = "labore";
                            service = "labore";
                        }}),
                        add(new UrlDispatchRule() {{
                            domain = "suscipit";
                            path = "natus";
                            service = "nobis";
                        }}),
                        add(new UrlDispatchRule() {{
                            domain = "eum";
                            path = "vero";
                            service = "aspernatur";
                        }}),
                    }};
                    featureSettings = new FeatureSettings() {{
                        splitHealthChecks = false;
                        useContainerOptimizedOs = false;
                    }};;
                    iap = new IdentityAwareProxyInput() {{
                        enabled = false;
                        oauth2ClientId = "architecto";
                        oauth2ClientSecret = "magnam";
                    }};;
                    id = "1959890a-fa56-43e2-916f-e4c8b711e5b7";
                    locationId = "repellat";
                    serviceAccount = "quibusdam";
                    servingStatus = ApplicationServingStatusEnum.UNSPECIFIED;
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "consequuntur";
                key = "praesentium";
                oauthToken = "natus";
                parent = "magni";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "quo";
                uploadProtocol = "illum";
            }};            

            AppengineAppsCreateResponse res = sdk.apps.appengineAppsCreate(req, new AppengineAppsCreateSecurity("pariatur", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsDomainMappingsCreate

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsCreateOverrideStrategyEnum;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsCreateRequest;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsCreateResponse;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DomainMapping;
import org.openapis.openapi.models.shared.ResourceRecord;
import org.openapis.openapi.models.shared.ResourceRecordTypeEnum;
import org.openapis.openapi.models.shared.SslSettings;
import org.openapis.openapi.models.shared.SslSettingsSslManagementTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsDomainMappingsCreateRequest req = new AppengineAppsDomainMappingsCreateRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                domainMapping = new DomainMapping() {{
                    id = "2601fb57-6b0d-45f0-930c-5fbb25870532";
                    name = "Jacqueline Schimmel";
                    resourceRecords = new org.openapis.openapi.models.shared.ResourceRecord[]{{
                        add(new ResourceRecord() {{
                            name = "Mindy Walter";
                            rrdata = "perspiciatis";
                            type = ResourceRecordTypeEnum.RECORD_TYPE_UNSPECIFIED;
                        }}),
                        add(new ResourceRecord() {{
                            name = "Bobby Kutch V";
                            rrdata = "rerum";
                            type = ResourceRecordTypeEnum.RECORD_TYPE_UNSPECIFIED;
                        }}),
                        add(new ResourceRecord() {{
                            name = "Merle Gleichner";
                            rrdata = "deleniti";
                            type = ResourceRecordTypeEnum.CNAME;
                        }}),
                        add(new ResourceRecord() {{
                            name = "Loren Renner";
                            rrdata = "quos";
                            type = ResourceRecordTypeEnum.A;
                        }}),
                    }};
                    sslSettings = new SslSettings() {{
                        certificateId = "dolorem";
                        pendingManagedCertificateId = "dolorem";
                        sslManagementType = SslSettingsSslManagementTypeEnum.SSL_MANAGEMENT_TYPE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "excepturi";
                key = "cum";
                oauthToken = "voluptate";
                overrideStrategy = AppengineAppsDomainMappingsCreateOverrideStrategyEnum.STRICT;
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "amet";
                uploadProtocol = "dolorum";
            }};            

            AppengineAppsDomainMappingsCreateResponse res = sdk.apps.appengineAppsDomainMappingsCreate(req, new AppengineAppsDomainMappingsCreateSecurity("numquam", "veritatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsDomainMappingsDelete

Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsDeleteRequest;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsDeleteResponse;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsDomainMappingsDeleteRequest req = new AppengineAppsDomainMappingsDeleteRequest("ipsa", "ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "quidem";
                key = "voluptatibus";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "eos";
                uploadProtocol = "atque";
            }};            

            AppengineAppsDomainMappingsDeleteResponse res = sdk.apps.appengineAppsDomainMappingsDelete(req, new AppengineAppsDomainMappingsDeleteSecurity("sit", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsDomainMappingsGet

Gets the specified domain mapping.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsDomainMappingsGetRequest req = new AppengineAppsDomainMappingsGetRequest("ab", "soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "deleniti";
                key = "omnis";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "asperiores";
                uploadProtocol = "nihil";
            }};            

            AppengineAppsDomainMappingsGetResponse res = sdk.apps.appengineAppsDomainMappingsGet(req, new AppengineAppsDomainMappingsGetSecurity() {{
                option1 = new AppengineAppsDomainMappingsGetSecurityOption1("ipsum", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.domainMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsDomainMappingsList

Lists the domain mappings on an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListRequest;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListResponse;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsDomainMappingsListRequest req = new AppengineAppsDomainMappingsListRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eius";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "amet";
                key = "optio";
                oauthToken = "accusamus";
                pageSize = 320017L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "deserunt";
                uploadProtocol = "provident";
            }};            

            AppengineAppsDomainMappingsListResponse res = sdk.apps.appengineAppsDomainMappingsList(req, new AppengineAppsDomainMappingsListSecurity() {{
                option1 = new AppengineAppsDomainMappingsListSecurityOption1("minima", "repellendus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDomainMappingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsDomainMappingsPatch

Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsPatchRequest;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsPatchResponse;
import org.openapis.openapi.models.operations.AppengineAppsDomainMappingsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DomainMapping;
import org.openapis.openapi.models.shared.ResourceRecord;
import org.openapis.openapi.models.shared.ResourceRecordTypeEnum;
import org.openapis.openapi.models.shared.SslSettings;
import org.openapis.openapi.models.shared.SslSettingsSslManagementTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsDomainMappingsPatchRequest req = new AppengineAppsDomainMappingsPatchRequest("totam", "similique") {{
                dollarXgafv = XgafvEnum.ONE;
                domainMapping = new DomainMapping() {{
                    id = "d446ce2a-f7a7-43cf-bbe4-53f870b326b5";
                    name = "Darryl Emard";
                    resourceRecords = new org.openapis.openapi.models.shared.ResourceRecord[]{{
                        add(new ResourceRecord() {{
                            name = "Miss Jody Rogahn";
                            rrdata = "incidunt";
                            type = ResourceRecordTypeEnum.RECORD_TYPE_UNSPECIFIED;
                        }}),
                        add(new ResourceRecord() {{
                            name = "Verna Purdy";
                            rrdata = "molestias";
                            type = ResourceRecordTypeEnum.CNAME;
                        }}),
                        add(new ResourceRecord() {{
                            name = "Gladys Considine";
                            rrdata = "sunt";
                            type = ResourceRecordTypeEnum.A;
                        }}),
                    }};
                    sslSettings = new SslSettings() {{
                        certificateId = "nam";
                        pendingManagedCertificateId = "hic";
                        sslManagementType = SslSettingsSslManagementTypeEnum.SSL_MANAGEMENT_TYPE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "et";
                key = "saepe";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "veritatis";
                updateMask = "nobis";
                uploadType = "quos";
                uploadProtocol = "tempore";
            }};            

            AppengineAppsDomainMappingsPatchResponse res = sdk.apps.appengineAppsDomainMappingsPatch(req, new AppengineAppsDomainMappingsPatchSecurity("cupiditate", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsFirewallIngressRulesBatchUpdate

Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesBatchUpdateRequest;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesBatchUpdateResponse;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesBatchUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchUpdateIngressRulesRequest;
import org.openapis.openapi.models.shared.FirewallRule;
import org.openapis.openapi.models.shared.FirewallRuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsFirewallIngressRulesBatchUpdateRequest req = new AppengineAppsFirewallIngressRulesBatchUpdateRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                batchUpdateIngressRulesRequest = new BatchUpdateIngressRulesRequest() {{
                    ingressRules = new org.openapis.openapi.models.shared.FirewallRule[]{{
                        add(new FirewallRule() {{
                            action = FirewallRuleActionEnum.UNSPECIFIED_ACTION;
                            description = "adipisci";
                            priority = 677263;
                            sourceRange = "architecto";
                        }}),
                        add(new FirewallRule() {{
                            action = FirewallRuleActionEnum.UNSPECIFIED_ACTION;
                            description = "aut";
                            priority = 555649;
                            sourceRange = "itaque";
                        }}),
                    }};
                }};;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "repellendus";
                fields = "porro";
                key = "doloribus";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "cupiditate";
                uploadProtocol = "qui";
            }};            

            AppengineAppsFirewallIngressRulesBatchUpdateResponse res = sdk.apps.appengineAppsFirewallIngressRulesBatchUpdate(req, new AppengineAppsFirewallIngressRulesBatchUpdateSecurity("quae", "laudantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchUpdateIngressRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsFirewallIngressRulesCreate

Creates a firewall rule for the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesCreateRequest;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesCreateResponse;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallRule;
import org.openapis.openapi.models.shared.FirewallRuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsFirewallIngressRulesCreateRequest req = new AppengineAppsFirewallIngressRulesCreateRequest("odio") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallRule = new FirewallRule() {{
                    action = FirewallRuleActionEnum.DENY;
                    description = "quisquam";
                    priority = 876506;
                    sourceRange = "omnis";
                }};;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "voluptate";
                key = "consectetur";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "dignissimos";
                uploadProtocol = "hic";
            }};            

            AppengineAppsFirewallIngressRulesCreateResponse res = sdk.apps.appengineAppsFirewallIngressRulesCreate(req, new AppengineAppsFirewallIngressRulesCreateSecurity("distinctio", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.firewallRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsFirewallIngressRulesDelete

Deletes the specified firewall rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesDeleteRequest;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesDeleteResponse;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsFirewallIngressRulesDeleteRequest req = new AppengineAppsFirewallIngressRulesDeleteRequest("odio", "similique") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "quibusdam";
                key = "illum";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "impedit";
                uploadProtocol = "aut";
            }};            

            AppengineAppsFirewallIngressRulesDeleteResponse res = sdk.apps.appengineAppsFirewallIngressRulesDelete(req, new AppengineAppsFirewallIngressRulesDeleteSecurity("voluptatibus", "exercitationem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsFirewallIngressRulesGet

Gets the specified firewall rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsFirewallIngressRulesGetRequest req = new AppengineAppsFirewallIngressRulesGetRequest("nulla", "fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "eligendi";
                key = "ducimus";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "tempora";
                uploadProtocol = "ipsam";
            }};            

            AppengineAppsFirewallIngressRulesGetResponse res = sdk.apps.appengineAppsFirewallIngressRulesGet(req, new AppengineAppsFirewallIngressRulesGetSecurity() {{
                option1 = new AppengineAppsFirewallIngressRulesGetSecurityOption1("ea", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsFirewallIngressRulesList

Lists the firewall rules of an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesListRequest;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesListResponse;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsFirewallIngressRulesListRequest req = new AppengineAppsFirewallIngressRulesListRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "ex";
                fields = "laudantium";
                key = "dicta";
                matchingAddress = "dolor";
                oauthToken = "maiores";
                pageSize = 97844L;
                pageToken = "ex";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "excepturi";
                uploadProtocol = "voluptatibus";
            }};            

            AppengineAppsFirewallIngressRulesListResponse res = sdk.apps.appengineAppsFirewallIngressRulesList(req, new AppengineAppsFirewallIngressRulesListSecurity() {{
                option1 = new AppengineAppsFirewallIngressRulesListSecurityOption1("nostrum", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listIngressRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsFirewallIngressRulesPatch

Updates the specified firewall rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesPatchRequest;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesPatchResponse;
import org.openapis.openapi.models.operations.AppengineAppsFirewallIngressRulesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallRule;
import org.openapis.openapi.models.shared.FirewallRuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsFirewallIngressRulesPatchRequest req = new AppengineAppsFirewallIngressRulesPatchRequest("quisquam", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallRule = new FirewallRule() {{
                    action = FirewallRuleActionEnum.DENY;
                    description = "corporis";
                    priority = 333145;
                    sourceRange = "aliquid";
                }};;
                accessToken = "inventore";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "quo";
                key = "consectetur";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "aspernatur";
                updateMask = "minima";
                uploadType = "eaque";
                uploadProtocol = "a";
            }};            

            AppengineAppsFirewallIngressRulesPatchResponse res = sdk.apps.appengineAppsFirewallIngressRulesPatch(req, new AppengineAppsFirewallIngressRulesPatchSecurity("libero", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.firewallRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsGet

Gets information about an application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsGetRequest req = new AppengineAppsGetRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "accusamus";
                key = "inventore";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "dolorum";
                uploadProtocol = "laborum";
            }};            

            AppengineAppsGetResponse res = sdk.apps.appengineAppsGet(req, new AppengineAppsGetSecurity() {{
                option1 = new AppengineAppsGetSecurityOption1("placeat", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.application != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsLocationsGet

Gets information about a location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsLocationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsLocationsGetRequest req = new AppengineAppsLocationsGetRequest("eum", "autem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "voluptas";
                key = "libero";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "numquam";
                uploadProtocol = "explicabo";
            }};            

            AppengineAppsLocationsGetResponse res = sdk.apps.appengineAppsLocationsGet(req, new AppengineAppsLocationsGetSecurity() {{
                option1 = new AppengineAppsLocationsGetSecurityOption1("provident", "ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.location != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListRequest;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListResponse;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsLocationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsLocationsListRequest req = new AppengineAppsLocationsListRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "esse";
                filter = "rem";
                key = "fuga";
                oauthToken = "reprehenderit";
                pageSize = 695626L;
                pageToken = "fugiat";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "eum";
                uploadProtocol = "suscipit";
            }};            

            AppengineAppsLocationsListResponse res = sdk.apps.appengineAppsLocationsList(req, new AppengineAppsLocationsListSecurity() {{
                option1 = new AppengineAppsLocationsListSecurityOption1("assumenda", "eos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsOperationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsOperationsGetRequest req = new AppengineAppsOperationsGetRequest("praesentium", "quisquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "neque";
                key = "quo";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "fuga";
                uploadProtocol = "eius";
            }};            

            AppengineAppsOperationsGetResponse res = sdk.apps.appengineAppsOperationsGet(req, new AppengineAppsOperationsGetSecurity() {{
                option1 = new AppengineAppsOperationsGetSecurityOption1("eos", "voluptas") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListRequest;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListResponse;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsOperationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsOperationsListRequest req = new AppengineAppsOperationsListRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsam";
                filter = "aspernatur";
                key = "sequi";
                oauthToken = "quo";
                pageSize = 459856L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "distinctio";
                uploadProtocol = "quod";
            }};            

            AppengineAppsOperationsListResponse res = sdk.apps.appengineAppsOperationsList(req, new AppengineAppsOperationsListSecurity() {{
                option1 = new AppengineAppsOperationsListSecurityOption1("dignissimos", "inventore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsPatch

Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsPatchRequest;
import org.openapis.openapi.models.operations.AppengineAppsPatchResponse;
import org.openapis.openapi.models.operations.AppengineAppsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplicationDatabaseTypeEnum;
import org.openapis.openapi.models.shared.ApplicationInput;
import org.openapis.openapi.models.shared.ApplicationServingStatusEnum;
import org.openapis.openapi.models.shared.FeatureSettings;
import org.openapis.openapi.models.shared.IdentityAwareProxyInput;
import org.openapis.openapi.models.shared.UrlDispatchRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsPatchRequest req = new AppengineAppsPatchRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                applicationInput = new ApplicationInput() {{
                    authDomain = "accusamus";
                    databaseType = ApplicationDatabaseTypeEnum.CLOUD_DATASTORE;
                    defaultCookieExpiration = "odio";
                    dispatchRules = new org.openapis.openapi.models.shared.UrlDispatchRule[]{{
                        add(new UrlDispatchRule() {{
                            domain = "commodi";
                            path = "sapiente";
                            service = "dolores";
                        }}),
                        add(new UrlDispatchRule() {{
                            domain = "deserunt";
                            path = "molestiae";
                            service = "accusantium";
                        }}),
                        add(new UrlDispatchRule() {{
                            domain = "porro";
                            path = "eum";
                            service = "quas";
                        }}),
                    }};
                    featureSettings = new FeatureSettings() {{
                        splitHealthChecks = false;
                        useContainerOptimizedOs = false;
                    }};;
                    iap = new IdentityAwareProxyInput() {{
                        enabled = false;
                        oauth2ClientId = "praesentium";
                        oauth2ClientSecret = "consequuntur";
                    }};;
                    id = "82aa4825-62f2-422e-9817-ee17cbe61e6b";
                    locationId = "molestiae";
                    serviceAccount = "rerum";
                    servingStatus = ApplicationServingStatusEnum.USER_DISABLED;
                }};;
                accessToken = "minima";
                alt = AltEnum.PROTO;
                callback = "eligendi";
                fields = "sit";
                key = "culpa";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "adipisci";
                updateMask = "cumque";
                uploadType = "consequuntur";
                uploadProtocol = "consequatur";
            }};            

            AppengineAppsPatchResponse res = sdk.apps.appengineAppsPatch(req, new AppengineAppsPatchSecurity("minus", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsRepair

Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsRepairRequest;
import org.openapis.openapi.models.operations.AppengineAppsRepairResponse;
import org.openapis.openapi.models.operations.AppengineAppsRepairSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsRepairRequest req = new AppengineAppsRepairRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("blanditiis", "provident");
                    put("a", "nulla");
                }};
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "a";
                key = "error";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "possimus";
                uploadProtocol = "quia";
            }};            

            AppengineAppsRepairResponse res = sdk.apps.appengineAppsRepair(req, new AppengineAppsRepairSecurity("eveniet", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesDelete

Deletes the specified service and all enclosed versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesDeleteRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesDeleteResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesDeleteRequest req = new AppengineAppsServicesDeleteRequest("facere", "veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "aliquid";
                key = "tenetur";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "vel";
                uploadProtocol = "in";
            }};            

            AppengineAppsServicesDeleteResponse res = sdk.apps.appengineAppsServicesDelete(req, new AppengineAppsServicesDeleteSecurity("eius", "libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesGet

Gets the current configuration of the specified service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsServicesGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsServicesGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsServicesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesGetRequest req = new AppengineAppsServicesGetRequest("illum", "soluta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquam";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "ullam";
                key = "reprehenderit";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "aut";
                uploadProtocol = "voluptatum";
            }};            

            AppengineAppsServicesGetResponse res = sdk.apps.appengineAppsServicesGet(req, new AppengineAppsServicesGetSecurity() {{
                option1 = new AppengineAppsServicesGetSecurityOption1("qui", "quibusdam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesList

Lists all the services in the application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesListRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesListResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsServicesListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsServicesListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsServicesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesListRequest req = new AppengineAppsServicesListRequest("ex") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "itaque";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "omnis";
                key = "tenetur";
                oauthToken = "quasi";
                pageSize = 869489L;
                pageToken = "et";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "ipsa";
                uploadProtocol = "minima";
            }};            

            AppengineAppsServicesListResponse res = sdk.apps.appengineAppsServicesList(req, new AppengineAppsServicesListSecurity() {{
                option1 = new AppengineAppsServicesListSecurityOption1("veritatis", "consectetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesPatch

Updates the configuration of the specified service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesPatchRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesPatchResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NetworkSettings;
import org.openapis.openapi.models.shared.NetworkSettingsIngressTrafficAllowedEnum;
import org.openapis.openapi.models.shared.Service;
import org.openapis.openapi.models.shared.TrafficSplit;
import org.openapis.openapi.models.shared.TrafficSplitShardByEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesPatchRequest req = new AppengineAppsServicesPatchRequest("adipisci", "iste") {{
                dollarXgafv = XgafvEnum.TWO;
                service = new Service() {{
                    id = "08086a18-4039-44c2-a071-f93f5f0642da";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dignissimos", "officia");
                        put("asperiores", "nemo");
                        put("quae", "quaerat");
                        put("porro", "quod");
                    }};
                    name = "Kathleen Flatley";
                    networkSettings = new NetworkSettings() {{
                        ingressTrafficAllowed = NetworkSettingsIngressTrafficAllowedEnum.INGRESS_TRAFFIC_ALLOWED_ALL;
                    }};;
                    split = new TrafficSplit() {{
                        allocations = new java.util.HashMap<String, Double>() {{
                            put("culpa", 6658.59);
                        }};
                        shardBy = TrafficSplitShardByEnum.RANDOM;
                    }};;
                }};;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "ducimus";
                key = "quos";
                migrateTraffic = false;
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "labore";
                updateMask = "possimus";
                uploadType = "facilis";
                uploadProtocol = "cum";
            }};            

            AppengineAppsServicesPatchResponse res = sdk.apps.appengineAppsServicesPatch(req, new AppengineAppsServicesPatchSecurity("commodi", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesVersionsCreate

Deploys code and resource files to a new version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsCreateRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsCreateResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiConfigHandler;
import org.openapis.openapi.models.shared.ApiConfigHandlerAuthFailActionEnum;
import org.openapis.openapi.models.shared.ApiConfigHandlerLoginEnum;
import org.openapis.openapi.models.shared.ApiConfigHandlerSecurityLevelEnum;
import org.openapis.openapi.models.shared.ApiEndpointHandler;
import org.openapis.openapi.models.shared.AutomaticScaling;
import org.openapis.openapi.models.shared.BasicScaling;
import org.openapis.openapi.models.shared.CloudBuildOptions;
import org.openapis.openapi.models.shared.ContainerInfo;
import org.openapis.openapi.models.shared.CpuUtilization;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.DiskUtilization;
import org.openapis.openapi.models.shared.EndpointsApiService;
import org.openapis.openapi.models.shared.EndpointsApiServiceRolloutStrategyEnum;
import org.openapis.openapi.models.shared.Entrypoint;
import org.openapis.openapi.models.shared.ErrorHandler;
import org.openapis.openapi.models.shared.ErrorHandlerErrorCodeEnum;
import org.openapis.openapi.models.shared.FileInfo;
import org.openapis.openapi.models.shared.FlexibleRuntimeSettings;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.Library;
import org.openapis.openapi.models.shared.LivenessCheck;
import org.openapis.openapi.models.shared.ManualScaling;
import org.openapis.openapi.models.shared.Network;
import org.openapis.openapi.models.shared.NetworkInstanceIpModeEnum;
import org.openapis.openapi.models.shared.NetworkUtilization;
import org.openapis.openapi.models.shared.ReadinessCheck;
import org.openapis.openapi.models.shared.RequestUtilization;
import org.openapis.openapi.models.shared.Resources;
import org.openapis.openapi.models.shared.ScriptHandler;
import org.openapis.openapi.models.shared.StandardSchedulerSettings;
import org.openapis.openapi.models.shared.StaticFilesHandler;
import org.openapis.openapi.models.shared.UrlMap;
import org.openapis.openapi.models.shared.UrlMapAuthFailActionEnum;
import org.openapis.openapi.models.shared.UrlMapLoginEnum;
import org.openapis.openapi.models.shared.UrlMapRedirectHttpResponseCodeEnum;
import org.openapis.openapi.models.shared.UrlMapSecurityLevelEnum;
import org.openapis.openapi.models.shared.Version;
import org.openapis.openapi.models.shared.VersionInboundServicesEnum;
import org.openapis.openapi.models.shared.VersionServingStatusEnum;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.VpcAccessConnector;
import org.openapis.openapi.models.shared.VpcAccessConnectorEgressSettingEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.ZipInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesVersionsCreateRequest req = new AppengineAppsServicesVersionsCreateRequest("corporis", "reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                version = new Version() {{
                    apiConfig = new ApiConfigHandler() {{
                        authFailAction = ApiConfigHandlerAuthFailActionEnum.AUTH_FAIL_ACTION_REDIRECT;
                        login = ApiConfigHandlerLoginEnum.LOGIN_REQUIRED;
                        script = "aliquid";
                        securityLevel = ApiConfigHandlerSecurityLevelEnum.SECURE_UNSPECIFIED;
                        url = "cum";
                    }};;
                    appEngineApis = false;
                    automaticScaling = new AutomaticScaling() {{
                        coolDownPeriod = "consectetur";
                        cpuUtilization = new CpuUtilization() {{
                            aggregationWindowLength = "in";
                            targetUtilization = 3485.19;
                        }};;
                        diskUtilization = new DiskUtilization() {{
                            targetReadBytesPerSecond = 937285;
                            targetReadOpsPerSecond = 814967;
                            targetWriteBytesPerSecond = 257233;
                            targetWriteOpsPerSecond = 985492;
                        }};;
                        maxConcurrentRequests = 381760;
                        maxIdleInstances = 968972;
                        maxPendingLatency = "quidem";
                        maxTotalInstances = 904949;
                        minIdleInstances = 897071;
                        minPendingLatency = "dolore";
                        minTotalInstances = 121059;
                        networkUtilization = new NetworkUtilization() {{
                            targetReceivedBytesPerSecond = 992012;
                            targetReceivedPacketsPerSecond = 241545;
                            targetSentBytesPerSecond = 249420;
                            targetSentPacketsPerSecond = 228263;
                        }};;
                        requestUtilization = new RequestUtilization() {{
                            targetConcurrentRequests = 105906;
                            targetRequestCountPerSecond = 489509;
                        }};;
                        standardSchedulerSettings = new StandardSchedulerSettings() {{
                            maxInstances = 950953;
                            minInstances = 891523;
                            targetCpuUtilization = 2334.2;
                            targetThroughputUtilization = 3581.07;
                        }};;
                    }};;
                    basicScaling = new BasicScaling() {{
                        idleTimeout = "harum";
                        maxInstances = 385237;
                    }};;
                    betaSettings = new java.util.HashMap<String, String>() {{
                        put("voluptates", "libero");
                    }};
                    buildEnvVariables = new java.util.HashMap<String, String>() {{
                        put("accusamus", "similique");
                    }};
                    createTime = "tempora";
                    createdBy = "aspernatur";
                    defaultExpiration = "voluptas";
                    deployment = new Deployment() {{
                        cloudBuildOptions = new CloudBuildOptions() {{
                            appYamlPath = "voluptas";
                            cloudBuildTimeout = "voluptas";
                        }};;
                        container = new ContainerInfo() {{
                            image = "minima";
                        }};;
                        files = new java.util.HashMap<String, org.openapis.openapi.models.shared.FileInfo>() {{
                            put("dolorum", new FileInfo() {{
                                mimeType = "adipisci";
                                sha1Sum = "minus";
                                sourceUrl = "dolores";
                            }});
                            put("blanditiis", new FileInfo() {{
                                mimeType = "in";
                                sha1Sum = "dolore";
                                sourceUrl = "aliquam";
                            }});
                            put("officiis", new FileInfo() {{
                                mimeType = "temporibus";
                                sha1Sum = "ullam";
                                sourceUrl = "adipisci";
                            }});
                        }};
                        zip = new ZipInfo() {{
                            filesCount = 738391;
                            sourceUrl = "blanditiis";
                        }};;
                    }};;
                    diskUsageBytes = "quas";
                    endpointsApiService = new EndpointsApiService() {{
                        configId = "hic";
                        disableTraceSampling = false;
                        name = "Molly Lowe";
                        rolloutStrategy = EndpointsApiServiceRolloutStrategyEnum.MANAGED;
                    }};;
                    entrypoint = new Entrypoint() {{
                        shell = "exercitationem";
                    }};;
                    env = "nobis";
                    envVariables = new java.util.HashMap<String, String>() {{
                        put("rerum", "sed");
                    }};
                    errorHandlers = new org.openapis.openapi.models.shared.ErrorHandler[]{{
                        add(new ErrorHandler() {{
                            errorCode = ErrorHandlerErrorCodeEnum.ERROR_CODE_UNSPECIFIED;
                            mimeType = "asperiores";
                            staticFile = "facilis";
                        }}),
                        add(new ErrorHandler() {{
                            errorCode = ErrorHandlerErrorCodeEnum.ERROR_CODE_OVER_QUOTA;
                            mimeType = "expedita";
                            staticFile = "ab";
                        }}),
                        add(new ErrorHandler() {{
                            errorCode = ErrorHandlerErrorCodeEnum.ERROR_CODE_DOS_API_DENIAL;
                            mimeType = "dolore";
                            staticFile = "laborum";
                        }}),
                        add(new ErrorHandler() {{
                            errorCode = ErrorHandlerErrorCodeEnum.ERROR_CODE_UNSPECIFIED;
                            mimeType = "in";
                            staticFile = "commodi";
                        }}),
                    }};
                    flexibleRuntimeSettings = new FlexibleRuntimeSettings() {{
                        operatingSystem = "quidem";
                        runtimeVersion = "explicabo";
                    }};;
                    handlers = new org.openapis.openapi.models.shared.UrlMap[]{{
                        add(new UrlMap() {{
                            apiEndpoint = new ApiEndpointHandler() {{
                                scriptPath = "unde";
                            }};
                            authFailAction = UrlMapAuthFailActionEnum.AUTH_FAIL_ACTION_UNSPECIFIED;
                            login = UrlMapLoginEnum.LOGIN_OPTIONAL;
                            redirectHttpResponseCode = UrlMapRedirectHttpResponseCodeEnum.REDIRECT_HTTP_RESPONSE_CODE307;
                            script = new ScriptHandler() {{
                                scriptPath = "debitis";
                            }};
                            securityLevel = UrlMapSecurityLevelEnum.SECURE_UNSPECIFIED;
                            staticFiles = new StaticFilesHandler() {{
                                applicationReadable = false;
                                expiration = "reiciendis";
                                httpHeaders = new java.util.HashMap<String, String>() {{
                                    put("corrupti", "maiores");
                                }};
                                mimeType = "incidunt";
                                path = "sed";
                                requireMatchingFile = false;
                                uploadPathRegex = "provident";
                            }};
                            urlRegex = "eius";
                        }}),
                        add(new UrlMap() {{
                            apiEndpoint = new ApiEndpointHandler() {{
                                scriptPath = "necessitatibus";
                            }};
                            authFailAction = UrlMapAuthFailActionEnum.AUTH_FAIL_ACTION_UNSPECIFIED;
                            login = UrlMapLoginEnum.LOGIN_OPTIONAL;
                            redirectHttpResponseCode = UrlMapRedirectHttpResponseCodeEnum.REDIRECT_HTTP_RESPONSE_CODE302;
                            script = new ScriptHandler() {{
                                scriptPath = "quos";
                            }};
                            securityLevel = UrlMapSecurityLevelEnum.SECURE_ALWAYS;
                            staticFiles = new StaticFilesHandler() {{
                                applicationReadable = false;
                                expiration = "tempora";
                                httpHeaders = new java.util.HashMap<String, String>() {{
                                    put("voluptate", "reiciendis");
                                    put("ex", "sit");
                                }};
                                mimeType = "non";
                                path = "officiis";
                                requireMatchingFile = false;
                                uploadPathRegex = "praesentium";
                            }};
                            urlRegex = "facilis";
                        }}),
                    }};
                    healthCheck = new HealthCheck() {{
                        checkInterval = "quaerat";
                        disableHealthCheck = false;
                        healthyThreshold = 277773L;
                        host = "ipsam";
                        restartThreshold = 894864L;
                        timeout = "rem";
                        unhealthyThreshold = 26522L;
                    }};;
                    id = "ca55efd2-0e45-47e1-858b-6a89fbe3a5aa";
                    inboundServices = new org.openapis.openapi.models.shared.VersionInboundServicesEnum[]{{
                        add(VersionInboundServicesEnum.INBOUND_SERVICE_CHANNEL_PRESENCE),
                        add(VersionInboundServicesEnum.INBOUND_SERVICE_MAIL_BOUNCE),
                        add(VersionInboundServicesEnum.INBOUND_SERVICE_XMPP_MESSAGE),
                    }};
                    instanceClass = "fugit";
                    libraries = new org.openapis.openapi.models.shared.Library[]{{
                        add(new Library() {{
                            name = "George Nicolas";
                            version = "consequatur";
                        }}),
                        add(new Library() {{
                            name = "Brittany Bailey";
                            version = "repudiandae";
                        }}),
                    }};
                    livenessCheck = new LivenessCheck() {{
                        checkInterval = "corporis";
                        failureThreshold = 89494L;
                        host = "blanditiis";
                        initialDelay = "ex";
                        path = "sed";
                        successThreshold = 24313L;
                        timeout = "vel";
                    }};;
                    manualScaling = new ManualScaling() {{
                        instances = 342611;
                    }};;
                    name = "Evan Altenwerth";
                    network = new Network() {{
                        forwardedPorts = new String[]{{
                            add("harum"),
                        }};
                        instanceIpMode = NetworkInstanceIpModeEnum.INSTANCE_IP_MODE_UNSPECIFIED;
                        instanceTag = "architecto";
                        name = "Francisco Powlowski";
                        sessionAffinity = false;
                        subnetworkName = "nam";
                    }};;
                    nobuildFilesRegex = "tenetur";
                    readinessCheck = new ReadinessCheck() {{
                        appStartTimeout = "laboriosam";
                        checkInterval = "alias";
                        failureThreshold = 227084L;
                        host = "deserunt";
                        path = "voluptate";
                        successThreshold = 600392L;
                        timeout = "reiciendis";
                    }};;
                    resources = new Resources() {{
                        cpu = 5887.4;
                        diskGb = 8338.19;
                        kmsKeyReference = "delectus";
                        memoryGb = 9147.91;
                        volumes = new org.openapis.openapi.models.shared.Volume[]{{
                            add(new Volume() {{
                                name = "Rickey Kiehn";
                                sizeGb = 5098.07;
                                volumeType = "mollitia";
                            }}),
                        }};
                    }};;
                    runtime = "veniam";
                    runtimeApiVersion = "voluptatem";
                    runtimeChannel = "quisquam";
                    runtimeMainExecutablePath = "repudiandae";
                    serviceAccount = "quasi";
                    servingStatus = VersionServingStatusEnum.SERVING;
                    threadsafe = false;
                    versionUrl = "reprehenderit";
                    vm = false;
                    vpcAccessConnector = new VpcAccessConnector() {{
                        egressSetting = VpcAccessConnectorEgressSettingEnum.PRIVATE_IP_RANGES;
                        name = "Sam Powlowski IV";
                    }};;
                    zones = new String[]{{
                        add("assumenda"),
                    }};
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "officiis";
                key = "officiis";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "minima";
                uploadProtocol = "aspernatur";
            }};            

            AppengineAppsServicesVersionsCreateResponse res = sdk.apps.appengineAppsServicesVersionsCreate(req, new AppengineAppsServicesVersionsCreateSecurity("ex", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesVersionsDelete

Deletes an existing Version resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsDeleteRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsDeleteResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesVersionsDeleteRequest req = new AppengineAppsServicesVersionsDeleteRequest("corrupti", "at", "error") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "atque";
                fields = "atque";
                key = "sunt";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "repellendus";
                uploadProtocol = "labore";
            }};            

            AppengineAppsServicesVersionsDeleteResponse res = sdk.apps.appengineAppsServicesVersionsDelete(req, new AppengineAppsServicesVersionsDeleteSecurity("reiciendis", "doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesVersionsGet

Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsGetSecurityOption3;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesVersionsGetRequest req = new AppengineAppsServicesVersionsGetRequest("repudiandae", "dicta", "accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "velit";
                key = "a";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "saepe";
                uploadProtocol = "consequuntur";
                view = AppengineAppsServicesVersionsGetViewEnum.FULL;
            }};            

            AppengineAppsServicesVersionsGetResponse res = sdk.apps.appengineAppsServicesVersionsGet(req, new AppengineAppsServicesVersionsGetSecurity() {{
                option1 = new AppengineAppsServicesVersionsGetSecurityOption1("officiis", "perspiciatis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.version != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesVersionsInstancesDebug

Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesDebugRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesDebugResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesDebugSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DebugInstanceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesVersionsInstancesDebugRequest req = new AppengineAppsServicesVersionsInstancesDebugRequest("in", "adipisci", "eveniet", "occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                debugInstanceRequest = new DebugInstanceRequest() {{
                    sshKey = "fugit";
                }};;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "error";
                key = "illo";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "eveniet";
                uploadProtocol = "non";
            }};            

            AppengineAppsServicesVersionsInstancesDebugResponse res = sdk.apps.appengineAppsServicesVersionsInstancesDebug(req, new AppengineAppsServicesVersionsInstancesDebugSecurity("vero", "doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesVersionsInstancesDelete

Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesDeleteRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesDeleteResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesVersionsInstancesDeleteRequest req = new AppengineAppsServicesVersionsInstancesDeleteRequest("iure", "ipsa", "totam", "quae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eveniet";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "iure";
                key = "necessitatibus";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "distinctio";
                uploadProtocol = "voluptatum";
            }};            

            AppengineAppsServicesVersionsInstancesDeleteResponse res = sdk.apps.appengineAppsServicesVersionsInstancesDelete(req, new AppengineAppsServicesVersionsInstancesDeleteSecurity("rem", "aliquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesVersionsInstancesGet

Gets instance information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesGetRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesGetResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesGetSecurity;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesGetSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesGetSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesVersionsInstancesGetRequest req = new AppengineAppsServicesVersionsInstancesGetRequest("ad", "repellat", "alias", "corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "alias";
                key = "maiores";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "id";
                uploadProtocol = "minima";
            }};            

            AppengineAppsServicesVersionsInstancesGetResponse res = sdk.apps.appengineAppsServicesVersionsInstancesGet(req, new AppengineAppsServicesVersionsInstancesGetSecurity() {{
                option1 = new AppengineAppsServicesVersionsInstancesGetSecurityOption1("dolore", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesVersionsInstancesList

Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesListRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesListResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsInstancesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesVersionsInstancesListRequest req = new AppengineAppsServicesVersionsInstancesListRequest("nesciunt", "quae", "recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "ut";
                key = "culpa";
                oauthToken = "adipisci";
                pageSize = 890653L;
                pageToken = "laudantium";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "nemo";
                uploadProtocol = "recusandae";
            }};            

            AppengineAppsServicesVersionsInstancesListResponse res = sdk.apps.appengineAppsServicesVersionsInstancesList(req, new AppengineAppsServicesVersionsInstancesListSecurity() {{
                option1 = new AppengineAppsServicesVersionsInstancesListSecurityOption1("esse", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesVersionsList

Lists the versions of a service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsListRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsListResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsListSecurity;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsListSecurityOption1;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsListSecurityOption2;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsListSecurityOption3;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesVersionsListRequest req = new AppengineAppsServicesVersionsListRequest("quis", "eum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "quasi";
                key = "animi";
                oauthToken = "nostrum";
                pageSize = 652309L;
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "animi";
                uploadProtocol = "ex";
                view = AppengineAppsServicesVersionsListViewEnum.BASIC;
            }};            

            AppengineAppsServicesVersionsListResponse res = sdk.apps.appengineAppsServicesVersionsList(req, new AppengineAppsServicesVersionsListSecurity() {{
                option1 = new AppengineAppsServicesVersionsListSecurityOption1("accusantium", "repellat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appengineAppsServicesVersionsPatch

Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsPatchRequest;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsPatchResponse;
import org.openapis.openapi.models.operations.AppengineAppsServicesVersionsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApiConfigHandler;
import org.openapis.openapi.models.shared.ApiConfigHandlerAuthFailActionEnum;
import org.openapis.openapi.models.shared.ApiConfigHandlerLoginEnum;
import org.openapis.openapi.models.shared.ApiConfigHandlerSecurityLevelEnum;
import org.openapis.openapi.models.shared.ApiEndpointHandler;
import org.openapis.openapi.models.shared.AutomaticScaling;
import org.openapis.openapi.models.shared.BasicScaling;
import org.openapis.openapi.models.shared.CloudBuildOptions;
import org.openapis.openapi.models.shared.ContainerInfo;
import org.openapis.openapi.models.shared.CpuUtilization;
import org.openapis.openapi.models.shared.Deployment;
import org.openapis.openapi.models.shared.DiskUtilization;
import org.openapis.openapi.models.shared.EndpointsApiService;
import org.openapis.openapi.models.shared.EndpointsApiServiceRolloutStrategyEnum;
import org.openapis.openapi.models.shared.Entrypoint;
import org.openapis.openapi.models.shared.ErrorHandler;
import org.openapis.openapi.models.shared.ErrorHandlerErrorCodeEnum;
import org.openapis.openapi.models.shared.FileInfo;
import org.openapis.openapi.models.shared.FlexibleRuntimeSettings;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.Library;
import org.openapis.openapi.models.shared.LivenessCheck;
import org.openapis.openapi.models.shared.ManualScaling;
import org.openapis.openapi.models.shared.Network;
import org.openapis.openapi.models.shared.NetworkInstanceIpModeEnum;
import org.openapis.openapi.models.shared.NetworkUtilization;
import org.openapis.openapi.models.shared.ReadinessCheck;
import org.openapis.openapi.models.shared.RequestUtilization;
import org.openapis.openapi.models.shared.Resources;
import org.openapis.openapi.models.shared.ScriptHandler;
import org.openapis.openapi.models.shared.StandardSchedulerSettings;
import org.openapis.openapi.models.shared.StaticFilesHandler;
import org.openapis.openapi.models.shared.UrlMap;
import org.openapis.openapi.models.shared.UrlMapAuthFailActionEnum;
import org.openapis.openapi.models.shared.UrlMapLoginEnum;
import org.openapis.openapi.models.shared.UrlMapRedirectHttpResponseCodeEnum;
import org.openapis.openapi.models.shared.UrlMapSecurityLevelEnum;
import org.openapis.openapi.models.shared.Version;
import org.openapis.openapi.models.shared.VersionInboundServicesEnum;
import org.openapis.openapi.models.shared.VersionServingStatusEnum;
import org.openapis.openapi.models.shared.Volume;
import org.openapis.openapi.models.shared.VpcAccessConnector;
import org.openapis.openapi.models.shared.VpcAccessConnectorEgressSettingEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.ZipInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsServicesVersionsPatchRequest req = new AppengineAppsServicesVersionsPatchRequest("doloribus", "ullam", "in") {{
                dollarXgafv = XgafvEnum.TWO;
                version = new Version() {{
                    apiConfig = new ApiConfigHandler() {{
                        authFailAction = ApiConfigHandlerAuthFailActionEnum.AUTH_FAIL_ACTION_UNAUTHORIZED;
                        login = ApiConfigHandlerLoginEnum.LOGIN_ADMIN;
                        script = "laborum";
                        securityLevel = ApiConfigHandlerSecurityLevelEnum.SECURE_ALWAYS;
                        url = "modi";
                    }};;
                    appEngineApis = false;
                    automaticScaling = new AutomaticScaling() {{
                        coolDownPeriod = "voluptatibus";
                        cpuUtilization = new CpuUtilization() {{
                            aggregationWindowLength = "molestias";
                            targetUtilization = 8897.94;
                        }};;
                        diskUtilization = new DiskUtilization() {{
                            targetReadBytesPerSecond = 956933;
                            targetReadOpsPerSecond = 764562;
                            targetWriteBytesPerSecond = 113486;
                            targetWriteOpsPerSecond = 698249;
                        }};;
                        maxConcurrentRequests = 272229;
                        maxIdleInstances = 335498;
                        maxPendingLatency = "inventore";
                        maxTotalInstances = 147685;
                        minIdleInstances = 765271;
                        minPendingLatency = "quae";
                        minTotalInstances = 21688;
                        networkUtilization = new NetworkUtilization() {{
                            targetReceivedBytesPerSecond = 241901;
                            targetReceivedPacketsPerSecond = 137251;
                            targetSentBytesPerSecond = 432281;
                            targetSentPacketsPerSecond = 260628;
                        }};;
                        requestUtilization = new RequestUtilization() {{
                            targetConcurrentRequests = 521996;
                            targetRequestCountPerSecond = 871083;
                        }};;
                        standardSchedulerSettings = new StandardSchedulerSettings() {{
                            maxInstances = 773084;
                            minInstances = 179410;
                            targetCpuUtilization = 9587.41;
                            targetThroughputUtilization = 4332.79;
                        }};;
                    }};;
                    basicScaling = new BasicScaling() {{
                        idleTimeout = "dicta";
                        maxInstances = 325118;
                    }};;
                    betaSettings = new java.util.HashMap<String, String>() {{
                        put("cupiditate", "provident");
                    }};
                    buildEnvVariables = new java.util.HashMap<String, String>() {{
                        put("soluta", "hic");
                        put("illum", "eaque");
                        put("earum", "perspiciatis");
                        put("maiores", "debitis");
                    }};
                    createTime = "aliquid";
                    createdBy = "porro";
                    defaultExpiration = "suscipit";
                    deployment = new Deployment() {{
                        cloudBuildOptions = new CloudBuildOptions() {{
                            appYamlPath = "dolorem";
                            cloudBuildTimeout = "fugit";
                        }};;
                        container = new ContainerInfo() {{
                            image = "cumque";
                        }};;
                        files = new java.util.HashMap<String, org.openapis.openapi.models.shared.FileInfo>() {{
                            put("ratione", new FileInfo() {{
                                mimeType = "animi";
                                sha1Sum = "necessitatibus";
                                sourceUrl = "nulla";
                            }});
                            put("consequatur", new FileInfo() {{
                                mimeType = "quasi";
                                sha1Sum = "et";
                                sourceUrl = "ducimus";
                            }});
                            put("natus", new FileInfo() {{
                                mimeType = "occaecati";
                                sha1Sum = "suscipit";
                                sourceUrl = "adipisci";
                            }});
                        }};
                        zip = new ZipInfo() {{
                            filesCount = 96562;
                            sourceUrl = "magni";
                        }};;
                    }};;
                    diskUsageBytes = "doloribus";
                    endpointsApiService = new EndpointsApiService() {{
                        configId = "nulla";
                        disableTraceSampling = false;
                        name = "Jeffrey Goldner";
                        rolloutStrategy = EndpointsApiServiceRolloutStrategyEnum.UNSPECIFIED_ROLLOUT_STRATEGY;
                    }};;
                    entrypoint = new Entrypoint() {{
                        shell = "iusto";
                    }};;
                    env = "esse";
                    envVariables = new java.util.HashMap<String, String>() {{
                        put("maiores", "reiciendis");
                        put("vel", "architecto");
                        put("fugiat", "doloremque");
                    }};
                    errorHandlers = new org.openapis.openapi.models.shared.ErrorHandler[]{{
                        add(new ErrorHandler() {{
                            errorCode = ErrorHandlerErrorCodeEnum.ERROR_CODE_OVER_QUOTA;
                            mimeType = "tempora";
                            staticFile = "esse";
                        }}),
                    }};
                    flexibleRuntimeSettings = new FlexibleRuntimeSettings() {{
                        operatingSystem = "ex";
                        runtimeVersion = "consectetur";
                    }};;
                    handlers = new org.openapis.openapi.models.shared.UrlMap[]{{
                        add(new UrlMap() {{
                            apiEndpoint = new ApiEndpointHandler() {{
                                scriptPath = "ipsa";
                            }};
                            authFailAction = UrlMapAuthFailActionEnum.AUTH_FAIL_ACTION_UNAUTHORIZED;
                            login = UrlMapLoginEnum.LOGIN_UNSPECIFIED;
                            redirectHttpResponseCode = UrlMapRedirectHttpResponseCodeEnum.REDIRECT_HTTP_RESPONSE_CODE301;
                            script = new ScriptHandler() {{
                                scriptPath = "fugiat";
                            }};
                            securityLevel = UrlMapSecurityLevelEnum.SECURE_OPTIONAL;
                            staticFiles = new StaticFilesHandler() {{
                                applicationReadable = false;
                                expiration = "aliquid";
                                httpHeaders = new java.util.HashMap<String, String>() {{
                                    put("suscipit", "aliquid");
                                    put("perferendis", "eum");
                                    put("voluptas", "iste");
                                }};
                                mimeType = "id";
                                path = "ab";
                                requireMatchingFile = false;
                                uploadPathRegex = "error";
                            }};
                            urlRegex = "possimus";
                        }}),
                        add(new UrlMap() {{
                            apiEndpoint = new ApiEndpointHandler() {{
                                scriptPath = "voluptates";
                            }};
                            authFailAction = UrlMapAuthFailActionEnum.AUTH_FAIL_ACTION_REDIRECT;
                            login = UrlMapLoginEnum.LOGIN_ADMIN;
                            redirectHttpResponseCode = UrlMapRedirectHttpResponseCodeEnum.REDIRECT_HTTP_RESPONSE_CODE303;
                            script = new ScriptHandler() {{
                                scriptPath = "ad";
                            }};
                            securityLevel = UrlMapSecurityLevelEnum.SECURE_NEVER;
                            staticFiles = new StaticFilesHandler() {{
                                applicationReadable = false;
                                expiration = "enim";
                                httpHeaders = new java.util.HashMap<String, String>() {{
                                    put("repellendus", "ex");
                                }};
                                mimeType = "quo";
                                path = "ex";
                                requireMatchingFile = false;
                                uploadPathRegex = "ut";
                            }};
                            urlRegex = "ad";
                        }}),
                    }};
                    healthCheck = new HealthCheck() {{
                        checkInterval = "expedita";
                        disableHealthCheck = false;
                        healthyThreshold = 29950L;
                        host = "molestias";
                        restartThreshold = 737254L;
                        timeout = "aliquid";
                        unhealthyThreshold = 109784L;
                    }};;
                    id = "891baa0f-e1ad-4e00-8e6f-8c5f350d8cdb";
                    inboundServices = new org.openapis.openapi.models.shared.VersionInboundServicesEnum[]{{
                        add(VersionInboundServicesEnum.INBOUND_SERVICE_XMPP_SUBSCRIBE),
                        add(VersionInboundServicesEnum.INBOUND_SERVICE_MAIL_BOUNCE),
                    }};
                    instanceClass = "aliquam";
                    libraries = new org.openapis.openapi.models.shared.Library[]{{
                        add(new Library() {{
                            name = "Peter Goodwin Sr.";
                            version = "sit";
                        }}),
                    }};
                    livenessCheck = new LivenessCheck() {{
                        checkInterval = "modi";
                        failureThreshold = 144286L;
                        host = "ab";
                        initialDelay = "laudantium";
                        path = "quae";
                        successThreshold = 222658L;
                        timeout = "fugiat";
                    }};;
                    manualScaling = new ManualScaling() {{
                        instances = 369490;
                    }};;
                    name = "Cynthia Macejkovic";
                    network = new Network() {{
                        forwardedPorts = new String[]{{
                            add("esse"),
                            add("necessitatibus"),
                            add("sed"),
                            add("veniam"),
                        }};
                        instanceIpMode = NetworkInstanceIpModeEnum.INSTANCE_IP_MODE_UNSPECIFIED;
                        instanceTag = "expedita";
                        name = "Kristin Legros";
                        sessionAffinity = false;
                        subnetworkName = "ab";
                    }};;
                    nobuildFilesRegex = "porro";
                    readinessCheck = new ReadinessCheck() {{
                        appStartTimeout = "autem";
                        checkInterval = "nobis";
                        failureThreshold = 388319L;
                        host = "recusandae";
                        path = "consequuntur";
                        successThreshold = 28952L;
                        timeout = "exercitationem";
                    }};;
                    resources = new Resources() {{
                        cpu = 8956.92;
                        diskGb = 956.19;
                        kmsKeyReference = "nisi";
                        memoryGb = 8711.03;
                        volumes = new org.openapis.openapi.models.shared.Volume[]{{
                            add(new Volume() {{
                                name = "Kerry Dickinson";
                                sizeGb = 7592.83;
                                volumeType = "occaecati";
                            }}),
                            add(new Volume() {{
                                name = "Allison Kuvalis";
                                sizeGb = 2540.25;
                                volumeType = "nemo";
                            }}),
                            add(new Volume() {{
                                name = "Frederick Cole";
                                sizeGb = 6817.4;
                                volumeType = "laudantium";
                            }}),
                            add(new Volume() {{
                                name = "Joyce Leffler III";
                                sizeGb = 1598.45;
                                volumeType = "consectetur";
                            }}),
                        }};
                    }};;
                    runtime = "aperiam";
                    runtimeApiVersion = "cupiditate";
                    runtimeChannel = "reiciendis";
                    runtimeMainExecutablePath = "soluta";
                    serviceAccount = "alias";
                    servingStatus = VersionServingStatusEnum.SERVING;
                    threadsafe = false;
                    versionUrl = "eos";
                    vm = false;
                    vpcAccessConnector = new VpcAccessConnector() {{
                        egressSetting = VpcAccessConnectorEgressSettingEnum.ALL_TRAFFIC;
                        name = "Ernest Bode";
                    }};;
                    zones = new String[]{{
                        add("distinctio"),
                        add("omnis"),
                        add("delectus"),
                        add("minima"),
                    }};
                }};;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "temporibus";
                key = "quos";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "itaque";
                updateMask = "commodi";
                uploadType = "totam";
                uploadProtocol = "earum";
            }};            

            AppengineAppsServicesVersionsPatchResponse res = sdk.apps.appengineAppsServicesVersionsPatch(req, new AppengineAppsServicesVersionsPatchSecurity("modi", "nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
