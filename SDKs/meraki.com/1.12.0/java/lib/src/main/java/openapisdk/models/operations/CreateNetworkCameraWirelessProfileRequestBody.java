package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkCameraWirelessProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public CreateNetworkCameraWirelessProfileRequestBodyIdentity identity;
    public CreateNetworkCameraWirelessProfileRequestBody withIdentity(CreateNetworkCameraWirelessProfileRequestBodyIdentity identity) {
        this.identity = identity;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkCameraWirelessProfileRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("ssid")
    public CreateNetworkCameraWirelessProfileRequestBodySsid ssid;
    public CreateNetworkCameraWirelessProfileRequestBody withSsid(CreateNetworkCameraWirelessProfileRequestBodySsid ssid) {
        this.ssid = ssid;
        return this;
    }
}