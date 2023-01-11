package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1DialogflowSource
 * A Dialogflow source of conversation data.
**/
public class GoogleCloudContactcenterinsightsV1DialogflowSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioUri")
    public String audioUri;
    public GoogleCloudContactcenterinsightsV1DialogflowSource withAudioUri(String audioUri) {
        this.audioUri = audioUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogflowConversation")
    public String dialogflowConversation;
    public GoogleCloudContactcenterinsightsV1DialogflowSource withDialogflowConversation(String dialogflowConversation) {
        this.dialogflowConversation = dialogflowConversation;
        return this;
    }
}