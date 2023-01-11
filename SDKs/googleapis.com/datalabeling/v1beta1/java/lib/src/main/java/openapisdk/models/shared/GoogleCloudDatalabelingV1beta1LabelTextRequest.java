package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1LabelTextRequest
 * Request message for LabelText.
**/
public class GoogleCloudDatalabelingV1beta1LabelTextRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicConfig")
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig basicConfig;
    public GoogleCloudDatalabelingV1beta1LabelTextRequest withBasicConfig(GoogleCloudDatalabelingV1beta1HumanAnnotationConfig basicConfig) {
        this.basicConfig = basicConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feature")
    public GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum feature;
    public GoogleCloudDatalabelingV1beta1LabelTextRequest withFeature(GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum feature) {
        this.feature = feature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textClassificationConfig")
    public GoogleCloudDatalabelingV1beta1TextClassificationConfig textClassificationConfig;
    public GoogleCloudDatalabelingV1beta1LabelTextRequest withTextClassificationConfig(GoogleCloudDatalabelingV1beta1TextClassificationConfig textClassificationConfig) {
        this.textClassificationConfig = textClassificationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textEntityExtractionConfig")
    public GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig textEntityExtractionConfig;
    public GoogleCloudDatalabelingV1beta1LabelTextRequest withTextEntityExtractionConfig(GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig textEntityExtractionConfig) {
        this.textEntityExtractionConfig = textEntityExtractionConfig;
        return this;
    }
}