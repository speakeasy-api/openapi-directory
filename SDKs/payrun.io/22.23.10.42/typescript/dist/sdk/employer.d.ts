import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Employer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an Employer
     *
     * @remarks
     * Delete the specified employer
     */
    deleteEmployer(req: operations.DeleteEmployerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerResponse>;
    /**
     * Delete an Employer revision matching the specified revision date.
     *
     * @remarks
     * Deletes the specified employer revision for the matching revision date
     */
    deleteEmployerRevision(req: operations.DeleteEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerRevisionResponse>;
    /**
     * Delete an Employer revision matching the specified revision number.
     *
     * @remarks
     * Deletes the specified employer revision for the matching revision number
     */
    deleteEmployerRevisionByNumber(req: operations.DeleteEmployerRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerRevisionByNumberResponse>;
    /**
     * Deletes employer secret
     *
     * @remarks
     * Deletes an employer secret from the given resource location
     */
    deleteEmployerSecret(req: operations.DeleteEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerSecretResponse>;
    /**
     * Get all employer tags
     *
     * @remarks
     * Gets all the employer tags
     */
    getAllEmployerTags(req: operations.GetAllEmployerTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployerTagsResponse>;
    /**
     * Gets the employer
     *
     * @remarks
     * Get the specified employer object
     */
    getEmployer(req: operations.GetEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerResponse>;
    /**
     * Gets the employer at the specified effective
     *
     * @remarks
     * Returns the employer's state at the specified effective date.
     */
    getEmployerByEffectiveDate(req: operations.GetEmployerByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerByEffectiveDateResponse>;
    /**
     * Gets the employer by revision number
     *
     * @remarks
     * Get the employer revision matching the specified revision number
     */
    getEmployerRevisionByNumber(req: operations.GetEmployerRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerRevisionByNumberResponse>;
    /**
     * Get all employer revision summaries
     *
     * @remarks
     * Gets links to all employer revision summaries
     */
    getEmployerRevisionSummaries(req: operations.GetEmployerRevisionSummariesRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerRevisionSummariesResponse>;
    /**
     * Gets the employer summary by revision number
     *
     * @remarks
     * Get the employer revision summary matching the specified revision number
     */
    getEmployerRevisionSummaryByNumber(req: operations.GetEmployerRevisionSummaryByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerRevisionSummaryByNumberResponse>;
    /**
     * Gets the employer revisions
     *
     * @remarks
     * Gets links to all the employer revisions
     */
    getEmployerRevisions(req: operations.GetEmployerRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerRevisionsResponse>;
    /**
     * Get employer secret
     *
     * @remarks
     * Get the public visible employer secret object
     */
    getEmployerSecret(req: operations.GetEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSecretResponse>;
    /**
     * Get all employer secret links
     *
     * @remarks
     * Get all the employer secret links
     */
    getEmployerSecrets(req: operations.GetEmployerSecretsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSecretsResponse>;
    /**
     * Get employer summaries.
     *
     * @remarks
     * Get links to all employer summaries.
     */
    getEmployerSummaries(req: operations.GetEmployerSummariesRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSummariesResponse>;
    /**
     * Get employer summaries at a given effective date.
     *
     * @remarks
     * Get links to all employer summaries on specified effective date.
     */
    getEmployerSummariesByEffectiveDate(req: operations.GetEmployerSummariesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSummariesByEffectiveDateResponse>;
    /**
     * Get employer summary
     *
     * @remarks
     * Gets the specified employer summary data.
     */
    getEmployerSummary(req: operations.GetEmployerSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSummaryResponse>;
    /**
     * Get employer summary by effective date.
     *
     * @remarks
     * Gets the employer summary for the specified effective date.
     */
    getEmployerSummaryByEffectiveDate(req: operations.GetEmployerSummaryByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSummaryByEffectiveDateResponse>;
    /**
     * Gets all employers
     *
     * @remarks
     * Gets links to all employers contained under the authorised application scope
     */
    getEmployers(req: operations.GetEmployersRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersResponse>;
    /**
     * Gets all employers at the specified effective date
     *
     * @remarks
     * Gets links to all employers contained under the authorised application scope for the specified effective date.
     */
    getEmployersByEffectiveDate(req: operations.GetEmployersByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersByEffectiveDateResponse>;
    /**
     * Get employers with tag
     *
     * @remarks
     * Gets the employers with the tag
     */
    getEmployersWithTag(req: operations.GetEmployersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersWithTagResponse>;
    /**
     * Patches the employer
     *
     * @remarks
     * Patches the specified employer with the supplied values
     */
    patchEmployer(req: operations.PatchEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PatchEmployerResponse>;
    /**
     * Create a new Employer
     *
     * @remarks
     * Create a new employer object
     */
    postEmployer(req: operations.PostEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployerResponse>;
    /**
     * Create a new employer secret
     *
     * @remarks
     * Create new employer secret using auto generated resource location key
     */
    postEmployerSecret(req: operations.PostEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployerSecretResponse>;
    /**
     * Updates the Employer
     *
     * @remarks
     * Updates the existing specified employer object
     */
    putEmployer(req: operations.PutEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerResponse>;
    /**
     * Create a new employer secret
     *
     * @remarks
     * Create / update an employer secret at the given resource location
     */
    putEmployerSecret(req: operations.PutEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerSecretResponse>;
}
