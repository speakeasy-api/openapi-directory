/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateOrganizationActionBatchRequestBodyActions {
    /**
     * The body of the action
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public java.util.Map<String, Object> body;

    public CreateOrganizationActionBatchRequestBodyActions withBody(java.util.Map<String, Object> body) {
        this.body = body;
        return this;
    }
    
    /**
     * The operation to be used
     */
    @JsonProperty("operation")
    public String operation;

    public CreateOrganizationActionBatchRequestBodyActions withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    
    /**
     * Unique identifier for the resource to be acted on
     */
    @JsonProperty("resource")
    public String resource;

    public CreateOrganizationActionBatchRequestBodyActions withResource(String resource) {
        this.resource = resource;
        return this;
    }
    
    public CreateOrganizationActionBatchRequestBodyActions(@JsonProperty("operation") String operation, @JsonProperty("resource") String resource) {
        this.operation = operation;
        this.resource = resource;
  }
}
