package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReleaseInput
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
**/
public class ReleaseInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public ReleaseInput withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildArtifacts")
    public BuildArtifact[] buildArtifacts;
    public ReleaseInput withBuildArtifacts(BuildArtifact[] buildArtifacts) {
        this.buildArtifacts = buildArtifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryPipelineSnapshot")
    public DeliveryPipelineInput deliveryPipelineSnapshot;
    public ReleaseInput withDeliveryPipelineSnapshot(DeliveryPipelineInput deliveryPipelineSnapshot) {
        this.deliveryPipelineSnapshot = deliveryPipelineSnapshot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReleaseInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public ReleaseInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ReleaseInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReleaseInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skaffoldConfigPath")
    public String skaffoldConfigPath;
    public ReleaseInput withSkaffoldConfigPath(String skaffoldConfigPath) {
        this.skaffoldConfigPath = skaffoldConfigPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skaffoldConfigUri")
    public String skaffoldConfigUri;
    public ReleaseInput withSkaffoldConfigUri(String skaffoldConfigUri) {
        this.skaffoldConfigUri = skaffoldConfigUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skaffoldVersion")
    public String skaffoldVersion;
    public ReleaseInput withSkaffoldVersion(String skaffoldVersion) {
        this.skaffoldVersion = skaffoldVersion;
        return this;
    }
}