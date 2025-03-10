/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SimMetadata {
    /**
     * max IC
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_max_ic")
    public Double maxMaxIc;

    public SimMetadata withMaxMaxIc(Double maxMaxIc) {
        this.maxMaxIc = maxMaxIc;
        return this;
    }
    
    public SimMetadata(){}
}
