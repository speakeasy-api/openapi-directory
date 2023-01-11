package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse
 * Response message for SmartDeviceManagementService.ExecuteDeviceCommand
**/
public class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public java.util.Map<String, Object> results;
    public GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse withResults(java.util.Map<String, Object> results) {
        this.results = results;
        return this;
    }
}