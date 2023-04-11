import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementBinauthzVersion } from "./configmanagementbinauthzversion";
/**
 * The state of the binauthz webhook.
 */
export declare enum ConfigManagementBinauthzStateWebhookEnum {
    DeploymentStateUnspecified = "DEPLOYMENT_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installed = "INSTALLED",
    Error = "ERROR"
}
/**
 * State for Binauthz
 */
export declare class ConfigManagementBinauthzState extends SpeakeasyBase {
    /**
     * The version of binauthz.
     */
    version?: ConfigManagementBinauthzVersion;
    /**
     * The state of the binauthz webhook.
     */
    webhook?: ConfigManagementBinauthzStateWebhookEnum;
}
