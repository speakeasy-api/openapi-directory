package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMessagingCountryListMessagingCountryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public openapisdk.models.shared.PricingV1MessagingMessagingCountry[] countries;
    public ListMessagingCountryListMessagingCountryResponse withCountries(openapisdk.models.shared.PricingV1MessagingMessagingCountry[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMessagingCountryListMessagingCountryResponseMeta meta;
    public ListMessagingCountryListMessagingCountryResponse withMeta(ListMessagingCountryListMessagingCountryResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}