package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1TextClassificationConfig
 * Config for text classification human labeling task.
**/
public class GoogleCloudDatalabelingV1beta1TextClassificationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowMultiLabel")
    public Boolean allowMultiLabel;
    public GoogleCloudDatalabelingV1beta1TextClassificationConfig withAllowMultiLabel(Boolean allowMultiLabel) {
        this.allowMultiLabel = allowMultiLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSet")
    public String annotationSpecSet;
    public GoogleCloudDatalabelingV1beta1TextClassificationConfig withAnnotationSpecSet(String annotationSpecSet) {
        this.annotationSpecSet = annotationSpecSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentimentConfig")
    public GoogleCloudDatalabelingV1beta1SentimentConfig sentimentConfig;
    public GoogleCloudDatalabelingV1beta1TextClassificationConfig withSentimentConfig(GoogleCloudDatalabelingV1beta1SentimentConfig sentimentConfig) {
        this.sentimentConfig = sentimentConfig;
        return this;
    }
}