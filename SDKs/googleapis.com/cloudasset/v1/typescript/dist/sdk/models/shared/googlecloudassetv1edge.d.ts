import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A directional edge.
 */
export declare class GoogleCloudAssetV1Edge extends SpeakeasyBase {
    /**
     * The source node of the edge. For example, it could be a full resource name for a resource node or an email of an identity.
     */
    sourceNode?: string;
    /**
     * The target node of the edge. For example, it could be a full resource name for a resource node or an email of an identity.
     */
    targetNode?: string;
}
