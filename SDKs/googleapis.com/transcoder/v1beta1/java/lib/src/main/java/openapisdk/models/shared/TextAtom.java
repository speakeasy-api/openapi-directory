package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextAtom
 * The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
**/
public class TextAtom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputs")
    public TextInput[] inputs;
    public TextAtom withInputs(TextInput[] inputs) {
        this.inputs = inputs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public TextAtom withKey(String key) {
        this.key = key;
        return this;
    }
}