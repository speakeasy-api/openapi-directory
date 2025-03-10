/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateOrganizationInsightMonitoredMediaServerRequestBody {
    /**
     * The IP address (IPv4 only) or hostname of the media server to monitor
     */
    @JsonProperty("address")
    public String address;
    public CreateOrganizationInsightMonitoredMediaServerRequestBody withAddress(String address) {
        this.address = address;
        return this;
    }
    
    /**
     * Indicates that if the media server doesn't respond to ICMP pings, the nearest hop will be used in its stead.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestEffortMonitoringEnabled")
    public Boolean bestEffortMonitoringEnabled;
    public CreateOrganizationInsightMonitoredMediaServerRequestBody withBestEffortMonitoringEnabled(Boolean bestEffortMonitoringEnabled) {
        this.bestEffortMonitoringEnabled = bestEffortMonitoringEnabled;
        return this;
    }
    
    /**
     * The name of the VoIP provider
     */
    @JsonProperty("name")
    public String name;
    public CreateOrganizationInsightMonitoredMediaServerRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    
}
