import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Document upload status.
 *
 * @remarks
 *
 */
export declare enum DocumentUploadAttributesStatusEnum {
    Pending = "pending",
    Uploaded = "uploaded",
    Received = "received",
    Processing = "processing",
    Success = "success",
    Vbms = "vbms",
    Error = "error"
}
export declare class DocumentUploadAttributes extends SpeakeasyBase {
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
     * The document upload identifier
     */
    guid: string;
    /**
     * Location to which to PUT document Payload
     */
    location?: string;
    /**
     * Document upload status.
     *
     * @remarks
     *
     */
    status: DocumentUploadAttributesStatusEnum;
    /**
     * The last time the submission was updated
     */
    updatedAt?: Date;
    /**
     * Only populated after submission starts processing
     */
    uploadedPdf?: any;
}
