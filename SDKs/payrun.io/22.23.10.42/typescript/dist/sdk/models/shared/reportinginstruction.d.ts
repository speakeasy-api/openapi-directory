import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportingInstructionReportingInstruction extends SpeakeasyBase {
    /**
     * The reporting instructions' end date
     */
    endDate?: Date;
    /**
     * The reporting instructions' start date
     */
    startDate?: Date;
    /**
     * The reporting instructions' tax month
     */
    taxMonth?: number;
    /**
     * The reporting instructions' tax year
     */
    taxYear?: number;
    /**
     * The reporting instructions' value
     */
    value?: number;
}
/**
 * The reporting instruction object.
 */
export declare class ReportingInstruction extends SpeakeasyBase {
    reportingInstruction?: ReportingInstructionReportingInstruction;
}
