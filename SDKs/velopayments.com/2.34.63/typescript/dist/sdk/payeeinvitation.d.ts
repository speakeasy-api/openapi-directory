import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Payee invitation is a process of inviting individual payees to the Velo platform. In this sction you will find APIs for working with Payee Invitations.
 */
export declare class PayeeInvitation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Initiate Payee Creation
     *
     * @remarks
     * <p>Use v4 instead</p>
     * Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
     * for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
     * 400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
     * within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
     * that provided for another payee within the same batch). The validation at this stage is intra-batch only.
     * Validation against payees who have already been invited occurs subsequently during processing of the batch.
     *
     */
    createPayeeV3Json(req: shared.CreatePayeesRequestV3Input, config?: AxiosRequestConfig): Promise<operations.CreatePayeeV3JsonResponse>;
    /**
     * Initiate Payee Creation
     *
     * @remarks
     * <p>Use v4 instead</p>
     * Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
     * for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
     * 400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
     * within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
     * that provided for another payee within the same batch). The validation at this stage is intra-batch only.
     * Validation against payees who have already been invited occurs subsequently during processing of the batch.
     *
     */
    createPayeeV3Multipart(req: operations.CreatePayeeV3MultipartFormData, config?: AxiosRequestConfig): Promise<operations.CreatePayeeV3MultipartResponse>;
    /**
     * Get Payee Invitation Status
     *
     * @remarks
     * <p>Use v4 instead</p>
     * <p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p>
     *
     */
    getPayeesInvitationStatusV3(req: operations.GetPayeesInvitationStatusV3Request, config?: AxiosRequestConfig): Promise<operations.GetPayeesInvitationStatusV3Response>;
    /**
     * Get Payee Invitation Status
     *
     * @remarks
     * Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.
     *
     */
    getPayeesInvitationStatusV4(req: operations.GetPayeesInvitationStatusV4Request, config?: AxiosRequestConfig): Promise<operations.GetPayeesInvitationStatusV4Response>;
    /**
     * Query Batch Status
     *
     * @remarks
     * <p>Use v4 instead</p>
     * Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).
     *
     */
    queryBatchStatusV3(req: operations.QueryBatchStatusV3Request, config?: AxiosRequestConfig): Promise<operations.QueryBatchStatusV3Response>;
    /**
     * Query Batch Status
     *
     * @remarks
     * Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).
     *
     */
    queryBatchStatusV4(req: operations.QueryBatchStatusV4Request, config?: AxiosRequestConfig): Promise<operations.QueryBatchStatusV4Response>;
    /**
     * Resend Payee Invite
     *
     * @remarks
     * <p>Use v4 instead</p>
     * <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
     * <p>Any previous invites to the payee by this Payor will be invalidated</p>
     *
     */
    resendPayeeInviteV3(req: operations.ResendPayeeInviteV3Request, config?: AxiosRequestConfig): Promise<operations.ResendPayeeInviteV3Response>;
    /**
     * Resend Payee Invite
     *
     * @remarks
     * <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
     * <p>Any previous invites to the payee by this Payor will be invalidated</p>
     *
     */
    resendPayeeInviteV4(req: operations.ResendPayeeInviteV4Request, config?: AxiosRequestConfig): Promise<operations.ResendPayeeInviteV4Response>;
    /**
     * Initiate Payee Creation
     *
     * @remarks
     * <p>Initiate the process of creating 1 to 2000 payees in a batch</p>
     * <p>Use the batchId in the response to query for status.</p>
     * <p>In addition to standard semantic validations, a 400 will also result if: </p>
     * <ul>
     * <li>there is a duplicate remote id within the batch</li>
     * <li>there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
     * that provided for another payee within the same batch).</li>
     * </ul>
     * <p>The validation at this stage is intra-batch only.</p>
     * <p>Validation against payees who have already been invited occurs subsequently during processing of the batch.</p>
     *
     */
    v4CreatePayeeJson(req: shared.CreatePayeesRequestV4, config?: AxiosRequestConfig): Promise<operations.V4CreatePayeeJsonResponse>;
    /**
     * Initiate Payee Creation
     *
     * @remarks
     * <p>Initiate the process of creating 1 to 2000 payees in a batch</p>
     * <p>Use the batchId in the response to query for status.</p>
     * <p>In addition to standard semantic validations, a 400 will also result if: </p>
     * <ul>
     * <li>there is a duplicate remote id within the batch</li>
     * <li>there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
     * that provided for another payee within the same batch).</li>
     * </ul>
     * <p>The validation at this stage is intra-batch only.</p>
     * <p>Validation against payees who have already been invited occurs subsequently during processing of the batch.</p>
     *
     */
    v4CreatePayeeMultipart(req: operations.V4CreatePayeeMultipartFormData, config?: AxiosRequestConfig): Promise<operations.V4CreatePayeeMultipartResponse>;
}
