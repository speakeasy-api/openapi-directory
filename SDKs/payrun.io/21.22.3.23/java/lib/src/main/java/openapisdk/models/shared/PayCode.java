package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayCode")
    public PayCodePayCode payCode;
    public PayCode withPayCode(PayCodePayCode payCode) {
        this.payCode = payCode;
        return this;
    }
}