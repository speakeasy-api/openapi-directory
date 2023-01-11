package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1SentimentConfig
 * Config for setting up sentiments.
**/
public class GoogleCloudDatalabelingV1beta1SentimentConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableLabelSentimentSelection")
    public Boolean enableLabelSentimentSelection;
    public GoogleCloudDatalabelingV1beta1SentimentConfig withEnableLabelSentimentSelection(Boolean enableLabelSentimentSelection) {
        this.enableLabelSentimentSelection = enableLabelSentimentSelection;
        return this;
    }
}