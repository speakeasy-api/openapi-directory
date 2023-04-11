import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Route resource is the child of the PrivateConnection resource. It used to define a route for a PrivateConnection setup.
 */
export declare class Route extends SpeakeasyBase {
    /**
     * Output only. The create time of the resource.
     */
    createTime?: string;
    /**
     * Required. Destination address for connection
     */
    destinationAddress?: string;
    /**
     * Destination port for connection
     */
    destinationPort?: number;
    /**
     * Required. Display name.
     */
    displayName?: string;
    /**
     * Labels.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The resource's name.
     */
    name?: string;
    /**
     * Output only. The update time of the resource.
     */
    updateTime?: string;
}
/**
 * The Route resource is the child of the PrivateConnection resource. It used to define a route for a PrivateConnection setup.
 */
export declare class RouteInput extends SpeakeasyBase {
    /**
     * Required. Destination address for connection
     */
    destinationAddress?: string;
    /**
     * Destination port for connection
     */
    destinationPort?: number;
    /**
     * Required. Display name.
     */
    displayName?: string;
    /**
     * Labels.
     */
    labels?: Record<string, string>;
}
