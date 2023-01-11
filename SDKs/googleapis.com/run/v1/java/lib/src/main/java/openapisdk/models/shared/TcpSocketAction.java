package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TcpSocketAction
 * TCPSocketAction describes an action based on opening a socket
**/
public class TcpSocketAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public TcpSocketAction withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public TcpSocketAction withPort(Integer port) {
        this.port = port;
        return this;
    }
}