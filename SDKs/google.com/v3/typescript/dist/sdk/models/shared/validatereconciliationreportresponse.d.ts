import { SpeakeasyBase } from "../../../internal/utils";
import { ReconciliationReportValidationIssue } from "./reconciliationreportvalidationissue";
/**
 * Response message for ReconciliationReportService.ValidateReconciliationReport.
 */
export declare class ValidateReconciliationReportResponse extends SpeakeasyBase {
    /**
     * Issues that were encountered when validating the file.
     */
    issues?: ReconciliationReportValidationIssue[];
    /**
     * The number of commission records that were successfully validated.
     */
    successfulRecordCount?: number;
}
