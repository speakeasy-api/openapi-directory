import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints to access MetaPub ingest functionality such as synchronizing producer metadata to programs and episodes. These API operations are deprecated. Use the pieces endpoints instead.
 */
export declare class MetaPub {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get an EPG batch operation.
     *
     * @remarks
     * Gets the batch information which can be used to check the status of the operation or retrieve more details if the batch fails.
     */
    getApiV2MetapubProgramInformationBatchBatchId(req: operations.GetApiV2MetapubProgramInformationBatchBatchIdRequest, security: operations.GetApiV2MetapubProgramInformationBatchBatchIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2MetapubProgramInformationBatchBatchIdResponse>;
    /**
     * Create a batch operation on EPG information.
     *
     * @remarks
     * Create a batch to process the metadata of one or more electronic program guide (EPG) programs using metadata that has been uploaded to the customer's CD Drive. If multiple EPG programs are present in the metadata, they will all be updated, however updates across programs are not atomic. Note that an EPG program maps to the ContentDepot concept of an episode which is also known as a "program instance".
     *
     * A batch operation must be explicitly created rather than the server attempting to detect new metadata in order to allow for all the content to be uploaded including any supporting content like images. A batch operation is accepted and queued for asynchronous processing at a later time. A client can poll the batch periodically to determine when it completes and the resulting state.
     *
     *
     * @see {@link /api/epg-cd-mapping.html} - Find RadioDns to ContentDepot Mapping here
     */
    postApiV2MetapubProgramInformationBatch(req: operations.PostApiV2MetapubProgramInformationBatchRequestBody, security: operations.PostApiV2MetapubProgramInformationBatchSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV2MetapubProgramInformationBatchResponse>;
}
