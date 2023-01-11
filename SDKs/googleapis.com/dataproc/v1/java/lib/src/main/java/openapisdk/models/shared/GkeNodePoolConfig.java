package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeNodePoolConfig
 * The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).
**/
public class GkeNodePoolConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoscaling")
    public GkeNodePoolAutoscalingConfig autoscaling;
    public GkeNodePoolConfig withAutoscaling(GkeNodePoolAutoscalingConfig autoscaling) {
        this.autoscaling = autoscaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public GkeNodeConfig config;
    public GkeNodePoolConfig withConfig(GkeNodeConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public String[] locations;
    public GkeNodePoolConfig withLocations(String[] locations) {
        this.locations = locations;
        return this;
    }
}