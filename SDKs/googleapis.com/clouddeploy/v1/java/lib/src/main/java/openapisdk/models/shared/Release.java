package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Release
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
**/
public class Release {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abandoned")
    public Boolean abandoned;
    public Release withAbandoned(Boolean abandoned) {
        this.abandoned = abandoned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public Release withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildArtifacts")
    public BuildArtifact[] buildArtifacts;
    public Release withBuildArtifacts(BuildArtifact[] buildArtifacts) {
        this.buildArtifacts = buildArtifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Release withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryPipelineSnapshot")
    public DeliveryPipeline deliveryPipelineSnapshot;
    public Release withDeliveryPipelineSnapshot(DeliveryPipeline deliveryPipelineSnapshot) {
        this.deliveryPipelineSnapshot = deliveryPipelineSnapshot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Release withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Release withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Release withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Release withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderEndTime")
    public String renderEndTime;
    public Release withRenderEndTime(String renderEndTime) {
        this.renderEndTime = renderEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderStartTime")
    public String renderStartTime;
    public Release withRenderStartTime(String renderStartTime) {
        this.renderStartTime = renderStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renderState")
    public ReleaseRenderStateEnum renderState;
    public Release withRenderState(ReleaseRenderStateEnum renderState) {
        this.renderState = renderState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skaffoldConfigPath")
    public String skaffoldConfigPath;
    public Release withSkaffoldConfigPath(String skaffoldConfigPath) {
        this.skaffoldConfigPath = skaffoldConfigPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skaffoldConfigUri")
    public String skaffoldConfigUri;
    public Release withSkaffoldConfigUri(String skaffoldConfigUri) {
        this.skaffoldConfigUri = skaffoldConfigUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skaffoldVersion")
    public String skaffoldVersion;
    public Release withSkaffoldVersion(String skaffoldVersion) {
        this.skaffoldVersion = skaffoldVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetArtifacts")
    public java.util.Map<String, TargetArtifact> targetArtifacts;
    public Release withTargetArtifacts(java.util.Map<String, TargetArtifact> targetArtifacts) {
        this.targetArtifacts = targetArtifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetRenders")
    public java.util.Map<String, TargetRender> targetRenders;
    public Release withTargetRenders(java.util.Map<String, TargetRender> targetRenders) {
        this.targetRenders = targetRenders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetSnapshots")
    public Target[] targetSnapshots;
    public Release withTargetSnapshots(Target[] targetSnapshots) {
        this.targetSnapshots = targetSnapshots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public Release withUid(String uid) {
        this.uid = uid;
        return this;
    }
}