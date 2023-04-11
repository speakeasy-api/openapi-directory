import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about a lookup column whose value comes from the associated relationship.
 */
export declare class LookupDetails extends SpeakeasyBase {
    /**
     * The name of the relationship column associated with the lookup.
     */
    relationshipColumn?: string;
    /**
     * The id of the relationship column.
     */
    relationshipColumnId?: string;
}
