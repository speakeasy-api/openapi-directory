package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Getcountrystandard200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Getcountrystandard200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountryStandard")
    public String countryStandard;
    public Getcountrystandard200ApplicationJson withCountryStandard(String countryStandard) {
        this.countryStandard = countryStandard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Getcountrystandard200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
}