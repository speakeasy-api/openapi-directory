import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningConfig } from "./provisioningconfig";
/**
 * Request for SubmitProvisioningConfig.
 */
export declare class SubmitProvisioningConfigRequest extends SpeakeasyBase {
    /**
     * Optional. Email provided to send a confirmation with provisioning config to.
     */
    email?: string;
    /**
     * An provisioning configuration.
     */
    provisioningConfig?: ProvisioningConfig;
}
