import { SpeakeasyBase } from "../../../internal/utils";
import { ReportStatus } from "./reportstatus";
/**
 * Report metadata.
 */
export declare class ReportMetadata extends SpeakeasyBase {
    /**
     * The path to the location in Google Cloud Storage where the report is stored.
     */
    googleCloudStoragePath?: string;
    /**
     * The ending time for the data that is shown in the report.
     */
    reportDataEndTimeMs?: string;
    /**
     * The starting time for the data that is shown in the report.
     */
    reportDataStartTimeMs?: string;
    /**
     * Report status.
     */
    status?: ReportStatus;
}
