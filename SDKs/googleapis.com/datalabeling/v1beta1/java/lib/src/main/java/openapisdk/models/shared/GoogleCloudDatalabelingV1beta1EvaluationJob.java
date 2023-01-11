package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1EvaluationJob
 * Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.
**/
public class GoogleCloudDatalabelingV1beta1EvaluationJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSet")
    public String annotationSpecSet;
    public GoogleCloudDatalabelingV1beta1EvaluationJob withAnnotationSpecSet(String annotationSpecSet) {
        this.annotationSpecSet = annotationSpecSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attempts")
    public GoogleCloudDatalabelingV1beta1Attempt[] attempts;
    public GoogleCloudDatalabelingV1beta1EvaluationJob withAttempts(GoogleCloudDatalabelingV1beta1Attempt[] attempts) {
        this.attempts = attempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudDatalabelingV1beta1EvaluationJob withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudDatalabelingV1beta1EvaluationJob withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationJobConfig")
    public GoogleCloudDatalabelingV1beta1EvaluationJobConfig evaluationJobConfig;
    public GoogleCloudDatalabelingV1beta1EvaluationJob withEvaluationJobConfig(GoogleCloudDatalabelingV1beta1EvaluationJobConfig evaluationJobConfig) {
        this.evaluationJobConfig = evaluationJobConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelMissingGroundTruth")
    public Boolean labelMissingGroundTruth;
    public GoogleCloudDatalabelingV1beta1EvaluationJob withLabelMissingGroundTruth(Boolean labelMissingGroundTruth) {
        this.labelMissingGroundTruth = labelMissingGroundTruth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelVersion")
    public String modelVersion;
    public GoogleCloudDatalabelingV1beta1EvaluationJob withModelVersion(String modelVersion) {
        this.modelVersion = modelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDatalabelingV1beta1EvaluationJob withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public String schedule;
    public GoogleCloudDatalabelingV1beta1EvaluationJob withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum state;
    public GoogleCloudDatalabelingV1beta1EvaluationJob withState(GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum state) {
        this.state = state;
        return this;
    }
}