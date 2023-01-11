package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Amount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pretax")
    public Price pretax;
    public Amount withPretax(Price pretax) {
        this.pretax = pretax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax")
    public Price tax;
    public Amount withTax(Price tax) {
        this.tax = tax;
        return this;
    }
}