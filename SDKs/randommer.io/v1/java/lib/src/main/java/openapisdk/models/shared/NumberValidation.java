package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NumberValidation {
    @JsonProperty("country")
    public String country;
    public NumberValidation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("number")
    public String number;
    public NumberValidation withNumber(String number) {
        this.number = number;
        return this;
    }
}