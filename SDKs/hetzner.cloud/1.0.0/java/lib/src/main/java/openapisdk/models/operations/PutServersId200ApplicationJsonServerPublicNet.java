package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutServersId200ApplicationJsonServerPublicNet
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
public class PutServersId200ApplicationJsonServerPublicNet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewalls")
    public PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall[] firewalls;
    public PutServersId200ApplicationJsonServerPublicNet withFirewalls(PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall[] firewalls) {
        this.firewalls = firewalls;
        return this;
    }
    @JsonProperty("floating_ips")
    public Long[] floatingIps;
    public PutServersId200ApplicationJsonServerPublicNet withFloatingIps(Long[] floatingIps) {
        this.floatingIps = floatingIps;
        return this;
    }
    @JsonProperty("ipv4")
    public PutServersId200ApplicationJsonServerPublicNetIpv4 ipv4;
    public PutServersId200ApplicationJsonServerPublicNet withIpv4(PutServersId200ApplicationJsonServerPublicNetIpv4 ipv4) {
        this.ipv4 = ipv4;
        return this;
    }
    @JsonProperty("ipv6")
    public PutServersId200ApplicationJsonServerPublicNetIpv6 ipv6;
    public PutServersId200ApplicationJsonServerPublicNet withIpv6(PutServersId200ApplicationJsonServerPublicNetIpv6 ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
}