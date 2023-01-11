package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlacementAssignment
 * Placement Assignment.
**/
public class PlacementAssignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public PlacementAssignment withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementId")
    public String placementId;
    public PlacementAssignment withPlacementId(String placementId) {
        this.placementId = placementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementIdDimensionValue")
    public DimensionValue placementIdDimensionValue;
    public PlacementAssignment withPlacementIdDimensionValue(DimensionValue placementIdDimensionValue) {
        this.placementIdDimensionValue = placementIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslRequired")
    public Boolean sslRequired;
    public PlacementAssignment withSslRequired(Boolean sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
}