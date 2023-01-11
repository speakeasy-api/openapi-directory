package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceClaim
 * A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).
**/
public class DeviceClaim {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalService")
    public DeviceClaimAdditionalServiceEnum additionalService;
    public DeviceClaim withAdditionalService(DeviceClaimAdditionalServiceEnum additionalService) {
        this.additionalService = additionalService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleWorkspaceCustomerId")
    public String googleWorkspaceCustomerId;
    public DeviceClaim withGoogleWorkspaceCustomerId(String googleWorkspaceCustomerId) {
        this.googleWorkspaceCustomerId = googleWorkspaceCustomerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerCompanyId")
    public String ownerCompanyId;
    public DeviceClaim withOwnerCompanyId(String ownerCompanyId) {
        this.ownerCompanyId = ownerCompanyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resellerId")
    public String resellerId;
    public DeviceClaim withResellerId(String resellerId) {
        this.resellerId = resellerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sectionType")
    public DeviceClaimSectionTypeEnum sectionType;
    public DeviceClaim withSectionType(DeviceClaimSectionTypeEnum sectionType) {
        this.sectionType = sectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vacationModeExpireTime")
    public String vacationModeExpireTime;
    public DeviceClaim withVacationModeExpireTime(String vacationModeExpireTime) {
        this.vacationModeExpireTime = vacationModeExpireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vacationModeStartTime")
    public String vacationModeStartTime;
    public DeviceClaim withVacationModeStartTime(String vacationModeStartTime) {
        this.vacationModeStartTime = vacationModeStartTime;
        return this;
    }
}