package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioAtom
 * The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
**/
public class AudioAtom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public AudioChannel[] channels;
    public AudioAtom withChannels(AudioChannel[] channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public AudioAtom withKey(String key) {
        this.key = key;
        return this;
    }
}