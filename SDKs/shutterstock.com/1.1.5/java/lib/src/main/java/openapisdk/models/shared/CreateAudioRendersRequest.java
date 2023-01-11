package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateAudioRendersRequest
 * Render request data
**/
public class CreateAudioRendersRequest {
    @JsonProperty("audio_renders")
    public CreateAudioRender[] audioRenders;
    public CreateAudioRendersRequest withAudioRenders(CreateAudioRender[] audioRenders) {
        this.audioRenders = audioRenders;
        return this;
    }
}