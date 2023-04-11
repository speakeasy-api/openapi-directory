import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the file. If the status is `deleted`, you can no longer get a link to access the contents of the file using `/files/{file_id}/temporary_link`.
 */
export declare enum FileMiniV1StatusEnum {
    Available = "available",
    Deleted = "deleted"
}
/**
 * The type of file defined by Herald to distinguish between multiple files, such as `quote_summary` or `policy_specimen`.
 */
export declare enum FileMiniV1TypeEnum {
    QuoteSummary = "quote_summary",
    PolicySpecimen = "policy_specimen",
    CyberRiskAssement = "cyber_risk_assement",
    ApplicationSummary = "application_summary"
}
/**
 * A mini representation of a file, used when nested within another response.
 */
export declare class FileMiniV1 extends SpeakeasyBase {
    /**
     * id for a specific file.
     */
    id?: string;
    /**
     * The status of the file. If the status is `deleted`, you can no longer get a link to access the contents of the file using `/files/{file_id}/temporary_link`.
     */
    status?: FileMiniV1StatusEnum;
    /**
     * Text for the file that can be shown on screen.
     */
    text?: string;
    /**
     * The type of file defined by Herald to distinguish between multiple files, such as `quote_summary` or `policy_specimen`.
     */
    type?: FileMiniV1TypeEnum;
}
