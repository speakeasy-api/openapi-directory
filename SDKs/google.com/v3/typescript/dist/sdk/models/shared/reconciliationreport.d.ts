import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reconciliation report (Hotel Ads only). Covers the Reconciliation Reports functionality in pre-v3.0 API versions. Lets you see the status, validate, and upload your Commissions reconciliation reports. This only applies if you are in the Google Hotel Ads Commissions Program (GHACP). For more information about working with reconciliation reports in Hotel Center, refer to [Reconciliation reports](//support.google.com/hotelprices/answer/7019060#sending).
 */
export declare class ReconciliationReport extends SpeakeasyBase {
    /**
     * Required. The contents of the commission report. Report contents must conform to the requirements specified in [Reconciliation reports] (//support.google.com/hotelprices/answer/7019060#creating).
     */
    contents?: string;
    /**
     * Required. Desired filename of the reconciliation report.
     */
    fileName?: string;
    /**
     * Resource name in the format `accounts/{account_id}/reconciliationReports/{datetime}~{filename}`. The value for `{datetime}` must be from 0001-01-01T00:00:00 to 9999-12-31T23:59:59 inclusive.
     */
    name?: string;
}
