import { SpeakeasyBase } from "../../../internal/utils";
import { AuxiliaryServicesConfig } from "./auxiliaryservicesconfig";
import { KubernetesClusterConfig } from "./kubernetesclusterconfig";
/**
 * The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview).
 */
export declare class VirtualClusterConfig extends SpeakeasyBase {
    /**
     * Auxiliary services configuration for a Cluster.
     */
    auxiliaryServicesConfig?: AuxiliaryServicesConfig;
    /**
     * The configuration for running the Dataproc cluster on Kubernetes.
     */
    kubernetesClusterConfig?: KubernetesClusterConfig;
    /**
     * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, Cloud Dataproc will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see Dataproc staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
     */
    stagingBucket?: string;
}
