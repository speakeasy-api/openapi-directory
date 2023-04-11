import { SpeakeasyBase } from "../../../internal/utils";
import { Config } from "./config";
/**
 * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
 */
export declare enum WebSecurityScannerSettingsServiceEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED",
    Inherited = "INHERITED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * Resource capturing the settings for the Web Security Scanner service.
 */
export declare class WebSecurityScannerSettings extends SpeakeasyBase {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
     */
    modules?: Record<string, Config>;
    /**
     * The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
     */
    name?: string;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: WebSecurityScannerSettingsServiceEnablementStateEnum;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string;
}
