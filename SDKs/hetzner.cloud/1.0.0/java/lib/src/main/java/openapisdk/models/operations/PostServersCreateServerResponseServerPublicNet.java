package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostServersCreateServerResponseServerPublicNet
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
public class PostServersCreateServerResponseServerPublicNet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewalls")
    public PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall[] firewalls;
    public PostServersCreateServerResponseServerPublicNet withFirewalls(PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall[] firewalls) {
        this.firewalls = firewalls;
        return this;
    }
    @JsonProperty("floating_ips")
    public Long[] floatingIps;
    public PostServersCreateServerResponseServerPublicNet withFloatingIps(Long[] floatingIps) {
        this.floatingIps = floatingIps;
        return this;
    }
    @JsonProperty("ipv4")
    public PostServersCreateServerResponseServerPublicNetIpv4 ipv4;
    public PostServersCreateServerResponseServerPublicNet withIpv4(PostServersCreateServerResponseServerPublicNetIpv4 ipv4) {
        this.ipv4 = ipv4;
        return this;
    }
    @JsonProperty("ipv6")
    public PostServersCreateServerResponseServerPublicNetIpv6 ipv6;
    public PostServersCreateServerResponseServerPublicNet withIpv6(PostServersCreateServerResponseServerPublicNetIpv6 ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
}