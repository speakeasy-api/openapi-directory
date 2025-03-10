/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StandardUnitDescription - Contains the name and abbreviation for standard measurement unit.
 */
public class StandardUnitDescription {
    /**
     * UI display abbreviation for the measurement unit. For example, 'lb'.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abbreviation")
    public String abbreviation;

    public StandardUnitDescription withAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
        return this;
    }
    
    /**
     * UI display name of the measurement unit. For example, 'Pound'.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public StandardUnitDescription withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Represents a unit of measurement to use with a quantity, such as ounces
     * or inches. Exactly one of the following fields are required: `custom_unit`,
     * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public MeasurementUnit unit;

    public StandardUnitDescription withUnit(MeasurementUnit unit) {
        this.unit = unit;
        return this;
    }
    
    public StandardUnitDescription(){}
}
