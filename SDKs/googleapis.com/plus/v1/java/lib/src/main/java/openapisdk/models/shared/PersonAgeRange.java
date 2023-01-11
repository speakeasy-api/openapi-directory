package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonAgeRange
 * The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.
**/
public class PersonAgeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max")
    public Integer max;
    public PersonAgeRange withMax(Integer max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min")
    public Integer min;
    public PersonAgeRange withMin(Integer min) {
        this.min = min;
        return this;
    }
}