package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPhoneNumberCountryListPhoneNumberCountryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public openapisdk.models.shared.PricingV1PhoneNumberPhoneNumberCountry[] countries;
    public ListPhoneNumberCountryListPhoneNumberCountryResponse withCountries(openapisdk.models.shared.PricingV1PhoneNumberPhoneNumberCountry[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListPhoneNumberCountryListPhoneNumberCountryResponseMeta meta;
    public ListPhoneNumberCountryListPhoneNumberCountryResponse withMeta(ListPhoneNumberCountryListPhoneNumberCountryResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}