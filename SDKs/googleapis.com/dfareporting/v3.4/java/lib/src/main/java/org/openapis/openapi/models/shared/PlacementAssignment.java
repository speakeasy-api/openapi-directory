/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PlacementAssignment - Placement Assignment.
 */
public class PlacementAssignment {
    /**
     * Whether this placement assignment is active. When true, the placement will be included in the ad's rotation.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;

    public PlacementAssignment withActive(Boolean active) {
        this.active = active;
        return this;
    }
    
    /**
     * ID of the placement to be assigned. This is a required field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementId")
    public String placementId;

    public PlacementAssignment withPlacementId(String placementId) {
        this.placementId = placementId;
        return this;
    }
    
    /**
     * Represents a DimensionValue resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementIdDimensionValue")
    public DimensionValue placementIdDimensionValue;

    public PlacementAssignment withPlacementIdDimensionValue(DimensionValue placementIdDimensionValue) {
        this.placementIdDimensionValue = placementIdDimensionValue;
        return this;
    }
    
    /**
     * Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslRequired")
    public Boolean sslRequired;

    public PlacementAssignment withSslRequired(Boolean sslRequired) {
        this.sslRequired = sslRequired;
        return this;
    }
    
    public PlacementAssignment(){}
}
