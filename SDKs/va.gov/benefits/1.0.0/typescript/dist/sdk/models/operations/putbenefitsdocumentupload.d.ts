import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutBenefitsDocumentUploadRequest extends SpeakeasyBase {
    /**
     * Base64-encoded 128-bit MD5 digest of the message. Use for integrity control
     */
    contentMd5?: string;
}
/**
 * Internal server error
 */
export declare class PutBenefitsDocumentUpload500ApplicationJSON extends SpeakeasyBase {
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
export declare class PutBenefitsDocumentUpload429ApplicationJSON extends SpeakeasyBase {
    /**
     * message
     */
    message?: string;
}
/**
 * Unprocessable Entity
 */
export declare class PutBenefitsDocumentUpload422ApplicationJSON extends SpeakeasyBase {
    errors: shared.ErrorModel[];
}
/**
 * Unauthorized request
 */
export declare class PutBenefitsDocumentUpload401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error detail
     */
    message?: string;
}
export declare class PutBenefitsDocumentUploadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized request
     */
    putBenefitsDocumentUpload401ApplicationJSONObject?: PutBenefitsDocumentUpload401ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    putBenefitsDocumentUpload422ApplicationJSONObject?: PutBenefitsDocumentUpload422ApplicationJSON;
    /**
     * Too many requests
     */
    putBenefitsDocumentUpload429ApplicationJSONObject?: PutBenefitsDocumentUpload429ApplicationJSON;
    /**
     * Internal server error
     */
    putBenefitsDocumentUpload500ApplicationJSONObject?: PutBenefitsDocumentUpload500ApplicationJSON;
}
