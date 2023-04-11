import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningConfigInput } from "./provisioningconfig";
/**
 * Request for SubmitProvisioningConfig.
 */
export declare class SubmitProvisioningConfigRequestInput extends SpeakeasyBase {
    /**
     * Optional. Email provided to send a confirmation with provisioning config to.
     */
    email?: string;
    /**
     * A provisioning configuration.
     */
    provisioningConfig?: ProvisioningConfigInput;
}
