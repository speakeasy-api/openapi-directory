/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetOrganizationActionBatch200ApplicationJSON - Successful operation
 */
public class GetOrganizationActionBatch200ApplicationJSON {
    /**
     * A set of changes made as part of this action (&lt;a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'&gt;more details&lt;/a&gt;)
     */
    @JsonProperty("actions")
    public GetOrganizationActionBatch200ApplicationJSONActions[] actions;
    public GetOrganizationActionBatch200ApplicationJSON withActions(GetOrganizationActionBatch200ApplicationJSONActions[] actions) {
        this.actions = actions;
        return this;
    }
    
    /**
     * Flag describing whether the action should be previewed before executing or not
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmed")
    public Boolean confirmed;
    public GetOrganizationActionBatch200ApplicationJSON withConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
        return this;
    }
    
    /**
     * ID of the action batch. Can be used to check the status of the action batch at /organizations/{organizationId}/actionBatches/{actionBatchId}
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetOrganizationActionBatch200ApplicationJSON withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * ID of the organization this action batch belongs to
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationId")
    public String organizationId;
    public GetOrganizationActionBatch200ApplicationJSON withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    
    /**
     * Status of action batch
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetOrganizationActionBatch200ApplicationJSONStatus status;
    public GetOrganizationActionBatch200ApplicationJSON withStatus(GetOrganizationActionBatch200ApplicationJSONStatus status) {
        this.status = status;
        return this;
    }
    
    /**
     * Flag describing whether actions should run synchronously or asynchronously
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synchronous")
    public Boolean synchronous;
    public GetOrganizationActionBatch200ApplicationJSON withSynchronous(Boolean synchronous) {
        this.synchronous = synchronous;
        return this;
    }
    
}
