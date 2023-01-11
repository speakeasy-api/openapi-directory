package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayLine")
    public PayLinePayLine payLine;
    public PayLine withPayLine(PayLinePayLine payLine) {
        this.payLine = payLine;
        return this;
    }
}