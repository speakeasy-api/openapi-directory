import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Controls whether the domain can be transferred to another registrar.
 */
export declare enum ManagementSettingsTransferLockStateEnum {
    TransferLockStateUnspecified = "TRANSFER_LOCK_STATE_UNSPECIFIED",
    Unlocked = "UNLOCKED",
    Locked = "LOCKED"
}
/**
 * Defines renewal, billing, and transfer settings for a `Registration`.
 */
export declare class ManagementSettingsInput extends SpeakeasyBase {
    /**
     * Controls whether the domain can be transferred to another registrar.
     */
    transferLockState?: ManagementSettingsTransferLockStateEnum;
}
/**
 * Output only. The renewal method for this `Registration`.
 */
export declare enum ManagementSettingsRenewalMethodEnum {
    RenewalMethodUnspecified = "RENEWAL_METHOD_UNSPECIFIED",
    AutomaticRenewal = "AUTOMATIC_RENEWAL",
    ManualRenewal = "MANUAL_RENEWAL"
}
/**
 * Defines renewal, billing, and transfer settings for a `Registration`.
 */
export declare class ManagementSettings extends SpeakeasyBase {
    /**
     * Output only. The renewal method for this `Registration`.
     */
    renewalMethod?: ManagementSettingsRenewalMethodEnum;
    /**
     * Controls whether the domain can be transferred to another registrar.
     */
    transferLockState?: ManagementSettingsTransferLockStateEnum;
}
