import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaRecaptchaV3Config } from "./googlefirebaseappcheckv1betarecaptchav3config";
/**
 * Response message for the BatchGetRecaptchaV3Configs method.
 */
export declare class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse extends SpeakeasyBase {
    /**
     * RecaptchaV3Configs retrieved.
     */
    configs?: GoogleFirebaseAppcheckV1betaRecaptchaV3Config[];
}
