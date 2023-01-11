package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioChannel
 * The audio channel.
**/
public class AudioChannel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputs")
    public AudioChannelInput[] inputs;
    public AudioChannel withInputs(AudioChannelInput[] inputs) {
        this.inputs = inputs;
        return this;
    }
}