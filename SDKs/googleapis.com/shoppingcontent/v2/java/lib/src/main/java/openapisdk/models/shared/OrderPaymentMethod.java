package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderPaymentMethod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingAddress")
    public OrderAddress billingAddress;
    public OrderPaymentMethod withBillingAddress(OrderAddress billingAddress) {
        this.billingAddress = billingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationMonth")
    public Integer expirationMonth;
    public OrderPaymentMethod withExpirationMonth(Integer expirationMonth) {
        this.expirationMonth = expirationMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationYear")
    public Integer expirationYear;
    public OrderPaymentMethod withExpirationYear(Integer expirationYear) {
        this.expirationYear = expirationYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastFourDigits")
    public String lastFourDigits;
    public OrderPaymentMethod withLastFourDigits(String lastFourDigits) {
        this.lastFourDigits = lastFourDigits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public OrderPaymentMethod withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public OrderPaymentMethod withType(String type) {
        this.type = type;
        return this;
    }
}