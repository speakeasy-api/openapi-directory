package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteBandingRequest
 * Removes the banded range with the given ID from the spreadsheet.
**/
public class DeleteBandingRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandedRangeId")
    public Integer bandedRangeId;
    public DeleteBandingRequest withBandedRangeId(Integer bandedRangeId) {
        this.bandedRangeId = bandedRangeId;
        return this;
    }
}