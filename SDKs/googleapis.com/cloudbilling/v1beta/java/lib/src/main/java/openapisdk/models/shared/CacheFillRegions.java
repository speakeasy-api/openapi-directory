package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CacheFillRegions
 * Specifies the regions for Cache Fill.
**/
public class CacheFillRegions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationRegion")
    public CacheFillRegionsDestinationRegionEnum destinationRegion;
    public CacheFillRegions withDestinationRegion(CacheFillRegionsDestinationRegionEnum destinationRegion) {
        this.destinationRegion = destinationRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceRegion")
    public CacheFillRegionsSourceRegionEnum sourceRegion;
    public CacheFillRegions withSourceRegion(CacheFillRegionsSourceRegionEnum sourceRegion) {
        this.sourceRegion = sourceRegion;
        return this;
    }
}