import { SpeakeasyBase } from "../../../internal/utils";
import { ListProperties } from "./listproperties";
import { SuggestedListProperties } from "./suggestedlistproperties";
/**
 * A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that's part of a list has a reference to the list's ID in its bullet.
 */
export declare class List extends SpeakeasyBase {
    /**
     * The properties of a list that describe the look and feel of bullets belonging to paragraphs associated with a list.
     */
    listProperties?: ListProperties;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this list.
     */
    suggestedDeletionIds?: string[];
    /**
     * The suggested insertion ID. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionId?: string;
    /**
     * The suggested changes to the list properties, keyed by suggestion ID.
     */
    suggestedListPropertiesChanges?: Record<string, SuggestedListProperties>;
}
