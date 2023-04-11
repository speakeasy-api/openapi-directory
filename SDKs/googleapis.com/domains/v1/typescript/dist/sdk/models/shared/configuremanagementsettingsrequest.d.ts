import { SpeakeasyBase } from "../../../internal/utils";
import { ManagementSettingsInput } from "./managementsettings";
/**
 * Request for the `ConfigureManagementSettings` method.
 */
export declare class ConfigureManagementSettingsRequestInput extends SpeakeasyBase {
    /**
     * Defines renewal, billing, and transfer settings for a `Registration`.
     */
    managementSettings?: ManagementSettingsInput;
    /**
     * Required. The field mask describing which fields to update as a comma-separated list. For example, if only the transfer lock is being updated, the `update_mask` is `"transfer_lock_state"`.
     */
    updateMask?: string;
}
