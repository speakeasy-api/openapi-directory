import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBenefitsDocumentUploadDownloadSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetBenefitsDocumentUploadDownloadRequest extends SpeakeasyBase {
    /**
     * ID as returned by a previous create upload request
     */
    id: string;
}
/**
 * Internal server error
 */
export declare class GetBenefitsDocumentUploadDownload500ApplicationJSON extends SpeakeasyBase {
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
export declare class GetBenefitsDocumentUploadDownload429ApplicationJSON extends SpeakeasyBase {
    /**
     * message
     */
    message?: string;
}
/**
 * Not found
 */
export declare class GetBenefitsDocumentUploadDownload404ApplicationJSON extends SpeakeasyBase {
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
export declare class GetBenefitsDocumentUploadDownload403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error detail
     */
    message?: string;
}
/**
 * Unauthorized request
 */
export declare class GetBenefitsDocumentUploadDownload401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error detail
     */
    message?: string;
}
export declare class GetBenefitsDocumentUploadDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Zip file with the contents of your payload as parsed by our server
     */
    getBenefitsDocumentUploadDownload200ApplicationZipBinaryString?: Uint8Array;
    /**
     * Unauthorized request
     */
    getBenefitsDocumentUploadDownload401ApplicationJSONObject?: GetBenefitsDocumentUploadDownload401ApplicationJSON;
    /**
     * Forbidden
     */
    getBenefitsDocumentUploadDownload403ApplicationJSONObject?: GetBenefitsDocumentUploadDownload403ApplicationJSON;
    /**
     * Not found
     */
    getBenefitsDocumentUploadDownload404ApplicationJSONObject?: GetBenefitsDocumentUploadDownload404ApplicationJSON;
    /**
     * Too many requests
     */
    getBenefitsDocumentUploadDownload429ApplicationJSONObject?: GetBenefitsDocumentUploadDownload429ApplicationJSON;
    /**
     * Internal server error
     */
    getBenefitsDocumentUploadDownload500ApplicationJSONObject?: GetBenefitsDocumentUploadDownload500ApplicationJSON;
}
