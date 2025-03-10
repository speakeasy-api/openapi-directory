/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudDialogflowCxV3beta1ValidationMessage - Agent/flow validation message.
 */
public class GoogleCloudDialogflowCxV3beta1ValidationMessage {
    /**
     * The message detail.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;

    public GoogleCloudDialogflowCxV3beta1ValidationMessage withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    
    /**
     * The resource names of the resources where the message is found.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceNames")
    public GoogleCloudDialogflowCxV3beta1ResourceName[] resourceNames;

    public GoogleCloudDialogflowCxV3beta1ValidationMessage withResourceNames(GoogleCloudDialogflowCxV3beta1ResourceName[] resourceNames) {
        this.resourceNames = resourceNames;
        return this;
    }
    
    /**
     * The type of the resources where the message is found.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum resourceType;

    public GoogleCloudDialogflowCxV3beta1ValidationMessage withResourceType(GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    
    /**
     * The names of the resources where the message is found.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public String[] resources;

    public GoogleCloudDialogflowCxV3beta1ValidationMessage withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
    
    /**
     * Indicates the severity of the message.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum severity;

    public GoogleCloudDialogflowCxV3beta1ValidationMessage withSeverity(GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    
    public GoogleCloudDialogflowCxV3beta1ValidationMessage(){}
}
