package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceSwitchWarmSpareRequestBody {
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateDeviceSwitchWarmSpareRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spareSerial")
    public String spareSerial;
    public UpdateDeviceSwitchWarmSpareRequestBody withSpareSerial(String spareSerial) {
        this.spareSerial = spareSerial;
        return this;
    }
}