import { SpeakeasyBase } from "../../../internal/utils";
import { Config } from "./config";
/**
 * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
 */
export declare enum ContainerThreatDetectionSettingsServiceEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED",
    Inherited = "INHERITED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * Resource capturing the settings for the Container Threat Detection service.
 */
export declare class ContainerThreatDetectionSettingsInput extends SpeakeasyBase {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
     */
    modules?: Record<string, Config>;
    /**
     * The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: ContainerThreatDetectionSettingsServiceEnablementStateEnum;
}
/**
 * Resource capturing the settings for the Container Threat Detection service.
 */
export declare class ContainerThreatDetectionSettings extends SpeakeasyBase {
    /**
     * The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's.
     */
    modules?: Record<string, Config>;
    /**
     * The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
     */
    name?: string;
    /**
     * Output only. The service account used by Container Threat Detection for scanning. Service accounts are scoped at the project level meaning this field will be empty at any level above a project.
     */
    serviceAccount?: string;
    /**
     * The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED.
     */
    serviceEnablementState?: ContainerThreatDetectionSettingsServiceEnablementStateEnum;
    /**
     * Output only. The time the settings were last updated.
     */
    updateTime?: string;
}
