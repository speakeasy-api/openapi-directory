package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Connection
 * Contains information about the IP connection associated with the finding.
**/
public class Connection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationIp")
    public String destinationIp;
    public Connection withDestinationIp(String destinationIp) {
        this.destinationIp = destinationIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationPort")
    public Integer destinationPort;
    public Connection withDestinationPort(Integer destinationPort) {
        this.destinationPort = destinationPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public ConnectionProtocolEnum protocol;
    public Connection withProtocol(ConnectionProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceIp")
    public String sourceIp;
    public Connection withSourceIp(String sourceIp) {
        this.sourceIp = sourceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourcePort")
    public Integer sourcePort;
    public Connection withSourcePort(Integer sourcePort) {
        this.sourcePort = sourcePort;
        return this;
    }
}