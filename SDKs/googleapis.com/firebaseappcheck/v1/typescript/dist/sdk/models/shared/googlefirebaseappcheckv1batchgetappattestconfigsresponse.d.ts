import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1AppAttestConfig } from "./googlefirebaseappcheckv1appattestconfig";
/**
 * Response message for the BatchGetAppAttestConfigs method.
 */
export declare class GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse extends SpeakeasyBase {
    /**
     * AppAttestConfigs retrieved.
     */
    configs?: GoogleFirebaseAppcheckV1AppAttestConfig[];
}
