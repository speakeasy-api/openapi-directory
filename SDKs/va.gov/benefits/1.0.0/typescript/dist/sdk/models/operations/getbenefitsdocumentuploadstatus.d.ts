import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBenefitsDocumentUploadStatusSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetBenefitsDocumentUploadStatusRequest extends SpeakeasyBase {
    /**
     * ID as returned by a previous create upload request
     */
    id: string;
}
/**
 * Internal server error
 */
export declare class GetBenefitsDocumentUploadStatus500ApplicationJSON extends SpeakeasyBase {
    /**
     * Unambiguous status code. Only present if status = "error"
     *
     * @remarks
     *
     * * `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.
     * * `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.
     * * `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.
     * * `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.
     * * `DOC105` - Invalid or unknown id
     * * `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.
     * * `DOC107` - Empty payload.
     * * `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.
     * * `DOC201` - Upload server error.
     * * `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.
     *
     */
    code?: string;
    /**
     * Human readable error detail. Only present if status = "error"
     */
    detail?: string;
    /**
     * Unambiguous status code. Only present if status = "error"
     *
     * @remarks
     *
     * * `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.
     * * `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.
     * * `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.
     * * `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.
     * * `DOC105` - Invalid or unknown id
     * * `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.
     * * `DOC107` - Empty payload.
     * * `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.
     * * `DOC201` - Upload server error.
     * * `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.
     *
     */
    status?: string;
    /**
     * Human readable title description.
     */
    title?: string;
}
/**
 * Too many requests
 */
export declare class GetBenefitsDocumentUploadStatus429ApplicationJSON extends SpeakeasyBase {
    /**
     * message
     */
    message?: string;
}
/**
 * Not found
 */
export declare class GetBenefitsDocumentUploadStatus404ApplicationJSON extends SpeakeasyBase {
    /**
     * Unambiguous status code. Only present if status = "error"
     *
     * @remarks
     *
     * * `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.
     * * `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.
     * * `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.
     * * `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.
     * * `DOC105` - Invalid or unknown id
     * * `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.
     * * `DOC107` - Empty payload.
     * * `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.
     * * `DOC201` - Upload server error.
     * * `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.
     *
     */
    code?: string;
    /**
     * Human readable error detail. Only present if status = "error"
     */
    detail?: string;
    /**
     * Unambiguous status code. Only present if status = "error"
     *
     * @remarks
     *
     * * `DOC101` - Invalid multipart payload provided - not a multipart, or missing one or more required parts.
     * * `DOC102` - Invalid metadata - not parseable as JSON, incorrect fields, etc.
     * * `DOC103` - Invalid content - not parseable as PDF. Detail field will indicate which document or attachment part was affected.
     * * `DOC104` - Upload rejected by upstream system. Processing failed and upload must be resubmitted. Detail field will indicate nature of rejection.
     * * `DOC105` - Invalid or unknown id
     * * `DOC106` - File size limit exceeded. Each document may be a maximum of 100MB.
     * * `DOC107` - Empty payload.
     * * `DOC108` - Maximum dimensions exceeded. Height and width must be less than 21 in x 21 in.
     * * `DOC201` - Upload server error.
     * * `DOC202` - Error during processing by upstream system. Processing failed and upload must be resubmitted. Detail field will provide additional details where available.
     *
     */
    status?: string;
    /**
     * Human readable title description.
     */
    title?: string;
}
/**
 * Forbidden
 */
export declare class GetBenefitsDocumentUploadStatus403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error detail
     */
    message?: string;
}
/**
 * Unauthorized request
 */
export declare class GetBenefitsDocumentUploadStatus401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error detail
     */
    message?: string;
}
/**
 * Upload status retrieved successfully
 */
export declare class GetBenefitsDocumentUploadStatus200ApplicationJSON extends SpeakeasyBase {
    /**
     * Status record for a previously initiated document submission.
     */
    data: shared.DocumentUploadStatus;
}
export declare class GetBenefitsDocumentUploadStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Upload status retrieved successfully
     */
    getBenefitsDocumentUploadStatus200ApplicationJSONObject?: GetBenefitsDocumentUploadStatus200ApplicationJSON;
    /**
     * Unauthorized request
     */
    getBenefitsDocumentUploadStatus401ApplicationJSONObject?: GetBenefitsDocumentUploadStatus401ApplicationJSON;
    /**
     * Forbidden
     */
    getBenefitsDocumentUploadStatus403ApplicationJSONObject?: GetBenefitsDocumentUploadStatus403ApplicationJSON;
    /**
     * Not found
     */
    getBenefitsDocumentUploadStatus404ApplicationJSONObject?: GetBenefitsDocumentUploadStatus404ApplicationJSON;
    /**
     * Too many requests
     */
    getBenefitsDocumentUploadStatus429ApplicationJSONObject?: GetBenefitsDocumentUploadStatus429ApplicationJSON;
    /**
     * Internal server error
     */
    getBenefitsDocumentUploadStatus500ApplicationJSONObject?: GetBenefitsDocumentUploadStatus500ApplicationJSON;
}
