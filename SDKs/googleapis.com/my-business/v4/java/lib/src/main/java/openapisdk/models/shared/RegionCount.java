package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegionCount
 * A region with its associated request count.
**/
public class RegionCount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public RegionCount withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public RegionCount withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latlng")
    public LatLng latlng;
    public RegionCount withLatlng(LatLng latlng) {
        this.latlng = latlng;
        return this;
    }
}