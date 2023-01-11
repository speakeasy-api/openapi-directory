package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MapValue
 * Holder object for the value of an entry in a map field of a data point. A map value supports a subset of the formats that the regular Value supports.
**/
public class MapValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fpVal")
    public Double fpVal;
    public MapValue withFpVal(Double fpVal) {
        this.fpVal = fpVal;
        return this;
    }
}