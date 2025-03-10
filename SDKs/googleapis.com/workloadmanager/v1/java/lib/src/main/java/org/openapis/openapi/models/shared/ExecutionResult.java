/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExecutionResult - Message describing the result of an execution
 */
public class ExecutionResult {
    /**
     * the document url of the rule
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentationUrl")
    public String documentationUrl;

    public ExecutionResult withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    
    /**
     * Message represent resource in execution result
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public Resource resource;

    public ExecutionResult withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
    
    /**
     * the rule which violate in execution
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public String rule;

    public ExecutionResult withRule(String rule) {
        this.rule = rule;
        return this;
    }
    
    /**
     * severity of violation
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public String severity;

    public ExecutionResult withSeverity(String severity) {
        this.severity = severity;
        return this;
    }
    
    /**
     * Message describing the violdation in execution result
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationDetails")
    public ViolationDetails violationDetails;

    public ExecutionResult withViolationDetails(ViolationDetails violationDetails) {
        this.violationDetails = violationDetails;
        return this;
    }
    
    /**
     * the violation message of an execution
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationMessage")
    public String violationMessage;

    public ExecutionResult withViolationMessage(String violationMessage) {
        this.violationMessage = violationMessage;
        return this;
    }
    
    public ExecutionResult(){}
}
