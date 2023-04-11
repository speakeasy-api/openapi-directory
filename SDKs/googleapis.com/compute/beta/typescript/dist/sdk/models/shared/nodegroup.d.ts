import { SpeakeasyBase } from "../../../internal/utils";
import { NodeGroupAutoscalingPolicy } from "./nodegroupautoscalingpolicy";
import { NodeGroupMaintenanceWindow } from "./nodegroupmaintenancewindow";
import { ShareSettings } from "./sharesettings";
/**
 * Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT. For more information, see Maintenance policies.
 */
export declare enum NodeGroupMaintenancePolicyEnum {
    Default = "DEFAULT",
    MaintenancePolicyUnspecified = "MAINTENANCE_POLICY_UNSPECIFIED",
    MigrateWithinNodeGroup = "MIGRATE_WITHIN_NODE_GROUP",
    RestartInPlace = "RESTART_IN_PLACE"
}
export declare enum NodeGroupStatusEnum {
    Creating = "CREATING",
    Deleting = "DELETING",
    Invalid = "INVALID",
    Ready = "READY"
}
/**
 * Represents a sole-tenant Node Group resource. A sole-tenant node is a physical server that is dedicated to hosting VM instances only for your specific project. Use sole-tenant nodes to keep your instances physically separated from instances in other projects, or to group your instances together on the same host hardware. For more information, read Sole-tenant nodes.
 */
export declare class NodeGroup extends SpeakeasyBase {
    autoscalingPolicy?: NodeGroupAutoscalingPolicy;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    fingerprint?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] The type of the resource. Always compute#nodeGroup for node group.
     */
    kind?: string;
    /**
     * An opaque location hint used to place the Node close to other resources. This field is for use by internal tools that use the public API. The location hint here on the NodeGroup overrides any location_hint present in the NodeTemplate.
     */
    locationHint?: string;
    /**
     * Specifies how to handle instances when a node in the group undergoes maintenance. Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT. For more information, see Maintenance policies.
     */
    maintenancePolicy?: NodeGroupMaintenancePolicyEnum;
    /**
     * Time window specified for daily maintenance operations. GCE's internal maintenance will be performed within this window.
     */
    maintenanceWindow?: NodeGroupMaintenanceWindow;
    /**
     * The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * URL of the node template to create the node group from.
     */
    nodeTemplate?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * The share setting for reservations and sole tenancy node groups.
     */
    shareSettings?: ShareSettings;
    /**
     * [Output Only] The total number of nodes in the node group.
     */
    size?: number;
    status?: NodeGroupStatusEnum;
    /**
     * [Output Only] The name of the zone where the node group resides, such as us-central1-a.
     */
    zone?: string;
}
