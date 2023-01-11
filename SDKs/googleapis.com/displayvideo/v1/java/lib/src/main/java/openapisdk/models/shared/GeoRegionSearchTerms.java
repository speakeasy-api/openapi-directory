package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeoRegionSearchTerms
 * Search terms for geo region targeting options.
**/
public class GeoRegionSearchTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoRegionQuery")
    public String geoRegionQuery;
    public GeoRegionSearchTerms withGeoRegionQuery(String geoRegionQuery) {
        this.geoRegionQuery = geoRegionQuery;
        return this;
    }
}