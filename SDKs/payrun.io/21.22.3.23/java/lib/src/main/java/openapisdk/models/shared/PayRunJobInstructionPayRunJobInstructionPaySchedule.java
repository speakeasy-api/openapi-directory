package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayRunJobInstructionPayRunJobInstructionPaySchedule
 * The pay run job instructions' pay schedule
**/
public class PayRunJobInstructionPayRunJobInstructionPaySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public PayRunJobInstructionPayRunJobInstructionPaySchedule withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public PayRunJobInstructionPayRunJobInstructionPaySchedule withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public PayRunJobInstructionPayRunJobInstructionPaySchedule withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}