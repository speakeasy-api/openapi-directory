package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments {
    @JsonProperty("ip")
    public String ip;
    public UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("mac")
    public String mac;
    public UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments withMac(String mac) {
        this.mac = mac;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments withName(String name) {
        this.name = name;
        return this;
    }
}