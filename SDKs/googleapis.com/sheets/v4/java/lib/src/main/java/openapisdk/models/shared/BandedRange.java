package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BandedRange
 * A banded (alternating colors) range in a sheet.
**/
public class BandedRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandedRangeId")
    public Integer bandedRangeId;
    public BandedRange withBandedRangeId(Integer bandedRangeId) {
        this.bandedRangeId = bandedRangeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnProperties")
    public BandingProperties columnProperties;
    public BandedRange withColumnProperties(BandingProperties columnProperties) {
        this.columnProperties = columnProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public BandedRange withRange(GridRange range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowProperties")
    public BandingProperties rowProperties;
    public BandedRange withRowProperties(BandingProperties rowProperties) {
        this.rowProperties = rowProperties;
        return this;
    }
}