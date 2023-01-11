package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostalCodeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCodeRangeBegin")
    public String postalCodeRangeBegin;
    public PostalCodeRange withPostalCodeRangeBegin(String postalCodeRangeBegin) {
        this.postalCodeRangeBegin = postalCodeRangeBegin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCodeRangeEnd")
    public String postalCodeRangeEnd;
    public PostalCodeRange withPostalCodeRangeEnd(String postalCodeRangeEnd) {
        this.postalCodeRangeEnd = postalCodeRangeEnd;
        return this;
    }
}