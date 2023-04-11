import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of enablement for the module at its level of the resource hierarchy.
 */
export declare enum ConfigModuleEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED",
    Inherited = "INHERITED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * Configuration of a module.
 */
export declare class Config extends SpeakeasyBase {
    /**
     * The state of enablement for the module at its level of the resource hierarchy.
     */
    moduleEnablementState?: ConfigModuleEnablementStateEnum;
    /**
     * The configuration value for the module. The absence of this field implies its inheritance from the parent.
     */
    value?: Record<string, any>;
}
