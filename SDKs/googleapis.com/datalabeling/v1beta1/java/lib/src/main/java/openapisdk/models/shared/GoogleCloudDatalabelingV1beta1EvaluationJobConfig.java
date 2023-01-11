package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1EvaluationJobConfig
 * Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.
**/
public class GoogleCloudDatalabelingV1beta1EvaluationJobConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigqueryImportKeys")
    public java.util.Map<String, String> bigqueryImportKeys;
    public GoogleCloudDatalabelingV1beta1EvaluationJobConfig withBigqueryImportKeys(java.util.Map<String, String> bigqueryImportKeys) {
        this.bigqueryImportKeys = bigqueryImportKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingPolyConfig")
    public GoogleCloudDatalabelingV1beta1BoundingPolyConfig boundingPolyConfig;
    public GoogleCloudDatalabelingV1beta1EvaluationJobConfig withBoundingPolyConfig(GoogleCloudDatalabelingV1beta1BoundingPolyConfig boundingPolyConfig) {
        this.boundingPolyConfig = boundingPolyConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationConfig")
    public GoogleCloudDatalabelingV1beta1EvaluationConfig evaluationConfig;
    public GoogleCloudDatalabelingV1beta1EvaluationJobConfig withEvaluationConfig(GoogleCloudDatalabelingV1beta1EvaluationConfig evaluationConfig) {
        this.evaluationConfig = evaluationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evaluationJobAlertConfig")
    public GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig evaluationJobAlertConfig;
    public GoogleCloudDatalabelingV1beta1EvaluationJobConfig withEvaluationJobAlertConfig(GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig evaluationJobAlertConfig) {
        this.evaluationJobAlertConfig = evaluationJobAlertConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exampleCount")
    public Integer exampleCount;
    public GoogleCloudDatalabelingV1beta1EvaluationJobConfig withExampleCount(Integer exampleCount) {
        this.exampleCount = exampleCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exampleSamplePercentage")
    public Double exampleSamplePercentage;
    public GoogleCloudDatalabelingV1beta1EvaluationJobConfig withExampleSamplePercentage(Double exampleSamplePercentage) {
        this.exampleSamplePercentage = exampleSamplePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("humanAnnotationConfig")
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig humanAnnotationConfig;
    public GoogleCloudDatalabelingV1beta1EvaluationJobConfig withHumanAnnotationConfig(GoogleCloudDatalabelingV1beta1HumanAnnotationConfig humanAnnotationConfig) {
        this.humanAnnotationConfig = humanAnnotationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageClassificationConfig")
    public GoogleCloudDatalabelingV1beta1ImageClassificationConfig imageClassificationConfig;
    public GoogleCloudDatalabelingV1beta1EvaluationJobConfig withImageClassificationConfig(GoogleCloudDatalabelingV1beta1ImageClassificationConfig imageClassificationConfig) {
        this.imageClassificationConfig = imageClassificationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfig")
    public GoogleCloudDatalabelingV1beta1InputConfig inputConfig;
    public GoogleCloudDatalabelingV1beta1EvaluationJobConfig withInputConfig(GoogleCloudDatalabelingV1beta1InputConfig inputConfig) {
        this.inputConfig = inputConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textClassificationConfig")
    public GoogleCloudDatalabelingV1beta1TextClassificationConfig textClassificationConfig;
    public GoogleCloudDatalabelingV1beta1EvaluationJobConfig withTextClassificationConfig(GoogleCloudDatalabelingV1beta1TextClassificationConfig textClassificationConfig) {
        this.textClassificationConfig = textClassificationConfig;
        return this;
    }
}