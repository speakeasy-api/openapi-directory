package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV1PhoneNumberPhoneNumberCountryInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PricingV1PhoneNumberPhoneNumberCountryInstance withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public PricingV1PhoneNumberPhoneNumberCountryInstance withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number_prices")
    public PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices[] phoneNumberPrices;
    public PricingV1PhoneNumberPhoneNumberCountryInstance withPhoneNumberPrices(PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices[] phoneNumberPrices) {
        this.phoneNumberPrices = phoneNumberPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public PricingV1PhoneNumberPhoneNumberCountryInstance withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PricingV1PhoneNumberPhoneNumberCountryInstance withUrl(String url) {
        this.url = url;
        return this;
    }
}