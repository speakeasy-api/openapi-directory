/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AlternativeIdentifier - Additional information some carriers may provide by which to identify a given label in their system. 
 * 
 */
public class AlternativeIdentifier {
    /**
     * The type of alternative_identifier that corresponds to the value.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public AlternativeIdentifier withType(String type) {
        this.type = type;
        return this;
    }
    
    /**
     * The value of the alternative_identifier.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;

    public AlternativeIdentifier withValue(String value) {
        this.value = value;
        return this;
    }
    
    public AlternativeIdentifier(){}
}
