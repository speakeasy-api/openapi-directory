package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BindDeviceToGatewayRequest
 * Request for `BindDeviceToGateway`.
**/
public class BindDeviceToGatewayRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public BindDeviceToGatewayRequest withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayId")
    public String gatewayId;
    public BindDeviceToGatewayRequest withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
}