/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Filter - A filter.
 */
public class Filter {
    /**
     * A filter that merges multiple other filters using the given operator.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compositeFilter")
    public CompositeFilter compositeFilter;

    public Filter withCompositeFilter(CompositeFilter compositeFilter) {
        this.compositeFilter = compositeFilter;
        return this;
    }
    
    /**
     * A filter on a specific field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldFilter")
    public FieldFilter fieldFilter;

    public Filter withFieldFilter(FieldFilter fieldFilter) {
        this.fieldFilter = fieldFilter;
        return this;
    }
    
    /**
     * A filter with a single operand.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unaryFilter")
    public UnaryFilter unaryFilter;

    public Filter withUnaryFilter(UnaryFilter unaryFilter) {
        this.unaryFilter = unaryFilter;
        return this;
    }
    
    public Filter(){}
}
