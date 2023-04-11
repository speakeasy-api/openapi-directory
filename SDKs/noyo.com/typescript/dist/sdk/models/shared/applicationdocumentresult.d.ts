import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the application document
 */
export declare enum ApplicationDocumentResultStatusEnum {
    Accepted = "accepted",
    InProgress = "in_progress",
    Incomplete = "incomplete",
    NoyoReview = "noyo_review",
    Rejected = "rejected",
    Submitted = "submitted",
    Wiped = "wiped"
}
/**
 * Successful Response - Returns the new Application Document
 */
export declare class ApplicationDocumentResult extends SpeakeasyBase {
    /**
     * Unique identifier of the application in Noyo
     */
    applicationId: string;
    /**
     * The date the record was created
     */
    created: number;
    /**
     * Type of the document
     */
    documentType: string;
    /**
     * Unique identifier of the file upload id
     */
    fileUploadId?: string;
    /**
     * Unique identifier of the record in Noyo
     */
    id: string;
    /**
     * The date the record was last updated
     */
    modified: number;
    /**
     * Display name of the application document
     */
    name: string;
    /**
     * General platform notes about the application document
     */
    notes: string;
    /**
     * True if this document is required to submit the application
     */
    required: boolean;
    /**
     * Status of the application document
     */
    status: ApplicationDocumentResultStatusEnum;
    /**
     * Additional notes about the application document status with the carrier
     */
    statusNotes: string;
    /**
     * GCS link to the template file stored in Noyo, if available
     */
    templateFileKey: string;
    /**
     * Current version of the record
     */
    version: string;
}
