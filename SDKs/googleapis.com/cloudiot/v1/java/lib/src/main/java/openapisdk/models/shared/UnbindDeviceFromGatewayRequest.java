package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnbindDeviceFromGatewayRequest
 * Request for `UnbindDeviceFromGateway`.
**/
public class UnbindDeviceFromGatewayRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public UnbindDeviceFromGatewayRequest withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayId")
    public String gatewayId;
    public UnbindDeviceFromGatewayRequest withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
}