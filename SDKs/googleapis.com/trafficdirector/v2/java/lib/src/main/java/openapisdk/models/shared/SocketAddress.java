package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SocketAddress
 * [#next-free-field: 7]
**/
public class SocketAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public SocketAddress withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv4Compat")
    public Boolean ipv4Compat;
    public SocketAddress withIpv4Compat(Boolean ipv4Compat) {
        this.ipv4Compat = ipv4Compat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namedPort")
    public String namedPort;
    public SocketAddress withNamedPort(String namedPort) {
        this.namedPort = namedPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portValue")
    public Long portValue;
    public SocketAddress withPortValue(Long portValue) {
        this.portValue = portValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public SocketAddressProtocolEnum protocol;
    public SocketAddress withProtocol(SocketAddressProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolverName")
    public String resolverName;
    public SocketAddress withResolverName(String resolverName) {
        this.resolverName = resolverName;
        return this;
    }
}