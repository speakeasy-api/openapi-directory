import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1betaUpdateServiceRequest } from "./googlefirebaseappcheckv1betaupdateservicerequest";
/**
 * Request message for the BatchUpdateServices method.
 */
export declare class GoogleFirebaseAppcheckV1betaBatchUpdateServicesRequest extends SpeakeasyBase {
    /**
     * Required. The request messages specifying the Services to update. A maximum of 100 objects can be updated in a batch.
     */
    requests?: GoogleFirebaseAppcheckV1betaUpdateServiceRequest[];
    /**
     * Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If this field is present, the `update_mask` field in the UpdateServiceRequest messages must all match this field, or the entire batch fails and no updates will be committed.
     */
    updateMask?: string;
}
