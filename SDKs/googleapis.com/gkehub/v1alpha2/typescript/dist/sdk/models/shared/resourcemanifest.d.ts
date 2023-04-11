import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ResourceManifest represents a single Kubernetes resource to be applied to the cluster.
 */
export declare class ResourceManifest extends SpeakeasyBase {
    /**
     * Whether the resource provided in the manifest is `cluster_scoped`. If unset, the manifest is assumed to be namespace scoped. This field is used for REST mapping when applying the resource in a cluster.
     */
    clusterScoped?: boolean;
    /**
     * YAML manifest of the resource.
     */
    manifest?: string;
}
