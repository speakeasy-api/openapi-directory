package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Getcitystandard200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CityStandard")
    public String cityStandard;
    public Getcitystandard200ApplicationJson withCityStandard(String cityStandard) {
        this.cityStandard = cityStandard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Getcitystandard200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Getcitystandard200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
}