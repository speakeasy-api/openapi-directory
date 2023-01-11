package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RoutingVpc
 * RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
**/
public class RoutingVpc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiredForNewSiteToSiteDataTransferSpokes")
    public Boolean requiredForNewSiteToSiteDataTransferSpokes;
    public RoutingVpc withRequiredForNewSiteToSiteDataTransferSpokes(Boolean requiredForNewSiteToSiteDataTransferSpokes) {
        this.requiredForNewSiteToSiteDataTransferSpokes = requiredForNewSiteToSiteDataTransferSpokes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public RoutingVpc withUri(String uri) {
        this.uri = uri;
        return this;
    }
}