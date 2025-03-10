/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CheckOutput - Represents the result of a background check search
 */
public class CheckOutput {
    /**
     * Represents a background check
     */
    @JsonProperty("check")
    public Check check;

    public CheckOutput withCheck(Check check) {
        this.check = check;
        return this;
    }
    
    /**
     * Detail path
     */
    @JsonProperty("details")
    public String details;

    public CheckOutput withDetails(String details) {
        this.details = details;
        return this;
    }
    
    /**
     * Background check URL
     */
    @JsonProperty("self")
    public String self;

    public CheckOutput withSelf(String self) {
        this.self = self;
        return this;
    }
    
    public CheckOutput(@JsonProperty("check") Check check, @JsonProperty("details") String details, @JsonProperty("self") String self) {
        this.check = check;
        this.details = details;
        this.self = self;
  }
}
