import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new service configuration (version) for a managed service. This method only stores the service configuration. To roll out the service configuration to backend systems please call CreateServiceRollout. Only the 100 most recent service configurations and ones referenced by existing rollouts are kept for each service. The rest will be deleted eventually.
     */
    servicemanagementServicesConfigsCreate(req: operations.ServicemanagementServicesConfigsCreateRequest, security: operations.ServicemanagementServicesConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesConfigsCreateResponse>;
    /**
     * Gets a service configuration (version) for a managed service.
     */
    servicemanagementServicesConfigsGet(req: operations.ServicemanagementServicesConfigsGetRequest, security: operations.ServicemanagementServicesConfigsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesConfigsGetResponse>;
    /**
     * Lists the history of the service configuration for a managed service, from the newest to the oldest.
     */
    servicemanagementServicesConfigsList(req: operations.ServicemanagementServicesConfigsListRequest, security: operations.ServicemanagementServicesConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesConfigsListResponse>;
    /**
     * Creates a new service configuration (version) for a managed service based on user-supplied configuration source files (for example: OpenAPI Specification). This method stores the source configurations as well as the generated service configuration. To rollout the service configuration to other services, please call CreateServiceRollout. Only the 100 most recent configuration sources and ones referenced by existing service configurtions are kept for each service. The rest will be deleted eventually. Operation
     */
    servicemanagementServicesConfigsSubmit(req: operations.ServicemanagementServicesConfigsSubmitRequest, security: operations.ServicemanagementServicesConfigsSubmitSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesConfigsSubmitResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    servicemanagementServicesConsumersGetIamPolicy(req: operations.ServicemanagementServicesConsumersGetIamPolicyRequest, security: operations.ServicemanagementServicesConsumersGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesConsumersGetIamPolicyResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    servicemanagementServicesConsumersSetIamPolicy(req: operations.ServicemanagementServicesConsumersSetIamPolicyRequest, security: operations.ServicemanagementServicesConsumersSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesConsumersSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    servicemanagementServicesConsumersTestIamPermissions(req: operations.ServicemanagementServicesConsumersTestIamPermissionsRequest, security: operations.ServicemanagementServicesConsumersTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesConsumersTestIamPermissionsResponse>;
    /**
     * Creates a new managed service. A managed service is immutable, and is subject to mandatory 30-day data retention. You cannot move a service or recreate it within 30 days after deletion. One producer project can own no more than 500 services. For security and reliability purposes, a production service should be hosted in a dedicated producer project. Operation
     */
    servicemanagementServicesCreate(req: operations.ServicemanagementServicesCreateRequest, security: operations.ServicemanagementServicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesCreateResponse>;
    /**
     * Deletes a managed service. This method will change the service to the `Soft-Delete` state for 30 days. Within this period, service producers may call UndeleteService to restore the service. After 30 days, the service will be permanently deleted. Operation
     */
    servicemanagementServicesDelete(req: operations.ServicemanagementServicesDeleteRequest, security: operations.ServicemanagementServicesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesDeleteResponse>;
    /**
     * Generates and returns a report (errors, warnings and changes from existing configurations) associated with GenerateConfigReportRequest.new_value If GenerateConfigReportRequest.old_value is specified, GenerateConfigReportRequest will contain a single ChangeReport based on the comparison between GenerateConfigReportRequest.new_value and GenerateConfigReportRequest.old_value. If GenerateConfigReportRequest.old_value is not specified, this method will compare GenerateConfigReportRequest.new_value with the last pushed service configuration.
     */
    servicemanagementServicesGenerateConfigReport(req: operations.ServicemanagementServicesGenerateConfigReportRequest, security: operations.ServicemanagementServicesGenerateConfigReportSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesGenerateConfigReportResponse>;
    /**
     * Gets a managed service. Authentication is required unless the service is public.
     */
    servicemanagementServicesGet(req: operations.ServicemanagementServicesGetRequest, security: operations.ServicemanagementServicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesGetResponse>;
    /**
     * Gets a service configuration (version) for a managed service.
     */
    servicemanagementServicesGetConfig(req: operations.ServicemanagementServicesGetConfigRequest, security: operations.ServicemanagementServicesGetConfigSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesGetConfigResponse>;
    /**
     * Lists managed services. Returns all public services. For authenticated users, also returns all services the calling user has "servicemanagement.services.get" permission for.
     */
    servicemanagementServicesList(req: operations.ServicemanagementServicesListRequest, security: operations.ServicemanagementServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesListResponse>;
    /**
     * Creates a new service configuration rollout. Based on rollout, the Google Service Management will roll out the service configurations to different backend services. For example, the logging configuration will be pushed to Google Cloud Logging. Please note that any previous pending and running Rollouts and associated Operations will be automatically cancelled so that the latest Rollout will not be blocked by previous Rollouts. Only the 100 most recent (in any state) and the last 10 successful (if not already part of the set of 100 most recent) rollouts are kept for each service. The rest will be deleted eventually. Operation
     */
    servicemanagementServicesRolloutsCreate(req: operations.ServicemanagementServicesRolloutsCreateRequest, security: operations.ServicemanagementServicesRolloutsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesRolloutsCreateResponse>;
    /**
     * Gets a service configuration rollout.
     */
    servicemanagementServicesRolloutsGet(req: operations.ServicemanagementServicesRolloutsGetRequest, security: operations.ServicemanagementServicesRolloutsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesRolloutsGetResponse>;
    /**
     * Lists the history of the service configuration rollouts for a managed service, from the newest to the oldest.
     */
    servicemanagementServicesRolloutsList(req: operations.ServicemanagementServicesRolloutsListRequest, security: operations.ServicemanagementServicesRolloutsListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesRolloutsListResponse>;
    /**
     * Revives a previously deleted managed service. The method restores the service using the configuration at the time the service was deleted. The target service must exist and must have been deleted within the last 30 days. Operation
     */
    servicemanagementServicesUndelete(req: operations.ServicemanagementServicesUndeleteRequest, security: operations.ServicemanagementServicesUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ServicemanagementServicesUndeleteResponse>;
}
