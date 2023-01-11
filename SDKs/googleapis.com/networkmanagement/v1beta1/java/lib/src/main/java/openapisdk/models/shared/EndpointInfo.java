package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndpointInfo
 * For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model.
**/
public class EndpointInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationIp")
    public String destinationIp;
    public EndpointInfo withDestinationIp(String destinationIp) {
        this.destinationIp = destinationIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationNetworkUri")
    public String destinationNetworkUri;
    public EndpointInfo withDestinationNetworkUri(String destinationNetworkUri) {
        this.destinationNetworkUri = destinationNetworkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationPort")
    public Integer destinationPort;
    public EndpointInfo withDestinationPort(Integer destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public String protocol;
    public EndpointInfo withProtocol(String protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAgentUri")
    public String sourceAgentUri;
    public EndpointInfo withSourceAgentUri(String sourceAgentUri) {
        this.sourceAgentUri = sourceAgentUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceIp")
    public String sourceIp;
    public EndpointInfo withSourceIp(String sourceIp) {
        this.sourceIp = sourceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceNetworkUri")
    public String sourceNetworkUri;
    public EndpointInfo withSourceNetworkUri(String sourceNetworkUri) {
        this.sourceNetworkUri = sourceNetworkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePort")
    public Integer sourcePort;
    public EndpointInfo withSourcePort(Integer sourcePort) {
        this.sourcePort = sourcePort;
        return this;
    }
}