package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RtiJobInstructionRtiJobInstructionEmployer
 * The rti job instructions' employer
**/
public class RtiJobInstructionRtiJobInstructionEmployer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public RtiJobInstructionRtiJobInstructionEmployer withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public RtiJobInstructionRtiJobInstructionEmployer withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public RtiJobInstructionRtiJobInstructionEmployer withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}