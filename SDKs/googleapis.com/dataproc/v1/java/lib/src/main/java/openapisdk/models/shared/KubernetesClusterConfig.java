package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KubernetesClusterConfig
 * The configuration for running the Dataproc cluster on Kubernetes.
**/
public class KubernetesClusterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gkeClusterConfig")
    public GkeClusterConfig gkeClusterConfig;
    public KubernetesClusterConfig withGkeClusterConfig(GkeClusterConfig gkeClusterConfig) {
        this.gkeClusterConfig = gkeClusterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesNamespace")
    public String kubernetesNamespace;
    public KubernetesClusterConfig withKubernetesNamespace(String kubernetesNamespace) {
        this.kubernetesNamespace = kubernetesNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesSoftwareConfig")
    public KubernetesSoftwareConfig kubernetesSoftwareConfig;
    public KubernetesClusterConfig withKubernetesSoftwareConfig(KubernetesSoftwareConfig kubernetesSoftwareConfig) {
        this.kubernetesSoftwareConfig = kubernetesSoftwareConfig;
        return this;
    }
}