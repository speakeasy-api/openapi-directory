import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The managed configurations template for the app, saved from the managed configurations iframe.
 */
export declare class ManagedConfigurationTemplate extends SpeakeasyBase {
    /**
     * Optional, a map containing configuration variables defined for the configuration.
     */
    configurationVariables?: Record<string, string>;
    /**
     * The ID of the managed configurations template.
     */
    templateId?: string;
}
