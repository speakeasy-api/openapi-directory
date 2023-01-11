package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkCameraWirelessProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public UpdateNetworkCameraWirelessProfileRequestBodyIdentity identity;
    public UpdateNetworkCameraWirelessProfileRequestBody withIdentity(UpdateNetworkCameraWirelessProfileRequestBodyIdentity identity) {
        this.identity = identity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkCameraWirelessProfileRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssid")
    public UpdateNetworkCameraWirelessProfileRequestBodySsid ssid;
    public UpdateNetworkCameraWirelessProfileRequestBody withSsid(UpdateNetworkCameraWirelessProfileRequestBodySsid ssid) {
        this.ssid = ssid;
        return this;
    }
}