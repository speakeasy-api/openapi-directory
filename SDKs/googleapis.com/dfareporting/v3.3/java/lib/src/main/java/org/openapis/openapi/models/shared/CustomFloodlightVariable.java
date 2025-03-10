/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomFloodlightVariable - A custom floodlight variable. This field may only be used when calling batchinsert; it is not supported by batchupdate.
 */
public class CustomFloodlightVariable {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customFloodlightVariable".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public CustomFloodlightVariable withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * The type of custom floodlight variable to supply a value for. These map to the "u[1-20]=" in the tags.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CustomFloodlightVariableTypeEnum type;

    public CustomFloodlightVariable withType(CustomFloodlightVariableTypeEnum type) {
        this.type = type;
        return this;
    }
    
    /**
     * The value of the custom floodlight variable. The length of string must not exceed 100 characters.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;

    public CustomFloodlightVariable withValue(String value) {
        this.value = value;
        return this;
    }
    
    public CustomFloodlightVariable(){}
}
