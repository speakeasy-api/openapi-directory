package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomDimension
 * Custom dimension.
**/
public class CustomDimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public CustomDimension withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public CustomDimension withValue(String value) {
        this.value = value;
        return this;
    }
}