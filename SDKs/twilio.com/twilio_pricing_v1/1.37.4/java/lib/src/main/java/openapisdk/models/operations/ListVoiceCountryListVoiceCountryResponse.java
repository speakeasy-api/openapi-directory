package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVoiceCountryListVoiceCountryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public openapisdk.models.shared.PricingV1VoiceVoiceCountry[] countries;
    public ListVoiceCountryListVoiceCountryResponse withCountries(openapisdk.models.shared.PricingV1VoiceVoiceCountry[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListVoiceCountryListVoiceCountryResponseMeta meta;
    public ListVoiceCountryListVoiceCountryResponse withMeta(ListVoiceCountryListVoiceCountryResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}