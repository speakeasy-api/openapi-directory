import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig } from "./googlefirebaseappcheckv1recaptchaenterpriseconfig";
/**
 * Response message for the BatchGetRecaptchaEnterpriseConfigs method.
 */
export declare class GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse extends SpeakeasyBase {
    /**
     * RecaptchaEnterpriseConfigs retrieved.
     */
    configs?: GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig[];
}
