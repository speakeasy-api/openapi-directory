package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1Evaluation
 * Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully.
**/
public class GoogleCloudDatalabelingV1beta1Evaluation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationType")
    public GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum annotationType;
    public GoogleCloudDatalabelingV1beta1Evaluation withAnnotationType(GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum annotationType) {
        this.annotationType = annotationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public GoogleCloudDatalabelingV1beta1EvaluationConfig config;
    public GoogleCloudDatalabelingV1beta1Evaluation withConfig(GoogleCloudDatalabelingV1beta1EvaluationConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudDatalabelingV1beta1Evaluation withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluatedItemCount")
    public String evaluatedItemCount;
    public GoogleCloudDatalabelingV1beta1Evaluation withEvaluatedItemCount(String evaluatedItemCount) {
        this.evaluatedItemCount = evaluatedItemCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationJobRunTime")
    public String evaluationJobRunTime;
    public GoogleCloudDatalabelingV1beta1Evaluation withEvaluationJobRunTime(String evaluationJobRunTime) {
        this.evaluationJobRunTime = evaluationJobRunTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationMetrics")
    public GoogleCloudDatalabelingV1beta1EvaluationMetrics evaluationMetrics;
    public GoogleCloudDatalabelingV1beta1Evaluation withEvaluationMetrics(GoogleCloudDatalabelingV1beta1EvaluationMetrics evaluationMetrics) {
        this.evaluationMetrics = evaluationMetrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudDatalabelingV1beta1Evaluation withName(String name) {
        this.name = name;
        return this;
    }
}