package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetServers200ApplicationJsonServersPublicNet
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
public class GetServers200ApplicationJsonServersPublicNet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewalls")
    public GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall[] firewalls;
    public GetServers200ApplicationJsonServersPublicNet withFirewalls(GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall[] firewalls) {
        this.firewalls = firewalls;
        return this;
    }
    @JsonProperty("floating_ips")
    public Long[] floatingIps;
    public GetServers200ApplicationJsonServersPublicNet withFloatingIps(Long[] floatingIps) {
        this.floatingIps = floatingIps;
        return this;
    }
    @JsonProperty("ipv4")
    public GetServers200ApplicationJsonServersPublicNetIpv4 ipv4;
    public GetServers200ApplicationJsonServersPublicNet withIpv4(GetServers200ApplicationJsonServersPublicNetIpv4 ipv4) {
        this.ipv4 = ipv4;
        return this;
    }
    @JsonProperty("ipv6")
    public GetServers200ApplicationJsonServersPublicNetIpv6 ipv6;
    public GetServers200ApplicationJsonServersPublicNet withIpv6(GetServers200ApplicationJsonServersPublicNetIpv6 ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
}