import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Disputes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * AcceptDispute
     *
     * @remarks
     * Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
     * updates the dispute state to ACCEPTED.
     *
     * Square debits the disputed amount from the seller’s Square account. If the Square account
     * does not have sufficient funds, Square debits the associated bank account.
     */
    acceptDispute(req: operations.AcceptDisputeRequest, security: operations.AcceptDisputeSecurity, config?: AxiosRequestConfig): Promise<operations.AcceptDisputeResponse>;
    /**
     * CreateDisputeEvidenceText
     *
     * @remarks
     * Uploads text to use as evidence for a dispute challenge.
     */
    createDisputeEvidenceText(req: operations.CreateDisputeEvidenceTextRequest, security: operations.CreateDisputeEvidenceTextSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDisputeEvidenceTextResponse>;
    /**
     * DeleteDisputeEvidence
     *
     * @remarks
     * Removes specified evidence from a dispute.
     *
     * Square does not send the bank any evidence that is removed. Also, you cannot remove evidence after
     * submitting it to the bank using [SubmitEvidence](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/submit-evidence).
     */
    deleteDisputeEvidence(req: operations.DeleteDisputeEvidenceRequest, security: operations.DeleteDisputeEvidenceSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteDisputeEvidenceResponse>;
    /**
     * ListDisputeEvidence
     *
     * @remarks
     * Returns a list of evidence associated with a dispute.
     */
    listDisputeEvidence(req: operations.ListDisputeEvidenceRequest, security: operations.ListDisputeEvidenceSecurity, config?: AxiosRequestConfig): Promise<operations.ListDisputeEvidenceResponse>;
    /**
     * ListDisputes
     *
     * @remarks
     * Returns a list of disputes associated with a particular account.
     */
    listDisputes(req: operations.ListDisputesRequest, security: operations.ListDisputesSecurity, config?: AxiosRequestConfig): Promise<operations.ListDisputesResponse>;
    /**
     * RetrieveDispute
     *
     * @remarks
     * Returns details about a specific dispute.
     */
    retrieveDispute(req: operations.RetrieveDisputeRequest, security: operations.RetrieveDisputeSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveDisputeResponse>;
    /**
     * RetrieveDisputeEvidence
     *
     * @remarks
     * Returns the evidence metadata specified by the evidence ID in the request URL path
     *
     * You must maintain a copy of the evidence you upload if you want to reference it later. You cannot
     * download the evidence after you upload it.
     */
    retrieveDisputeEvidence(req: operations.RetrieveDisputeEvidenceRequest, security: operations.RetrieveDisputeEvidenceSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveDisputeEvidenceResponse>;
    /**
     * SubmitEvidence
     *
     * @remarks
     * Submits evidence to the cardholder's bank.
     *
     * Before submitting evidence, Square compiles all available evidence. This includes evidence uploaded
     * using the [CreateDisputeEvidenceFile](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/create-dispute-evidence-file) and
     * [CreateDisputeEvidenceText](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/create-dispute-evidence-text) endpoints and
     * evidence automatically provided by Square, when available.
     */
    submitEvidence(req: operations.SubmitEvidenceRequest, security: operations.SubmitEvidenceSecurity, config?: AxiosRequestConfig): Promise<operations.SubmitEvidenceResponse>;
}
