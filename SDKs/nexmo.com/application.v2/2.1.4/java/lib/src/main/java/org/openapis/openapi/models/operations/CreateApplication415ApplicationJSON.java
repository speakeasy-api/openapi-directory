/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateApplication415ApplicationJSON - Unsupported Content Type Header
 */
public class CreateApplication415ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;

    public CreateApplication415ApplicationJSON withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    
    /**
     * Instance ID
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;

    public CreateApplication415ApplicationJSON withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;

    public CreateApplication415ApplicationJSON withTitle(String title) {
        this.title = title;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public CreateApplication415ApplicationJSON withType(String type) {
        this.type = type;
        return this;
    }
    
    public CreateApplication415ApplicationJSON(){}
}
