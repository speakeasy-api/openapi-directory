package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeoRegionTargetingOptionDetails
 * Represents a targetable geographic region. This will be populated in the geo_region_details field when targeting_type is `TARGETING_TYPE_GEO_REGION`.
**/
public class GeoRegionTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GeoRegionTargetingOptionDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoRegionType")
    public GeoRegionTargetingOptionDetailsGeoRegionTypeEnum geoRegionType;
    public GeoRegionTargetingOptionDetails withGeoRegionType(GeoRegionTargetingOptionDetailsGeoRegionTypeEnum geoRegionType) {
        this.geoRegionType = geoRegionType;
        return this;
    }
}