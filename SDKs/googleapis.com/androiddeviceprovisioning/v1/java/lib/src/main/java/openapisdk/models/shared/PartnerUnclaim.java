package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PartnerUnclaim
 * Identifies one unclaim request.
**/
public class PartnerUnclaim {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceId")
    public String deviceId;
    public PartnerUnclaim withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceIdentifier")
    public DeviceIdentifier deviceIdentifier;
    public PartnerUnclaim withDeviceIdentifier(DeviceIdentifier deviceIdentifier) {
        this.deviceIdentifier = deviceIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sectionType")
    public PartnerUnclaimSectionTypeEnum sectionType;
    public PartnerUnclaim withSectionType(PartnerUnclaimSectionTypeEnum sectionType) {
        this.sectionType = sectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vacationModeDays")
    public Integer vacationModeDays;
    public PartnerUnclaim withVacationModeDays(Integer vacationModeDays) {
        this.vacationModeDays = vacationModeDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vacationModeExpireTime")
    public String vacationModeExpireTime;
    public PartnerUnclaim withVacationModeExpireTime(String vacationModeExpireTime) {
        this.vacationModeExpireTime = vacationModeExpireTime;
        return this;
    }
}