/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetOrganizationClientsOverview200ApplicationJSON - Successful operation
 */
public class GetOrganizationClientsOverview200ApplicationJSON {
    /**
     * Client count information
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counts")
    public GetOrganizationClientsOverview200ApplicationJSONCounts counts;

    public GetOrganizationClientsOverview200ApplicationJSON withCounts(GetOrganizationClientsOverview200ApplicationJSONCounts counts) {
        this.counts = counts;
        return this;
    }
    
    /**
     * Usage information of all clients across organization
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public GetOrganizationClientsOverview200ApplicationJSONUsage usage;

    public GetOrganizationClientsOverview200ApplicationJSON withUsage(GetOrganizationClientsOverview200ApplicationJSONUsage usage) {
        this.usage = usage;
        return this;
    }
    
    public GetOrganizationClientsOverview200ApplicationJSON(){}
}
