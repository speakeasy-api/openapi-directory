package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditAtom
 * Edit atom.
**/
public class EditAtom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTimeOffset")
    public String endTimeOffset;
    public EditAtom withEndTimeOffset(String endTimeOffset) {
        this.endTimeOffset = endTimeOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputs")
    public String[] inputs;
    public EditAtom withInputs(String[] inputs) {
        this.inputs = inputs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public EditAtom withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeOffset")
    public String startTimeOffset;
    public EditAtom withStartTimeOffset(String startTimeOffset) {
        this.startTimeOffset = startTimeOffset;
        return this;
    }
}