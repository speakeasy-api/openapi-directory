package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SupersimV1SimSimIpAddress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public SupersimV1SimSimIpAddress withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address_version")
    public SimIpAddressEnumIpAddressVersionEnum ipAddressVersion;
    public SupersimV1SimSimIpAddress withIpAddressVersion(SimIpAddressEnumIpAddressVersionEnum ipAddressVersion) {
        this.ipAddressVersion = ipAddressVersion;
        return this;
    }
}