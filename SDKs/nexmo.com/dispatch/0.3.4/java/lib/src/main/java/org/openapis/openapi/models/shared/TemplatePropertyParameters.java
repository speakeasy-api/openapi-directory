/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TemplatePropertyParameters {
    /**
     * The parameters are an array. The first value being {{1}} in the template.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public String default_;

    public TemplatePropertyParameters withDefault(String default_) {
        this.default_ = default_;
        return this;
    }
    
    public TemplatePropertyParameters(){}
}
