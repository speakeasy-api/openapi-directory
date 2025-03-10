/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteShiftResponse - The response to a request to delete a `Shift`. The response might contain a set of 
 * `Error` objects if the request resulted in errors.
 */
public class DeleteShiftResponse {
    /**
     * Any errors that occurred during the request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;

    public DeleteShiftResponse withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    
    public DeleteShiftResponse(){}
}
