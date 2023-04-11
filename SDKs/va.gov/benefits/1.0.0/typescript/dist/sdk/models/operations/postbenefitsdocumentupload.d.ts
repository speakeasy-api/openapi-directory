import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class PostBenefitsDocumentUpload500ApplicationJSON extends SpeakeasyBase {
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
export declare class PostBenefitsDocumentUpload429ApplicationJSON extends SpeakeasyBase {
    /**
     * message
     */
    message?: string;
}
/**
 * Unprocessable Entity
 */
export declare class PostBenefitsDocumentUpload422ApplicationJSON extends SpeakeasyBase {
    errors: shared.ErrorModel[];
}
/**
 * Forbidden
 */
export declare class PostBenefitsDocumentUpload403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error detail
     */
    message?: string;
}
/**
 * Unauthorized request
 */
export declare class PostBenefitsDocumentUpload401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error detail
     */
    message?: string;
}
/**
 * Accepted. Location generated
 */
export declare class PostBenefitsDocumentUpload202ApplicationJSON extends SpeakeasyBase {
    /**
     * Status record for a previously initiated document submission.
     */
    data: shared.DocumentUploadPath;
}
export declare class PostBenefitsDocumentUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Accepted. Location generated
     */
    postBenefitsDocumentUpload202ApplicationJSONObject?: PostBenefitsDocumentUpload202ApplicationJSON;
    /**
     * Unauthorized request
     */
    postBenefitsDocumentUpload401ApplicationJSONObject?: PostBenefitsDocumentUpload401ApplicationJSON;
    /**
     * Forbidden
     */
    postBenefitsDocumentUpload403ApplicationJSONObject?: PostBenefitsDocumentUpload403ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    postBenefitsDocumentUpload422ApplicationJSONObject?: PostBenefitsDocumentUpload422ApplicationJSON;
    /**
     * Too many requests
     */
    postBenefitsDocumentUpload429ApplicationJSONObject?: PostBenefitsDocumentUpload429ApplicationJSON;
    /**
     * Internal server error
     */
    postBenefitsDocumentUpload500ApplicationJSONObject?: PostBenefitsDocumentUpload500ApplicationJSON;
}
