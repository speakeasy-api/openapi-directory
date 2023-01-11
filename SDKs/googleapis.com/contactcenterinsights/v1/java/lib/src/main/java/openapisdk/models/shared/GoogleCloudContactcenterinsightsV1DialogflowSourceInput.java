package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1DialogflowSourceInput
 * A Dialogflow source of conversation data.
**/
public class GoogleCloudContactcenterinsightsV1DialogflowSourceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioUri")
    public String audioUri;
    public GoogleCloudContactcenterinsightsV1DialogflowSourceInput withAudioUri(String audioUri) {
        this.audioUri = audioUri;
        return this;
    }
}