package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Model
 * An ML model hosted in Firebase ML
**/
public class Model {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeOperations")
    public Operation[] activeOperations;
    public Model withActiveOperations(Operation[] activeOperations) {
        this.activeOperations = activeOperations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Model withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Model withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Model withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelHash")
    public String modelHash;
    public Model withModelHash(String modelHash) {
        this.modelHash = modelHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Model withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ModelState state;
    public Model withState(ModelState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Model withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tfliteModel")
    public TfLiteModel tfliteModel;
    public Model withTfliteModel(TfLiteModel tfliteModel) {
        this.tfliteModel = tfliteModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Model withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}