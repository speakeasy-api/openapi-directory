import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportLineReportLine extends SpeakeasyBase {
    /**
     * The report lines' description
     */
    description?: string;
    /**
     * The report lines' generated
     */
    generated?: Date;
    /**
     * The report lines' tax month
     */
    taxMonth?: number;
    /**
     * The report lines' tax year
     */
    taxYear?: number;
    /**
     * The report lines' value
     */
    value?: number;
}
/**
 * The report line object.
 */
export declare class ReportLine extends SpeakeasyBase {
    reportLine?: ReportLineReportLine;
}
