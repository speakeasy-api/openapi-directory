/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ProductCustomFieldFields {
    /**
     * Unique identifier of the ProductCustomField
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_field_id")
    public Integer customFieldId;

    public ProductCustomFieldFields withCustomFieldId(Integer customFieldId) {
        this.customFieldId = customFieldId;
        return this;
    }
    
    /**
     * Unique identifier of the ProductCustomField value
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;

    public ProductCustomFieldFields withId(Integer id) {
        this.id = id;
        return this;
    }
    
    /**
     * The label for the ProductCustomField
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;

    public ProductCustomFieldFields withLabel(String label) {
        this.label = label;
        return this;
    }
    
    /**
     * The type of the ProductCustomField
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public ProductCustomFieldFields withType(String type) {
        this.type = type;
        return this;
    }
    
    /**
     * The value for the ProductCustomField
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;

    public ProductCustomFieldFields withValue(String value) {
        this.value = value;
        return this;
    }
    
    /**
     * The value id for the ProductCustomField
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value_id")
    public String valueId;

    public ProductCustomFieldFields withValueId(String valueId) {
        this.valueId = valueId;
        return this;
    }
    
    public ProductCustomFieldFields(){}
}
