import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An audit's result object in a Lighthouse result.
 */
export declare class LighthouseAuditResultV5 extends SpeakeasyBase {
    /**
     * The description of the audit.
     */
    description?: string;
    /**
     * Freeform details section of the audit.
     */
    details?: Record<string, any>;
    /**
     * The value that should be displayed on the UI for this audit.
     */
    displayValue?: string;
    /**
     * An error message from a thrown error inside the audit.
     */
    errorMessage?: string;
    /**
     * An explanation of the errors in the audit.
     */
    explanation?: string;
    /**
     * The audit's id.
     */
    id?: string;
    /**
     * The unit of the numeric_value field. Used to format the numeric value for display.
     */
    numericUnit?: string;
    /**
     * A numeric value that has a meaning specific to the audit, e.g. the number of nodes in the DOM or the timestamp of a specific load event. More information can be found in the audit details, if present.
     */
    numericValue?: number;
    /**
     * The score of the audit, can be null.
     */
    score?: any;
    /**
     * The enumerated score display mode.
     */
    scoreDisplayMode?: string;
    /**
     * The human readable title.
     */
    title?: string;
    /**
     * Possible warnings that occurred in the audit, can be null.
     */
    warnings?: any;
}
