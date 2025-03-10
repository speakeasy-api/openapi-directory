/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SavedColumn - A saved column
 */
public class SavedColumn {
    /**
     * Identifies this as a SavedColumn resource. Value: the fixed string doubleclicksearch#savedColumn.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public SavedColumn withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * The name of the saved column.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savedColumnName")
    public String savedColumnName;

    public SavedColumn withSavedColumnName(String savedColumnName) {
        this.savedColumnName = savedColumnName;
        return this;
    }
    
    /**
     * The type of data this saved column will produce.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public SavedColumn withType(String type) {
        this.type = type;
        return this;
    }
    
    public SavedColumn(){}
}
