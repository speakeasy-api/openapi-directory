/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNetworkHealthAlerts200ApplicationJSON {
    /**
     * Category of the alert
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public GetNetworkHealthAlerts200ApplicationJSON withCategory(String category) {
        this.category = category;
        return this;
    }
    
    /**
     * Alert identifier. Value can be empty
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetNetworkHealthAlerts200ApplicationJSON withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The scope of the alert
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public GetNetworkHealthAlerts200ApplicationJSONScope scope;
    public GetNetworkHealthAlerts200ApplicationJSON withScope(GetNetworkHealthAlerts200ApplicationJSONScope scope) {
        this.scope = scope;
        return this;
    }
    
    /**
     * Severity of the alert
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public GetNetworkHealthAlerts200ApplicationJSONSeverityEnum severity;
    public GetNetworkHealthAlerts200ApplicationJSON withSeverity(GetNetworkHealthAlerts200ApplicationJSONSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    
    /**
     * Alert type
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetNetworkHealthAlerts200ApplicationJSON withType(String type) {
        this.type = type;
        return this;
    }
    
}
