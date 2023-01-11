package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * V2LanguageTrainParams
 * JSON that contains parameters that specify how the model is created
**/
public class V2LanguageTrainParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trainSplitRatio")
    public Float trainSplitRatio;
    public V2LanguageTrainParams withTrainSplitRatio(Float trainSplitRatio) {
        this.trainSplitRatio = trainSplitRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withFeedback")
    public Boolean withFeedback;
    public V2LanguageTrainParams withWithFeedback(Boolean withFeedback) {
        this.withFeedback = withFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withGlobalDatasetId")
    public Long withGlobalDatasetId;
    public V2LanguageTrainParams withWithGlobalDatasetId(Long withGlobalDatasetId) {
        this.withGlobalDatasetId = withGlobalDatasetId;
        return this;
    }
}