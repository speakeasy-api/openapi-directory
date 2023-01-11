package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreditCard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bin")
    public String bin;
    public CreditCard withBin(String bin) {
        this.bin = bin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CreditCard withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_code")
    public String paymentCode;
    public CreditCard withPaymentCode(String paymentCode) {
        this.paymentCode = paymentCode;
        return this;
    }
}