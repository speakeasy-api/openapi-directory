import { SpeakeasyBase } from "../../../internal/utils";
import { NodeGroup, NodeGroupInput } from "./nodegroup";
/**
 * Node group identification and configuration information.
 */
export declare class AuxiliaryNodeGroupInput extends SpeakeasyBase {
    /**
     * Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource.
     */
    nodeGroup?: NodeGroupInput;
    /**
     * Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
     */
    nodeGroupId?: string;
}
/**
 * Node group identification and configuration information.
 */
export declare class AuxiliaryNodeGroup extends SpeakeasyBase {
    /**
     * Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource.
     */
    nodeGroup?: NodeGroup;
    /**
     * Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters.
     */
    nodeGroupId?: string;
}
