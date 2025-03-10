/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProjectsUpdate403ApplicationJSON - Forbidden
 */
public class ProjectsUpdate403ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation_url")
    public String documentationUrl;

    public ProjectsUpdate403ApplicationJSON withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public String[] errors;

    public ProjectsUpdate403ApplicationJSON withErrors(String[] errors) {
        this.errors = errors;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public ProjectsUpdate403ApplicationJSON withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public ProjectsUpdate403ApplicationJSON(){}
}
