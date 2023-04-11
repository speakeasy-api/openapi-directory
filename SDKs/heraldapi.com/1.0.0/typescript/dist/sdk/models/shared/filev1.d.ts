import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The format of the file returned (e.g., csv, pdf, jpg, or png).
 */
export declare enum FileV1FormatEnum {
    Pdf = "pdf",
    Csv = "csv",
    Jpg = "jpg",
    Png = "png"
}
/**
 * The status of the file. If the status is `deleted`, you can no longer get a link to access the contents of the file using `/files/{file_id}/temporary_link`.
 */
export declare enum FileV1StatusEnum {
    Available = "available",
    Deleted = "deleted"
}
/**
 * The type of file defined by Herald to distinguish between multiple files, such as `quote_summary` or `policy_specimen`.
 */
export declare enum FileV1TypeEnum {
    QuoteSummary = "quote_summary",
    PolicySpecimen = "policy_specimen",
    CyberRiskAssement = "cyber_risk_assement",
    ApplicationSummary = "application_summary"
}
/**
 * Details for a specific file.
 */
export declare class FileV1 extends SpeakeasyBase {
    /**
     * The date when the file was created.
     */
    createdAt?: Date;
    /**
     * A filename for the file, can be used when saving a file to a filesystem.
     */
    fileName?: string;
    /**
     * The format of the file returned (e.g., csv, pdf, jpg, or png).
     */
    format?: FileV1FormatEnum;
    /**
     * id for a specific file.
     */
    id?: string;
    /**
     * The size of the file contents in bytes.
     */
    size?: number;
    /**
     * The status of the file. If the status is `deleted`, you can no longer get a link to access the contents of the file using `/files/{file_id}/temporary_link`.
     */
    status?: FileV1StatusEnum;
    /**
     * Text for the file that can be shown on screen.
     */
    text?: string;
    /**
     * The type of file defined by Herald to distinguish between multiple files, such as `quote_summary` or `policy_specimen`.
     */
    type?: FileV1TypeEnum;
}
