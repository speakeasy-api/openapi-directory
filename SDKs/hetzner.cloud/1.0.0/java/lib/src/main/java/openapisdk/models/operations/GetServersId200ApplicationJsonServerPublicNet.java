package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetServersId200ApplicationJsonServerPublicNet
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
public class GetServersId200ApplicationJsonServerPublicNet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewalls")
    public GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall[] firewalls;
    public GetServersId200ApplicationJsonServerPublicNet withFirewalls(GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall[] firewalls) {
        this.firewalls = firewalls;
        return this;
    }
    @JsonProperty("floating_ips")
    public Long[] floatingIps;
    public GetServersId200ApplicationJsonServerPublicNet withFloatingIps(Long[] floatingIps) {
        this.floatingIps = floatingIps;
        return this;
    }
    @JsonProperty("ipv4")
    public GetServersId200ApplicationJsonServerPublicNetIpv4 ipv4;
    public GetServersId200ApplicationJsonServerPublicNet withIpv4(GetServersId200ApplicationJsonServerPublicNetIpv4 ipv4) {
        this.ipv4 = ipv4;
        return this;
    }
    @JsonProperty("ipv6")
    public GetServersId200ApplicationJsonServerPublicNetIpv6 ipv6;
    public GetServersId200ApplicationJsonServerPublicNet withIpv6(GetServersId200ApplicationJsonServerPublicNetIpv6 ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
}