import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://serverless.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Create a new Asset resource.
     */
    createAsset(req: operations.CreateAssetRequest, security: operations.CreateAssetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateAssetResponse>;
    /**
     * Create a new Build resource. At least one function version or asset version is required.
     */
    createBuild(req: operations.CreateBuildRequest, security: operations.CreateBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateBuildResponse>;
    /**
     * Create a new Deployment.
     */
    createDeployment(req: operations.CreateDeploymentRequest, security: operations.CreateDeploymentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     * Create a new environment.
     */
    createEnvironment(req: operations.CreateEnvironmentRequest, security: operations.CreateEnvironmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * Create a new Function resource.
     */
    createFunction(req: operations.CreateFunctionRequest, security: operations.CreateFunctionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateFunctionResponse>;
    /**
     * Create a new Service resource.
     */
    createService(req: operations.CreateServiceCreateServiceRequest, security: operations.CreateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * Create a new Variable.
     */
    createVariable(req: operations.CreateVariableRequest, security: operations.CreateVariableSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateVariableResponse>;
    /**
     * Delete an Asset resource.
     */
    deleteAsset(req: operations.DeleteAssetRequest, security: operations.DeleteAssetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteAssetResponse>;
    /**
     * Delete a Build resource.
     */
    deleteBuild(req: operations.DeleteBuildRequest, security: operations.DeleteBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteBuildResponse>;
    /**
     * Delete a specific environment.
     */
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, security: operations.DeleteEnvironmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * Delete a Function resource.
     */
    deleteFunction(req: operations.DeleteFunctionRequest, security: operations.DeleteFunctionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteFunctionResponse>;
    /**
     * Delete a Service resource.
     */
    deleteService(req: operations.DeleteServiceRequest, security: operations.DeleteServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * Delete a specific Variable.
     */
    deleteVariable(req: operations.DeleteVariableRequest, security: operations.DeleteVariableSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteVariableResponse>;
    /**
     * Retrieve a specific Asset resource.
     */
    fetchAsset(req: operations.FetchAssetRequest, security: operations.FetchAssetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAssetResponse>;
    /**
     * Retrieve a specific Asset Version.
     */
    fetchAssetVersion(req: operations.FetchAssetVersionRequest, security: operations.FetchAssetVersionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAssetVersionResponse>;
    /**
     * Retrieve a specific Build resource.
     */
    fetchBuild(req: operations.FetchBuildRequest, security: operations.FetchBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchBuildResponse>;
    /**
     * Retrieve a specific Build resource.
     */
    fetchBuildStatus(req: operations.FetchBuildStatusRequest, security: operations.FetchBuildStatusSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchBuildStatusResponse>;
    /**
     * Retrieve a specific Deployment.
     */
    fetchDeployment(req: operations.FetchDeploymentRequest, security: operations.FetchDeploymentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDeploymentResponse>;
    /**
     * Retrieve a specific environment.
     */
    fetchEnvironment(req: operations.FetchEnvironmentRequest, security: operations.FetchEnvironmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchEnvironmentResponse>;
    /**
     * Retrieve a specific Function resource.
     */
    fetchFunction(req: operations.FetchFunctionRequest, security: operations.FetchFunctionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFunctionResponse>;
    /**
     * Retrieve a specific Function Version resource.
     */
    fetchFunctionVersion(req: operations.FetchFunctionVersionRequest, security: operations.FetchFunctionVersionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFunctionVersionResponse>;
    /**
     * Retrieve a the content of a specific Function Version resource.
     */
    fetchFunctionVersionContent(req: operations.FetchFunctionVersionContentRequest, security: operations.FetchFunctionVersionContentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFunctionVersionContentResponse>;
    /**
     * Retrieve a specific log.
     */
    fetchLog(req: operations.FetchLogRequest, security: operations.FetchLogSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchLogResponse>;
    /**
     * Retrieve a specific Service resource.
     */
    fetchService(req: operations.FetchServiceRequest, security: operations.FetchServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    /**
     * Retrieve a specific Variable.
     */
    fetchVariable(req: operations.FetchVariableRequest, security: operations.FetchVariableSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchVariableResponse>;
    /**
     * Retrieve a list of all Assets.
     */
    listAsset(req: operations.ListAssetRequest, security: operations.ListAssetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAssetResponse>;
    /**
     * Retrieve a list of all Asset Versions.
     */
    listAssetVersion(req: operations.ListAssetVersionRequest, security: operations.ListAssetVersionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAssetVersionResponse>;
    /**
     * Retrieve a list of all Builds.
     */
    listBuild(req: operations.ListBuildRequest, security: operations.ListBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListBuildResponse>;
    /**
     * Retrieve a list of all Deployments.
     */
    listDeployment(req: operations.ListDeploymentRequest, security: operations.ListDeploymentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDeploymentResponse>;
    /**
     * Retrieve a list of all environments.
     */
    listEnvironment(req: operations.ListEnvironmentRequest, security: operations.ListEnvironmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentResponse>;
    /**
     * Retrieve a list of all Functions.
     */
    listFunction(req: operations.ListFunctionRequest, security: operations.ListFunctionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFunctionResponse>;
    /**
     * Retrieve a list of all Function Version resources.
     */
    listFunctionVersion(req: operations.ListFunctionVersionRequest, security: operations.ListFunctionVersionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFunctionVersionResponse>;
    /**
     * Retrieve a list of all logs.
     */
    listLog(req: operations.ListLogRequest, security: operations.ListLogSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListLogResponse>;
    /**
     * Retrieve a list of all Services.
     */
    listService(req: operations.ListServiceRequest, security: operations.ListServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    /**
     * Retrieve a list of all Variables.
     */
    listVariable(req: operations.ListVariableRequest, security: operations.ListVariableSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListVariableResponse>;
    /**
     * Update a specific Asset resource.
     */
    updateAsset(req: operations.UpdateAssetRequest, security: operations.UpdateAssetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateAssetResponse>;
    /**
     * Update a specific Function resource.
     */
    updateFunction(req: operations.UpdateFunctionRequest, security: operations.UpdateFunctionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateFunctionResponse>;
    /**
     * Update a specific Service resource.
     */
    updateService(req: operations.UpdateServiceRequest, security: operations.UpdateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    /**
     * Update a specific Variable.
     */
    updateVariable(req: operations.UpdateVariableRequest, security: operations.UpdateVariableSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateVariableResponse>;
}
