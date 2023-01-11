package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationIdSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationIds")
    public String[] locationIds;
    public LocationIdSet withLocationIds(String[] locationIds) {
        this.locationIds = locationIds;
        return this;
    }
}