package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckRequest
 * Request message for the Check method.
**/
public class CheckRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public Operation operation;
    public CheckRequest withOperation(Operation operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestProjectSettings")
    public Boolean requestProjectSettings;
    public CheckRequest withRequestProjectSettings(Boolean requestProjectSettings) {
        this.requestProjectSettings = requestProjectSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceConfigId")
    public String serviceConfigId;
    public CheckRequest withServiceConfigId(String serviceConfigId) {
        this.serviceConfigId = serviceConfigId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipActivationCheck")
    public Boolean skipActivationCheck;
    public CheckRequest withSkipActivationCheck(Boolean skipActivationCheck) {
        this.skipActivationCheck = skipActivationCheck;
        return this;
    }
}