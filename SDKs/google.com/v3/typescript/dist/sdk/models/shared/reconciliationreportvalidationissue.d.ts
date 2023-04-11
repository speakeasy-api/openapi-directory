import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an issue encountered when validating a reconciliation report.
 */
export declare class ReconciliationReportValidationIssue extends SpeakeasyBase {
    /**
     * Text description of the issue, typically including what was seen and why it was invalid.
     */
    description?: string;
    /**
     * Name of the invalid field. If no field name is given, this issue applies to the whole line (or file).
     */
    fieldName?: string;
    /**
     * The line number on which the issue was detected. If this field is 0, the issue applies to the whole file.
     */
    lineNum?: number;
}
