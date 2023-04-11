import { SpeakeasyBase } from "../../../internal/utils";
import { TcpRouteRouteRule } from "./tcprouterouterule";
/**
 * TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource.
 */
export declare class TcpRoute extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string;
    /**
     * Optional. Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/* /locations/global/gateways/`
     */
    gateways?: string[];
    /**
     * Optional. Set of label tags associated with the TcpRoute resource.
     */
    labels?: Record<string, string>;
    /**
     * Optional. Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/* /locations/global/meshes/` The attached Mesh should be of a type SIDECAR
     */
    meshes?: string[];
    /**
     * Required. Name of the TcpRoute resource. It matches pattern `projects/* /locations/global/tcpRoutes/tcp_route_name>`.
     */
    name?: string;
    /**
     * Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.
     */
    rules?: TcpRouteRouteRule[];
    /**
     * Output only. Server-defined URL of this resource
     */
    selfLink?: string;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string;
}
/**
 * TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource.
 */
export declare class TcpRouteInput extends SpeakeasyBase {
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string;
    /**
     * Optional. Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/* /locations/global/gateways/`
     */
    gateways?: string[];
    /**
     * Optional. Set of label tags associated with the TcpRoute resource.
     */
    labels?: Record<string, string>;
    /**
     * Optional. Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/* /locations/global/meshes/` The attached Mesh should be of a type SIDECAR
     */
    meshes?: string[];
    /**
     * Required. Name of the TcpRoute resource. It matches pattern `projects/* /locations/global/tcpRoutes/tcp_route_name>`.
     */
    name?: string;
    /**
     * Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match.
     */
    rules?: TcpRouteRouteRule[];
}
