package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomBiddingScriptInput
 * A single custom bidding script.
**/
public class CustomBiddingScriptInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public CustomBiddingScriptRef script;
    public CustomBiddingScriptInput withScript(CustomBiddingScriptRef script) {
        this.script = script;
        return this;
    }
}