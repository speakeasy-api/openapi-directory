package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TrainResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public String algorithm;
    public TrainResponse withAlgorithm(String algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public TrainResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("datasetId")
    public Long datasetId;
    public TrainResponse withDatasetId(Long datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @JsonProperty("datasetVersionId")
    public Long datasetVersionId;
    public TrainResponse withDatasetVersionId(Long datasetVersionId) {
        this.datasetVersionId = datasetVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epochs")
    public Integer epochs;
    public TrainResponse withEpochs(Integer epochs) {
        this.epochs = epochs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureMsg")
    public String failureMsg;
    public TrainResponse withFailureMsg(String failureMsg) {
        this.failureMsg = failureMsg;
        return this;
    }
    @JsonProperty("language")
    public String language;
    public TrainResponse withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learningRate")
    public Double learningRate;
    public TrainResponse withLearningRate(Double learningRate) {
        this.learningRate = learningRate;
        return this;
    }
    @JsonProperty("modelId")
    public String modelId;
    public TrainResponse withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelType")
    public String modelType;
    public TrainResponse withModelType(String modelType) {
        this.modelType = modelType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public TrainResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public TrainResponse withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonProperty("progress")
    public Double progress;
    public TrainResponse withProgress(Double progress) {
        this.progress = progress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queuePosition")
    public Integer queuePosition;
    public TrainResponse withQueuePosition(Integer queuePosition) {
        this.queuePosition = queuePosition;
        return this;
    }
    @JsonProperty("status")
    public TrainResponseStatusEnum status;
    public TrainResponse withStatus(TrainResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trainParams")
    public String trainParams;
    public TrainResponse withTrainParams(String trainParams) {
        this.trainParams = trainParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trainStats")
    public String trainStats;
    public TrainResponse withTrainStats(String trainStats) {
        this.trainStats = trainStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public TrainResponse withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}