import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the warning.
 */
export declare enum ReportWarningTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    DataBeforeAccountTimezoneChange = "DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE",
    DataDelayed = "DATA_DELAYED",
    Other = "OTHER",
    ReportCurrencyNotAccountCurrency = "REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY"
}
/**
 * Warnings associated with generation of the report.
 */
export declare class ReportWarning extends SpeakeasyBase {
    /**
     * Describes the details of the warning message, in English.
     */
    description?: string;
    /**
     * Type of the warning.
     */
    type?: ReportWarningTypeEnum;
}
