package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SynthesisInput
 * Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 bytes.
**/
public class SynthesisInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssml")
    public String ssml;
    public SynthesisInput withSsml(String ssml) {
        this.ssml = ssml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public SynthesisInput withText(String text) {
        this.text = text;
        return this;
    }
}