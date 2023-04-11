import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1Service } from "./googlefirebaseappcheckv1service";
/**
 * Response message for the BatchUpdateServices method.
 */
export declare class GoogleFirebaseAppcheckV1BatchUpdateServicesResponse extends SpeakeasyBase {
    /**
     * Service objects after the updates have been applied.
     */
    services?: GoogleFirebaseAppcheckV1Service[];
}
