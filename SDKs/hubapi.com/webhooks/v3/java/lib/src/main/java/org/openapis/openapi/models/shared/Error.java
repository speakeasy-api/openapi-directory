/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Error - An error occurred.
 */
public class Error {
    /**
     * The error category
     */
    
    public String category;

    public Error withCategory(String category) {
        this.category = category;
        return this;
    }
    
    /**
     * Context about the error condition
     */
    
    public java.util.Map<String, String[]> context;

    public Error withContext(java.util.Map<String, String[]> context) {
        this.context = context;
        return this;
    }
    
    /**
     * A unique identifier for the request. Include this value with any error reports or support tickets
     */
    
    public String correlationId;

    public Error withCorrelationId(String correlationId) {
        this.correlationId = correlationId;
        return this;
    }
    
    /**
     * further information about the error
     */
    
    public ErrorDetail[] errors;

    public Error withErrors(ErrorDetail[] errors) {
        this.errors = errors;
        return this;
    }
    
    /**
     * A map of link names to associated URIs containing documentation about the error or recommended remediation steps
     */
    
    public java.util.Map<String, String> links;

    public Error withLinks(java.util.Map<String, String> links) {
        this.links = links;
        return this;
    }
    
    /**
     * A human readable message describing the error along with remediation steps where appropriate
     */
    
    public String message;

    public Error withMessage(String message) {
        this.message = message;
        return this;
    }
    
    /**
     * A specific category that contains more specific detail about the error
     */
    
    public String subCategory;

    public Error withSubCategory(String subCategory) {
        this.subCategory = subCategory;
        return this;
    }
    
    public Error(@JsonProperty("category") String category, @JsonProperty("correlationId") String correlationId, @JsonProperty("message") String message) {
        this.category = category;
        this.correlationId = correlationId;
        this.message = message;
  }
}
