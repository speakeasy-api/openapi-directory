import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Apps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Uploads the specified SSL certificate.
     */
    appengineAppsAuthorizedCertificatesCreate(req: operations.AppengineAppsAuthorizedCertificatesCreateRequest, security: operations.AppengineAppsAuthorizedCertificatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesCreateResponse>;
    /**
     * Deletes the specified SSL certificate.
     */
    appengineAppsAuthorizedCertificatesDelete(req: operations.AppengineAppsAuthorizedCertificatesDeleteRequest, security: operations.AppengineAppsAuthorizedCertificatesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesDeleteResponse>;
    /**
     * Gets the specified SSL certificate.
     */
    appengineAppsAuthorizedCertificatesGet(req: operations.AppengineAppsAuthorizedCertificatesGetRequest, security: operations.AppengineAppsAuthorizedCertificatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesGetResponse>;
    /**
     * Lists all SSL certificates the user is authorized to administer.
     */
    appengineAppsAuthorizedCertificatesList(req: operations.AppengineAppsAuthorizedCertificatesListRequest, security: operations.AppengineAppsAuthorizedCertificatesListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesListResponse>;
    /**
     * Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
     */
    appengineAppsAuthorizedCertificatesPatch(req: operations.AppengineAppsAuthorizedCertificatesPatchRequest, security: operations.AppengineAppsAuthorizedCertificatesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedCertificatesPatchResponse>;
    /**
     * Lists all domains the user is authorized to administer.
     */
    appengineAppsAuthorizedDomainsList(req: operations.AppengineAppsAuthorizedDomainsListRequest, security: operations.AppengineAppsAuthorizedDomainsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsAuthorizedDomainsListResponse>;
    /**
     * Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
     */
    appengineAppsCreate(req: operations.AppengineAppsCreateRequest, security: operations.AppengineAppsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsCreateResponse>;
    /**
     * Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
     */
    appengineAppsDomainMappingsCreate(req: operations.AppengineAppsDomainMappingsCreateRequest, security: operations.AppengineAppsDomainMappingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsCreateResponse>;
    /**
     * Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
     */
    appengineAppsDomainMappingsDelete(req: operations.AppengineAppsDomainMappingsDeleteRequest, security: operations.AppengineAppsDomainMappingsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsDeleteResponse>;
    /**
     * Gets the specified domain mapping.
     */
    appengineAppsDomainMappingsGet(req: operations.AppengineAppsDomainMappingsGetRequest, security: operations.AppengineAppsDomainMappingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsGetResponse>;
    /**
     * Lists the domain mappings on an application.
     */
    appengineAppsDomainMappingsList(req: operations.AppengineAppsDomainMappingsListRequest, security: operations.AppengineAppsDomainMappingsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsListResponse>;
    /**
     * Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
     */
    appengineAppsDomainMappingsPatch(req: operations.AppengineAppsDomainMappingsPatchRequest, security: operations.AppengineAppsDomainMappingsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsDomainMappingsPatchResponse>;
    /**
     * Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
     */
    appengineAppsFirewallIngressRulesBatchUpdate(req: operations.AppengineAppsFirewallIngressRulesBatchUpdateRequest, security: operations.AppengineAppsFirewallIngressRulesBatchUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsFirewallIngressRulesBatchUpdateResponse>;
    /**
     * Creates a firewall rule for the application.
     */
    appengineAppsFirewallIngressRulesCreate(req: operations.AppengineAppsFirewallIngressRulesCreateRequest, security: operations.AppengineAppsFirewallIngressRulesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsFirewallIngressRulesCreateResponse>;
    /**
     * Deletes the specified firewall rule.
     */
    appengineAppsFirewallIngressRulesDelete(req: operations.AppengineAppsFirewallIngressRulesDeleteRequest, security: operations.AppengineAppsFirewallIngressRulesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsFirewallIngressRulesDeleteResponse>;
    /**
     * Gets the specified firewall rule.
     */
    appengineAppsFirewallIngressRulesGet(req: operations.AppengineAppsFirewallIngressRulesGetRequest, security: operations.AppengineAppsFirewallIngressRulesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsFirewallIngressRulesGetResponse>;
    /**
     * Lists the firewall rules of an application.
     */
    appengineAppsFirewallIngressRulesList(req: operations.AppengineAppsFirewallIngressRulesListRequest, security: operations.AppengineAppsFirewallIngressRulesListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsFirewallIngressRulesListResponse>;
    /**
     * Updates the specified firewall rule.
     */
    appengineAppsFirewallIngressRulesPatch(req: operations.AppengineAppsFirewallIngressRulesPatchRequest, security: operations.AppengineAppsFirewallIngressRulesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsFirewallIngressRulesPatchResponse>;
    /**
     * Gets information about an application.
     */
    appengineAppsGet(req: operations.AppengineAppsGetRequest, security: operations.AppengineAppsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsGetResponse>;
    /**
     * Gets information about a location.
     */
    appengineAppsLocationsGet(req: operations.AppengineAppsLocationsGetRequest, security: operations.AppengineAppsLocationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsLocationsGetResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    appengineAppsLocationsList(req: operations.AppengineAppsLocationsListRequest, security: operations.AppengineAppsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsLocationsListResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    appengineAppsOperationsGet(req: operations.AppengineAppsOperationsGetRequest, security: operations.AppengineAppsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     */
    appengineAppsOperationsList(req: operations.AppengineAppsOperationsListRequest, security: operations.AppengineAppsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsOperationsListResponse>;
    /**
     * Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
     */
    appengineAppsPatch(req: operations.AppengineAppsPatchRequest, security: operations.AppengineAppsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsPatchResponse>;
    /**
     * Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
     */
    appengineAppsRepair(req: operations.AppengineAppsRepairRequest, security: operations.AppengineAppsRepairSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsRepairResponse>;
    /**
     * Deletes the specified service and all enclosed versions.
     */
    appengineAppsServicesDelete(req: operations.AppengineAppsServicesDeleteRequest, security: operations.AppengineAppsServicesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesDeleteResponse>;
    /**
     * Gets the current configuration of the specified service.
     */
    appengineAppsServicesGet(req: operations.AppengineAppsServicesGetRequest, security: operations.AppengineAppsServicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesGetResponse>;
    /**
     * Lists all the services in the application.
     */
    appengineAppsServicesList(req: operations.AppengineAppsServicesListRequest, security: operations.AppengineAppsServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesListResponse>;
    /**
     * Updates the configuration of the specified service.
     */
    appengineAppsServicesPatch(req: operations.AppengineAppsServicesPatchRequest, security: operations.AppengineAppsServicesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesPatchResponse>;
    /**
     * Deploys code and resource files to a new version.
     */
    appengineAppsServicesVersionsCreate(req: operations.AppengineAppsServicesVersionsCreateRequest, security: operations.AppengineAppsServicesVersionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesVersionsCreateResponse>;
    /**
     * Deletes an existing Version resource.
     */
    appengineAppsServicesVersionsDelete(req: operations.AppengineAppsServicesVersionsDeleteRequest, security: operations.AppengineAppsServicesVersionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesVersionsDeleteResponse>;
    /**
     * Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
     */
    appengineAppsServicesVersionsGet(req: operations.AppengineAppsServicesVersionsGetRequest, security: operations.AppengineAppsServicesVersionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesVersionsGetResponse>;
    /**
     * Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
     */
    appengineAppsServicesVersionsInstancesDebug(req: operations.AppengineAppsServicesVersionsInstancesDebugRequest, security: operations.AppengineAppsServicesVersionsInstancesDebugSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesVersionsInstancesDebugResponse>;
    /**
     * Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
     */
    appengineAppsServicesVersionsInstancesDelete(req: operations.AppengineAppsServicesVersionsInstancesDeleteRequest, security: operations.AppengineAppsServicesVersionsInstancesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesVersionsInstancesDeleteResponse>;
    /**
     * Gets instance information.
     */
    appengineAppsServicesVersionsInstancesGet(req: operations.AppengineAppsServicesVersionsInstancesGetRequest, security: operations.AppengineAppsServicesVersionsInstancesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesVersionsInstancesGetResponse>;
    /**
     * Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
     */
    appengineAppsServicesVersionsInstancesList(req: operations.AppengineAppsServicesVersionsInstancesListRequest, security: operations.AppengineAppsServicesVersionsInstancesListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesVersionsInstancesListResponse>;
    /**
     * Lists the versions of a service.
     */
    appengineAppsServicesVersionsList(req: operations.AppengineAppsServicesVersionsListRequest, security: operations.AppengineAppsServicesVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesVersionsListResponse>;
    /**
     * Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)
     */
    appengineAppsServicesVersionsPatch(req: operations.AppengineAppsServicesVersionsPatchRequest, security: operations.AppengineAppsServicesVersionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AppengineAppsServicesVersionsPatchResponse>;
}
