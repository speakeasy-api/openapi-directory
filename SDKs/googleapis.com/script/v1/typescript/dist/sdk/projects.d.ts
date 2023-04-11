import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new, empty script project with no script files and a base manifest file.
     */
    scriptProjectsCreate(req: operations.ScriptProjectsCreateRequest, security: operations.ScriptProjectsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsCreateResponse>;
    /**
     * Creates a deployment of an Apps Script project.
     */
    scriptProjectsDeploymentsCreate(req: operations.ScriptProjectsDeploymentsCreateRequest, security: operations.ScriptProjectsDeploymentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsDeploymentsCreateResponse>;
    /**
     * Deletes a deployment of an Apps Script project.
     */
    scriptProjectsDeploymentsDelete(req: operations.ScriptProjectsDeploymentsDeleteRequest, security: operations.ScriptProjectsDeploymentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsDeploymentsDeleteResponse>;
    /**
     * Gets a deployment of an Apps Script project.
     */
    scriptProjectsDeploymentsGet(req: operations.ScriptProjectsDeploymentsGetRequest, security: operations.ScriptProjectsDeploymentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsDeploymentsGetResponse>;
    /**
     * Lists the deployments of an Apps Script project.
     */
    scriptProjectsDeploymentsList(req: operations.ScriptProjectsDeploymentsListRequest, security: operations.ScriptProjectsDeploymentsListSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsDeploymentsListResponse>;
    /**
     * Updates a deployment of an Apps Script project.
     */
    scriptProjectsDeploymentsUpdate(req: operations.ScriptProjectsDeploymentsUpdateRequest, security: operations.ScriptProjectsDeploymentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsDeploymentsUpdateResponse>;
    /**
     * Gets a script project's metadata.
     */
    scriptProjectsGet(req: operations.ScriptProjectsGetRequest, security: operations.ScriptProjectsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsGetResponse>;
    /**
     * Gets the content of the script project, including the code source and metadata for each script file.
     */
    scriptProjectsGetContent(req: operations.ScriptProjectsGetContentRequest, security: operations.ScriptProjectsGetContentSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsGetContentResponse>;
    /**
     * Get metrics data for scripts, such as number of executions and active users.
     */
    scriptProjectsGetMetrics(req: operations.ScriptProjectsGetMetricsRequest, security: operations.ScriptProjectsGetMetricsSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsGetMetricsResponse>;
    /**
     * Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
     */
    scriptProjectsUpdateContent(req: operations.ScriptProjectsUpdateContentRequest, security: operations.ScriptProjectsUpdateContentSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsUpdateContentResponse>;
    /**
     * Creates a new immutable version using the current code, with a unique version number.
     */
    scriptProjectsVersionsCreate(req: operations.ScriptProjectsVersionsCreateRequest, security: operations.ScriptProjectsVersionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsVersionsCreateResponse>;
    /**
     * Gets a version of a script project.
     */
    scriptProjectsVersionsGet(req: operations.ScriptProjectsVersionsGetRequest, security: operations.ScriptProjectsVersionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsVersionsGetResponse>;
    /**
     * List the versions of a script project.
     */
    scriptProjectsVersionsList(req: operations.ScriptProjectsVersionsListRequest, security: operations.ScriptProjectsVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.ScriptProjectsVersionsListResponse>;
}
