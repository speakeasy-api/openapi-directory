import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single record of a rule which was used for a mapping.
 */
export declare class EntityMappingLogEntry extends SpeakeasyBase {
    /**
     * Comment.
     */
    mappingComment?: string;
    /**
     * Which rule caused this log entry.
     */
    ruleId?: string;
    /**
     * Rule revision ID.
     */
    ruleRevisionId?: string;
}
