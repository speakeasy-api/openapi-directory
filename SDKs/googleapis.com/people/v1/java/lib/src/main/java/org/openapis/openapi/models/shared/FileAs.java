/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FileAs - The name that should be used to sort the person in a list.
 */
public class FileAs {
    /**
     * Metadata about a field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public FieldMetadata metadata;

    public FileAs withMetadata(FieldMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    
    /**
     * The file-as value
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;

    public FileAs withValue(String value) {
        this.value = value;
        return this;
    }
    
    public FileAs(){}
}
