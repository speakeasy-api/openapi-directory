import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pension {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePension - Delete a Pension
     *
     * Delete the specified ppension
    **/
    deletePension(req: operations.DeletePensionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionResponse>;
    /**
     * deletePensionRevision - Delete an Pension revision matching the specified revision date.
     *
     * Deletes the specified pension revision for the matching revision date
    **/
    deletePensionRevision(req: operations.DeletePensionRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionRevisionResponse>;
    /**
     * deletePensionRevisionByNumber - Delete an Pension revision matching the specified revision number.
     *
     * Deletes the specified pension revision for the matching revision number
    **/
    deletePensionRevisionByNumber(req: operations.DeletePensionRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeletePensionRevisionByNumberResponse>;
    /**
     * getPensionByEffectiveDate - Get pension by effective date.
     *
     * Returns the penion's state at the specified effective date.
    **/
    getPensionByEffectiveDate(req: operations.GetPensionByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionByEffectiveDateResponse>;
    /**
     * getPensionFromEmployer - Get pension from employer
     *
     * Gets the specified pension from employer by pension code.
    **/
    getPensionFromEmployer(req: operations.GetPensionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionFromEmployerResponse>;
    /**
     * getPensionRevisionByNumber - Gets the pension by revision number
     *
     * Get the pension revision matching the specified revision number
    **/
    getPensionRevisionByNumber(req: operations.GetPensionRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionRevisionByNumberResponse>;
    /**
     * getPensionRevisions - Get all pension revisions
     *
     * Returns links to all revisions of the pension
    **/
    getPensionRevisions(req: operations.GetPensionRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionRevisionsResponse>;
    /**
     * getPensionsByEffectiveDate - Get pensions from employer at a given effective date.
     *
     * Get links to all pensions for the employer on specified effective date.
    **/
    getPensionsByEffectiveDate(req: operations.GetPensionsByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionsByEffectiveDateResponse>;
    /**
     * getPensionsFromEmployer - Get pensions from employer.
     *
     * Get links to all pensions for the specified employer.
    **/
    getPensionsFromEmployer(req: operations.GetPensionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionsFromEmployerResponse>;
    /**
     * patchPension - Patches the pension
     *
     * Patches the specified pension with the supplied values
    **/
    patchPension(req: operations.PatchPensionRequest, config?: AxiosRequestConfig): Promise<operations.PatchPensionResponse>;
    /**
     * postPensionIntoEmployer - Create a new Pension
     *
     * Create a new pension object
    **/
    postPensionIntoEmployer(req: operations.PostPensionIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostPensionIntoEmployerResponse>;
    /**
     * putPensionIntoEmployer - Updates the Pension
     *
     * Updates existing or inserts the specified pension object
    **/
    putPensionIntoEmployer(req: operations.PutPensionIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutPensionIntoEmployerResponse>;
}
