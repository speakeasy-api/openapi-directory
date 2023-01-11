package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventOpRs
 * OPR, DPR, and CCWM for teams at the event.
**/
public class EventOpRs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccwms")
    public java.util.Map<String, Float> ccwms;
    public EventOpRs withCcwms(java.util.Map<String, Float> ccwms) {
        this.ccwms = ccwms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dprs")
    public java.util.Map<String, Float> dprs;
    public EventOpRs withDprs(java.util.Map<String, Float> dprs) {
        this.dprs = dprs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oprs")
    public java.util.Map<String, Float> oprs;
    public EventOpRs withOprs(java.util.Map<String, Float> oprs) {
        this.oprs = oprs;
        return this;
    }
}