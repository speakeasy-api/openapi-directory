/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Error - Unauthorized
 */
public class Error {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;

    public Error withCode(Long code) {
        this.code = code;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;

    public Error withError(String error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Object[] errors;

    public Error withErrors(Object[] errors) {
        this.errors = errors;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;

    public Error withLink(String link) {
        this.link = link;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public Error withMessage(String message) {
        this.message = message;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;

    public Error withStatus(String status) {
        this.status = status;
        return this;
    }
    
    public Error(){}
}
