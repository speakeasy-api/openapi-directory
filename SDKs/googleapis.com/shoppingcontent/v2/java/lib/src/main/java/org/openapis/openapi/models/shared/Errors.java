/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Errors - A list of errors returned by a failed batch entry.
 */
public class Errors {
    /**
     * The HTTP status of the first error in `errors`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;

    public Errors withCode(Long code) {
        this.code = code;
        return this;
    }
    
    /**
     * A list of errors.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;

    public Errors withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    
    /**
     * The message of the first error in `errors`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;

    public Errors withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public Errors(){}
}
