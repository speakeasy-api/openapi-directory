/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CounterMetadata - CounterMetadata includes all static non-name non-value counter attributes.
 */
public class CounterMetadata {
    /**
     * Human-readable description of the counter semantics.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public CounterMetadata withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Counter aggregation kind.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public CounterMetadataKindEnum kind;

    public CounterMetadata withKind(CounterMetadataKindEnum kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * A string referring to the unit type.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherUnits")
    public String otherUnits;

    public CounterMetadata withOtherUnits(String otherUnits) {
        this.otherUnits = otherUnits;
        return this;
    }
    
    /**
     * System defined Units, see above enum.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standardUnits")
    public CounterMetadataStandardUnitsEnum standardUnits;

    public CounterMetadata withStandardUnits(CounterMetadataStandardUnitsEnum standardUnits) {
        this.standardUnits = standardUnits;
        return this;
    }
    
    public CounterMetadata(){}
}
