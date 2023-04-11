import { SpeakeasyBase } from "../../../internal/utils";
import { ReconciliationReport } from "./reconciliationreport";
import { ReconciliationReportValidationIssue } from "./reconciliationreportvalidationissue";
/**
 * Response message for ReconciliationReportService.CreateReconciliationReport.
 */
export declare class CreateReconciliationReportResponse extends SpeakeasyBase {
    /**
     * Issues that were encountered when validating the file.
     */
    issues?: ReconciliationReportValidationIssue[];
    /**
     * Reconciliation report (Hotel Ads only). Covers the Reconciliation Reports functionality in pre-v3.0 API versions. Lets you see the status, validate, and upload your Commissions reconciliation reports. This only applies if you are in the Google Hotel Ads Commissions Program (GHACP). For more information about working with reconciliation reports in Hotel Center, refer to [Reconciliation reports](//support.google.com/hotelprices/answer/7019060#sending).
     */
    reconciliationReport?: ReconciliationReport;
    /**
     * The number of commission records that were successfully saved.
     */
    successfulRecordCount?: number;
}
