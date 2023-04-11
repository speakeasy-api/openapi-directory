import { SpeakeasyBase } from "../../../internal/utils";
import { MemcacheParameters } from "./memcacheparameters";
/**
 * Output only. Current state of the Memcached node.
 */
export declare enum NodeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
export declare class Node extends SpeakeasyBase {
    /**
     * Output only. Hostname or IP address of the Memcached node used by the clients to connect to the Memcached server on this node.
     */
    host?: string;
    /**
     * Output only. Identifier of the Memcached node. The node id does not include project or location like the Memcached instance name.
     */
    nodeId?: string;
    parameters?: MemcacheParameters;
    /**
     * Output only. The port number of the Memcached server on this node.
     */
    port?: number;
    /**
     * Output only. Current state of the Memcached node.
     */
    state?: NodeStateEnum;
    /**
     * Output only. Returns true if there is an update waiting to be applied
     */
    updateAvailable?: boolean;
    /**
     * Output only. Location (GCP Zone) for the Memcached node.
     */
    zone?: string;
}
