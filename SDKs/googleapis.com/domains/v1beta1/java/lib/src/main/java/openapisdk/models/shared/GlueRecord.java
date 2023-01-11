package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GlueRecord
 * Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference.
**/
public class GlueRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostName")
    public String hostName;
    public GlueRecord withHostName(String hostName) {
        this.hostName = hostName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv4Addresses")
    public String[] ipv4Addresses;
    public GlueRecord withIpv4Addresses(String[] ipv4Addresses) {
        this.ipv4Addresses = ipv4Addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6Addresses")
    public String[] ipv6Addresses;
    public GlueRecord withIpv6Addresses(String[] ipv6Addresses) {
        this.ipv6Addresses = ipv6Addresses;
        return this;
    }
}