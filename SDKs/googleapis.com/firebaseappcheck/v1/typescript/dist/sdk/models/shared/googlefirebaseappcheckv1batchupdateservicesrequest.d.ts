import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppcheckV1UpdateServiceRequest } from "./googlefirebaseappcheckv1updateservicerequest";
/**
 * Request message for the BatchUpdateServices method.
 */
export declare class GoogleFirebaseAppcheckV1BatchUpdateServicesRequest extends SpeakeasyBase {
    /**
     * Required. The request messages specifying the Services to update. A maximum of 100 objects can be updated in a batch.
     */
    requests?: GoogleFirebaseAppcheckV1UpdateServiceRequest[];
    /**
     * Optional. A comma-separated list of names of fields in the Services to update. Example: `display_name`. If the `update_mask` field is set in both this request and any of the UpdateServiceRequest messages, they must match or the entire batch fails and no updates will be committed.
     */
    updateMask?: string;
}
