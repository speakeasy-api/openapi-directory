import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the scope of this BlockAction. Only applicable to devices that are company-owned.
 */
export declare enum BlockActionBlockScopeEnum {
    BlockScopeUnspecified = "BLOCK_SCOPE_UNSPECIFIED",
    BlockScopeWorkProfile = "BLOCK_SCOPE_WORK_PROFILE",
    BlockScopeDevice = "BLOCK_SCOPE_DEVICE"
}
/**
 * An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.
 */
export declare class BlockAction extends SpeakeasyBase {
    /**
     * Number of days the policy is non-compliant before the device or work profile is blocked. To block access immediately, set to 0. blockAfterDays must be less than wipeAfterDays.
     */
    blockAfterDays?: number;
    /**
     * Specifies the scope of this BlockAction. Only applicable to devices that are company-owned.
     */
    blockScope?: BlockActionBlockScopeEnum;
}
