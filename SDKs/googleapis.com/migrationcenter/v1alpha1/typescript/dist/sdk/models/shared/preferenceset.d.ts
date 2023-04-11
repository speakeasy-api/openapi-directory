import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualMachinePreferences } from "./virtualmachinepreferences";
/**
 * The preferences that apply to all assets in a given context.
 */
export declare class PreferenceSet extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the preference set was created.
     */
    createTime?: string;
    /**
     * A description of the preference set.
     */
    description?: string;
    /**
     * User-friendly display name. Maximum length is 63 characters.
     */
    displayName?: string;
    /**
     * Output only. Name of the preference set.
     */
    name?: string;
    /**
     * Output only. The timestamp when the preference set was last updated.
     */
    updateTime?: string;
    /**
     * VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.
     */
    virtualMachinePreferences?: VirtualMachinePreferences;
}
/**
 * The preferences that apply to all assets in a given context.
 */
export declare class PreferenceSetInput extends SpeakeasyBase {
    /**
     * A description of the preference set.
     */
    description?: string;
    /**
     * User-friendly display name. Maximum length is 63 characters.
     */
    displayName?: string;
    /**
     * VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.
     */
    virtualMachinePreferences?: VirtualMachinePreferences;
}
