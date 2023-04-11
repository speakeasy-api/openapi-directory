import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Fleet is the fleet configuration for the cluster.
 */
export declare class Fleet extends SpeakeasyBase {
    /**
     * [Output only] The full resource name of the registered fleet membership of the cluster, in the format `//gkehub.googleapis.com/projects/* /locations/* /memberships/*`.
     */
    membership?: string;
    /**
     * [Output only] Whether the cluster has been registered through the fleet API.
     */
    preRegistered?: boolean;
    /**
     * The Fleet host project(project ID or project number) where this cluster will be registered to. This field cannot be changed after the cluster has been registered.
     */
    project?: string;
}
