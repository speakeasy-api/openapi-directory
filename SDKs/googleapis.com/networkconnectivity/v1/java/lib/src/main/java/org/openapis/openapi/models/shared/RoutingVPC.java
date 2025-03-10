/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RoutingVPC - RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
 */
public class RoutingVPC {
    /**
     * Output only. If true, indicates that this VPC network is currently associated with spokes that use the data transfer feature (spokes where the site_to_site_data_transfer field is set to true). If you create new spokes that use data transfer, they must be associated with this VPC network. At most, one VPC network will have this field set to true.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredForNewSiteToSiteDataTransferSpokes")
    public Boolean requiredForNewSiteToSiteDataTransferSpokes;

    public RoutingVPC withRequiredForNewSiteToSiteDataTransferSpokes(Boolean requiredForNewSiteToSiteDataTransferSpokes) {
        this.requiredForNewSiteToSiteDataTransferSpokes = requiredForNewSiteToSiteDataTransferSpokes;
        return this;
    }
    
    /**
     * The URI of the VPC network.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;

    public RoutingVPC withUri(String uri) {
        this.uri = uri;
        return this;
    }
    
    public RoutingVPC(){}
}
