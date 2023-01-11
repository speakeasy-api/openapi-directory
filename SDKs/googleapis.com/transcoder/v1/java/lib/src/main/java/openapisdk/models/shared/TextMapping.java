package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextMapping
 * The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
**/
public class TextMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("atomKey")
    public String atomKey;
    public TextMapping withAtomKey(String atomKey) {
        this.atomKey = atomKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputKey")
    public String inputKey;
    public TextMapping withInputKey(String inputKey) {
        this.inputKey = inputKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputTrack")
    public Integer inputTrack;
    public TextMapping withInputTrack(Integer inputTrack) {
        this.inputTrack = inputTrack;
        return this;
    }
}