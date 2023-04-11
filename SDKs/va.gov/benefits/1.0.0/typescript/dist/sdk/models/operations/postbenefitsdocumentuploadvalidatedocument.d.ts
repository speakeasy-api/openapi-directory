import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Internal server error
 */
export declare class PostBenefitsDocumentUploadValidateDocument500ApplicationJSON extends SpeakeasyBase {
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
export declare class PostBenefitsDocumentUploadValidateDocument429ApplicationJSON extends SpeakeasyBase {
    /**
     * message
     */
    message?: string;
}
/**
 * Document did NOT pass system requirements
 */
export declare class PostBenefitsDocumentUploadValidateDocument422ApplicationJSON extends SpeakeasyBase {
    errors: shared.DocumentValidationErrorModel[];
}
/**
 * Forbidden
 */
export declare class PostBenefitsDocumentUploadValidateDocument403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error detail
     */
    message?: string;
}
/**
 * Unauthorized request
 */
export declare class PostBenefitsDocumentUploadValidateDocument401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error detail
     */
    message?: string;
}
export declare class PostBenefitsDocumentUploadValidateDocument200ApplicationJSONDataAttributes extends SpeakeasyBase {
    status?: string;
}
export declare class PostBenefitsDocumentUploadValidateDocument200ApplicationJSONData extends SpeakeasyBase {
    attributes?: PostBenefitsDocumentUploadValidateDocument200ApplicationJSONDataAttributes;
    /**
     * schema type
     */
    type?: string;
}
/**
 * Document passed system requirements
 */
export declare class PostBenefitsDocumentUploadValidateDocument200ApplicationJSON extends SpeakeasyBase {
    data?: PostBenefitsDocumentUploadValidateDocument200ApplicationJSONData;
}
export declare class PostBenefitsDocumentUploadValidateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Document passed system requirements
     */
    postBenefitsDocumentUploadValidateDocument200ApplicationJSONObject?: PostBenefitsDocumentUploadValidateDocument200ApplicationJSON;
    /**
     * Unauthorized request
     */
    postBenefitsDocumentUploadValidateDocument401ApplicationJSONObject?: PostBenefitsDocumentUploadValidateDocument401ApplicationJSON;
    /**
     * Forbidden
     */
    postBenefitsDocumentUploadValidateDocument403ApplicationJSONObject?: PostBenefitsDocumentUploadValidateDocument403ApplicationJSON;
    /**
     * Document did NOT pass system requirements
     */
    postBenefitsDocumentUploadValidateDocument422ApplicationJSONObject?: PostBenefitsDocumentUploadValidateDocument422ApplicationJSON;
    /**
     * Too many requests
     */
    postBenefitsDocumentUploadValidateDocument429ApplicationJSONObject?: PostBenefitsDocumentUploadValidateDocument429ApplicationJSON;
    /**
     * Internal server error
     */
    postBenefitsDocumentUploadValidateDocument500ApplicationJSONObject?: PostBenefitsDocumentUploadValidateDocument500ApplicationJSON;
}
