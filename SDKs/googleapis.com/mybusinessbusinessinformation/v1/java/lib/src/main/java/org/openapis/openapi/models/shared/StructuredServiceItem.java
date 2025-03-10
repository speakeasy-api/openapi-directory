/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StructuredServiceItem - Represents a structured service offered by the merchant. For eg: toilet_installation.
 */
public class StructuredServiceItem {
    /**
     * Optional. Description of structured service item. The character limit is 300.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public StructuredServiceItem withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Required. The `service_type_id` field is a Google provided unique ID that can be found in `ServiceType`. This information is provided by `BatchGetCategories` rpc service.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceTypeId")
    public String serviceTypeId;

    public StructuredServiceItem withServiceTypeId(String serviceTypeId) {
        this.serviceTypeId = serviceTypeId;
        return this;
    }
    
    public StructuredServiceItem(){}
}
