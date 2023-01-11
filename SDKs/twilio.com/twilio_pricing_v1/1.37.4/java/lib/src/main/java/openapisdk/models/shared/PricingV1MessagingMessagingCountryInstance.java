package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV1MessagingMessagingCountryInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PricingV1MessagingMessagingCountryInstance withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_sms_prices")
    public PricingV1MessagingMessagingCountryInstanceInboundSmsPrices[] inboundSmsPrices;
    public PricingV1MessagingMessagingCountryInstance withInboundSmsPrices(PricingV1MessagingMessagingCountryInstanceInboundSmsPrices[] inboundSmsPrices) {
        this.inboundSmsPrices = inboundSmsPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public PricingV1MessagingMessagingCountryInstance withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_sms_prices")
    public PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices[] outboundSmsPrices;
    public PricingV1MessagingMessagingCountryInstance withOutboundSmsPrices(PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices[] outboundSmsPrices) {
        this.outboundSmsPrices = outboundSmsPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public PricingV1MessagingMessagingCountryInstance withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PricingV1MessagingMessagingCountryInstance withUrl(String url) {
        this.url = url;
        return this;
    }
}