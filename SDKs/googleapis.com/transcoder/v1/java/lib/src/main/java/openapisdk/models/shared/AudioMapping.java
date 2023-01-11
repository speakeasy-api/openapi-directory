package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioMapping
 * The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
**/
public class AudioMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("atomKey")
    public String atomKey;
    public AudioMapping withAtomKey(String atomKey) {
        this.atomKey = atomKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gainDb")
    public Double gainDb;
    public AudioMapping withGainDb(Double gainDb) {
        this.gainDb = gainDb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputChannel")
    public Integer inputChannel;
    public AudioMapping withInputChannel(Integer inputChannel) {
        this.inputChannel = inputChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputKey")
    public String inputKey;
    public AudioMapping withInputKey(String inputKey) {
        this.inputKey = inputKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputTrack")
    public Integer inputTrack;
    public AudioMapping withInputTrack(Integer inputTrack) {
        this.inputTrack = inputTrack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputChannel")
    public Integer outputChannel;
    public AudioMapping withOutputChannel(Integer outputChannel) {
        this.outputChannel = outputChannel;
        return this;
    }
}