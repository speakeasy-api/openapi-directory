package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RoutingVpcInput
 * RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.
**/
public class RoutingVpcInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public RoutingVpcInput withUri(String uri) {
        this.uri = uri;
        return this;
    }
}