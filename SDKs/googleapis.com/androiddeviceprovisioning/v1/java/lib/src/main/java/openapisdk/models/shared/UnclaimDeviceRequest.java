package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UnclaimDeviceRequest
 * Request message to unclaim a device.
**/
public class UnclaimDeviceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public UnclaimDeviceRequest withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceIdentifier")
    public DeviceIdentifier deviceIdentifier;
    public UnclaimDeviceRequest withDeviceIdentifier(DeviceIdentifier deviceIdentifier) {
        this.deviceIdentifier = deviceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sectionType")
    public UnclaimDeviceRequestSectionTypeEnum sectionType;
    public UnclaimDeviceRequest withSectionType(UnclaimDeviceRequestSectionTypeEnum sectionType) {
        this.sectionType = sectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vacationModeDays")
    public Integer vacationModeDays;
    public UnclaimDeviceRequest withVacationModeDays(Integer vacationModeDays) {
        this.vacationModeDays = vacationModeDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vacationModeExpireTime")
    public String vacationModeExpireTime;
    public UnclaimDeviceRequest withVacationModeExpireTime(String vacationModeExpireTime) {
        this.vacationModeExpireTime = vacationModeExpireTime;
        return this;
    }
}