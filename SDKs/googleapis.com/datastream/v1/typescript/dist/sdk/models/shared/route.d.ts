import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The route resource is the child of the private connection resource, used for defining a route for a private connection.
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
 * The route resource is the child of the private connection resource, used for defining a route for a private connection.
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
