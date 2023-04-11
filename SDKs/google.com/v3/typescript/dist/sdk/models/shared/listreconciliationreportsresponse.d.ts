import { SpeakeasyBase } from "../../../internal/utils";
import { ReconciliationReport } from "./reconciliationreport";
/**
 * Response message for ReconciliationReportService.ListReconciliationReports.
 */
export declare class ListReconciliationReportsResponse extends SpeakeasyBase {
    /**
     * The list of names of reconciliation reports. Note that the `contents` and `fileName` fields of each `ReconciliationReport` object are not returned by this call.
     */
    reconciliationReports?: ReconciliationReport[];
}
