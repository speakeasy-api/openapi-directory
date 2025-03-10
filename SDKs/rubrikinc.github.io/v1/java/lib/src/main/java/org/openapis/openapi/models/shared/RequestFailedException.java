/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RequestFailedException - The re-scheduling API failed.
 */
public class RequestFailedException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;

    public RequestFailedException withCode(String code) {
        this.code = code;
        return this;
    }
    
    @JsonProperty("errorType")
    public String errorType;

    public RequestFailedException withErrorType(String errorType) {
        this.errorType = errorType;
        return this;
    }
    
    @JsonProperty("message")
    public String message;

    public RequestFailedException withMessage(String message) {
        this.message = message;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("param")
    public String param;

    public RequestFailedException withParam(String param) {
        this.param = param;
        return this;
    }
    
    public RequestFailedException(@JsonProperty("errorType") String errorType, @JsonProperty("message") String message) {
        this.errorType = errorType;
        this.message = message;
  }
}
