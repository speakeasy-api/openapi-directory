import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A light reference to an audit by id, used to group and weight audits in a given category.
 */
export declare class AuditRefs extends SpeakeasyBase {
    /**
     * The conventional acronym for the audit/metric.
     */
    acronym?: string;
    /**
     * The category group that the audit belongs to (optional).
     */
    group?: string;
    /**
     * The audit ref id.
     */
    id?: string;
    /**
     * Any audit IDs closely relevant to this one.
     */
    relevantAudits?: string[];
    /**
     * The weight this audit's score has on the overall category score.
     */
    weight?: number;
}
