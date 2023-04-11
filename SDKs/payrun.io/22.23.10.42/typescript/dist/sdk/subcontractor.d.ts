import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SubContractor {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an sub contractor
     *
     * @remarks
     * Delete the specified sub contractor
     */
    deleteSubContractor(req: operations.DeleteSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorResponse>;
    /**
     * Delete an sub contractor revision matching the specified revision date.
     *
     * @remarks
     * Deletes the specified sub contractor revision for the matching revision date
     */
    deleteSubContractorRevision(req: operations.DeleteSubContractorRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorRevisionResponse>;
    /**
     * Delete an SubContractor revision matching the specified revision number.
     *
     * @remarks
     * Deletes the specified sub contractor revision for the matching revision number
     */
    deleteSubContractorRevisionByNumber(req: operations.DeleteSubContractorRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubContractorRevisionByNumberResponse>;
    /**
     * Get sub contractor by effective date.
     *
     * @remarks
     * Returns the sub contractor's state at the specified effective date.
     */
    getSubContractorByEffectiveDate(req: operations.GetSubContractorByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorByEffectiveDateResponse>;
    /**
     * Get sub contractor from employer
     *
     * @remarks
     * Gets the specified sub contractor from employer.
     */
    getSubContractorFromEmployer(req: operations.GetSubContractorFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorFromEmployerResponse>;
    /**
     * Gets the sub contractor by revision number
     *
     * @remarks
     * Get the sub contractor revision matching the specified revision number
     */
    getSubContractorRevisionByNumber(req: operations.GetSubContractorRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorRevisionByNumberResponse>;
    /**
     * Get all sub contractor revisions
     *
     * @remarks
     * Gets links to all the sub contractor revisions
     */
    getSubContractorRevisions(req: operations.GetSubContractorRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorRevisionsResponse>;
    /**
     * Get sub contractors from employer at a given effective date.
     *
     * @remarks
     * Get links to all sub contractors for the employer on specified effective date.
     */
    getSubContractorsByEffectiveDate(req: operations.GetSubContractorsByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsByEffectiveDateResponse>;
    /**
     * Get sub contractors from employer.
     *
     * @remarks
     * Get links to all sub contractors for the specified employer.
     */
    getSubContractorsFromEmployer(req: operations.GetSubContractorsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetSubContractorsFromEmployerResponse>;
    /**
     * Patches the sub contractor
     *
     * @remarks
     * Patches the specified sub contractor with the supplied values
     */
    patchSubContractor(req: operations.PatchSubContractorRequest, config?: AxiosRequestConfig): Promise<operations.PatchSubContractorResponse>;
    /**
     * Create a new sub contractor
     *
     * @remarks
     * Create a new sub contractor object
     */
    postSubContractorIntoEmployer(req: operations.PostSubContractorIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostSubContractorIntoEmployerResponse>;
    /**
     * Updates the sub contractor
     *
     * @remarks
     * Updates the existing specified sub contractor object
     */
    putSubContractorIntoEmployer(req: operations.PutSubContractorIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutSubContractorIntoEmployerResponse>;
}
