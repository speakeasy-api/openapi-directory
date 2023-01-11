package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2TcpSocketAction
 * TCPSocketAction describes an action based on opening a socket
**/
public class GoogleCloudRunV2TcpSocketAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public GoogleCloudRunV2TcpSocketAction withPort(Integer port) {
        this.port = port;
        return this;
    }
}