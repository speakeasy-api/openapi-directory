package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddNamedRangeResponse
 * The result of adding a named range.
**/
public class AddNamedRangeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namedRange")
    public NamedRange namedRange;
    public AddNamedRangeResponse withNamedRange(NamedRange namedRange) {
        this.namedRange = namedRange;
        return this;
    }
}