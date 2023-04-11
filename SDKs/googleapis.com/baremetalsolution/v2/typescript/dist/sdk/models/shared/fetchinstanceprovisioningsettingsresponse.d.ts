import { SpeakeasyBase } from "../../../internal/utils";
import { OSImage } from "./osimage";
/**
 * Response with all provisioning settings.
 */
export declare class FetchInstanceProvisioningSettingsResponse extends SpeakeasyBase {
    /**
     * The OS images available.
     */
    images?: OSImage[];
}
