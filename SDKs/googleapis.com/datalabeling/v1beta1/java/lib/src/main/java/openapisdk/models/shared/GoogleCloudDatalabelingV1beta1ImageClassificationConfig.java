package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ImageClassificationConfig
 * Config for image classification human labeling task.
**/
public class GoogleCloudDatalabelingV1beta1ImageClassificationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowMultiLabel")
    public Boolean allowMultiLabel;
    public GoogleCloudDatalabelingV1beta1ImageClassificationConfig withAllowMultiLabel(Boolean allowMultiLabel) {
        this.allowMultiLabel = allowMultiLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSet")
    public String annotationSpecSet;
    public GoogleCloudDatalabelingV1beta1ImageClassificationConfig withAnnotationSpecSet(String annotationSpecSet) {
        this.annotationSpecSet = annotationSpecSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answerAggregationType")
    public GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum answerAggregationType;
    public GoogleCloudDatalabelingV1beta1ImageClassificationConfig withAnswerAggregationType(GoogleCloudDatalabelingV1beta1ImageClassificationConfigAnswerAggregationTypeEnum answerAggregationType) {
        this.answerAggregationType = answerAggregationType;
        return this;
    }
}