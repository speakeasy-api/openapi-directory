package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddNamedRangeRequest
 * Adds a named range to the spreadsheet.
**/
public class AddNamedRangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namedRange")
    public NamedRange namedRange;
    public AddNamedRangeRequest withNamedRange(NamedRange namedRange) {
        this.namedRange = namedRange;
        return this;
    }
}