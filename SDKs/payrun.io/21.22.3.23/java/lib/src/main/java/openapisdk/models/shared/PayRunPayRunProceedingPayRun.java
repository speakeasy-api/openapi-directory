package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayRunPayRunProceedingPayRun
 * The pay runs' proceeding pay run
**/
public class PayRunPayRunProceedingPayRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@href")
    public String atHref;
    public PayRunPayRunProceedingPayRun withAtHref(String atHref) {
        this.atHref = atHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@rel")
    public String atRel;
    public PayRunPayRunProceedingPayRun withAtRel(String atRel) {
        this.atRel = atRel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@title")
    public String atTitle;
    public PayRunPayRunProceedingPayRun withAtTitle(String atTitle) {
        this.atTitle = atTitle;
        return this;
    }
}