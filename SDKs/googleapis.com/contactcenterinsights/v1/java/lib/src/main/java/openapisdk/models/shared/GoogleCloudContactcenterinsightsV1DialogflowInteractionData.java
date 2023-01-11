package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1DialogflowInteractionData
 * Dialogflow interaction data.
**/
public class GoogleCloudContactcenterinsightsV1DialogflowInteractionData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Float confidence;
    public GoogleCloudContactcenterinsightsV1DialogflowInteractionData withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogflowIntentId")
    public String dialogflowIntentId;
    public GoogleCloudContactcenterinsightsV1DialogflowInteractionData withDialogflowIntentId(String dialogflowIntentId) {
        this.dialogflowIntentId = dialogflowIntentId;
        return this;
    }
}