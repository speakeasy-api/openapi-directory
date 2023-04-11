import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DEPRECATED. This message only presents for the purpose of backward-compatibility. The server will never populate this message in responses. The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`.
 */
export declare class RelationshipAttributes extends SpeakeasyBase {
    /**
     * The detail of the relationship, e.g. `contains`, `attaches`
     */
    action?: string;
    /**
     * The source asset type. Example: `compute.googleapis.com/Instance`
     */
    sourceResourceType?: string;
    /**
     * The target asset type. Example: `compute.googleapis.com/Disk`
     */
    targetResourceType?: string;
    /**
     * The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP`
     */
    type?: string;
}
