package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestOrderPaymentMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationMonth")
    public Integer expirationMonth;
    public TestOrderPaymentMethod withExpirationMonth(Integer expirationMonth) {
        this.expirationMonth = expirationMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationYear")
    public Integer expirationYear;
    public TestOrderPaymentMethod withExpirationYear(Integer expirationYear) {
        this.expirationYear = expirationYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastFourDigits")
    public String lastFourDigits;
    public TestOrderPaymentMethod withLastFourDigits(String lastFourDigits) {
        this.lastFourDigits = lastFourDigits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("predefinedBillingAddress")
    public String predefinedBillingAddress;
    public TestOrderPaymentMethod withPredefinedBillingAddress(String predefinedBillingAddress) {
        this.predefinedBillingAddress = predefinedBillingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public TestOrderPaymentMethod withType(String type) {
        this.type = type;
        return this;
    }
}