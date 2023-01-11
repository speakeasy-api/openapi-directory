package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetInput
 * A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
**/
public class TargetInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public TargetInput withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anthosCluster")
    public AnthosCluster anthosCluster;
    public TargetInput withAnthosCluster(AnthosCluster anthosCluster) {
        this.anthosCluster = anthosCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TargetInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public TargetInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionConfigs")
    public ExecutionConfig[] executionConfigs;
    public TargetInput withExecutionConfigs(ExecutionConfig[] executionConfigs) {
        this.executionConfigs = executionConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gke")
    public GkeCluster gke;
    public TargetInput withGke(GkeCluster gke) {
        this.gke = gke;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public TargetInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TargetInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireApproval")
    public Boolean requireApproval;
    public TargetInput withRequireApproval(Boolean requireApproval) {
        this.requireApproval = requireApproval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run")
    public CloudRunLocation run;
    public TargetInput withRun(CloudRunLocation run) {
        this.run = run;
        return this;
    }
}