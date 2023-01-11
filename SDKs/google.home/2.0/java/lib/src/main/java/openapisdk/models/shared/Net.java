package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Net {
    @JsonProperty("ethernet_connected")
    public Boolean ethernetConnected;
    public Net withEthernetConnected(Boolean ethernetConnected) {
        this.ethernetConnected = ethernetConnected;
        return this;
    }
    @JsonProperty("ip_address")
    public String ipAddress;
    public Net withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonProperty("online")
    public Boolean online;
    public Net withOnline(Boolean online) {
        this.online = online;
        return this;
    }
}