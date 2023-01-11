import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PayCode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePayCode - Deletes a pay code
     *
     * Delete the specified pay code
    **/
    deletePayCode(req: operations.DeletePayCodeRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeResponse>;
    /**
     * deletePayCodeRevision - Deletes a pay code revision
     *
     * Delete the pay code revision for the specified date
    **/
    deletePayCodeRevision(req: operations.DeletePayCodeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeRevisionResponse>;
    /**
     * deletePayCodeRevisionByNumber - Delete an PayCode revision matching the specified revision number.
     *
     * Deletes the specified pay code revision for the matching revision number
    **/
    deletePayCodeRevisionByNumber(req: operations.DeletePayCodeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayCodeRevisionByNumberResponse>;
    /**
     * getAllPayCodeTags - Get all pay code tags
     *
     * Gets all the pay code tags
    **/
    getAllPayCodeTags(req: operations.GetAllPayCodeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllPayCodeTagsResponse>;
    /**
     * getPayCodeByEffectiveDate - Gets pay code for specified date
     *
     * Gets the pay code revision for the specified effective date
    **/
    getPayCodeByEffectiveDate(req: operations.GetPayCodeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeByEffectiveDateResponse>;
    /**
     * getPayCodeFromEmployer - Gets the specified pay code from the employer
     *
     * Returns the specified pay code from the employer
    **/
    getPayCodeFromEmployer(req: operations.GetPayCodeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeFromEmployerResponse>;
    /**
     * getPayCodeRevisionByNumber - Gets the pay code by revision number
     *
     * Get the pay code revision matching the specified revision number
    **/
    getPayCodeRevisionByNumber(req: operations.GetPayCodeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeRevisionByNumberResponse>;
    /**
     * getPayCodeRevisions - Get all revisions of the Pay Code
     *
     * Returns links to all revisions of the pay code
    **/
    getPayCodeRevisions(req: operations.GetPayCodeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodeRevisionsResponse>;
    /**
     * getPayCodesByEffectiveDate - Gets all pay codes for specified date
     *
     * Gets the effective pay code revision for the specified date
    **/
    getPayCodesByEffectiveDate(req: operations.GetPayCodesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesByEffectiveDateResponse>;
    /**
     * getPayCodesFromEmployer - Gets the pay codes from the employer
     *
     * Get links to all the pay codes for the specified employer
    **/
    getPayCodesFromEmployer(req: operations.GetPayCodesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesFromEmployerResponse>;
    /**
     * getPayCodesFromNominalCode - Gets the pay codes by nominal code
     *
     * Get the pay codes that share the specified nominal code
    **/
    getPayCodesFromNominalCode(req: operations.GetPayCodesFromNominalCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesFromNominalCodeResponse>;
    /**
     * getPayCodesWithTag - Get pay codes with tag
     *
     * Gets the pay codes with the tag
    **/
    getPayCodesWithTag(req: operations.GetPayCodesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetPayCodesWithTagResponse>;
    /**
     * patchPayCode - Patches the pay code
     *
     * Patches the specified pay code object with the supplied values
    **/
    patchPayCode(req: operations.PatchPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PatchPayCodeResponse>;
    /**
     * postPayCode - Create a new pay code
     *
     * Create a new pay code object
    **/
    postPayCode(req: operations.PostPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PostPayCodeResponse>;
    /**
     * putPayCode - Updates a pay code
     *
     * Updates the existing specified pay code object
    **/
    putPayCode(req: operations.PutPayCodeRequest, config?: AxiosRequestConfig): Promise<operations.PutPayCodeResponse>;
}
