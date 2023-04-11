import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The add-on's required list of supported container types.
 */
export declare enum GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum {
    UnknownAddonType = "UNKNOWN_ADDON_TYPE",
    Gmail = "GMAIL",
    DataStudio = "DATA_STUDIO"
}
/**
 * An add-on entry point.
 */
export declare class GoogleAppsScriptTypeAddOnEntryPoint extends SpeakeasyBase {
    /**
     * The add-on's required list of supported container types.
     */
    addOnType?: GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum;
    /**
     * The add-on's optional description.
     */
    description?: string;
    /**
     * The add-on's optional help URL.
     */
    helpUrl?: string;
    /**
     * The add-on's required post install tip URL.
     */
    postInstallTipUrl?: string;
    /**
     * The add-on's optional report issue URL.
     */
    reportIssueUrl?: string;
    /**
     * The add-on's required title.
     */
    title?: string;
}
