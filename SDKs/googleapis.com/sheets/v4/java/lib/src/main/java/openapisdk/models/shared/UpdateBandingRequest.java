package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBandingRequest
 * Updates properties of the supplied banded range.
**/
public class UpdateBandingRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandedRange")
    public BandedRange bandedRange;
    public UpdateBandingRequest withBandedRange(BandedRange bandedRange) {
        this.bandedRange = bandedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateBandingRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
}