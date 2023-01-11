import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SubContractor {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSubContractor - Delete an sub contractor
     *
     * Delete the specified sub contractor
    **/
    deleteSubContractor(req: operations.DeleteSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorResponse>;
    /**
     * deleteSubContractorRevision - Delete an sub contractor revision matching the specified revision date.
     *
     * Deletes the specified sub contractor revision for the matching revision date
    **/
    deleteSubContractorRevision(req: operations.DeleteSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorRevisionResponse>;
    /**
     * deleteSubContractorRevisionByNumber - Delete an SubContractor revision matching the specified revision number.
     *
     * Deletes the specified sub contractor revision for the matching revision number
    **/
    deleteSubContractorRevisionByNumber(req: operations.DeleteSubContractorRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorRevisionByNumberResponse>;
    /**
     * getSubContractorByEffectiveDate - Get sub contractor by effective date.
     *
     * Returns the sub contractor's state at the specified effective date.
    **/
    getSubContractorByEffectiveDate(req: operations.GetSubContractorByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorByEffectiveDateResponse>;
    /**
     * getSubContractorFromEmployer - Get sub contractor from employer
     *
     * Gets the specified sub contractor from employer.
    **/
    getSubContractorFromEmployer(req: operations.GetSubContractorFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorFromEmployerResponse>;
    /**
     * getSubContractorRevisionByNumber - Gets the sub contractor by revision number
     *
     * Get the sub contractor revision matching the specified revision number
    **/
    getSubContractorRevisionByNumber(req: operations.GetSubContractorRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorRevisionByNumberResponse>;
    /**
     * getSubContractorRevisions - Get all sub contractor revisions
     *
     * Gets links to all the sub contractor revisions
    **/
    getSubContractorRevisions(req: operations.GetSubContractorRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorRevisionsResponse>;
    /**
     * getSubContractorsByEffectiveDate - Get sub contractors from employer at a given effective date.
     *
     * Get links to all sub contractors for the employer on specified effective date.
    **/
    getSubContractorsByEffectiveDate(req: operations.GetSubContractorsByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsByEffectiveDateResponse>;
    /**
     * getSubContractorsFromEmployer - Get sub contractors from employer.
     *
     * Get links to all sub contractors for the specified employer.
    **/
    getSubContractorsFromEmployer(req: operations.GetSubContractorsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsFromEmployerResponse>;
    /**
     * patchSubContractor - Patches the sub contractor
     *
     * Patches the specified sub contractor with the supplied values
    **/
    patchSubContractor(req: operations.PatchSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PatchSubContractorResponse>;
    /**
     * postSubContractorIntoEmployer - Create a new sub contractor
     *
     * Create a new sub contractor object
    **/
    postSubContractorIntoEmployer(req: operations.PostSubContractorIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostSubContractorIntoEmployerResponse>;
    /**
     * putSubContractorIntoEmployer - Updates the sub contractor
     *
     * Updates the existing specified sub contractor object
    **/
    putSubContractorIntoEmployer(req: operations.PutSubContractorIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutSubContractorIntoEmployerResponse>;
}
