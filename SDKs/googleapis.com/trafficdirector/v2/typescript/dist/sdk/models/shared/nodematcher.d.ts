import { SpeakeasyBase } from "../../../internal/utils";
import { StringMatcher } from "./stringmatcher";
import { StructMatcher } from "./structmatcher";
/**
 * Specifies the way to match a Node. The match follows AND semantics.
 */
export declare class NodeMatcher extends SpeakeasyBase {
    /**
     * Specifies the way to match a string. [#next-free-field: 7]
     */
    nodeId?: StringMatcher;
    /**
     * Specifies match criteria on the node metadata.
     */
    nodeMetadatas?: StructMatcher[];
}
