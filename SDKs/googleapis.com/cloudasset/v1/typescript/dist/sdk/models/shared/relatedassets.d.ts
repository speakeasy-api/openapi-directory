import { SpeakeasyBase } from "../../../internal/utils";
import { RelatedAsset } from "./relatedasset";
import { RelationshipAttributes } from "./relationshipattributes";
/**
 * DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The detailed related assets with the `relationship_type`.
 */
export declare class RelatedAssets extends SpeakeasyBase {
    /**
     * The peer resources of the relationship.
     */
    assets?: RelatedAsset[];
    /**
     * DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`.
     */
    relationshipAttributes?: RelationshipAttributes;
}
