package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VirtualClusterConfig
 * The Dataproc cluster config for a cluster that does not directly control the underlying compute resources, such as a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke).
**/
public class VirtualClusterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auxiliaryServicesConfig")
    public AuxiliaryServicesConfig auxiliaryServicesConfig;
    public VirtualClusterConfig withAuxiliaryServicesConfig(AuxiliaryServicesConfig auxiliaryServicesConfig) {
        this.auxiliaryServicesConfig = auxiliaryServicesConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesClusterConfig")
    public KubernetesClusterConfig kubernetesClusterConfig;
    public VirtualClusterConfig withKubernetesClusterConfig(KubernetesClusterConfig kubernetesClusterConfig) {
        this.kubernetesClusterConfig = kubernetesClusterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stagingBucket")
    public String stagingBucket;
    public VirtualClusterConfig withStagingBucket(String stagingBucket) {
        this.stagingBucket = stagingBucket;
        return this;
    }
}