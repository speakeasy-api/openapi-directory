/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PhysicalPlatformDetails - Platform specific details for Physical Machines.
 */
public class PhysicalPlatformDetails {
    /**
     * Free text representation of the machine location. The format of this field should not be relied on. Different machines in the same location may have different string values for this field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;

    public PhysicalPlatformDetails withLocation(String location) {
        this.location = location;
        return this;
    }
    
    public PhysicalPlatformDetails(){}
}
