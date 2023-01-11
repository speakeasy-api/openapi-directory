package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MatchSimpleAlliances
 * A list of alliances, the teams on the alliances, and their score.
**/
public class MatchSimpleAlliances {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blue")
    public MatchAlliance blue;
    public MatchSimpleAlliances withBlue(MatchAlliance blue) {
        this.blue = blue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("red")
    public MatchAlliance red;
    public MatchSimpleAlliances withRed(MatchAlliance red) {
        this.red = red;
        return this;
    }
}