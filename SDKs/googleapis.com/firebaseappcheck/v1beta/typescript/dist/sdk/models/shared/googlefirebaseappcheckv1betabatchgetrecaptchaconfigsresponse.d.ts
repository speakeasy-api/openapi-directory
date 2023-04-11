import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaRecaptchaConfig } from "./googlefirebaseappcheckv1betarecaptchaconfig";
/**
 * Response message for the BatchGetRecaptchaConfigs method.
 */
export declare class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse extends SpeakeasyBase {
    /**
     * RecaptchaConfigs retrieved.
     */
    configs?: GoogleFirebaseAppcheckV1betaRecaptchaConfig[];
}
