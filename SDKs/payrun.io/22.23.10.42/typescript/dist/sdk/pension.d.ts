import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pension {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Pension
     *
     * @remarks
     * Delete the specified ppension
     */
    deletePension(req: operations.DeletePensionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionResponse>;
    /**
     * Delete an Pension revision matching the specified revision date.
     *
     * @remarks
     * Deletes the specified pension revision for the matching revision date
     */
    deletePensionRevision(req: operations.DeletePensionRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionRevisionResponse>;
    /**
     * Delete an Pension revision matching the specified revision number.
     *
     * @remarks
     * Deletes the specified pension revision for the matching revision number
     */
    deletePensionRevisionByNumber(req: operations.DeletePensionRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionRevisionByNumberResponse>;
    /**
     * Get pension by effective date.
     *
     * @remarks
     * Returns the penion's state at the specified effective date.
     */
    getPensionByEffectiveDate(req: operations.GetPensionByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionByEffectiveDateResponse>;
    /**
     * Get pension from employer
     *
     * @remarks
     * Gets the specified pension from employer by pension code.
     */
    getPensionFromEmployer(req: operations.GetPensionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionFromEmployerResponse>;
    /**
     * Gets the pension by revision number
     *
     * @remarks
     * Get the pension revision matching the specified revision number
     */
    getPensionRevisionByNumber(req: operations.GetPensionRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionRevisionByNumberResponse>;
    /**
     * Get all pension revisions
     *
     * @remarks
     * Returns links to all revisions of the pension
     */
    getPensionRevisions(req: operations.GetPensionRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionRevisionsResponse>;
    /**
     * Get pensions from employer at a given effective date.
     *
     * @remarks
     * Get links to all pensions for the employer on specified effective date.
     */
    getPensionsByEffectiveDate(req: operations.GetPensionsByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionsByEffectiveDateResponse>;
    /**
     * Get pensions from employer.
     *
     * @remarks
     * Get links to all pensions for the specified employer.
     */
    getPensionsFromEmployer(req: operations.GetPensionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionsFromEmployerResponse>;
    /**
     * Patches the pension
     *
     * @remarks
     * Patches the specified pension with the supplied values
     */
    patchPension(req: operations.PatchPensionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPensionResponse>;
    /**
     * Create a new Pension
     *
     * @remarks
     * Create a new pension object
     */
    postPensionIntoEmployer(req: operations.PostPensionIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostPensionIntoEmployerResponse>;
    /**
     * Updates the Pension
     *
     * @remarks
     * Updates existing or inserts the specified pension object
     */
    putPensionIntoEmployer(req: operations.PutPensionIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutPensionIntoEmployerResponse>;
}
