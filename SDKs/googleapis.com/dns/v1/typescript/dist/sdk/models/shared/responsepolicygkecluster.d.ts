import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResponsePolicyGKECluster extends SpeakeasyBase {
    /**
     * The resource name of the cluster to bind this response policy to. This should be specified in the format like: projects/* /locations/* /clusters/*. This is referenced from GKE projects.locations.clusters.get API: https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/get
     */
    gkeClusterName?: string;
    kind?: string;
}
