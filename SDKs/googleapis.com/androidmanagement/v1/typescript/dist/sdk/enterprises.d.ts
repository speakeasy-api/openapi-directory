import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Enterprises {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
     */
    androidmanagementEnterprisesCreate(req: operations.AndroidmanagementEnterprisesCreateRequest, security: operations.AndroidmanagementEnterprisesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesCreateResponse>;
    /**
     * Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
     */
    androidmanagementEnterprisesDevicesIssueCommand(req: operations.AndroidmanagementEnterprisesDevicesIssueCommandRequest, security: operations.AndroidmanagementEnterprisesDevicesIssueCommandSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesDevicesIssueCommandResponse>;
    /**
     * Lists devices for a given enterprise. Deleted devices are not returned in the response.
     */
    androidmanagementEnterprisesDevicesList(req: operations.AndroidmanagementEnterprisesDevicesListRequest, security: operations.AndroidmanagementEnterprisesDevicesListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesDevicesListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     */
    androidmanagementEnterprisesDevicesOperationsCancel(req: operations.AndroidmanagementEnterprisesDevicesOperationsCancelRequest, security: operations.AndroidmanagementEnterprisesDevicesOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesDevicesOperationsCancelResponse>;
    /**
     * Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
     */
    androidmanagementEnterprisesEnrollmentTokensCreate(req: operations.AndroidmanagementEnterprisesEnrollmentTokensCreateRequest, security: operations.AndroidmanagementEnterprisesEnrollmentTokensCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesEnrollmentTokensCreateResponse>;
    /**
     * Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
     */
    androidmanagementEnterprisesEnrollmentTokensList(req: operations.AndroidmanagementEnterprisesEnrollmentTokensListRequest, security: operations.AndroidmanagementEnterprisesEnrollmentTokensListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesEnrollmentTokensListResponse>;
    /**
     * Lists EMM-managed enterprises. Only BASIC fields are returned.
     */
    androidmanagementEnterprisesList(req: operations.AndroidmanagementEnterprisesListRequest, security: operations.AndroidmanagementEnterprisesListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesListResponse>;
    /**
     * Lists policies for a given enterprise.
     */
    androidmanagementEnterprisesPoliciesList(req: operations.AndroidmanagementEnterprisesPoliciesListRequest, security: operations.AndroidmanagementEnterprisesPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesPoliciesListResponse>;
    /**
     * Creates a web app.
     */
    androidmanagementEnterprisesWebAppsCreate(req: operations.AndroidmanagementEnterprisesWebAppsCreateRequest, security: operations.AndroidmanagementEnterprisesWebAppsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebAppsCreateResponse>;
    /**
     * Deletes a web app.
     */
    androidmanagementEnterprisesWebAppsDelete(req: operations.AndroidmanagementEnterprisesWebAppsDeleteRequest, security: operations.AndroidmanagementEnterprisesWebAppsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebAppsDeleteResponse>;
    /**
     * Gets a web app.
     */
    androidmanagementEnterprisesWebAppsGet(req: operations.AndroidmanagementEnterprisesWebAppsGetRequest, security: operations.AndroidmanagementEnterprisesWebAppsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebAppsGetResponse>;
    /**
     * Lists web apps for a given enterprise.
     */
    androidmanagementEnterprisesWebAppsList(req: operations.AndroidmanagementEnterprisesWebAppsListRequest, security: operations.AndroidmanagementEnterprisesWebAppsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebAppsListResponse>;
    /**
     * Updates a web app.
     */
    androidmanagementEnterprisesWebAppsPatch(req: operations.AndroidmanagementEnterprisesWebAppsPatchRequest, security: operations.AndroidmanagementEnterprisesWebAppsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebAppsPatchResponse>;
    /**
     * Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.
     */
    androidmanagementEnterprisesWebTokensCreate(req: operations.AndroidmanagementEnterprisesWebTokensCreateRequest, security: operations.AndroidmanagementEnterprisesWebTokensCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebTokensCreateResponse>;
}
