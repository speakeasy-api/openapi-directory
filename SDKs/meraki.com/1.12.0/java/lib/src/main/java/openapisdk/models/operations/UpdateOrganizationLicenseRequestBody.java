package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationLicenseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceSerial")
    public String deviceSerial;
    public UpdateOrganizationLicenseRequestBody withDeviceSerial(String deviceSerial) {
        this.deviceSerial = deviceSerial;
        return this;
    }
}