package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RtiJobInstructionRtiJobInstructionRtiTransaction
 * The rti job instructions' rti transaction
**/
public class RtiJobInstructionRtiJobInstructionRtiTransaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public RtiJobInstructionRtiJobInstructionRtiTransaction withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public RtiJobInstructionRtiJobInstructionRtiTransaction withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public RtiJobInstructionRtiJobInstructionRtiTransaction withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}