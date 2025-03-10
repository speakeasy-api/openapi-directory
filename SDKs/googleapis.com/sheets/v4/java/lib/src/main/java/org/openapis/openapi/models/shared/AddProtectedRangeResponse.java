/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddProtectedRangeResponse - The result of adding a new protected range.
 */
public class AddProtectedRangeResponse {
    /**
     * A protected range.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectedRange")
    public ProtectedRange protectedRange;

    public AddProtectedRangeResponse withProtectedRange(ProtectedRange protectedRange) {
        this.protectedRange = protectedRange;
        return this;
    }
    
    public AddProtectedRangeResponse(){}
}
