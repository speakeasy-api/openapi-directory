package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Address
 * Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers.
**/
public class Address {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipe")
    public Pipe pipe;
    public Address withPipe(Pipe pipe) {
        this.pipe = pipe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("socketAddress")
    public SocketAddress socketAddress;
    public Address withSocketAddress(SocketAddress socketAddress) {
        this.socketAddress = socketAddress;
        return this;
    }
}