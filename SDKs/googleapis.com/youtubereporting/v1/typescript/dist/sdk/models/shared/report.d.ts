import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A report's metadata including the URL from which the report itself can be downloaded.
 */
export declare class Report extends SpeakeasyBase {
    /**
     * The date/time when this report was created.
     */
    createTime?: string;
    /**
     * The URL from which the report can be downloaded (max. 1000 characters).
     */
    downloadUrl?: string;
    /**
     * The end of the time period that the report instance covers. The value is exclusive.
     */
    endTime?: string;
    /**
     * The server-generated ID of the report.
     */
    id?: string;
    /**
     * The date/time when the job this report belongs to will expire/expired.
     */
    jobExpireTime?: string;
    /**
     * The ID of the job that created this report.
     */
    jobId?: string;
    /**
     * The start of the time period that the report instance covers. The value is inclusive.
     */
    startTime?: string;
}
