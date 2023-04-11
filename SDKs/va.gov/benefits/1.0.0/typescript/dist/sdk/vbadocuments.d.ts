import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * VA Benefits document upload functionality
 */
export declare class VBADocuments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Download zip of "what the server sees"
     *
     * @remarks
     * An endpoint that will allow you to see exactly what the server sees. We split apart all submitted docs and metadata and zip the file to make it available to you to help with debugging purposes. Files are deleted after 10 days. Only available in testing environments, not production.
     */
    getBenefitsDocumentUploadDownload(req: operations.GetBenefitsDocumentUploadDownloadRequest, security: operations.GetBenefitsDocumentUploadDownloadSecurity, config?: AxiosRequestConfig): Promise<operations.GetBenefitsDocumentUploadDownloadResponse>;
    /**
     * Get status for a previous benefits document upload
     */
    getBenefitsDocumentUploadStatus(req: operations.GetBenefitsDocumentUploadStatusRequest, security: operations.GetBenefitsDocumentUploadStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetBenefitsDocumentUploadStatusResponse>;
    /**
     * Get a bulk status report for a list of previous uploads
     */
    getBenefitsDocumentUploadStatusReport(req: shared.DocumentUploadStatusGuidList, security: operations.GetBenefitsDocumentUploadStatusReportSecurity, config?: AxiosRequestConfig): Promise<operations.GetBenefitsDocumentUploadStatusReportResponse>;
    /**
     * Get a location for subsequent document upload PUT request
     */
    postBenefitsDocumentUpload(config?: AxiosRequestConfig): Promise<operations.PostBenefitsDocumentUploadResponse>;
    /**
     * Validate an individual document against system file requirements
     *
     * @remarks
     * Using this endpoint will decrease the likelihood of errors associated with individual documents during
     * the submission process. Validations performed:
     * * Document is a valid PDF (Note: `Content-Type` header value must be "application/pdf")
     * * Document does not have a user password (an owner password is acceptable)
     * * File size does not exceed 100 MB
     * * Page size does not exceed 21" x 21"
     *
     * Each PDF document is sent as a direct file upload. The request body should contain nothing other than the document in
     * binary format. Binary multipart/form-data encoding is not supported. This endpoint does NOT validate metadata in JSON
     * format.
     *
     * This endpoint does NOT initiate the claims intake process or submit data to that process. After using this endpoint,
     * individual PDF documents can be combined and submitted as a payload using PUT `/path`.
     *
     * A `200` response confirms that the individual document provided passes the system requirements.
     *
     * A `422` response indicates one or more problems with the document that should be resolved before submitting it in the
     * full document submission payload.
     *
     */
    postBenefitsDocumentUploadValidateDocument(config?: AxiosRequestConfig): Promise<operations.PostBenefitsDocumentUploadValidateDocumentResponse>;
    /**
     * Accepts document upload.
     *
     * @remarks
     * Accepts document metadata, document binary, and attachment binaries. Full URL, including
     * query parameters, provided from POST `/document_uploads`.
     *
     * ## Example Payload
     *
     * The following demonstrates a (redacted) multipart payload suitable for submitting to the PUT
     * endpoint. Most programming languages should have provisions for assembling a multipart
     * payload like this without having to do so manually.
     *
     * ```
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="metadata"
     * Content-Type: application/json
     *
     * {"veteranFirstName": "Jane",
     * "veteranLastName": "Doe",
     * "fileNumber": "012345678",
     * "zipCode": "97202",
     * "source": "MyVSO",
     * "docType": "21-22"
     * "businessLine": "CMP"}
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="content"
     * Content-Type: application/pdf
     *
     * <Binary PDF contents>
     * --17de1ed8f01442b2a2d7a93506314b76
     * Content-Disposition: form-data; name="attachment1"
     * Content-Type: application/pdf
     *
     * <Binary PDF attachment contents>
     * --17de1ed8f01442b2a2d7a93506314b76--
     * ```
     *
     * This PUT request would have an overall HTTP Content-Type header:
     *
     * ```
     * Content-Type: multipart/form-data; boundary=17de1ed8f01442b2a2d7a93506314b76
     * ```
     *
     * Note that the Content-Disposition parameter "name" in each part must be the expected values
     * "metadata", "content", "attachment1"..."attachmentN". The attachment attributes must be named
     * exactly as they are listed here (case sensitive), for example: "attachment_1" or "Attachment2"
     * are invalid.
     *
     * This is an example curl command:
     *
     * ```
     * curl -v -L -X PUT '<Location from \uploads>' -F 'metadata="{\"veteranFirstName\": \"Jane\",\"veteranLastName\": \"Doe\",\"fileNumber\": \"012345678\",\"zipCode\": \"97202\",\"source\": \"MyVSO\",\"docType\": \"21-22\",\"businessLine\": \"CMP\"}";type=application/json' -F 'content=@"content.pdf"' -F 'attachment1=@"file1.pdf"' -F 'attachment2=@"another_file.pdf"'
     * ```
     *
     */
    putBenefitsDocumentUpload(req: operations.PutBenefitsDocumentUploadRequest, config?: AxiosRequestConfig): Promise<operations.PutBenefitsDocumentUploadResponse>;
}
