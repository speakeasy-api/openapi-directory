import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1InputConfig } from "./googleclouddatalabelingv1beta1inputconfig";
/**
 * Request message for ImportData API.
 */
export declare class GoogleCloudDatalabelingV1beta1ImportDataRequest extends SpeakeasyBase {
    /**
     * The configuration of input data, including data type, location, etc.
     */
    inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;
    /**
     * Email of the user who started the import task and should be notified by email. If empty no notification will be sent.
     */
    userEmailAddress?: string;
}
