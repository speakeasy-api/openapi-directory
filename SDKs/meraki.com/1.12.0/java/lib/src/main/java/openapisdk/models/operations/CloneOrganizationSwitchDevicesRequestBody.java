package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CloneOrganizationSwitchDevicesRequestBody {
    @JsonProperty("sourceSerial")
    public String sourceSerial;
    public CloneOrganizationSwitchDevicesRequestBody withSourceSerial(String sourceSerial) {
        this.sourceSerial = sourceSerial;
        return this;
    }
    @JsonProperty("targetSerials")
    public String[] targetSerials;
    public CloneOrganizationSwitchDevicesRequestBody withTargetSerials(String[] targetSerials) {
        this.targetSerials = targetSerials;
        return this;
    }
}