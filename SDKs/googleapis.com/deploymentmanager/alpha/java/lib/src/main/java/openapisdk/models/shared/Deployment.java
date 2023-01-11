package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Deployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credential")
    public Credential credential;
    public Deployment withCredential(Credential credential) {
        this.credential = credential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Deployment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public Deployment withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Deployment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertTime")
    public String insertTime;
    public Deployment withInsertTime(String insertTime) {
        this.insertTime = insertTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public DeploymentLabelEntry[] labels;
    public Deployment withLabels(DeploymentLabelEntry[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifest")
    public String manifest;
    public Deployment withManifest(String manifest) {
        this.manifest = manifest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Deployment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public Operation operation;
    public Deployment withOperation(Operation operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputs")
    public DeploymentOutputEntry[] outputs;
    public Deployment withOutputs(DeploymentOutputEntry[] outputs) {
        this.outputs = outputs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Deployment withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public TargetConfiguration target;
    public Deployment withTarget(TargetConfiguration target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update")
    public DeploymentUpdate update;
    public Deployment withUpdate(DeploymentUpdate update) {
        this.update = update;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Deployment withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}