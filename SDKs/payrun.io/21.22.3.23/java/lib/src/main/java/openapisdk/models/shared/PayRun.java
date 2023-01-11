package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayRun")
    public PayRunPayRun payRun;
    public PayRun withPayRun(PayRunPayRun payRun) {
        this.payRun = payRun;
        return this;
    }
}