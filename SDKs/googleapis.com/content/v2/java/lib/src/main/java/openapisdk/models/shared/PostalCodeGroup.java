package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostalCodeGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PostalCodeGroup withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PostalCodeGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCodeRanges")
    public PostalCodeRange[] postalCodeRanges;
    public PostalCodeGroup withPostalCodeRanges(PostalCodeRange[] postalCodeRanges) {
        this.postalCodeRanges = postalCodeRanges;
        return this;
    }
}