package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public String carrier;
    public PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mcc")
    public String mcc;
    public PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices withMcc(String mcc) {
        this.mcc = mcc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mnc")
    public String mnc;
    public PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices withMnc(String mnc) {
        this.mnc = mnc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prices")
    public PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices[] prices;
    public PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices withPrices(PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices[] prices) {
        this.prices = prices;
        return this;
    }
}