import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaSafetyNetConfig } from "./googlefirebaseappcheckv1betasafetynetconfig";
/**
 * Response message for the BatchGetSafetyNetConfigs method.
 */
export declare class GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse extends SpeakeasyBase {
    /**
     * SafetyNetConfigs retrieved.
     */
    configs?: GoogleFirebaseAppcheckV1betaSafetyNetConfig[];
}
