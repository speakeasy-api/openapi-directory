package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DpsJobInstructionDpsJobInstructionEmployer
 * The dps job instructions' employer
**/
public class DpsJobInstructionDpsJobInstructionEmployer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public DpsJobInstructionDpsJobInstructionEmployer withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public DpsJobInstructionDpsJobInstructionEmployer withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public DpsJobInstructionDpsJobInstructionEmployer withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}