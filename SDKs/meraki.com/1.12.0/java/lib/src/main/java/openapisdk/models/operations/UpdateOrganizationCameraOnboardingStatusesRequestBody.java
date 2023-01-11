package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateOrganizationCameraOnboardingStatusesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;
    public UpdateOrganizationCameraOnboardingStatusesRequestBody withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wirelessCredentialsSent")
    public Boolean wirelessCredentialsSent;
    public UpdateOrganizationCameraOnboardingStatusesRequestBody withWirelessCredentialsSent(Boolean wirelessCredentialsSent) {
        this.wirelessCredentialsSent = wirelessCredentialsSent;
        return this;
    }
}