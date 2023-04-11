import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The severity of the alert.
 */
export declare enum CodeScanningAlertRuleSeverityEnum {
    None = "none",
    Note = "note",
    Warning = "warning",
    Error = "error"
}
export declare class CodeScanningAlertRule extends SpeakeasyBase {
    /**
     * A short description of the rule used to detect the alert.
     */
    description?: string;
    /**
     * description of the rule used to detect the alert.
     */
    fullDescription?: string;
    /**
     * Detailed documentation for the rule as GitHub Flavored Markdown.
     */
    help?: string;
    /**
     * A unique identifier for the rule used to detect the alert.
     */
    id?: string;
    /**
     * The name of the rule used to detect the alert.
     */
    name?: string;
    /**
     * The severity of the alert.
     */
    severity?: CodeScanningAlertRuleSeverityEnum;
    /**
     * A set of tags applicable for the rule.
     */
    tags?: string[];
}
