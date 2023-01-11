import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Employer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteEmployer - Delete an Employer
     *
     * Delete the specified employer
    **/
    deleteEmployer(req: operations.DeleteEmployerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerResponse>;
    /**
     * deleteEmployerRevision - Delete an Employer revision matching the specified revision date.
     *
     * Deletes the specified employer revision for the matching revision date
    **/
    deleteEmployerRevision(req: operations.DeleteEmployerRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerRevisionResponse>;
    /**
     * deleteEmployerRevisionByNumber - Delete an Employer revision matching the specified revision number.
     *
     * Deletes the specified employer revision for the matching revision number
    **/
    deleteEmployerRevisionByNumber(req: operations.DeleteEmployerRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerRevisionByNumberResponse>;
    /**
     * deleteEmployerSecret - Deletes employer secret
     *
     * Deletes an employer secret from the given resource location
    **/
    deleteEmployerSecret(req: operations.DeleteEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmployerSecretResponse>;
    /**
     * getAllEmployerTags - Get all employer tags
     *
     * Gets all the employer tags
    **/
    getAllEmployerTags(req: operations.GetAllEmployerTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllEmployerTagsResponse>;
    /**
     * getEmployer - Gets the employer
     *
     * Get the specified employer object
    **/
    getEmployer(req: operations.GetEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerResponse>;
    /**
     * getEmployerByEffectiveDate - Gets the employer at the specified effective
     *
     * Returns the employer's state at the specified effective date.
    **/
    getEmployerByEffectiveDate(req: operations.GetEmployerByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerByEffectiveDateResponse>;
    /**
     * getEmployerRevisionByNumber - Gets the employer by revision number
     *
     * Get the employer revision matching the specified revision number
    **/
    getEmployerRevisionByNumber(req: operations.GetEmployerRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerRevisionByNumberResponse>;
    /**
     * getEmployerRevisions - Gets the employer revisions
     *
     * Gets links to all the employer revisions
    **/
    getEmployerRevisions(req: operations.GetEmployerRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerRevisionsResponse>;
    /**
     * getEmployerSecret - Get employer secret
     *
     * Get the public visible employer secret object
    **/
    getEmployerSecret(req: operations.GetEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSecretResponse>;
    /**
     * getEmployerSecrets - Get all employer secret links
     *
     * Get all the employer secret links
    **/
    getEmployerSecrets(req: operations.GetEmployerSecretsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSecretsResponse>;
    /**
     * getEmployers - Gets all employers
     *
     * Gets links to all employers contained under the authorised application scope
    **/
    getEmployers(req: operations.GetEmployersRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersResponse>;
    /**
     * getEmployersByEffectiveDate - Gets all employers at the specified effective date
     *
     * Gets links to all employers contained under the authorised application scope for the specified effective date.
    **/
    getEmployersByEffectiveDate(req: operations.GetEmployersByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersByEffectiveDateResponse>;
    /**
     * getEmployersWithTag - Get employers with tag
     *
     * Gets the employers with the tag
    **/
    getEmployersWithTag(req: operations.GetEmployersWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployersWithTagResponse>;
    /**
     * patchEmployer - Patches the employer
     *
     * Patches the specified employer with the supplied values
    **/
    patchEmployer(req: operations.PatchEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PatchEmployerResponse>;
    /**
     * postEmployer - Create a new Employer
     *
     * Create a new employer object
    **/
    postEmployer(req: operations.PostEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployerResponse>;
    /**
     * postEmployerSecret - Create a new employer secret
     *
     * Create new employer secret using auto generated resource location key
    **/
    postEmployerSecret(req: operations.PostEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.PostEmployerSecretResponse>;
    /**
     * putEmployer - Updates the Employer
     *
     * Updates the existing specified employer object
    **/
    putEmployer(req: operations.PutEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerResponse>;
    /**
     * putEmployerSecret - Create a new employer secret
     *
     * Create / update an employer secret at the given resource location
    **/
    putEmployerSecret(req: operations.PutEmployerSecretRequest, config?: AxiosRequestConfig): Promise<operations.PutEmployerSecretResponse>;
}
