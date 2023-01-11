package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkEndpoint
 * A network endpoint over which a TPU worker can be reached.
**/
public class NetworkEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessConfig")
    public AccessConfig accessConfig;
    public NetworkEndpoint withAccessConfig(AccessConfig accessConfig) {
        this.accessConfig = accessConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public NetworkEndpoint withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public NetworkEndpoint withPort(Integer port) {
        this.port = port;
        return this;
    }
}