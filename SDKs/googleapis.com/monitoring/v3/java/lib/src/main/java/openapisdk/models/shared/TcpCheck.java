package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TcpCheck
 * Information required for a TCP Uptime check request.
**/
public class TcpCheck {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pingConfig")
    public PingConfig pingConfig;
    public TcpCheck withPingConfig(PingConfig pingConfig) {
        this.pingConfig = pingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public TcpCheck withPort(Integer port) {
        this.port = port;
        return this;
    }
}