package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest
 * Request message for SmartDeviceManagementService.ExecuteDeviceCommand
**/
public class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public String command;
    public GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest withCommand(String command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public java.util.Map<String, Object> params;
    public GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest withParams(java.util.Map<String, Object> params) {
        this.params = params;
        return this;
    }
}