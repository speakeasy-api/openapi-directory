package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagementSettingsInput
 * Defines renewal, billing, and transfer settings for a `Registration`.
**/
public class ManagementSettingsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferLockState")
    public ManagementSettingsTransferLockStateEnum transferLockState;
    public ManagementSettingsInput withTransferLockState(ManagementSettingsTransferLockStateEnum transferLockState) {
        this.transferLockState = transferLockState;
        return this;
    }
}