import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary.
 */
export declare class Mesh extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string;
    /**
     * Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to be redirected to this port regardless of its actual ip:port destination. If unset, a port '15001' is used as the interception port. This will is applicable only for sidecar proxy deployments.
     */
    interceptionPort?: number;
    /**
     * Optional. Set of label tags associated with the Mesh resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the Mesh resource. It matches pattern `projects/* /locations/global/meshes/`.
     */
    name?: string;
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
 * Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary.
 */
export declare class MeshInput extends SpeakeasyBase {
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string;
    /**
     * Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to be redirected to this port regardless of its actual ip:port destination. If unset, a port '15001' is used as the interception port. This will is applicable only for sidecar proxy deployments.
     */
    interceptionPort?: number;
    /**
     * Optional. Set of label tags associated with the Mesh resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the Mesh resource. It matches pattern `projects/* /locations/global/meshes/`.
     */
    name?: string;
}
