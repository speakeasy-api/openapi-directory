/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EndpointInfo - For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
 */
public class EndpointInfo {
    /**
     * Destination IP address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationIp")
    public String destinationIp;

    public EndpointInfo withDestinationIp(String destinationIp) {
        this.destinationIp = destinationIp;
        return this;
    }
    
    /**
     * URI of the network where this packet is sent to.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationNetworkUri")
    public String destinationNetworkUri;

    public EndpointInfo withDestinationNetworkUri(String destinationNetworkUri) {
        this.destinationNetworkUri = destinationNetworkUri;
        return this;
    }
    
    /**
     * Destination port. Only valid when protocol is TCP or UDP.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationPort")
    public Integer destinationPort;

    public EndpointInfo withDestinationPort(Integer destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    
    /**
     * IP protocol in string format, for example: "TCP", "UDP", "ICMP".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public String protocol;

    public EndpointInfo withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    
    /**
     * URI of the source telemetry agent this packet originates from.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAgentUri")
    public String sourceAgentUri;

    public EndpointInfo withSourceAgentUri(String sourceAgentUri) {
        this.sourceAgentUri = sourceAgentUri;
        return this;
    }
    
    /**
     * Source IP address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceIp")
    public String sourceIp;

    public EndpointInfo withSourceIp(String sourceIp) {
        this.sourceIp = sourceIp;
        return this;
    }
    
    /**
     * URI of the network where this packet originates from.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceNetworkUri")
    public String sourceNetworkUri;

    public EndpointInfo withSourceNetworkUri(String sourceNetworkUri) {
        this.sourceNetworkUri = sourceNetworkUri;
        return this;
    }
    
    /**
     * Source port. Only valid when protocol is TCP or UDP.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePort")
    public Integer sourcePort;

    public EndpointInfo withSourcePort(Integer sourcePort) {
        this.sourcePort = sourcePort;
        return this;
    }
    
    public EndpointInfo(){}
}
