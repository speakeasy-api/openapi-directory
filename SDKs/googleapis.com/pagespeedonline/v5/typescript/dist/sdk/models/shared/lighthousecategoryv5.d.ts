import { SpeakeasyBase } from "../../../internal/utils";
import { AuditRefs } from "./auditrefs";
/**
 * A Lighthouse category.
 */
export declare class LighthouseCategoryV5 extends SpeakeasyBase {
    /**
     * An array of references to all the audit members of this category.
     */
    auditRefs?: AuditRefs[];
    /**
     * A more detailed description of the category and its importance.
     */
    description?: string;
    /**
     * The string identifier of the category.
     */
    id?: string;
    /**
     * A description for the manual audits in the category.
     */
    manualDescription?: string;
    /**
     * The overall score of the category, the weighted average of all its audits. (The category's score, can be null.)
     */
    score?: any;
    /**
     * The human-friendly name of the category.
     */
    title?: string;
}
