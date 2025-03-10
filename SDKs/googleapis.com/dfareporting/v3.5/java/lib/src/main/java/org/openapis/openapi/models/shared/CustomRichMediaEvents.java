/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomRichMediaEvents - Represents a Custom Rich Media Events group.
 */
public class CustomRichMediaEvents {
    /**
     * List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filteredEventIds")
    public DimensionValue[] filteredEventIds;

    public CustomRichMediaEvents withFilteredEventIds(DimensionValue[] filteredEventIds) {
        this.filteredEventIds = filteredEventIds;
        return this;
    }
    
    /**
     * The kind of resource this is, in this case dfareporting#customRichMediaEvents.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public CustomRichMediaEvents withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    public CustomRichMediaEvents(){}
}
