/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateSubAccount401ApplicationJSON - Credential is missing or invalid
 */
public class CreateSubAccount401ApplicationJSON {
    @JsonProperty("detail")
    public String detail;

    public CreateSubAccount401ApplicationJSON withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    
    @JsonProperty("instance")
    public String instance;

    public CreateSubAccount401ApplicationJSON withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    
    @JsonProperty("title")
    public String title;

    public CreateSubAccount401ApplicationJSON withTitle(String title) {
        this.title = title;
        return this;
    }
    
    @JsonProperty("type")
    public String type;

    public CreateSubAccount401ApplicationJSON withType(String type) {
        this.type = type;
        return this;
    }
    
    public CreateSubAccount401ApplicationJSON(@JsonProperty("detail") String detail, @JsonProperty("instance") String instance, @JsonProperty("title") String title, @JsonProperty("type") String type) {
        this.detail = detail;
        this.instance = instance;
        this.title = title;
        this.type = type;
  }
}
