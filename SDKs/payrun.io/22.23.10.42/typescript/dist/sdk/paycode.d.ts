import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PayCode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a pay code
     *
     * @remarks
     * Delete the specified pay code
     */
    deletePayCode(req: operations.DeletePayCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeResponse>;
    /**
     * Deletes a pay code revision
     *
     * @remarks
     * Delete the pay code revision for the specified date
     */
    deletePayCodeRevision(req: operations.DeletePayCodeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeRevisionResponse>;
    /**
     * Delete an PayCode revision matching the specified revision number.
     *
     * @remarks
     * Deletes the specified pay code revision for the matching revision number
     */
    deletePayCodeRevisionByNumber(req: operations.DeletePayCodeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeRevisionByNumberResponse>;
    /**
     * Get all pay code tags
     *
     * @remarks
     * Gets all the pay code tags
     */
    getAllPayCodeTags(req: operations.GetAllPayCodeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayCodeTagsResponse>;
    /**
     * Gets pay code for specified date
     *
     * @remarks
     * Gets the pay code revision for the specified effective date
     */
    getPayCodeByEffectiveDate(req: operations.GetPayCodeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeByEffectiveDateResponse>;
    /**
     * Gets the specified pay code from the employer
     *
     * @remarks
     * Returns the specified pay code from the employer
     */
    getPayCodeFromEmployer(req: operations.GetPayCodeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeFromEmployerResponse>;
    /**
     * Gets the pay code by revision number
     *
     * @remarks
     * Get the pay code revision matching the specified revision number
     */
    getPayCodeRevisionByNumber(req: operations.GetPayCodeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeRevisionByNumberResponse>;
    /**
     * Get all revisions of the Pay Code
     *
     * @remarks
     * Returns links to all revisions of the pay code
     */
    getPayCodeRevisions(req: operations.GetPayCodeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeRevisionsResponse>;
    /**
     * Gets all pay codes for specified date
     *
     * @remarks
     * Gets the effective pay code revision for the specified date
     */
    getPayCodesByEffectiveDate(req: operations.GetPayCodesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesByEffectiveDateResponse>;
    /**
     * Gets the pay codes from the employer
     *
     * @remarks
     * Get links to all the pay codes for the specified employer
     */
    getPayCodesFromEmployer(req: operations.GetPayCodesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesFromEmployerResponse>;
    /**
     * Gets the pay codes by nominal code
     *
     * @remarks
     * Get the pay codes that share the specified nominal code
     */
    getPayCodesFromNominalCode(req: operations.GetPayCodesFromNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesFromNominalCodeResponse>;
    /**
     * Get pay codes with tag
     *
     * @remarks
     * Gets the pay codes with the tag
     */
    getPayCodesWithTag(req: operations.GetPayCodesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesWithTagResponse>;
    /**
     * Patches the pay code
     *
     * @remarks
     * Patches the specified pay code object with the supplied values
     */
    patchPayCode(req: operations.PatchPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PatchPayCodeResponse>;
    /**
     * Create a new pay code
     *
     * @remarks
     * Create a new pay code object
     */
    postPayCode(req: operations.PostPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PostPayCodeResponse>;
    /**
     * Updates a pay code
     *
     * @remarks
     * Updates the existing specified pay code object
     */
    putPayCode(req: operations.PutPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PutPayCodeResponse>;
}
