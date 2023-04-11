import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1Service } from "./googlefirebaseappcheckv1service";
/**
 * Request message for the UpdateService method as well as an individual update message for the BatchUpdateServices method.
 */
export declare class GoogleFirebaseAppcheckV1UpdateServiceRequest extends SpeakeasyBase {
    /**
     * The enforcement configuration for a Firebase service supported by App Check.
     */
    service?: GoogleFirebaseAppcheckV1Service;
    /**
     * Required. A comma-separated list of names of fields in the Service to update. Example: `enforcement_mode`.
     */
    updateMask?: string;
}
