import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBenefitsDocumentUploadStatusReportSecurity extends SpeakeasyBase {
    apikey: string;
}
/**
 * Internal server error
 */
export declare class GetBenefitsDocumentUploadStatusReport500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetBenefitsDocumentUploadStatusReport429ApplicationJSON extends SpeakeasyBase {
    /**
     * message
     */
    message?: string;
}
/**
 * Unprocessable Entity
 */
export declare class GetBenefitsDocumentUploadStatusReport422ApplicationJSON extends SpeakeasyBase {
    errors: shared.ErrorModel[];
}
/**
 * Forbidden
 */
export declare class GetBenefitsDocumentUploadStatusReport403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error detail
     */
    message?: string;
}
/**
 * Unauthorized request
 */
export declare class GetBenefitsDocumentUploadStatusReport401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error detail
     */
    message?: string;
}
/**
 * Upload status report retrieved successfully
 */
export declare class GetBenefitsDocumentUploadStatusReport200ApplicationJSON extends SpeakeasyBase {
    data: shared.DocumentUploadStatus[];
}
export declare class GetBenefitsDocumentUploadStatusReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Upload status report retrieved successfully
     */
    getBenefitsDocumentUploadStatusReport200ApplicationJSONObject?: GetBenefitsDocumentUploadStatusReport200ApplicationJSON;
    /**
     * Unauthorized request
     */
    getBenefitsDocumentUploadStatusReport401ApplicationJSONObject?: GetBenefitsDocumentUploadStatusReport401ApplicationJSON;
    /**
     * Forbidden
     */
    getBenefitsDocumentUploadStatusReport403ApplicationJSONObject?: GetBenefitsDocumentUploadStatusReport403ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    getBenefitsDocumentUploadStatusReport422ApplicationJSONObject?: GetBenefitsDocumentUploadStatusReport422ApplicationJSON;
    /**
     * Too many requests
     */
    getBenefitsDocumentUploadStatusReport429ApplicationJSONObject?: GetBenefitsDocumentUploadStatusReport429ApplicationJSON;
    /**
     * Internal server error
     */
    getBenefitsDocumentUploadStatusReport500ApplicationJSONObject?: GetBenefitsDocumentUploadStatusReport500ApplicationJSON;
}
