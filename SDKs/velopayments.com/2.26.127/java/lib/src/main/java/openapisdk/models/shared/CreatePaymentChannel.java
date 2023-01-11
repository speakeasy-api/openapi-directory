package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePaymentChannel {
    @JsonProperty("accountName")
    public String accountName;
    public CreatePaymentChannel withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public CreatePaymentChannel withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("countryCode")
    public CreatePaymentChannelCountryCodeEnum countryCode;
    public CreatePaymentChannel withCountryCode(CreatePaymentChannelCountryCodeEnum countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("currency")
    public CreatePaymentChannelCurrencyEnum currency;
    public CreatePaymentChannel withCurrency(CreatePaymentChannelCurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public CreatePaymentChannel withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelName")
    public String paymentChannelName;
    public CreatePaymentChannel withPaymentChannelName(String paymentChannelName) {
        this.paymentChannelName = paymentChannelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public CreatePaymentChannel withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
}