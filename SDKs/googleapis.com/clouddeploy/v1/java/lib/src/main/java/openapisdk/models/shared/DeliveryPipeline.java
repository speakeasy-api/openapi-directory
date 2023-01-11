package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeliveryPipeline
 * A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
**/
public class DeliveryPipeline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public DeliveryPipeline withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public PipelineCondition condition;
    public DeliveryPipeline withCondition(PipelineCondition condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public DeliveryPipeline withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DeliveryPipeline withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public DeliveryPipeline withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public DeliveryPipeline withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DeliveryPipeline withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialPipeline")
    public SerialPipeline serialPipeline;
    public DeliveryPipeline withSerialPipeline(SerialPipeline serialPipeline) {
        this.serialPipeline = serialPipeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspended")
    public Boolean suspended;
    public DeliveryPipeline withSuspended(Boolean suspended) {
        this.suspended = suspended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public DeliveryPipeline withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public DeliveryPipeline withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}