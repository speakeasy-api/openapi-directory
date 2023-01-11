package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Model {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public String algorithm;
    public Model withAlgorithm(String algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Model withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("datasetId")
    public Long datasetId;
    public Model withDatasetId(Long datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @JsonProperty("datasetVersionId")
    public Long datasetVersionId;
    public Model withDatasetVersionId(Long datasetVersionId) {
        this.datasetVersionId = datasetVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureMsg")
    public String failureMsg;
    public Model withFailureMsg(String failureMsg) {
        this.failureMsg = failureMsg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public Model withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonProperty("modelId")
    public String modelId;
    public Model withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelType")
    public String modelType;
    public Model withModelType(String modelType) {
        this.modelType = modelType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Model withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public Model withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public Model withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonProperty("status")
    public ModelStatusEnum status;
    public Model withStatus(ModelStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public Model withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}