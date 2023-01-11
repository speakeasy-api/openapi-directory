package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePaymentChannel2 {
    @JsonProperty("accountName")
    public String accountName;
    public CreatePaymentChannel2 withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public CreatePaymentChannel2 withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("countryCode")
    public CreatePaymentChannel2CountryCodeEnum countryCode;
    public CreatePaymentChannel2 withCountryCode(CreatePaymentChannel2CountryCodeEnum countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonProperty("currency")
    public CreatePaymentChannel2CurrencyEnum currency;
    public CreatePaymentChannel2 withCurrency(CreatePaymentChannel2CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public CreatePaymentChannel2 withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentChannelName")
    public String paymentChannelName;
    public CreatePaymentChannel2 withPaymentChannelName(String paymentChannelName) {
        this.paymentChannelName = paymentChannelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public CreatePaymentChannel2 withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
}