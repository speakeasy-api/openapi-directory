package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTrunkingCountryListTrunkingCountryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public openapisdk.models.shared.PricingV2TrunkingCountry[] countries;
    public ListTrunkingCountryListTrunkingCountryResponse withCountries(openapisdk.models.shared.PricingV2TrunkingCountry[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTrunkingCountryListTrunkingCountryResponseMeta meta;
    public ListTrunkingCountryListTrunkingCountryResponse withMeta(ListTrunkingCountryListTrunkingCountryResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}