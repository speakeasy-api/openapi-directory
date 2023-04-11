import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaService } from "./googlefirebaseappcheckv1betaservice";
/**
 * Response message for the BatchUpdateServices method.
 */
export declare class GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse extends SpeakeasyBase {
    /**
     * Service objects after the updates have been applied.
     */
    services?: GoogleFirebaseAppcheckV1betaService[];
}
