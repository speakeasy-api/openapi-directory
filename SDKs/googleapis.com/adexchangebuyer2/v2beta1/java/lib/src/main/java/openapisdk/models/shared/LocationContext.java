package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationContext
 * Output only. The Geo criteria the restriction applies to.
**/
public class LocationContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoCriteriaIds")
    public Integer[] geoCriteriaIds;
    public LocationContext withGeoCriteriaIds(Integer[] geoCriteriaIds) {
        this.geoCriteriaIds = geoCriteriaIds;
        return this;
    }
}