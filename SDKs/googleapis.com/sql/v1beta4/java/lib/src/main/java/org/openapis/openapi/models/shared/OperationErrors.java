/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OperationErrors - Database instance operation errors list wrapper.
 */
public class OperationErrors {
    /**
     * The list of errors encountered while processing this operation.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public OperationError[] errors;

    public OperationErrors withErrors(OperationError[] errors) {
        this.errors = errors;
        return this;
    }
    
    /**
     * This is always `sql#operationErrors`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public OperationErrors withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    public OperationErrors(){}
}
