import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig } from "./googlecloudidentitytoolkitadminv2codeflowconfig";
/**
 * Additional config for SignInWithApple.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig extends SpeakeasyBase {
    /**
     * A list of Bundle ID's usable by this project
     */
    bundleIds?: string[];
    /**
     * Additional config for Apple for code flow.
     */
    codeFlowConfig?: GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig;
}
