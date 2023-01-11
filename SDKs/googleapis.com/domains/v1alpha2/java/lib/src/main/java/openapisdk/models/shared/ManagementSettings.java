package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagementSettings
 * Defines renewal, billing, and transfer settings for a `Registration`.
**/
public class ManagementSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalMethod")
    public ManagementSettingsRenewalMethodEnum renewalMethod;
    public ManagementSettings withRenewalMethod(ManagementSettingsRenewalMethodEnum renewalMethod) {
        this.renewalMethod = renewalMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferLockState")
    public ManagementSettingsTransferLockStateEnum transferLockState;
    public ManagementSettings withTransferLockState(ManagementSettingsTransferLockStateEnum transferLockState) {
        this.transferLockState = transferLockState;
        return this;
    }
}